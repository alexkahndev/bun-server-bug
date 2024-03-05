var pP = Object.create;
var {
  defineProperty: D3,
  getPrototypeOf: oP,
  getOwnPropertyNames: rP,
} = Object;
var nP = Object.prototype.hasOwnProperty;
var HZ = (PJ, s, LJ) => {
  LJ = PJ != null ? pP(oP(PJ)) : {};
  const ZQ =
    s || !PJ || !PJ.__esModule
      ? D3(LJ, "default", { value: PJ, enumerable: !0 })
      : LJ;
  for (let iJ of rP(PJ))
    if (!nP.call(ZQ, iJ)) D3(ZQ, iJ, { get: () => PJ[iJ], enumerable: !0 });
  return ZQ;
};
var b7 = (PJ, s) => () => (
  s || PJ((s = { exports: {} }).exports, s), s.exports
);
var s5 = b7((tP, p9) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var PJ = "18.2.0",
      s = Symbol.for("react.element"),
      LJ = Symbol.for("react.portal"),
      ZQ = Symbol.for("react.fragment"),
      iJ = Symbol.for("react.strict_mode"),
      $Q = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      cZ = Symbol.for("react.context"),
      KJ = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      XQ = Symbol.for("react.suspense_list"),
      m = Symbol.for("react.memo"),
      OJ = Symbol.for("react.lazy"),
      c = Symbol.for("react.offscreen"),
      xJ = Symbol.iterator,
      iZ = "@@iterator";
    function W0(W) {
      if (W === null || typeof W !== "object") return null;
      var V = (xJ && W[xJ]) || W[iZ];
      if (typeof V === "function") return V;
      return null;
    }
    var TQ = { current: null },
      wJ = { transition: null },
      JJ = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      rJ = { current: null },
      AJ = {},
      HQ = null;
    function _J(W) {
      HQ = W;
    }
    (AJ.setExtraStackFrame = function (W) {
      HQ = W;
    }),
      (AJ.getCurrentStack = null),
      (AJ.getStackAddendum = function () {
        var W = "";
        if (HQ) W += HQ;
        var V = AJ.getCurrentStack;
        if (V) W += V() || "";
        return W;
      });
    var H0 = !1,
      GQ = !1,
      SQ = !1,
      jQ = !1,
      uJ = !1,
      QJ = {
        ReactCurrentDispatcher: TQ,
        ReactCurrentBatchConfig: wJ,
        ReactCurrentOwner: rJ,
      };
    (QJ.ReactDebugCurrentFrame = AJ), (QJ.ReactCurrentActQueue = JJ);
    function aJ(W) {
      {
        for (
          var V = arguments.length, A = new Array(V > 1 ? V - 1 : 0), L = 1;
          L < V;
          L++
        )
          A[L - 1] = arguments[L];
        MZ("warn", W, A);
      }
    }
    function e(W) {
      {
        for (
          var V = arguments.length, A = new Array(V > 1 ? V - 1 : 0), L = 1;
          L < V;
          L++
        )
          A[L - 1] = arguments[L];
        MZ("error", W, A);
      }
    }
    function MZ(W, V, A) {
      {
        var L = QJ.ReactDebugCurrentFrame,
          S = L.getStackAddendum();
        if (S !== "") (V += "%s"), (A = A.concat([S]));
        var i = A.map(function (u) {
          return String(u);
        });
        i.unshift("Warning: " + V),
          Function.prototype.apply.call(console[W], console, i);
      }
    }
    var C0 = {};
    function hQ(W, V) {
      {
        var A = W.constructor,
          L = (A && (A.displayName || A.name)) || "ReactClass",
          S = L + "." + V;
        if (C0[S]) return;
        e(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          V,
          L,
        ),
          (C0[S] = !0);
      }
    }
    var z0 = {
        isMounted: function (W) {
          return !1;
        },
        enqueueForceUpdate: function (W, V, A) {
          hQ(W, "forceUpdate");
        },
        enqueueReplaceState: function (W, V, A, L) {
          hQ(W, "replaceState");
        },
        enqueueSetState: function (W, V, A, L) {
          hQ(W, "setState");
        },
      },
      eQ = Object.assign,
      aZ = {};
    Object.freeze(aZ);
    function JZ(W, V, A) {
      (this.props = W),
        (this.context = V),
        (this.refs = aZ),
        (this.updater = A || z0);
    }
    (JZ.prototype.isReactComponent = {}),
      (JZ.prototype.setState = function (W, V) {
        if (typeof W !== "object" && typeof W !== "function" && W != null)
          throw new Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, W, V, "setState");
      }),
      (JZ.prototype.forceUpdate = function (W) {
        this.updater.enqueueForceUpdate(this, W, "forceUpdate");
      });
    {
      var FZ = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        },
        E1 = function (W, V) {
          Object.defineProperty(JZ.prototype, W, {
            get: function () {
              aJ(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                V[0],
                V[1],
              );
              return;
            },
          });
        };
      for (var v0 in FZ) if (FZ.hasOwnProperty(v0)) E1(v0, FZ[v0]);
    }
    function pZ() {}
    pZ.prototype = JZ.prototype;
    function M0(W, V, A) {
      (this.props = W),
        (this.context = V),
        (this.refs = aZ),
        (this.updater = A || z0);
    }
    var kZ = (M0.prototype = new pZ());
    (kZ.constructor = M0), eQ(kZ, JZ.prototype), (kZ.isPureReactComponent = !0);
    function VZ() {
      var W = { current: null };
      return Object.seal(W), W;
    }
    var oZ = Array.isArray;
    function QZ(W) {
      return oZ(W);
    }
    function gZ(W) {
      {
        var V = typeof Symbol === "function" && Symbol.toStringTag,
          A = (V && W[Symbol.toStringTag]) || W.constructor.name || "Object";
        return A;
      }
    }
    function fQ(W) {
      try {
        return uQ(W), !1;
      } catch (V) {
        return !0;
      }
    }
    function uQ(W) {
      return "" + W;
    }
    function KQ(W) {
      if (fQ(W))
        return (
          e(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            gZ(W),
          ),
          uQ(W)
        );
    }
    function dQ(W, V, A) {
      var L = W.displayName;
      if (L) return L;
      var S = V.displayName || V.name || "";
      return S !== "" ? A + "(" + S + ")" : A;
    }
    function sQ(W) {
      return W.displayName || "Context";
    }
    function zQ(W) {
      if (W == null) return null;
      if (typeof W.tag === "number")
        e(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof W === "function") return W.displayName || W.name || null;
      if (typeof W === "string") return W;
      switch (W) {
        case ZQ:
          return "Fragment";
        case LJ:
          return "Portal";
        case $Q:
          return "Profiler";
        case iJ:
          return "StrictMode";
        case a:
          return "Suspense";
        case XQ:
          return "SuspenseList";
      }
      if (typeof W === "object")
        switch (W.$$typeof) {
          case cZ:
            var V = W;
            return sQ(V) + ".Consumer";
          case M:
            var A = W;
            return sQ(A._context) + ".Provider";
          case KJ:
            return dQ(W, W.render, "ForwardRef");
          case m:
            var L = W.displayName || null;
            if (L !== null) return L;
            return zQ(W.type) || "Memo";
          case OJ: {
            var S = W,
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
    var qZ = Object.prototype.hasOwnProperty,
      R1 = { key: !0, ref: !0, __self: !0, __source: !0 },
      L1,
      rZ,
      ZZ;
    ZZ = {};
    function nZ(W) {
      if (qZ.call(W, "ref")) {
        var V = Object.getOwnPropertyDescriptor(W, "ref").get;
        if (V && V.isReactWarning) return !1;
      }
      return W.ref !== void 0;
    }
    function OZ(W) {
      if (qZ.call(W, "key")) {
        var V = Object.getOwnPropertyDescriptor(W, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return W.key !== void 0;
    }
    function tZ(W, V) {
      var A = function () {
        if (!L1)
          (L1 = !0),
            e(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(W, "key", { get: A, configurable: !0 });
    }
    function MQ(W, V) {
      var A = function () {
        if (!rZ)
          (rZ = !0),
            e(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(W, "ref", { get: A, configurable: !0 });
    }
    function eZ(W) {
      if (
        typeof W.ref === "string" &&
        rJ.current &&
        W.__self &&
        rJ.current.stateNode !== W.__self
      ) {
        var V = zQ(rJ.current.type);
        if (!ZZ[V])
          e(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            V,
            W.ref,
          ),
            (ZZ[V] = !0);
      }
    }
    var V0 = function (W, V, A, L, S, i, u) {
      var BJ = { $$typeof: s, type: W, key: V, ref: A, props: u, _owner: i };
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
    function a0(W, V, A) {
      var L,
        S = {},
        i = null,
        u = null,
        BJ = null,
        EJ = null;
      if (V != null) {
        if (nZ(V)) (u = V.ref), eZ(V);
        if (OZ(V)) KQ(V.key), (i = "" + V.key);
        (BJ = V.__self === void 0 ? null : V.__self),
          (EJ = V.__source === void 0 ? null : V.__source);
        for (L in V) if (qZ.call(V, L) && !R1.hasOwnProperty(L)) S[L] = V[L];
      }
      var bJ = arguments.length - 2;
      if (bJ === 1) S.children = A;
      else if (bJ > 1) {
        var yJ = Array(bJ);
        for (var lJ = 0; lJ < bJ; lJ++) yJ[lJ] = arguments[lJ + 2];
        if (Object.freeze) Object.freeze(yJ);
        S.children = yJ;
      }
      if (W && W.defaultProps) {
        var pJ = W.defaultProps;
        for (L in pJ) if (S[L] === void 0) S[L] = pJ[L];
      }
      if (i || u) {
        var JQ =
          typeof W === "function" ? W.displayName || W.name || "Unknown" : W;
        if (i) tZ(S, JQ);
        if (u) MQ(S, JQ);
      }
      return V0(W, i, u, BJ, EJ, rJ.current, S);
    }
    function v(W, V) {
      var A = V0(W.type, V, W.ref, W._self, W._source, W._owner, W.props);
      return A;
    }
    function y(W, V, A) {
      if (W === null || W === void 0)
        throw new Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            W +
            ".",
        );
      var L,
        S = eQ({}, W.props),
        i = W.key,
        u = W.ref,
        BJ = W._self,
        EJ = W._source,
        bJ = W._owner;
      if (V != null) {
        if (nZ(V)) (u = V.ref), (bJ = rJ.current);
        if (OZ(V)) KQ(V.key), (i = "" + V.key);
        var yJ;
        if (W.type && W.type.defaultProps) yJ = W.type.defaultProps;
        for (L in V)
          if (qZ.call(V, L) && !R1.hasOwnProperty(L))
            if (V[L] === void 0 && yJ !== void 0) S[L] = yJ[L];
            else S[L] = V[L];
      }
      var lJ = arguments.length - 2;
      if (lJ === 1) S.children = A;
      else if (lJ > 1) {
        var pJ = Array(lJ);
        for (var JQ = 0; JQ < lJ; JQ++) pJ[JQ] = arguments[JQ + 2];
        S.children = pJ;
      }
      return V0(W.type, i, u, BJ, EJ, bJ, S);
    }
    function UJ(W) {
      return typeof W === "object" && W !== null && W.$$typeof === s;
    }
    var vJ = ".",
      dJ = ":";
    function CQ(W) {
      var V = /[=:]/g,
        A = { "=": "=0", ":": "=2" },
        L = W.replace(V, function (S) {
          return A[S];
        });
      return "$" + L;
    }
    var BQ = !1,
      IZ = /\/+/g;
    function sJ(W) {
      return W.replace(IZ, "$&/");
    }
    function DZ(W, V) {
      if (typeof W === "object" && W !== null && W.key != null)
        return KQ(W.key), CQ("" + W.key);
      return V.toString(36);
    }
    function mJ(W, V, A, L, S) {
      var i = typeof W;
      if (i === "undefined" || i === "boolean") W = null;
      var u = !1;
      if (W === null) u = !0;
      else
        switch (i) {
          case "string":
          case "number":
            u = !0;
            break;
          case "object":
            switch (W.$$typeof) {
              case s:
              case LJ:
                u = !0;
            }
        }
      if (u) {
        var BJ = W,
          EJ = S(BJ),
          bJ = L === "" ? vJ + DZ(BJ, 0) : L;
        if (QZ(EJ)) {
          var yJ = "";
          if (bJ != null) yJ = sJ(bJ) + "/";
          mJ(EJ, V, yJ, "", function (B6) {
            return B6;
          });
        } else if (EJ != null) {
          if (UJ(EJ)) {
            if (EJ.key && (!BJ || BJ.key !== EJ.key)) KQ(EJ.key);
            EJ = v(
              EJ,
              A +
                (EJ.key && (!BJ || BJ.key !== EJ.key)
                  ? sJ("" + EJ.key) + "/"
                  : "") +
                bJ,
            );
          }
          V.push(EJ);
        }
        return 1;
      }
      var lJ,
        pJ,
        JQ = 0,
        PQ = L === "" ? vJ : L + dJ;
      if (QZ(W))
        for (var p4 = 0; p4 < W.length; p4++)
          (lJ = W[p4]), (pJ = PQ + DZ(lJ, p4)), (JQ += mJ(lJ, V, A, pJ, S));
      else {
        var AQ = W0(W);
        if (typeof AQ === "function") {
          var X6 = W;
          if (AQ === X6.entries) {
            if (!BQ)
              aJ(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            BQ = !0;
          }
          var c7 = AQ.call(X6),
            G6,
            GX = 0;
          while (!(G6 = c7.next()).done)
            (lJ = G6.value),
              (pJ = PQ + DZ(lJ, GX++)),
              (JQ += mJ(lJ, V, A, pJ, S));
        } else if (i === "object") {
          var n0 = String(W);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (n0 === "[object Object]"
                ? "object with keys {" + Object.keys(W).join(", ") + "}"
                : n0) +
              "). If you meant to render a collection of children, use an array instead.",
          );
        }
      }
      return JQ;
    }
    function nJ(W, V, A) {
      if (W == null) return W;
      var L = [],
        S = 0;
      return (
        mJ(W, L, "", "", function (i) {
          return V.call(A, i, S++);
        }),
        L
      );
    }
    function Z4(W) {
      var V = 0;
      return (
        nJ(W, function () {
          V++;
        }),
        V
      );
    }
    function F1(W, V, A) {
      nJ(
        W,
        function () {
          V.apply(this, arguments);
        },
        A,
      );
    }
    function X4(W) {
      return (
        nJ(W, function (V) {
          return V;
        }) || []
      );
    }
    function f4(W) {
      if (!UJ(W))
        throw new Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return W;
    }
    function y5(W) {
      var V = {
        $$typeof: cZ,
        _currentValue: W,
        _currentValue2: W,
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
        var i = { $$typeof: cZ, _context: V };
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
                aJ(
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
    var q0 = -1,
      p0 = 0,
      u4 = 1,
      d4 = 2;
    function G4(W) {
      if (W._status === q0) {
        var V = W._result,
          A = V();
        if (
          (A.then(
            function (i) {
              if (W._status === p0 || W._status === q0) {
                var u = W;
                (u._status = u4), (u._result = i);
              }
            },
            function (i) {
              if (W._status === p0 || W._status === q0) {
                var u = W;
                (u._status = d4), (u._result = i);
              }
            },
          ),
          W._status === q0)
        ) {
          var L = W;
          (L._status = p0), (L._result = A);
        }
      }
      if (W._status === u4) {
        var S = W._result;
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
      } else throw W._result;
    }
    function N0(W) {
      var V = { _status: q0, _result: W },
        A = { $$typeof: OJ, _payload: V, _init: G4 };
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
    function q(W) {
      {
        if (W != null && W.$$typeof === m)
          e(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).",
          );
        else if (typeof W !== "function")
          e(
            "forwardRef requires a render function but was given %s.",
            W === null ? "null" : typeof W,
          );
        else if (W.length !== 0 && W.length !== 2)
          e(
            "forwardRef render functions accept exactly two parameters: props and ref. %s",
            W.length === 1
              ? "Did you forget to use the ref parameter?"
              : "Any additional parameter will be undefined.",
          );
        if (W != null) {
          if (W.defaultProps != null || W.propTypes != null)
            e(
              "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?",
            );
        }
      }
      var V = { $$typeof: KJ, render: W };
      {
        var A;
        Object.defineProperty(V, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return A;
          },
          set: function (L) {
            if (((A = L), !W.name && !W.displayName)) W.displayName = L;
          },
        });
      }
      return V;
    }
    var w = Symbol.for("react.module.reference");
    function N(W) {
      if (typeof W === "string" || typeof W === "function") return !0;
      if (
        W === ZQ ||
        W === $Q ||
        uJ ||
        W === iJ ||
        W === a ||
        W === XQ ||
        jQ ||
        W === c ||
        H0 ||
        GQ ||
        SQ
      )
        return !0;
      if (typeof W === "object" && W !== null) {
        if (
          W.$$typeof === OJ ||
          W.$$typeof === m ||
          W.$$typeof === M ||
          W.$$typeof === cZ ||
          W.$$typeof === KJ ||
          W.$$typeof === w ||
          W.getModuleId !== void 0
        )
          return !0;
      }
      return !1;
    }
    function p(W, V) {
      if (!N(W))
        e(
          "memo: The first argument must be a component. Instead received: %s",
          W === null ? "null" : typeof W,
        );
      var A = { $$typeof: m, type: W, compare: V === void 0 ? null : V };
      {
        var L;
        Object.defineProperty(A, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return L;
          },
          set: function (S) {
            if (((L = S), !W.name && !W.displayName)) W.displayName = S;
          },
        });
      }
      return A;
    }
    function n() {
      var W = TQ.current;
      if (W === null)
        e(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
        );
      return W;
    }
    function SJ(W) {
      var V = n();
      if (W._context !== void 0) {
        var A = W._context;
        if (A.Consumer === W)
          e(
            "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?",
          );
        else if (A.Provider === W)
          e(
            "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?",
          );
      }
      return V.useContext(W);
    }
    function WJ(W) {
      var V = n();
      return V.useState(W);
    }
    function HJ(W, V, A) {
      var L = n();
      return L.useReducer(W, V, A);
    }
    function UQ(W) {
      var V = n();
      return V.useRef(W);
    }
    function hJ(W, V) {
      var A = n();
      return A.useEffect(W, V);
    }
    function DJ(W, V) {
      var A = n();
      return A.useInsertionEffect(W, V);
    }
    function XZ(W, V) {
      var A = n();
      return A.useLayoutEffect(W, V);
    }
    function b0(W, V) {
      var A = n();
      return A.useCallback(W, V);
    }
    function B4(W, V) {
      var A = n();
      return A.useMemo(W, V);
    }
    function TZ(W, V, A) {
      var L = n();
      return L.useImperativeHandle(W, V, A);
    }
    function o9(W, V) {
      {
        var A = n();
        return A.useDebugValue(W, V);
      }
    }
    function r9() {
      var W = n();
      return W.useTransition();
    }
    function g7(W) {
      var V = n();
      return V.useDeferredValue(W);
    }
    function n9() {
      var W = n();
      return W.useId();
    }
    function o0(W, V, A) {
      var L = n();
      return L.useSyncExternalStore(W, V, A);
    }
    var MJ = 0,
      I1,
      l5,
      c5,
      i5,
      a5,
      p5,
      o5;
    function r5() {}
    r5.__reactDisabledLog = !0;
    function T7() {
      {
        if (MJ === 0) {
          (I1 = console.log),
            (l5 = console.info),
            (c5 = console.warn),
            (i5 = console.error),
            (a5 = console.group),
            (p5 = console.groupCollapsed),
            (o5 = console.groupEnd);
          var W = { configurable: !0, enumerable: !0, value: r5, writable: !0 };
          Object.defineProperties(console, {
            info: W,
            log: W,
            warn: W,
            error: W,
            group: W,
            groupCollapsed: W,
            groupEnd: W,
          });
        }
        MJ++;
      }
    }
    function t9() {
      {
        if ((MJ--, MJ === 0)) {
          var W = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: eQ({}, W, { value: I1 }),
            info: eQ({}, W, { value: l5 }),
            warn: eQ({}, W, { value: c5 }),
            error: eQ({}, W, { value: i5 }),
            group: eQ({}, W, { value: a5 }),
            groupCollapsed: eQ({}, W, { value: p5 }),
            groupEnd: eQ({}, W, { value: o5 }),
          });
        }
        if (MJ < 0)
          e(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var n5 = QJ.ReactCurrentDispatcher,
      U4;
    function x1(W, V, A) {
      {
        if (U4 === void 0)
          try {
            throw Error();
          } catch (S) {
            var L = S.stack.trim().match(/\n( *(at )?)/);
            U4 = (L && L[1]) || "";
          }
        return "\n" + U4 + W;
      }
    }
    var J0 = !1,
      w1;
    {
      var s4 = typeof WeakMap === "function" ? WeakMap : Map;
      w1 = new s4();
    }
    function h7(W, V) {
      if (!W || J0) return "";
      {
        var A = w1.get(W);
        if (A !== void 0) return A;
      }
      var L;
      J0 = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      (i = n5.current), (n5.current = null), T7();
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
            Reflect.construct(W, [], u);
          } else {
            try {
              u.call();
            } catch (PQ) {
              L = PQ;
            }
            W.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (PQ) {
            L = PQ;
          }
          W();
        }
      } catch (PQ) {
        if (PQ && L && typeof PQ.stack === "string") {
          var BJ = PQ.stack.split("\n"),
            EJ = L.stack.split("\n"),
            bJ = BJ.length - 1,
            yJ = EJ.length - 1;
          while (bJ >= 1 && yJ >= 0 && BJ[bJ] !== EJ[yJ]) yJ--;
          for (; bJ >= 1 && yJ >= 0; bJ--, yJ--)
            if (BJ[bJ] !== EJ[yJ]) {
              if (bJ !== 1 || yJ !== 1)
                do
                  if ((bJ--, yJ--, yJ < 0 || BJ[bJ] !== EJ[yJ])) {
                    var lJ = "\n" + BJ[bJ].replace(" at new ", " at ");
                    if (W.displayName && lJ.includes("<anonymous>"))
                      lJ = lJ.replace("<anonymous>", W.displayName);
                    if (typeof W === "function") w1.set(W, lJ);
                    return lJ;
                  }
                while (bJ >= 1 && yJ >= 0);
              break;
            }
        }
      } finally {
        (J0 = !1), (n5.current = i), t9(), (Error.prepareStackTrace = S);
      }
      var pJ = W ? W.displayName || W.name : "",
        JQ = pJ ? x1(pJ) : "";
      if (typeof W === "function") w1.set(W, JQ);
      return JQ;
    }
    function t5(W, V, A) {
      return h7(W, !1);
    }
    function e9(W) {
      var V = W.prototype;
      return !!(V && V.isReactComponent);
    }
    function _1(W, V, A) {
      if (W == null) return "";
      if (typeof W === "function") return h7(W, e9(W));
      if (typeof W === "string") return x1(W);
      switch (W) {
        case a:
          return x1("Suspense");
        case XQ:
          return x1("SuspenseList");
      }
      if (typeof W === "object")
        switch (W.$$typeof) {
          case KJ:
            return t5(W.render);
          case m:
            return _1(W.type, V, A);
          case OJ: {
            var L = W,
              S = L._payload,
              i = L._init;
            try {
              return _1(i(S), V, A);
            } catch (u) {}
          }
        }
      return "";
    }
    var f7 = {},
      m4 = QJ.ReactDebugCurrentFrame;
    function y4(W) {
      if (W) {
        var V = W._owner,
          A = _1(W.type, W._source, V ? V.type : null);
        m4.setExtraStackFrame(A);
      } else m4.setExtraStackFrame(null);
    }
    function u7(W, V, A, L, S) {
      {
        var i = Function.call.bind(qZ);
        for (var u in W)
          if (i(W, u)) {
            var BJ = void 0;
            try {
              if (typeof W[u] !== "function") {
                var EJ = Error(
                  (L || "React class") +
                    ": " +
                    A +
                    " type `" +
                    u +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof W[u] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((EJ.name = "Invariant Violation"), EJ);
              }
              BJ = W[u](
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
              y4(S),
                e(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  L || "React class",
                  A,
                  u,
                  typeof BJ,
                ),
                y4(null);
            if (BJ instanceof Error && !(BJ.message in f7))
              (f7[BJ.message] = !0),
                y4(S),
                e("Failed %s type: %s", A, BJ.message),
                y4(null);
          }
      }
    }
    function S1(W) {
      if (W) {
        var V = W._owner,
          A = _1(W.type, W._source, V ? V.type : null);
        _J(A);
      } else _J(null);
    }
    var e5 = !1;
    function fJ() {
      if (rJ.current) {
        var W = zQ(rJ.current.type);
        if (W) return "\n\nCheck the render method of `" + W + "`.";
      }
      return "";
    }
    function JX(W) {
      if (W !== void 0) {
        var V = W.fileName.replace(/^.*[\\\/]/, ""),
          A = W.lineNumber;
        return "\n\nCheck your code at " + V + ":" + A + ".";
      }
      return "";
    }
    function d7(W) {
      if (W !== null && W !== void 0) return JX(W.__source);
      return "";
    }
    var YJ = {};
    function s7(W) {
      var V = fJ();
      if (!V) {
        var A = typeof W === "string" ? W : W.displayName || W.name;
        if (A) V = "\n\nCheck the top-level render call using <" + A + ">.";
      }
      return V;
    }
    function GZ(W, V) {
      if (!W._store || W._store.validated || W.key != null) return;
      W._store.validated = !0;
      var A = s7(V);
      if (YJ[A]) return;
      YJ[A] = !0;
      var L = "";
      if (W && W._owner && W._owner !== rJ.current)
        L = " It was passed a child from " + zQ(W._owner.type) + ".";
      S1(W),
        e(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          A,
          L,
        ),
        S1(null);
    }
    function C1(W, V) {
      if (typeof W !== "object") return;
      if (QZ(W))
        for (var A = 0; A < W.length; A++) {
          var L = W[A];
          if (UJ(L)) GZ(L, V);
        }
      else if (UJ(W)) {
        if (W._store) W._store.validated = !0;
      } else if (W) {
        var S = W0(W);
        if (typeof S === "function") {
          if (S !== W.entries) {
            var i = S.call(W),
              u;
            while (!(u = i.next()).done) if (UJ(u.value)) GZ(u.value, V);
          }
        }
      }
    }
    function v1(W) {
      {
        var V = W.type;
        if (V === null || V === void 0 || typeof V === "string") return;
        var A;
        if (typeof V === "function") A = V.propTypes;
        else if (
          typeof V === "object" &&
          (V.$$typeof === KJ || V.$$typeof === m)
        )
          A = V.propTypes;
        else return;
        if (A) {
          var L = zQ(V);
          u7(A, W.props, "prop", L, W);
        } else if (V.PropTypes !== void 0 && !e5) {
          e5 = !0;
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
    function QX(W) {
      {
        var V = Object.keys(W.props);
        for (var A = 0; A < V.length; A++) {
          var L = V[A];
          if (L !== "children" && L !== "key") {
            S1(W),
              e(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                L,
              ),
              S1(null);
            break;
          }
        }
        if (W.ref !== null)
          S1(W),
            e("Invalid attribute `ref` supplied to `React.Fragment`."),
            S1(null);
      }
    }
    function vQ(W, V, A) {
      var L = N(W);
      if (!L) {
        var S = "";
        if (
          W === void 0 ||
          (typeof W === "object" && W !== null && Object.keys(W).length === 0)
        )
          S +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        var i = d7(V);
        if (i) S += i;
        else S += fJ();
        var u;
        if (W === null) u = "null";
        else if (QZ(W)) u = "array";
        else if (W !== void 0 && W.$$typeof === s)
          (u = "<" + (zQ(W.type) || "Unknown") + " />"),
            (S =
              " Did you accidentally export a JSX literal instead of a component?");
        else u = typeof W;
        e(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          u,
          S,
        );
      }
      var BJ = a0.apply(this, arguments);
      if (BJ == null) return BJ;
      if (L) for (var EJ = 2; EJ < arguments.length; EJ++) C1(arguments[EJ], W);
      if (W === ZQ) QX(BJ);
      else v1(BJ);
      return BJ;
    }
    var eJ = !1;
    function ZX(W) {
      var V = vQ.bind(null, W);
      V.type = W;
      {
        if (!eJ)
          (eJ = !0),
            aJ(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.",
            );
        Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function () {
            return (
              aJ(
                "Factory.type is deprecated. Access the class directly before passing it to createFactory.",
              ),
              Object.defineProperty(this, "type", { value: W }),
              W
            );
          },
        });
      }
      return V;
    }
    function Q0(W, V, A) {
      var L = y.apply(this, arguments);
      for (var S = 2; S < arguments.length; S++) C1(arguments[S], L.type);
      return v1(L), L;
    }
    function xZ(W, V) {
      var A = wJ.transition;
      wJ.transition = {};
      var L = wJ.transition;
      wJ.transition._updatedFibers = new Set();
      try {
        W();
      } finally {
        if (((wJ.transition = A), A === null && L._updatedFibers)) {
          var S = L._updatedFibers.size;
          if (S > 10)
            aJ(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          L._updatedFibers.clear();
        }
      }
    }
    var O0 = !1,
      l4 = null;
    function J6(W) {
      if (l4 === null)
        try {
          var V = ("require" + Math.random()).slice(0, 7),
            A = p9 && p9[V];
          l4 = A.call(p9, "timers").setImmediate;
        } catch (L) {
          l4 = function (S) {
            if (O0 === !1) {
              if (((O0 = !0), typeof MessageChannel === "undefined"))
                e(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                );
            }
            var i = new MessageChannel();
            (i.port1.onmessage = S), i.port2.postMessage(void 0);
          };
        }
      return l4(W);
    }
    var r0 = 0,
      Q6 = !1;
    function XX(W) {
      {
        var V = r0;
        if ((r0++, JJ.current === null)) JJ.current = [];
        var A = JJ.isBatchingLegacy,
          L;
        try {
          if (
            ((JJ.isBatchingLegacy = !0),
            (L = W()),
            !A && JJ.didScheduleLegacyUpdate)
          ) {
            var S = JJ.current;
            if (S !== null) (JJ.didScheduleLegacyUpdate = !1), i4(S);
          }
        } catch (pJ) {
          throw (c4(V), pJ);
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
              then: function (pJ, JQ) {
                (u = !0),
                  i.then(
                    function (PQ) {
                      if ((c4(V), r0 === 0)) Z6(PQ, pJ, JQ);
                      else pJ(PQ);
                    },
                    function (PQ) {
                      c4(V), JQ(PQ);
                    },
                  );
              },
            };
          if (!Q6 && typeof Promise !== "undefined")
            Promise.resolve()
              .then(function () {})
              .then(function () {
                if (!u)
                  (Q6 = !0),
                    e(
                      "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                    );
              });
          return BJ;
        } else {
          var EJ = L;
          if ((c4(V), r0 === 0)) {
            var bJ = JJ.current;
            if (bJ !== null) i4(bJ), (JJ.current = null);
            var yJ = {
              then: function (pJ, JQ) {
                if (JJ.current === null) (JJ.current = []), Z6(EJ, pJ, JQ);
                else pJ(EJ);
              },
            };
            return yJ;
          } else {
            var lJ = {
              then: function (pJ, JQ) {
                pJ(EJ);
              },
            };
            return lJ;
          }
        }
      }
    }
    function c4(W) {
      {
        if (W !== r0 - 1)
          e(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
          );
        r0 = W;
      }
    }
    function Z6(W, V, A) {
      {
        var L = JJ.current;
        if (L !== null)
          try {
            i4(L),
              J6(function () {
                if (L.length === 0) (JJ.current = null), V(W);
                else Z6(W, V, A);
              });
          } catch (S) {
            A(S);
          }
        else V(W);
      }
    }
    var N1 = !1;
    function i4(W) {
      if (!N1) {
        N1 = !0;
        var V = 0;
        try {
          for (; V < W.length; V++) {
            var A = W[V];
            do A = A(!0);
            while (A !== null);
          }
          W.length = 0;
        } catch (L) {
          throw ((W = W.slice(V + 1)), L);
        } finally {
          N1 = !1;
        }
      }
    }
    var a4 = vQ,
      m7 = Q0,
      y7 = ZX,
      l7 = { map: nJ, forEach: F1, count: Z4, toArray: X4, only: f4 };
    if (
      ((tP.Children = l7),
      (tP.Component = JZ),
      (tP.Fragment = ZQ),
      (tP.Profiler = $Q),
      (tP.PureComponent = M0),
      (tP.StrictMode = iJ),
      (tP.Suspense = a),
      (tP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QJ),
      (tP.cloneElement = m7),
      (tP.createContext = y5),
      (tP.createElement = a4),
      (tP.createFactory = y7),
      (tP.createRef = VZ),
      (tP.forwardRef = q),
      (tP.isValidElement = UJ),
      (tP.lazy = N0),
      (tP.memo = p),
      (tP.startTransition = xZ),
      (tP.unstable_act = XX),
      (tP.useCallback = b0),
      (tP.useContext = SJ),
      (tP.useDebugValue = o9),
      (tP.useDeferredValue = g7),
      (tP.useEffect = hJ),
      (tP.useId = n9),
      (tP.useImperativeHandle = TZ),
      (tP.useInsertionEffect = DJ),
      (tP.useLayoutEffect = XZ),
      (tP.useMemo = B4),
      (tP.useReducer = HJ),
      (tP.useRef = UQ),
      (tP.useState = WJ),
      (tP.useSyncExternalStore = o0),
      (tP.useTransition = r9),
      (tP.version = PJ),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var $3 = b7((eP) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var PJ = !1,
      s = !1,
      LJ = 5;
    function ZQ(v, y) {
      var UJ = v.length;
      v.push(y), M(v, y, UJ);
    }
    function iJ(v) {
      return v.length === 0 ? null : v[0];
    }
    function $Q(v) {
      if (v.length === 0) return null;
      var y = v[0],
        UJ = v.pop();
      if (UJ !== y) (v[0] = UJ), cZ(v, UJ, 0);
      return y;
    }
    function M(v, y, UJ) {
      var vJ = UJ;
      while (vJ > 0) {
        var dJ = (vJ - 1) >>> 1,
          CQ = v[dJ];
        if (KJ(CQ, y) > 0) (v[dJ] = y), (v[vJ] = CQ), (vJ = dJ);
        else return;
      }
    }
    function cZ(v, y, UJ) {
      var vJ = UJ,
        dJ = v.length,
        CQ = dJ >>> 1;
      while (vJ < CQ) {
        var BQ = (vJ + 1) * 2 - 1,
          IZ = v[BQ],
          sJ = BQ + 1,
          DZ = v[sJ];
        if (KJ(IZ, y) < 0)
          if (sJ < dJ && KJ(DZ, IZ) < 0) (v[vJ] = DZ), (v[sJ] = y), (vJ = sJ);
          else (v[vJ] = IZ), (v[BQ] = y), (vJ = BQ);
        else if (sJ < dJ && KJ(DZ, y) < 0) (v[vJ] = DZ), (v[sJ] = y), (vJ = sJ);
        else return;
      }
    }
    function KJ(v, y) {
      var UJ = v.sortIndex - y.sortIndex;
      return UJ !== 0 ? UJ : v.id - y.id;
    }
    var a = 1,
      XQ = 2,
      m = 3,
      OJ = 4,
      c = 5;
    function xJ(v, y) {}
    var iZ =
      typeof performance === "object" && typeof performance.now === "function";
    if (iZ) {
      var W0 = performance;
      eP.unstable_now = function () {
        return W0.now();
      };
    } else {
      var TQ = Date,
        wJ = TQ.now();
      eP.unstable_now = function () {
        return TQ.now() - wJ;
      };
    }
    var JJ = 1073741823,
      rJ = -1,
      AJ = 250,
      HQ = 5000,
      _J = 1e4,
      H0 = JJ,
      GQ = [],
      SQ = [],
      jQ = 1,
      uJ = null,
      QJ = m,
      aJ = !1,
      e = !1,
      MZ = !1,
      C0 = typeof setTimeout === "function" ? setTimeout : null,
      hQ = typeof clearTimeout === "function" ? clearTimeout : null,
      z0 = typeof setImmediate !== "undefined" ? setImmediate : null,
      eQ =
        typeof navigator !== "undefined" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0
          ? navigator.scheduling.isInputPending.bind(navigator.scheduling)
          : null;
    function aZ(v) {
      var y = iJ(SQ);
      while (y !== null) {
        if (y.callback === null) $Q(SQ);
        else if (y.startTime <= v)
          $Q(SQ), (y.sortIndex = y.expirationTime), ZQ(GQ, y);
        else return;
        y = iJ(SQ);
      }
    }
    function JZ(v) {
      if (((MZ = !1), aZ(v), !e))
        if (iJ(GQ) !== null) (e = !0), tZ(FZ);
        else {
          var y = iJ(SQ);
          if (y !== null) MQ(JZ, y.startTime - v);
        }
    }
    function FZ(v, y) {
      if (((e = !1), MZ)) (MZ = !1), eZ();
      aJ = !0;
      var UJ = QJ;
      try {
        if (s)
          try {
            return E1(v, y);
          } catch (dJ) {
            if (uJ !== null) {
              var vJ = eP.unstable_now();
              xJ(uJ, vJ), (uJ.isQueued = !1);
            }
            throw dJ;
          }
        else return E1(v, y);
      } finally {
        (uJ = null), (QJ = UJ), (aJ = !1);
      }
    }
    function E1(v, y) {
      var UJ = y;
      aZ(UJ), (uJ = iJ(GQ));
      while (uJ !== null && !PJ) {
        if (uJ.expirationTime > UJ && (!v || qZ())) break;
        var vJ = uJ.callback;
        if (typeof vJ === "function") {
          (uJ.callback = null), (QJ = uJ.priorityLevel);
          var dJ = uJ.expirationTime <= UJ,
            CQ = vJ(dJ);
          if (((UJ = eP.unstable_now()), typeof CQ === "function"))
            uJ.callback = CQ;
          else if (uJ === iJ(GQ)) $Q(GQ);
          aZ(UJ);
        } else $Q(GQ);
        uJ = iJ(GQ);
      }
      if (uJ !== null) return !0;
      else {
        var BQ = iJ(SQ);
        if (BQ !== null) MQ(JZ, BQ.startTime - UJ);
        return !1;
      }
    }
    function v0(v, y) {
      switch (v) {
        case a:
        case XQ:
        case m:
        case OJ:
        case c:
          break;
        default:
          v = m;
      }
      var UJ = QJ;
      QJ = v;
      try {
        return y();
      } finally {
        QJ = UJ;
      }
    }
    function pZ(v) {
      var y;
      switch (QJ) {
        case a:
        case XQ:
        case m:
          y = m;
          break;
        default:
          y = QJ;
          break;
      }
      var UJ = QJ;
      QJ = y;
      try {
        return v();
      } finally {
        QJ = UJ;
      }
    }
    function M0(v) {
      var y = QJ;
      return function () {
        var UJ = QJ;
        QJ = y;
        try {
          return v.apply(this, arguments);
        } finally {
          QJ = UJ;
        }
      };
    }
    function kZ(v, y, UJ) {
      var vJ = eP.unstable_now(),
        dJ;
      if (typeof UJ === "object" && UJ !== null) {
        var CQ = UJ.delay;
        if (typeof CQ === "number" && CQ > 0) dJ = vJ + CQ;
        else dJ = vJ;
      } else dJ = vJ;
      var BQ;
      switch (v) {
        case a:
          BQ = rJ;
          break;
        case XQ:
          BQ = AJ;
          break;
        case c:
          BQ = H0;
          break;
        case OJ:
          BQ = _J;
          break;
        case m:
        default:
          BQ = HQ;
          break;
      }
      var IZ = dJ + BQ,
        sJ = {
          id: jQ++,
          callback: y,
          priorityLevel: v,
          startTime: dJ,
          expirationTime: IZ,
          sortIndex: -1,
        };
      if (dJ > vJ) {
        if (
          ((sJ.sortIndex = dJ), ZQ(SQ, sJ), iJ(GQ) === null && sJ === iJ(SQ))
        ) {
          if (MZ) eZ();
          else MZ = !0;
          MQ(JZ, dJ - vJ);
        }
      } else if (((sJ.sortIndex = IZ), ZQ(GQ, sJ), !e && !aJ)) (e = !0), tZ(FZ);
      return sJ;
    }
    function VZ() {}
    function oZ() {
      if (!e && !aJ) (e = !0), tZ(FZ);
    }
    function QZ() {
      return iJ(GQ);
    }
    function gZ(v) {
      v.callback = null;
    }
    function fQ() {
      return QJ;
    }
    var uQ = !1,
      KQ = null,
      dQ = -1,
      sQ = LJ,
      zQ = -1;
    function qZ() {
      var v = eP.unstable_now() - zQ;
      if (v < sQ) return !1;
      return !0;
    }
    function R1() {}
    function L1(v) {
      if (v < 0 || v > 125) {
        console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        );
        return;
      }
      if (v > 0) sQ = Math.floor(1000 / v);
      else sQ = LJ;
    }
    var rZ = function () {
        if (KQ !== null) {
          var v = eP.unstable_now();
          zQ = v;
          var y = !0,
            UJ = !0;
          try {
            UJ = KQ(y, v);
          } finally {
            if (UJ) ZZ();
            else (uQ = !1), (KQ = null);
          }
        } else uQ = !1;
      },
      ZZ;
    if (typeof z0 === "function")
      ZZ = function () {
        z0(rZ);
      };
    else if (typeof MessageChannel !== "undefined") {
      var nZ = new MessageChannel(),
        OZ = nZ.port2;
      (nZ.port1.onmessage = rZ),
        (ZZ = function () {
          OZ.postMessage(null);
        });
    } else
      ZZ = function () {
        C0(rZ, 0);
      };
    function tZ(v) {
      if (((KQ = v), !uQ)) (uQ = !0), ZZ();
    }
    function MQ(v, y) {
      dQ = C0(function () {
        v(eP.unstable_now());
      }, y);
    }
    function eZ() {
      hQ(dQ), (dQ = -1);
    }
    var V0 = R1,
      a0 = null;
    if (
      ((eP.unstable_IdlePriority = c),
      (eP.unstable_ImmediatePriority = a),
      (eP.unstable_LowPriority = OJ),
      (eP.unstable_NormalPriority = m),
      (eP.unstable_Profiling = a0),
      (eP.unstable_UserBlockingPriority = XQ),
      (eP.unstable_cancelCallback = gZ),
      (eP.unstable_continueExecution = oZ),
      (eP.unstable_forceFrameRate = L1),
      (eP.unstable_getCurrentPriorityLevel = fQ),
      (eP.unstable_getFirstCallbackNode = QZ),
      (eP.unstable_next = pZ),
      (eP.unstable_pauseExecution = VZ),
      (eP.unstable_requestPaint = V0),
      (eP.unstable_runWithPriority = v0),
      (eP.unstable_scheduleCallback = kZ),
      (eP.unstable_shouldYield = qZ),
      (eP.unstable_wrapCallback = M0),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var j3 = b7((JA) => {
  var PJ = HZ(s5(), 1),
    s = HZ($3(), 1);
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var LJ = PJ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ZQ = !1;
    function iJ(J) {
      ZQ = J;
    }
    function $Q(J) {
      if (!ZQ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        cZ("warn", J, Z);
      }
    }
    function M(J) {
      if (!ZQ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        cZ("error", J, Z);
      }
    }
    function cZ(J, Q, Z) {
      {
        var X = LJ.ReactDebugCurrentFrame,
          G = X.getStackAddendum();
        if (G !== "") (Q += "%s"), (Z = Z.concat([G]));
        var B = Z.map(function (U) {
          return String(U);
        });
        B.unshift("Warning: " + Q),
          Function.prototype.apply.call(console[J], console, B);
      }
    }
    var KJ = 0,
      a = 1,
      XQ = 2,
      m = 3,
      OJ = 4,
      c = 5,
      xJ = 6,
      iZ = 7,
      W0 = 8,
      TQ = 9,
      wJ = 10,
      JJ = 11,
      rJ = 12,
      AJ = 13,
      HQ = 14,
      _J = 15,
      H0 = 16,
      GQ = 17,
      SQ = 18,
      jQ = 19,
      uJ = 21,
      QJ = 22,
      aJ = 23,
      e = 24,
      MZ = 25,
      C0 = !0,
      hQ = !1,
      z0 = !1,
      eQ = !1,
      aZ = !1,
      JZ = !0,
      FZ = !1,
      E1 = !1,
      v0 = !0,
      pZ = !0,
      M0 = !0,
      kZ = new Set(),
      VZ = {},
      oZ = {};
    function QZ(J, Q) {
      gZ(J, Q), gZ(J + "Capture", Q);
    }
    function gZ(J, Q) {
      if (VZ[J])
        M(
          "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
          J,
        );
      VZ[J] = Q;
      {
        var Z = J.toLowerCase();
        if (((oZ[Z] = J), J === "onDoubleClick")) oZ.ondblclick = J;
      }
      for (var X = 0; X < Q.length; X++) kZ.add(Q[X]);
    }
    var fQ =
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        typeof window.document.createElement !== "undefined",
      uQ = Object.prototype.hasOwnProperty;
    function KQ(J) {
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
            KQ(J),
          ),
          sQ(J)
        );
    }
    function qZ(J) {
      if (dQ(J))
        return (
          M(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            KQ(J),
          ),
          sQ(J)
        );
    }
    function R1(J, Q) {
      if (dQ(J))
        return (
          M(
            "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            KQ(J),
          ),
          sQ(J)
        );
    }
    function L1(J, Q) {
      if (dQ(J))
        return (
          M(
            "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            KQ(J),
          ),
          sQ(J)
        );
    }
    function rZ(J) {
      if (dQ(J))
        return (
          M(
            "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
            KQ(J),
          ),
          sQ(J)
        );
    }
    function ZZ(J) {
      if (dQ(J))
        return (
          M(
            "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
            KQ(J),
          ),
          sQ(J)
        );
    }
    var nZ = 0,
      OZ = 1,
      tZ = 2,
      MQ = 3,
      eZ = 4,
      V0 = 5,
      a0 = 6,
      v =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      y = v + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
      UJ = new RegExp("^[" + v + "][" + y + "]*$"),
      vJ = {},
      dJ = {};
    function CQ(J) {
      if (uQ.call(dJ, J)) return !0;
      if (uQ.call(vJ, J)) return !1;
      if (UJ.test(J)) return (dJ[J] = !0), !0;
      return (vJ[J] = !0), M("Invalid attribute name: `%s`", J), !1;
    }
    function BQ(J, Q, Z) {
      if (Q !== null) return Q.type === nZ;
      if (Z) return !1;
      if (
        J.length > 2 &&
        (J[0] === "o" || J[0] === "O") &&
        (J[1] === "n" || J[1] === "N")
      )
        return !0;
      return !1;
    }
    function IZ(J, Q, Z, X) {
      if (Z !== null && Z.type === nZ) return !1;
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
      if (IZ(J, Q, Z, X)) return !0;
      if (X) return !1;
      if (Z !== null)
        switch (Z.type) {
          case MQ:
            return !Q;
          case eZ:
            return Q === !1;
          case V0:
            return isNaN(Q);
          case a0:
            return isNaN(Q) || Q < 1;
        }
      return !1;
    }
    function DZ(J) {
      return nJ.hasOwnProperty(J) ? nJ[J] : null;
    }
    function mJ(J, Q, Z, X, G, B, U) {
      (this.acceptsBooleans = Q === tZ || Q === MQ || Q === eZ),
        (this.attributeName = X),
        (this.attributeNamespace = G),
        (this.mustUseProperty = Z),
        (this.propertyName = J),
        (this.type = Q),
        (this.sanitizeURL = B),
        (this.removeEmptyString = U);
    }
    var nJ = {},
      Z4 = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ];
    Z4.forEach(function (J) {
      nJ[J] = new mJ(J, nZ, !1, J, null, !1, !1);
    }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (J) {
        var Q = J[0],
          Z = J[1];
        nJ[Q] = new mJ(Q, OZ, !1, Z, null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (J) {
          nJ[J] = new mJ(J, tZ, !1, J.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (J) {
        nJ[J] = new mJ(J, tZ, !1, J, null, !1, !1);
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
        nJ[J] = new mJ(J, MQ, !1, J.toLowerCase(), null, !1, !1);
      }),
      ["checked", "multiple", "muted", "selected"].forEach(function (J) {
        nJ[J] = new mJ(J, MQ, !0, J, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (J) {
        nJ[J] = new mJ(J, eZ, !1, J, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (J) {
        nJ[J] = new mJ(J, a0, !1, J, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (J) {
        nJ[J] = new mJ(J, V0, !1, J.toLowerCase(), null, !1, !1);
      });
    var F1 = /[\-\:]([a-z])/g,
      X4 = function (J) {
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
      var Q = J.replace(F1, X4);
      nJ[Q] = new mJ(Q, OZ, !1, J, null, !1, !1);
    }),
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type",
      ].forEach(function (J) {
        var Q = J.replace(F1, X4);
        nJ[Q] = new mJ(Q, OZ, !1, J, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (J) {
        var Q = J.replace(F1, X4);
        nJ[Q] = new mJ(
          Q,
          OZ,
          !1,
          J,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (J) {
        nJ[J] = new mJ(J, OZ, !1, J.toLowerCase(), null, !1, !1);
      });
    var f4 = "xlinkHref";
    (nJ[f4] = new mJ(
      "xlinkHref",
      OZ,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
      ["src", "href", "action", "formAction"].forEach(function (J) {
        nJ[J] = new mJ(J, OZ, !1, J.toLowerCase(), null, !0, !0);
      });
    var y5 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
      q0 = !1;
    function p0(J) {
      if (!q0 && y5.test(J))
        (q0 = !0),
          M(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(J),
          );
    }
    function u4(J, Q, Z, X) {
      if (X.mustUseProperty) {
        var G = X.propertyName;
        return J[G];
      } else {
        if ((zQ(Z, Q), X.sanitizeURL)) p0("" + Z);
        var B = X.attributeName,
          U = null;
        if (X.type === eZ) {
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
    function d4(J, Q, Z, X) {
      {
        if (!CQ(Q)) return;
        if (!J.hasAttribute(Q)) return Z === void 0 ? void 0 : null;
        var G = J.getAttribute(Q);
        if ((zQ(Z, Q), G === "" + Z)) return Z;
        return G;
      }
    }
    function G4(J, Q, Z, X) {
      var G = DZ(Q);
      if (BQ(Q, G, X)) return;
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
          var K = G.type;
          J[Y] = K === MQ ? !1 : "";
        } else J[Y] = Z;
        return;
      }
      var { attributeName: H, attributeNamespace: z } = G;
      if (Z === null) J.removeAttribute(H);
      else {
        var D = G.type,
          O;
        if (D === MQ || (D === eZ && Z === !0)) O = "";
        else if ((zQ(Z, H), (O = "" + Z), G.sanitizeURL)) p0(O.toString());
        if (z) J.setAttributeNS(z, H, O);
        else J.setAttribute(H, O);
      }
    }
    var N0 = Symbol.for("react.element"),
      q = Symbol.for("react.portal"),
      w = Symbol.for("react.fragment"),
      N = Symbol.for("react.strict_mode"),
      p = Symbol.for("react.profiler"),
      n = Symbol.for("react.provider"),
      SJ = Symbol.for("react.context"),
      WJ = Symbol.for("react.forward_ref"),
      HJ = Symbol.for("react.suspense"),
      UQ = Symbol.for("react.suspense_list"),
      hJ = Symbol.for("react.memo"),
      DJ = Symbol.for("react.lazy"),
      XZ = Symbol.for("react.scope"),
      b0 = Symbol.for("react.debug_trace_mode"),
      B4 = Symbol.for("react.offscreen"),
      TZ = Symbol.for("react.legacy_hidden"),
      o9 = Symbol.for("react.cache"),
      r9 = Symbol.for("react.tracing_marker"),
      g7 = Symbol.iterator,
      n9 = "@@iterator";
    function o0(J) {
      if (J === null || typeof J !== "object") return null;
      var Q = (g7 && J[g7]) || J[n9];
      if (typeof Q === "function") return Q;
      return null;
    }
    var MJ = Object.assign,
      I1 = 0,
      l5,
      c5,
      i5,
      a5,
      p5,
      o5,
      r5;
    function T7() {}
    T7.__reactDisabledLog = !0;
    function t9() {
      {
        if (I1 === 0) {
          (l5 = console.log),
            (c5 = console.info),
            (i5 = console.warn),
            (a5 = console.error),
            (p5 = console.group),
            (o5 = console.groupCollapsed),
            (r5 = console.groupEnd);
          var J = { configurable: !0, enumerable: !0, value: T7, writable: !0 };
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
        I1++;
      }
    }
    function n5() {
      {
        if ((I1--, I1 === 0)) {
          var J = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: MJ({}, J, { value: l5 }),
            info: MJ({}, J, { value: c5 }),
            warn: MJ({}, J, { value: i5 }),
            error: MJ({}, J, { value: a5 }),
            group: MJ({}, J, { value: p5 }),
            groupCollapsed: MJ({}, J, { value: o5 }),
            groupEnd: MJ({}, J, { value: r5 }),
          });
        }
        if (I1 < 0)
          M(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var U4 = LJ.ReactCurrentDispatcher,
      x1;
    function J0(J, Q, Z) {
      {
        if (x1 === void 0)
          try {
            throw Error();
          } catch (G) {
            var X = G.stack.trim().match(/\n( *(at )?)/);
            x1 = (X && X[1]) || "";
          }
        return "\n" + x1 + J;
      }
    }
    var w1 = !1,
      s4;
    {
      var h7 = typeof WeakMap === "function" ? WeakMap : Map;
      s4 = new h7();
    }
    function t5(J, Q) {
      if (!J || w1) return "";
      {
        var Z = s4.get(J);
        if (Z !== void 0) return Z;
      }
      var X;
      w1 = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      (B = U4.current), (U4.current = null), t9();
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
            K = X.stack.split("\n"),
            H = Y.length - 1,
            z = K.length - 1;
          while (H >= 1 && z >= 0 && Y[H] !== K[z]) z--;
          for (; H >= 1 && z >= 0; H--, z--)
            if (Y[H] !== K[z]) {
              if (H !== 1 || z !== 1)
                do
                  if ((H--, z--, z < 0 || Y[H] !== K[z])) {
                    var D = "\n" + Y[H].replace(" at new ", " at ");
                    if (J.displayName && D.includes("<anonymous>"))
                      D = D.replace("<anonymous>", J.displayName);
                    if (typeof J === "function") s4.set(J, D);
                    return D;
                  }
                while (H >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        (w1 = !1), (U4.current = B), n5(), (Error.prepareStackTrace = G);
      }
      var O = J ? J.displayName || J.name : "",
        E = O ? J0(O) : "";
      if (typeof J === "function") s4.set(J, E);
      return E;
    }
    function e9(J, Q, Z) {
      return t5(J, !0);
    }
    function _1(J, Q, Z) {
      return t5(J, !1);
    }
    function f7(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function m4(J, Q, Z) {
      if (J == null) return "";
      if (typeof J === "function") return t5(J, f7(J));
      if (typeof J === "string") return J0(J);
      switch (J) {
        case HJ:
          return J0("Suspense");
        case UQ:
          return J0("SuspenseList");
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case WJ:
            return _1(J.render);
          case hJ:
            return m4(J.type, Q, Z);
          case DJ: {
            var X = J,
              G = X._payload,
              B = X._init;
            try {
              return m4(B(G), Q, Z);
            } catch (U) {}
          }
        }
      return "";
    }
    function y4(J) {
      var Q = J._debugOwner ? J._debugOwner.type : null,
        Z = J._debugSource;
      switch (J.tag) {
        case c:
          return J0(J.type);
        case H0:
          return J0("Lazy");
        case AJ:
          return J0("Suspense");
        case jQ:
          return J0("SuspenseList");
        case KJ:
        case XQ:
        case _J:
          return _1(J.type);
        case JJ:
          return _1(J.type.render);
        case a:
          return e9(J.type);
        default:
          return "";
      }
    }
    function u7(J) {
      try {
        var Q = "",
          Z = J;
        do (Q += y4(Z)), (Z = Z.return);
        while (Z);
        return Q;
      } catch (X) {
        return "\nError generating stack: " + X.message + "\n" + X.stack;
      }
    }
    function S1(J, Q, Z) {
      var X = J.displayName;
      if (X) return X;
      var G = Q.displayName || Q.name || "";
      return G !== "" ? Z + "(" + G + ")" : Z;
    }
    function e5(J) {
      return J.displayName || "Context";
    }
    function fJ(J) {
      if (J == null) return null;
      if (typeof J.tag === "number")
        M(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
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
        case HJ:
          return "Suspense";
        case UQ:
          return "SuspenseList";
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case SJ:
            var Q = J;
            return e5(Q) + ".Consumer";
          case n:
            var Z = J;
            return e5(Z._context) + ".Provider";
          case WJ:
            return S1(J, J.render, "ForwardRef");
          case hJ:
            var X = J.displayName || null;
            if (X !== null) return X;
            return fJ(J.type) || "Memo";
          case DJ: {
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
    function JX(J, Q, Z) {
      var X = Q.displayName || Q.name || "";
      return J.displayName || (X !== "" ? Z + "(" + X + ")" : Z);
    }
    function d7(J) {
      return J.displayName || "Context";
    }
    function YJ(J) {
      var { tag: Q, type: Z } = J;
      switch (Q) {
        case e:
          return "Cache";
        case TQ:
          var X = Z;
          return d7(X) + ".Consumer";
        case wJ:
          var G = Z;
          return d7(G._context) + ".Provider";
        case SQ:
          return "DehydratedFragment";
        case JJ:
          return JX(Z, Z.render, "ForwardRef");
        case iZ:
          return "Fragment";
        case c:
          return Z;
        case OJ:
          return "Portal";
        case m:
          return "Root";
        case xJ:
          return "Text";
        case H0:
          return fJ(Z);
        case W0:
          if (Z === N) return "StrictMode";
          return "Mode";
        case QJ:
          return "Offscreen";
        case rJ:
          return "Profiler";
        case uJ:
          return "Scope";
        case AJ:
          return "Suspense";
        case jQ:
          return "SuspenseList";
        case MZ:
          return "TracingMarker";
        case a:
        case KJ:
        case GQ:
        case XQ:
        case HQ:
        case _J:
          if (typeof Z === "function") return Z.displayName || Z.name || null;
          if (typeof Z === "string") return Z;
          break;
      }
      return null;
    }
    var s7 = LJ.ReactDebugCurrentFrame,
      GZ = null,
      C1 = !1;
    function v1() {
      {
        if (GZ === null) return null;
        var J = GZ._debugOwner;
        if (J !== null && typeof J !== "undefined") return YJ(J);
      }
      return null;
    }
    function QX() {
      {
        if (GZ === null) return "";
        return u7(GZ);
      }
    }
    function vQ() {
      (s7.getCurrentStack = null), (GZ = null), (C1 = !1);
    }
    function eJ(J) {
      (s7.getCurrentStack = J === null ? null : QX), (GZ = J), (C1 = !1);
    }
    function ZX() {
      return GZ;
    }
    function Q0(J) {
      C1 = J;
    }
    function xZ(J) {
      return "" + J;
    }
    function O0(J) {
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
    var l4 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0,
    };
    function J6(J, Q) {
      {
        if (
          !(
            l4[Q.type] ||
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
    function r0(J) {
      var { type: Q, nodeName: Z } = J;
      return (
        Z && Z.toLowerCase() === "input" && (Q === "checkbox" || Q === "radio")
      );
    }
    function Q6(J) {
      return J._valueTracker;
    }
    function XX(J) {
      J._valueTracker = null;
    }
    function c4(J) {
      var Q = "";
      if (!J) return Q;
      if (r0(J)) Q = J.checked ? "true" : "false";
      else Q = J.value;
      return Q;
    }
    function Z6(J) {
      var Q = r0(J) ? "checked" : "value",
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
          XX(J), delete J[Q];
        },
      };
      return U;
    }
    function N1(J) {
      if (Q6(J)) return;
      J._valueTracker = Z6(J);
    }
    function i4(J) {
      if (!J) return !1;
      var Q = Q6(J);
      if (!Q) return !0;
      var Z = Q.getValue(),
        X = c4(J);
      if (X !== Z) return Q.setValue(X), !0;
      return !1;
    }
    function a4(J) {
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
    var m7 = !1,
      y7 = !1,
      l7 = !1,
      W = !1;
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
          (J6("input", Q),
          Q.checked !== void 0 && Q.defaultChecked !== void 0 && !y7)
        )
          M(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            v1() || "A component",
            Q.type,
          ),
            (y7 = !0);
        if (Q.value !== void 0 && Q.defaultValue !== void 0 && !m7)
          M(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            v1() || "A component",
            Q.type,
          ),
            (m7 = !0);
      }
      var Z = J,
        X = Q.defaultValue == null ? "" : Q.defaultValue;
      Z._wrapperState = {
        initialChecked: Q.checked != null ? Q.checked : Q.defaultChecked,
        initialValue: O0(Q.value != null ? Q.value : X),
        controlled: V(Q),
      };
    }
    function S(J, Q) {
      var Z = J,
        X = Q.checked;
      if (X != null) G4(Z, "checked", X, !1);
    }
    function i(J, Q) {
      var Z = J;
      {
        var X = V(Q);
        if (!Z._wrapperState.controlled && X && !W)
          M(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
          ),
            (W = !0);
        if (Z._wrapperState.controlled && !X && !l7)
          M(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
          ),
            (l7 = !0);
      }
      S(J, Q);
      var G = O0(Q.value),
        B = Q.type;
      if (G != null) {
        if (B === "number") {
          if ((G === 0 && Z.value === "") || Z.value != G) Z.value = xZ(G);
        } else if (Z.value !== xZ(G)) Z.value = xZ(G);
      } else if (B === "submit" || B === "reset") {
        Z.removeAttribute("value");
        return;
      }
      if (Q.hasOwnProperty("value")) bJ(Z, Q.type, G);
      else if (Q.hasOwnProperty("defaultValue"))
        bJ(Z, Q.type, O0(Q.defaultValue));
      if (Q.checked == null && Q.defaultChecked != null)
        Z.defaultChecked = !!Q.defaultChecked;
    }
    function u(J, Q, Z) {
      var X = J;
      if (Q.hasOwnProperty("value") || Q.hasOwnProperty("defaultValue")) {
        var G = Q.type,
          B = G === "submit" || G === "reset";
        if (B && (Q.value === void 0 || Q.value === null)) return;
        var U = xZ(X._wrapperState.initialValue);
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
      i(Z, Q), EJ(Z, Q);
    }
    function EJ(J, Q) {
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
          var Y = N8(U);
          if (!Y)
            throw new Error(
              "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
            );
          i4(U), i(U, Y);
        }
      }
    }
    function bJ(J, Q, Z) {
      if (Q !== "number" || a4(J.ownerDocument) !== J) {
        if (Z == null) J.defaultValue = xZ(J._wrapperState.initialValue);
        else if (J.defaultValue !== xZ(Z)) J.defaultValue = xZ(Z);
      }
    }
    var yJ = !1,
      lJ = !1,
      pJ = !1;
    function JQ(J, Q) {
      {
        if (Q.value == null) {
          if (typeof Q.children === "object" && Q.children !== null)
            PJ.Children.forEach(Q.children, function (Z) {
              if (Z == null) return;
              if (typeof Z === "string" || typeof Z === "number") return;
              if (!lJ)
                (lJ = !0),
                  M(
                    "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.",
                  );
            });
          else if (Q.dangerouslySetInnerHTML != null) {
            if (!pJ)
              (pJ = !0),
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
      if (Q.value != null) J.setAttribute("value", xZ(O0(Q.value)));
    }
    var p4 = Array.isArray;
    function AQ(J) {
      return p4(J);
    }
    var X6 = !1;
    function c7() {
      var J = v1();
      if (J) return "\n\nCheck the render method of `" + J + "`.";
      return "";
    }
    var G6 = ["value", "defaultValue"];
    function GX(J) {
      {
        J6("select", J);
        for (var Q = 0; Q < G6.length; Q++) {
          var Z = G6[Q];
          if (J[Z] == null) continue;
          var X = AQ(J[Z]);
          if (J.multiple && !X)
            M(
              "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
              Z,
              c7(),
            );
          else if (!J.multiple && X)
            M(
              "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
              Z,
              c7(),
            );
        }
      }
    }
    function n0(J, Q, Z, X) {
      var G = J.options;
      if (Q) {
        var B = Z,
          U = {};
        for (var Y = 0; Y < B.length; Y++) U["$" + B[Y]] = !0;
        for (var K = 0; K < G.length; K++) {
          var H = U.hasOwnProperty("$" + G[K].value);
          if (G[K].selected !== H) G[K].selected = H;
          if (H && X) G[K].defaultSelected = !0;
        }
      } else {
        var z = xZ(O0(Z)),
          D = null;
        for (var O = 0; O < G.length; O++) {
          if (G[O].value === z) {
            if (((G[O].selected = !0), X)) G[O].defaultSelected = !0;
            return;
          }
          if (D === null && !G[O].disabled) D = G[O];
        }
        if (D !== null) D.selected = !0;
      }
    }
    function B6(J, Q) {
      return MJ({}, Q, { value: void 0 });
    }
    function YY(J, Q) {
      var Z = J;
      if (
        (GX(Q),
        (Z._wrapperState = { wasMultiple: !!Q.multiple }),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !X6)
      )
        M(
          "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
        ),
          (X6 = !0);
    }
    function _3(J, Q) {
      var Z = J;
      Z.multiple = !!Q.multiple;
      var X = Q.value;
      if (X != null) n0(Z, !!Q.multiple, X, !1);
      else if (Q.defaultValue != null) n0(Z, !!Q.multiple, Q.defaultValue, !0);
    }
    function S3(J, Q) {
      var Z = J,
        X = Z._wrapperState.wasMultiple;
      Z._wrapperState.wasMultiple = !!Q.multiple;
      var G = Q.value;
      if (G != null) n0(Z, !!Q.multiple, G, !1);
      else if (X !== !!Q.multiple)
        if (Q.defaultValue != null) n0(Z, !!Q.multiple, Q.defaultValue, !0);
        else n0(Z, !!Q.multiple, Q.multiple ? [] : "", !1);
    }
    function C3(J, Q) {
      var Z = J,
        X = Q.value;
      if (X != null) n0(Z, !!Q.multiple, X, !1);
    }
    var KY = !1;
    function BX(J, Q) {
      var Z = J;
      if (Q.dangerouslySetInnerHTML != null)
        throw new Error(
          "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
        );
      var X = MJ({}, Q, {
        value: void 0,
        defaultValue: void 0,
        children: xZ(Z._wrapperState.initialValue),
      });
      return X;
    }
    function WY(J, Q) {
      var Z = J;
      if (
        (J6("textarea", Q),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !KY)
      )
        M(
          "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          v1() || "A component",
        ),
          (KY = !0);
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
      Z._wrapperState = { initialValue: O0(X) };
    }
    function HY(J, Q) {
      var Z = J,
        X = O0(Q.value),
        G = O0(Q.defaultValue);
      if (X != null) {
        var B = xZ(X);
        if (B !== Z.value) Z.value = B;
        if (Q.defaultValue == null && Z.defaultValue !== B) Z.defaultValue = B;
      }
      if (G != null) Z.defaultValue = xZ(G);
    }
    function zY(J, Q) {
      var Z = J,
        X = Z.textContent;
      if (X === Z._wrapperState.initialValue) {
        if (X !== "" && X !== null) Z.value = X;
      }
    }
    function v3(J, Q) {
      HY(J, Q);
    }
    var t0 = "http://www.w3.org/1999/xhtml",
      N3 = "http://www.w3.org/1998/Math/MathML",
      UX = "http://www.w3.org/2000/svg";
    function YX(J) {
      switch (J) {
        case "svg":
          return UX;
        case "math":
          return N3;
        default:
          return t0;
      }
    }
    function KX(J, Q) {
      if (J == null || J === t0) return YX(Q);
      if (J === UX && Q === "foreignObject") return t0;
      return J;
    }
    var b3 = function (J) {
        if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction)
          return function (Q, Z, X, G) {
            MSApp.execUnsafeLocalFunction(function () {
              return J(Q, Z, X, G);
            });
          };
        else return J;
      },
      i7,
      MY = b3(function (J, Q) {
        if (J.namespaceURI === UX) {
          if (!("innerHTML" in J)) {
            (i7 = i7 || document.createElement("div")),
              (i7.innerHTML = "<svg>" + Q.valueOf().toString() + "</svg>");
            var Z = i7.firstChild;
            while (J.firstChild) J.removeChild(J.firstChild);
            while (Z.firstChild) J.appendChild(Z.firstChild);
            return;
          }
        }
        J.innerHTML = Q;
      }),
      wZ = 1,
      e0 = 3,
      VQ = 8,
      J1 = 9,
      WX = 11,
      a7 = function (J, Q) {
        if (Q) {
          var Z = J.firstChild;
          if (Z && Z === J.lastChild && Z.nodeType === e0) {
            Z.nodeValue = Q;
            return;
          }
        }
        J.textContent = Q;
      },
      k3 = {
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
      U6 = {
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
    function g3(J, Q) {
      return J + Q.charAt(0).toUpperCase() + Q.substring(1);
    }
    var T3 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(U6).forEach(function (J) {
      T3.forEach(function (Q) {
        U6[g3(Q, J)] = U6[J];
      });
    });
    function HX(J, Q, Z) {
      var X = Q == null || typeof Q === "boolean" || Q === "";
      if (X) return "";
      if (
        !Z &&
        typeof Q === "number" &&
        Q !== 0 &&
        !(U6.hasOwnProperty(J) && U6[J])
      )
        return Q + "px";
      return L1(Q, J), ("" + Q).trim();
    }
    var h3 = /([A-Z])/g,
      f3 = /^ms-/;
    function u3(J) {
      return J.replace(h3, "-$1").toLowerCase().replace(f3, "-ms-");
    }
    var VY = function () {};
    {
      var d3 = /^(?:webkit|moz|o)[A-Z]/,
        s3 = /^-ms-/,
        m3 = /-(.)/g,
        qY = /;\s*$/,
        o4 = {},
        zX = {},
        OY = !1,
        DY = !1,
        y3 = function (J) {
          return J.replace(m3, function (Q, Z) {
            return Z.toUpperCase();
          });
        },
        l3 = function (J) {
          if (o4.hasOwnProperty(J) && o4[J]) return;
          (o4[J] = !0),
            M(
              "Unsupported style property %s. Did you mean %s?",
              J,
              y3(J.replace(s3, "ms-")),
            );
        },
        c3 = function (J) {
          if (o4.hasOwnProperty(J) && o4[J]) return;
          (o4[J] = !0),
            M(
              "Unsupported vendor-prefixed style property %s. Did you mean %s?",
              J,
              J.charAt(0).toUpperCase() + J.slice(1),
            );
        },
        i3 = function (J, Q) {
          if (zX.hasOwnProperty(Q) && zX[Q]) return;
          (zX[Q] = !0),
            M(
              `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
              J,
              Q.replace(qY, ""),
            );
        },
        a3 = function (J, Q) {
          if (OY) return;
          (OY = !0),
            M("`NaN` is an invalid value for the `%s` css style property.", J);
        },
        p3 = function (J, Q) {
          if (DY) return;
          (DY = !0),
            M(
              "`Infinity` is an invalid value for the `%s` css style property.",
              J,
            );
        };
      VY = function (J, Q) {
        if (J.indexOf("-") > -1) l3(J);
        else if (d3.test(J)) c3(J);
        else if (qY.test(Q)) i3(J, Q);
        if (typeof Q === "number") {
          if (isNaN(Q)) a3(J, Q);
          else if (!isFinite(Q)) p3(J, Q);
        }
      };
    }
    var o3 = VY;
    function r3(J) {
      {
        var Q = "",
          Z = "";
        for (var X in J) {
          if (!J.hasOwnProperty(X)) continue;
          var G = J[X];
          if (G != null) {
            var B = X.indexOf("--") === 0;
            (Q += Z + (B ? X : u3(X)) + ":"), (Q += HX(X, G, B)), (Z = ";");
          }
        }
        return Q || null;
      }
    }
    function $Y(J, Q) {
      var Z = J.style;
      for (var X in Q) {
        if (!Q.hasOwnProperty(X)) continue;
        var G = X.indexOf("--") === 0;
        if (!G) o3(X, Q[X]);
        var B = HX(X, Q[X], G);
        if (X === "float") X = "cssFloat";
        if (G) Z.setProperty(X, B);
        else Z[X] = B;
      }
    }
    function n3(J) {
      return J == null || typeof J === "boolean" || J === "";
    }
    function jY(J) {
      var Q = {};
      for (var Z in J) {
        var X = k3[Z] || [Z];
        for (var G = 0; G < X.length; G++) Q[X[G]] = Z;
      }
      return Q;
    }
    function t3(J, Q) {
      {
        if (!Q) return;
        var Z = jY(J),
          X = jY(Q),
          G = {};
        for (var B in Z) {
          var U = Z[B],
            Y = X[B];
          if (Y && U !== Y) {
            var K = U + "," + Y;
            if (G[K]) continue;
            (G[K] = !0),
              M(
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                n3(J[U]) ? "Removing" : "Updating",
                U,
                Y,
              );
          }
        }
      }
    }
    var e3 = {
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
      JM = MJ({ menuitem: !0 }, e3),
      QM = "__html";
    function MX(J, Q) {
      if (!Q) return;
      if (JM[J]) {
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
          !(QM in Q.dangerouslySetInnerHTML)
        )
          throw new Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
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
    function Y4(J, Q) {
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
    var p7 = {
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
      PY = {
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
      r4 = {},
      ZM = new RegExp("^(aria)-[" + y + "]*$"),
      XM = new RegExp("^(aria)[A-Z][" + y + "]*$");
    function GM(J, Q) {
      {
        if (uQ.call(r4, Q) && r4[Q]) return !0;
        if (XM.test(Q)) {
          var Z = "aria-" + Q.slice(4).toLowerCase(),
            X = PY.hasOwnProperty(Z) ? Z : null;
          if (X == null)
            return (
              M(
                "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                Q,
              ),
              (r4[Q] = !0),
              !0
            );
          if (Q !== X)
            return (
              M("Invalid ARIA attribute `%s`. Did you mean `%s`?", Q, X),
              (r4[Q] = !0),
              !0
            );
        }
        if (ZM.test(Q)) {
          var G = Q.toLowerCase(),
            B = PY.hasOwnProperty(G) ? G : null;
          if (B == null) return (r4[Q] = !0), !1;
          if (Q !== B)
            return (
              M("Unknown ARIA attribute `%s`. Did you mean `%s`?", Q, B),
              (r4[Q] = !0),
              !0
            );
        }
      }
      return !0;
    }
    function BM(J, Q) {
      {
        var Z = [];
        for (var X in Q) {
          var G = GM(J, X);
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
    function UM(J, Q) {
      if (Y4(J, Q)) return;
      BM(J, Q);
    }
    var AY = !1;
    function YM(J, Q) {
      {
        if (J !== "input" && J !== "textarea" && J !== "select") return;
        if (Q != null && Q.value === null && !AY)
          if (((AY = !0), J === "select" && Q.multiple))
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
    var EY = function () {};
    {
      var $Z = {},
        RY = /^on./,
        KM = /^on[^A-Z]/,
        WM = new RegExp("^(aria)-[" + y + "]*$"),
        HM = new RegExp("^(aria)[A-Z][" + y + "]*$");
      EY = function (J, Q, Z, X) {
        if (uQ.call($Z, Q) && $Z[Q]) return !0;
        var G = Q.toLowerCase();
        if (G === "onfocusin" || G === "onfocusout")
          return (
            M(
              "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.",
            ),
            ($Z[Q] = !0),
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
              ($Z[Q] = !0),
              !0
            );
          if (RY.test(Q))
            return (
              M("Unknown event handler property `%s`. It will be ignored.", Q),
              ($Z[Q] = !0),
              !0
            );
        } else if (RY.test(Q)) {
          if (KM.test(Q))
            M(
              "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
              Q,
            );
          return ($Z[Q] = !0), !0;
        }
        if (WM.test(Q) || HM.test(Q)) return !0;
        if (G === "innerhtml")
          return (
            M(
              "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.",
            ),
            ($Z[Q] = !0),
            !0
          );
        if (G === "aria")
          return (
            M(
              "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.",
            ),
            ($Z[Q] = !0),
            !0
          );
        if (G === "is" && Z !== null && Z !== void 0 && typeof Z !== "string")
          return (
            M(
              "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
              typeof Z,
            ),
            ($Z[Q] = !0),
            !0
          );
        if (typeof Z === "number" && isNaN(Z))
          return (
            M(
              "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
              Q,
            ),
            ($Z[Q] = !0),
            !0
          );
        var K = DZ(Q),
          H = K !== null && K.type === nZ;
        if (p7.hasOwnProperty(G)) {
          var z = p7[G];
          if (z !== Q)
            return (
              M("Invalid DOM property `%s`. Did you mean `%s`?", Q, z),
              ($Z[Q] = !0),
              !0
            );
        } else if (!H && Q !== G)
          return (
            M(
              "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
              Q,
              G,
            ),
            ($Z[Q] = !0),
            !0
          );
        if (typeof Z === "boolean" && IZ(Q, Z, K, !1)) {
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
          return ($Z[Q] = !0), !0;
        }
        if (H) return !0;
        if (IZ(Q, Z, K, !1)) return ($Z[Q] = !0), !1;
        if ((Z === "false" || Z === "true") && K !== null && K.type === MQ)
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
            ($Z[Q] = !0),
            !0
          );
        return !0;
      };
    }
    var zM = function (J, Q, Z) {
      {
        var X = [];
        for (var G in Q) {
          var B = EY(J, G, Q[G], Z);
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
    function MM(J, Q, Z) {
      if (Y4(J, Q)) return;
      zM(J, Q, Z);
    }
    var LY = 1,
      VX = 1 << 1,
      Y6 = 1 << 2,
      VM = LY | VX | Y6,
      K6 = null;
    function qM(J) {
      if (K6 !== null)
        M(
          "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      K6 = J;
    }
    function OM() {
      if (K6 === null)
        M(
          "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      K6 = null;
    }
    function DM(J) {
      return J === K6;
    }
    function qX(J) {
      var Q = J.target || J.srcElement || window;
      if (Q.correspondingUseElement) Q = Q.correspondingUseElement;
      return Q.nodeType === e0 ? Q.parentNode : Q;
    }
    var OX = null,
      n4 = null,
      t4 = null;
    function FY(J) {
      var Q = d1(J);
      if (!Q) return;
      if (typeof OX !== "function")
        throw new Error(
          "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
        );
      var Z = Q.stateNode;
      if (Z) {
        var X = N8(Z);
        OX(Q.stateNode, Q.type, X);
      }
    }
    function $M(J) {
      OX = J;
    }
    function IY(J) {
      if (n4)
        if (t4) t4.push(J);
        else t4 = [J];
      else n4 = J;
    }
    function jM() {
      return n4 !== null || t4 !== null;
    }
    function xY() {
      if (!n4) return;
      var J = n4,
        Q = t4;
      if (((n4 = null), (t4 = null), FY(J), Q))
        for (var Z = 0; Z < Q.length; Z++) FY(Q[Z]);
    }
    var wY = function (J, Q) {
        return J(Q);
      },
      _Y = function () {},
      DX = !1;
    function PM() {
      var J = jM();
      if (J) _Y(), xY();
    }
    function SY(J, Q, Z) {
      if (DX) return J(Q, Z);
      DX = !0;
      try {
        return wY(J, Q, Z);
      } finally {
        (DX = !1), PM();
      }
    }
    function AM(J, Q, Z) {
      (wY = J), (_Y = Z);
    }
    function EM(J) {
      return (
        J === "button" || J === "input" || J === "select" || J === "textarea"
      );
    }
    function RM(J, Q, Z) {
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
          return !!(Z.disabled && EM(Q));
        default:
          return !1;
      }
    }
    function W6(J, Q) {
      var Z = J.stateNode;
      if (Z === null) return null;
      var X = N8(Z);
      if (X === null) return null;
      var G = X[Q];
      if (RM(Q, J.type, X)) return null;
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
    var $X = !1;
    if (fQ)
      try {
        var H6 = {};
        Object.defineProperty(H6, "passive", {
          get: function () {
            $X = !0;
          },
        }),
          window.addEventListener("test", H6, H6),
          window.removeEventListener("test", H6, H6);
      } catch (J) {
        $X = !1;
      }
    function CY(J, Q, Z, X, G, B, U, Y, K) {
      var H = Array.prototype.slice.call(arguments, 3);
      try {
        Q.apply(Z, H);
      } catch (z) {
        this.onError(z);
      }
    }
    var vY = CY;
    if (
      typeof window !== "undefined" &&
      typeof window.dispatchEvent === "function" &&
      typeof document !== "undefined" &&
      typeof document.createEvent === "function"
    ) {
      var jX = document.createElement("react");
      vY = function J(Q, Z, X, G, B, U, Y, K, H) {
        if (typeof document === "undefined" || document === null)
          throw new Error(
            "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.",
          );
        var z = document.createEvent("Event"),
          D = !1,
          O = !0,
          E = window.event,
          P = Object.getOwnPropertyDescriptor(window, "event");
        function R() {
          if (
            (jX.removeEventListener(F, l, !1),
            typeof window.event !== "undefined" &&
              window.hasOwnProperty("event"))
          )
            window.event = E;
        }
        var g = Array.prototype.slice.call(arguments, 3);
        function l() {
          (D = !0), R(), Z.apply(X, g), (O = !1);
        }
        var d,
          VJ = !1,
          qJ = !1;
        function $(j) {
          if (
            ((d = j.error),
            (VJ = !0),
            d === null && j.colno === 0 && j.lineno === 0)
          )
            qJ = !0;
          if (j.defaultPrevented) {
            if (d != null && typeof d === "object")
              try {
                d._suppressLogging = !0;
              } catch (_) {}
          }
        }
        var F = "react-" + (Q ? Q : "invokeguardedcallback");
        if (
          (window.addEventListener("error", $),
          jX.addEventListener(F, l, !1),
          z.initEvent(F, !1, !1),
          jX.dispatchEvent(z),
          P)
        )
          Object.defineProperty(window, "event", P);
        if (D && O) {
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
        if ((window.removeEventListener("error", $), !D))
          return R(), CY.apply(this, arguments);
      };
    }
    var LM = vY,
      e4 = !1,
      o7 = null,
      r7 = !1,
      PX = null,
      FM = {
        onError: function (J) {
          (e4 = !0), (o7 = J);
        },
      };
    function AX(J, Q, Z, X, G, B, U, Y, K) {
      (e4 = !1), (o7 = null), LM.apply(FM, arguments);
    }
    function IM(J, Q, Z, X, G, B, U, Y, K) {
      if ((AX.apply(this, arguments), e4)) {
        var H = EX();
        if (!r7) (r7 = !0), (PX = H);
      }
    }
    function xM() {
      if (r7) {
        var J = PX;
        throw ((r7 = !1), (PX = null), J);
      }
    }
    function wM() {
      return e4;
    }
    function EX() {
      if (e4) {
        var J = o7;
        return (e4 = !1), (o7 = null), J;
      } else
        throw new Error(
          "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function J5(J) {
      return J._reactInternals;
    }
    function _M(J) {
      return J._reactInternals !== void 0;
    }
    function SM(J, Q) {
      J._reactInternals = Q;
    }
    var o = 0,
      Q5 = 1,
      qQ = 2,
      RJ = 4,
      K4 = 16,
      z6 = 32,
      RX = 64,
      CJ = 128,
      Q1 = 256,
      b1 = 512,
      W4 = 1024,
      D0 = 2048,
      Z1 = 4096,
      H4 = 8192,
      n7 = 16384,
      CM = D0 | RJ | RX | b1 | W4 | n7,
      vM = 32767,
      M6 = 32768,
      jZ = 65536,
      LX = 131072,
      NY = 1048576,
      FX = 2097152,
      z4 = 4194304,
      IX = 8388608,
      X1 = 16777216,
      t7 = 33554432,
      xX = RJ | W4 | 0,
      wX = qQ | RJ | K4 | z6 | b1 | Z1 | H4,
      V6 = RJ | RX | b1 | H4,
      Z5 = D0 | K4,
      G1 = z4 | IX | FX,
      NM = LJ.ReactCurrentOwner;
    function M4(J) {
      var Q = J,
        Z = J;
      if (!J.alternate) {
        var X = Q;
        do {
          if (((Q = X), (Q.flags & (qQ | Z1)) !== o)) Z = Q.return;
          X = Q.return;
        } while (X);
      } else while (Q.return) Q = Q.return;
      if (Q.tag === m) return Z;
      return null;
    }
    function bY(J) {
      if (J.tag === AJ) {
        var Q = J.memoizedState;
        if (Q === null) {
          var Z = J.alternate;
          if (Z !== null) Q = Z.memoizedState;
        }
        if (Q !== null) return Q.dehydrated;
      }
      return null;
    }
    function kY(J) {
      return J.tag === m ? J.stateNode.containerInfo : null;
    }
    function bM(J) {
      return M4(J) === J;
    }
    function kM(J) {
      {
        var Q = NM.current;
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
      var G = J5(J);
      if (!G) return !1;
      return M4(G) === G;
    }
    function gY(J) {
      if (M4(J) !== J)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function TY(J) {
      var Q = J.alternate;
      if (!Q) {
        var Z = M4(J);
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
          var K = B.child;
          while (K) {
            if (K === X) return gY(B), J;
            if (K === G) return gY(B), Q;
            K = K.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (X.return !== G.return) (X = B), (G = U);
        else {
          var H = !1,
            z = B.child;
          while (z) {
            if (z === X) {
              (H = !0), (X = B), (G = U);
              break;
            }
            if (z === G) {
              (H = !0), (G = B), (X = U);
              break;
            }
            z = z.sibling;
          }
          if (!H) {
            z = U.child;
            while (z) {
              if (z === X) {
                (H = !0), (X = U), (G = B);
                break;
              }
              if (z === G) {
                (H = !0), (G = U), (X = B);
                break;
              }
              z = z.sibling;
            }
            if (!H)
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
      if (X.tag !== m)
        throw new Error("Unable to find node on an unmounted component.");
      if (X.stateNode.current === X) return J;
      return Q;
    }
    function hY(J) {
      var Q = TY(J);
      return Q !== null ? fY(Q) : null;
    }
    function fY(J) {
      if (J.tag === c || J.tag === xJ) return J;
      var Q = J.child;
      while (Q !== null) {
        var Z = fY(Q);
        if (Z !== null) return Z;
        Q = Q.sibling;
      }
      return null;
    }
    function gM(J) {
      var Q = TY(J);
      return Q !== null ? uY(Q) : null;
    }
    function uY(J) {
      if (J.tag === c || J.tag === xJ) return J;
      var Q = J.child;
      while (Q !== null) {
        if (Q.tag !== OJ) {
          var Z = uY(Q);
          if (Z !== null) return Z;
        }
        Q = Q.sibling;
      }
      return null;
    }
    var dY = s.unstable_scheduleCallback,
      TM = s.unstable_cancelCallback,
      hM = s.unstable_shouldYield,
      fM = s.unstable_requestPaint,
      NQ = s.unstable_now,
      uM = s.unstable_getCurrentPriorityLevel,
      e7 = s.unstable_ImmediatePriority,
      _X = s.unstable_UserBlockingPriority,
      V4 = s.unstable_NormalPriority,
      dM = s.unstable_LowPriority,
      SX = s.unstable_IdlePriority,
      sM = s.unstable_yieldValue,
      mM = s.unstable_setDisableYieldValue,
      q4 = null,
      mQ = null,
      k = null,
      k0 = !1,
      $0 = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function yM(J) {
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
        if (v0)
          J = MJ({}, J, { getLaneLabelMap: oM, injectProfilingHooks: pM });
        (q4 = Q.inject(J)), (mQ = Q);
      } catch (Z) {
        M("React instrumentation encountered an error: %s.", Z);
      }
      if (Q.checkDCE) return !0;
      else return !1;
    }
    function lM(J, Q) {
      if (mQ && typeof mQ.onScheduleFiberRoot === "function")
        try {
          mQ.onScheduleFiberRoot(q4, J, Q);
        } catch (Z) {
          if (!k0)
            (k0 = !0), M("React instrumentation encountered an error: %s", Z);
        }
    }
    function cM(J, Q) {
      if (mQ && typeof mQ.onCommitFiberRoot === "function")
        try {
          var Z = (J.current.flags & CJ) === CJ;
          if (pZ) {
            var X;
            switch (Q) {
              case uZ:
                X = e7;
                break;
              case U1:
                X = _X;
                break;
              case Y1:
                X = V4;
                break;
              case Y8:
                X = SX;
                break;
              default:
                X = V4;
                break;
            }
            mQ.onCommitFiberRoot(q4, J, X, Z);
          } else mQ.onCommitFiberRoot(q4, J, void 0, Z);
        } catch (G) {
          if (!k0)
            (k0 = !0), M("React instrumentation encountered an error: %s", G);
        }
    }
    function iM(J) {
      if (mQ && typeof mQ.onPostCommitFiberRoot === "function")
        try {
          mQ.onPostCommitFiberRoot(q4, J);
        } catch (Q) {
          if (!k0)
            (k0 = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function aM(J) {
      if (mQ && typeof mQ.onCommitFiberUnmount === "function")
        try {
          mQ.onCommitFiberUnmount(q4, J);
        } catch (Q) {
          if (!k0)
            (k0 = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function bQ(J) {
      {
        if (typeof sM === "function") mM(J), iJ(J);
        if (mQ && typeof mQ.setStrictMode === "function")
          try {
            mQ.setStrictMode(q4, J);
          } catch (Q) {
            if (!k0)
              (k0 = !0), M("React instrumentation encountered an error: %s", Q);
          }
      }
    }
    function pM(J) {
      k = J;
    }
    function oM() {
      {
        var J = new Map(),
          Q = 1;
        for (var Z = 0; Z < vX; Z++) {
          var X = OV(Q);
          J.set(Q, X), (Q *= 2);
        }
        return J;
      }
    }
    function rM(J) {
      if (k !== null && typeof k.markCommitStarted === "function")
        k.markCommitStarted(J);
    }
    function sY() {
      if (k !== null && typeof k.markCommitStopped === "function")
        k.markCommitStopped();
    }
    function q6(J) {
      if (k !== null && typeof k.markComponentRenderStarted === "function")
        k.markComponentRenderStarted(J);
    }
    function X5() {
      if (k !== null && typeof k.markComponentRenderStopped === "function")
        k.markComponentRenderStopped();
    }
    function nM(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStarted === "function"
      )
        k.markComponentPassiveEffectMountStarted(J);
    }
    function tM() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStopped === "function"
      )
        k.markComponentPassiveEffectMountStopped();
    }
    function eM(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStarted === "function"
      )
        k.markComponentPassiveEffectUnmountStarted(J);
    }
    function JV() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStopped === "function"
      )
        k.markComponentPassiveEffectUnmountStopped();
    }
    function QV(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStarted === "function"
      )
        k.markComponentLayoutEffectMountStarted(J);
    }
    function ZV() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStopped === "function"
      )
        k.markComponentLayoutEffectMountStopped();
    }
    function mY(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStarted === "function"
      )
        k.markComponentLayoutEffectUnmountStarted(J);
    }
    function yY() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStopped === "function"
      )
        k.markComponentLayoutEffectUnmountStopped();
    }
    function XV(J, Q, Z) {
      if (k !== null && typeof k.markComponentErrored === "function")
        k.markComponentErrored(J, Q, Z);
    }
    function GV(J, Q, Z) {
      if (k !== null && typeof k.markComponentSuspended === "function")
        k.markComponentSuspended(J, Q, Z);
    }
    function BV(J) {
      if (k !== null && typeof k.markLayoutEffectsStarted === "function")
        k.markLayoutEffectsStarted(J);
    }
    function UV() {
      if (k !== null && typeof k.markLayoutEffectsStopped === "function")
        k.markLayoutEffectsStopped();
    }
    function YV(J) {
      if (k !== null && typeof k.markPassiveEffectsStarted === "function")
        k.markPassiveEffectsStarted(J);
    }
    function KV() {
      if (k !== null && typeof k.markPassiveEffectsStopped === "function")
        k.markPassiveEffectsStopped();
    }
    function lY(J) {
      if (k !== null && typeof k.markRenderStarted === "function")
        k.markRenderStarted(J);
    }
    function WV() {
      if (k !== null && typeof k.markRenderYielded === "function")
        k.markRenderYielded();
    }
    function cY() {
      if (k !== null && typeof k.markRenderStopped === "function")
        k.markRenderStopped();
    }
    function HV(J) {
      if (k !== null && typeof k.markRenderScheduled === "function")
        k.markRenderScheduled(J);
    }
    function zV(J, Q) {
      if (k !== null && typeof k.markForceUpdateScheduled === "function")
        k.markForceUpdateScheduled(J, Q);
    }
    function CX(J, Q) {
      if (k !== null && typeof k.markStateUpdateScheduled === "function")
        k.markStateUpdateScheduled(J, Q);
    }
    var r = 0,
      $J = 1,
      kJ = 2,
      OQ = 8,
      g0 = 16,
      iY = Math.clz32 ? Math.clz32 : qV,
      MV = Math.log,
      VV = Math.LN2;
    function qV(J) {
      var Q = J >>> 0;
      if (Q === 0) return 32;
      return (31 - ((MV(Q) / VV) | 0)) | 0;
    }
    var vX = 31,
      x = 0,
      kQ = 0,
      ZJ = 1,
      G5 = 2,
      B1 = 4,
      O4 = 8,
      T0 = 16,
      O6 = 32,
      B5 = 4194240,
      D6 = 64,
      NX = 128,
      bX = 256,
      kX = 512,
      gX = 1024,
      TX = 2048,
      hX = 4096,
      fX = 8192,
      uX = 16384,
      dX = 32768,
      sX = 65536,
      mX = 131072,
      yX = 262144,
      lX = 524288,
      cX = 1048576,
      iX = 2097152,
      J8 = 130023424,
      U5 = 4194304,
      aX = 8388608,
      pX = 16777216,
      oX = 33554432,
      rX = 67108864,
      aY = U5,
      $6 = 134217728,
      pY = 268435455,
      j6 = 268435456,
      D4 = 536870912,
      hZ = 1073741824;
    function OV(J) {
      {
        if (J & ZJ) return "Sync";
        if (J & G5) return "InputContinuousHydration";
        if (J & B1) return "InputContinuous";
        if (J & O4) return "DefaultHydration";
        if (J & T0) return "Default";
        if (J & O6) return "TransitionHydration";
        if (J & B5) return "Transition";
        if (J & J8) return "Retry";
        if (J & $6) return "SelectiveHydration";
        if (J & j6) return "IdleHydration";
        if (J & D4) return "Idle";
        if (J & hZ) return "Offscreen";
      }
    }
    var oJ = -1,
      Q8 = D6,
      Z8 = U5;
    function P6(J) {
      switch ($4(J)) {
        case ZJ:
          return ZJ;
        case G5:
          return G5;
        case B1:
          return B1;
        case O4:
          return O4;
        case T0:
          return T0;
        case O6:
          return O6;
        case D6:
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
        case cX:
        case iX:
          return J & B5;
        case U5:
        case aX:
        case pX:
        case oX:
        case rX:
          return J & J8;
        case $6:
          return $6;
        case j6:
          return j6;
        case D4:
          return D4;
        case hZ:
          return hZ;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), J
          );
      }
    }
    function X8(J, Q) {
      var Z = J.pendingLanes;
      if (Z === x) return x;
      var X = x,
        G = J.suspendedLanes,
        B = J.pingedLanes,
        U = Z & pY;
      if (U !== x) {
        var Y = U & ~G;
        if (Y !== x) X = P6(Y);
        else {
          var K = U & B;
          if (K !== x) X = P6(K);
        }
      } else {
        var H = Z & ~G;
        if (H !== x) X = P6(H);
        else if (B !== x) X = P6(B);
      }
      if (X === x) return x;
      if (Q !== x && Q !== X && (Q & G) === x) {
        var z = $4(X),
          D = $4(Q);
        if (z >= D || (z === T0 && (D & B5) !== x)) return Q;
      }
      if ((X & B1) !== x) X |= Z & T0;
      var O = J.entangledLanes;
      if (O !== x) {
        var E = J.entanglements,
          P = X & O;
        while (P > 0) {
          var R = j4(P),
            g = 1 << R;
          (X |= E[R]), (P &= ~g);
        }
      }
      return X;
    }
    function DV(J, Q) {
      var Z = J.eventTimes,
        X = oJ;
      while (Q > 0) {
        var G = j4(Q),
          B = 1 << G,
          U = Z[G];
        if (U > X) X = U;
        Q &= ~B;
      }
      return X;
    }
    function $V(J, Q) {
      switch (J) {
        case ZJ:
        case G5:
        case B1:
          return Q + 250;
        case O4:
        case T0:
        case O6:
        case D6:
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
        case cX:
        case iX:
          return Q + 5000;
        case U5:
        case aX:
        case pX:
        case oX:
        case rX:
          return oJ;
        case $6:
        case j6:
        case D4:
        case hZ:
          return oJ;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), oJ
          );
      }
    }
    function jV(J, Q) {
      var {
          pendingLanes: Z,
          suspendedLanes: X,
          pingedLanes: G,
          expirationTimes: B,
        } = J,
        U = Z;
      while (U > 0) {
        var Y = j4(U),
          K = 1 << Y,
          H = B[Y];
        if (H === oJ) {
          if ((K & X) === x || (K & G) !== x) B[Y] = $V(K, Q);
        } else if (H <= Q) J.expiredLanes |= K;
        U &= ~K;
      }
    }
    function PV(J) {
      return P6(J.pendingLanes);
    }
    function nX(J) {
      var Q = J.pendingLanes & ~hZ;
      if (Q !== x) return Q;
      if (Q & hZ) return hZ;
      return x;
    }
    function AV(J) {
      return (J & ZJ) !== x;
    }
    function tX(J) {
      return (J & pY) !== x;
    }
    function oY(J) {
      return (J & J8) === J;
    }
    function EV(J) {
      var Q = ZJ | B1 | T0;
      return (J & Q) === x;
    }
    function RV(J) {
      return (J & B5) === J;
    }
    function G8(J, Q) {
      var Z = G5 | B1 | O4 | T0;
      return (Q & Z) !== x;
    }
    function LV(J, Q) {
      return (Q & J.expiredLanes) !== x;
    }
    function rY(J) {
      return (J & B5) !== x;
    }
    function nY() {
      var J = Q8;
      if (((Q8 <<= 1), (Q8 & B5) === x)) Q8 = D6;
      return J;
    }
    function FV() {
      var J = Z8;
      if (((Z8 <<= 1), (Z8 & J8) === x)) Z8 = U5;
      return J;
    }
    function $4(J) {
      return J & -J;
    }
    function A6(J) {
      return $4(J);
    }
    function j4(J) {
      return 31 - iY(J);
    }
    function eX(J) {
      return j4(J);
    }
    function fZ(J, Q) {
      return (J & Q) !== x;
    }
    function Y5(J, Q) {
      return (J & Q) === Q;
    }
    function zJ(J, Q) {
      return J | Q;
    }
    function B8(J, Q) {
      return J & ~Q;
    }
    function tY(J, Q) {
      return J & Q;
    }
    function U8(J) {
      return J;
    }
    function IV(J, Q) {
      return J !== kQ && J < Q ? J : Q;
    }
    function JG(J) {
      var Q = [];
      for (var Z = 0; Z < vX; Z++) Q.push(J);
      return Q;
    }
    function E6(J, Q, Z) {
      if (((J.pendingLanes |= Q), Q !== D4))
        (J.suspendedLanes = x), (J.pingedLanes = x);
      var X = J.eventTimes,
        G = eX(Q);
      X[G] = Z;
    }
    function xV(J, Q) {
      (J.suspendedLanes |= Q), (J.pingedLanes &= ~Q);
      var Z = J.expirationTimes,
        X = Q;
      while (X > 0) {
        var G = j4(X),
          B = 1 << G;
        (Z[G] = oJ), (X &= ~B);
      }
    }
    function eY(J, Q, Z) {
      J.pingedLanes |= J.suspendedLanes & Q;
    }
    function wV(J, Q) {
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
        var Y = j4(U),
          K = 1 << Y;
        (X[Y] = x), (G[Y] = oJ), (B[Y] = oJ), (U &= ~K);
      }
    }
    function QG(J, Q) {
      var Z = (J.entangledLanes |= Q),
        X = J.entanglements,
        G = Z;
      while (G) {
        var B = j4(G),
          U = 1 << B;
        if ((U & Q) | (X[B] & Q)) X[B] |= Q;
        G &= ~U;
      }
    }
    function _V(J, Q) {
      var Z = $4(Q),
        X;
      switch (Z) {
        case B1:
          X = G5;
          break;
        case T0:
          X = O4;
          break;
        case D6:
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
        case cX:
        case iX:
        case U5:
        case aX:
        case pX:
        case oX:
        case rX:
          X = O6;
          break;
        case D4:
          X = j6;
          break;
        default:
          X = kQ;
          break;
      }
      if ((X & (J.suspendedLanes | Q)) !== kQ) return kQ;
      return X;
    }
    function JK(J, Q, Z) {
      if (!$0) return;
      var X = J.pendingUpdatersLaneMap;
      while (Z > 0) {
        var G = eX(Z),
          B = 1 << G,
          U = X[G];
        U.add(Q), (Z &= ~B);
      }
    }
    function QK(J, Q) {
      if (!$0) return;
      var { pendingUpdatersLaneMap: Z, memoizedUpdaters: X } = J;
      while (Q > 0) {
        var G = eX(Q),
          B = 1 << G,
          U = Z[G];
        if (U.size > 0)
          U.forEach(function (Y) {
            var K = Y.alternate;
            if (K === null || !X.has(K)) X.add(Y);
          }),
            U.clear();
        Q &= ~B;
      }
    }
    function ZK(J, Q) {
      return null;
    }
    var uZ = ZJ,
      U1 = B1,
      Y1 = T0,
      Y8 = D4,
      R6 = kQ;
    function j0() {
      return R6;
    }
    function gQ(J) {
      R6 = J;
    }
    function SV(J, Q) {
      var Z = R6;
      try {
        return (R6 = J), Q();
      } finally {
        R6 = Z;
      }
    }
    function CV(J, Q) {
      return J !== 0 && J < Q ? J : Q;
    }
    function vV(J, Q) {
      return J === 0 || J > Q ? J : Q;
    }
    function ZG(J, Q) {
      return J !== 0 && J < Q;
    }
    function XK(J) {
      var Q = $4(J);
      if (!ZG(uZ, Q)) return uZ;
      if (!ZG(U1, Q)) return U1;
      if (tX(Q)) return Y1;
      return Y8;
    }
    function K8(J) {
      var Q = J.current.memoizedState;
      return Q.isDehydrated;
    }
    var GK;
    function NV(J) {
      GK = J;
    }
    function bV(J) {
      GK(J);
    }
    var XG;
    function kV(J) {
      XG = J;
    }
    var BK;
    function gV(J) {
      BK = J;
    }
    var UK;
    function TV(J) {
      UK = J;
    }
    var YK;
    function hV(J) {
      YK = J;
    }
    var GG = !1,
      W8 = [],
      k1 = null,
      g1 = null,
      T1 = null,
      L6 = new Map(),
      F6 = new Map(),
      h1 = [],
      fV = [
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
    function uV(J) {
      return fV.indexOf(J) > -1;
    }
    function dV(J, Q, Z, X, G) {
      return {
        blockedOn: J,
        domEventName: Q,
        eventSystemFlags: Z,
        nativeEvent: G,
        targetContainers: [X],
      };
    }
    function KK(J, Q) {
      switch (J) {
        case "focusin":
        case "focusout":
          k1 = null;
          break;
        case "dragenter":
        case "dragleave":
          g1 = null;
          break;
        case "mouseover":
        case "mouseout":
          T1 = null;
          break;
        case "pointerover":
        case "pointerout": {
          var Z = Q.pointerId;
          L6.delete(Z);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var X = Q.pointerId;
          F6.delete(X);
          break;
        }
      }
    }
    function I6(J, Q, Z, X, G, B) {
      if (J === null || J.nativeEvent !== B) {
        var U = dV(Q, Z, X, G, B);
        if (Q !== null) {
          var Y = d1(Q);
          if (Y !== null) XG(Y);
        }
        return U;
      }
      J.eventSystemFlags |= X;
      var K = J.targetContainers;
      if (G !== null && K.indexOf(G) === -1) K.push(G);
      return J;
    }
    function sV(J, Q, Z, X, G) {
      switch (Q) {
        case "focusin": {
          var B = G;
          return (k1 = I6(k1, J, Q, Z, X, B)), !0;
        }
        case "dragenter": {
          var U = G;
          return (g1 = I6(g1, J, Q, Z, X, U)), !0;
        }
        case "mouseover": {
          var Y = G;
          return (T1 = I6(T1, J, Q, Z, X, Y)), !0;
        }
        case "pointerover": {
          var K = G,
            H = K.pointerId;
          return L6.set(H, I6(L6.get(H) || null, J, Q, Z, X, K)), !0;
        }
        case "gotpointercapture": {
          var z = G,
            D = z.pointerId;
          return F6.set(D, I6(F6.get(D) || null, J, Q, Z, X, z)), !0;
        }
      }
      return !1;
    }
    function WK(J) {
      var Q = E4(J.target);
      if (Q !== null) {
        var Z = M4(Q);
        if (Z !== null) {
          var X = Z.tag;
          if (X === AJ) {
            var G = bY(Z);
            if (G !== null) {
              (J.blockedOn = G),
                YK(J.priority, function () {
                  BK(Z);
                });
              return;
            }
          } else if (X === m) {
            var B = Z.stateNode;
            if (K8(B)) {
              J.blockedOn = kY(Z);
              return;
            }
          }
        }
      }
      J.blockedOn = null;
    }
    function mV(J) {
      var Q = UK(),
        Z = { blockedOn: null, target: J, priority: Q },
        X = 0;
      for (; X < h1.length; X++) if (!ZG(Q, h1[X].priority)) break;
      if ((h1.splice(X, 0, Z), X === 0)) WK(Z);
    }
    function H8(J) {
      if (J.blockedOn !== null) return !1;
      var Q = J.targetContainers;
      while (Q.length > 0) {
        var Z = Q[0],
          X = YG(J.domEventName, J.eventSystemFlags, Z, J.nativeEvent);
        if (X === null) {
          var G = J.nativeEvent,
            B = new G.constructor(G.type, G);
          qM(B), G.target.dispatchEvent(B), OM();
        } else {
          var U = d1(X);
          if (U !== null) XG(U);
          return (J.blockedOn = X), !1;
        }
        Q.shift();
      }
      return !0;
    }
    function HK(J, Q, Z) {
      if (H8(J)) Z.delete(Q);
    }
    function yV() {
      if (((GG = !1), k1 !== null && H8(k1))) k1 = null;
      if (g1 !== null && H8(g1)) g1 = null;
      if (T1 !== null && H8(T1)) T1 = null;
      L6.forEach(HK), F6.forEach(HK);
    }
    function x6(J, Q) {
      if (J.blockedOn === Q) {
        if (((J.blockedOn = null), !GG))
          (GG = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, yV);
      }
    }
    function w6(J) {
      if (W8.length > 0) {
        x6(W8[0], J);
        for (var Q = 1; Q < W8.length; Q++) {
          var Z = W8[Q];
          if (Z.blockedOn === J) Z.blockedOn = null;
        }
      }
      if (k1 !== null) x6(k1, J);
      if (g1 !== null) x6(g1, J);
      if (T1 !== null) x6(T1, J);
      var X = function (Y) {
        return x6(Y, J);
      };
      L6.forEach(X), F6.forEach(X);
      for (var G = 0; G < h1.length; G++) {
        var B = h1[G];
        if (B.blockedOn === J) B.blockedOn = null;
      }
      while (h1.length > 0) {
        var U = h1[0];
        if (U.blockedOn !== null) break;
        else if ((WK(U), U.blockedOn === null)) h1.shift();
      }
    }
    var K5 = LJ.ReactCurrentBatchConfig,
      BG = !0;
    function zK(J) {
      BG = !!J;
    }
    function lV() {
      return BG;
    }
    function cV(J, Q, Z) {
      var X = MK(Q),
        G;
      switch (X) {
        case uZ:
          G = iV;
          break;
        case U1:
          G = aV;
          break;
        case Y1:
        default:
          G = UG;
          break;
      }
      return G.bind(null, Q, Z, J);
    }
    function iV(J, Q, Z, X) {
      var G = j0(),
        B = K5.transition;
      K5.transition = null;
      try {
        gQ(uZ), UG(J, Q, Z, X);
      } finally {
        gQ(G), (K5.transition = B);
      }
    }
    function aV(J, Q, Z, X) {
      var G = j0(),
        B = K5.transition;
      K5.transition = null;
      try {
        gQ(U1), UG(J, Q, Z, X);
      } finally {
        gQ(G), (K5.transition = B);
      }
    }
    function UG(J, Q, Z, X) {
      if (!BG) return;
      pV(J, Q, Z, X);
    }
    function pV(J, Q, Z, X) {
      var G = YG(J, Q, Z, X);
      if (G === null) {
        EG(J, Q, X, z8, Z), KK(J, X);
        return;
      }
      if (sV(G, J, Q, Z, X)) {
        X.stopPropagation();
        return;
      }
      if ((KK(J, X), Q & Y6 && uV(J))) {
        while (G !== null) {
          var B = d1(G);
          if (B !== null) bV(B);
          var U = YG(J, Q, Z, X);
          if (U === null) EG(J, Q, X, z8, Z);
          if (U === G) break;
          G = U;
        }
        if (G !== null) X.stopPropagation();
        return;
      }
      EG(J, Q, X, null, Z);
    }
    var z8 = null;
    function YG(J, Q, Z, X) {
      z8 = null;
      var G = qX(X),
        B = E4(G);
      if (B !== null) {
        var U = M4(B);
        if (U === null) B = null;
        else {
          var Y = U.tag;
          if (Y === AJ) {
            var K = bY(U);
            if (K !== null) return K;
            B = null;
          } else if (Y === m) {
            var H = U.stateNode;
            if (K8(H)) return kY(U);
            B = null;
          } else if (U !== B) B = null;
        }
      }
      return (z8 = B), null;
    }
    function MK(J) {
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
          return uZ;
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
          return U1;
        case "message": {
          var Q = uM();
          switch (Q) {
            case e7:
              return uZ;
            case _X:
              return U1;
            case V4:
            case dM:
              return Y1;
            case SX:
              return Y8;
            default:
              return Y1;
          }
        }
        default:
          return Y1;
      }
    }
    function oV(J, Q, Z) {
      return J.addEventListener(Q, Z, !1), Z;
    }
    function rV(J, Q, Z) {
      return J.addEventListener(Q, Z, !0), Z;
    }
    function nV(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { capture: !0, passive: X }), Z;
    }
    function tV(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { passive: X }), Z;
    }
    var _6 = null,
      KG = null,
      S6 = null;
    function eV(J) {
      return (_6 = J), (KG = qK()), !0;
    }
    function Jq() {
      (_6 = null), (KG = null), (S6 = null);
    }
    function VK() {
      if (S6) return S6;
      var J,
        Q = KG,
        Z = Q.length,
        X,
        G = qK(),
        B = G.length;
      for (J = 0; J < Z; J++) if (Q[J] !== G[J]) break;
      var U = Z - J;
      for (X = 1; X <= U; X++) if (Q[Z - X] !== G[B - X]) break;
      var Y = X > 1 ? 1 - X : void 0;
      return (S6 = G.slice(J, Y)), S6;
    }
    function qK() {
      if ("value" in _6) return _6.value;
      return _6.textContent;
    }
    function M8(J) {
      var Q,
        Z = J.keyCode;
      if ("charCode" in J) {
        if (((Q = J.charCode), Q === 0 && Z === 13)) Q = 13;
      } else Q = Z;
      if (Q === 10) Q = 13;
      if (Q >= 32 || Q === 13) return Q;
      return 0;
    }
    function V8() {
      return !0;
    }
    function OK() {
      return !1;
    }
    function dZ(J) {
      function Q(Z, X, G, B, U) {
        (this._reactName = Z),
          (this._targetInst = G),
          (this.type = X),
          (this.nativeEvent = B),
          (this.target = U),
          (this.currentTarget = null);
        for (var Y in J) {
          if (!J.hasOwnProperty(Y)) continue;
          var K = J[Y];
          if (K) this[Y] = K(B);
          else this[Y] = B[Y];
        }
        var H =
          B.defaultPrevented != null
            ? B.defaultPrevented
            : B.returnValue === !1;
        if (H) this.isDefaultPrevented = V8;
        else this.isDefaultPrevented = OK;
        return (this.isPropagationStopped = OK), this;
      }
      return (
        MJ(Q.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.preventDefault) Z.preventDefault();
            else if (typeof Z.returnValue !== "unknown") Z.returnValue = !1;
            this.isDefaultPrevented = V8;
          },
          stopPropagation: function () {
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.stopPropagation) Z.stopPropagation();
            else if (typeof Z.cancelBubble !== "unknown") Z.cancelBubble = !0;
            this.isPropagationStopped = V8;
          },
          persist: function () {},
          isPersistent: V8,
        }),
        Q
      );
    }
    var W5 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (J) {
          return J.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      WG = dZ(W5),
      C6 = MJ({}, W5, { view: 0, detail: 0 }),
      Qq = dZ(C6),
      HG,
      zG,
      v6;
    function Zq(J) {
      if (J !== v6) {
        if (v6 && J.type === "mousemove")
          (HG = J.screenX - v6.screenX), (zG = J.screenY - v6.screenY);
        else (HG = 0), (zG = 0);
        v6 = J;
      }
    }
    var q8 = MJ({}, C6, {
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
        getModifierState: VG,
        button: 0,
        buttons: 0,
        relatedTarget: function (J) {
          if (J.relatedTarget === void 0)
            return J.fromElement === J.srcElement ? J.toElement : J.fromElement;
          return J.relatedTarget;
        },
        movementX: function (J) {
          if ("movementX" in J) return J.movementX;
          return Zq(J), HG;
        },
        movementY: function (J) {
          if ("movementY" in J) return J.movementY;
          return zG;
        },
      }),
      DK = dZ(q8),
      Xq = MJ({}, q8, { dataTransfer: 0 }),
      Gq = dZ(Xq),
      Bq = MJ({}, C6, { relatedTarget: 0 }),
      MG = dZ(Bq),
      Uq = MJ({}, W5, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Yq = dZ(Uq),
      Kq = MJ({}, W5, {
        clipboardData: function (J) {
          return "clipboardData" in J ? J.clipboardData : window.clipboardData;
        },
      }),
      Wq = dZ(Kq),
      Hq = MJ({}, W5, { data: 0 }),
      $K = dZ(Hq),
      zq = $K,
      Mq = {
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
      Vq = {
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
    function qq(J) {
      if (J.key) {
        var Q = Mq[J.key] || J.key;
        if (Q !== "Unidentified") return Q;
      }
      if (J.type === "keypress") {
        var Z = M8(J);
        return Z === 13 ? "Enter" : String.fromCharCode(Z);
      }
      if (J.type === "keydown" || J.type === "keyup")
        return Vq[J.keyCode] || "Unidentified";
      return "";
    }
    var Oq = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
    function Dq(J) {
      var Q = this,
        Z = Q.nativeEvent;
      if (Z.getModifierState) return Z.getModifierState(J);
      var X = Oq[J];
      return X ? !!Z[X] : !1;
    }
    function VG(J) {
      return Dq;
    }
    var $q = MJ({}, C6, {
        key: qq,
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: VG,
        charCode: function (J) {
          if (J.type === "keypress") return M8(J);
          return 0;
        },
        keyCode: function (J) {
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
        which: function (J) {
          if (J.type === "keypress") return M8(J);
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
      }),
      jq = dZ($q),
      Pq = MJ({}, q8, {
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
      jK = dZ(Pq),
      Aq = MJ({}, C6, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: VG,
      }),
      Eq = dZ(Aq),
      Rq = MJ({}, W5, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Lq = dZ(Rq),
      Fq = MJ({}, q8, {
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
      Iq = dZ(Fq),
      xq = [9, 13, 27, 32],
      PK = 229,
      qG = fQ && "CompositionEvent" in window,
      N6 = null;
    if (fQ && "documentMode" in document) N6 = document.documentMode;
    var wq = fQ && "TextEvent" in window && !N6,
      AK = fQ && (!qG || (N6 && N6 > 8 && N6 <= 11)),
      EK = 32,
      RK = String.fromCharCode(EK);
    function _q() {
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
    var LK = !1;
    function Sq(J) {
      return (J.ctrlKey || J.altKey || J.metaKey) && !(J.ctrlKey && J.altKey);
    }
    function Cq(J) {
      switch (J) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vq(J, Q) {
      return J === "keydown" && Q.keyCode === PK;
    }
    function FK(J, Q) {
      switch (J) {
        case "keyup":
          return xq.indexOf(Q.keyCode) !== -1;
        case "keydown":
          return Q.keyCode !== PK;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function IK(J) {
      var Q = J.detail;
      if (typeof Q === "object" && "data" in Q) return Q.data;
      return null;
    }
    function xK(J) {
      return J.locale === "ko";
    }
    var H5 = !1;
    function Nq(J, Q, Z, X, G) {
      var B, U;
      if (qG) B = Cq(Q);
      else if (!H5) {
        if (vq(Q, X)) B = "onCompositionStart";
      } else if (FK(Q, X)) B = "onCompositionEnd";
      if (!B) return null;
      if (AK && !xK(X)) {
        if (!H5 && B === "onCompositionStart") H5 = eV(G);
        else if (B === "onCompositionEnd") {
          if (H5) U = VK();
        }
      }
      var Y = P8(Z, B);
      if (Y.length > 0) {
        var K = new $K(B, Q, null, X, G);
        if ((J.push({ event: K, listeners: Y }), U)) K.data = U;
        else {
          var H = IK(X);
          if (H !== null) K.data = H;
        }
      }
    }
    function bq(J, Q) {
      switch (J) {
        case "compositionend":
          return IK(Q);
        case "keypress":
          var Z = Q.which;
          if (Z !== EK) return null;
          return (LK = !0), RK;
        case "textInput":
          var X = Q.data;
          if (X === RK && LK) return null;
          return X;
        default:
          return null;
      }
    }
    function kq(J, Q) {
      if (H5) {
        if (J === "compositionend" || (!qG && FK(J, Q))) {
          var Z = VK();
          return Jq(), (H5 = !1), Z;
        }
        return null;
      }
      switch (J) {
        case "paste":
          return null;
        case "keypress":
          if (!Sq(Q)) {
            if (Q.char && Q.char.length > 1) return Q.char;
            else if (Q.which) return String.fromCharCode(Q.which);
          }
          return null;
        case "compositionend":
          return AK && !xK(Q) ? null : Q.data;
        default:
          return null;
      }
    }
    function gq(J, Q, Z, X, G) {
      var B;
      if (wq) B = bq(Q, X);
      else B = kq(Q, X);
      if (!B) return null;
      var U = P8(Z, "onBeforeInput");
      if (U.length > 0) {
        var Y = new zq("onBeforeInput", "beforeinput", null, X, G);
        J.push({ event: Y, listeners: U }), (Y.data = B);
      }
    }
    function Tq(J, Q, Z, X, G, B, U) {
      Nq(J, Q, Z, X, G), gq(J, Q, Z, X, G);
    }
    var hq = {
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
    function wK(J) {
      var Q = J && J.nodeName && J.nodeName.toLowerCase();
      if (Q === "input") return !!hq[J.type];
      if (Q === "textarea") return !0;
      return !1;
    }
    function fq(J) {
      if (!fQ) return !1;
      var Q = "on" + J,
        Z = Q in document;
      if (!Z) {
        var X = document.createElement("div");
        X.setAttribute(Q, "return;"), (Z = typeof X[Q] === "function");
      }
      return Z;
    }
    function uq() {
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
    function _K(J, Q, Z, X) {
      IY(X);
      var G = P8(Q, "onChange");
      if (G.length > 0) {
        var B = new WG("onChange", "change", null, Z, X);
        J.push({ event: B, listeners: G });
      }
    }
    var b6 = null,
      k6 = null;
    function dq(J) {
      var Q = J.nodeName && J.nodeName.toLowerCase();
      return Q === "select" || (Q === "input" && J.type === "file");
    }
    function sq(J) {
      var Q = [];
      _K(Q, k6, J, qX(J)), SY(mq, Q);
    }
    function mq(J) {
      iK(J, 0);
    }
    function O8(J) {
      var Q = D5(J);
      if (i4(Q)) return J;
    }
    function yq(J, Q) {
      if (J === "change") return Q;
    }
    var SK = !1;
    if (fQ)
      SK = fq("input") && (!document.documentMode || document.documentMode > 9);
    function lq(J, Q) {
      (b6 = J), (k6 = Q), b6.attachEvent("onpropertychange", vK);
    }
    function CK() {
      if (!b6) return;
      b6.detachEvent("onpropertychange", vK), (b6 = null), (k6 = null);
    }
    function vK(J) {
      if (J.propertyName !== "value") return;
      if (O8(k6)) sq(J);
    }
    function cq(J, Q, Z) {
      if (J === "focusin") CK(), lq(Q, Z);
      else if (J === "focusout") CK();
    }
    function iq(J, Q) {
      if (J === "selectionchange" || J === "keyup" || J === "keydown")
        return O8(k6);
    }
    function aq(J) {
      var Q = J.nodeName;
      return (
        Q &&
        Q.toLowerCase() === "input" &&
        (J.type === "checkbox" || J.type === "radio")
      );
    }
    function pq(J, Q) {
      if (J === "click") return O8(Q);
    }
    function oq(J, Q) {
      if (J === "input" || J === "change") return O8(Q);
    }
    function rq(J) {
      var Q = J._wrapperState;
      if (!Q || !Q.controlled || J.type !== "number") return;
      bJ(J, "number", J.value);
    }
    function nq(J, Q, Z, X, G, B, U) {
      var Y = Z ? D5(Z) : window,
        K,
        H;
      if (dq(Y)) K = yq;
      else if (wK(Y))
        if (SK) K = oq;
        else (K = iq), (H = cq);
      else if (aq(Y)) K = pq;
      if (K) {
        var z = K(Q, Z);
        if (z) {
          _K(J, z, X, G);
          return;
        }
      }
      if (H) H(Q, Y, Z);
      if (Q === "focusout") rq(Y);
    }
    function tq() {
      gZ("onMouseEnter", ["mouseout", "mouseover"]),
        gZ("onMouseLeave", ["mouseout", "mouseover"]),
        gZ("onPointerEnter", ["pointerout", "pointerover"]),
        gZ("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function eq(J, Q, Z, X, G, B, U) {
      var Y = Q === "mouseover" || Q === "pointerover",
        K = Q === "mouseout" || Q === "pointerout";
      if (Y && !DM(X)) {
        var H = X.relatedTarget || X.fromElement;
        if (H) {
          if (E4(H) || o6(H)) return;
        }
      }
      if (!K && !Y) return;
      var z;
      if (G.window === G) z = G;
      else {
        var D = G.ownerDocument;
        if (D) z = D.defaultView || D.parentWindow;
        else z = window;
      }
      var O, E;
      if (K) {
        var P = X.relatedTarget || X.toElement;
        if (((O = Z), (E = P ? E4(P) : null), E !== null)) {
          var R = M4(E);
          if (E !== R || (E.tag !== c && E.tag !== xJ)) E = null;
        }
      } else (O = null), (E = Z);
      if (O === E) return;
      var g = DK,
        l = "onMouseLeave",
        d = "onMouseEnter",
        VJ = "mouse";
      if (Q === "pointerout" || Q === "pointerover")
        (g = jK),
          (l = "onPointerLeave"),
          (d = "onPointerEnter"),
          (VJ = "pointer");
      var qJ = O == null ? z : D5(O),
        $ = E == null ? z : D5(E),
        F = new g(l, VJ + "leave", O, X, G);
      (F.target = qJ), (F.relatedTarget = $);
      var j = null,
        _ = E4(G);
      if (_ === Z) {
        var h = new g(d, VJ + "enter", E, X, G);
        (h.target = $), (h.relatedTarget = qJ), (j = h);
      }
      LO(J, F, j, O, E);
    }
    function JO(J, Q) {
      return (J === Q && (J !== 0 || 1 / J === 1 / Q)) || (J !== J && Q !== Q);
    }
    var sZ = typeof Object.is === "function" ? Object.is : JO;
    function g6(J, Q) {
      if (sZ(J, Q)) return !0;
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
        if (!uQ.call(Q, B) || !sZ(J[B], Q[B])) return !1;
      }
      return !0;
    }
    function NK(J) {
      while (J && J.firstChild) J = J.firstChild;
      return J;
    }
    function QO(J) {
      while (J) {
        if (J.nextSibling) return J.nextSibling;
        J = J.parentNode;
      }
    }
    function bK(J, Q) {
      var Z = NK(J),
        X = 0,
        G = 0;
      while (Z) {
        if (Z.nodeType === e0) {
          if (((G = X + Z.textContent.length), X <= Q && G >= Q))
            return { node: Z, offset: Q - X };
          X = G;
        }
        Z = NK(QO(Z));
      }
    }
    function ZO(J) {
      var Q = J.ownerDocument,
        Z = (Q && Q.defaultView) || window,
        X = Z.getSelection && Z.getSelection();
      if (!X || X.rangeCount === 0) return null;
      var { anchorNode: G, anchorOffset: B, focusNode: U, focusOffset: Y } = X;
      try {
        G.nodeType, U.nodeType;
      } catch (K) {
        return null;
      }
      return XO(J, G, B, U, Y);
    }
    function XO(J, Q, Z, X, G) {
      var B = 0,
        U = -1,
        Y = -1,
        K = 0,
        H = 0,
        z = J,
        D = null;
      J: while (!0) {
        var O = null;
        while (!0) {
          if (z === Q && (Z === 0 || z.nodeType === e0)) U = B + Z;
          if (z === X && (G === 0 || z.nodeType === e0)) Y = B + G;
          if (z.nodeType === e0) B += z.nodeValue.length;
          if ((O = z.firstChild) === null) break;
          (D = z), (z = O);
        }
        while (!0) {
          if (z === J) break J;
          if (D === Q && ++K === Z) U = B;
          if (D === X && ++H === G) Y = B;
          if ((O = z.nextSibling) !== null) break;
          (z = D), (D = z.parentNode);
        }
        z = O;
      }
      if (U === -1 || Y === -1) return null;
      return { start: U, end: Y };
    }
    function GO(J, Q) {
      var Z = J.ownerDocument || document,
        X = (Z && Z.defaultView) || window;
      if (!X.getSelection) return;
      var G = X.getSelection(),
        B = J.textContent.length,
        U = Math.min(Q.start, B),
        Y = Q.end === void 0 ? U : Math.min(Q.end, B);
      if (!G.extend && U > Y) {
        var K = Y;
        (Y = U), (U = K);
      }
      var H = bK(J, U),
        z = bK(J, Y);
      if (H && z) {
        if (
          G.rangeCount === 1 &&
          G.anchorNode === H.node &&
          G.anchorOffset === H.offset &&
          G.focusNode === z.node &&
          G.focusOffset === z.offset
        )
          return;
        var D = Z.createRange();
        if ((D.setStart(H.node, H.offset), G.removeAllRanges(), U > Y))
          G.addRange(D), G.extend(z.node, z.offset);
        else D.setEnd(z.node, z.offset), G.addRange(D);
      }
    }
    function kK(J) {
      return J && J.nodeType === e0;
    }
    function gK(J, Q) {
      if (!J || !Q) return !1;
      else if (J === Q) return !0;
      else if (kK(J)) return !1;
      else if (kK(Q)) return gK(J, Q.parentNode);
      else if ("contains" in J) return J.contains(Q);
      else if (J.compareDocumentPosition)
        return !!(J.compareDocumentPosition(Q) & 16);
      else return !1;
    }
    function BO(J) {
      return J && J.ownerDocument && gK(J.ownerDocument.documentElement, J);
    }
    function UO(J) {
      try {
        return typeof J.contentWindow.location.href === "string";
      } catch (Q) {
        return !1;
      }
    }
    function TK() {
      var J = window,
        Q = a4();
      while (Q instanceof J.HTMLIFrameElement) {
        if (UO(Q)) J = Q.contentWindow;
        else return Q;
        Q = a4(J.document);
      }
      return Q;
    }
    function OG(J) {
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
    function YO() {
      var J = TK();
      return { focusedElem: J, selectionRange: OG(J) ? WO(J) : null };
    }
    function KO(J) {
      var Q = TK(),
        Z = J.focusedElem,
        X = J.selectionRange;
      if (Q !== Z && BO(Z)) {
        if (X !== null && OG(Z)) HO(Z, X);
        var G = [],
          B = Z;
        while ((B = B.parentNode))
          if (B.nodeType === wZ)
            G.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
        if (typeof Z.focus === "function") Z.focus();
        for (var U = 0; U < G.length; U++) {
          var Y = G[U];
          (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
        }
      }
    }
    function WO(J) {
      var Q;
      if ("selectionStart" in J)
        Q = { start: J.selectionStart, end: J.selectionEnd };
      else Q = ZO(J);
      return Q || { start: 0, end: 0 };
    }
    function HO(J, Q) {
      var { start: Z, end: X } = Q;
      if (X === void 0) X = Z;
      if ("selectionStart" in J)
        (J.selectionStart = Z), (J.selectionEnd = Math.min(X, J.value.length));
      else GO(J, Q);
    }
    var zO = fQ && "documentMode" in document && document.documentMode <= 11;
    function MO() {
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
    var z5 = null,
      DG = null,
      T6 = null,
      $G = !1;
    function VO(J) {
      if ("selectionStart" in J && OG(J))
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
    function qO(J) {
      return J.window === J
        ? J.document
        : J.nodeType === J1
          ? J
          : J.ownerDocument;
    }
    function hK(J, Q, Z) {
      var X = qO(Z);
      if ($G || z5 == null || z5 !== a4(X)) return;
      var G = VO(z5);
      if (!T6 || !g6(T6, G)) {
        T6 = G;
        var B = P8(DG, "onSelect");
        if (B.length > 0) {
          var U = new WG("onSelect", "select", null, Q, Z);
          J.push({ event: U, listeners: B }), (U.target = z5);
        }
      }
    }
    function OO(J, Q, Z, X, G, B, U) {
      var Y = Z ? D5(Z) : window;
      switch (Q) {
        case "focusin":
          if (wK(Y) || Y.contentEditable === "true")
            (z5 = Y), (DG = Z), (T6 = null);
          break;
        case "focusout":
          (z5 = null), (DG = null), (T6 = null);
          break;
        case "mousedown":
          $G = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($G = !1), hK(J, X, G);
          break;
        case "selectionchange":
          if (zO) break;
        case "keydown":
        case "keyup":
          hK(J, X, G);
      }
    }
    function D8(J, Q) {
      var Z = {};
      return (
        (Z[J.toLowerCase()] = Q.toLowerCase()),
        (Z["Webkit" + J] = "webkit" + Q),
        (Z["Moz" + J] = "moz" + Q),
        Z
      );
    }
    var M5 = {
        animationend: D8("Animation", "AnimationEnd"),
        animationiteration: D8("Animation", "AnimationIteration"),
        animationstart: D8("Animation", "AnimationStart"),
        transitionend: D8("Transition", "TransitionEnd"),
      },
      jG = {},
      fK = {};
    if (fQ) {
      if (
        ((fK = document.createElement("div").style),
        !("AnimationEvent" in window))
      )
        delete M5.animationend.animation,
          delete M5.animationiteration.animation,
          delete M5.animationstart.animation;
      if (!("TransitionEvent" in window)) delete M5.transitionend.transition;
    }
    function $8(J) {
      if (jG[J]) return jG[J];
      else if (!M5[J]) return J;
      var Q = M5[J];
      for (var Z in Q)
        if (Q.hasOwnProperty(Z) && Z in fK) return (jG[J] = Q[Z]);
      return J;
    }
    var uK = $8("animationend"),
      dK = $8("animationiteration"),
      sK = $8("animationstart"),
      mK = $8("transitionend"),
      yK = new Map(),
      lK = [
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
    function f1(J, Q) {
      yK.set(J, Q), QZ(Q, [J]);
    }
    function DO() {
      for (var J = 0; J < lK.length; J++) {
        var Q = lK[J],
          Z = Q.toLowerCase(),
          X = Q[0].toUpperCase() + Q.slice(1);
        f1(Z, "on" + X);
      }
      f1(uK, "onAnimationEnd"),
        f1(dK, "onAnimationIteration"),
        f1(sK, "onAnimationStart"),
        f1("dblclick", "onDoubleClick"),
        f1("focusin", "onFocus"),
        f1("focusout", "onBlur"),
        f1(mK, "onTransitionEnd");
    }
    function $O(J, Q, Z, X, G, B, U) {
      var Y = yK.get(Q);
      if (Y === void 0) return;
      var K = WG,
        H = Q;
      switch (Q) {
        case "keypress":
          if (M8(X) === 0) return;
        case "keydown":
        case "keyup":
          K = jq;
          break;
        case "focusin":
          (H = "focus"), (K = MG);
          break;
        case "focusout":
          (H = "blur"), (K = MG);
          break;
        case "beforeblur":
        case "afterblur":
          K = MG;
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
          K = DK;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          K = Gq;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          K = Eq;
          break;
        case uK:
        case dK:
        case sK:
          K = Yq;
          break;
        case mK:
          K = Lq;
          break;
        case "scroll":
          K = Qq;
          break;
        case "wheel":
          K = Iq;
          break;
        case "copy":
        case "cut":
        case "paste":
          K = Wq;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          K = jK;
          break;
      }
      var z = (B & Y6) !== 0;
      {
        var D = !z && Q === "scroll",
          O = EO(Z, Y, X.type, z, D);
        if (O.length > 0) {
          var E = new K(Y, H, null, X, G);
          J.push({ event: E, listeners: O });
        }
      }
    }
    DO(), tq(), uq(), MO(), _q();
    function jO(J, Q, Z, X, G, B, U) {
      $O(J, Q, Z, X, G, B);
      var Y = (B & VM) === 0;
      if (Y)
        eq(J, Q, Z, X, G),
          nq(J, Q, Z, X, G),
          OO(J, Q, Z, X, G),
          Tq(J, Q, Z, X, G);
    }
    var h6 = [
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
      PG = new Set(
        ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(h6),
      );
    function cK(J, Q, Z) {
      var X = J.type || "unknown-event";
      (J.currentTarget = Z), IM(X, Q, void 0, J), (J.currentTarget = null);
    }
    function PO(J, Q, Z) {
      var X;
      if (Z)
        for (var G = Q.length - 1; G >= 0; G--) {
          var B = Q[G],
            U = B.instance,
            Y = B.currentTarget,
            K = B.listener;
          if (U !== X && J.isPropagationStopped()) return;
          cK(J, K, Y), (X = U);
        }
      else
        for (var H = 0; H < Q.length; H++) {
          var z = Q[H],
            D = z.instance,
            O = z.currentTarget,
            E = z.listener;
          if (D !== X && J.isPropagationStopped()) return;
          cK(J, E, O), (X = D);
        }
    }
    function iK(J, Q) {
      var Z = (Q & Y6) !== 0;
      for (var X = 0; X < J.length; X++) {
        var G = J[X],
          B = G.event,
          U = G.listeners;
        PO(B, U, Z);
      }
      xM();
    }
    function AO(J, Q, Z, X, G) {
      var B = qX(Z),
        U = [];
      jO(U, J, X, Z, B, Q), iK(U, Q);
    }
    function tJ(J, Q) {
      if (!PG.has(J))
        M(
          'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
          J,
        );
      var Z = !1,
        X = rD(Q),
        G = FO(J, Z);
      if (!X.has(G)) aK(Q, J, VX, Z), X.add(G);
    }
    function AG(J, Q, Z) {
      if (PG.has(J) && !Q)
        M(
          'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
          J,
        );
      var X = 0;
      if (Q) X |= Y6;
      aK(Z, J, X, Q);
    }
    var j8 = "_reactListening" + Math.random().toString(36).slice(2);
    function f6(J) {
      if (!J[j8]) {
        (J[j8] = !0),
          kZ.forEach(function (Z) {
            if (Z !== "selectionchange") {
              if (!PG.has(Z)) AG(Z, !1, J);
              AG(Z, !0, J);
            }
          });
        var Q = J.nodeType === J1 ? J : J.ownerDocument;
        if (Q !== null) {
          if (!Q[j8]) (Q[j8] = !0), AG("selectionchange", !1, Q);
        }
      }
    }
    function aK(J, Q, Z, X, G) {
      var B = cV(J, Q, Z),
        U = void 0;
      if ($X) {
        if (Q === "touchstart" || Q === "touchmove" || Q === "wheel") U = !0;
      }
      J = J;
      var Y;
      if (X)
        if (U !== void 0) Y = nV(J, Q, B, U);
        else Y = rV(J, Q, B);
      else if (U !== void 0) Y = tV(J, Q, B, U);
      else Y = oV(J, Q, B);
    }
    function pK(J, Q) {
      return J === Q || (J.nodeType === VQ && J.parentNode === Q);
    }
    function EG(J, Q, Z, X, G) {
      var B = X;
      if ((Q & LY) === 0 && (Q & VX) === 0) {
        var U = G;
        if (X !== null) {
          var Y = X;
          J: while (!0) {
            if (Y === null) return;
            var K = Y.tag;
            if (K === m || K === OJ) {
              var H = Y.stateNode.containerInfo;
              if (pK(H, U)) break;
              if (K === OJ) {
                var z = Y.return;
                while (z !== null) {
                  var D = z.tag;
                  if (D === m || D === OJ) {
                    var O = z.stateNode.containerInfo;
                    if (pK(O, U)) return;
                  }
                  z = z.return;
                }
              }
              while (H !== null) {
                var E = E4(H);
                if (E === null) return;
                var P = E.tag;
                if (P === c || P === xJ) {
                  Y = B = E;
                  continue J;
                }
                H = H.parentNode;
              }
            }
            Y = Y.return;
          }
        }
      }
      SY(function () {
        return AO(J, Q, Z, B);
      });
    }
    function u6(J, Q, Z) {
      return { instance: J, listener: Q, currentTarget: Z };
    }
    function EO(J, Q, Z, X, G, B) {
      var U = Q !== null ? Q + "Capture" : null,
        Y = X ? U : Q,
        K = [],
        H = J,
        z = null;
      while (H !== null) {
        var D = H,
          O = D.stateNode,
          E = D.tag;
        if (E === c && O !== null) {
          if (((z = O), Y !== null)) {
            var P = W6(H, Y);
            if (P != null) K.push(u6(H, P, z));
          }
        }
        if (G) break;
        H = H.return;
      }
      return K;
    }
    function P8(J, Q) {
      var Z = Q + "Capture",
        X = [],
        G = J;
      while (G !== null) {
        var B = G,
          U = B.stateNode,
          Y = B.tag;
        if (Y === c && U !== null) {
          var K = U,
            H = W6(G, Z);
          if (H != null) X.unshift(u6(G, H, K));
          var z = W6(G, Q);
          if (z != null) X.push(u6(G, z, K));
        }
        G = G.return;
      }
      return X;
    }
    function V5(J) {
      if (J === null) return null;
      do J = J.return;
      while (J && J.tag !== c);
      if (J) return J;
      return null;
    }
    function RO(J, Q) {
      var Z = J,
        X = Q,
        G = 0;
      for (var B = Z; B; B = V5(B)) G++;
      var U = 0;
      for (var Y = X; Y; Y = V5(Y)) U++;
      while (G - U > 0) (Z = V5(Z)), G--;
      while (U - G > 0) (X = V5(X)), U--;
      var K = G;
      while (K--) {
        if (Z === X || (X !== null && Z === X.alternate)) return Z;
        (Z = V5(Z)), (X = V5(X));
      }
      return null;
    }
    function oK(J, Q, Z, X, G) {
      var B = Q._reactName,
        U = [],
        Y = Z;
      while (Y !== null) {
        if (Y === X) break;
        var K = Y,
          H = K.alternate,
          z = K.stateNode,
          D = K.tag;
        if (H !== null && H === X) break;
        if (D === c && z !== null) {
          var O = z;
          if (G) {
            var E = W6(Y, B);
            if (E != null) U.unshift(u6(Y, E, O));
          } else if (!G) {
            var P = W6(Y, B);
            if (P != null) U.push(u6(Y, P, O));
          }
        }
        Y = Y.return;
      }
      if (U.length !== 0) J.push({ event: Q, listeners: U });
    }
    function LO(J, Q, Z, X, G) {
      var B = X && G ? RO(X, G) : null;
      if (X !== null) oK(J, Q, X, B, !1);
      if (G !== null && Z !== null) oK(J, Z, G, B, !0);
    }
    function FO(J, Q) {
      return J + "__" + (Q ? "capture" : "bubble");
    }
    var _Z = !1,
      d6 = "dangerouslySetInnerHTML",
      A8 = "suppressContentEditableWarning",
      u1 = "suppressHydrationWarning",
      rK = "autoFocus",
      P4 = "children",
      A4 = "style",
      E8 = "__html",
      RG,
      R8,
      s6,
      nK,
      L8,
      tK,
      eK;
    (RG = { dialog: !0, webview: !0 }),
      (R8 = function (J, Q) {
        UM(J, Q),
          YM(J, Q),
          MM(J, Q, {
            registrationNameDependencies: VZ,
            possibleRegistrationNames: oZ,
          });
      }),
      (tK = fQ && !document.documentMode),
      (s6 = function (J, Q, Z) {
        if (_Z) return;
        var X = F8(Z),
          G = F8(Q);
        if (G === X) return;
        (_Z = !0),
          M(
            "Prop `%s` did not match. Server: %s Client: %s",
            J,
            JSON.stringify(G),
            JSON.stringify(X),
          );
      }),
      (nK = function (J) {
        if (_Z) return;
        _Z = !0;
        var Q = [];
        J.forEach(function (Z) {
          Q.push(Z);
        }),
          M("Extra attributes from the server: %s", Q);
      }),
      (L8 = function (J, Q) {
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
      (eK = function (J, Q) {
        var Z =
          J.namespaceURI === t0
            ? J.ownerDocument.createElement(J.tagName)
            : J.ownerDocument.createElementNS(J.namespaceURI, J.tagName);
        return (Z.innerHTML = Q), Z.innerHTML;
      });
    var IO = /\r\n?/g,
      xO = /\u0000|\uFFFD/g;
    function F8(J) {
      rZ(J);
      var Q = typeof J === "string" ? J : "" + J;
      return Q.replace(IO, "\n").replace(xO, "");
    }
    function I8(J, Q, Z, X) {
      var G = F8(Q),
        B = F8(J);
      if (B === G) return;
      if (X) {
        if (!_Z)
          (_Z = !0),
            M('Text content did not match. Server: "%s" Client: "%s"', B, G);
      }
      if (Z && C0)
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function JW(J) {
      return J.nodeType === J1 ? J : J.ownerDocument;
    }
    function wO() {}
    function x8(J) {
      J.onclick = wO;
    }
    function _O(J, Q, Z, X, G) {
      for (var B in X) {
        if (!X.hasOwnProperty(B)) continue;
        var U = X[B];
        if (B === A4) {
          if (U) Object.freeze(U);
          $Y(Q, U);
        } else if (B === d6) {
          var Y = U ? U[E8] : void 0;
          if (Y != null) MY(Q, Y);
        } else if (B === P4) {
          if (typeof U === "string") {
            var K = J !== "textarea" || U !== "";
            if (K) a7(Q, U);
          } else if (typeof U === "number") a7(Q, "" + U);
        } else if (B === A8 || B === u1);
        else if (B === rK);
        else if (VZ.hasOwnProperty(B)) {
          if (U != null) {
            if (typeof U !== "function") L8(B, U);
            if (B === "onScroll") tJ("scroll", Q);
          }
        } else if (U != null) G4(Q, B, U, G);
      }
    }
    function SO(J, Q, Z, X) {
      for (var G = 0; G < Q.length; G += 2) {
        var B = Q[G],
          U = Q[G + 1];
        if (B === A4) $Y(J, U);
        else if (B === d6) MY(J, U);
        else if (B === P4) a7(J, U);
        else G4(J, B, U, X);
      }
    }
    function CO(J, Q, Z, X) {
      var G,
        B = JW(Z),
        U,
        Y = X;
      if (Y === t0) Y = YX(J);
      if (Y === t0) {
        if (((G = Y4(J, Q)), !G && J !== J.toLowerCase()))
          M(
            "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
            J,
          );
        if (J === "script") {
          var K = B.createElement("div");
          K.innerHTML = "<script></script>/script>";
          var H = K.firstChild;
          U = K.removeChild(H);
        } else if (typeof Q.is === "string")
          U = B.createElement(J, { is: Q.is });
        else if (((U = B.createElement(J)), J === "select")) {
          var z = U;
          if (Q.multiple) z.multiple = !0;
          else if (Q.size) z.size = Q.size;
        }
      } else U = B.createElementNS(Y, J);
      if (Y === t0) {
        if (
          !G &&
          Object.prototype.toString.call(U) === "[object HTMLUnknownElement]" &&
          !uQ.call(RG, J)
        )
          (RG[J] = !0),
            M(
              "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
              J,
            );
      }
      return U;
    }
    function vO(J, Q) {
      return JW(Q).createTextNode(J);
    }
    function NO(J, Q, Z, X) {
      var G = Y4(Q, Z);
      R8(Q, Z);
      var B;
      switch (Q) {
        case "dialog":
          tJ("cancel", J), tJ("close", J), (B = Z);
          break;
        case "iframe":
        case "object":
        case "embed":
          tJ("load", J), (B = Z);
          break;
        case "video":
        case "audio":
          for (var U = 0; U < h6.length; U++) tJ(h6[U], J);
          B = Z;
          break;
        case "source":
          tJ("error", J), (B = Z);
          break;
        case "img":
        case "image":
        case "link":
          tJ("error", J), tJ("load", J), (B = Z);
          break;
        case "details":
          tJ("toggle", J), (B = Z);
          break;
        case "input":
          L(J, Z), (B = A(J, Z)), tJ("invalid", J);
          break;
        case "option":
          JQ(J, Z), (B = Z);
          break;
        case "select":
          YY(J, Z), (B = B6(J, Z)), tJ("invalid", J);
          break;
        case "textarea":
          WY(J, Z), (B = BX(J, Z)), tJ("invalid", J);
          break;
        default:
          B = Z;
      }
      switch ((MX(Q, B), _O(Q, J, X, B, G), Q)) {
        case "input":
          N1(J), u(J, Z, !1);
          break;
        case "textarea":
          N1(J), zY(J);
          break;
        case "option":
          PQ(J, Z);
          break;
        case "select":
          _3(J, Z);
          break;
        default:
          if (typeof B.onClick === "function") x8(J);
          break;
      }
    }
    function bO(J, Q, Z, X, G) {
      R8(Q, X);
      var B = null,
        U,
        Y;
      switch (Q) {
        case "input":
          (U = A(J, Z)), (Y = A(J, X)), (B = []);
          break;
        case "select":
          (U = B6(J, Z)), (Y = B6(J, X)), (B = []);
          break;
        case "textarea":
          (U = BX(J, Z)), (Y = BX(J, X)), (B = []);
          break;
        default:
          if (
            ((U = Z),
            (Y = X),
            typeof U.onClick !== "function" && typeof Y.onClick === "function")
          )
            x8(J);
          break;
      }
      MX(Q, Y);
      var K,
        H,
        z = null;
      for (K in U) {
        if (Y.hasOwnProperty(K) || !U.hasOwnProperty(K) || U[K] == null)
          continue;
        if (K === A4) {
          var D = U[K];
          for (H in D)
            if (D.hasOwnProperty(H)) {
              if (!z) z = {};
              z[H] = "";
            }
        } else if (K === d6 || K === P4);
        else if (K === A8 || K === u1);
        else if (K === rK);
        else if (VZ.hasOwnProperty(K)) {
          if (!B) B = [];
        } else (B = B || []).push(K, null);
      }
      for (K in Y) {
        var O = Y[K],
          E = U != null ? U[K] : void 0;
        if (!Y.hasOwnProperty(K) || O === E || (O == null && E == null))
          continue;
        if (K === A4) {
          if (O) Object.freeze(O);
          if (E) {
            for (H in E)
              if (E.hasOwnProperty(H) && (!O || !O.hasOwnProperty(H))) {
                if (!z) z = {};
                z[H] = "";
              }
            for (H in O)
              if (O.hasOwnProperty(H) && E[H] !== O[H]) {
                if (!z) z = {};
                z[H] = O[H];
              }
          } else {
            if (!z) {
              if (!B) B = [];
              B.push(K, z);
            }
            z = O;
          }
        } else if (K === d6) {
          var P = O ? O[E8] : void 0,
            R = E ? E[E8] : void 0;
          if (P != null) {
            if (R !== P) (B = B || []).push(K, P);
          }
        } else if (K === P4) {
          if (typeof O === "string" || typeof O === "number")
            (B = B || []).push(K, "" + O);
        } else if (K === A8 || K === u1);
        else if (VZ.hasOwnProperty(K)) {
          if (O != null) {
            if (typeof O !== "function") L8(K, O);
            if (K === "onScroll") tJ("scroll", J);
          }
          if (!B && E !== O) B = [];
        } else (B = B || []).push(K, O);
      }
      if (z) t3(z, Y[A4]), (B = B || []).push(A4, z);
      return B;
    }
    function kO(J, Q, Z, X, G) {
      if (Z === "input" && G.type === "radio" && G.name != null) S(J, G);
      var B = Y4(Z, X),
        U = Y4(Z, G);
      switch ((SO(J, Q, B, U), Z)) {
        case "input":
          i(J, G);
          break;
        case "textarea":
          HY(J, G);
          break;
        case "select":
          S3(J, G);
          break;
      }
    }
    function gO(J) {
      {
        var Q = J.toLowerCase();
        if (!p7.hasOwnProperty(Q)) return null;
        return p7[Q] || null;
      }
    }
    function TO(J, Q, Z, X, G, B, U) {
      var Y, K;
      switch (((Y = Y4(Q, Z)), R8(Q, Z), Q)) {
        case "dialog":
          tJ("cancel", J), tJ("close", J);
          break;
        case "iframe":
        case "object":
        case "embed":
          tJ("load", J);
          break;
        case "video":
        case "audio":
          for (var H = 0; H < h6.length; H++) tJ(h6[H], J);
          break;
        case "source":
          tJ("error", J);
          break;
        case "img":
        case "image":
        case "link":
          tJ("error", J), tJ("load", J);
          break;
        case "details":
          tJ("toggle", J);
          break;
        case "input":
          L(J, Z), tJ("invalid", J);
          break;
        case "option":
          JQ(J, Z);
          break;
        case "select":
          YY(J, Z), tJ("invalid", J);
          break;
        case "textarea":
          WY(J, Z), tJ("invalid", J);
          break;
      }
      MX(Q, Z);
      {
        K = new Set();
        var z = J.attributes;
        for (var D = 0; D < z.length; D++) {
          var O = z[D].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              K.add(z[D].name);
          }
        }
      }
      var E = null;
      for (var P in Z) {
        if (!Z.hasOwnProperty(P)) continue;
        var R = Z[P];
        if (P === P4) {
          if (typeof R === "string") {
            if (J.textContent !== R) {
              if (Z[u1] !== !0) I8(J.textContent, R, B, U);
              E = [P4, R];
            }
          } else if (typeof R === "number") {
            if (J.textContent !== "" + R) {
              if (Z[u1] !== !0) I8(J.textContent, R, B, U);
              E = [P4, "" + R];
            }
          }
        } else if (VZ.hasOwnProperty(P)) {
          if (R != null) {
            if (typeof R !== "function") L8(P, R);
            if (P === "onScroll") tJ("scroll", J);
          }
        } else if (U && !0 && typeof Y === "boolean") {
          var g = void 0,
            l = Y && FZ ? null : DZ(P);
          if (Z[u1] === !0);
          else if (
            P === A8 ||
            P === u1 ||
            P === "value" ||
            P === "checked" ||
            P === "selected"
          );
          else if (P === d6) {
            var d = J.innerHTML,
              VJ = R ? R[E8] : void 0;
            if (VJ != null) {
              var qJ = eK(J, VJ);
              if (qJ !== d) s6(P, d, qJ);
            }
          } else if (P === A4) {
            if ((K.delete(P), tK)) {
              var $ = r3(R);
              if (((g = J.getAttribute("style")), $ !== g)) s6(P, g, $);
            }
          } else if (Y && !FZ) {
            if ((K.delete(P.toLowerCase()), (g = d4(J, P, R)), R !== g))
              s6(P, g, R);
          } else if (!BQ(P, l, Y) && !sJ(P, R, l, Y)) {
            var F = !1;
            if (l !== null) K.delete(l.attributeName), (g = u4(J, P, R, l));
            else {
              var j = X;
              if (j === t0) j = YX(Q);
              if (j === t0) K.delete(P.toLowerCase());
              else {
                var _ = gO(P);
                if (_ !== null && _ !== P) (F = !0), K.delete(_);
                K.delete(P);
              }
              g = d4(J, P, R);
            }
            var h = FZ;
            if (!h && R !== g && !F) s6(P, g, R);
          }
        }
      }
      if (U) {
        if (K.size > 0 && Z[u1] !== !0) nK(K);
      }
      switch (Q) {
        case "input":
          N1(J), u(J, Z, !0);
          break;
        case "textarea":
          N1(J), zY(J);
          break;
        case "select":
        case "option":
          break;
        default:
          if (typeof Z.onClick === "function") x8(J);
          break;
      }
      return E;
    }
    function hO(J, Q, Z) {
      var X = J.nodeValue !== Q;
      return X;
    }
    function LG(J, Q) {
      {
        if (_Z) return;
        (_Z = !0),
          M(
            "Did not expect server HTML to contain a <%s> in <%s>.",
            Q.nodeName.toLowerCase(),
            J.nodeName.toLowerCase(),
          );
      }
    }
    function FG(J, Q) {
      {
        if (_Z) return;
        (_Z = !0),
          M(
            'Did not expect server HTML to contain the text node "%s" in <%s>.',
            Q.nodeValue,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function IG(J, Q, Z) {
      {
        if (_Z) return;
        (_Z = !0),
          M(
            "Expected server HTML to contain a matching <%s> in <%s>.",
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function xG(J, Q) {
      {
        if (Q === "") return;
        if (_Z) return;
        (_Z = !0),
          M(
            'Expected server HTML to contain a matching text node for "%s" in <%s>.',
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function fO(J, Q, Z) {
      switch (Q) {
        case "input":
          BJ(J, Z);
          return;
        case "textarea":
          v3(J, Z);
          return;
        case "select":
          C3(J, Z);
          return;
      }
    }
    var m6 = function () {},
      y6 = function () {};
    {
      var uO = [
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
        QW = [
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
        dO = QW.concat(["button"]),
        sO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
        ZW = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null,
        };
      y6 = function (J, Q) {
        var Z = MJ({}, J || ZW),
          X = { tag: Q };
        if (QW.indexOf(Q) !== -1)
          (Z.aTagInScope = null),
            (Z.buttonTagInScope = null),
            (Z.nobrTagInScope = null);
        if (dO.indexOf(Q) !== -1) Z.pTagInButtonScope = null;
        if (uO.indexOf(Q) !== -1 && Q !== "address" && Q !== "div" && Q !== "p")
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
      var mO = function (J, Q) {
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
              return sO.indexOf(Q) === -1;
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
        yO = function (J, Q) {
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
        XW = {};
      m6 = function (J, Q, Z) {
        Z = Z || ZW;
        var X = Z.current,
          G = X && X.tag;
        if (Q != null) {
          if (J != null)
            M(
              "validateDOMNesting: when childText is passed, childTag should be null",
            );
          J = "#text";
        }
        var B = mO(J, G) ? null : X,
          U = B ? null : yO(J, Z),
          Y = B || U;
        if (!Y) return;
        var K = Y.tag,
          H = !!B + "|" + J + "|" + K;
        if (XW[H]) return;
        XW[H] = !0;
        var z = J,
          D = "";
        if (J === "#text")
          if (/\S/.test(Q)) z = "Text nodes";
          else
            (z = "Whitespace text nodes"),
              (D =
                " Make sure you don't have any extra whitespace between tags on each line of your source code.");
        else z = "<" + J + ">";
        if (B) {
          var O = "";
          if (K === "table" && J === "tr")
            O +=
              " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
          M(
            "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
            z,
            K,
            D,
            O,
          );
        } else
          M(
            "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
            z,
            K,
          );
      };
    }
    var w8 = "suppressHydrationWarning",
      _8 = "$",
      S8 = "/$",
      l6 = "$?",
      c6 = "$!",
      lO = "style",
      wG = null,
      _G = null;
    function cO(J) {
      var Q,
        Z,
        X = J.nodeType;
      switch (X) {
        case J1:
        case WX: {
          Q = X === J1 ? "#document" : "#fragment";
          var G = J.documentElement;
          Z = G ? G.namespaceURI : KX(null, "");
          break;
        }
        default: {
          var B = X === VQ ? J.parentNode : J,
            U = B.namespaceURI || null;
          (Q = B.tagName), (Z = KX(U, Q));
          break;
        }
      }
      {
        var Y = Q.toLowerCase(),
          K = y6(null, Y);
        return { namespace: Z, ancestorInfo: K };
      }
    }
    function iO(J, Q, Z) {
      {
        var X = J,
          G = KX(X.namespace, Q),
          B = y6(X.ancestorInfo, Q);
        return { namespace: G, ancestorInfo: B };
      }
    }
    function SG(J) {
      return J;
    }
    function aO(J) {
      (wG = lV()), (_G = YO());
      var Q = null;
      return zK(!1), Q;
    }
    function pO(J) {
      KO(_G), zK(wG), (wG = null), (_G = null);
    }
    function oO(J, Q, Z, X, G) {
      var B;
      {
        var U = X;
        if (
          (m6(J, null, U.ancestorInfo),
          typeof Q.children === "string" || typeof Q.children === "number")
        ) {
          var Y = "" + Q.children,
            K = y6(U.ancestorInfo, J);
          m6(null, Y, K);
        }
        B = U.namespace;
      }
      var H = CO(J, Q, Z, B);
      return p6(G, H), hG(H, Q), H;
    }
    function rO(J, Q) {
      J.appendChild(Q);
    }
    function nO(J, Q, Z, X, G) {
      switch ((NO(J, Q, Z, X), Q)) {
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
    function tO(J, Q, Z, X, G, B) {
      {
        var U = B;
        if (
          typeof X.children !== typeof Z.children &&
          (typeof X.children === "string" || typeof X.children === "number")
        ) {
          var Y = "" + X.children,
            K = y6(U.ancestorInfo, Q);
          m6(null, Y, K);
        }
      }
      return bO(J, Q, Z, X);
    }
    function CG(J, Q) {
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
    function eO(J, Q, Z, X) {
      {
        var G = Z;
        m6(null, J, G.ancestorInfo);
      }
      var B = vO(J, Q);
      return p6(X, B), B;
    }
    function JD() {
      var J = window.event;
      if (J === void 0) return Y1;
      return MK(J.type);
    }
    var vG = typeof setTimeout === "function" ? setTimeout : void 0,
      QD = typeof clearTimeout === "function" ? clearTimeout : void 0,
      NG = -1,
      GW = typeof Promise === "function" ? Promise : void 0,
      ZD =
        typeof queueMicrotask === "function"
          ? queueMicrotask
          : typeof GW !== "undefined"
            ? function (J) {
                return GW.resolve(null).then(J).catch(XD);
              }
            : vG;
    function XD(J) {
      setTimeout(function () {
        throw J;
      });
    }
    function GD(J, Q, Z, X) {
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
    function BD(J, Q, Z, X, G, B) {
      kO(J, Q, Z, X, G), hG(J, G);
    }
    function BW(J) {
      a7(J, "");
    }
    function UD(J, Q, Z) {
      J.nodeValue = Z;
    }
    function YD(J, Q) {
      J.appendChild(Q);
    }
    function KD(J, Q) {
      var Z;
      if (J.nodeType === VQ) (Z = J.parentNode), Z.insertBefore(Q, J);
      else (Z = J), Z.appendChild(Q);
      var X = J._reactRootContainer;
      if ((X === null || X === void 0) && Z.onclick === null) x8(Z);
    }
    function WD(J, Q, Z) {
      J.insertBefore(Q, Z);
    }
    function HD(J, Q, Z) {
      if (J.nodeType === VQ) J.parentNode.insertBefore(Q, Z);
      else J.insertBefore(Q, Z);
    }
    function zD(J, Q) {
      J.removeChild(Q);
    }
    function MD(J, Q) {
      if (J.nodeType === VQ) J.parentNode.removeChild(Q);
      else J.removeChild(Q);
    }
    function bG(J, Q) {
      var Z = Q,
        X = 0;
      do {
        var G = Z.nextSibling;
        if ((J.removeChild(Z), G && G.nodeType === VQ)) {
          var B = G.data;
          if (B === S8)
            if (X === 0) {
              J.removeChild(G), w6(Q);
              return;
            } else X--;
          else if (B === _8 || B === l6 || B === c6) X++;
        }
        Z = G;
      } while (Z);
      w6(Q);
    }
    function VD(J, Q) {
      if (J.nodeType === VQ) bG(J.parentNode, Q);
      else if (J.nodeType === wZ) bG(J, Q);
      w6(J);
    }
    function qD(J) {
      J = J;
      var Q = J.style;
      if (typeof Q.setProperty === "function")
        Q.setProperty("display", "none", "important");
      else Q.display = "none";
    }
    function OD(J) {
      J.nodeValue = "";
    }
    function DD(J, Q) {
      J = J;
      var Z = Q[lO],
        X =
          Z !== void 0 && Z !== null && Z.hasOwnProperty("display")
            ? Z.display
            : null;
      J.style.display = HX("display", X);
    }
    function $D(J, Q) {
      J.nodeValue = Q;
    }
    function jD(J) {
      if (J.nodeType === wZ) J.textContent = "";
      else if (J.nodeType === J1) {
        if (J.documentElement) J.removeChild(J.documentElement);
      }
    }
    function PD(J, Q, Z) {
      if (J.nodeType !== wZ || Q.toLowerCase() !== J.nodeName.toLowerCase())
        return null;
      return J;
    }
    function AD(J, Q) {
      if (Q === "" || J.nodeType !== e0) return null;
      return J;
    }
    function ED(J) {
      if (J.nodeType !== VQ) return null;
      return J;
    }
    function UW(J) {
      return J.data === l6;
    }
    function kG(J) {
      return J.data === c6;
    }
    function RD(J) {
      var Q = J.nextSibling && J.nextSibling.dataset,
        Z,
        X,
        G;
      if (Q) (Z = Q.dgst), (X = Q.msg), (G = Q.stck);
      return { message: X, digest: Z, stack: G };
    }
    function LD(J, Q) {
      J._reactRetry = Q;
    }
    function C8(J) {
      for (; J != null; J = J.nextSibling) {
        var Q = J.nodeType;
        if (Q === wZ || Q === e0) break;
        if (Q === VQ) {
          var Z = J.data;
          if (Z === _8 || Z === c6 || Z === l6) break;
          if (Z === S8) return null;
        }
      }
      return J;
    }
    function i6(J) {
      return C8(J.nextSibling);
    }
    function FD(J) {
      return C8(J.firstChild);
    }
    function ID(J) {
      return C8(J.firstChild);
    }
    function xD(J) {
      return C8(J.nextSibling);
    }
    function wD(J, Q, Z, X, G, B, U) {
      p6(B, J), hG(J, Z);
      var Y;
      {
        var K = G;
        Y = K.namespace;
      }
      var H = (B.mode & $J) !== r;
      return TO(J, Q, Z, Y, X, H, U);
    }
    function _D(J, Q, Z, X) {
      p6(Z, J);
      var G = (Z.mode & $J) !== r;
      return hO(J, Q);
    }
    function SD(J, Q) {
      p6(Q, J);
    }
    function CD(J) {
      var Q = J.nextSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === VQ) {
          var X = Q.data;
          if (X === S8)
            if (Z === 0) return i6(Q);
            else Z--;
          else if (X === _8 || X === c6 || X === l6) Z++;
        }
        Q = Q.nextSibling;
      }
      return null;
    }
    function YW(J) {
      var Q = J.previousSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === VQ) {
          var X = Q.data;
          if (X === _8 || X === c6 || X === l6)
            if (Z === 0) return Q;
            else Z--;
          else if (X === S8) Z++;
        }
        Q = Q.previousSibling;
      }
      return null;
    }
    function vD(J) {
      w6(J);
    }
    function ND(J) {
      w6(J);
    }
    function bD(J) {
      return J !== "head" && J !== "body";
    }
    function kD(J, Q, Z, X) {
      var G = !0;
      I8(Q.nodeValue, Z, X, G);
    }
    function gD(J, Q, Z, X, G, B) {
      if (Q[w8] !== !0) {
        var U = !0;
        I8(X.nodeValue, G, B, U);
      }
    }
    function TD(J, Q) {
      if (Q.nodeType === wZ) LG(J, Q);
      else if (Q.nodeType === VQ);
      else FG(J, Q);
    }
    function hD(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null)
          if (Q.nodeType === wZ) LG(Z, Q);
          else if (Q.nodeType === VQ);
          else FG(Z, Q);
      }
    }
    function fD(J, Q, Z, X, G) {
      if (G || Q[w8] !== !0)
        if (X.nodeType === wZ) LG(Z, X);
        else if (X.nodeType === VQ);
        else FG(Z, X);
    }
    function uD(J, Q, Z) {
      IG(J, Q);
    }
    function dD(J, Q) {
      xG(J, Q);
    }
    function sD(J, Q, Z) {
      {
        var X = J.parentNode;
        if (X !== null) IG(X, Q);
      }
    }
    function mD(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null) xG(Z, Q);
      }
    }
    function yD(J, Q, Z, X, G, B) {
      if (B || Q[w8] !== !0) IG(Z, X);
    }
    function lD(J, Q, Z, X, G) {
      if (G || Q[w8] !== !0) xG(Z, X);
    }
    function cD(J) {
      M(
        "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
        J.nodeName.toLowerCase(),
      );
    }
    function iD(J) {
      f6(J);
    }
    var q5 = Math.random().toString(36).slice(2),
      O5 = "__reactFiber$" + q5,
      gG = "__reactProps$" + q5,
      a6 = "__reactContainer$" + q5,
      TG = "__reactEvents$" + q5,
      aD = "__reactListeners$" + q5,
      pD = "__reactHandles$" + q5;
    function oD(J) {
      delete J[O5], delete J[gG], delete J[TG], delete J[aD], delete J[pD];
    }
    function p6(J, Q) {
      Q[O5] = J;
    }
    function v8(J, Q) {
      Q[a6] = J;
    }
    function KW(J) {
      J[a6] = null;
    }
    function o6(J) {
      return !!J[a6];
    }
    function E4(J) {
      var Q = J[O5];
      if (Q) return Q;
      var Z = J.parentNode;
      while (Z) {
        if (((Q = Z[a6] || Z[O5]), Q)) {
          var X = Q.alternate;
          if (Q.child !== null || (X !== null && X.child !== null)) {
            var G = YW(J);
            while (G !== null) {
              var B = G[O5];
              if (B) return B;
              G = YW(G);
            }
          }
          return Q;
        }
        (J = Z), (Z = J.parentNode);
      }
      return null;
    }
    function d1(J) {
      var Q = J[O5] || J[a6];
      if (Q)
        if (Q.tag === c || Q.tag === xJ || Q.tag === AJ || Q.tag === m)
          return Q;
        else return null;
      return null;
    }
    function D5(J) {
      if (J.tag === c || J.tag === xJ) return J.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function N8(J) {
      return J[gG] || null;
    }
    function hG(J, Q) {
      J[gG] = Q;
    }
    function rD(J) {
      var Q = J[TG];
      if (Q === void 0) Q = J[TG] = new Set();
      return Q;
    }
    var WW = {},
      HW = LJ.ReactDebugCurrentFrame;
    function b8(J) {
      if (J) {
        var Q = J._owner,
          Z = m4(J.type, J._source, Q ? Q.type : null);
        HW.setExtraStackFrame(Z);
      } else HW.setExtraStackFrame(null);
    }
    function P0(J, Q, Z, X, G) {
      {
        var B = Function.call.bind(uQ);
        for (var U in J)
          if (B(J, U)) {
            var Y = void 0;
            try {
              if (typeof J[U] !== "function") {
                var K = Error(
                  (X || "React class") +
                    ": " +
                    Z +
                    " type `" +
                    U +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `it must be a function, usually from the `prop-types` package, but received `" +
                    typeof J[U] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((K.name = "Invariant Violation"), K);
              }
              Y = J[U](
                Q,
                U,
                X,
                Z,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (H) {
              Y = H;
            }
            if (Y && !(Y instanceof Error))
              b8(G),
                M(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  X || "React class",
                  Z,
                  U,
                  typeof Y,
                ),
                b8(null);
            if (Y instanceof Error && !(Y.message in WW))
              (WW[Y.message] = !0),
                b8(G),
                M("Failed %s type: %s", Z, Y.message),
                b8(null);
          }
      }
    }
    var fG = [],
      k8;
    k8 = [];
    var K1 = -1;
    function s1(J) {
      return { current: J };
    }
    function BZ(J, Q) {
      if (K1 < 0) {
        M("Unexpected pop.");
        return;
      }
      if (Q !== k8[K1]) M("Unexpected Fiber popped.");
      (J.current = fG[K1]), (fG[K1] = null), (k8[K1] = null), K1--;
    }
    function UZ(J, Q, Z) {
      K1++, (fG[K1] = J.current), (k8[K1] = Z), (J.current = Q);
    }
    var zW = {},
      mZ = {};
    Object.freeze(mZ);
    var W1 = s1(mZ),
      h0 = s1(!1),
      uG = mZ;
    function $5(J, Q, Z) {
      {
        if (Z && f0(Q)) return uG;
        return W1.current;
      }
    }
    function MW(J, Q, Z) {
      {
        var X = J.stateNode;
        (X.__reactInternalMemoizedUnmaskedChildContext = Q),
          (X.__reactInternalMemoizedMaskedChildContext = Z);
      }
    }
    function j5(J, Q) {
      {
        var Z = J.type,
          X = Z.contextTypes;
        if (!X) return mZ;
        var G = J.stateNode;
        if (G && G.__reactInternalMemoizedUnmaskedChildContext === Q)
          return G.__reactInternalMemoizedMaskedChildContext;
        var B = {};
        for (var U in X) B[U] = Q[U];
        {
          var Y = YJ(J) || "Unknown";
          P0(X, B, "context", Y);
        }
        if (G) MW(J, Q, B);
        return B;
      }
    }
    function g8() {
      return h0.current;
    }
    function f0(J) {
      {
        var Q = J.childContextTypes;
        return Q !== null && Q !== void 0;
      }
    }
    function T8(J) {
      BZ(h0, J), BZ(W1, J);
    }
    function dG(J) {
      BZ(h0, J), BZ(W1, J);
    }
    function VW(J, Q, Z) {
      {
        if (W1.current !== mZ)
          throw new Error(
            "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
          );
        UZ(W1, Q, J), UZ(h0, Z, J);
      }
    }
    function qW(J, Q, Z) {
      {
        var X = J.stateNode,
          G = Q.childContextTypes;
        if (typeof X.getChildContext !== "function") {
          {
            var B = YJ(J) || "Unknown";
            if (!zW[B])
              (zW[B] = !0),
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
          var K = YJ(J) || "Unknown";
          P0(G, U, "child context", K);
        }
        return MJ({}, Z, U);
      }
    }
    function h8(J) {
      {
        var Q = J.stateNode,
          Z = (Q && Q.__reactInternalMemoizedMergedChildContext) || mZ;
        return (uG = W1.current), UZ(W1, Z, J), UZ(h0, h0.current, J), !0;
      }
    }
    function OW(J, Q, Z) {
      {
        var X = J.stateNode;
        if (!X)
          throw new Error(
            "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.This error is likely caused by a bug in React. Please file an issue.",
          );
        if (Z) {
          var G = qW(J, Q, uG);
          (X.__reactInternalMemoizedMergedChildContext = G),
            BZ(h0, J),
            BZ(W1, J),
            UZ(W1, G, J),
            UZ(h0, Z, J);
        } else BZ(h0, J), UZ(h0, Z, J);
      }
    }
    function nD(J) {
      {
        if (!bM(J) || J.tag !== a)
          throw new Error(
            "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.",
          );
        var Q = J;
        do {
          switch (Q.tag) {
            case m:
              return Q.stateNode.context;
            case a: {
              var Z = Q.type;
              if (f0(Z))
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
    var m1 = 0,
      f8 = 1,
      H1 = null,
      sG = !1,
      mG = !1;
    function DW(J) {
      if (H1 === null) H1 = [J];
      else H1.push(J);
    }
    function tD(J) {
      (sG = !0), DW(J);
    }
    function $W() {
      if (sG) y1();
    }
    function y1() {
      if (!mG && H1 !== null) {
        mG = !0;
        var J = 0,
          Q = j0();
        try {
          var Z = !0,
            X = H1;
          gQ(uZ);
          for (; J < X.length; J++) {
            var G = X[J];
            do G = G(Z);
            while (G !== null);
          }
          (H1 = null), (sG = !1);
        } catch (B) {
          if (H1 !== null) H1 = H1.slice(J + 1);
          throw (dY(e7, y1), B);
        } finally {
          gQ(Q), (mG = !1);
        }
      }
      return null;
    }
    var P5 = [],
      A5 = 0,
      u8 = null,
      d8 = 0,
      Z0 = [],
      X0 = 0,
      R4 = null,
      z1 = 1,
      M1 = "";
    function eD(J) {
      return F4(), (J.flags & NY) !== o;
    }
    function J2(J) {
      return F4(), d8;
    }
    function Q2() {
      var J = M1,
        Q = z1,
        Z = Q & ~Z2(Q);
      return Z.toString(32) + J;
    }
    function L4(J, Q) {
      F4(), (P5[A5++] = d8), (P5[A5++] = u8), (u8 = J), (d8 = Q);
    }
    function jW(J, Q, Z) {
      F4(), (Z0[X0++] = z1), (Z0[X0++] = M1), (Z0[X0++] = R4), (R4 = J);
      var X = z1,
        G = M1,
        B = s8(X) - 1,
        U = X & ~(1 << B),
        Y = Z + 1,
        K = s8(Q) + B;
      if (K > 30) {
        var H = B - (B % 5),
          z = (1 << H) - 1,
          D = (U & z).toString(32),
          O = U >> H,
          E = B - H,
          P = s8(Q) + E,
          R = Y << E,
          g = R | O,
          l = D + G;
        (z1 = (1 << P) | g), (M1 = l);
      } else {
        var d = Y << B,
          VJ = d | U,
          qJ = G;
        (z1 = (1 << K) | VJ), (M1 = qJ);
      }
    }
    function yG(J) {
      F4();
      var Q = J.return;
      if (Q !== null) {
        var Z = 1,
          X = 0;
        L4(J, Z), jW(J, Z, X);
      }
    }
    function s8(J) {
      return 32 - iY(J);
    }
    function Z2(J) {
      return 1 << (s8(J) - 1);
    }
    function lG(J) {
      while (J === u8)
        (u8 = P5[--A5]), (P5[A5] = null), (d8 = P5[--A5]), (P5[A5] = null);
      while (J === R4)
        (R4 = Z0[--X0]),
          (Z0[X0] = null),
          (M1 = Z0[--X0]),
          (Z0[X0] = null),
          (z1 = Z0[--X0]),
          (Z0[X0] = null);
    }
    function X2() {
      if ((F4(), R4 !== null)) return { id: z1, overflow: M1 };
      else return null;
    }
    function G2(J, Q) {
      F4(),
        (Z0[X0++] = z1),
        (Z0[X0++] = M1),
        (Z0[X0++] = R4),
        (z1 = Q.id),
        (M1 = Q.overflow),
        (R4 = J);
    }
    function F4() {
      if (!lQ())
        M(
          "Expected to be hydrating. This is a bug in React. Please file an issue.an issue.",
        );
    }
    var yQ = null,
      G0 = null,
      A0 = !1,
      I4 = !1,
      l1 = null;
    function B2() {
      if (A0)
        M(
          "We should not be hydrating here. This is a bug in React. Please file a bug.",
        );
    }
    function PW() {
      I4 = !0;
    }
    function U2() {
      return I4;
    }
    function Y2(J) {
      var Q = J.stateNode.containerInfo;
      return (G0 = ID(Q)), (yQ = J), (A0 = !0), (l1 = null), (I4 = !1), !0;
    }
    function K2(J, Q, Z) {
      if (
        ((G0 = xD(Q)), (yQ = J), (A0 = !0), (l1 = null), (I4 = !1), Z !== null)
      )
        G2(J, Z);
      return !0;
    }
    function AW(J, Q) {
      switch (J.tag) {
        case m: {
          TD(J.stateNode.containerInfo, Q);
          break;
        }
        case c: {
          var Z = (J.mode & $J) !== r;
          fD(J.type, J.memoizedProps, J.stateNode, Q, Z);
          break;
        }
        case AJ: {
          var X = J.memoizedState;
          if (X.dehydrated !== null) hD(X.dehydrated, Q);
          break;
        }
      }
    }
    function EW(J, Q) {
      AW(J, Q);
      var Z = OP();
      (Z.stateNode = Q), (Z.return = J);
      var X = J.deletions;
      if (X === null) (J.deletions = [Z]), (J.flags |= K4);
      else X.push(Z);
    }
    function cG(J, Q) {
      {
        if (I4) return;
        switch (J.tag) {
          case m: {
            var Z = J.stateNode.containerInfo;
            switch (Q.tag) {
              case c:
                var { type: X, pendingProps: G } = Q;
                uD(Z, X);
                break;
              case xJ:
                var B = Q.pendingProps;
                dD(Z, B);
                break;
            }
            break;
          }
          case c: {
            var { type: U, memoizedProps: Y, stateNode: K } = J;
            switch (Q.tag) {
              case c: {
                var { type: H, pendingProps: z } = Q,
                  D = (J.mode & $J) !== r;
                yD(U, Y, K, H, z, D);
                break;
              }
              case xJ: {
                var O = Q.pendingProps,
                  E = (J.mode & $J) !== r;
                lD(U, Y, K, O, E);
                break;
              }
            }
            break;
          }
          case AJ: {
            var P = J.memoizedState,
              R = P.dehydrated;
            if (R !== null)
              switch (Q.tag) {
                case c:
                  var { type: g, pendingProps: l } = Q;
                  sD(R, g);
                  break;
                case xJ:
                  var d = Q.pendingProps;
                  mD(R, d);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function RW(J, Q) {
      (Q.flags = (Q.flags & ~Z1) | qQ), cG(J, Q);
    }
    function LW(J, Q) {
      switch (J.tag) {
        case c: {
          var { type: Z, pendingProps: X } = J,
            G = PD(Q, Z);
          if (G !== null) return (J.stateNode = G), (yQ = J), (G0 = FD(G)), !0;
          return !1;
        }
        case xJ: {
          var B = J.pendingProps,
            U = AD(Q, B);
          if (U !== null) return (J.stateNode = U), (yQ = J), (G0 = null), !0;
          return !1;
        }
        case AJ: {
          var Y = ED(Q);
          if (Y !== null) {
            var K = { dehydrated: Y, treeContext: X2(), retryLane: hZ };
            J.memoizedState = K;
            var H = DP(Y);
            return (H.return = J), (J.child = H), (yQ = J), (G0 = null), !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function iG(J) {
      return (J.mode & $J) !== r && (J.flags & CJ) === o;
    }
    function aG(J) {
      throw new Error(
        "Hydration failed because the initial UI does not match what was rendered on the server.rendered on the server.",
      );
    }
    function pG(J) {
      if (!A0) return;
      var Q = G0;
      if (!Q) {
        if (iG(J)) cG(yQ, J), aG();
        RW(yQ, J), (A0 = !1), (yQ = J);
        return;
      }
      var Z = Q;
      if (!LW(J, Q)) {
        if (iG(J)) cG(yQ, J), aG();
        Q = i6(Z);
        var X = yQ;
        if (!Q || !LW(J, Q)) {
          RW(yQ, J), (A0 = !1), (yQ = J);
          return;
        }
        EW(X, Z);
      }
    }
    function W2(J, Q, Z) {
      var X = J.stateNode,
        G = !I4,
        B = wD(X, J.type, J.memoizedProps, Q, Z, J, G);
      if (((J.updateQueue = B), B !== null)) return !0;
      return !1;
    }
    function H2(J) {
      var { stateNode: Q, memoizedProps: Z } = J,
        X = _D(Q, Z, J);
      if (X) {
        var G = yQ;
        if (G !== null)
          switch (G.tag) {
            case m: {
              var B = G.stateNode.containerInfo,
                U = (G.mode & $J) !== r;
              kD(B, Q, Z, U);
              break;
            }
            case c: {
              var { type: Y, memoizedProps: K, stateNode: H } = G,
                z = (G.mode & $J) !== r;
              gD(Y, K, H, Q, Z, z);
              break;
            }
          }
      }
      return X;
    }
    function z2(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      SD(Z, J);
    }
    function M2(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      return CD(Z);
    }
    function FW(J) {
      var Q = J.return;
      while (Q !== null && Q.tag !== c && Q.tag !== m && Q.tag !== AJ)
        Q = Q.return;
      yQ = Q;
    }
    function m8(J) {
      if (J !== yQ) return !1;
      if (!A0) return FW(J), (A0 = !0), !1;
      if (
        J.tag !== m &&
        (J.tag !== c || (bD(J.type) && !CG(J.type, J.memoizedProps)))
      ) {
        var Q = G0;
        if (Q)
          if (iG(J)) IW(J), aG();
          else while (Q) EW(J, Q), (Q = i6(Q));
      }
      if ((FW(J), J.tag === AJ)) G0 = M2(J);
      else G0 = yQ ? i6(J.stateNode) : null;
      return !0;
    }
    function V2() {
      return A0 && G0 !== null;
    }
    function IW(J) {
      var Q = G0;
      while (Q) AW(J, Q), (Q = i6(Q));
    }
    function E5() {
      (yQ = null), (G0 = null), (A0 = !1), (I4 = !1);
    }
    function xW() {
      if (l1 !== null) Ez(l1), (l1 = null);
    }
    function lQ() {
      return A0;
    }
    function oG(J) {
      if (l1 === null) l1 = [J];
      else l1.push(J);
    }
    var q2 = LJ.ReactCurrentBatchConfig,
      O2 = null;
    function D2() {
      return q2.transition;
    }
    var E0 = {
      recordUnsafeLifecycleWarnings: function (J, Q) {},
      flushPendingUnsafeLifecycleWarnings: function () {},
      recordLegacyContextWarning: function (J, Q) {},
      flushLegacyContextWarning: function () {},
      discardPendingWarnings: function () {},
    };
    {
      var $2 = function (J) {
          var Q = null,
            Z = J;
          while (Z !== null) {
            if (Z.mode & OQ) Q = Z;
            Z = Z.return;
          }
          return Q;
        },
        x4 = function (J) {
          var Q = [];
          return (
            J.forEach(function (Z) {
              Q.push(Z);
            }),
            Q.sort().join(", ")
          );
        },
        r6 = [],
        n6 = [],
        t6 = [],
        e6 = [],
        J7 = [],
        Q7 = [],
        w4 = new Set();
      (E0.recordUnsafeLifecycleWarnings = function (J, Q) {
        if (w4.has(J.type)) return;
        if (
          typeof Q.componentWillMount === "function" &&
          Q.componentWillMount.__suppressDeprecationWarning !== !0
        )
          r6.push(J);
        if (J.mode & OQ && typeof Q.UNSAFE_componentWillMount === "function")
          n6.push(J);
        if (
          typeof Q.componentWillReceiveProps === "function" &&
          Q.componentWillReceiveProps.__suppressDeprecationWarning !== !0
        )
          t6.push(J);
        if (
          J.mode & OQ &&
          typeof Q.UNSAFE_componentWillReceiveProps === "function"
        )
          e6.push(J);
        if (
          typeof Q.componentWillUpdate === "function" &&
          Q.componentWillUpdate.__suppressDeprecationWarning !== !0
        )
          J7.push(J);
        if (J.mode & OQ && typeof Q.UNSAFE_componentWillUpdate === "function")
          Q7.push(J);
      }),
        (E0.flushPendingUnsafeLifecycleWarnings = function () {
          var J = new Set();
          if (r6.length > 0)
            r6.forEach(function (O) {
              J.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (r6 = []);
          var Q = new Set();
          if (n6.length > 0)
            n6.forEach(function (O) {
              Q.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (n6 = []);
          var Z = new Set();
          if (t6.length > 0)
            t6.forEach(function (O) {
              Z.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (t6 = []);
          var X = new Set();
          if (e6.length > 0)
            e6.forEach(function (O) {
              X.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (e6 = []);
          var G = new Set();
          if (J7.length > 0)
            J7.forEach(function (O) {
              G.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (J7 = []);
          var B = new Set();
          if (Q7.length > 0)
            Q7.forEach(function (O) {
              B.add(YJ(O) || "Component"), w4.add(O.type);
            }),
              (Q7 = []);
          if (Q.size > 0) {
            var U = x4(Q);
            M(
              "Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",
              U,
            );
          }
          if (X.size > 0) {
            var Y = x4(X);
            M(
              "Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %sand may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",
              Y,
            );
          }
          if (B.size > 0) {
            var K = x4(B);
            M(
              "Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",
              K,
            );
          }
          if (J.size > 0) {
            var H = x4(J);
            $Q(
              "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %sSee https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              H,
            );
          }
          if (Z.size > 0) {
            var z = x4(Z);
            $Q(
              "componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              z,
            );
          }
          if (G.size > 0) {
            var D = x4(G);
            $Q(
              "componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              D,
            );
          }
        });
      var y8 = new Map(),
        wW = new Set();
      (E0.recordLegacyContextWarning = function (J, Q) {
        var Z = $2(J);
        if (Z === null) {
          M(
            "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.",
          );
          return;
        }
        if (wW.has(J.type)) return;
        var X = y8.get(Z);
        if (
          J.type.contextTypes != null ||
          J.type.childContextTypes != null ||
          (Q !== null && typeof Q.getChildContext === "function")
        ) {
          if (X === void 0) (X = []), y8.set(Z, X);
          X.push(J);
        }
      }),
        (E0.flushLegacyContextWarning = function () {
          y8.forEach(function (J, Q) {
            if (J.length === 0) return;
            var Z = J[0],
              X = new Set();
            J.forEach(function (B) {
              X.add(YJ(B) || "Component"), wW.add(B.type);
            });
            var G = x4(X);
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
        (E0.discardPendingWarnings = function () {
          (r6 = []),
            (n6 = []),
            (t6 = []),
            (e6 = []),
            (J7 = []),
            (Q7 = []),
            (y8 = new Map());
        });
    }
    function R0(J, Q) {
      if (J && J.defaultProps) {
        var Z = MJ({}, Q),
          X = J.defaultProps;
        for (var G in X) if (Z[G] === void 0) Z[G] = X[G];
        return Z;
      }
      return Q;
    }
    var rG = s1(null),
      nG;
    nG = {};
    var l8 = null,
      R5 = null,
      tG = null,
      c8 = !1;
    function i8() {
      (l8 = null), (R5 = null), (tG = null), (c8 = !1);
    }
    function _W() {
      c8 = !0;
    }
    function SW() {
      c8 = !1;
    }
    function CW(J, Q, Z) {
      {
        UZ(rG, Q._currentValue, J), (Q._currentValue = Z);
        {
          if (
            Q._currentRenderer !== void 0 &&
            Q._currentRenderer !== null &&
            Q._currentRenderer !== nG
          )
            M(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.",
            );
          Q._currentRenderer = nG;
        }
      }
    }
    function eG(J, Q) {
      var Z = rG.current;
      BZ(rG, Q), (J._currentValue = Z);
    }
    function JB(J, Q, Z) {
      var X = J;
      while (X !== null) {
        var G = X.alternate;
        if (!Y5(X.childLanes, Q)) {
          if (((X.childLanes = zJ(X.childLanes, Q)), G !== null))
            G.childLanes = zJ(G.childLanes, Q);
        } else if (G !== null && !Y5(G.childLanes, Q))
          G.childLanes = zJ(G.childLanes, Q);
        if (X === Z) break;
        X = X.return;
      }
      if (X !== Z)
        M(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function j2(J, Q, Z) {
      P2(J, Q, Z);
    }
    function P2(J, Q, Z) {
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
                var Y = A6(Z),
                  K = V1(oJ, Y);
                K.tag = p8;
                var H = X.updateQueue;
                if (H === null);
                else {
                  var z = H.shared,
                    D = z.pending;
                  if (D === null) K.next = K;
                  else (K.next = D.next), (D.next = K);
                  z.pending = K;
                }
              }
              X.lanes = zJ(X.lanes, Z);
              var O = X.alternate;
              if (O !== null) O.lanes = zJ(O.lanes, Z);
              JB(X.return, Z, J), (B.lanes = zJ(B.lanes, Z));
              break;
            }
            U = U.next;
          }
        } else if (X.tag === wJ) G = X.type === J.type ? null : X.child;
        else if (X.tag === SQ) {
          var E = X.return;
          if (E === null)
            throw new Error(
              "We just came from a parent so we must have had a parent. This is a bug in React.",
            );
          E.lanes = zJ(E.lanes, Z);
          var P = E.alternate;
          if (P !== null) P.lanes = zJ(P.lanes, Z);
          JB(E, Z, J), (G = X.sibling);
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
    function L5(J, Q) {
      (l8 = J), (R5 = null), (tG = null);
      var Z = J.dependencies;
      if (Z !== null) {
        var X = Z.firstContext;
        if (X !== null) {
          if (fZ(Z.lanes, Q)) O7();
          Z.firstContext = null;
        }
      }
    }
    function DQ(J) {
      if (c8)
        M(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      var Q = J._currentValue;
      if (tG === J);
      else {
        var Z = { context: J, memoizedValue: Q, next: null };
        if (R5 === null) {
          if (l8 === null)
            throw new Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
            );
          (R5 = Z), (l8.dependencies = { lanes: x, firstContext: Z });
        } else R5 = R5.next = Z;
      }
      return Q;
    }
    var _4 = null;
    function QB(J) {
      if (_4 === null) _4 = [J];
      else _4.push(J);
    }
    function A2() {
      if (_4 !== null) {
        for (var J = 0; J < _4.length; J++) {
          var Q = _4[J],
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
        _4 = null;
      }
    }
    function vW(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), QB(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), a8(J, X);
    }
    function E2(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), QB(Q);
      else (Z.next = G.next), (G.next = Z);
      Q.interleaved = Z;
    }
    function R2(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), QB(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), a8(J, X);
    }
    function SZ(J, Q) {
      return a8(J, Q);
    }
    var L2 = a8;
    function a8(J, Q) {
      J.lanes = zJ(J.lanes, Q);
      var Z = J.alternate;
      if (Z !== null) Z.lanes = zJ(Z.lanes, Q);
      if (Z === null && (J.flags & (qQ | Z1)) !== o) bz(J);
      var X = J,
        G = J.return;
      while (G !== null) {
        if (
          ((G.childLanes = zJ(G.childLanes, Q)), (Z = G.alternate), Z !== null)
        )
          Z.childLanes = zJ(Z.childLanes, Q);
        else if ((G.flags & (qQ | Z1)) !== o) bz(J);
        (X = G), (G = G.return);
      }
      if (X.tag === m) {
        var B = X.stateNode;
        return B;
      } else return null;
    }
    var NW = 0,
      bW = 1,
      p8 = 2,
      ZB = 3,
      o8 = !1,
      XB,
      r8;
    (XB = !1), (r8 = null);
    function GB(J) {
      var Q = {
        baseState: J.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: x },
        effects: null,
      };
      J.updateQueue = Q;
    }
    function kW(J, Q) {
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
    function V1(J, Q) {
      var Z = {
        eventTime: J,
        lane: Q,
        tag: NW,
        payload: null,
        callback: null,
        next: null,
      };
      return Z;
    }
    function c1(J, Q, Z) {
      var X = J.updateQueue;
      if (X === null) return null;
      var G = X.shared;
      if (r8 === G && !XB)
        M(
          "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.",
        ),
          (XB = !0);
      if (wj()) {
        var B = G.pending;
        if (B === null) Q.next = Q;
        else (Q.next = B.next), (B.next = Q);
        return (G.pending = Q), L2(J, Z);
      } else return R2(J, G, Q, Z);
    }
    function n8(J, Q, Z) {
      var X = Q.updateQueue;
      if (X === null) return;
      var G = X.shared;
      if (rY(Z)) {
        var B = G.lanes;
        B = tY(B, J.pendingLanes);
        var U = zJ(B, Z);
        (G.lanes = U), QG(J, U);
      }
    }
    function BB(J, Q) {
      var { updateQueue: Z, alternate: X } = J;
      if (X !== null) {
        var G = X.updateQueue;
        if (Z === G) {
          var B = null,
            U = null,
            Y = Z.firstBaseUpdate;
          if (Y !== null) {
            var K = Y;
            do {
              var H = {
                eventTime: K.eventTime,
                lane: K.lane,
                tag: K.tag,
                payload: K.payload,
                callback: K.callback,
                next: null,
              };
              if (U === null) B = U = H;
              else (U.next = H), (U = H);
              K = K.next;
            } while (K !== null);
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
    function F2(J, Q, Z, X, G, B) {
      switch (Z.tag) {
        case bW: {
          var U = Z.payload;
          if (typeof U === "function") {
            _W();
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
              SW();
            }
            return Y;
          }
          return U;
        }
        case ZB:
          J.flags = (J.flags & ~jZ) | CJ;
        case NW: {
          var K = Z.payload,
            H;
          if (typeof K === "function") {
            _W(), (H = K.call(B, X, G));
            {
              if (J.mode & OQ) {
                bQ(!0);
                try {
                  K.call(B, X, G);
                } finally {
                  bQ(!1);
                }
              }
              SW();
            }
          } else H = K;
          if (H === null || H === void 0) return X;
          return MJ({}, X, H);
        }
        case p8:
          return (o8 = !0), X;
      }
      return X;
    }
    function t8(J, Q, Z, X) {
      var G = J.updateQueue;
      (o8 = !1), (r8 = G.shared);
      var { firstBaseUpdate: B, lastBaseUpdate: U } = G,
        Y = G.shared.pending;
      if (Y !== null) {
        G.shared.pending = null;
        var K = Y,
          H = K.next;
        if (((K.next = null), U === null)) B = H;
        else U.next = H;
        U = K;
        var z = J.alternate;
        if (z !== null) {
          var D = z.updateQueue,
            O = D.lastBaseUpdate;
          if (O !== U) {
            if (O === null) D.firstBaseUpdate = H;
            else O.next = H;
            D.lastBaseUpdate = K;
          }
        }
      }
      if (B !== null) {
        var E = G.baseState,
          P = x,
          R = null,
          g = null,
          l = null,
          d = B;
        do {
          var { lane: VJ, eventTime: qJ } = d;
          if (!Y5(X, VJ)) {
            var $ = {
              eventTime: qJ,
              lane: VJ,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            };
            if (l === null) (g = l = $), (R = E);
            else l = l.next = $;
            P = zJ(P, VJ);
          } else {
            if (l !== null) {
              var F = {
                eventTime: qJ,
                lane: kQ,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              };
              l = l.next = F;
            }
            E = F2(J, G, d, E, Q, Z);
            var j = d.callback;
            if (j !== null && d.lane !== kQ) {
              J.flags |= RX;
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
        if (l === null) R = E;
        (G.baseState = R), (G.firstBaseUpdate = g), (G.lastBaseUpdate = l);
        var t = G.shared.interleaved;
        if (t !== null) {
          var GJ = t;
          do (P = zJ(P, GJ.lane)), (GJ = GJ.next);
          while (GJ !== t);
        } else if (B === null) G.shared.lanes = x;
        w7(P), (J.lanes = P), (J.memoizedState = E);
      }
      r8 = null;
    }
    function I2(J, Q) {
      if (typeof J !== "function")
        throw new Error(
          "Invalid argument passed as callback. Expected a function. Instead " +
            ("received: " + J),
        );
      J.call(Q);
    }
    function gW() {
      o8 = !1;
    }
    function e8() {
      return o8;
    }
    function TW(J, Q, Z) {
      var X = Q.effects;
      if (((Q.effects = null), X !== null))
        for (var G = 0; G < X.length; G++) {
          var B = X[G],
            U = B.callback;
          if (U !== null) (B.callback = null), I2(U, Z);
        }
    }
    var UB = {},
      hW = new PJ.Component().refs,
      YB,
      KB,
      WB,
      HB,
      zB,
      fW,
      J9,
      MB,
      VB,
      qB;
    {
      (YB = new Set()),
        (KB = new Set()),
        (WB = new Set()),
        (HB = new Set()),
        (MB = new Set()),
        (zB = new Set()),
        (VB = new Set()),
        (qB = new Set());
      var uW = new Set();
      (J9 = function (J, Q) {
        if (J === null || typeof J === "function") return;
        var Z = Q + "_" + J;
        if (!uW.has(Z))
          uW.add(Z),
            M(
              "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.function. Instead received: %s.",
              Q,
              J,
            );
      }),
        (fW = function (J, Q) {
          if (Q === void 0) {
            var Z = fJ(J) || "Component";
            if (!zB.has(Z))
              zB.add(Z),
                M(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  Z,
                );
          }
        }),
        Object.defineProperty(UB, "_processChildContext", {
          enumerable: !1,
          value: function () {
            throw new Error(
              "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
            );
          },
        }),
        Object.freeze(UB);
    }
    function OB(J, Q, Z, X) {
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
        fW(Q, B);
      }
      var U = B === null || B === void 0 ? G : MJ({}, G, B);
      if (((J.memoizedState = U), J.lanes === x)) {
        var Y = J.updateQueue;
        Y.baseState = U;
      }
    }
    var DB = {
      isMounted: kM,
      enqueueSetState: function (J, Q, Z) {
        var X = J5(J),
          G = EZ(),
          B = e1(X),
          U = V1(G, B);
        if (((U.payload = Q), Z !== void 0 && Z !== null))
          J9(Z, "setState"), (U.callback = Z);
        var Y = c1(X, U, B);
        if (Y !== null) _Q(Y, X, B, G), n8(Y, X, B);
        CX(X, B);
      },
      enqueueReplaceState: function (J, Q, Z) {
        var X = J5(J),
          G = EZ(),
          B = e1(X),
          U = V1(G, B);
        if (((U.tag = bW), (U.payload = Q), Z !== void 0 && Z !== null))
          J9(Z, "replaceState"), (U.callback = Z);
        var Y = c1(X, U, B);
        if (Y !== null) _Q(Y, X, B, G), n8(Y, X, B);
        CX(X, B);
      },
      enqueueForceUpdate: function (J, Q) {
        var Z = J5(J),
          X = EZ(),
          G = e1(Z),
          B = V1(X, G);
        if (((B.tag = p8), Q !== void 0 && Q !== null))
          J9(Q, "forceUpdate"), (B.callback = Q);
        var U = c1(Z, B, G);
        if (U !== null) _Q(U, Z, G, X), n8(U, Z, G);
        zV(Z, G);
      },
    };
    function dW(J, Q, Z, X, G, B, U) {
      var Y = J.stateNode;
      if (typeof Y.shouldComponentUpdate === "function") {
        var K = Y.shouldComponentUpdate(X, B, U);
        {
          if (J.mode & OQ) {
            bQ(!0);
            try {
              K = Y.shouldComponentUpdate(X, B, U);
            } finally {
              bQ(!1);
            }
          }
          if (K === void 0)
            M(
              "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
              fJ(Q) || "Component",
            );
        }
        return K;
      }
      if (Q.prototype && Q.prototype.isPureReactComponent)
        return !g6(Z, X) || !g6(G, B);
      return !0;
    }
    function x2(J, Q, Z) {
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
          if (Q.contextType && Q.contextTypes && !VB.has(Q))
            VB.add(Q),
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
          !WB.has(Q)
        )
          WB.add(Q),
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
    function sW(J, Q) {
      (Q.updater = DB),
        (J.stateNode = Q),
        SM(Q, J),
        (Q._reactInternalInstance = UB);
    }
    function mW(J, Q, Z) {
      var X = !1,
        G = mZ,
        B = mZ,
        U = Q.contextType;
      if ("contextType" in Q) {
        var Y =
          U === null ||
          (U !== void 0 && U.$$typeof === SJ && U._context === void 0);
        if (!Y && !qB.has(Q)) {
          qB.add(Q);
          var K = "";
          if (U === void 0)
            K =
              " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
          else if (typeof U !== "object")
            K = " However, it is set to a " + typeof U + ".";
          else if (U.$$typeof === n)
            K = " Did you accidentally pass the Context.Provider instead?";
          else if (U._context !== void 0)
            K = " Did you accidentally pass the Context.Consumer instead?";
          else
            K =
              " However, it is set to an object with keys {" +
              Object.keys(U).join(", ") +
              "}.";
          M(
            "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%scontextType should point to the Context object returned by React.createContext().%s",
            fJ(Q) || "Component",
            K,
          );
        }
      }
      if (typeof U === "object" && U !== null) B = DQ(U);
      else {
        G = $5(J, Q, !0);
        var H = Q.contextTypes;
        (X = H !== null && H !== void 0), (B = X ? j5(J, G) : mZ);
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
      var D = (J.memoizedState =
        z.state !== null && z.state !== void 0 ? z.state : null);
      sW(J, z);
      {
        if (typeof Q.getDerivedStateFromProps === "function" && D === null) {
          var O = fJ(Q) || "Component";
          if (!KB.has(O))
            KB.add(O),
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
              l =
                typeof Q.getDerivedStateFromProps === "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            if (!HB.has(g))
              HB.add(g),
                M(
                  "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles",
                  g,
                  l,
                  E !== null ? "\n  " + E : "",
                  P !== null ? "\n  " + P : "",
                  R !== null ? "\n  " + R : "",
                );
          }
        }
      }
      if (X) MW(J, G, B);
      return z;
    }
    function w2(J, Q) {
      var Z = Q.state;
      if (typeof Q.componentWillMount === "function") Q.componentWillMount();
      if (typeof Q.UNSAFE_componentWillMount === "function")
        Q.UNSAFE_componentWillMount();
      if (Z !== Q.state)
        M(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          YJ(J) || "Component",
        ),
          DB.enqueueReplaceState(Q, Q.state, null);
    }
    function yW(J, Q, Z, X) {
      var G = Q.state;
      if (typeof Q.componentWillReceiveProps === "function")
        Q.componentWillReceiveProps(Z, X);
      if (typeof Q.UNSAFE_componentWillReceiveProps === "function")
        Q.UNSAFE_componentWillReceiveProps(Z, X);
      if (Q.state !== G) {
        {
          var B = YJ(J) || "Component";
          if (!YB.has(B))
            YB.add(B),
              M(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                B,
              );
        }
        DB.enqueueReplaceState(Q, Q.state, null);
      }
    }
    function $B(J, Q, Z, X) {
      x2(J, Q, Z);
      var G = J.stateNode;
      (G.props = Z), (G.state = J.memoizedState), (G.refs = hW), GB(J);
      var B = Q.contextType;
      if (typeof B === "object" && B !== null) G.context = DQ(B);
      else {
        var U = $5(J, Q, !0);
        G.context = j5(J, U);
      }
      {
        if (G.state === Z) {
          var Y = fJ(Q) || "Component";
          if (!MB.has(Y))
            MB.add(Y),
              M(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                Y,
              );
        }
        if (J.mode & OQ) E0.recordLegacyContextWarning(J, G);
        E0.recordUnsafeLifecycleWarnings(J, G);
      }
      G.state = J.memoizedState;
      var K = Q.getDerivedStateFromProps;
      if (typeof K === "function") OB(J, Q, K, Z), (G.state = J.memoizedState);
      if (
        typeof Q.getDerivedStateFromProps !== "function" &&
        typeof G.getSnapshotBeforeUpdate !== "function" &&
        (typeof G.UNSAFE_componentWillMount === "function" ||
          typeof G.componentWillMount === "function")
      )
        w2(J, G), t8(J, Z, G, X), (G.state = J.memoizedState);
      if (typeof G.componentDidMount === "function") {
        var H = RJ;
        if (((H |= z4), (J.mode & g0) !== r)) H |= X1;
        J.flags |= H;
      }
    }
    function _2(J, Q, Z, X) {
      var { stateNode: G, memoizedProps: B } = J;
      G.props = B;
      var U = G.context,
        Y = Q.contextType,
        K = mZ;
      if (typeof Y === "object" && Y !== null) K = DQ(Y);
      else {
        var H = $5(J, Q, !0);
        K = j5(J, H);
      }
      var z = Q.getDerivedStateFromProps,
        D =
          typeof z === "function" ||
          typeof G.getSnapshotBeforeUpdate === "function";
      if (
        !D &&
        (typeof G.UNSAFE_componentWillReceiveProps === "function" ||
          typeof G.componentWillReceiveProps === "function")
      ) {
        if (B !== Z || U !== K) yW(J, G, Z, K);
      }
      gW();
      var O = J.memoizedState,
        E = (G.state = O);
      if (
        (t8(J, Z, G, X),
        (E = J.memoizedState),
        B === Z && O === E && !g8() && !e8())
      ) {
        if (typeof G.componentDidMount === "function") {
          var P = RJ;
          if (((P |= z4), (J.mode & g0) !== r)) P |= X1;
          J.flags |= P;
        }
        return !1;
      }
      if (typeof z === "function") OB(J, Q, z, Z), (E = J.memoizedState);
      var R = e8() || dW(J, Q, B, Z, O, E, K);
      if (R) {
        if (
          !D &&
          (typeof G.UNSAFE_componentWillMount === "function" ||
            typeof G.componentWillMount === "function")
        ) {
          if (typeof G.componentWillMount === "function")
            G.componentWillMount();
          if (typeof G.UNSAFE_componentWillMount === "function")
            G.UNSAFE_componentWillMount();
        }
        if (typeof G.componentDidMount === "function") {
          var g = RJ;
          if (((g |= z4), (J.mode & g0) !== r)) g |= X1;
          J.flags |= g;
        }
      } else {
        if (typeof G.componentDidMount === "function") {
          var l = RJ;
          if (((l |= z4), (J.mode & g0) !== r)) l |= X1;
          J.flags |= l;
        }
        (J.memoizedProps = Z), (J.memoizedState = E);
      }
      return (G.props = Z), (G.state = E), (G.context = K), R;
    }
    function S2(J, Q, Z, X, G) {
      var B = Q.stateNode;
      kW(J, Q);
      var U = Q.memoizedProps,
        Y = Q.type === Q.elementType ? U : R0(Q.type, U);
      B.props = Y;
      var K = Q.pendingProps,
        H = B.context,
        z = Z.contextType,
        D = mZ;
      if (typeof z === "object" && z !== null) D = DQ(z);
      else {
        var O = $5(Q, Z, !0);
        D = j5(Q, O);
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
        if (U !== K || H !== D) yW(Q, B, X, D);
      }
      gW();
      var R = Q.memoizedState,
        g = (B.state = R);
      if (
        (t8(Q, X, B, G),
        (g = Q.memoizedState),
        U === K && R === g && !g8() && !e8() && !z0)
      ) {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= RJ;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= W4;
        }
        return !1;
      }
      if (typeof E === "function") OB(Q, Z, E, X), (g = Q.memoizedState);
      var l = e8() || dW(Q, Z, Y, X, R, g, D) || z0;
      if (l) {
        if (
          !P &&
          (typeof B.UNSAFE_componentWillUpdate === "function" ||
            typeof B.componentWillUpdate === "function")
        ) {
          if (typeof B.componentWillUpdate === "function")
            B.componentWillUpdate(X, g, D);
          if (typeof B.UNSAFE_componentWillUpdate === "function")
            B.UNSAFE_componentWillUpdate(X, g, D);
        }
        if (typeof B.componentDidUpdate === "function") Q.flags |= RJ;
        if (typeof B.getSnapshotBeforeUpdate === "function") Q.flags |= W4;
      } else {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= RJ;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= W4;
        }
        (Q.memoizedProps = X), (Q.memoizedState = g);
      }
      return (B.props = X), (B.state = g), (B.context = D), l;
    }
    var jB,
      PB,
      AB,
      EB,
      RB,
      lW = function (J, Q) {};
    (jB = !1),
      (PB = !1),
      (AB = {}),
      (EB = {}),
      (RB = {}),
      (lW = function (J, Q) {
        if (J === null || typeof J !== "object") return;
        if (!J._store || J._store.validated || J.key != null) return;
        if (typeof J._store !== "object")
          throw new Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",
          );
        J._store.validated = !0;
        var Z = YJ(Q) || "Component";
        if (EB[Z]) return;
        (EB[Z] = !0),
          M(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
          );
      });
    function Z7(J, Q, Z) {
      var X = Z.ref;
      if (X !== null && typeof X !== "function" && typeof X !== "object") {
        if (
          (J.mode & OQ || E1) &&
          !(Z._owner && Z._self && Z._owner.stateNode !== Z._self)
        ) {
          var G = YJ(J) || "Component";
          if (!AB[G])
            M(
              'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              X,
            ),
              (AB[G] = !0);
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
                ". This error is likely caused by a bug in React. Please file an issue.bug in React. Please file an issue.",
            );
          var K = U;
          R1(X, "ref");
          var H = "" + X;
          if (
            Q !== null &&
            Q.ref !== null &&
            typeof Q.ref === "function" &&
            Q.ref._stringRef === H
          )
            return Q.ref;
          var z = function (D) {
            var O = K.refs;
            if (O === hW) O = K.refs = {};
            if (D === null) delete O[H];
            else O[H] = D;
          };
          return (z._stringRef = H), z;
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
    function Q9(J, Q) {
      var Z = Object.prototype.toString.call(Q);
      throw new Error(
        "Objects are not valid as a React child (found: " +
          (Z === "[object Object]"
            ? "object with keys {" + Object.keys(Q).join(", ") + "}"
            : Z) +
          "). If you meant to render a collection of children, use an array instead.",
      );
    }
    function Z9(J) {
      {
        var Q = YJ(J) || "Component";
        if (RB[Q]) return;
        (RB[Q] = !0),
          M(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.",
          );
      }
    }
    function cW(J) {
      var { _payload: Q, _init: Z } = J;
      return Z(Q);
    }
    function iW(J) {
      function Q($, F) {
        if (!J) return;
        var j = $.deletions;
        if (j === null) ($.deletions = [F]), ($.flags |= K4);
        else j.push(F);
      }
      function Z($, F) {
        if (!J) return null;
        var j = F;
        while (j !== null) Q($, j), (j = j.sibling);
        return null;
      }
      function X($, F) {
        var j = new Map(),
          _ = F;
        while (_ !== null) {
          if (_.key !== null) j.set(_.key, _);
          else j.set(_.index, _);
          _ = _.sibling;
        }
        return j;
      }
      function G($, F) {
        var j = T4($, F);
        return (j.index = 0), (j.sibling = null), j;
      }
      function B($, F, j) {
        if ((($.index = j), !J)) return ($.flags |= NY), F;
        var _ = $.alternate;
        if (_ !== null) {
          var h = _.index;
          if (h < F) return ($.flags |= qQ), F;
          else return h;
        } else return ($.flags |= qQ), F;
      }
      function U($) {
        if (J && $.alternate === null) $.flags |= qQ;
        return $;
      }
      function Y($, F, j, _) {
        if (F === null || F.tag !== xJ) {
          var h = nU(j, $.mode, _);
          return (h.return = $), h;
        } else {
          var b = G(F, j);
          return (b.return = $), b;
        }
      }
      function K($, F, j, _) {
        var h = j.type;
        if (h === w) return z($, F, j.props.children, _, j.key);
        if (F !== null) {
          if (
            F.elementType === h ||
            hz(F, j) ||
            (typeof h === "object" &&
              h !== null &&
              h.$$typeof === DJ &&
              cW(h) === F.type)
          ) {
            var b = G(F, j.props);
            return (
              (b.ref = Z7($, F, j)),
              (b.return = $),
              (b._debugSource = j._source),
              (b._debugOwner = j._owner),
              b
            );
          }
        }
        var t = rU(j, $.mode, _);
        return (t.ref = Z7($, F, j)), (t.return = $), t;
      }
      function H($, F, j, _) {
        if (
          F === null ||
          F.tag !== OJ ||
          F.stateNode.containerInfo !== j.containerInfo ||
          F.stateNode.implementation !== j.implementation
        ) {
          var h = tU(j, $.mode, _);
          return (h.return = $), h;
        } else {
          var b = G(F, j.children || []);
          return (b.return = $), b;
        }
      }
      function z($, F, j, _, h) {
        if (F === null || F.tag !== iZ) {
          var b = Q4(j, $.mode, _, h);
          return (b.return = $), b;
        } else {
          var t = G(F, j);
          return (t.return = $), t;
        }
      }
      function D($, F, j) {
        if ((typeof F === "string" && F !== "") || typeof F === "number") {
          var _ = nU("" + F, $.mode, j);
          return (_.return = $), _;
        }
        if (typeof F === "object" && F !== null) {
          switch (F.$$typeof) {
            case N0: {
              var h = rU(F, $.mode, j);
              return (h.ref = Z7($, null, F)), (h.return = $), h;
            }
            case q: {
              var b = tU(F, $.mode, j);
              return (b.return = $), b;
            }
            case DJ: {
              var { _payload: t, _init: GJ } = F;
              return D($, GJ(t), j);
            }
          }
          if (AQ(F) || o0(F)) {
            var TJ = Q4(F, $.mode, j, null);
            return (TJ.return = $), TJ;
          }
          Q9($, F);
        }
        if (typeof F === "function") Z9($);
        return null;
      }
      function O($, F, j, _) {
        var h = F !== null ? F.key : null;
        if ((typeof j === "string" && j !== "") || typeof j === "number") {
          if (h !== null) return null;
          return Y($, F, "" + j, _);
        }
        if (typeof j === "object" && j !== null) {
          switch (j.$$typeof) {
            case N0:
              if (j.key === h) return K($, F, j, _);
              else return null;
            case q:
              if (j.key === h) return H($, F, j, _);
              else return null;
            case DJ: {
              var { _payload: b, _init: t } = j;
              return O($, F, t(b), _);
            }
          }
          if (AQ(j) || o0(j)) {
            if (h !== null) return null;
            return z($, F, j, _, null);
          }
          Q9($, j);
        }
        if (typeof j === "function") Z9($);
        return null;
      }
      function E($, F, j, _, h) {
        if ((typeof _ === "string" && _ !== "") || typeof _ === "number") {
          var b = $.get(j) || null;
          return Y(F, b, "" + _, h);
        }
        if (typeof _ === "object" && _ !== null) {
          switch (_.$$typeof) {
            case N0: {
              var t = $.get(_.key === null ? j : _.key) || null;
              return K(F, t, _, h);
            }
            case q: {
              var GJ = $.get(_.key === null ? j : _.key) || null;
              return H(F, GJ, _, h);
            }
            case DJ:
              var { _payload: TJ, _init: FJ } = _;
              return E($, F, j, FJ(TJ), h);
          }
          if (AQ(_) || o0(_)) {
            var WQ = $.get(j) || null;
            return z(F, WQ, _, h, null);
          }
          Q9(F, _);
        }
        if (typeof _ === "function") Z9(F);
        return null;
      }
      function P($, F, j) {
        {
          if (typeof $ !== "object" || $ === null) return F;
          switch ($.$$typeof) {
            case N0:
            case q:
              lW($, j);
              var _ = $.key;
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
            case DJ:
              var { _payload: h, _init: b } = $;
              P(b(h), F, j);
              break;
          }
        }
        return F;
      }
      function R($, F, j, _) {
        {
          var h = null;
          for (var b = 0; b < j.length; b++) {
            var t = j[b];
            h = P(t, h, $);
          }
        }
        var GJ = null,
          TJ = null,
          FJ = F,
          WQ = 0,
          IJ = 0,
          YQ = null;
        for (; FJ !== null && IJ < j.length; IJ++) {
          if (FJ.index > IJ) (YQ = FJ), (FJ = null);
          else YQ = FJ.sibling;
          var KZ = O($, FJ, j[IJ], _);
          if (KZ === null) {
            if (FJ === null) FJ = YQ;
            break;
          }
          if (J) {
            if (FJ && KZ.alternate === null) Q($, FJ);
          }
          if (((WQ = B(KZ, WQ, IJ)), TJ === null)) GJ = KZ;
          else TJ.sibling = KZ;
          (TJ = KZ), (FJ = YQ);
        }
        if (IJ === j.length) {
          if ((Z($, FJ), lQ())) {
            var nQ = IJ;
            L4($, nQ);
          }
          return GJ;
        }
        if (FJ === null) {
          for (; IJ < j.length; IJ++) {
            var lZ = D($, j[IJ], _);
            if (lZ === null) continue;
            if (((WQ = B(lZ, WQ, IJ)), TJ === null)) GJ = lZ;
            else TJ.sibling = lZ;
            TJ = lZ;
          }
          if (lQ()) {
            var RZ = IJ;
            L4($, RZ);
          }
          return GJ;
        }
        var LZ = X($, FJ);
        for (; IJ < j.length; IJ++) {
          var WZ = E(LZ, $, IJ, j[IJ], _);
          if (WZ !== null) {
            if (J) {
              if (WZ.alternate !== null)
                LZ.delete(WZ.key === null ? IJ : WZ.key);
            }
            if (((WQ = B(WZ, WQ, IJ)), TJ === null)) GJ = WZ;
            else TJ.sibling = WZ;
            TJ = WZ;
          }
        }
        if (J)
          LZ.forEach(function (d5) {
            return Q($, d5);
          });
        if (lQ()) {
          var P1 = IJ;
          L4($, P1);
        }
        return GJ;
      }
      function g($, F, j, _) {
        var h = o0(j);
        if (typeof h !== "function")
          throw new Error(
            "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
          );
        {
          if (
            typeof Symbol === "function" &&
            j[Symbol.toStringTag] === "Generator"
          ) {
            if (!PB)
              M(
                "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.",
              );
            PB = !0;
          }
          if (j.entries === h) {
            if (!jB)
              M(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            jB = !0;
          }
          var b = h.call(j);
          if (b) {
            var t = null,
              GJ = b.next();
            for (; !GJ.done; GJ = b.next()) {
              var TJ = GJ.value;
              t = P(TJ, t, $);
            }
          }
        }
        var FJ = h.call(j);
        if (FJ == null)
          throw new Error("An iterable object provided no iterator.");
        var WQ = null,
          IJ = null,
          YQ = F,
          KZ = 0,
          nQ = 0,
          lZ = null,
          RZ = FJ.next();
        for (; YQ !== null && !RZ.done; nQ++, RZ = FJ.next()) {
          if (YQ.index > nQ) (lZ = YQ), (YQ = null);
          else lZ = YQ.sibling;
          var LZ = O($, YQ, RZ.value, _);
          if (LZ === null) {
            if (YQ === null) YQ = lZ;
            break;
          }
          if (J) {
            if (YQ && LZ.alternate === null) Q($, YQ);
          }
          if (((KZ = B(LZ, KZ, nQ)), IJ === null)) WQ = LZ;
          else IJ.sibling = LZ;
          (IJ = LZ), (YQ = lZ);
        }
        if (RZ.done) {
          if ((Z($, YQ), lQ())) {
            var WZ = nQ;
            L4($, WZ);
          }
          return WQ;
        }
        if (YQ === null) {
          for (; !RZ.done; nQ++, RZ = FJ.next()) {
            var P1 = D($, RZ.value, _);
            if (P1 === null) continue;
            if (((KZ = B(P1, KZ, nQ)), IJ === null)) WQ = P1;
            else IJ.sibling = P1;
            IJ = P1;
          }
          if (lQ()) {
            var d5 = nQ;
            L4($, d5);
          }
          return WQ;
        }
        var N7 = X($, YQ);
        for (; !RZ.done; nQ++, RZ = FJ.next()) {
          var i0 = E(N7, $, nQ, RZ.value, _);
          if (i0 !== null) {
            if (J) {
              if (i0.alternate !== null)
                N7.delete(i0.key === null ? nQ : i0.key);
            }
            if (((KZ = B(i0, KZ, nQ)), IJ === null)) WQ = i0;
            else IJ.sibling = i0;
            IJ = i0;
          }
        }
        if (J)
          N7.forEach(function (aP) {
            return Q($, aP);
          });
        if (lQ()) {
          var iP = nQ;
          L4($, iP);
        }
        return WQ;
      }
      function l($, F, j, _) {
        if (F !== null && F.tag === xJ) {
          Z($, F.sibling);
          var h = G(F, j);
          return (h.return = $), h;
        }
        Z($, F);
        var b = nU(j, $.mode, _);
        return (b.return = $), b;
      }
      function d($, F, j, _) {
        var h = j.key,
          b = F;
        while (b !== null) {
          if (b.key === h) {
            var t = j.type;
            if (t === w) {
              if (b.tag === iZ) {
                Z($, b.sibling);
                var GJ = G(b, j.props.children);
                return (
                  (GJ.return = $),
                  (GJ._debugSource = j._source),
                  (GJ._debugOwner = j._owner),
                  GJ
                );
              }
            } else if (
              b.elementType === t ||
              hz(b, j) ||
              (typeof t === "object" &&
                t !== null &&
                t.$$typeof === DJ &&
                cW(t) === b.type)
            ) {
              Z($, b.sibling);
              var TJ = G(b, j.props);
              return (
                (TJ.ref = Z7($, b, j)),
                (TJ.return = $),
                (TJ._debugSource = j._source),
                (TJ._debugOwner = j._owner),
                TJ
              );
            }
            Z($, b);
            break;
          } else Q($, b);
          b = b.sibling;
        }
        if (j.type === w) {
          var FJ = Q4(j.props.children, $.mode, _, j.key);
          return (FJ.return = $), FJ;
        } else {
          var WQ = rU(j, $.mode, _);
          return (WQ.ref = Z7($, F, j)), (WQ.return = $), WQ;
        }
      }
      function VJ($, F, j, _) {
        var h = j.key,
          b = F;
        while (b !== null) {
          if (b.key === h)
            if (
              b.tag === OJ &&
              b.stateNode.containerInfo === j.containerInfo &&
              b.stateNode.implementation === j.implementation
            ) {
              Z($, b.sibling);
              var t = G(b, j.children || []);
              return (t.return = $), t;
            } else {
              Z($, b);
              break;
            }
          else Q($, b);
          b = b.sibling;
        }
        var GJ = tU(j, $.mode, _);
        return (GJ.return = $), GJ;
      }
      function qJ($, F, j, _) {
        var h =
          typeof j === "object" && j !== null && j.type === w && j.key === null;
        if (h) j = j.props.children;
        if (typeof j === "object" && j !== null) {
          switch (j.$$typeof) {
            case N0:
              return U(d($, F, j, _));
            case q:
              return U(VJ($, F, j, _));
            case DJ:
              var { _payload: b, _init: t } = j;
              return qJ($, F, t(b), _);
          }
          if (AQ(j)) return R($, F, j, _);
          if (o0(j)) return g($, F, j, _);
          Q9($, j);
        }
        if ((typeof j === "string" && j !== "") || typeof j === "number")
          return U(l($, F, "" + j, _));
        if (typeof j === "function") Z9($);
        return Z($, F);
      }
      return qJ;
    }
    var F5 = iW(!0),
      aW = iW(!1);
    function C2(J, Q) {
      if (J !== null && Q.child !== J.child)
        throw new Error("Resuming work not yet implemented.");
      if (Q.child === null) return;
      var Z = Q.child,
        X = T4(Z, Z.pendingProps);
      (Q.child = X), (X.return = Q);
      while (Z.sibling !== null)
        (Z = Z.sibling),
          (X = X.sibling = T4(Z, Z.pendingProps)),
          (X.return = Q);
      X.sibling = null;
    }
    function v2(J, Q) {
      var Z = J.child;
      while (Z !== null) HP(Z, Q), (Z = Z.sibling);
    }
    var X7 = {},
      i1 = s1(X7),
      G7 = s1(X7),
      X9 = s1(X7);
    function G9(J) {
      if (J === X7)
        throw new Error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
        );
      return J;
    }
    function pW() {
      var J = G9(X9.current);
      return J;
    }
    function LB(J, Q) {
      UZ(X9, Q, J), UZ(G7, J, J), UZ(i1, X7, J);
      var Z = cO(Q);
      BZ(i1, J), UZ(i1, Z, J);
    }
    function I5(J) {
      BZ(i1, J), BZ(G7, J), BZ(X9, J);
    }
    function FB() {
      var J = G9(i1.current);
      return J;
    }
    function oW(J) {
      var Q = G9(X9.current),
        Z = G9(i1.current),
        X = iO(Z, J.type);
      if (Z === X) return;
      UZ(G7, J, J), UZ(i1, X, J);
    }
    function IB(J) {
      if (G7.current !== J) return;
      BZ(i1, J), BZ(G7, J);
    }
    var N2 = 0,
      rW = 1,
      nW = 1,
      B7 = 2,
      L0 = s1(N2);
    function xB(J, Q) {
      return (J & Q) !== 0;
    }
    function x5(J) {
      return J & rW;
    }
    function wB(J, Q) {
      return (J & rW) | Q;
    }
    function b2(J, Q) {
      return J | Q;
    }
    function a1(J, Q) {
      UZ(L0, Q, J);
    }
    function w5(J) {
      BZ(L0, J);
    }
    function k2(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null) {
        if (Z.dehydrated !== null) return !0;
        return !1;
      }
      var X = J.memoizedProps;
      return !0;
    }
    function B9(J) {
      var Q = J;
      while (Q !== null) {
        if (Q.tag === AJ) {
          var Z = Q.memoizedState;
          if (Z !== null) {
            var X = Z.dehydrated;
            if (X === null || UW(X) || kG(X)) return Q;
          }
        } else if (Q.tag === jQ && Q.memoizedProps.revealOrder !== void 0) {
          var G = (Q.flags & CJ) !== o;
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
    var CZ = 0,
      EQ = 1,
      u0 = 2,
      RQ = 4,
      cQ = 8,
      _B = [];
    function SB() {
      for (var J = 0; J < _B.length; J++) {
        var Q = _B[J];
        Q._workInProgressVersionPrimary = null;
      }
      _B.length = 0;
    }
    function g2(J, Q) {
      var Z = Q._getVersion,
        X = Z(Q._source);
      if (J.mutableSourceEagerHydrationData == null)
        J.mutableSourceEagerHydrationData = [Q, X];
      else J.mutableSourceEagerHydrationData.push(Q, X);
    }
    var { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: U7 } = LJ,
      CB,
      _5;
    CB = new Set();
    var S4 = x,
      gJ = null,
      LQ = null,
      FQ = null,
      U9 = !1,
      Y7 = !1,
      K7 = 0,
      T2 = 0,
      h2 = 25,
      I = null,
      B0 = null,
      p1 = -1,
      vB = !1;
    function NJ() {
      {
        var J = I;
        if (B0 === null) B0 = [J];
        else B0.push(J);
      }
    }
    function C() {
      {
        var J = I;
        if (B0 !== null) {
          if ((p1++, B0[p1] !== J)) f2(J);
        }
      }
    }
    function S5(J) {
      if (J !== void 0 && J !== null && !AQ(J))
        M(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.specified, the final argument must be an array.",
          I,
          typeof J,
        );
    }
    function f2(J) {
      {
        var Q = YJ(gJ);
        if (!CB.has(Q)) {
          if ((CB.add(Q), B0 !== null)) {
            var Z = "",
              X = 30;
            for (var G = 0; G <= p1; G++) {
              var B = B0[G],
                U = G === p1 ? J : B,
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
    function NB(J, Q) {
      if (vB) return !1;
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
        if (sZ(J[Z], Q[Z])) continue;
        return !1;
      }
      return !0;
    }
    function C5(J, Q, Z, X, G, B) {
      if (
        ((S4 = B),
        (gJ = Q),
        (B0 = J !== null ? J._debugHookTypes : null),
        (p1 = -1),
        (vB = J !== null && J.type !== Q.type),
        (Q.memoizedState = null),
        (Q.updateQueue = null),
        (Q.lanes = x),
        J !== null && J.memoizedState !== null)
      )
        T.current = PH;
      else if (B0 !== null) T.current = jH;
      else T.current = $H;
      var U = Z(X, G);
      if (Y7) {
        var Y = 0;
        do {
          if (((Y7 = !1), (K7 = 0), Y >= h2))
            throw new Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
            );
          (Y += 1),
            (vB = !1),
            (LQ = null),
            (FQ = null),
            (Q.updateQueue = null),
            (p1 = -1),
            (T.current = AH),
            (U = Z(X, G));
        } while (Y7);
      }
      (T.current = E9), (Q._debugHookTypes = B0);
      var K = LQ !== null && LQ.next !== null;
      if (
        ((S4 = x),
        (gJ = null),
        (LQ = null),
        (FQ = null),
        (I = null),
        (B0 = null),
        (p1 = -1),
        J !== null && (J.flags & G1) !== (Q.flags & G1) && (J.mode & $J) !== r)
      )
        M(
          "Internal React error: Expected static flag was missing. Please notify the React team.",
        );
      if (((U9 = !1), K))
        throw new Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.early return statement.",
        );
      return U;
    }
    function v5() {
      var J = K7 !== 0;
      return (K7 = 0), J;
    }
    function tW(J, Q, Z) {
      if (((Q.updateQueue = J.updateQueue), (Q.mode & g0) !== r))
        Q.flags &= ~(t7 | X1 | D0 | RJ);
      else Q.flags &= ~(D0 | RJ);
      J.lanes = B8(J.lanes, Z);
    }
    function eW() {
      if (((T.current = E9), U9)) {
        var J = gJ.memoizedState;
        while (J !== null) {
          var Q = J.queue;
          if (Q !== null) Q.pending = null;
          J = J.next;
        }
        U9 = !1;
      }
      (S4 = x),
        (gJ = null),
        (LQ = null),
        (FQ = null),
        (B0 = null),
        (p1 = -1),
        (I = null),
        (MH = !1),
        (Y7 = !1),
        (K7 = 0);
    }
    function d0() {
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
    function U0() {
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
    function JH() {
      return { lastEffect: null, stores: null };
    }
    function bB(J, Q) {
      return typeof Q === "function" ? Q(J) : Q;
    }
    function kB(J, Q, Z) {
      var X = d0(),
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
      var U = (B.dispatch = s2.bind(null, gJ, B));
      return [X.memoizedState, U];
    }
    function gB(J, Q, Z) {
      var X = U0(),
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
          var K = U.next,
            H = Y.next;
          (U.next = H), (Y.next = K);
        }
        if (B.baseQueue !== U)
          M(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.",
          );
        (B.baseQueue = U = Y), (G.pending = null);
      }
      if (U !== null) {
        var z = U.next,
          D = B.baseState,
          O = null,
          E = null,
          P = null,
          R = z;
        do {
          var g = R.lane;
          if (!Y5(S4, g)) {
            var l = {
              lane: g,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            };
            if (P === null) (E = P = l), (O = D);
            else P = P.next = l;
            (gJ.lanes = zJ(gJ.lanes, g)), w7(g);
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
            if (R.hasEagerState) D = R.eagerState;
            else {
              var VJ = R.action;
              D = J(D, VJ);
            }
          }
          R = R.next;
        } while (R !== null && R !== z);
        if (P === null) O = D;
        else P.next = E;
        if (!sZ(D, X.memoizedState)) O7();
        (X.memoizedState = D),
          (X.baseState = O),
          (X.baseQueue = P),
          (G.lastRenderedState = D);
      }
      var qJ = G.interleaved;
      if (qJ !== null) {
        var $ = qJ;
        do {
          var F = $.lane;
          (gJ.lanes = zJ(gJ.lanes, F)), w7(F), ($ = $.next);
        } while ($ !== qJ);
      } else if (U === null) G.lanes = x;
      var j = G.dispatch;
      return [X.memoizedState, j];
    }
    function TB(J, Q, Z) {
      var X = U0(),
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
        var K = U.next,
          H = K;
        do {
          var z = H.action;
          (Y = J(Y, z)), (H = H.next);
        } while (H !== K);
        if (!sZ(Y, X.memoizedState)) O7();
        if (((X.memoizedState = Y), X.baseQueue === null)) X.baseState = Y;
        G.lastRenderedState = Y;
      }
      return [Y, B];
    }
    function hB(J, Q, Z) {
      return;
    }
    function Y9(J, Q, Z) {
      return;
    }
    function fB(J, Q, Z) {
      var X = gJ,
        G = d0(),
        B,
        U = lQ();
      if (U) {
        if (Z === void 0)
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.server-rendered content. Will revert to client rendering.",
          );
        if (((B = Z()), !_5)) {
          if (B !== Z())
            M(
              "The result of getServerSnapshot should be cached to avoid an infinite loop",
            ),
              (_5 = !0);
        }
      } else {
        if (((B = Q()), !_5)) {
          var Y = Q();
          if (!sZ(B, Y))
            M(
              "The result of getSnapshot should be cached to avoid an infinite loop",
            ),
              (_5 = !0);
        }
        var K = u9();
        if (K === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!G8(K, S4)) QH(X, Q, B);
      }
      G.memoizedState = B;
      var H = { value: B, getSnapshot: Q };
      return (
        (G.queue = H),
        M9(XH.bind(null, X, H, J), [J]),
        (X.flags |= D0),
        W7(EQ | cQ, ZH.bind(null, X, H, B, Q), void 0, null),
        B
      );
    }
    function K9(J, Q, Z) {
      var X = gJ,
        G = U0(),
        B = Q();
      if (!_5) {
        var U = Q();
        if (!sZ(B, U))
          M(
            "The result of getSnapshot should be cached to avoid an infinite loop",
          ),
            (_5 = !0);
      }
      var Y = G.memoizedState,
        K = !sZ(Y, B);
      if (K) (G.memoizedState = B), O7();
      var H = G.queue;
      if (
        (z7(XH.bind(null, X, H, J), [J]),
        H.getSnapshot !== Q || K || (FQ !== null && FQ.memoizedState.tag & EQ))
      ) {
        (X.flags |= D0), W7(EQ | cQ, ZH.bind(null, X, H, B, Q), void 0, null);
        var z = u9();
        if (z === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!G8(z, S4)) QH(X, Q, B);
      }
      return B;
    }
    function QH(J, Q, Z) {
      J.flags |= n7;
      var X = { getSnapshot: Q, value: Z },
        G = gJ.updateQueue;
      if (G === null) (G = JH()), (gJ.updateQueue = G), (G.stores = [X]);
      else {
        var B = G.stores;
        if (B === null) G.stores = [X];
        else B.push(X);
      }
    }
    function ZH(J, Q, Z, X) {
      if (((Q.value = Z), (Q.getSnapshot = X), GH(Q))) BH(J);
    }
    function XH(J, Q, Z) {
      var X = function () {
        if (GH(Q)) BH(J);
      };
      return Z(X);
    }
    function GH(J) {
      var { getSnapshot: Q, value: Z } = J;
      try {
        var X = Q();
        return !sZ(Z, X);
      } catch (G) {
        return !0;
      }
    }
    function BH(J) {
      var Q = SZ(J, ZJ);
      if (Q !== null) _Q(Q, J, ZJ, oJ);
    }
    function W9(J) {
      var Q = d0();
      if (typeof J === "function") J = J();
      Q.memoizedState = Q.baseState = J;
      var Z = {
        pending: null,
        interleaved: null,
        lanes: x,
        dispatch: null,
        lastRenderedReducer: bB,
        lastRenderedState: J,
      };
      Q.queue = Z;
      var X = (Z.dispatch = m2.bind(null, gJ, Z));
      return [Q.memoizedState, X];
    }
    function uB(J) {
      return gB(bB);
    }
    function dB(J) {
      return TB(bB);
    }
    function W7(J, Q, Z, X) {
      var G = { tag: J, create: Q, destroy: Z, deps: X, next: null },
        B = gJ.updateQueue;
      if (B === null)
        (B = JH()), (gJ.updateQueue = B), (B.lastEffect = G.next = G);
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
    function sB(J) {
      var Q = d0();
      {
        var Z = { current: J };
        return (Q.memoizedState = Z), Z;
      }
    }
    function H9(J) {
      var Q = U0();
      return Q.memoizedState;
    }
    function H7(J, Q, Z, X) {
      var G = d0(),
        B = X === void 0 ? null : X;
      (gJ.flags |= J), (G.memoizedState = W7(EQ | Q, Z, void 0, B));
    }
    function z9(J, Q, Z, X) {
      var G = U0(),
        B = X === void 0 ? null : X,
        U = void 0;
      if (LQ !== null) {
        var Y = LQ.memoizedState;
        if (((U = Y.destroy), B !== null)) {
          var K = Y.deps;
          if (NB(B, K)) {
            G.memoizedState = W7(Q, Z, U, B);
            return;
          }
        }
      }
      (gJ.flags |= J), (G.memoizedState = W7(EQ | Q, Z, U, B));
    }
    function M9(J, Q) {
      if ((gJ.mode & g0) !== r) return H7(t7 | D0 | IX, cQ, J, Q);
      else return H7(D0 | IX, cQ, J, Q);
    }
    function z7(J, Q) {
      return z9(D0, cQ, J, Q);
    }
    function mB(J, Q) {
      return H7(RJ, u0, J, Q);
    }
    function V9(J, Q) {
      return z9(RJ, u0, J, Q);
    }
    function yB(J, Q) {
      var Z = RJ;
      if (((Z |= z4), (gJ.mode & g0) !== r)) Z |= X1;
      return H7(Z, RQ, J, Q);
    }
    function q9(J, Q) {
      return z9(RJ, RQ, J, Q);
    }
    function UH(J, Q) {
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
    function lB(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null,
        G = RJ;
      if (((G |= z4), (gJ.mode & g0) !== r)) G |= X1;
      return H7(G, RQ, UH.bind(null, Q, J), X);
    }
    function O9(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null;
      return z9(RJ, RQ, UH.bind(null, Q, J), X);
    }
    function D9(J, Q) {}
    var $9 = D9;
    function cB(J, Q) {
      var Z = d0(),
        X = Q === void 0 ? null : Q;
      return (Z.memoizedState = [J, X]), J;
    }
    function j9(J, Q) {
      var Z = U0(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (NB(X, B)) return G[0];
        }
      }
      return (Z.memoizedState = [J, X]), J;
    }
    function iB(J, Q) {
      var Z = d0(),
        X = Q === void 0 ? null : Q,
        G = J();
      return (Z.memoizedState = [G, X]), G;
    }
    function P9(J, Q) {
      var Z = U0(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (NB(X, B)) return G[0];
        }
      }
      var U = J();
      return (Z.memoizedState = [U, X]), U;
    }
    function aB(J) {
      var Q = d0();
      return (Q.memoizedState = J), J;
    }
    function YH(J) {
      var Q = U0(),
        Z = LQ,
        X = Z.memoizedState;
      return WH(Q, X, J);
    }
    function KH(J) {
      var Q = U0();
      if (LQ === null) return (Q.memoizedState = J), J;
      else {
        var Z = LQ.memoizedState;
        return WH(Q, Z, J);
      }
    }
    function WH(J, Q, Z) {
      var X = !EV(S4);
      if (X) {
        if (!sZ(Z, Q)) {
          var G = nY();
          (gJ.lanes = zJ(gJ.lanes, G)), w7(G), (J.baseState = !0);
        }
        return Q;
      } else {
        if (J.baseState) (J.baseState = !1), O7();
        return (J.memoizedState = Z), Z;
      }
    }
    function u2(J, Q, Z) {
      var X = j0();
      gQ(CV(X, U1)), J(!0);
      var G = U7.transition;
      U7.transition = {};
      var B = U7.transition;
      U7.transition._updatedFibers = new Set();
      try {
        J(!1), Q();
      } finally {
        if ((gQ(X), (U7.transition = G), G === null && B._updatedFibers)) {
          var U = B._updatedFibers.size;
          if (U > 10)
            $Q(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          B._updatedFibers.clear();
        }
      }
    }
    function pB() {
      var J = W9(!1),
        Q = J[0],
        Z = J[1],
        X = u2.bind(null, Z),
        G = d0();
      return (G.memoizedState = X), [Q, X];
    }
    function HH() {
      var J = uB(),
        Q = J[0],
        Z = U0(),
        X = Z.memoizedState;
      return [Q, X];
    }
    function zH() {
      var J = dB(),
        Q = J[0],
        Z = U0(),
        X = Z.memoizedState;
      return [Q, X];
    }
    var MH = !1;
    function d2() {
      return MH;
    }
    function oB() {
      var J = d0(),
        Q = u9(),
        Z = Q.identifierPrefix,
        X;
      if (lQ()) {
        var G = Q2();
        X = ":" + Z + "R" + G;
        var B = K7++;
        if (B > 0) X += "H" + B.toString(32);
        X += ":";
      } else {
        var U = T2++;
        X = ":" + Z + "r" + U.toString(32) + ":";
      }
      return (J.memoizedState = X), X;
    }
    function A9() {
      var J = U0(),
        Q = J.memoizedState;
      return Q;
    }
    function s2(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = e1(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (VH(J)) qH(Q, G);
      else {
        var B = vW(J, Q, G, X);
        if (B !== null) {
          var U = EZ();
          _Q(B, J, X, U), OH(B, Q, X);
        }
      }
      DH(J, X);
    }
    function m2(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = e1(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (VH(J)) qH(Q, G);
      else {
        var B = J.alternate;
        if (J.lanes === x && (B === null || B.lanes === x)) {
          var U = Q.lastRenderedReducer;
          if (U !== null) {
            var Y;
            (Y = T.current), (T.current = F0);
            try {
              var K = Q.lastRenderedState,
                H = U(K, Z);
              if (((G.hasEagerState = !0), (G.eagerState = H), sZ(H, K))) {
                E2(J, Q, G, X);
                return;
              }
            } catch (O) {
            } finally {
              T.current = Y;
            }
          }
        }
        var z = vW(J, Q, G, X);
        if (z !== null) {
          var D = EZ();
          _Q(z, J, X, D), OH(z, Q, X);
        }
      }
      DH(J, X);
    }
    function VH(J) {
      var Q = J.alternate;
      return J === gJ || (Q !== null && Q === gJ);
    }
    function qH(J, Q) {
      Y7 = U9 = !0;
      var Z = J.pending;
      if (Z === null) Q.next = Q;
      else (Q.next = Z.next), (Z.next = Q);
      J.pending = Q;
    }
    function OH(J, Q, Z) {
      if (rY(Z)) {
        var X = Q.lanes;
        X = tY(X, J.pendingLanes);
        var G = zJ(X, Z);
        (Q.lanes = G), QG(J, G);
      }
    }
    function DH(J, Q, Z) {
      CX(J, Q);
    }
    var E9 = {
        readContext: DQ,
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
      $H = null,
      jH = null,
      PH = null,
      AH = null,
      s0 = null,
      F0 = null,
      R9 = null;
    {
      var rB = function () {
          M(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        },
        XJ = function () {
          M(
            "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks",
          );
        };
      ($H = {
        readContext: function (J) {
          return DQ(J);
        },
        useCallback: function (J, Q) {
          return (I = "useCallback"), NJ(), S5(Q), cB(J, Q);
        },
        useContext: function (J) {
          return (I = "useContext"), NJ(), DQ(J);
        },
        useEffect: function (J, Q) {
          return (I = "useEffect"), NJ(), S5(Q), M9(J, Q);
        },
        useImperativeHandle: function (J, Q, Z) {
          return (I = "useImperativeHandle"), NJ(), S5(Z), lB(J, Q, Z);
        },
        useInsertionEffect: function (J, Q) {
          return (I = "useInsertionEffect"), NJ(), S5(Q), mB(J, Q);
        },
        useLayoutEffect: function (J, Q) {
          return (I = "useLayoutEffect"), NJ(), S5(Q), yB(J, Q);
        },
        useMemo: function (J, Q) {
          (I = "useMemo"), NJ(), S5(Q);
          var Z = T.current;
          T.current = s0;
          try {
            return iB(J, Q);
          } finally {
            T.current = Z;
          }
        },
        useReducer: function (J, Q, Z) {
          (I = "useReducer"), NJ();
          var X = T.current;
          T.current = s0;
          try {
            return kB(J, Q, Z);
          } finally {
            T.current = X;
          }
        },
        useRef: function (J) {
          return (I = "useRef"), NJ(), sB(J);
        },
        useState: function (J) {
          (I = "useState"), NJ();
          var Q = T.current;
          T.current = s0;
          try {
            return W9(J);
          } finally {
            T.current = Q;
          }
        },
        useDebugValue: function (J, Q) {
          return (I = "useDebugValue"), NJ(), D9();
        },
        useDeferredValue: function (J) {
          return (I = "useDeferredValue"), NJ(), aB(J);
        },
        useTransition: function () {
          return (I = "useTransition"), NJ(), pB();
        },
        useMutableSource: function (J, Q, Z) {
          return (I = "useMutableSource"), NJ(), hB();
        },
        useSyncExternalStore: function (J, Q, Z) {
          return (I = "useSyncExternalStore"), NJ(), fB(J, Q, Z);
        },
        useId: function () {
          return (I = "useId"), NJ(), oB();
        },
        unstable_isNewReconciler: hQ,
      }),
        (jH = {
          readContext: function (J) {
            return DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), cB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), M9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), lB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), mB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), yB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = s0;
            try {
              return iB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = s0;
            try {
              return kB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), sB(J);
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = s0;
            try {
              return W9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), D9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), aB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), pB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), hB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), fB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), C(), oB();
          },
          unstable_isNewReconciler: hQ,
        }),
        (PH = {
          readContext: function (J) {
            return DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), j9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), z7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), O9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), V9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), q9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = F0;
            try {
              return P9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = F0;
            try {
              return gB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), H9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = F0;
            try {
              return uB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), $9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), YH(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), HH();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), Y9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), K9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), A9();
          },
          unstable_isNewReconciler: hQ,
        }),
        (AH = {
          readContext: function (J) {
            return DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), j9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), z7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), O9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), V9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), q9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = R9;
            try {
              return P9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = R9;
            try {
              return TB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), H9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = R9;
            try {
              return dB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), $9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), KH(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), zH();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), Y9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), K9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), A9();
          },
          unstable_isNewReconciler: hQ,
        }),
        (s0 = {
          readContext: function (J) {
            return rB(), DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), NJ(), cB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), NJ(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), NJ(), M9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), NJ(), lB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), NJ(), mB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), NJ(), yB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), NJ();
            var Z = T.current;
            T.current = s0;
            try {
              return iB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), NJ();
            var X = T.current;
            T.current = s0;
            try {
              return kB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), NJ(), sB(J);
          },
          useState: function (J) {
            (I = "useState"), XJ(), NJ();
            var Q = T.current;
            T.current = s0;
            try {
              return W9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), NJ(), D9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), NJ(), aB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), NJ(), pB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), NJ(), hB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), NJ(), fB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), XJ(), NJ(), oB();
          },
          unstable_isNewReconciler: hQ,
        }),
        (F0 = {
          readContext: function (J) {
            return rB(), DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), C(), j9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), C(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), C(), z7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), C(), O9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), C(), V9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), C(), q9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), C();
            var Z = T.current;
            T.current = F0;
            try {
              return P9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), C();
            var X = T.current;
            T.current = F0;
            try {
              return gB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), C(), H9();
          },
          useState: function (J) {
            (I = "useState"), XJ(), C();
            var Q = T.current;
            T.current = F0;
            try {
              return uB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), C(), $9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), C(), YH(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), C(), HH();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), C(), Y9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), C(), K9(J, Q);
          },
          useId: function () {
            return (I = "useId"), XJ(), C(), A9();
          },
          unstable_isNewReconciler: hQ,
        }),
        (R9 = {
          readContext: function (J) {
            return rB(), DQ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), XJ(), C(), j9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), XJ(), C(), DQ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), XJ(), C(), z7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), XJ(), C(), O9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), XJ(), C(), V9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), XJ(), C(), q9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), XJ(), C();
            var Z = T.current;
            T.current = F0;
            try {
              return P9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), XJ(), C();
            var X = T.current;
            T.current = F0;
            try {
              return TB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), XJ(), C(), H9();
          },
          useState: function (J) {
            (I = "useState"), XJ(), C();
            var Q = T.current;
            T.current = F0;
            try {
              return dB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), XJ(), C(), $9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), XJ(), C(), KH(J);
          },
          useTransition: function () {
            return (I = "useTransition"), XJ(), C(), zH();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), XJ(), C(), Y9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), XJ(), C(), K9(J, Q);
          },
          useId: function () {
            return (I = "useId"), XJ(), C(), A9();
          },
          unstable_isNewReconciler: hQ,
        });
    }
    var o1 = s.unstable_now,
      EH = 0,
      L9 = -1,
      M7 = -1,
      F9 = -1,
      nB = !1,
      I9 = !1;
    function RH() {
      return nB;
    }
    function y2() {
      I9 = !0;
    }
    function l2() {
      (nB = !1), (I9 = !1);
    }
    function c2() {
      (nB = I9), (I9 = !1);
    }
    function LH() {
      return EH;
    }
    function FH() {
      EH = o1();
    }
    function tB(J) {
      if (((M7 = o1()), J.actualStartTime < 0)) J.actualStartTime = o1();
    }
    function IH(J) {
      M7 = -1;
    }
    function x9(J, Q) {
      if (M7 >= 0) {
        var Z = o1() - M7;
        if (((J.actualDuration += Z), Q)) J.selfBaseDuration = Z;
        M7 = -1;
      }
    }
    function m0(J) {
      if (L9 >= 0) {
        var Q = o1() - L9;
        L9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case m:
              var X = Z.stateNode;
              X.effectDuration += Q;
              return;
            case rJ:
              var G = Z.stateNode;
              G.effectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function eB(J) {
      if (F9 >= 0) {
        var Q = o1() - F9;
        F9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case m:
              var X = Z.stateNode;
              if (X !== null) X.passiveEffectDuration += Q;
              return;
            case rJ:
              var G = Z.stateNode;
              if (G !== null) G.passiveEffectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function y0() {
      L9 = o1();
    }
    function JU() {
      F9 = o1();
    }
    function QU(J) {
      var Q = J.child;
      while (Q) (J.actualDuration += Q.actualDuration), (Q = Q.sibling);
    }
    function C4(J, Q) {
      return { value: J, source: Q, stack: u7(Q), digest: null };
    }
    function ZU(J, Q, Z) {
      return {
        value: J,
        source: null,
        stack: Z != null ? Z : null,
        digest: Q != null ? Q : null,
      };
    }
    function i2(J, Q) {
      return !0;
    }
    function XU(J, Q) {
      try {
        var Z = i2(J, Q);
        if (Z === !1) return;
        var { value: X, source: G, stack: B } = Q,
          U = B !== null ? B : "";
        if (X != null && X._suppressLogging) {
          if (J.tag === a) return;
          console.error(X);
        }
        var Y = G ? YJ(G) : null,
          K = Y
            ? "The above error occurred in the <" + Y + "> component:"
            : "The above error occurred in one of your React components:",
          H;
        if (J.tag === m)
          H =
            "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
        else {
          var z = YJ(J) || "Anonymous";
          H =
            "React will try to recreate this component tree from scratch " +
            ("using the error boundary you provided, " + z + ".");
        }
        var D = K + "\n" + U + "\n\n" + ("" + H);
        console.error(D);
      } catch (O) {
        setTimeout(function () {
          throw O;
        });
      }
    }
    var a2 = typeof WeakMap === "function" ? WeakMap : Map;
    function xH(J, Q, Z) {
      var X = V1(oJ, Z);
      (X.tag = ZB), (X.payload = { element: null });
      var G = Q.value;
      return (
        (X.callback = function () {
          lj(G), XU(J, Q);
        }),
        X
      );
    }
    function GU(J, Q, Z) {
      var X = V1(oJ, Z);
      X.tag = ZB;
      var G = J.type.getDerivedStateFromError;
      if (typeof G === "function") {
        var B = Q.value;
        (X.payload = function () {
          return G(B);
        }),
          (X.callback = function () {
            fz(J), XU(J, Q);
          });
      }
      var U = J.stateNode;
      if (U !== null && typeof U.componentDidCatch === "function")
        X.callback = function Y() {
          if ((fz(J), XU(J, Q), typeof G !== "function")) mj(this);
          var { value: K, stack: H } = Q;
          if (
            (this.componentDidCatch(K, { componentStack: H !== null ? H : "" }),
            typeof G !== "function")
          ) {
            if (!fZ(J.lanes, ZJ))
              M(
                "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                YJ(J) || "Unknown",
              );
          }
        };
      return X;
    }
    function wH(J, Q, Z) {
      var X = J.pingCache,
        G;
      if (X === null)
        (X = J.pingCache = new a2()), (G = new Set()), X.set(Q, G);
      else if (((G = X.get(Q)), G === void 0)) (G = new Set()), X.set(Q, G);
      if (!G.has(Z)) {
        G.add(Z);
        var B = cj.bind(null, J, Q, Z);
        if ($0) _7(J, Z);
        Q.then(B, B);
      }
    }
    function p2(J, Q, Z, X) {
      var G = J.updateQueue;
      if (G === null) {
        var B = new Set();
        B.add(Z), (J.updateQueue = B);
      } else G.add(Z);
    }
    function o2(J, Q) {
      var Z = J.tag;
      if ((J.mode & $J) === r && (Z === KJ || Z === JJ || Z === _J)) {
        var X = J.alternate;
        if (X)
          (J.updateQueue = X.updateQueue),
            (J.memoizedState = X.memoizedState),
            (J.lanes = X.lanes);
        else (J.updateQueue = null), (J.memoizedState = null);
      }
    }
    function _H(J) {
      var Q = J;
      do {
        if (Q.tag === AJ && k2(Q)) return Q;
        Q = Q.return;
      } while (Q !== null);
      return null;
    }
    function SH(J, Q, Z, X, G) {
      if ((J.mode & $J) === r) {
        if (J === Q) J.flags |= jZ;
        else {
          if (
            ((J.flags |= CJ),
            (Z.flags |= LX),
            (Z.flags &= ~(CM | M6)),
            Z.tag === a)
          ) {
            var B = Z.alternate;
            if (B === null) Z.tag = GQ;
            else {
              var U = V1(oJ, ZJ);
              (U.tag = p8), c1(Z, U, ZJ);
            }
          }
          Z.lanes = zJ(Z.lanes, ZJ);
        }
        return J;
      }
      return (J.flags |= jZ), (J.lanes = G), J;
    }
    function r2(J, Q, Z, X, G) {
      if (((Z.flags |= M6), $0)) _7(J, G);
      if (X !== null && typeof X === "object" && typeof X.then === "function") {
        var B = X;
        if ((o2(Z), lQ() && Z.mode & $J)) PW();
        var U = _H(Q);
        if (U !== null) {
          if (((U.flags &= ~Q1), SH(U, Q, Z, J, G), U.mode & $J)) wH(J, B, G);
          p2(U, J, B);
          return;
        } else {
          if (!AV(G)) {
            wH(J, B, G), fU();
            return;
          }
          var Y = new Error(
            "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
          );
          X = Y;
        }
      } else if (lQ() && Z.mode & $J) {
        PW();
        var K = _H(Q);
        if (K !== null) {
          if ((K.flags & jZ) === o) K.flags |= Q1;
          SH(K, Q, Z, J, G), oG(C4(X, Z));
          return;
        }
      }
      (X = C4(X, Z)), kj(X);
      var H = Q;
      do {
        switch (H.tag) {
          case m: {
            var z = X;
            H.flags |= jZ;
            var D = A6(G);
            H.lanes = zJ(H.lanes, D);
            var O = xH(H, z, D);
            BB(H, O);
            return;
          }
          case a:
            var E = X,
              P = H.type,
              R = H.stateNode;
            if (
              (H.flags & CJ) === o &&
              (typeof P.getDerivedStateFromError === "function" ||
                (R !== null &&
                  typeof R.componentDidCatch === "function" &&
                  !Sz(R)))
            ) {
              H.flags |= jZ;
              var g = A6(G);
              H.lanes = zJ(H.lanes, g);
              var l = GU(H, E, g);
              BB(H, l);
              return;
            }
            break;
        }
        H = H.return;
      } while (H !== null);
    }
    function n2() {
      return null;
    }
    var V7 = LJ.ReactCurrentOwner,
      I0 = !1,
      BU,
      q7,
      UU,
      YU,
      KU,
      v4,
      WU,
      w9;
    (BU = {}),
      (q7 = {}),
      (UU = {}),
      (YU = {}),
      (KU = {}),
      (v4 = !1),
      (WU = {}),
      (w9 = {});
    function PZ(J, Q, Z, X) {
      if (J === null) Q.child = aW(Q, null, Z, X);
      else Q.child = F5(Q, J.child, Z, X);
    }
    function t2(J, Q, Z, X) {
      (Q.child = F5(Q, J.child, null, X)), (Q.child = F5(Q, null, Z, X));
    }
    function CH(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) P0(B, X, "prop", fJ(Z));
      }
      var U = Z.render,
        Y = Q.ref,
        K,
        H;
      L5(Q, G), q6(Q);
      {
        if (
          ((V7.current = Q),
          Q0(!0),
          (K = C5(J, Q, U, X, Y, G)),
          (H = v5()),
          Q.mode & OQ)
        ) {
          bQ(!0);
          try {
            (K = C5(J, Q, U, X, Y, G)), (H = v5());
          } finally {
            bQ(!1);
          }
        }
        Q0(!1);
      }
      if ((X5(), J !== null && !I0)) return tW(J, Q, G), q1(J, Q, G);
      if (lQ() && H) yG(Q);
      return (Q.flags |= Q5), PZ(J, Q, K, G), Q.child;
    }
    function vH(J, Q, Z, X, G) {
      if (J === null) {
        var B = Z.type;
        if (KP(B) && Z.compare === null && Z.defaultProps === void 0) {
          var U = B;
          return (
            (U = u5(B)), (Q.tag = _J), (Q.type = U), MU(Q, B), NH(J, Q, U, X, G)
          );
        }
        {
          var Y = B.propTypes;
          if (Y) P0(Y, X, "prop", fJ(B));
        }
        var K = oU(Z.type, null, X, Q, Q.mode, G);
        return (K.ref = Q.ref), (K.return = Q), (Q.child = K), K;
      }
      {
        var H = Z.type,
          z = H.propTypes;
        if (z) P0(z, X, "prop", fJ(H));
      }
      var D = J.child,
        O = jU(J, G);
      if (!O) {
        var E = D.memoizedProps,
          P = Z.compare;
        if (((P = P !== null ? P : g6), P(E, X) && J.ref === Q.ref))
          return q1(J, Q, G);
      }
      Q.flags |= Q5;
      var R = T4(D, X);
      return (R.ref = Q.ref), (R.return = Q), (Q.child = R), R;
    }
    function NH(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Q.elementType;
        if (B.$$typeof === DJ) {
          var U = B,
            Y = U._payload,
            K = U._init;
          try {
            B = K(Y);
          } catch (D) {
            B = null;
          }
          var H = B && B.propTypes;
          if (H) P0(H, X, "prop", fJ(B));
        }
      }
      if (J !== null) {
        var z = J.memoizedProps;
        if (g6(z, X) && J.ref === Q.ref && Q.type === J.type) {
          if (((I0 = !1), (Q.pendingProps = X = z), !jU(J, G)))
            return (Q.lanes = J.lanes), q1(J, Q, G);
          else if ((J.flags & LX) !== o) I0 = !0;
        }
      }
      return HU(J, Q, Z, X, G);
    }
    function bH(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.children,
        B = J !== null ? J.memoizedState : null;
      if (X.mode === "hidden" || eQ)
        if ((Q.mode & $J) === r) {
          var U = { baseLanes: x, cachePool: null, transitions: null };
          (Q.memoizedState = U), d9(Q, Z);
        } else if (!fZ(Z, hZ)) {
          var Y = null,
            K;
          if (B !== null) {
            var H = B.baseLanes;
            K = zJ(H, Z);
          } else K = Z;
          Q.lanes = Q.childLanes = U8(hZ);
          var z = { baseLanes: K, cachePool: Y, transitions: null };
          return (Q.memoizedState = z), (Q.updateQueue = null), d9(Q, K), null;
        } else {
          var D = { baseLanes: x, cachePool: null, transitions: null };
          Q.memoizedState = D;
          var O = B !== null ? B.baseLanes : Z;
          d9(Q, O);
        }
      else {
        var E;
        if (B !== null) (E = zJ(B.baseLanes, Z)), (Q.memoizedState = null);
        else E = Z;
        d9(Q, E);
      }
      return PZ(J, Q, G, Z), Q.child;
    }
    function e2(J, Q, Z) {
      var X = Q.pendingProps;
      return PZ(J, Q, X, Z), Q.child;
    }
    function J$(J, Q, Z) {
      var X = Q.pendingProps.children;
      return PZ(J, Q, X, Z), Q.child;
    }
    function Q$(J, Q, Z) {
      {
        Q.flags |= RJ;
        {
          var X = Q.stateNode;
          (X.effectDuration = 0), (X.passiveEffectDuration = 0);
        }
      }
      var G = Q.pendingProps,
        B = G.children;
      return PZ(J, Q, B, Z), Q.child;
    }
    function kH(J, Q) {
      var Z = Q.ref;
      if ((J === null && Z !== null) || (J !== null && J.ref !== Z))
        (Q.flags |= b1), (Q.flags |= FX);
    }
    function HU(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) P0(B, X, "prop", fJ(Z));
      }
      var U;
      {
        var Y = $5(Q, Z, !0);
        U = j5(Q, Y);
      }
      var K, H;
      L5(Q, G), q6(Q);
      {
        if (
          ((V7.current = Q),
          Q0(!0),
          (K = C5(J, Q, Z, X, U, G)),
          (H = v5()),
          Q.mode & OQ)
        ) {
          bQ(!0);
          try {
            (K = C5(J, Q, Z, X, U, G)), (H = v5());
          } finally {
            bQ(!1);
          }
        }
        Q0(!1);
      }
      if ((X5(), J !== null && !I0)) return tW(J, Q, G), q1(J, Q, G);
      if (lQ() && H) yG(Q);
      return (Q.flags |= Q5), PZ(J, Q, K, G), Q.child;
    }
    function gH(J, Q, Z, X, G) {
      {
        switch (LP(Q)) {
          case !1: {
            var { stateNode: B, type: U } = Q,
              Y = new U(Q.memoizedProps, B.context),
              K = Y.state;
            B.updater.enqueueSetState(B, K, null);
            break;
          }
          case !0: {
            (Q.flags |= CJ), (Q.flags |= jZ);
            var H = new Error("Simulated error coming from DevTools"),
              z = A6(G);
            Q.lanes = zJ(Q.lanes, z);
            var D = GU(Q, C4(H, Q), z);
            BB(Q, D);
            break;
          }
        }
        if (Q.type !== Q.elementType) {
          var O = Z.propTypes;
          if (O) P0(O, X, "prop", fJ(Z));
        }
      }
      var E;
      if (f0(Z)) (E = !0), h8(Q);
      else E = !1;
      L5(Q, G);
      var P = Q.stateNode,
        R;
      if (P === null) S9(J, Q), mW(Q, Z, X), $B(Q, Z, X, G), (R = !0);
      else if (J === null) R = _2(Q, Z, X, G);
      else R = S2(J, Q, Z, X, G);
      var g = zU(J, Q, Z, R, E, G);
      {
        var l = Q.stateNode;
        if (R && l.props !== X) {
          if (!v4)
            M(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              YJ(Q) || "a component",
            );
          v4 = !0;
        }
      }
      return g;
    }
    function zU(J, Q, Z, X, G, B) {
      kH(J, Q);
      var U = (Q.flags & CJ) !== o;
      if (!X && !U) {
        if (G) OW(Q, Z, !1);
        return q1(J, Q, B);
      }
      var Y = Q.stateNode;
      V7.current = Q;
      var K;
      if (U && typeof Z.getDerivedStateFromError !== "function")
        (K = null), IH();
      else {
        q6(Q);
        {
          if ((Q0(!0), (K = Y.render()), Q.mode & OQ)) {
            bQ(!0);
            try {
              Y.render();
            } finally {
              bQ(!1);
            }
          }
          Q0(!1);
        }
        X5();
      }
      if (((Q.flags |= Q5), J !== null && U)) t2(J, Q, K, B);
      else PZ(J, Q, K, B);
      if (((Q.memoizedState = Y.state), G)) OW(Q, Z, !0);
      return Q.child;
    }
    function TH(J) {
      var Q = J.stateNode;
      if (Q.pendingContext)
        VW(J, Q.pendingContext, Q.pendingContext !== Q.context);
      else if (Q.context) VW(J, Q.context, !1);
      LB(J, Q.containerInfo);
    }
    function Z$(J, Q, Z) {
      if ((TH(Q), J === null))
        throw new Error("Should have a current fiber. This is a bug in React.");
      var { pendingProps: X, memoizedState: G } = Q,
        B = G.element;
      kW(J, Q), t8(Q, X, null, Z);
      var { memoizedState: U, stateNode: Y } = Q,
        K = U.element;
      if (G.isDehydrated) {
        var H = {
            element: K,
            isDehydrated: !1,
            cache: U.cache,
            pendingSuspenseBoundaries: U.pendingSuspenseBoundaries,
            transitions: U.transitions,
          },
          z = Q.updateQueue;
        if (((z.baseState = H), (Q.memoizedState = H), Q.flags & Q1)) {
          var D = C4(
            new Error(
              "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.of a Suspense boundary, the entire root will switch to client rendering.",
            ),
            Q,
          );
          return hH(J, Q, K, Z, D);
        } else if (K !== B) {
          var O = C4(
            new Error(
              "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.hydrate. Switched the entire root to client rendering.",
            ),
            Q,
          );
          return hH(J, Q, K, Z, O);
        } else {
          Y2(Q);
          var E = aW(Q, null, K, Z);
          Q.child = E;
          var P = E;
          while (P) (P.flags = (P.flags & ~qQ) | Z1), (P = P.sibling);
        }
      } else {
        if ((E5(), K === B)) return q1(J, Q, Z);
        PZ(J, Q, K, Z);
      }
      return Q.child;
    }
    function hH(J, Q, Z, X, G) {
      return E5(), oG(G), (Q.flags |= Q1), PZ(J, Q, Z, X), Q.child;
    }
    function X$(J, Q, Z) {
      if ((oW(Q), J === null)) pG(Q);
      var { type: X, pendingProps: G } = Q,
        B = J !== null ? J.memoizedProps : null,
        U = G.children,
        Y = CG(X, G);
      if (Y) U = null;
      else if (B !== null && CG(X, B)) Q.flags |= z6;
      return kH(J, Q), PZ(J, Q, U, Z), Q.child;
    }
    function G$(J, Q) {
      if (J === null) pG(Q);
      return null;
    }
    function B$(J, Q, Z, X) {
      S9(J, Q);
      var G = Q.pendingProps,
        B = Z,
        U = B._payload,
        Y = B._init,
        K = Y(U);
      Q.type = K;
      var H = (Q.tag = WP(K)),
        z = R0(K, G),
        D;
      switch (H) {
        case KJ:
          return MU(Q, K), (Q.type = K = u5(K)), (D = HU(null, Q, K, z, X)), D;
        case a:
          return (Q.type = K = yU(K)), (D = gH(null, Q, K, z, X)), D;
        case JJ:
          return (Q.type = K = lU(K)), (D = CH(null, Q, K, z, X)), D;
        case HQ: {
          if (Q.type !== Q.elementType) {
            var O = K.propTypes;
            if (O) P0(O, z, "prop", fJ(K));
          }
          return (D = vH(null, Q, K, R0(K.type, z), X)), D;
        }
      }
      var E = "";
      if (K !== null && typeof K === "object" && K.$$typeof === DJ)
        E = " Did you wrap a component in React.lazy() more than once?";
      throw new Error(
        "Element type is invalid. Received a promise that resolves to: " +
          K +
          ". " +
          ("Lazy element type must resolve to a class or function." + E),
      );
    }
    function U$(J, Q, Z, X, G) {
      S9(J, Q), (Q.tag = a);
      var B;
      if (f0(Z)) (B = !0), h8(Q);
      else B = !1;
      return L5(Q, G), mW(Q, Z, X), $B(Q, Z, X, G), zU(null, Q, Z, !0, B, G);
    }
    function Y$(J, Q, Z, X) {
      S9(J, Q);
      var G = Q.pendingProps,
        B;
      {
        var U = $5(Q, Z, !1);
        B = j5(Q, U);
      }
      L5(Q, X);
      var Y, K;
      q6(Q);
      {
        if (Z.prototype && typeof Z.prototype.render === "function") {
          var H = fJ(Z) || "Unknown";
          if (!BU[H])
            M(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.This is likely to cause errors. Change %s to extend React.Component instead.",
              H,
              H,
            ),
              (BU[H] = !0);
        }
        if (Q.mode & OQ) E0.recordLegacyContextWarning(Q, null);
        Q0(!0),
          (V7.current = Q),
          (Y = C5(null, Q, Z, G, B, X)),
          (K = v5()),
          Q0(!1);
      }
      if (
        (X5(),
        (Q.flags |= Q5),
        typeof Y === "object" &&
          Y !== null &&
          typeof Y.render === "function" &&
          Y.$$typeof === void 0)
      ) {
        var z = fJ(Z) || "Unknown";
        if (!q7[z])
          M(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            z,
            z,
            z,
          ),
            (q7[z] = !0);
      }
      if (
        typeof Y === "object" &&
        Y !== null &&
        typeof Y.render === "function" &&
        Y.$$typeof === void 0
      ) {
        {
          var D = fJ(Z) || "Unknown";
          if (!q7[D])
            M(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              D,
              D,
              D,
            ),
              (q7[D] = !0);
        }
        (Q.tag = a), (Q.memoizedState = null), (Q.updateQueue = null);
        var O = !1;
        if (f0(Z)) (O = !0), h8(Q);
        else O = !1;
        return (
          (Q.memoizedState =
            Y.state !== null && Y.state !== void 0 ? Y.state : null),
          GB(Q),
          sW(Q, Y),
          $B(Q, Z, G, X),
          zU(null, Q, Z, !0, O, X)
        );
      } else {
        if (((Q.tag = KJ), Q.mode & OQ)) {
          bQ(!0);
          try {
            (Y = C5(null, Q, Z, G, B, X)), (K = v5());
          } finally {
            bQ(!1);
          }
        }
        if (lQ() && K) yG(Q);
        return PZ(null, Q, Y, X), MU(Q, Z), Q.child;
      }
    }
    function MU(J, Q) {
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
            X = v1();
          if (X) Z += "\n\nCheck the render method of `" + X + "`.";
          var G = X || "",
            B = J._debugSource;
          if (B) G = B.fileName + ":" + B.lineNumber;
          if (!KU[G])
            (KU[G] = !0),
              M(
                "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                Z,
              );
        }
        if (typeof Q.getDerivedStateFromProps === "function") {
          var U = fJ(Q) || "Unknown";
          if (!YU[U])
            M(
              "%s: Function components do not support getDerivedStateFromProps.",
              U,
            ),
              (YU[U] = !0);
        }
        if (typeof Q.contextType === "object" && Q.contextType !== null) {
          var Y = fJ(Q) || "Unknown";
          if (!UU[Y])
            M("%s: Function components do not support contextType.", Y),
              (UU[Y] = !0);
        }
      }
    }
    var VU = { dehydrated: null, treeContext: null, retryLane: kQ };
    function qU(J) {
      return { baseLanes: J, cachePool: n2(), transitions: null };
    }
    function K$(J, Q) {
      var Z = null;
      return {
        baseLanes: zJ(J.baseLanes, Q),
        cachePool: Z,
        transitions: J.transitions,
      };
    }
    function W$(J, Q, Z, X) {
      if (Q !== null) {
        var G = Q.memoizedState;
        if (G === null) return !1;
      }
      return xB(J, B7);
    }
    function H$(J, Q) {
      return B8(J.childLanes, Q);
    }
    function fH(J, Q, Z) {
      var X = Q.pendingProps;
      if (FP(Q)) Q.flags |= CJ;
      var G = L0.current,
        B = !1,
        U = (Q.flags & CJ) !== o;
      if (U || W$(G, J)) (B = !0), (Q.flags &= ~CJ);
      else if (J === null || J.memoizedState !== null) G = b2(G, nW);
      if (((G = x5(G)), a1(Q, G), J === null)) {
        pG(Q);
        var Y = Q.memoizedState;
        if (Y !== null) {
          var K = Y.dehydrated;
          if (K !== null) return O$(Q, K);
        }
        var { children: H, fallback: z } = X;
        if (B) {
          var D = z$(Q, H, z, Z),
            O = Q.child;
          return (O.memoizedState = qU(Z)), (Q.memoizedState = VU), D;
        } else return OU(Q, H);
      } else {
        var E = J.memoizedState;
        if (E !== null) {
          var P = E.dehydrated;
          if (P !== null) return D$(J, Q, U, X, P, E, Z);
        }
        if (B) {
          var { fallback: R, children: g } = X,
            l = V$(J, Q, g, R, Z),
            d = Q.child,
            VJ = J.child.memoizedState;
          return (
            (d.memoizedState = VJ === null ? qU(Z) : K$(VJ, Z)),
            (d.childLanes = H$(J, Z)),
            (Q.memoizedState = VU),
            l
          );
        } else {
          var qJ = X.children,
            $ = M$(J, Q, qJ, Z);
          return (Q.memoizedState = null), $;
        }
      }
    }
    function OU(J, Q, Z) {
      var X = J.mode,
        G = { mode: "visible", children: Q },
        B = DU(G, X);
      return (B.return = J), (J.child = B), B;
    }
    function z$(J, Q, Z, X) {
      var { mode: G, child: B } = J,
        U = { mode: "hidden", children: Q },
        Y,
        K;
      if ((G & $J) === r && B !== null) {
        if (((Y = B), (Y.childLanes = x), (Y.pendingProps = U), J.mode & kJ))
          (Y.actualDuration = 0),
            (Y.actualStartTime = -1),
            (Y.selfBaseDuration = 0),
            (Y.treeBaseDuration = 0);
        K = Q4(Z, G, X, null);
      } else (Y = DU(U, G)), (K = Q4(Z, G, X, null));
      return (Y.return = J), (K.return = J), (Y.sibling = K), (J.child = Y), K;
    }
    function DU(J, Q, Z) {
      return dz(J, Q, x, null);
    }
    function uH(J, Q) {
      return T4(J, Q);
    }
    function M$(J, Q, Z, X) {
      var G = J.child,
        B = G.sibling,
        U = uH(G, { mode: "visible", children: Z });
      if ((Q.mode & $J) === r) U.lanes = X;
      if (((U.return = Q), (U.sibling = null), B !== null)) {
        var Y = Q.deletions;
        if (Y === null) (Q.deletions = [B]), (Q.flags |= K4);
        else Y.push(B);
      }
      return (Q.child = U), U;
    }
    function V$(J, Q, Z, X, G) {
      var B = Q.mode,
        U = J.child,
        Y = U.sibling,
        K = { mode: "hidden", children: Z },
        H;
      if ((B & $J) === r && Q.child !== U) {
        var z = Q.child;
        if (((H = z), (H.childLanes = x), (H.pendingProps = K), Q.mode & kJ))
          (H.actualDuration = 0),
            (H.actualStartTime = -1),
            (H.selfBaseDuration = U.selfBaseDuration),
            (H.treeBaseDuration = U.treeBaseDuration);
        Q.deletions = null;
      } else (H = uH(U, K)), (H.subtreeFlags = U.subtreeFlags & G1);
      var D;
      if (Y !== null) D = T4(Y, X);
      else (D = Q4(X, B, G, null)), (D.flags |= qQ);
      return (D.return = Q), (H.return = Q), (H.sibling = D), (Q.child = H), D;
    }
    function _9(J, Q, Z, X) {
      if (X !== null) oG(X);
      F5(Q, J.child, null, Z);
      var G = Q.pendingProps,
        B = G.children,
        U = OU(Q, B);
      return (U.flags |= qQ), (Q.memoizedState = null), U;
    }
    function q$(J, Q, Z, X, G) {
      var B = Q.mode,
        U = { mode: "visible", children: Z },
        Y = DU(U, B),
        K = Q4(X, B, G, null);
      if (
        ((K.flags |= qQ),
        (Y.return = Q),
        (K.return = Q),
        (Y.sibling = K),
        (Q.child = Y),
        (Q.mode & $J) !== r)
      )
        F5(Q, J.child, null, G);
      return K;
    }
    function O$(J, Q, Z) {
      if ((J.mode & $J) === r)
        M(
          "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.",
        ),
          (J.lanes = U8(ZJ));
      else if (kG(Q)) J.lanes = U8(O4);
      else J.lanes = U8(hZ);
      return null;
    }
    function D$(J, Q, Z, X, G, B, U) {
      if (!Z) {
        if ((B2(), (Q.mode & $J) === r)) return _9(J, Q, U, null);
        if (kG(G)) {
          var Y, K, H;
          {
            var z = RD(G);
            (Y = z.digest), (K = z.message), (H = z.stack);
          }
          var D;
          if (K) D = new Error(K);
          else
            D = new Error(
              "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.",
            );
          var O = ZU(D, Y, H);
          return _9(J, Q, U, O);
        }
        var E = fZ(U, J.childLanes);
        if (I0 || E) {
          var P = u9();
          if (P !== null) {
            var R = _V(P, U);
            if (R !== kQ && R !== B.retryLane) {
              B.retryLane = R;
              var g = oJ;
              SZ(J, R), _Q(P, J, R, g);
            }
          }
          fU();
          var l = ZU(
            new Error(
              "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.",
            ),
          );
          return _9(J, Q, U, l);
        } else if (UW(G)) {
          (Q.flags |= CJ), (Q.child = J.child);
          var d = ij.bind(null, J);
          return LD(G, d), null;
        } else {
          K2(Q, G, B.treeContext);
          var VJ = X.children,
            qJ = OU(Q, VJ);
          return (qJ.flags |= Z1), qJ;
        }
      } else if (Q.flags & Q1) {
        Q.flags &= ~Q1;
        var $ = ZU(
          new Error(
            "There was an error while hydrating this Suspense boundary. Switched to client rendering.Switched to client rendering.",
          ),
        );
        return _9(J, Q, U, $);
      } else if (Q.memoizedState !== null)
        return (Q.child = J.child), (Q.flags |= CJ), null;
      else {
        var { children: F, fallback: j } = X,
          _ = q$(J, Q, F, j, U),
          h = Q.child;
        return (h.memoizedState = qU(U)), (Q.memoizedState = VU), _;
      }
    }
    function dH(J, Q, Z) {
      J.lanes = zJ(J.lanes, Q);
      var X = J.alternate;
      if (X !== null) X.lanes = zJ(X.lanes, Q);
      JB(J.return, Q, Z);
    }
    function $$(J, Q, Z) {
      var X = Q;
      while (X !== null) {
        if (X.tag === AJ) {
          var G = X.memoizedState;
          if (G !== null) dH(X, Z, J);
        } else if (X.tag === jQ) dH(X, Z, J);
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
    function j$(J) {
      var Q = J,
        Z = null;
      while (Q !== null) {
        var X = Q.alternate;
        if (X !== null && B9(X) === null) Z = Q;
        Q = Q.sibling;
      }
      return Z;
    }
    function P$(J) {
      if (
        J !== void 0 &&
        J !== "forwards" &&
        J !== "backwards" &&
        J !== "together" &&
        !WU[J]
      )
        if (((WU[J] = !0), typeof J === "string"))
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
    function A$(J, Q) {
      if (J !== void 0 && !w9[J]) {
        if (J !== "collapsed" && J !== "hidden")
          (w9[J] = !0),
            M(
              '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
              J,
            );
        else if (Q !== "forwards" && Q !== "backwards")
          (w9[J] = !0),
            M(
              '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
              J,
            );
      }
    }
    function sH(J, Q) {
      {
        var Z = AQ(J),
          X = !Z && typeof o0(J) === "function";
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
    function E$(J, Q) {
      if (
        (Q === "forwards" || Q === "backwards") &&
        J !== void 0 &&
        J !== null &&
        J !== !1
      )
        if (AQ(J)) {
          for (var Z = 0; Z < J.length; Z++) if (!sH(J[Z], Z)) return;
        } else {
          var X = o0(J);
          if (typeof X === "function") {
            var G = X.call(J);
            if (G) {
              var B = G.next(),
                U = 0;
              for (; !B.done; B = G.next()) {
                if (!sH(B.value, U)) return;
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
    function $U(J, Q, Z, X, G) {
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
    function mH(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.revealOrder,
        B = X.tail,
        U = X.children;
      P$(G), A$(B, G), E$(U, G), PZ(J, Q, U, Z);
      var Y = L0.current,
        K = xB(Y, B7);
      if (K) (Y = wB(Y, B7)), (Q.flags |= CJ);
      else {
        var H = J !== null && (J.flags & CJ) !== o;
        if (H) $$(Q, Q.child, Z);
        Y = x5(Y);
      }
      if ((a1(Q, Y), (Q.mode & $J) === r)) Q.memoizedState = null;
      else
        switch (G) {
          case "forwards": {
            var z = j$(Q.child),
              D;
            if (z === null) (D = Q.child), (Q.child = null);
            else (D = z.sibling), (z.sibling = null);
            $U(Q, !1, D, z, B);
            break;
          }
          case "backwards": {
            var O = null,
              E = Q.child;
            Q.child = null;
            while (E !== null) {
              var P = E.alternate;
              if (P !== null && B9(P) === null) {
                Q.child = E;
                break;
              }
              var R = E.sibling;
              (E.sibling = O), (O = E), (E = R);
            }
            $U(Q, !0, O, null, B);
            break;
          }
          case "together": {
            $U(Q, !1, null, null, void 0);
            break;
          }
          default:
            Q.memoizedState = null;
        }
      return Q.child;
    }
    function R$(J, Q, Z) {
      LB(Q, Q.stateNode.containerInfo);
      var X = Q.pendingProps;
      if (J === null) Q.child = F5(Q, null, X, Z);
      else PZ(J, Q, X, Z);
      return Q.child;
    }
    var yH = !1;
    function L$(J, Q, Z) {
      var X = Q.type,
        G = X._context,
        B = Q.pendingProps,
        U = Q.memoizedProps,
        Y = B.value;
      {
        if (!("value" in B)) {
          if (!yH)
            (yH = !0),
              M(
                "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?",
              );
        }
        var K = Q.type.propTypes;
        if (K) P0(K, B, "prop", "Context.Provider");
      }
      if ((CW(Q, G, Y), U !== null)) {
        var H = U.value;
        if (sZ(H, Y)) {
          if (U.children === B.children && !g8()) return q1(J, Q, Z);
        } else j2(Q, G, Z);
      }
      var z = B.children;
      return PZ(J, Q, z, Z), Q.child;
    }
    var lH = !1;
    function F$(J, Q, Z) {
      var X = Q.type;
      if (X._context === void 0) {
        if (X !== X.Consumer) {
          if (!lH)
            (lH = !0),
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
      L5(Q, Z);
      var U = DQ(X);
      q6(Q);
      var Y;
      return (
        (V7.current = Q),
        Q0(!0),
        (Y = B(U)),
        Q0(!1),
        X5(),
        (Q.flags |= Q5),
        PZ(J, Q, Y, Z),
        Q.child
      );
    }
    function O7() {
      I0 = !0;
    }
    function S9(J, Q) {
      if ((Q.mode & $J) === r) {
        if (J !== null)
          (J.alternate = null), (Q.alternate = null), (Q.flags |= qQ);
      }
    }
    function q1(J, Q, Z) {
      if (J !== null) Q.dependencies = J.dependencies;
      if ((IH(), w7(Q.lanes), !fZ(Z, Q.childLanes))) return null;
      return C2(J, Q), Q.child;
    }
    function I$(J, Q, Z) {
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
        if (B === null) (X.deletions = [J]), (X.flags |= K4);
        else B.push(J);
        return (Z.flags |= qQ), Z;
      }
    }
    function jU(J, Q) {
      var Z = J.lanes;
      if (fZ(Z, Q)) return !0;
      return !1;
    }
    function x$(J, Q, Z) {
      switch (Q.tag) {
        case m:
          TH(Q);
          var X = Q.stateNode;
          E5();
          break;
        case c:
          oW(Q);
          break;
        case a: {
          var G = Q.type;
          if (f0(G)) h8(Q);
          break;
        }
        case OJ:
          LB(Q, Q.stateNode.containerInfo);
          break;
        case wJ: {
          var B = Q.memoizedProps.value,
            U = Q.type._context;
          CW(Q, U, B);
          break;
        }
        case rJ:
          {
            var Y = fZ(Z, Q.childLanes);
            if (Y) Q.flags |= RJ;
            {
              var K = Q.stateNode;
              (K.effectDuration = 0), (K.passiveEffectDuration = 0);
            }
          }
          break;
        case AJ: {
          var H = Q.memoizedState;
          if (H !== null) {
            if (H.dehydrated !== null)
              return a1(Q, x5(L0.current)), (Q.flags |= CJ), null;
            var z = Q.child,
              D = z.childLanes;
            if (fZ(Z, D)) return fH(J, Q, Z);
            else {
              a1(Q, x5(L0.current));
              var O = q1(J, Q, Z);
              if (O !== null) return O.sibling;
              else return null;
            }
          } else a1(Q, x5(L0.current));
          break;
        }
        case jQ: {
          var E = (J.flags & CJ) !== o,
            P = fZ(Z, Q.childLanes);
          if (E) {
            if (P) return mH(J, Q, Z);
            Q.flags |= CJ;
          }
          var R = Q.memoizedState;
          if (R !== null)
            (R.rendering = null), (R.tail = null), (R.lastEffect = null);
          if ((a1(Q, L0.current), P)) break;
          else return null;
        }
        case QJ:
        case aJ:
          return (Q.lanes = x), bH(J, Q, Z);
      }
      return q1(J, Q, Z);
    }
    function cH(J, Q, Z) {
      if (Q._debugNeedsRemount && J !== null)
        return I$(
          J,
          Q,
          oU(
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
        if (X !== G || g8() || Q.type !== J.type) I0 = !0;
        else {
          var B = jU(J, Z);
          if (!B && (Q.flags & CJ) === o) return (I0 = !1), x$(J, Q, Z);
          if ((J.flags & LX) !== o) I0 = !0;
          else I0 = !1;
        }
      } else if (((I0 = !1), lQ() && eD(Q))) {
        var U = Q.index,
          Y = J2();
        jW(Q, Y, U);
      }
      switch (((Q.lanes = x), Q.tag)) {
        case XQ:
          return Y$(J, Q, Q.type, Z);
        case H0: {
          var K = Q.elementType;
          return B$(J, Q, K, Z);
        }
        case KJ: {
          var { type: H, pendingProps: z } = Q,
            D = Q.elementType === H ? z : R0(H, z);
          return HU(J, Q, H, D, Z);
        }
        case a: {
          var { type: O, pendingProps: E } = Q,
            P = Q.elementType === O ? E : R0(O, E);
          return gH(J, Q, O, P, Z);
        }
        case m:
          return Z$(J, Q, Z);
        case c:
          return X$(J, Q, Z);
        case xJ:
          return G$(J, Q);
        case AJ:
          return fH(J, Q, Z);
        case OJ:
          return R$(J, Q, Z);
        case JJ: {
          var { type: R, pendingProps: g } = Q,
            l = Q.elementType === R ? g : R0(R, g);
          return CH(J, Q, R, l, Z);
        }
        case iZ:
          return e2(J, Q, Z);
        case W0:
          return J$(J, Q, Z);
        case rJ:
          return Q$(J, Q, Z);
        case wJ:
          return L$(J, Q, Z);
        case TQ:
          return F$(J, Q, Z);
        case HQ: {
          var { type: d, pendingProps: VJ } = Q,
            qJ = R0(d, VJ);
          if (Q.type !== Q.elementType) {
            var $ = d.propTypes;
            if ($) P0($, qJ, "prop", fJ(d));
          }
          return (qJ = R0(d.type, qJ)), vH(J, Q, d, qJ, Z);
        }
        case _J:
          return NH(J, Q, Q.type, Q.pendingProps, Z);
        case GQ: {
          var { type: F, pendingProps: j } = Q,
            _ = Q.elementType === F ? j : R0(F, j);
          return U$(J, Q, F, _, Z);
        }
        case jQ:
          return mH(J, Q, Z);
        case uJ:
          break;
        case QJ:
          return bH(J, Q, Z);
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function N5(J) {
      J.flags |= RJ;
    }
    function iH(J) {
      (J.flags |= b1), (J.flags |= FX);
    }
    var aH, PU, pH, oH;
    (aH = function (J, Q, Z, X) {
      var G = Q.child;
      while (G !== null) {
        if (G.tag === c || G.tag === xJ) rO(J, G.stateNode);
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
      (PU = function (J, Q) {}),
      (pH = function (J, Q, Z, X, G) {
        var B = J.memoizedProps;
        if (B === X) return;
        var U = Q.stateNode,
          Y = FB(),
          K = tO(U, Z, B, X, G, Y);
        if (((Q.updateQueue = K), K)) N5(Q);
      }),
      (oH = function (J, Q, Z, X) {
        if (Z !== X) N5(Q);
      });
    function D7(J, Q) {
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
          var { selfBaseDuration: K, child: H } = J;
          while (H !== null)
            (Z = zJ(Z, zJ(H.lanes, H.childLanes))),
              (X |= H.subtreeFlags & G1),
              (X |= H.flags & G1),
              (K += H.treeBaseDuration),
              (H = H.sibling);
          J.treeBaseDuration = K;
        } else {
          var z = J.child;
          while (z !== null)
            (Z = zJ(Z, zJ(z.lanes, z.childLanes))),
              (X |= z.subtreeFlags & G1),
              (X |= z.flags & G1),
              (z.return = J),
              (z = z.sibling);
        }
        J.subtreeFlags |= X;
      }
      return (J.childLanes = Z), Q;
    }
    function w$(J, Q, Z) {
      if (V2() && (Q.mode & $J) !== r && (Q.flags & CJ) === o)
        return IW(Q), E5(), (Q.flags |= Q1 | M6 | jZ), !1;
      var X = m8(Q);
      if (Z !== null && Z.dehydrated !== null)
        if (J === null) {
          if (!X)
            throw new Error(
              "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
            );
          if ((z2(Q), iQ(Q), (Q.mode & kJ) !== r)) {
            var G = Z !== null;
            if (G) {
              var B = Q.child;
              if (B !== null) Q.treeBaseDuration -= B.treeBaseDuration;
            }
          }
          return !1;
        } else {
          if ((E5(), (Q.flags & CJ) === o)) Q.memoizedState = null;
          if (((Q.flags |= RJ), iQ(Q), (Q.mode & kJ) !== r)) {
            var U = Z !== null;
            if (U) {
              var Y = Q.child;
              if (Y !== null) Q.treeBaseDuration -= Y.treeBaseDuration;
            }
          }
          return !1;
        }
      else return xW(), !0;
    }
    function rH(J, Q, Z) {
      var X = Q.pendingProps;
      switch ((lG(Q), Q.tag)) {
        case XQ:
        case H0:
        case _J:
        case KJ:
        case JJ:
        case iZ:
        case W0:
        case rJ:
        case TQ:
        case HQ:
          return iQ(Q), null;
        case a: {
          var G = Q.type;
          if (f0(G)) T8(Q);
          return iQ(Q), null;
        }
        case m: {
          var B = Q.stateNode;
          if ((I5(Q), dG(Q), SB(), B.pendingContext))
            (B.context = B.pendingContext), (B.pendingContext = null);
          if (J === null || J.child === null) {
            var U = m8(Q);
            if (U) N5(Q);
            else if (J !== null) {
              var Y = J.memoizedState;
              if (!Y.isDehydrated || (Q.flags & Q1) !== o)
                (Q.flags |= W4), xW();
            }
          }
          return PU(J, Q), iQ(Q), null;
        }
        case c: {
          IB(Q);
          var K = pW(),
            H = Q.type;
          if (J !== null && Q.stateNode != null) {
            if ((pH(J, Q, H, X, K), J.ref !== Q.ref)) iH(Q);
          } else {
            if (!X) {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
                );
              return iQ(Q), null;
            }
            var z = FB(),
              D = m8(Q);
            if (D) {
              if (W2(Q, K, z)) N5(Q);
            } else {
              var O = oO(H, X, K, z, Q);
              if ((aH(O, Q, !1, !1), (Q.stateNode = O), nO(O, H, X, K))) N5(Q);
            }
            if (Q.ref !== null) iH(Q);
          }
          return iQ(Q), null;
        }
        case xJ: {
          var E = X;
          if (J && Q.stateNode != null) {
            var P = J.memoizedProps;
            oH(J, Q, P, E);
          } else {
            if (typeof E !== "string") {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
            var R = pW(),
              g = FB(),
              l = m8(Q);
            if (l) {
              if (H2(Q)) N5(Q);
            } else Q.stateNode = eO(E, R, g, Q);
          }
          return iQ(Q), null;
        }
        case AJ: {
          w5(Q);
          var d = Q.memoizedState;
          if (
            J === null ||
            (J.memoizedState !== null && J.memoizedState.dehydrated !== null)
          ) {
            var VJ = w$(J, Q, d);
            if (!VJ)
              if (Q.flags & jZ) return Q;
              else return null;
          }
          if ((Q.flags & CJ) !== o) {
            if (((Q.lanes = Z), (Q.mode & kJ) !== r)) QU(Q);
            return Q;
          }
          var qJ = d !== null,
            $ = J !== null && J.memoizedState !== null;
          if (qJ !== $) {
            if (qJ) {
              var F = Q.child;
              if (((F.flags |= H4), (Q.mode & $J) !== r)) {
                var j =
                  J === null &&
                  (Q.memoizedProps.unstable_avoidThisFallback !== !0 || !aZ);
                if (j || xB(L0.current, nW)) bj();
                else fU();
              }
            }
          }
          var _ = Q.updateQueue;
          if (_ !== null) Q.flags |= RJ;
          if ((iQ(Q), (Q.mode & kJ) !== r)) {
            if (qJ) {
              var h = Q.child;
              if (h !== null) Q.treeBaseDuration -= h.treeBaseDuration;
            }
          }
          return null;
        }
        case OJ:
          if ((I5(Q), PU(J, Q), J === null)) iD(Q.stateNode.containerInfo);
          return iQ(Q), null;
        case wJ:
          var b = Q.type._context;
          return eG(b, Q), iQ(Q), null;
        case GQ: {
          var t = Q.type;
          if (f0(t)) T8(Q);
          return iQ(Q), null;
        }
        case jQ: {
          w5(Q);
          var GJ = Q.memoizedState;
          if (GJ === null) return iQ(Q), null;
          var TJ = (Q.flags & CJ) !== o,
            FJ = GJ.rendering;
          if (FJ === null)
            if (!TJ) {
              var WQ = gj() && (J === null || (J.flags & CJ) === o);
              if (!WQ) {
                var IJ = Q.child;
                while (IJ !== null) {
                  var YQ = B9(IJ);
                  if (YQ !== null) {
                    (TJ = !0), (Q.flags |= CJ), D7(GJ, !1);
                    var KZ = YQ.updateQueue;
                    if (KZ !== null) (Q.updateQueue = KZ), (Q.flags |= RJ);
                    return (
                      (Q.subtreeFlags = o),
                      v2(Q, Z),
                      a1(Q, wB(L0.current, B7)),
                      Q.child
                    );
                  }
                  IJ = IJ.sibling;
                }
              }
              if (GJ.tail !== null && NQ() > jz())
                (Q.flags |= CJ), (TJ = !0), D7(GJ, !1), (Q.lanes = aY);
            } else D7(GJ, !1);
          else {
            if (!TJ) {
              var nQ = B9(FJ);
              if (nQ !== null) {
                (Q.flags |= CJ), (TJ = !0);
                var lZ = nQ.updateQueue;
                if (lZ !== null) (Q.updateQueue = lZ), (Q.flags |= RJ);
                if (
                  (D7(GJ, !0),
                  GJ.tail === null &&
                    GJ.tailMode === "hidden" &&
                    !FJ.alternate &&
                    !lQ())
                )
                  return iQ(Q), null;
              } else if (NQ() * 2 - GJ.renderingStartTime > jz() && Z !== hZ)
                (Q.flags |= CJ), (TJ = !0), D7(GJ, !1), (Q.lanes = aY);
            }
            if (GJ.isBackwards) (FJ.sibling = Q.child), (Q.child = FJ);
            else {
              var RZ = GJ.last;
              if (RZ !== null) RZ.sibling = FJ;
              else Q.child = FJ;
              GJ.last = FJ;
            }
          }
          if (GJ.tail !== null) {
            var LZ = GJ.tail;
            (GJ.rendering = LZ),
              (GJ.tail = LZ.sibling),
              (GJ.renderingStartTime = NQ()),
              (LZ.sibling = null);
            var WZ = L0.current;
            if (TJ) WZ = wB(WZ, B7);
            else WZ = x5(WZ);
            return a1(Q, WZ), LZ;
          }
          return iQ(Q), null;
        }
        case uJ:
          break;
        case QJ:
        case aJ: {
          hU(Q);
          var P1 = Q.memoizedState,
            d5 = P1 !== null;
          if (J !== null) {
            var N7 = J.memoizedState,
              i0 = N7 !== null;
            if (i0 !== d5 && !eQ) Q.flags |= H4;
          }
          if (!d5 || (Q.mode & $J) === r) iQ(Q);
          else if (fZ(c0, hZ)) {
            if ((iQ(Q), Q.subtreeFlags & (qQ | RJ))) Q.flags |= H4;
          }
          return null;
        }
        case e:
          return null;
        case MZ:
          return null;
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function _$(J, Q, Z) {
      switch ((lG(Q), Q.tag)) {
        case a: {
          var X = Q.type;
          if (f0(X)) T8(Q);
          var G = Q.flags;
          if (G & jZ) {
            if (((Q.flags = (G & ~jZ) | CJ), (Q.mode & kJ) !== r)) QU(Q);
            return Q;
          }
          return null;
        }
        case m: {
          var B = Q.stateNode;
          I5(Q), dG(Q), SB();
          var U = Q.flags;
          if ((U & jZ) !== o && (U & CJ) === o)
            return (Q.flags = (U & ~jZ) | CJ), Q;
          return null;
        }
        case c:
          return IB(Q), null;
        case AJ: {
          w5(Q);
          var Y = Q.memoizedState;
          if (Y !== null && Y.dehydrated !== null) {
            if (Q.alternate === null)
              throw new Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.",
              );
            E5();
          }
          var K = Q.flags;
          if (K & jZ) {
            if (((Q.flags = (K & ~jZ) | CJ), (Q.mode & kJ) !== r)) QU(Q);
            return Q;
          }
          return null;
        }
        case jQ:
          return w5(Q), null;
        case OJ:
          return I5(Q), null;
        case wJ:
          var H = Q.type._context;
          return eG(H, Q), null;
        case QJ:
        case aJ:
          return hU(Q), null;
        case e:
          return null;
        default:
          return null;
      }
    }
    function nH(J, Q, Z) {
      switch ((lG(Q), Q.tag)) {
        case a: {
          var X = Q.type.childContextTypes;
          if (X !== null && X !== void 0) T8(Q);
          break;
        }
        case m: {
          var G = Q.stateNode;
          I5(Q), dG(Q), SB();
          break;
        }
        case c: {
          IB(Q);
          break;
        }
        case OJ:
          I5(Q);
          break;
        case AJ:
          w5(Q);
          break;
        case jQ:
          w5(Q);
          break;
        case wJ:
          var B = Q.type._context;
          eG(B, Q);
          break;
        case QJ:
        case aJ:
          hU(Q);
          break;
      }
    }
    var tH = null;
    tH = new Set();
    var C9 = !1,
      aQ = !1,
      S$ = typeof WeakSet === "function" ? WeakSet : Set,
      f = null,
      b5 = null,
      k5 = null;
    function C$(J) {
      AX(null, function () {
        throw J;
      }),
        EX();
    }
    var v$ = function (J, Q) {
      if (
        ((Q.props = J.memoizedProps), (Q.state = J.memoizedState), J.mode & kJ)
      )
        try {
          y0(), Q.componentWillUnmount();
        } finally {
          m0(J);
        }
      else Q.componentWillUnmount();
    };
    function eH(J, Q) {
      try {
        r1(RQ, J);
      } catch (Z) {
        cJ(J, Q, Z);
      }
    }
    function AU(J, Q, Z) {
      try {
        v$(J, Z);
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    function N$(J, Q, Z) {
      try {
        Z.componentDidMount();
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    function Jz(J, Q) {
      try {
        Xz(J);
      } catch (Z) {
        cJ(J, Q, Z);
      }
    }
    function g5(J, Q) {
      var Z = J.ref;
      if (Z !== null)
        if (typeof Z === "function") {
          var X;
          try {
            if (pZ && M0 && J.mode & kJ)
              try {
                y0(), (X = Z(null));
              } finally {
                m0(J);
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
    function v9(J, Q, Z) {
      try {
        Z();
      } catch (X) {
        cJ(J, Q, X);
      }
    }
    var Qz = null,
      Zz = !1;
    function b$(J, Q) {
      (Qz = aO(J.containerInfo)), (f = Q), k$();
      var Z = Zz;
      return (Zz = !1), (Qz = null), Z;
    }
    function k$() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((J.subtreeFlags & xX) !== o && Q !== null) (Q.return = J), (f = Q);
        else g$();
      }
    }
    function g$() {
      while (f !== null) {
        var J = f;
        eJ(J);
        try {
          T$(J);
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
    function T$(J) {
      var { alternate: Q, flags: Z } = J;
      if ((Z & W4) !== o) {
        switch ((eJ(J), J.tag)) {
          case KJ:
          case JJ:
          case _J:
            break;
          case a: {
            if (Q !== null) {
              var { memoizedProps: X, memoizedState: G } = Q,
                B = J.stateNode;
              if (J.type === J.elementType && !v4) {
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
                J.elementType === J.type ? X : R0(J.type, X),
                G,
              );
              {
                var Y = tH;
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
          case m: {
            {
              var K = J.stateNode;
              jD(K.containerInfo);
            }
            break;
          }
          case c:
          case xJ:
          case OJ:
          case GQ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
        vQ();
      }
    }
    function x0(J, Q, Z) {
      var X = Q.updateQueue,
        G = X !== null ? X.lastEffect : null;
      if (G !== null) {
        var B = G.next,
          U = B;
        do {
          if ((U.tag & J) === J) {
            var Y = U.destroy;
            if (((U.destroy = void 0), Y !== void 0)) {
              if ((J & cQ) !== CZ) eM(Q);
              else if ((J & RQ) !== CZ) mY(Q);
              if ((J & u0) !== CZ) S7(!0);
              if ((v9(Q, Z, Y), (J & u0) !== CZ)) S7(!1);
              if ((J & cQ) !== CZ) JV();
              else if ((J & RQ) !== CZ) yY();
            }
          }
          U = U.next;
        } while (U !== B);
      }
    }
    function r1(J, Q) {
      var Z = Q.updateQueue,
        X = Z !== null ? Z.lastEffect : null;
      if (X !== null) {
        var G = X.next,
          B = G;
        do {
          if ((B.tag & J) === J) {
            if ((J & cQ) !== CZ) nM(Q);
            else if ((J & RQ) !== CZ) QV(Q);
            var U = B.create;
            if ((J & u0) !== CZ) S7(!0);
            if (((B.destroy = U()), (J & u0) !== CZ)) S7(!1);
            if ((J & cQ) !== CZ) tM();
            else if ((J & RQ) !== CZ) ZV();
            {
              var Y = B.destroy;
              if (Y !== void 0 && typeof Y !== "function") {
                var K = void 0;
                if ((B.tag & RQ) !== o) K = "useLayoutEffect";
                else if ((B.tag & u0) !== o) K = "useInsertionEffect";
                else K = "useEffect";
                var H = void 0;
                if (Y === null)
                  H =
                    " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                else if (typeof Y.then === "function")
                  H =
                    "\n\nIt looks like you wrote " +
                    K +
                    "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" +
                    K +
                    "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                else H = " You returned: " + Y;
                M(
                  "%s must not return anything besides a function, which is used for clean-up.%swhich is used for clean-up.%s",
                  K,
                  H,
                );
              }
            }
          }
          B = B.next;
        } while (B !== G);
      }
    }
    function h$(J, Q) {
      if ((Q.flags & RJ) !== o)
        switch (Q.tag) {
          case rJ: {
            var Z = Q.stateNode.passiveEffectDuration,
              X = Q.memoizedProps,
              G = X.id,
              B = X.onPostCommit,
              U = LH(),
              Y = Q.alternate === null ? "mount" : "update";
            if (RH()) Y = "nested-update";
            if (typeof B === "function") B(G, Y, Z, U);
            var K = Q.return;
            J: while (K !== null) {
              switch (K.tag) {
                case m:
                  var H = K.stateNode;
                  H.passiveEffectDuration += Z;
                  break J;
                case rJ:
                  var z = K.stateNode;
                  z.passiveEffectDuration += Z;
                  break J;
              }
              K = K.return;
            }
            break;
          }
        }
    }
    function f$(J, Q, Z, X) {
      if ((Z.flags & V6) !== o)
        switch (Z.tag) {
          case KJ:
          case JJ:
          case _J: {
            if (!aQ)
              if (Z.mode & kJ)
                try {
                  y0(), r1(RQ | EQ, Z);
                } finally {
                  m0(Z);
                }
              else r1(RQ | EQ, Z);
            break;
          }
          case a: {
            var G = Z.stateNode;
            if (Z.flags & RJ) {
              if (!aQ)
                if (Q === null) {
                  if (Z.type === Z.elementType && !v4) {
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
                      y0(), G.componentDidMount();
                    } finally {
                      m0(Z);
                    }
                  else G.componentDidMount();
                } else {
                  var B =
                      Z.elementType === Z.type
                        ? Q.memoizedProps
                        : R0(Z.type, Q.memoizedProps),
                    U = Q.memoizedState;
                  if (Z.type === Z.elementType && !v4) {
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
                      y0(),
                        G.componentDidUpdate(
                          B,
                          U,
                          G.__reactInternalSnapshotBeforeUpdate,
                        );
                    } finally {
                      m0(Z);
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
              if (Z.type === Z.elementType && !v4) {
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
              TW(Z, Y, G);
            }
            break;
          }
          case m: {
            var K = Z.updateQueue;
            if (K !== null) {
              var H = null;
              if (Z.child !== null)
                switch (Z.child.tag) {
                  case c:
                    H = SG(Z.child.stateNode);
                    break;
                  case a:
                    H = Z.child.stateNode;
                    break;
                }
              TW(Z, K, H);
            }
            break;
          }
          case c: {
            var z = Z.stateNode;
            if (Q === null && Z.flags & RJ) {
              var { type: D, memoizedProps: O } = Z;
              GD(z, D, O);
            }
            break;
          }
          case xJ:
            break;
          case OJ:
            break;
          case rJ: {
            {
              var E = Z.memoizedProps,
                P = E.onCommit,
                R = E.onRender,
                g = Z.stateNode.effectDuration,
                l = LH(),
                d = Q === null ? "mount" : "update";
              if (RH()) d = "nested-update";
              if (typeof R === "function")
                R(
                  Z.memoizedProps.id,
                  d,
                  Z.actualDuration,
                  Z.treeBaseDuration,
                  Z.actualStartTime,
                  l,
                );
              {
                if (typeof P === "function") P(Z.memoizedProps.id, d, g, l);
                dj(Z);
                var VJ = Z.return;
                J: while (VJ !== null) {
                  switch (VJ.tag) {
                    case m:
                      var qJ = VJ.stateNode;
                      qJ.effectDuration += g;
                      break J;
                    case rJ:
                      var $ = VJ.stateNode;
                      $.effectDuration += g;
                      break J;
                  }
                  VJ = VJ.return;
                }
              }
            }
            break;
          }
          case AJ: {
            i$(J, Z);
            break;
          }
          case jQ:
          case GQ:
          case uJ:
          case QJ:
          case aJ:
          case MZ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
      if (!aQ) {
        if (Z.flags & b1) Xz(Z);
      }
    }
    function u$(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          if (J.mode & kJ)
            try {
              y0(), eH(J, J.return);
            } finally {
              m0(J);
            }
          else eH(J, J.return);
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentDidMount === "function") N$(J, J.return, Q);
          Jz(J, J.return);
          break;
        }
        case c: {
          Jz(J, J.return);
          break;
        }
      }
    }
    function d$(J, Q) {
      var Z = null;
      {
        var X = J;
        while (!0) {
          if (X.tag === c) {
            if (Z === null) {
              Z = X;
              try {
                var G = X.stateNode;
                if (Q) qD(G);
                else DD(X.stateNode, X.memoizedProps);
              } catch (U) {
                cJ(J, J.return, U);
              }
            }
          } else if (X.tag === xJ) {
            if (Z === null)
              try {
                var B = X.stateNode;
                if (Q) OD(B);
                else $D(B, X.memoizedProps);
              } catch (U) {
                cJ(J, J.return, U);
              }
          } else if (
            (X.tag === QJ || X.tag === aJ) &&
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
    function Xz(J) {
      var Q = J.ref;
      if (Q !== null) {
        var Z = J.stateNode,
          X;
        switch (J.tag) {
          case c:
            X = SG(Z);
            break;
          default:
            X = Z;
        }
        if (typeof Q === "function") {
          var G;
          if (J.mode & kJ)
            try {
              y0(), (G = Q(X));
            } finally {
              m0(J);
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
    function s$(J) {
      var Q = J.alternate;
      if (Q !== null) Q.return = null;
      J.return = null;
    }
    function Gz(J) {
      var Q = J.alternate;
      if (Q !== null) (J.alternate = null), Gz(Q);
      {
        if (
          ((J.child = null),
          (J.deletions = null),
          (J.sibling = null),
          J.tag === c)
        ) {
          var Z = J.stateNode;
          if (Z !== null) oD(Z);
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
    function m$(J) {
      var Q = J.return;
      while (Q !== null) {
        if (Bz(Q)) return Q;
        Q = Q.return;
      }
      throw new Error(
        "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function Bz(J) {
      return J.tag === c || J.tag === m || J.tag === OJ;
    }
    function Uz(J) {
      var Q = J;
      J: while (!0) {
        while (Q.sibling === null) {
          if (Q.return === null || Bz(Q.return)) return null;
          Q = Q.return;
        }
        (Q.sibling.return = Q.return), (Q = Q.sibling);
        while (Q.tag !== c && Q.tag !== xJ && Q.tag !== SQ) {
          if (Q.flags & qQ) continue J;
          if (Q.child === null || Q.tag === OJ) continue J;
          else (Q.child.return = Q), (Q = Q.child);
        }
        if (!(Q.flags & qQ)) return Q.stateNode;
      }
    }
    function y$(J) {
      var Q = m$(J);
      switch (Q.tag) {
        case c: {
          var Z = Q.stateNode;
          if (Q.flags & z6) BW(Z), (Q.flags &= ~z6);
          var X = Uz(J);
          RU(J, X, Z);
          break;
        }
        case m:
        case OJ: {
          var G = Q.stateNode.containerInfo,
            B = Uz(J);
          EU(J, B, G);
          break;
        }
        default:
          throw new Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
          );
      }
    }
    function EU(J, Q, Z) {
      var X = J.tag,
        G = X === c || X === xJ;
      if (G) {
        var B = J.stateNode;
        if (Q) HD(Z, B, Q);
        else KD(Z, B);
      } else if (X === OJ);
      else {
        var U = J.child;
        if (U !== null) {
          EU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) EU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    function RU(J, Q, Z) {
      var X = J.tag,
        G = X === c || X === xJ;
      if (G) {
        var B = J.stateNode;
        if (Q) WD(Z, B, Q);
        else YD(Z, B);
      } else if (X === OJ);
      else {
        var U = J.child;
        if (U !== null) {
          RU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) RU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    var pQ = null,
      w0 = !1;
    function l$(J, Q, Z) {
      {
        var X = Q;
        J: while (X !== null) {
          switch (X.tag) {
            case c: {
              (pQ = X.stateNode), (w0 = !1);
              break J;
            }
            case m: {
              (pQ = X.stateNode.containerInfo), (w0 = !0);
              break J;
            }
            case OJ: {
              (pQ = X.stateNode.containerInfo), (w0 = !0);
              break J;
            }
          }
          X = X.return;
        }
        if (pQ === null)
          throw new Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
          );
        Yz(J, Q, Z), (pQ = null), (w0 = !1);
      }
      s$(Z);
    }
    function n1(J, Q, Z) {
      var X = Z.child;
      while (X !== null) Yz(J, Q, X), (X = X.sibling);
    }
    function Yz(J, Q, Z) {
      switch ((aM(Z), Z.tag)) {
        case c:
          if (!aQ) g5(Z, Q);
        case xJ: {
          {
            var X = pQ,
              G = w0;
            if (((pQ = null), n1(J, Q, Z), (pQ = X), (w0 = G), pQ !== null))
              if (w0) MD(pQ, Z.stateNode);
              else zD(pQ, Z.stateNode);
          }
          return;
        }
        case SQ: {
          if (pQ !== null)
            if (w0) VD(pQ, Z.stateNode);
            else bG(pQ, Z.stateNode);
          return;
        }
        case OJ: {
          {
            var B = pQ,
              U = w0;
            (pQ = Z.stateNode.containerInfo),
              (w0 = !0),
              n1(J, Q, Z),
              (pQ = B),
              (w0 = U);
          }
          return;
        }
        case KJ:
        case JJ:
        case HQ:
        case _J: {
          if (!aQ) {
            var Y = Z.updateQueue;
            if (Y !== null) {
              var K = Y.lastEffect;
              if (K !== null) {
                var H = K.next,
                  z = H;
                do {
                  var D = z,
                    O = D.destroy,
                    E = D.tag;
                  if (O !== void 0) {
                    if ((E & u0) !== CZ) v9(Z, Q, O);
                    else if ((E & RQ) !== CZ) {
                      if ((mY(Z), Z.mode & kJ)) y0(), v9(Z, Q, O), m0(Z);
                      else v9(Z, Q, O);
                      yY();
                    }
                  }
                  z = z.next;
                } while (z !== H);
              }
            }
          }
          n1(J, Q, Z);
          return;
        }
        case a: {
          if (!aQ) {
            g5(Z, Q);
            var P = Z.stateNode;
            if (typeof P.componentWillUnmount === "function") AU(Z, Q, P);
          }
          n1(J, Q, Z);
          return;
        }
        case uJ: {
          n1(J, Q, Z);
          return;
        }
        case QJ: {
          if (Z.mode & $J) {
            var R = aQ;
            (aQ = R || Z.memoizedState !== null), n1(J, Q, Z), (aQ = R);
          } else n1(J, Q, Z);
          break;
        }
        default: {
          n1(J, Q, Z);
          return;
        }
      }
    }
    function c$(J) {
      var Q = J.memoizedState;
    }
    function i$(J, Q) {
      var Z = Q.memoizedState;
      if (Z === null) {
        var X = Q.alternate;
        if (X !== null) {
          var G = X.memoizedState;
          if (G !== null) {
            var B = G.dehydrated;
            if (B !== null) ND(B);
          }
        }
      }
    }
    function Kz(J) {
      var Q = J.updateQueue;
      if (Q !== null) {
        J.updateQueue = null;
        var Z = J.stateNode;
        if (Z === null) Z = J.stateNode = new S$();
        Q.forEach(function (X) {
          var G = aj.bind(null, J, X);
          if (!Z.has(X)) {
            if ((Z.add(X), $0))
              if (b5 !== null && k5 !== null) _7(k5, b5);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React.",
                );
            X.then(G, G);
          }
        });
      }
    }
    function a$(J, Q, Z) {
      (b5 = Z), (k5 = J), eJ(Q), Wz(Q, J), eJ(Q), (b5 = null), (k5 = null);
    }
    function _0(J, Q, Z) {
      var X = Q.deletions;
      if (X !== null)
        for (var G = 0; G < X.length; G++) {
          var B = X[G];
          try {
            l$(J, Q, B);
          } catch (K) {
            cJ(B, Q, K);
          }
        }
      var U = ZX();
      if (Q.subtreeFlags & wX) {
        var Y = Q.child;
        while (Y !== null) eJ(Y), Wz(Y, J), (Y = Y.sibling);
      }
      eJ(U);
    }
    function Wz(J, Q, Z) {
      var { alternate: X, flags: G } = J;
      switch (J.tag) {
        case KJ:
        case JJ:
        case HQ:
        case _J: {
          if ((_0(Q, J), l0(J), G & RJ)) {
            try {
              x0(u0 | EQ, J, J.return), r1(u0 | EQ, J);
            } catch (t) {
              cJ(J, J.return, t);
            }
            if (J.mode & kJ) {
              try {
                y0(), x0(RQ | EQ, J, J.return);
              } catch (t) {
                cJ(J, J.return, t);
              }
              m0(J);
            } else
              try {
                x0(RQ | EQ, J, J.return);
              } catch (t) {
                cJ(J, J.return, t);
              }
          }
          return;
        }
        case a: {
          if ((_0(Q, J), l0(J), G & b1)) {
            if (X !== null) g5(X, X.return);
          }
          return;
        }
        case c: {
          if ((_0(Q, J), l0(J), G & b1)) {
            if (X !== null) g5(X, X.return);
          }
          {
            if (J.flags & z6) {
              var B = J.stateNode;
              try {
                BW(B);
              } catch (t) {
                cJ(J, J.return, t);
              }
            }
            if (G & RJ) {
              var U = J.stateNode;
              if (U != null) {
                var Y = J.memoizedProps,
                  K = X !== null ? X.memoizedProps : Y,
                  H = J.type,
                  z = J.updateQueue;
                if (((J.updateQueue = null), z !== null))
                  try {
                    BD(U, z, H, K, Y, J);
                  } catch (t) {
                    cJ(J, J.return, t);
                  }
              }
            }
          }
          return;
        }
        case xJ: {
          if ((_0(Q, J), l0(J), G & RJ)) {
            if (J.stateNode === null)
              throw new Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
              );
            var { stateNode: D, memoizedProps: O } = J,
              E = X !== null ? X.memoizedProps : O;
            try {
              UD(D, E, O);
            } catch (t) {
              cJ(J, J.return, t);
            }
          }
          return;
        }
        case m: {
          if ((_0(Q, J), l0(J), G & RJ)) {
            if (X !== null) {
              var P = X.memoizedState;
              if (P.isDehydrated)
                try {
                  vD(Q.containerInfo);
                } catch (t) {
                  cJ(J, J.return, t);
                }
            }
          }
          return;
        }
        case OJ: {
          _0(Q, J), l0(J);
          return;
        }
        case AJ: {
          _0(Q, J), l0(J);
          var R = J.child;
          if (R.flags & H4) {
            var { stateNode: g, memoizedState: l } = R,
              d = l !== null;
            if (((g.isHidden = d), d)) {
              var VJ =
                R.alternate !== null && R.alternate.memoizedState !== null;
              if (!VJ) Nj();
            }
          }
          if (G & RJ) {
            try {
              c$(J);
            } catch (t) {
              cJ(J, J.return, t);
            }
            Kz(J);
          }
          return;
        }
        case QJ: {
          var qJ = X !== null && X.memoizedState !== null;
          if (J.mode & $J) {
            var $ = aQ;
            (aQ = $ || qJ), _0(Q, J), (aQ = $);
          } else _0(Q, J);
          if ((l0(J), G & H4)) {
            var { stateNode: F, memoizedState: j } = J,
              _ = j !== null,
              h = J;
            if (((F.isHidden = _), _)) {
              if (!qJ) {
                if ((h.mode & $J) !== r) {
                  f = h;
                  var b = h.child;
                  while (b !== null) (f = b), o$(b), (b = b.sibling);
                }
              }
            }
            d$(h, _);
          }
          return;
        }
        case jQ: {
          if ((_0(Q, J), l0(J), G & RJ)) Kz(J);
          return;
        }
        case uJ:
          return;
        default: {
          _0(Q, J), l0(J);
          return;
        }
      }
    }
    function l0(J) {
      var Q = J.flags;
      if (Q & qQ) {
        try {
          y$(J);
        } catch (Z) {
          cJ(J, J.return, Z);
        }
        J.flags &= ~qQ;
      }
      if (Q & Z1) J.flags &= ~Z1;
    }
    function p$(J, Q, Z) {
      (b5 = Z), (k5 = Q), (f = J), Hz(J, Q, Z), (b5 = null), (k5 = null);
    }
    function Hz(J, Q, Z) {
      var X = (J.mode & $J) !== r;
      while (f !== null) {
        var G = f,
          B = G.child;
        if (G.tag === QJ && X) {
          var U = G.memoizedState !== null,
            Y = U || C9;
          if (Y) {
            LU(J, Q, Z);
            continue;
          } else {
            var K = G.alternate,
              H = K !== null && K.memoizedState !== null,
              z = H || aQ,
              D = C9,
              O = aQ;
            if (((C9 = Y), (aQ = z), aQ && !O)) (f = G), r$(G);
            var E = B;
            while (E !== null) (f = E), Hz(E, Q, Z), (E = E.sibling);
            (f = G), (C9 = D), (aQ = O), LU(J, Q, Z);
            continue;
          }
        }
        if ((G.subtreeFlags & V6) !== o && B !== null) (B.return = G), (f = B);
        else LU(J, Q, Z);
      }
    }
    function LU(J, Q, Z) {
      while (f !== null) {
        var X = f;
        if ((X.flags & V6) !== o) {
          var G = X.alternate;
          eJ(X);
          try {
            f$(Q, G, X, Z);
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
    function o$(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        switch (Q.tag) {
          case KJ:
          case JJ:
          case HQ:
          case _J: {
            if (Q.mode & kJ)
              try {
                y0(), x0(RQ, Q, Q.return);
              } finally {
                m0(Q);
              }
            else x0(RQ, Q, Q.return);
            break;
          }
          case a: {
            g5(Q, Q.return);
            var X = Q.stateNode;
            if (typeof X.componentWillUnmount === "function")
              AU(Q, Q.return, X);
            break;
          }
          case c: {
            g5(Q, Q.return);
            break;
          }
          case QJ: {
            var G = Q.memoizedState !== null;
            if (G) {
              zz(J);
              continue;
            }
            break;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else zz(J);
      }
    }
    function zz(J) {
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
    function r$(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        if (Q.tag === QJ) {
          var X = Q.memoizedState !== null;
          if (X) {
            Mz(J);
            continue;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else Mz(J);
      }
    }
    function Mz(J) {
      while (f !== null) {
        var Q = f;
        eJ(Q);
        try {
          u$(Q);
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
    function n$(J, Q, Z, X) {
      (f = Q), t$(Q, J, Z, X);
    }
    function t$(J, Q, Z, X) {
      while (f !== null) {
        var G = f,
          B = G.child;
        if ((G.subtreeFlags & Z5) !== o && B !== null) (B.return = G), (f = B);
        else e$(J, Q, Z, X);
      }
    }
    function e$(J, Q, Z, X) {
      while (f !== null) {
        var G = f;
        if ((G.flags & D0) !== o) {
          eJ(G);
          try {
            Jj(Q, G, Z, X);
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
    function Jj(J, Q, Z, X) {
      switch (Q.tag) {
        case KJ:
        case JJ:
        case _J: {
          if (Q.mode & kJ) {
            JU();
            try {
              r1(cQ | EQ, Q);
            } finally {
              eB(Q);
            }
          } else r1(cQ | EQ, Q);
          break;
        }
      }
    }
    function Qj(J) {
      (f = J), Zj();
    }
    function Zj() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((f.flags & K4) !== o) {
          var Z = J.deletions;
          if (Z !== null) {
            for (var X = 0; X < Z.length; X++) {
              var G = Z[X];
              (f = G), Bj(G, J);
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
        if ((J.subtreeFlags & Z5) !== o && Q !== null) (Q.return = J), (f = Q);
        else Xj();
      }
    }
    function Xj() {
      while (f !== null) {
        var J = f;
        if ((J.flags & D0) !== o) eJ(J), Gj(J), vQ();
        var Q = J.sibling;
        if (Q !== null) {
          (Q.return = J.return), (f = Q);
          return;
        }
        f = J.return;
      }
    }
    function Gj(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          if (J.mode & kJ) JU(), x0(cQ | EQ, J, J.return), eB(J);
          else x0(cQ | EQ, J, J.return);
          break;
        }
      }
    }
    function Bj(J, Q) {
      while (f !== null) {
        var Z = f;
        eJ(Z), Yj(Z, Q), vQ();
        var X = Z.child;
        if (X !== null) (X.return = Z), (f = X);
        else Uj(J);
      }
    }
    function Uj(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.sibling,
          X = Q.return;
        if ((Gz(Q), Q === J)) {
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
    function Yj(J, Q) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          if (J.mode & kJ) JU(), x0(cQ, J, Q), eB(J);
          else x0(cQ, J, Q);
          break;
        }
      }
    }
    function Kj(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          try {
            r1(RQ | EQ, J);
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
    function Wj(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          try {
            r1(cQ | EQ, J);
          } catch (Q) {
            cJ(J, J.return, Q);
          }
          break;
        }
      }
    }
    function Hj(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J: {
          try {
            x0(RQ | EQ, J, J.return);
          } catch (Z) {
            cJ(J, J.return, Z);
          }
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentWillUnmount === "function") AU(J, J.return, Q);
          break;
        }
      }
    }
    function zj(J) {
      switch (J.tag) {
        case KJ:
        case JJ:
        case _J:
          try {
            x0(cQ | EQ, J, J.return);
          } catch (Q) {
            cJ(J, J.return, Q);
          }
      }
    }
    var Mj = 0,
      Vj = 1,
      qj = 2,
      Oj = 3,
      Dj = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var $7 = Symbol.for;
      (Mj = $7("selector.component")),
        (Vj = $7("selector.has_pseudo_class")),
        (qj = $7("selector.role")),
        (Oj = $7("selector.test_id")),
        (Dj = $7("selector.text"));
    }
    var $j = [];
    function jj() {
      $j.forEach(function (J) {
        return J();
      });
    }
    var Pj = LJ.ReactCurrentActQueue;
    function Aj(J) {
      {
        var Q =
            typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
              ? IS_REACT_ACT_ENVIRONMENT
              : void 0,
          Z = typeof jest !== "undefined";
        return Z && Q !== !1;
      }
    }
    function Vz() {
      {
        var J =
          typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0;
        if (!J && Pj.current !== null)
          M(
            "The current testing environment is not configured to support act(...)",
          );
        return J;
      }
    }
    var Ej = Math.ceil,
      FU = LJ.ReactCurrentDispatcher,
      IU = LJ.ReactCurrentOwner,
      oQ = LJ.ReactCurrentBatchConfig,
      S0 = LJ.ReactCurrentActQueue,
      IQ = 0,
      qz = 1,
      rQ = 2,
      Y0 = 4,
      O1 = 0,
      j7 = 1,
      N4 = 2,
      N9 = 3,
      P7 = 4,
      Oz = 5,
      xU = 6,
      jJ = IQ,
      AZ = null,
      QQ = null,
      xQ = x,
      c0 = x,
      wU = s1(x),
      wQ = O1,
      A7 = null,
      _U = x,
      b9 = x,
      E7 = x,
      k9 = x,
      R7 = null,
      vZ = null,
      SU = 0,
      Dz = 500,
      $z = Infinity,
      Rj = 500,
      D1 = null;
    function L7() {
      $z = NQ() + Rj;
    }
    function jz() {
      return $z;
    }
    var g9 = !1,
      CU = null,
      T5 = null,
      b4 = !1,
      t1 = null,
      F7 = x,
      vU = [],
      NU = null,
      Lj = 50,
      I7 = 0,
      bU = null,
      kU = !1,
      T9 = !1,
      Fj = 50,
      h5 = 0,
      h9 = null,
      x7 = oJ,
      f9 = x,
      Pz = !1;
    function u9() {
      return AZ;
    }
    function EZ() {
      if ((jJ & (rQ | Y0)) !== IQ) return NQ();
      if (x7 !== oJ) return x7;
      return (x7 = NQ()), x7;
    }
    function e1(J) {
      var Q = J.mode;
      if ((Q & $J) === r) return ZJ;
      else if ((jJ & rQ) !== IQ && xQ !== x) return A6(xQ);
      var Z = D2() !== O2;
      if (Z) {
        if (oQ.transition !== null) {
          var X = oQ.transition;
          if (!X._updatedFibers) X._updatedFibers = new Set();
          X._updatedFibers.add(J);
        }
        if (f9 === kQ) f9 = nY();
        return f9;
      }
      var G = j0();
      if (G !== kQ) return G;
      var B = JD();
      return B;
    }
    function Ij(J) {
      var Q = J.mode;
      if ((Q & $J) === r) return ZJ;
      return FV();
    }
    function _Q(J, Q, Z, X) {
      if ((oj(), Pz)) M("useInsertionEffect must not schedule updates.");
      if (kU) T9 = !0;
      if ((E6(J, Z, X), (jJ & rQ) !== x && J === AZ)) tj(Q);
      else {
        if ($0) JK(J, Q, Z);
        if ((ej(Q), J === AZ)) {
          if ((jJ & rQ) === IQ) E7 = zJ(E7, Z);
          if (wQ === P7) J4(J, xQ);
        }
        if (
          (NZ(J, X),
          Z === ZJ && jJ === IQ && (Q.mode & $J) === r && !S0.isBatchingLegacy)
        )
          L7(), $W();
      }
    }
    function xj(J, Q, Z) {
      var X = J.current;
      (X.lanes = Q), E6(J, Q, Z), NZ(J, Z);
    }
    function wj(J) {
      return (jJ & rQ) !== IQ;
    }
    function NZ(J, Q) {
      var Z = J.callbackNode;
      jV(J, Q);
      var X = X8(J, J === AZ ? xQ : x);
      if (X === x) {
        if (Z !== null) gz(Z);
        (J.callbackNode = null), (J.callbackPriority = kQ);
        return;
      }
      var G = $4(X),
        B = J.callbackPriority;
      if (B === G && !(S0.current !== null && Z !== sU)) {
        if (Z == null && B !== ZJ)
          M(
            "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.",
          );
        return;
      }
      if (Z != null) gz(Z);
      var U;
      if (G === ZJ) {
        if (J.tag === m1) {
          if (S0.isBatchingLegacy !== null) S0.didScheduleLegacyUpdate = !0;
          tD(Rz.bind(null, J));
        } else DW(Rz.bind(null, J));
        if (S0.current !== null) S0.current.push(y1);
        else
          ZD(function () {
            if ((jJ & (rQ | Y0)) === IQ) y1();
          });
        U = null;
      } else {
        var Y;
        switch (XK(X)) {
          case uZ:
            Y = e7;
            break;
          case U1:
            Y = _X;
            break;
          case Y1:
            Y = V4;
            break;
          case Y8:
            Y = SX;
            break;
          default:
            Y = V4;
            break;
        }
        U = mU(Y, Az.bind(null, J));
      }
      (J.callbackPriority = G), (J.callbackNode = U);
    }
    function Az(J, Q) {
      if ((l2(), (x7 = oJ), (f9 = x), (jJ & (rQ | Y0)) !== IQ))
        throw new Error("Should not already be working.");
      var Z = J.callbackNode,
        X = j1();
      if (X) {
        if (J.callbackNode !== Z) return null;
      }
      var G = X8(J, J === AZ ? xQ : x);
      if (G === x) return null;
      var B = !G8(J, G) && !LV(J, G) && !Q,
        U = B ? hj(J, G) : s9(J, G);
      if (U !== O1) {
        if (U === N4) {
          var Y = nX(J);
          if (Y !== x) (G = Y), (U = gU(J, Y));
        }
        if (U === j7) {
          var K = A7;
          throw (k4(J, x), J4(J, G), NZ(J, NQ()), K);
        }
        if (U === xU) J4(J, G);
        else {
          var H = !G8(J, G),
            z = J.current.alternate;
          if (H && !Sj(z)) {
            if (((U = s9(J, G)), U === N4)) {
              var D = nX(J);
              if (D !== x) (G = D), (U = gU(J, D));
            }
            if (U === j7) {
              var O = A7;
              throw (k4(J, x), J4(J, G), NZ(J, NQ()), O);
            }
          }
          (J.finishedWork = z), (J.finishedLanes = G), _j(J, U, G);
        }
      }
      if ((NZ(J, NQ()), J.callbackNode === Z)) return Az.bind(null, J);
      return null;
    }
    function gU(J, Q) {
      var Z = R7;
      if (K8(J)) {
        var X = k4(J, Q);
        (X.flags |= Q1), cD(J.containerInfo);
      }
      var G = s9(J, Q);
      if (G !== N4) {
        var B = vZ;
        if (((vZ = Z), B !== null)) Ez(B);
      }
      return G;
    }
    function Ez(J) {
      if (vZ === null) vZ = J;
      else vZ.push.apply(vZ, J);
    }
    function _j(J, Q, Z) {
      switch (Q) {
        case O1:
        case j7:
          throw new Error("Root did not complete. This is a bug in React.");
        case N4: {
          g4(J, vZ, D1);
          break;
        }
        case N9: {
          if ((J4(J, Z), oY(Z) && !Tz())) {
            var X = SU + Dz - NQ();
            if (X > 10) {
              var G = X8(J, x);
              if (G !== x) break;
              var B = J.suspendedLanes;
              if (!Y5(B, Z)) {
                var U = EZ();
                eY(J, B);
                break;
              }
              J.timeoutHandle = vG(g4.bind(null, J, vZ, D1), X);
              break;
            }
          }
          g4(J, vZ, D1);
          break;
        }
        case P7: {
          if ((J4(J, Z), RV(Z))) break;
          if (!Tz()) {
            var Y = DV(J, Z),
              K = Y,
              H = NQ() - K,
              z = pj(H) - H;
            if (z > 10) {
              J.timeoutHandle = vG(g4.bind(null, J, vZ, D1), z);
              break;
            }
          }
          g4(J, vZ, D1);
          break;
        }
        case Oz: {
          g4(J, vZ, D1);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Sj(J) {
      var Q = J;
      while (!0) {
        if (Q.flags & n7) {
          var Z = Q.updateQueue;
          if (Z !== null) {
            var X = Z.stores;
            if (X !== null)
              for (var G = 0; G < X.length; G++) {
                var B = X[G],
                  U = B.getSnapshot,
                  Y = B.value;
                try {
                  if (!sZ(U(), Y)) return !1;
                } catch (H) {
                  return !1;
                }
              }
          }
        }
        var K = Q.child;
        if (Q.subtreeFlags & n7 && K !== null) {
          (K.return = Q), (Q = K);
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
    function J4(J, Q) {
      (Q = B8(Q, k9)), (Q = B8(Q, E7)), xV(J, Q);
    }
    function Rz(J) {
      if ((c2(), (jJ & (rQ | Y0)) !== IQ))
        throw new Error("Should not already be working.");
      j1();
      var Q = X8(J, x);
      if (!fZ(Q, ZJ)) return NZ(J, NQ()), null;
      var Z = s9(J, Q);
      if (J.tag !== m1 && Z === N4) {
        var X = nX(J);
        if (X !== x) (Q = X), (Z = gU(J, X));
      }
      if (Z === j7) {
        var G = A7;
        throw (k4(J, x), J4(J, Q), NZ(J, NQ()), G);
      }
      if (Z === xU)
        throw new Error("Root did not complete. This is a bug in React.");
      var B = J.current.alternate;
      return (
        (J.finishedWork = B),
        (J.finishedLanes = Q),
        g4(J, vZ, D1),
        NZ(J, NQ()),
        null
      );
    }
    function Cj(J, Q) {
      if (Q !== x) {
        if ((QG(J, zJ(Q, ZJ)), NZ(J, NQ()), (jJ & (rQ | Y0)) === IQ))
          L7(), y1();
      }
    }
    function TU(J, Q) {
      var Z = jJ;
      jJ |= qz;
      try {
        return J(Q);
      } finally {
        if (((jJ = Z), jJ === IQ && !S0.isBatchingLegacy)) L7(), $W();
      }
    }
    function vj(J, Q, Z, X, G) {
      var B = j0(),
        U = oQ.transition;
      try {
        return (oQ.transition = null), gQ(uZ), J(Q, Z, X, G);
      } finally {
        if ((gQ(B), (oQ.transition = U), jJ === IQ)) L7();
      }
    }
    function $1(J) {
      if (t1 !== null && t1.tag === m1 && (jJ & (rQ | Y0)) === IQ) j1();
      var Q = jJ;
      jJ |= qz;
      var Z = oQ.transition,
        X = j0();
      try {
        if (((oQ.transition = null), gQ(uZ), J)) return J();
        else return;
      } finally {
        if ((gQ(X), (oQ.transition = Z), (jJ = Q), (jJ & (rQ | Y0)) === IQ))
          y1();
      }
    }
    function Lz() {
      return (jJ & (rQ | Y0)) !== IQ;
    }
    function d9(J, Q) {
      UZ(wU, c0, J), (c0 = zJ(c0, Q)), (_U = zJ(_U, Q));
    }
    function hU(J) {
      (c0 = wU.current), BZ(wU, J);
    }
    function k4(J, Q) {
      (J.finishedWork = null), (J.finishedLanes = x);
      var Z = J.timeoutHandle;
      if (Z !== NG) (J.timeoutHandle = NG), QD(Z);
      if (QQ !== null) {
        var X = QQ.return;
        while (X !== null) {
          var G = X.alternate;
          nH(G, X), (X = X.return);
        }
      }
      AZ = J;
      var B = T4(J.current, null);
      return (
        (QQ = B),
        (xQ = c0 = _U = Q),
        (wQ = O1),
        (A7 = null),
        (b9 = x),
        (E7 = x),
        (k9 = x),
        (R7 = null),
        (vZ = null),
        A2(),
        E0.discardPendingWarnings(),
        B
      );
    }
    function Fz(J, Q) {
      do {
        var Z = QQ;
        try {
          if (
            (i8(),
            eW(),
            vQ(),
            (IU.current = null),
            Z === null || Z.return === null)
          ) {
            (wQ = j7), (A7 = Q), (QQ = null);
            return;
          }
          if (pZ && Z.mode & kJ) x9(Z, !0);
          if (v0)
            if (
              (X5(),
              Q !== null &&
                typeof Q === "object" &&
                typeof Q.then === "function")
            ) {
              var X = Q;
              GV(Z, X, xQ);
            } else XV(Z, Q, xQ);
          r2(J, Z.return, Z, Q, xQ), _z(Z);
        } catch (G) {
          if (((Q = G), QQ === Z && Z !== null)) (Z = Z.return), (QQ = Z);
          else Z = QQ;
          continue;
        }
        return;
      } while (!0);
    }
    function Iz() {
      var J = FU.current;
      if (((FU.current = E9), J === null)) return E9;
      else return J;
    }
    function xz(J) {
      FU.current = J;
    }
    function Nj() {
      SU = NQ();
    }
    function w7(J) {
      b9 = zJ(J, b9);
    }
    function bj() {
      if (wQ === O1) wQ = N9;
    }
    function fU() {
      if (wQ === O1 || wQ === N9 || wQ === N4) wQ = P7;
      if (AZ !== null && (tX(b9) || tX(E7))) J4(AZ, xQ);
    }
    function kj(J) {
      if (wQ !== P7) wQ = N4;
      if (R7 === null) R7 = [J];
      else R7.push(J);
    }
    function gj() {
      return wQ === O1;
    }
    function s9(J, Q) {
      var Z = jJ;
      jJ |= rQ;
      var X = Iz();
      if (AZ !== J || xQ !== Q) {
        if ($0) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) _7(J, xQ), G.clear();
          QK(J, Q);
        }
        (D1 = ZK()), k4(J, Q);
      }
      lY(Q);
      do
        try {
          Tj();
          break;
        } catch (B) {
          Fz(J, B);
        }
      while (!0);
      if ((i8(), (jJ = Z), xz(X), QQ !== null))
        throw new Error(
          "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.",
        );
      return cY(), (AZ = null), (xQ = x), wQ;
    }
    function Tj() {
      while (QQ !== null) wz(QQ);
    }
    function hj(J, Q) {
      var Z = jJ;
      jJ |= rQ;
      var X = Iz();
      if (AZ !== J || xQ !== Q) {
        if ($0) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) _7(J, xQ), G.clear();
          QK(J, Q);
        }
        (D1 = ZK()), L7(), k4(J, Q);
      }
      lY(Q);
      do
        try {
          fj();
          break;
        } catch (B) {
          Fz(J, B);
        }
      while (!0);
      if ((i8(), xz(X), (jJ = Z), QQ !== null)) return WV(), O1;
      else return cY(), (AZ = null), (xQ = x), wQ;
    }
    function fj() {
      while (QQ !== null && !hM()) wz(QQ);
    }
    function wz(J) {
      var Q = J.alternate;
      eJ(J);
      var Z;
      if ((J.mode & kJ) !== r) tB(J), (Z = uU(Q, J, c0)), x9(J, !0);
      else Z = uU(Q, J, c0);
      if ((vQ(), (J.memoizedProps = J.pendingProps), Z === null)) _z(J);
      else QQ = Z;
      IU.current = null;
    }
    function _z(J) {
      var Q = J;
      do {
        var { alternate: Z, return: X } = Q;
        if ((Q.flags & M6) === o) {
          eJ(Q);
          var G = void 0;
          if ((Q.mode & kJ) === r) G = rH(Z, Q, c0);
          else tB(Q), (G = rH(Z, Q, c0)), x9(Q, !1);
          if ((vQ(), G !== null)) {
            QQ = G;
            return;
          }
        } else {
          var B = _$(Z, Q);
          if (B !== null) {
            (B.flags &= vM), (QQ = B);
            return;
          }
          if ((Q.mode & kJ) !== r) {
            x9(Q, !1);
            var { actualDuration: U, child: Y } = Q;
            while (Y !== null) (U += Y.actualDuration), (Y = Y.sibling);
            Q.actualDuration = U;
          }
          if (X !== null)
            (X.flags |= M6), (X.subtreeFlags = o), (X.deletions = null);
          else {
            (wQ = xU), (QQ = null);
            return;
          }
        }
        var K = Q.sibling;
        if (K !== null) {
          QQ = K;
          return;
        }
        (Q = X), (QQ = Q);
      } while (Q !== null);
      if (wQ === O1) wQ = Oz;
    }
    function g4(J, Q, Z) {
      var X = j0(),
        G = oQ.transition;
      try {
        (oQ.transition = null), gQ(uZ), uj(J, Q, Z, X);
      } finally {
        (oQ.transition = G), gQ(X);
      }
      return null;
    }
    function uj(J, Q, Z, X) {
      do j1();
      while (t1 !== null);
      if ((rj(), (jJ & (rQ | Y0)) !== IQ))
        throw new Error("Should not already be working.");
      var { finishedWork: G, finishedLanes: B } = J;
      if ((rM(B), G === null)) return sY(), null;
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
      if ((wV(J, U), J === AZ)) (AZ = null), (QQ = null), (xQ = x);
      if ((G.subtreeFlags & Z5) !== o || (G.flags & Z5) !== o) {
        if (!b4)
          (b4 = !0),
            (NU = Z),
            mU(V4, function () {
              return j1(), null;
            });
      }
      var Y = (G.subtreeFlags & (xX | wX | V6 | Z5)) !== o,
        K = (G.flags & (xX | wX | V6 | Z5)) !== o;
      if (Y || K) {
        var H = oQ.transition;
        oQ.transition = null;
        var z = j0();
        gQ(uZ);
        var D = jJ;
        (jJ |= Y0), (IU.current = null);
        var O = b$(J, G);
        FH(),
          a$(J, G, B),
          pO(J.containerInfo),
          (J.current = G),
          BV(B),
          p$(G, J, B),
          UV(),
          fM(),
          (jJ = D),
          gQ(z),
          (oQ.transition = H);
      } else (J.current = G), FH();
      var E = b4;
      if (b4) (b4 = !1), (t1 = J), (F7 = B);
      else (h5 = 0), (h9 = null);
      if (((U = J.pendingLanes), U === x)) T5 = null;
      if (!E) Nz(J.current, !1);
      if ((cM(G.stateNode, X), $0)) J.memoizedUpdaters.clear();
      if ((jj(), NZ(J, NQ()), Q !== null)) {
        var P = J.onRecoverableError;
        for (var R = 0; R < Q.length; R++) {
          var g = Q[R],
            l = g.stack,
            d = g.digest;
          P(g.value, { componentStack: l, digest: d });
        }
      }
      if (g9) {
        g9 = !1;
        var VJ = CU;
        throw ((CU = null), VJ);
      }
      if (fZ(F7, ZJ) && J.tag !== m1) j1();
      if (((U = J.pendingLanes), fZ(U, ZJ)))
        if ((y2(), J === bU)) I7++;
        else (I7 = 0), (bU = J);
      else I7 = 0;
      return y1(), sY(), null;
    }
    function j1() {
      if (t1 !== null) {
        var J = XK(F7),
          Q = vV(Y1, J),
          Z = oQ.transition,
          X = j0();
        try {
          return (oQ.transition = null), gQ(Q), sj();
        } finally {
          gQ(X), (oQ.transition = Z);
        }
      }
      return !1;
    }
    function dj(J) {
      if ((vU.push(J), !b4))
        (b4 = !0),
          mU(V4, function () {
            return j1(), null;
          });
    }
    function sj() {
      if (t1 === null) return !1;
      var J = NU;
      NU = null;
      var Q = t1,
        Z = F7;
      if (((t1 = null), (F7 = x), (jJ & (rQ | Y0)) !== IQ))
        throw new Error(
          "Cannot flush passive effects while already rendering.",
        );
      (kU = !0), (T9 = !1), YV(Z);
      var X = jJ;
      (jJ |= Y0), Qj(Q.current), n$(Q, Q.current, Z, J);
      {
        var G = vU;
        vU = [];
        for (var B = 0; B < G.length; B++) {
          var U = G[B];
          h$(Q, U);
        }
      }
      KV(), Nz(Q.current, !0), (jJ = X), y1();
      {
        if (T9)
          if (Q === h9) h5++;
          else (h5 = 0), (h9 = Q);
        else h5 = 0;
        (kU = !1), (T9 = !1);
      }
      iM(Q);
      {
        var Y = Q.current.stateNode;
        (Y.effectDuration = 0), (Y.passiveEffectDuration = 0);
      }
      return !0;
    }
    function Sz(J) {
      return T5 !== null && T5.has(J);
    }
    function mj(J) {
      if (T5 === null) T5 = new Set([J]);
      else T5.add(J);
    }
    function yj(J) {
      if (!g9) (g9 = !0), (CU = J);
    }
    var lj = yj;
    function Cz(J, Q, Z) {
      var X = C4(Z, Q),
        G = xH(J, X, ZJ),
        B = c1(J, G, ZJ),
        U = EZ();
      if (B !== null) E6(B, ZJ, U), NZ(B, U);
    }
    function cJ(J, Q, Z) {
      if ((C$(Z), S7(!1), J.tag === m)) {
        Cz(J, J, Z);
        return;
      }
      var X = null;
      X = Q;
      while (X !== null) {
        if (X.tag === m) {
          Cz(X, J, Z);
          return;
        } else if (X.tag === a) {
          var { type: G, stateNode: B } = X;
          if (
            typeof G.getDerivedStateFromError === "function" ||
            (typeof B.componentDidCatch === "function" && !Sz(B))
          ) {
            var U = C4(Z, J),
              Y = GU(X, U, ZJ),
              K = c1(X, Y, ZJ),
              H = EZ();
            if (K !== null) E6(K, ZJ, H), NZ(K, H);
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
    function cj(J, Q, Z) {
      var X = J.pingCache;
      if (X !== null) X.delete(Q);
      var G = EZ();
      if ((eY(J, Z), JP(J), AZ === J && Y5(xQ, Z)))
        if (wQ === P7 || (wQ === N9 && oY(xQ) && NQ() - SU < Dz)) k4(J, x);
        else k9 = zJ(k9, Z);
      NZ(J, G);
    }
    function vz(J, Q) {
      if (Q === kQ) Q = Ij(J);
      var Z = EZ(),
        X = SZ(J, Q);
      if (X !== null) E6(X, Q, Z), NZ(X, Z);
    }
    function ij(J) {
      var Q = J.memoizedState,
        Z = kQ;
      if (Q !== null) Z = Q.retryLane;
      vz(J, Z);
    }
    function aj(J, Q) {
      var Z = kQ,
        X;
      switch (J.tag) {
        case AJ:
          X = J.stateNode;
          var G = J.memoizedState;
          if (G !== null) Z = G.retryLane;
          break;
        case jQ:
          X = J.stateNode;
          break;
        default:
          throw new Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React.",
          );
      }
      if (X !== null) X.delete(Q);
      vz(J, Z);
    }
    function pj(J) {
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
                  : Ej(J / 1960) * 1960;
    }
    function oj() {
      if (I7 > Lj)
        throw (
          ((I7 = 0),
          (bU = null),
          new Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
          ))
        );
      if (h5 > Fj)
        (h5 = 0),
          (h9 = null),
          M(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
          );
    }
    function rj() {
      E0.flushLegacyContextWarning(), E0.flushPendingUnsafeLifecycleWarnings();
    }
    function Nz(J, Q) {
      {
        if ((eJ(J), m9(J, X1, Hj), Q)) m9(J, t7, zj);
        if ((m9(J, X1, Kj), Q)) m9(J, t7, Wj);
        vQ();
      }
    }
    function m9(J, Q, Z) {
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
    var y9 = null;
    function bz(J) {
      {
        if ((jJ & rQ) !== IQ) return;
        if (!(J.mode & $J)) return;
        var Q = J.tag;
        if (
          Q !== XQ &&
          Q !== m &&
          Q !== a &&
          Q !== KJ &&
          Q !== JJ &&
          Q !== HQ &&
          Q !== _J
        )
          return;
        var Z = YJ(J) || "ReactComponent";
        if (y9 !== null) {
          if (y9.has(Z)) return;
          y9.add(Z);
        } else y9 = new Set([Z]);
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
    var uU;
    {
      var nj = null;
      uU = function (J, Q, Z) {
        var X = sz(nj, Q);
        try {
          return cH(J, Q, Z);
        } catch (B) {
          if (
            U2() ||
            (B !== null &&
              typeof B === "object" &&
              typeof B.then === "function")
          )
            throw B;
          if ((i8(), eW(), nH(J, Q), sz(Q, X), Q.mode & kJ)) tB(Q);
          if ((AX(null, cH, null, J, Q, Z), wM())) {
            var G = EX();
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
    var kz = !1,
      dU;
    dU = new Set();
    function tj(J) {
      if (C1 && !d2())
        switch (J.tag) {
          case KJ:
          case JJ:
          case _J: {
            var Q = (QQ && YJ(QQ)) || "Unknown",
              Z = Q;
            if (!dU.has(Z)) {
              dU.add(Z);
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
            if (!kz)
              M(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
              ),
                (kz = !0);
            break;
          }
        }
    }
    function _7(J, Q) {
      if ($0) {
        var Z = J.memoizedUpdaters;
        Z.forEach(function (X) {
          JK(J, X, Q);
        });
      }
    }
    var sU = {};
    function mU(J, Q) {
      {
        var Z = S0.current;
        if (Z !== null) return Z.push(Q), sU;
        else return dY(J, Q);
      }
    }
    function gz(J) {
      if (J === sU) return;
      return TM(J);
    }
    function Tz() {
      return S0.current !== null;
    }
    function ej(J) {
      {
        if (J.mode & $J) {
          if (!Vz()) return;
        } else {
          if (!Aj()) return;
          if (jJ !== IQ) return;
          if (J.tag !== KJ && J.tag !== JJ && J.tag !== _J) return;
        }
        if (S0.current === null) {
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
    function JP(J) {
      if (J.tag !== m1 && Vz() && S0.current === null)
        M(
          "A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
        );
    }
    function S7(J) {
      Pz = J;
    }
    var K0 = null,
      f5 = null,
      QP = function (J) {
        K0 = J;
      };
    function u5(J) {
      {
        if (K0 === null) return J;
        var Q = K0(J);
        if (Q === void 0) return J;
        return Q.current;
      }
    }
    function yU(J) {
      return u5(J);
    }
    function lU(J) {
      {
        if (K0 === null) return J;
        var Q = K0(J);
        if (Q === void 0) {
          if (J !== null && J !== void 0 && typeof J.render === "function") {
            var Z = u5(J.render);
            if (J.render !== Z) {
              var X = { $$typeof: WJ, render: Z };
              if (J.displayName !== void 0) X.displayName = J.displayName;
              return X;
            }
          }
          return J;
        }
        return Q.current;
      }
    }
    function hz(J, Q) {
      {
        if (K0 === null) return !1;
        var Z = J.elementType,
          X = Q.type,
          G = !1,
          B = typeof X === "object" && X !== null ? X.$$typeof : null;
        switch (J.tag) {
          case a: {
            if (typeof X === "function") G = !0;
            break;
          }
          case KJ: {
            if (typeof X === "function") G = !0;
            else if (B === DJ) G = !0;
            break;
          }
          case JJ: {
            if (B === WJ) G = !0;
            else if (B === DJ) G = !0;
            break;
          }
          case HQ:
          case _J: {
            if (B === hJ) G = !0;
            else if (B === DJ) G = !0;
            break;
          }
          default:
            return !1;
        }
        if (G) {
          var U = K0(Z);
          if (U !== void 0 && U === K0(X)) return !0;
        }
        return !1;
      }
    }
    function fz(J) {
      {
        if (K0 === null) return;
        if (typeof WeakSet !== "function") return;
        if (f5 === null) f5 = new WeakSet();
        f5.add(J);
      }
    }
    var ZP = function (J, Q) {
        {
          if (K0 === null) return;
          var { staleFamilies: Z, updatedFamilies: X } = Q;
          j1(),
            $1(function () {
              cU(J.current, X, Z);
            });
        }
      },
      XP = function (J, Q) {
        {
          if (J.context !== mZ) return;
          j1(),
            $1(function () {
              C7(Q, J, null, null);
            });
        }
      };
    function cU(J, Q, Z) {
      {
        var { alternate: X, child: G, sibling: B, tag: U, type: Y } = J,
          K = null;
        switch (U) {
          case KJ:
          case _J:
          case a:
            K = Y;
            break;
          case JJ:
            K = Y.render;
            break;
        }
        if (K0 === null)
          throw new Error(
            "Expected resolveFamily to be set during hot reload.",
          );
        var H = !1,
          z = !1;
        if (K !== null) {
          var D = K0(K);
          if (D !== void 0) {
            if (Z.has(D)) z = !0;
            else if (Q.has(D))
              if (U === a) z = !0;
              else H = !0;
          }
        }
        if (f5 !== null) {
          if (f5.has(J) || (X !== null && f5.has(X))) z = !0;
        }
        if (z) J._debugNeedsRemount = !0;
        if (z || H) {
          var O = SZ(J, ZJ);
          if (O !== null) _Q(O, J, ZJ, oJ);
        }
        if (G !== null && !z) cU(G, Q, Z);
        if (B !== null) cU(B, Q, Z);
      }
    }
    var GP = function (J, Q) {
      {
        var Z = new Set(),
          X = new Set(
            Q.map(function (G) {
              return G.current;
            }),
          );
        return iU(J.current, X, Z), Z;
      }
    };
    function iU(J, Q, Z) {
      {
        var { child: X, sibling: G, tag: B, type: U } = J,
          Y = null;
        switch (B) {
          case KJ:
          case _J:
          case a:
            Y = U;
            break;
          case JJ:
            Y = U.render;
            break;
        }
        var K = !1;
        if (Y !== null) {
          if (Q.has(Y)) K = !0;
        }
        if (K) BP(J, Z);
        else if (X !== null) iU(X, Q, Z);
        if (G !== null) iU(G, Q, Z);
      }
    }
    function BP(J, Q) {
      {
        var Z = UP(J, Q);
        if (Z) return;
        var X = J;
        while (!0) {
          switch (X.tag) {
            case c:
              Q.add(X.stateNode);
              return;
            case OJ:
              Q.add(X.stateNode.containerInfo);
              return;
            case m:
              Q.add(X.stateNode.containerInfo);
              return;
          }
          if (X.return === null)
            throw new Error("Expected to reach root first.");
          X = X.return;
        }
      }
    }
    function UP(J, Q) {
      {
        var Z = J,
          X = !1;
        while (!0) {
          if (Z.tag === c) (X = !0), Q.add(Z.stateNode);
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
    var aU;
    {
      aU = !1;
      try {
        var uz = Object.preventExtensions({});
      } catch (J) {
        aU = !0;
      }
    }
    function YP(J, Q, Z, X) {
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
        !aU && typeof Object.preventExtensions === "function")
      )
        Object.preventExtensions(this);
    }
    var yZ = function (J, Q, Z, X) {
      return new YP(J, Q, Z, X);
    };
    function pU(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function KP(J) {
      return typeof J === "function" && !pU(J) && J.defaultProps === void 0;
    }
    function WP(J) {
      if (typeof J === "function") return pU(J) ? a : KJ;
      else if (J !== void 0 && J !== null) {
        var Q = J.$$typeof;
        if (Q === WJ) return JJ;
        if (Q === hJ) return HQ;
      }
      return XQ;
    }
    function T4(J, Q) {
      var Z = J.alternate;
      if (Z === null)
        (Z = yZ(J.tag, Q, J.key, J.mode)),
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
      (Z.flags = J.flags & G1),
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
        case XQ:
        case KJ:
        case _J:
          Z.type = u5(J.type);
          break;
        case a:
          Z.type = yU(J.type);
          break;
        case JJ:
          Z.type = lU(J.type);
          break;
      }
      return Z;
    }
    function HP(J, Q) {
      J.flags &= G1 | qQ;
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
    function zP(J, Q, Z) {
      var X;
      if (J === f8) {
        if (((X = $J), Q === !0)) (X |= OQ), (X |= g0);
      } else X = r;
      if ($0) X |= kJ;
      return yZ(m, null, null, X);
    }
    function oU(J, Q, Z, X, G, B) {
      var U = XQ,
        Y = J;
      if (typeof J === "function")
        if (pU(J)) (U = a), (Y = yU(Y));
        else Y = u5(Y);
      else if (typeof J === "string") U = c;
      else
        J: switch (J) {
          case w:
            return Q4(Z.children, G, B, Q);
          case N:
            if (((U = W0), (G |= OQ), (G & $J) !== r)) G |= g0;
            break;
          case p:
            return MP(Z, G, B, Q);
          case HJ:
            return VP(Z, G, B, Q);
          case UQ:
            return qP(Z, G, B, Q);
          case B4:
            return dz(Z, G, B, Q);
          case TZ:
          case XZ:
          case o9:
          case r9:
          case b0:
          default: {
            if (typeof J === "object" && J !== null)
              switch (J.$$typeof) {
                case n:
                  U = wJ;
                  break J;
                case SJ:
                  U = TQ;
                  break J;
                case WJ:
                  (U = JJ), (Y = lU(Y));
                  break J;
                case hJ:
                  U = HQ;
                  break J;
                case DJ:
                  (U = H0), (Y = null);
                  break J;
              }
            var K = "";
            {
              if (
                J === void 0 ||
                (typeof J === "object" &&
                  J !== null &&
                  Object.keys(J).length === 0)
              )
                K +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              var H = X ? YJ(X) : null;
              if (H) K += "\n\nCheck the render method of `" + H + "`.";
            }
            throw new Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                ("but got: " + (J == null ? J : typeof J) + "." + K),
            );
          }
        }
      var z = yZ(U, Z, Q, G);
      return (
        (z.elementType = J), (z.type = Y), (z.lanes = B), (z._debugOwner = X), z
      );
    }
    function rU(J, Q, Z) {
      var X = null;
      X = J._owner;
      var { type: G, key: B, props: U } = J,
        Y = oU(G, B, U, X, Q, Z);
      return (Y._debugSource = J._source), (Y._debugOwner = J._owner), Y;
    }
    function Q4(J, Q, Z, X) {
      var G = yZ(iZ, J, X, Q);
      return (G.lanes = Z), G;
    }
    function MP(J, Q, Z, X) {
      if (typeof J.id !== "string")
        M(
          'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
          typeof J.id,
        );
      var G = yZ(rJ, J, X, Q | kJ);
      return (
        (G.elementType = p),
        (G.lanes = Z),
        (G.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
        G
      );
    }
    function VP(J, Q, Z, X) {
      var G = yZ(AJ, J, X, Q);
      return (G.elementType = HJ), (G.lanes = Z), G;
    }
    function qP(J, Q, Z, X) {
      var G = yZ(jQ, J, X, Q);
      return (G.elementType = UQ), (G.lanes = Z), G;
    }
    function dz(J, Q, Z, X) {
      var G = yZ(QJ, J, X, Q);
      (G.elementType = B4), (G.lanes = Z);
      var B = { isHidden: !1 };
      return (G.stateNode = B), G;
    }
    function nU(J, Q, Z) {
      var X = yZ(xJ, J, null, Q);
      return (X.lanes = Z), X;
    }
    function OP() {
      var J = yZ(c, null, null, r);
      return (J.elementType = "DELETED"), J;
    }
    function DP(J) {
      var Q = yZ(SQ, null, null, r);
      return (Q.stateNode = J), Q;
    }
    function tU(J, Q, Z) {
      var X = J.children !== null ? J.children : [],
        G = yZ(OJ, X, J.key, Q);
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
    function sz(J, Q) {
      if (J === null) J = yZ(XQ, null, null, r);
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
    function $P(J, Q, Z, X, G) {
      (this.tag = Q),
        (this.containerInfo = J),
        (this.pendingChildren = null),
        (this.current = null),
        (this.pingCache = null),
        (this.finishedWork = null),
        (this.timeoutHandle = NG),
        (this.context = null),
        (this.pendingContext = null),
        (this.callbackNode = null),
        (this.callbackPriority = kQ),
        (this.eventTimes = JG(x)),
        (this.expirationTimes = JG(oJ)),
        (this.pendingLanes = x),
        (this.suspendedLanes = x),
        (this.pingedLanes = x),
        (this.expiredLanes = x),
        (this.mutableReadLanes = x),
        (this.finishedLanes = x),
        (this.entangledLanes = x),
        (this.entanglements = JG(x)),
        (this.identifierPrefix = X),
        (this.onRecoverableError = G),
        (this.mutableSourceEagerHydrationData = null),
        (this.effectDuration = 0),
        (this.passiveEffectDuration = 0);
      {
        this.memoizedUpdaters = new Set();
        var B = (this.pendingUpdatersLaneMap = []);
        for (var U = 0; U < vX; U++) B.push(new Set());
      }
      switch (Q) {
        case f8:
          this._debugRootType = Z ? "hydrateRoot()" : "createRoot()";
          break;
        case m1:
          this._debugRootType = Z ? "hydrate()" : "render()";
          break;
      }
    }
    function mz(J, Q, Z, X, G, B, U, Y, K, H) {
      var z = new $P(J, Q, Z, Y, K),
        D = zP(Q, B);
      (z.current = D), (D.stateNode = z);
      {
        var O = {
          element: X,
          isDehydrated: Z,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        };
        D.memoizedState = O;
      }
      return GB(D), z;
    }
    var eU = "18.2.0";
    function jP(J, Q, Z) {
      var X =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return (
        qZ(X),
        {
          $$typeof: q,
          key: X == null ? null : "" + X,
          children: J,
          containerInfo: Q,
          implementation: Z,
        }
      );
    }
    var JY, QY;
    (JY = !1), (QY = {});
    function yz(J) {
      if (!J) return mZ;
      var Q = J5(J),
        Z = nD(Q);
      if (Q.tag === a) {
        var X = Q.type;
        if (f0(X)) return qW(Q, X, Z);
      }
      return Z;
    }
    function PP(J, Q) {
      {
        var Z = J5(J);
        if (Z === void 0)
          if (typeof J.render === "function")
            throw new Error("Unable to find node on an unmounted component.");
          else {
            var X = Object.keys(J).join(",");
            throw new Error(
              "Argument appears to not be a ReactComponent. Keys: " + X,
            );
          }
        var G = hY(Z);
        if (G === null) return null;
        if (G.mode & OQ) {
          var B = YJ(Z) || "Component";
          if (!QY[B]) {
            QY[B] = !0;
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
    function lz(J, Q, Z, X, G, B, U, Y) {
      var K = !1,
        H = null;
      return mz(J, Q, K, H, Z, X, G, B, U);
    }
    function cz(J, Q, Z, X, G, B, U, Y, K, H) {
      var z = !0,
        D = mz(Z, X, z, J, G, B, U, Y, K);
      D.context = yz(null);
      var O = D.current,
        E = EZ(),
        P = e1(O),
        R = V1(E, P);
      return (
        (R.callback = Q !== void 0 && Q !== null ? Q : null),
        c1(O, R, P),
        xj(D, P, E),
        D
      );
    }
    function C7(J, Q, Z, X) {
      lM(Q, J);
      var G = Q.current,
        B = EZ(),
        U = e1(G);
      HV(U);
      var Y = yz(Z);
      if (Q.context === null) Q.context = Y;
      else Q.pendingContext = Y;
      if (C1 && GZ !== null && !JY)
        (JY = !0),
          M(
            "Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",
            YJ(GZ) || "Unknown",
          );
      var K = V1(B, U);
      if (
        ((K.payload = { element: J }),
        (X = X === void 0 ? null : X),
        X !== null)
      ) {
        if (typeof X !== "function")
          M(
            "render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
            X,
          );
        K.callback = X;
      }
      var H = c1(G, K, U);
      if (H !== null) _Q(H, G, U, B), n8(H, G, U);
      return U;
    }
    function l9(J) {
      var Q = J.current;
      if (!Q.child) return null;
      switch (Q.child.tag) {
        case c:
          return SG(Q.child.stateNode);
        default:
          return Q.child.stateNode;
      }
    }
    function AP(J) {
      switch (J.tag) {
        case m: {
          var Q = J.stateNode;
          if (K8(Q)) {
            var Z = PV(Q);
            Cj(Q, Z);
          }
          break;
        }
        case AJ: {
          $1(function () {
            var G = SZ(J, ZJ);
            if (G !== null) {
              var B = EZ();
              _Q(G, J, ZJ, B);
            }
          });
          var X = ZJ;
          ZY(J, X);
          break;
        }
      }
    }
    function iz(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null && Z.dehydrated !== null) Z.retryLane = IV(Z.retryLane, Q);
    }
    function ZY(J, Q) {
      iz(J, Q);
      var Z = J.alternate;
      if (Z) iz(Z, Q);
    }
    function EP(J) {
      if (J.tag !== AJ) return;
      var Q = $6,
        Z = SZ(J, Q);
      if (Z !== null) {
        var X = EZ();
        _Q(Z, J, Q, X);
      }
      ZY(J, Q);
    }
    function RP(J) {
      if (J.tag !== AJ) return;
      var Q = e1(J),
        Z = SZ(J, Q);
      if (Z !== null) {
        var X = EZ();
        _Q(Z, J, Q, X);
      }
      ZY(J, Q);
    }
    function az(J) {
      var Q = gM(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    var pz = function (J) {
      return null;
    };
    function LP(J) {
      return pz(J);
    }
    var oz = function (J) {
      return !1;
    };
    function FP(J) {
      return oz(J);
    }
    var rz = null,
      nz = null,
      tz = null,
      ez = null,
      J3 = null,
      Q3 = null,
      Z3 = null,
      X3 = null,
      G3 = null;
    {
      var B3 = function (J, Q, Z) {
          var X = Q[Z],
            G = AQ(J) ? J.slice() : MJ({}, J);
          if (Z + 1 === Q.length) {
            if (AQ(G)) G.splice(X, 1);
            else delete G[X];
            return G;
          }
          return (G[X] = B3(J[X], Q, Z + 1)), G;
        },
        U3 = function (J, Q) {
          return B3(J, Q, 0);
        },
        Y3 = function (J, Q, Z, X) {
          var G = Q[X],
            B = AQ(J) ? J.slice() : MJ({}, J);
          if (X + 1 === Q.length) {
            var U = Z[X];
            if (((B[U] = B[G]), AQ(B))) B.splice(G, 1);
            else delete B[G];
          } else B[G] = Y3(J[G], Q, Z, X + 1);
          return B;
        },
        K3 = function (J, Q, Z) {
          if (Q.length !== Z.length) {
            $Q("copyWithRename() expects paths of the same length");
            return;
          } else
            for (var X = 0; X < Z.length - 1; X++)
              if (Q[X] !== Z[X]) {
                $Q(
                  "copyWithRename() expects paths to be the same except for the deepest key",
                );
                return;
              }
          return Y3(J, Q, Z, 0);
        },
        W3 = function (J, Q, Z, X) {
          if (Z >= Q.length) return X;
          var G = Q[Z],
            B = AQ(J) ? J.slice() : MJ({}, J);
          return (B[G] = W3(J[G], Q, Z + 1, X)), B;
        },
        H3 = function (J, Q, Z) {
          return W3(J, Q, 0, Z);
        },
        XY = function (J, Q) {
          var Z = J.memoizedState;
          while (Z !== null && Q > 0) (Z = Z.next), Q--;
          return Z;
        };
      (rz = function (J, Q, Z, X) {
        var G = XY(J, Q);
        if (G !== null) {
          var B = H3(G.memoizedState, Z, X);
          (G.memoizedState = B),
            (G.baseState = B),
            (J.memoizedProps = MJ({}, J.memoizedProps));
          var U = SZ(J, ZJ);
          if (U !== null) _Q(U, J, ZJ, oJ);
        }
      }),
        (nz = function (J, Q, Z) {
          var X = XY(J, Q);
          if (X !== null) {
            var G = U3(X.memoizedState, Z);
            (X.memoizedState = G),
              (X.baseState = G),
              (J.memoizedProps = MJ({}, J.memoizedProps));
            var B = SZ(J, ZJ);
            if (B !== null) _Q(B, J, ZJ, oJ);
          }
        }),
        (tz = function (J, Q, Z, X) {
          var G = XY(J, Q);
          if (G !== null) {
            var B = K3(G.memoizedState, Z, X);
            (G.memoizedState = B),
              (G.baseState = B),
              (J.memoizedProps = MJ({}, J.memoizedProps));
            var U = SZ(J, ZJ);
            if (U !== null) _Q(U, J, ZJ, oJ);
          }
        }),
        (ez = function (J, Q, Z) {
          if (((J.pendingProps = H3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = SZ(J, ZJ);
          if (X !== null) _Q(X, J, ZJ, oJ);
        }),
        (J3 = function (J, Q) {
          if (((J.pendingProps = U3(J.memoizedProps, Q)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var Z = SZ(J, ZJ);
          if (Z !== null) _Q(Z, J, ZJ, oJ);
        }),
        (Q3 = function (J, Q, Z) {
          if (((J.pendingProps = K3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = SZ(J, ZJ);
          if (X !== null) _Q(X, J, ZJ, oJ);
        }),
        (Z3 = function (J) {
          var Q = SZ(J, ZJ);
          if (Q !== null) _Q(Q, J, ZJ, oJ);
        }),
        (X3 = function (J) {
          pz = J;
        }),
        (G3 = function (J) {
          oz = J;
        });
    }
    function IP(J) {
      var Q = hY(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    function xP(J) {
      return null;
    }
    function wP() {
      return GZ;
    }
    function _P(J) {
      var Q = J.findFiberByHostInstance,
        Z = LJ.ReactCurrentDispatcher;
      return yM({
        bundleType: J.bundleType,
        version: J.version,
        rendererPackageName: J.rendererPackageName,
        rendererConfig: J.rendererConfig,
        overrideHookState: rz,
        overrideHookStateDeletePath: nz,
        overrideHookStateRenamePath: tz,
        overrideProps: ez,
        overridePropsDeletePath: J3,
        overridePropsRenamePath: Q3,
        setErrorHandler: X3,
        setSuspenseHandler: G3,
        scheduleUpdate: Z3,
        currentDispatcherRef: Z,
        findHostInstanceByFiber: IP,
        findFiberByHostInstance: Q || xP,
        findHostInstancesForRefresh: GP,
        scheduleRefresh: ZP,
        scheduleRoot: XP,
        setRefreshHandler: QP,
        getCurrentFiber: wP,
        reconcilerVersion: eU,
      });
    }
    var z3 =
      typeof reportError === "function"
        ? reportError
        : function (J) {
            console.error(J);
          };
    function GY(J) {
      this._internalRoot = J;
    }
    (c9.prototype.render = GY.prototype.render =
      function (J) {
        var Q = this._internalRoot;
        if (Q === null) throw new Error("Cannot update an unmounted root.");
        {
          if (typeof arguments[1] === "function")
            M(
              "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          else if (i9(arguments[1]))
            M(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
            );
          else if (typeof arguments[1] !== "undefined")
            M(
              "You passed a second argument to root.render(...) but it only accepts one argument.",
            );
          var Z = Q.containerInfo;
          if (Z.nodeType !== VQ) {
            var X = az(Q.current);
            if (X) {
              if (X.parentNode !== Z)
                M(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                );
            }
          }
        }
        C7(J, Q, null, null);
      }),
      (c9.prototype.unmount = GY.prototype.unmount =
        function () {
          if (typeof arguments[0] === "function")
            M(
              "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          var J = this._internalRoot;
          if (J !== null) {
            this._internalRoot = null;
            var Q = J.containerInfo;
            if (Lz())
              M(
                "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.",
              );
            $1(function () {
              C7(null, J, null, null);
            }),
              KW(Q);
          }
        });
    function SP(J, Q) {
      if (!i9(J))
        throw new Error(
          "createRoot(...): Target container is not a DOM element.",
        );
      M3(J);
      var Z = !1,
        X = !1,
        G = "",
        B = z3,
        U = null;
      if (Q !== null && Q !== void 0) {
        if (Q.hydrate)
          $Q(
            "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.",
          );
        else if (typeof Q === "object" && Q !== null && Q.$$typeof === N0)
          M(
            "You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);",
          );
        if (Q.unstable_strictMode === !0) Z = !0;
        if (Q.identifierPrefix !== void 0) G = Q.identifierPrefix;
        if (Q.onRecoverableError !== void 0) B = Q.onRecoverableError;
        if (Q.transitionCallbacks !== void 0) U = Q.transitionCallbacks;
      }
      var Y = lz(J, f8, null, Z, X, G, B);
      v8(Y.current, J);
      var K = J.nodeType === VQ ? J.parentNode : J;
      return f6(K), new GY(Y);
    }
    function c9(J) {
      this._internalRoot = J;
    }
    function CP(J) {
      if (J) mV(J);
    }
    c9.prototype.unstable_scheduleHydration = CP;
    function vP(J, Q, Z) {
      if (!i9(J))
        throw new Error(
          "hydrateRoot(...): Target container is not a DOM element.",
        );
      if ((M3(J), Q === void 0))
        M(
          "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)",
        );
      var X = Z != null ? Z : null,
        G = (Z != null && Z.hydratedSources) || null,
        B = !1,
        U = !1,
        Y = "",
        K = z3;
      if (Z !== null && Z !== void 0) {
        if (Z.unstable_strictMode === !0) B = !0;
        if (Z.identifierPrefix !== void 0) Y = Z.identifierPrefix;
        if (Z.onRecoverableError !== void 0) K = Z.onRecoverableError;
      }
      var H = cz(Q, null, J, f8, X, B, U, Y, K);
      if ((v8(H.current, J), f6(J), G))
        for (var z = 0; z < G.length; z++) {
          var D = G[z];
          g2(H, D);
        }
      return new c9(H);
    }
    function i9(J) {
      return !!(
        J &&
        (J.nodeType === wZ || J.nodeType === J1 || J.nodeType === WX || !JZ)
      );
    }
    function v7(J) {
      return !!(
        J &&
        (J.nodeType === wZ ||
          J.nodeType === J1 ||
          J.nodeType === WX ||
          (J.nodeType === VQ && J.nodeValue === " react-mount-point-unstable "))
      );
    }
    function M3(J) {
      {
        if (
          J.nodeType === wZ &&
          J.tagName &&
          J.tagName.toUpperCase() === "BODY"
        )
          M(
            "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.",
          );
        if (o6(J))
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
    var NP = LJ.ReactCurrentOwner,
      V3;
    V3 = function (J) {
      if (J._reactRootContainer && J.nodeType !== VQ) {
        var Q = az(J._reactRootContainer.current);
        if (Q) {
          if (Q.parentNode !== J)
            M(
              "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.",
            );
        }
      }
      var Z = !!J._reactRootContainer,
        X = BY(J),
        G = !!(X && d1(X));
      if (G && !Z)
        M(
          "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.",
        );
      if (J.nodeType === wZ && J.tagName && J.tagName.toUpperCase() === "BODY")
        M(
          "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.",
        );
    };
    function BY(J) {
      if (!J) return null;
      if (J.nodeType === J1) return J.documentElement;
      else return J.firstChild;
    }
    function q3() {}
    function bP(J, Q, Z, X, G) {
      if (G) {
        if (typeof X === "function") {
          var B = X;
          X = function () {
            var O = l9(U);
            B.call(O);
          };
        }
        var U = cz(Q, X, J, m1, null, !1, !1, "", q3);
        (J._reactRootContainer = U), v8(U.current, J);
        var Y = J.nodeType === VQ ? J.parentNode : J;
        return f6(Y), $1(), U;
      } else {
        var K;
        while ((K = J.lastChild)) J.removeChild(K);
        if (typeof X === "function") {
          var H = X;
          X = function () {
            var O = l9(z);
            H.call(O);
          };
        }
        var z = lz(J, m1, null, !1, !1, "", q3);
        (J._reactRootContainer = z), v8(z.current, J);
        var D = J.nodeType === VQ ? J.parentNode : J;
        return (
          f6(D),
          $1(function () {
            C7(Q, z, Z, X);
          }),
          z
        );
      }
    }
    function kP(J, Q) {
      if (J !== null && typeof J !== "function")
        M(
          "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
          Q,
          J,
        );
    }
    function a9(J, Q, Z, X, G) {
      V3(Z), kP(G === void 0 ? null : G, "render");
      var B = Z._reactRootContainer,
        U;
      if (!B) U = bP(Z, Q, J, G, X);
      else {
        if (((U = B), typeof G === "function")) {
          var Y = G;
          G = function () {
            var K = l9(U);
            Y.call(K);
          };
        }
        C7(Q, U, J, G);
      }
      return l9(U);
    }
    function gP(J) {
      {
        var Q = NP.current;
        if (Q !== null && Q.stateNode !== null) {
          var Z = Q.stateNode._warnedAboutRefsInRender;
          if (!Z)
            M(
              "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              fJ(Q.type) || "A component",
            );
          Q.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      if (J == null) return null;
      if (J.nodeType === wZ) return J;
      return PP(J, "findDOMNode");
    }
    function TP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !v7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = o6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?",
          );
      }
      return a9(null, J, Q, !0, Z);
    }
    function hP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createrootinstead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !v7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = o6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?",
          );
      }
      return a9(null, J, Q, !1, Z);
    }
    function fP(J, Q, Z, X) {
      if (
        (M(
          "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !v7(Z))
      )
        throw new Error("Target container is not a DOM element.");
      if (J == null || !_M(J))
        throw new Error("parentComponent must be a valid React Component");
      return a9(J, Q, Z, !1, X);
    }
    function uP(J) {
      if (!v7(J))
        throw new Error(
          "unmountComponentAtNode(...): Target container is not a DOM element.",
        );
      {
        var Q = o6(J) && J._reactRootContainer === void 0;
        if (Q)
          M(
            "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?",
          );
      }
      if (J._reactRootContainer) {
        {
          var Z = BY(J),
            X = Z && !d1(Z);
          if (X)
            M(
              "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
            );
        }
        return (
          $1(function () {
            a9(null, null, J, !1, function () {
              (J._reactRootContainer = null), KW(J);
            });
          }),
          !0
        );
      } else {
        {
          var G = BY(J),
            B = !!(G && d1(G)),
            U =
              J.nodeType === wZ &&
              v7(J.parentNode) &&
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
      (NV(AP),
      kV(EP),
      gV(RP),
      TV(j0),
      hV(SV),
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
    $M(fO), AM(TU, vj, $1);
    function dP(J, Q) {
      var Z =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!i9(Q)) throw new Error("Target container is not a DOM element.");
      return jP(J, Q, null, Z);
    }
    function sP(J, Q, Z, X) {
      return fP(J, Q, Z, X);
    }
    var UY = { usingClientEntryPoint: !1, Events: [d1, D5, N8, IY, xY, TU] };
    function mP(J, Q) {
      if (!UY.usingClientEntryPoint)
        M(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".You should instead import it from "react-dom/client".',
        );
      return SP(J, Q);
    }
    function yP(J, Q, Z) {
      if (!UY.usingClientEntryPoint)
        M(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
        );
      return vP(J, Q, Z);
    }
    function lP(J) {
      if (Lz())
        M(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
        );
      return $1(J);
    }
    var cP = _P({
      findFiberByHostInstance: E4,
      bundleType: 1,
      version: eU,
      rendererPackageName: "react-dom",
    });
    if (!cP && fQ && window.top === window.self) {
      if (
        (navigator.userAgent.indexOf("Chrome") > -1 &&
          navigator.userAgent.indexOf("Edge") === -1) ||
        navigator.userAgent.indexOf("Firefox") > -1
      ) {
        var O3 = window.location.protocol;
        if (/^(https?|file):$/.test(O3))
          console.info(
            "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
              (O3 === "file:"
                ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faqhttps://reactjs.org/link/react-devtools-faq"
                : ""),
            "font-weight:bold",
          );
      }
    }
    if (
      ((JA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = UY),
      (JA.createPortal = dP),
      (JA.createRoot = mP),
      (JA.findDOMNode = gP),
      (JA.flushSync = lP),
      (JA.hydrate = TP),
      (JA.hydrateRoot = yP),
      (JA.render = hP),
      (JA.unmountComponentAtNode = uP),
      (JA.unstable_batchedUpdates = TU),
      (JA.unstable_renderSubtreeIntoContainer = sP),
      (JA.version = eU),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var P3 = b7((QA) => {
  var m5 = HZ(j3(), 1);
  (k7 = m5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
    (QA.createRoot = function (PJ, s) {
      k7.usingClientEntryPoint = !0;
      try {
        return m5.createRoot(PJ, s);
      } finally {
        k7.usingClientEntryPoint = !1;
      }
    }),
    (QA.hydrateRoot = function (PJ, s, LJ) {
      k7.usingClientEntryPoint = !0;
      try {
        return m5.hydrateRoot(PJ, s, LJ);
      } finally {
        k7.usingClientEntryPoint = !1;
      }
    });
  var k7;
});
var A1 = b7((ZA) => {
  var PJ = HZ(s5(), 1);
  (function () {
    var s = Symbol.for("react.element"),
      LJ = Symbol.for("react.portal"),
      ZQ = Symbol.for("react.fragment"),
      iJ = Symbol.for("react.strict_mode"),
      $Q = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      cZ = Symbol.for("react.context"),
      KJ = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      XQ = Symbol.for("react.suspense_list"),
      m = Symbol.for("react.memo"),
      OJ = Symbol.for("react.lazy"),
      c = Symbol.for("react.offscreen"),
      xJ = Symbol.iterator,
      iZ = "@@iterator";
    function W0(q) {
      if (q === null || typeof q !== "object") return null;
      var w = (xJ && q[xJ]) || q[iZ];
      if (typeof w === "function") return w;
      return null;
    }
    var TQ = PJ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function wJ(q) {
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
        var SJ = N.map(function (WJ) {
          return String(WJ);
        });
        SJ.unshift("Warning: " + w),
          Function.prototype.apply.call(console[q], console, SJ);
      }
    }
    var rJ = !1,
      AJ = !1,
      HQ = !1,
      _J = !1,
      H0 = !1,
      GQ;
    GQ = Symbol.for("react.module.reference");
    function SQ(q) {
      if (typeof q === "string" || typeof q === "function") return !0;
      if (
        q === ZQ ||
        q === $Q ||
        H0 ||
        q === iJ ||
        q === a ||
        q === XQ ||
        _J ||
        q === c ||
        rJ ||
        AJ ||
        HQ
      )
        return !0;
      if (typeof q === "object" && q !== null) {
        if (
          q.$$typeof === OJ ||
          q.$$typeof === m ||
          q.$$typeof === M ||
          q.$$typeof === cZ ||
          q.$$typeof === KJ ||
          q.$$typeof === GQ ||
          q.getModuleId !== void 0
        )
          return !0;
      }
      return !1;
    }
    function jQ(q, w, N) {
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
        wJ(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof q === "function") return q.displayName || q.name || null;
      if (typeof q === "string") return q;
      switch (q) {
        case ZQ:
          return "Fragment";
        case LJ:
          return "Portal";
        case $Q:
          return "Profiler";
        case iJ:
          return "StrictMode";
        case a:
          return "Suspense";
        case XQ:
          return "SuspenseList";
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case cZ:
            var w = q;
            return uJ(w) + ".Consumer";
          case M:
            var N = q;
            return uJ(N._context) + ".Provider";
          case KJ:
            return jQ(q, q.render, "ForwardRef");
          case m:
            var p = q.displayName || null;
            if (p !== null) return p;
            return QJ(q.type) || "Memo";
          case OJ: {
            var n = q,
              SJ = n._payload,
              WJ = n._init;
            try {
              return QJ(WJ(SJ));
            } catch (HJ) {
              return null;
            }
          }
        }
      return null;
    }
    var aJ = Object.assign,
      e = 0,
      MZ,
      C0,
      hQ,
      z0,
      eQ,
      aZ,
      JZ;
    function FZ() {}
    FZ.__reactDisabledLog = !0;
    function E1() {
      {
        if (e === 0) {
          (MZ = console.log),
            (C0 = console.info),
            (hQ = console.warn),
            (z0 = console.error),
            (eQ = console.group),
            (aZ = console.groupCollapsed),
            (JZ = console.groupEnd);
          var q = { configurable: !0, enumerable: !0, value: FZ, writable: !0 };
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
    function v0() {
      {
        if ((e--, e === 0)) {
          var q = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: aJ({}, q, { value: MZ }),
            info: aJ({}, q, { value: C0 }),
            warn: aJ({}, q, { value: hQ }),
            error: aJ({}, q, { value: z0 }),
            group: aJ({}, q, { value: eQ }),
            groupCollapsed: aJ({}, q, { value: aZ }),
            groupEnd: aJ({}, q, { value: JZ }),
          });
        }
        if (e < 0)
          wJ(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var pZ = TQ.ReactCurrentDispatcher,
      M0;
    function kZ(q, w, N) {
      {
        if (M0 === void 0)
          try {
            throw Error();
          } catch (n) {
            var p = n.stack.trim().match(/\n( *(at )?)/);
            M0 = (p && p[1]) || "";
          }
        return "\n" + M0 + q;
      }
    }
    var VZ = !1,
      oZ;
    {
      var QZ = typeof WeakMap === "function" ? WeakMap : Map;
      oZ = new QZ();
    }
    function gZ(q, w) {
      if (!q || VZ) return "";
      {
        var N = oZ.get(q);
        if (N !== void 0) return N;
      }
      var p;
      VZ = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var SJ;
      (SJ = pZ.current), (pZ.current = null), E1();
      try {
        if (w) {
          var WJ = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(WJ.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect === "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(WJ, []);
            } catch (TZ) {
              p = TZ;
            }
            Reflect.construct(q, [], WJ);
          } else {
            try {
              WJ.call();
            } catch (TZ) {
              p = TZ;
            }
            q.call(WJ.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (TZ) {
            p = TZ;
          }
          q();
        }
      } catch (TZ) {
        if (TZ && p && typeof TZ.stack === "string") {
          var HJ = TZ.stack.split("\n"),
            UQ = p.stack.split("\n"),
            hJ = HJ.length - 1,
            DJ = UQ.length - 1;
          while (hJ >= 1 && DJ >= 0 && HJ[hJ] !== UQ[DJ]) DJ--;
          for (; hJ >= 1 && DJ >= 0; hJ--, DJ--)
            if (HJ[hJ] !== UQ[DJ]) {
              if (hJ !== 1 || DJ !== 1)
                do
                  if ((hJ--, DJ--, DJ < 0 || HJ[hJ] !== UQ[DJ])) {
                    var XZ = "\n" + HJ[hJ].replace(" at new ", " at ");
                    if (q.displayName && XZ.includes("<anonymous>"))
                      XZ = XZ.replace("<anonymous>", q.displayName);
                    if (typeof q === "function") oZ.set(q, XZ);
                    return XZ;
                  }
                while (hJ >= 1 && DJ >= 0);
              break;
            }
        }
      } finally {
        (VZ = !1), (pZ.current = SJ), v0(), (Error.prepareStackTrace = n);
      }
      var b0 = q ? q.displayName || q.name : "",
        B4 = b0 ? kZ(b0) : "";
      if (typeof q === "function") oZ.set(q, B4);
      return B4;
    }
    function fQ(q, w, N) {
      return gZ(q, !1);
    }
    function uQ(q) {
      var w = q.prototype;
      return !!(w && w.isReactComponent);
    }
    function KQ(q, w, N) {
      if (q == null) return "";
      if (typeof q === "function") return gZ(q, uQ(q));
      if (typeof q === "string") return kZ(q);
      switch (q) {
        case a:
          return kZ("Suspense");
        case XQ:
          return kZ("SuspenseList");
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case KJ:
            return fQ(q.render);
          case m:
            return KQ(q.type, w, N);
          case OJ: {
            var p = q,
              n = p._payload,
              SJ = p._init;
            try {
              return KQ(SJ(n), w, N);
            } catch (WJ) {}
          }
        }
      return "";
    }
    var dQ = Object.prototype.hasOwnProperty,
      sQ = {},
      zQ = TQ.ReactDebugCurrentFrame;
    function qZ(q) {
      if (q) {
        var w = q._owner,
          N = KQ(q.type, q._source, w ? w.type : null);
        zQ.setExtraStackFrame(N);
      } else zQ.setExtraStackFrame(null);
    }
    function R1(q, w, N, p, n) {
      {
        var SJ = Function.call.bind(dQ);
        for (var WJ in q)
          if (SJ(q, WJ)) {
            var HJ = void 0;
            try {
              if (typeof q[WJ] !== "function") {
                var UQ = Error(
                  (p || "React class") +
                    ": " +
                    N +
                    " type `" +
                    WJ +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof q[WJ] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((UQ.name = "Invariant Violation"), UQ);
              }
              HJ = q[WJ](
                w,
                WJ,
                p,
                N,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (hJ) {
              HJ = hJ;
            }
            if (HJ && !(HJ instanceof Error))
              qZ(n),
                wJ(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  p || "React class",
                  N,
                  WJ,
                  typeof HJ,
                ),
                qZ(null);
            if (HJ instanceof Error && !(HJ.message in sQ))
              (sQ[HJ.message] = !0),
                qZ(n),
                wJ("Failed %s type: %s", N, HJ.message),
                qZ(null);
          }
      }
    }
    var L1 = Array.isArray;
    function rZ(q) {
      return L1(q);
    }
    function ZZ(q) {
      {
        var w = typeof Symbol === "function" && Symbol.toStringTag,
          N = (w && q[Symbol.toStringTag]) || q.constructor.name || "Object";
        return N;
      }
    }
    function nZ(q) {
      try {
        return OZ(q), !1;
      } catch (w) {
        return !0;
      }
    }
    function OZ(q) {
      return "" + q;
    }
    function tZ(q) {
      if (nZ(q))
        return (
          wJ(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            ZZ(q),
          ),
          OZ(q)
        );
    }
    var MQ = TQ.ReactCurrentOwner,
      eZ = { key: !0, ref: !0, __self: !0, __source: !0 },
      V0,
      a0,
      v;
    v = {};
    function y(q) {
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
    function vJ(q, w) {
      if (
        typeof q.ref === "string" &&
        MQ.current &&
        w &&
        MQ.current.stateNode !== w
      ) {
        var N = QJ(MQ.current.type);
        if (!v[N])
          wJ(
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
          if (!V0)
            (V0 = !0),
              wJ(
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
          if (!a0)
            (a0 = !0),
              wJ(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                w,
              );
        };
        (N.isReactWarning = !0),
          Object.defineProperty(q, "ref", { get: N, configurable: !0 });
      }
    }
    var BQ = function (q, w, N, p, n, SJ, WJ) {
      var HJ = { $$typeof: s, type: q, key: w, ref: N, props: WJ, _owner: SJ };
      if (
        ((HJ._store = {}),
        Object.defineProperty(HJ._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(HJ, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p,
        }),
        Object.defineProperty(HJ, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n,
        }),
        Object.freeze)
      )
        Object.freeze(HJ.props), Object.freeze(HJ);
      return HJ;
    };
    function IZ(q, w, N, p, n) {
      {
        var SJ,
          WJ = {},
          HJ = null,
          UQ = null;
        if (N !== void 0) tZ(N), (HJ = "" + N);
        if (UJ(w)) tZ(w.key), (HJ = "" + w.key);
        if (y(w)) (UQ = w.ref), vJ(w, n);
        for (SJ in w)
          if (dQ.call(w, SJ) && !eZ.hasOwnProperty(SJ)) WJ[SJ] = w[SJ];
        if (q && q.defaultProps) {
          var hJ = q.defaultProps;
          for (SJ in hJ) if (WJ[SJ] === void 0) WJ[SJ] = hJ[SJ];
        }
        if (HJ || UQ) {
          var DJ =
            typeof q === "function" ? q.displayName || q.name || "Unknown" : q;
          if (HJ) dJ(WJ, DJ);
          if (UQ) CQ(WJ, DJ);
        }
        return BQ(q, HJ, UQ, n, p, MQ.current, WJ);
      }
    }
    var { ReactCurrentOwner: sJ, ReactDebugCurrentFrame: DZ } = TQ;
    function mJ(q) {
      if (q) {
        var w = q._owner,
          N = KQ(q.type, q._source, w ? w.type : null);
        DZ.setExtraStackFrame(N);
      } else DZ.setExtraStackFrame(null);
    }
    var nJ = !1;
    function Z4(q) {
      return typeof q === "object" && q !== null && q.$$typeof === s;
    }
    function F1() {
      {
        if (sJ.current) {
          var q = QJ(sJ.current.type);
          if (q) return "\n\nCheck the render method of `" + q + "`.";
        }
        return "";
      }
    }
    function X4(q) {
      {
        if (q !== void 0) {
          var w = q.fileName.replace(/^.*[\\\/]/, ""),
            N = q.lineNumber;
          return "\n\nCheck your code at " + w + ":" + N + ".";
        }
        return "";
      }
    }
    var f4 = {};
    function y5(q) {
      {
        var w = F1();
        if (!w) {
          var N = typeof q === "string" ? q : q.displayName || q.name;
          if (N) w = "\n\nCheck the top-level render call using <" + N + ">.";
        }
        return w;
      }
    }
    function q0(q, w) {
      {
        if (!q._store || q._store.validated || q.key != null) return;
        q._store.validated = !0;
        var N = y5(w);
        if (f4[N]) return;
        f4[N] = !0;
        var p = "";
        if (q && q._owner && q._owner !== sJ.current)
          p = " It was passed a child from " + QJ(q._owner.type) + ".";
        mJ(q),
          wJ(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            N,
            p,
          ),
          mJ(null);
      }
    }
    function p0(q, w) {
      {
        if (typeof q !== "object") return;
        if (rZ(q))
          for (var N = 0; N < q.length; N++) {
            var p = q[N];
            if (Z4(p)) q0(p, w);
          }
        else if (Z4(q)) {
          if (q._store) q._store.validated = !0;
        } else if (q) {
          var n = W0(q);
          if (typeof n === "function") {
            if (n !== q.entries) {
              var SJ = n.call(q),
                WJ;
              while (!(WJ = SJ.next()).done) if (Z4(WJ.value)) q0(WJ.value, w);
            }
          }
        }
      }
    }
    function u4(q) {
      {
        var w = q.type;
        if (w === null || w === void 0 || typeof w === "string") return;
        var N;
        if (typeof w === "function") N = w.propTypes;
        else if (
          typeof w === "object" &&
          (w.$$typeof === KJ || w.$$typeof === m)
        )
          N = w.propTypes;
        else return;
        if (N) {
          var p = QJ(w);
          R1(N, q.props, "prop", p, q);
        } else if (w.PropTypes !== void 0 && !nJ) {
          nJ = !0;
          var n = QJ(w);
          wJ(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            n || "Unknown",
          );
        }
        if (
          typeof w.getDefaultProps === "function" &&
          !w.getDefaultProps.isReactClassApproved
        )
          wJ(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
          );
      }
    }
    function d4(q) {
      {
        var w = Object.keys(q.props);
        for (var N = 0; N < w.length; N++) {
          var p = w[N];
          if (p !== "children" && p !== "key") {
            mJ(q),
              wJ(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                p,
              ),
              mJ(null);
            break;
          }
        }
        if (q.ref !== null)
          mJ(q),
            wJ("Invalid attribute `ref` supplied to `React.Fragment`."),
            mJ(null);
      }
    }
    function G4(q, w, N, p, n, SJ) {
      {
        var WJ = SQ(q);
        if (!WJ) {
          var HJ = "";
          if (
            q === void 0 ||
            (typeof q === "object" && q !== null && Object.keys(q).length === 0)
          )
            HJ +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          var UQ = X4(n);
          if (UQ) HJ += UQ;
          else HJ += F1();
          var hJ;
          if (q === null) hJ = "null";
          else if (rZ(q)) hJ = "array";
          else if (q !== void 0 && q.$$typeof === s)
            (hJ = "<" + (QJ(q.type) || "Unknown") + " />"),
              (HJ =
                " Did you accidentally export a JSX literal instead of a component?");
          else hJ = typeof q;
          wJ(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            hJ,
            HJ,
          );
        }
        var DJ = IZ(q, w, N, n, SJ);
        if (DJ == null) return DJ;
        if (WJ) {
          var XZ = w.children;
          if (XZ !== void 0)
            if (p)
              if (rZ(XZ)) {
                for (var b0 = 0; b0 < XZ.length; b0++) p0(XZ[b0], q);
                if (Object.freeze) Object.freeze(XZ);
              } else
                wJ(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                );
            else p0(XZ, q);
        }
        if (q === ZQ) d4(DJ);
        else u4(DJ);
        return DJ;
      }
    }
    var N0 = G4;
    (ZA.Fragment = ZQ), (ZA.jsxDEV = N0);
  })();
});
var x3 = HZ(P3(), 1);
var R3 = HZ(s5(), 1);
var A3 = HZ(s5(), 1),
  tQ = HZ(A1(), 1),
  XA = () => {
    const [PJ, s] = A3.useState(!0);
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
                PJ &&
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
                                s(!1);
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
  E3 = XA;
var bZ = HZ(A1(), 1),
  L3 = () => {
    const [PJ, s] = R3.useState(!1),
      LJ = (iJ) => {
        iJ.preventDefault(), s(!0);
      },
      ZQ = () => {
        s(!1);
      };
    return bZ.jsxDEV(
      "header",
      {
        className: "navbar",
        children: [
          bZ.jsxDEV(
            "nav",
            {
              children: [
                bZ.jsxDEV(
                  "div",
                  {
                    className: "option",
                    children: [
                      bZ.jsxDEV(
                        "a",
                        { href: "/designstudio", children: "Design Studio" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      bZ.jsxDEV(
                        "a",
                        { href: "/about", children: "About" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      bZ.jsxDEV(
                        "a",
                        { href: "/help", onClick: LJ, children: "Help" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      bZ.jsxDEV(
                        "a",
                        { href: "/pricing", children: "Pricing" },
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
                bZ.jsxDEV(
                  "a",
                  {
                    href: "/",
                    children: bZ.jsxDEV(
                      "img",
                      { src: "/assets/brand_logo.svg", alt: "Home" },
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
                bZ.jsxDEV(
                  "div",
                  {
                    className: "right-buttons",
                    children: [
                      bZ.jsxDEV(
                        "a",
                        {
                          href: "/login",
                          className: "button",
                          children: "Login",
                        },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      bZ.jsxDEV(
                        "a",
                        {
                          href: "/register",
                          className: "button",
                          children: "Register",
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
              ],
            },
            void 0,
            !0,
            void 0,
            this,
          ),
          PJ && bZ.jsxDEV(E3, {}, void 0, !1, void 0, this),
        ],
      },
      void 0,
      !0,
      void 0,
      this,
    );
  };
var F3 = HZ(s5(), 1),
  zZ = HZ(A1(), 1),
  GA = () => {
    const [PJ, s] = F3.useState(0);
    return zZ.jsxDEV(
      "html",
      {
        children: [
          zZ.jsxDEV(
            "head",
            {
              children: [
                zZ.jsxDEV(
                  "meta",
                  { charSet: "utf-8" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
                  "title",
                  { children: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
                  "meta",
                  { name: "description", content: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
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
                zZ.jsxDEV(
                  "link",
                  { rel: "stylesheet", href: "/styles/About.css" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
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
          zZ.jsxDEV(
            "body",
            {
              children: [
                zZ.jsxDEV(L3, {}, void 0, !1, void 0, this),
                zZ.jsxDEV(
                  "h1",
                  { children: ["Counter ", PJ] },
                  void 0,
                  !0,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
                  "button",
                  { onClick: () => s(PJ + 1), children: "Increment" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                zZ.jsxDEV(
                  "div",
                  {
                    children: [
                      zZ.jsxDEV(
                        "h2",
                        { children: "This is the about page" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      zZ.jsxDEV(
                        "p",
                        {
                          children:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod voluptatum, quae, voluptatem, quos voluptate quia quibusdam quas voluptatibus quidem doloribus. Quisquam quod voluptatum, quae, voluptatem, quos voluptate quia quibusdam quas voluptatibus quidem doloribus.",
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
              ],
            },
            void 0,
            !0,
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
  I3 = GA;
var w3 = HZ(A1(), 1);
x3.hydrateRoot(document, w3.jsxDEV(I3, {}, void 0, !1, void 0, this));
