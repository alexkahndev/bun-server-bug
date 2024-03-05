var XA = Object.create;
var {
  defineProperty: E3,
  getPrototypeOf: GA,
  getOwnPropertyNames: BA,
} = Object;
var UA = Object.prototype.hasOwnProperty;
var e1 = (R1, s, L1) => {
  L1 = R1 != null ? XA(GA(R1)) : {};
  const BJ =
    s || !R1 || !R1.__esModule
      ? E3(L1, "default", { value: R1, enumerable: !0 })
      : L1;
  for (let i1 of BA(R1))
    if (!UA.call(BJ, i1)) E3(BJ, i1, { get: () => R1[i1], enumerable: !0 });
  return BJ;
};
var g7 = (R1, s) => () => (
  s || R1((s = { exports: {} }).exports, s), s.exports
);
var T7 = g7((YA, n9) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var R1 = "18.2.0",
      s = Symbol.for("react.element"),
      L1 = Symbol.for("react.portal"),
      BJ = Symbol.for("react.fragment"),
      i1 = Symbol.for("react.strict_mode"),
      AJ = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      pQ = Symbol.for("react.context"),
      K1 = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      UJ = Symbol.for("react.suspense_list"),
      m = Symbol.for("react.memo"),
      O1 = Symbol.for("react.lazy"),
      c = Symbol.for("react.offscreen"),
      x1 = Symbol.iterator,
      oQ = "@@iterator";
    function MZ(W) {
      if (W === null || typeof W !== "object") return null;
      var V = (x1 && W[x1]) || W[oQ];
      if (typeof V === "function") return V;
      return null;
    }
    var dJ = { current: null },
      w1 = { transition: null },
      J1 = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      r1 = { current: null },
      P1 = {},
      VJ = null;
    function _1(W) {
      VJ = W;
    }
    (P1.setExtraStackFrame = function (W) {
      VJ = W;
    }),
      (P1.getCurrentStack = null),
      (P1.getStackAddendum = function () {
        var W = "";
        if (VJ) W += VJ;
        var V = P1.getCurrentStack;
        if (V) W += V() || "";
        return W;
      });
    var VZ = !1,
      YJ = !1,
      bJ = !1,
      EJ = !1,
      u1 = !1,
      Q1 = {
        ReactCurrentDispatcher: dJ,
        ReactCurrentBatchConfig: w1,
        ReactCurrentOwner: r1,
      };
    (Q1.ReactDebugCurrentFrame = P1), (Q1.ReactCurrentActQueue = J1);
    function a1(W) {
      {
        for (
          var V = arguments.length, A = new Array(V > 1 ? V - 1 : 0), L = 1;
          L < V;
          L++
        )
          A[L - 1] = arguments[L];
        OQ("warn", W, A);
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
        OQ("error", W, A);
      }
    }
    function OQ(W, V, A) {
      {
        var L = Q1.ReactDebugCurrentFrame,
          S = L.getStackAddendum();
        if (S !== "") (V += "%s"), (A = A.concat([S]));
        var i = A.map(function (u) {
          return String(u);
        });
        i.unshift("Warning: " + V),
          Function.prototype.apply.call(console[W], console, i);
      }
    }
    var bZ = {};
    function sJ(W, V) {
      {
        var A = W.constructor,
          L = (A && (A.displayName || A.name)) || "ReactClass",
          S = L + "." + V;
        if (bZ[S]) return;
        e(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          V,
          L,
        ),
          (bZ[S] = !0);
      }
    }
    var qZ = {
        isMounted: function (W) {
          return !1;
        },
        enqueueForceUpdate: function (W, V, A) {
          sJ(W, "forceUpdate");
        },
        enqueueReplaceState: function (W, V, A, L) {
          sJ(W, "replaceState");
        },
        enqueueSetState: function (W, V, A, L) {
          sJ(W, "setState");
        },
      },
      XQ = Object.assign,
      rQ = {};
    Object.freeze(rQ);
    function GQ(W, V, A) {
      (this.props = W),
        (this.context = V),
        (this.refs = rQ),
        (this.updater = A || qZ);
    }
    (GQ.prototype.isReactComponent = {}),
      (GQ.prototype.setState = function (W, V) {
        if (typeof W !== "object" && typeof W !== "function" && W != null)
          throw new Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, W, V, "setState");
      }),
      (GQ.prototype.forceUpdate = function (W) {
        this.updater.enqueueForceUpdate(this, W, "forceUpdate");
      });
    {
      var wQ = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        },
        F0 = function (W, V) {
          Object.defineProperty(GQ.prototype, W, {
            get: function () {
              a1(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                V[0],
                V[1],
              );
              return;
            },
          });
        };
      for (var kZ in wQ) if (wQ.hasOwnProperty(kZ)) F0(kZ, wQ[kZ]);
    }
    function nQ() {}
    nQ.prototype = GQ.prototype;
    function OZ(W, V, A) {
      (this.props = W),
        (this.context = V),
        (this.refs = rQ),
        (this.updater = A || qZ);
    }
    var hQ = (OZ.prototype = new nQ());
    (hQ.constructor = OZ), XQ(hQ, GQ.prototype), (hQ.isPureReactComponent = !0);
    function $Q() {
      var W = { current: null };
      return Object.seal(W), W;
    }
    var tQ = Array.isArray;
    function BQ(W) {
      return tQ(W);
    }
    function fQ(W) {
      {
        var V = typeof Symbol === "function" && Symbol.toStringTag,
          A = (V && W[Symbol.toStringTag]) || W.constructor.name || "Object";
        return A;
      }
    }
    function mJ(W) {
      try {
        return yJ(W), !1;
      } catch (V) {
        return !0;
      }
    }
    function yJ(W) {
      return "" + W;
    }
    function HJ(W) {
      if (mJ(W))
        return (
          e(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            fQ(W),
          ),
          yJ(W)
        );
    }
    function lJ(W, V, A) {
      var L = W.displayName;
      if (L) return L;
      var S = V.displayName || V.name || "";
      return S !== "" ? A + "(" + S + ")" : A;
    }
    function cJ(W) {
      return W.displayName || "Context";
    }
    function qJ(W) {
      if (W == null) return null;
      if (typeof W.tag === "number")
        e(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof W === "function") return W.displayName || W.name || null;
      if (typeof W === "string") return W;
      switch (W) {
        case BJ:
          return "Fragment";
        case L1:
          return "Portal";
        case AJ:
          return "Profiler";
        case i1:
          return "StrictMode";
        case a:
          return "Suspense";
        case UJ:
          return "SuspenseList";
      }
      if (typeof W === "object")
        switch (W.$$typeof) {
          case pQ:
            var V = W;
            return cJ(V) + ".Consumer";
          case M:
            var A = W;
            return cJ(A._context) + ".Provider";
          case K1:
            return lJ(W, W.render, "ForwardRef");
          case m:
            var L = W.displayName || null;
            if (L !== null) return L;
            return qJ(W.type) || "Memo";
          case O1: {
            var S = W,
              i = S._payload,
              u = S._init;
            try {
              return qJ(u(i));
            } catch (B1) {
              return null;
            }
          }
        }
      return null;
    }
    var DQ = Object.prototype.hasOwnProperty,
      I0 = { key: !0, ref: !0, __self: !0, __source: !0 },
      x0,
      eQ,
      UQ;
    UQ = {};
    function JZ(W) {
      if (DQ.call(W, "ref")) {
        var V = Object.getOwnPropertyDescriptor(W, "ref").get;
        if (V && V.isReactWarning) return !1;
      }
      return W.ref !== void 0;
    }
    function jQ(W) {
      if (DQ.call(W, "key")) {
        var V = Object.getOwnPropertyDescriptor(W, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return W.key !== void 0;
    }
    function QZ(W, V) {
      var A = function () {
        if (!x0)
          (x0 = !0),
            e(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(W, "key", { get: A, configurable: !0 });
    }
    function OJ(W, V) {
      var A = function () {
        if (!eQ)
          (eQ = !0),
            e(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              V,
            );
      };
      (A.isReactWarning = !0),
        Object.defineProperty(W, "ref", { get: A, configurable: !0 });
    }
    function ZZ(W) {
      if (
        typeof W.ref === "string" &&
        r1.current &&
        W.__self &&
        r1.current.stateNode !== W.__self
      ) {
        var V = qJ(r1.current.type);
        if (!UQ[V])
          e(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            V,
            W.ref,
          ),
            (UQ[V] = !0);
      }
    }
    var $Z = function (W, V, A, L, S, i, u) {
      var B1 = { $$typeof: s, type: W, key: V, ref: A, props: u, _owner: i };
      if (
        ((B1._store = {}),
        Object.defineProperty(B1._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(B1, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: L,
        }),
        Object.defineProperty(B1, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S,
        }),
        Object.freeze)
      )
        Object.freeze(B1.props), Object.freeze(B1);
      return B1;
    };
    function rZ(W, V, A) {
      var L,
        S = {},
        i = null,
        u = null,
        B1 = null,
        A1 = null;
      if (V != null) {
        if (JZ(V)) (u = V.ref), ZZ(V);
        if (jQ(V)) HJ(V.key), (i = "" + V.key);
        (B1 = V.__self === void 0 ? null : V.__self),
          (A1 = V.__source === void 0 ? null : V.__source);
        for (L in V) if (DQ.call(V, L) && !I0.hasOwnProperty(L)) S[L] = V[L];
      }
      var b1 = arguments.length - 2;
      if (b1 === 1) S.children = A;
      else if (b1 > 1) {
        var y1 = Array(b1);
        for (var l1 = 0; l1 < b1; l1++) y1[l1] = arguments[l1 + 2];
        if (Object.freeze) Object.freeze(y1);
        S.children = y1;
      }
      if (W && W.defaultProps) {
        var p1 = W.defaultProps;
        for (L in p1) if (S[L] === void 0) S[L] = p1[L];
      }
      if (i || u) {
        var ZJ =
          typeof W === "function" ? W.displayName || W.name || "Unknown" : W;
        if (i) QZ(S, ZJ);
        if (u) OJ(S, ZJ);
      }
      return $Z(W, i, u, B1, A1, r1.current, S);
    }
    function v(W, V) {
      var A = $Z(W.type, V, W.ref, W._self, W._source, W._owner, W.props);
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
        S = XQ({}, W.props),
        i = W.key,
        u = W.ref,
        B1 = W._self,
        A1 = W._source,
        b1 = W._owner;
      if (V != null) {
        if (JZ(V)) (u = V.ref), (b1 = r1.current);
        if (jQ(V)) HJ(V.key), (i = "" + V.key);
        var y1;
        if (W.type && W.type.defaultProps) y1 = W.type.defaultProps;
        for (L in V)
          if (DQ.call(V, L) && !I0.hasOwnProperty(L))
            if (V[L] === void 0 && y1 !== void 0) S[L] = y1[L];
            else S[L] = V[L];
      }
      var l1 = arguments.length - 2;
      if (l1 === 1) S.children = A;
      else if (l1 > 1) {
        var p1 = Array(l1);
        for (var ZJ = 0; ZJ < l1; ZJ++) p1[ZJ] = arguments[ZJ + 2];
        S.children = p1;
      }
      return $Z(W.type, i, u, B1, A1, b1, S);
    }
    function U1(W) {
      return typeof W === "object" && W !== null && W.$$typeof === s;
    }
    var v1 = ".",
      d1 = ":";
    function kJ(W) {
      var V = /[=:]/g,
        A = { "=": "=0", ":": "=2" },
        L = W.replace(V, function (S) {
          return A[S];
        });
      return "$" + L;
    }
    var KJ = !1,
      _Q = /\/+/g;
    function s1(W) {
      return W.replace(_Q, "$&/");
    }
    function PQ(W, V) {
      if (typeof W === "object" && W !== null && W.key != null)
        return HJ(W.key), kJ("" + W.key);
      return V.toString(36);
    }
    function m1(W, V, A, L, S) {
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
              case L1:
                u = !0;
            }
        }
      if (u) {
        var B1 = W,
          A1 = S(B1),
          b1 = L === "" ? v1 + PQ(B1, 0) : L;
        if (BQ(A1)) {
          var y1 = "";
          if (b1 != null) y1 = s1(b1) + "/";
          m1(A1, V, y1, "", function (Y6) {
            return Y6;
          });
        } else if (A1 != null) {
          if (U1(A1)) {
            if (A1.key && (!B1 || B1.key !== A1.key)) HJ(A1.key);
            A1 = v(
              A1,
              A +
                (A1.key && (!B1 || B1.key !== A1.key)
                  ? s1("" + A1.key) + "/"
                  : "") +
                b1,
            );
          }
          V.push(A1);
        }
        return 1;
      }
      var l1,
        p1,
        ZJ = 0,
        RJ = L === "" ? v1 : L + d1;
      if (BQ(W))
        for (var n4 = 0; n4 < W.length; n4++)
          (l1 = W[n4]), (p1 = RJ + PQ(l1, n4)), (ZJ += m1(l1, V, A, p1, S));
      else {
        var LJ = MZ(W);
        if (typeof LJ === "function") {
          var B6 = W;
          if (LJ === B6.entries) {
            if (!KJ)
              a1(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            KJ = !0;
          }
          var p7 = LJ.call(B6),
            U6,
            KX = 0;
          while (!(U6 = p7.next()).done)
            (l1 = U6.value),
              (p1 = RJ + PQ(l1, KX++)),
              (ZJ += m1(l1, V, A, p1, S));
        } else if (i === "object") {
          var J0 = String(W);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (J0 === "[object Object]"
                ? "object with keys {" + Object.keys(W).join(", ") + "}"
                : J0) +
              "). If you meant to render a collection of children, use an array instead.",
          );
        }
      }
      return ZJ;
    }
    function n1(W, V, A) {
      if (W == null) return W;
      var L = [],
        S = 0;
      return (
        m1(W, L, "", "", function (i) {
          return V.call(A, i, S++);
        }),
        L
      );
    }
    function B4(W) {
      var V = 0;
      return (
        n1(W, function () {
          V++;
        }),
        V
      );
    }
    function w0(W, V, A) {
      n1(
        W,
        function () {
          V.apply(this, arguments);
        },
        A,
      );
    }
    function U4(W) {
      return (
        n1(W, function (V) {
          return V;
        }) || []
      );
    }
    function s4(W) {
      if (!U1(W))
        throw new Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return W;
    }
    function c5(W) {
      var V = {
        $$typeof: pQ,
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
        var i = { $$typeof: pQ, _context: V };
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
                a1(
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
    var DZ = -1,
      nZ = 0,
      m4 = 1,
      y4 = 2;
    function Y4(W) {
      if (W._status === DZ) {
        var V = W._result,
          A = V();
        if (
          (A.then(
            function (i) {
              if (W._status === nZ || W._status === DZ) {
                var u = W;
                (u._status = m4), (u._result = i);
              }
            },
            function (i) {
              if (W._status === nZ || W._status === DZ) {
                var u = W;
                (u._status = y4), (u._result = i);
              }
            },
          ),
          W._status === DZ)
        ) {
          var L = W;
          (L._status = nZ), (L._result = A);
        }
      }
      if (W._status === m4) {
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
    function gZ(W) {
      var V = { _status: DZ, _result: W },
        A = { $$typeof: O1, _payload: V, _init: Y4 };
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
      var V = { $$typeof: K1, render: W };
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
        W === BJ ||
        W === AJ ||
        u1 ||
        W === i1 ||
        W === a ||
        W === UJ ||
        EJ ||
        W === c ||
        VZ ||
        YJ ||
        bJ
      )
        return !0;
      if (typeof W === "object" && W !== null) {
        if (
          W.$$typeof === O1 ||
          W.$$typeof === m ||
          W.$$typeof === M ||
          W.$$typeof === pQ ||
          W.$$typeof === K1 ||
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
      var W = dJ.current;
      if (W === null)
        e(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
        );
      return W;
    }
    function S1(W) {
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
    function W1(W) {
      var V = n();
      return V.useState(W);
    }
    function z1(W, V, A) {
      var L = n();
      return L.useReducer(W, V, A);
    }
    function WJ(W) {
      var V = n();
      return V.useRef(W);
    }
    function h1(W, V) {
      var A = n();
      return A.useEffect(W, V);
    }
    function $1(W, V) {
      var A = n();
      return A.useInsertionEffect(W, V);
    }
    function YQ(W, V) {
      var A = n();
      return A.useLayoutEffect(W, V);
    }
    function TZ(W, V) {
      var A = n();
      return A.useCallback(W, V);
    }
    function K4(W, V) {
      var A = n();
      return A.useMemo(W, V);
    }
    function uQ(W, V, A) {
      var L = n();
      return L.useImperativeHandle(W, V, A);
    }
    function e9(W, V) {
      {
        var A = n();
        return A.useDebugValue(W, V);
      }
    }
    function JX() {
      var W = n();
      return W.useTransition();
    }
    function f7(W) {
      var V = n();
      return V.useDeferredValue(W);
    }
    function QX() {
      var W = n();
      return W.useId();
    }
    function tZ(W, V, A) {
      var L = n();
      return L.useSyncExternalStore(W, V, A);
    }
    var M1 = 0,
      _0,
      i5,
      a5,
      p5,
      o5,
      r5,
      n5;
    function t5() {}
    t5.__reactDisabledLog = !0;
    function u7() {
      {
        if (M1 === 0) {
          (_0 = console.log),
            (i5 = console.info),
            (a5 = console.warn),
            (p5 = console.error),
            (o5 = console.group),
            (r5 = console.groupCollapsed),
            (n5 = console.groupEnd);
          var W = { configurable: !0, enumerable: !0, value: t5, writable: !0 };
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
        M1++;
      }
    }
    function ZX() {
      {
        if ((M1--, M1 === 0)) {
          var W = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: XQ({}, W, { value: _0 }),
            info: XQ({}, W, { value: i5 }),
            warn: XQ({}, W, { value: a5 }),
            error: XQ({}, W, { value: p5 }),
            group: XQ({}, W, { value: o5 }),
            groupCollapsed: XQ({}, W, { value: r5 }),
            groupEnd: XQ({}, W, { value: n5 }),
          });
        }
        if (M1 < 0)
          e(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var e5 = Q1.ReactCurrentDispatcher,
      W4;
    function S0(W, V, A) {
      {
        if (W4 === void 0)
          try {
            throw Error();
          } catch (S) {
            var L = S.stack.trim().match(/\n( *(at )?)/);
            W4 = (L && L[1]) || "";
          }
        return "\n" + W4 + W;
      }
    }
    var XZ = !1,
      C0;
    {
      var l4 = typeof WeakMap === "function" ? WeakMap : Map;
      C0 = new l4();
    }
    function d7(W, V) {
      if (!W || XZ) return "";
      {
        var A = C0.get(W);
        if (A !== void 0) return A;
      }
      var L;
      XZ = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      (i = e5.current), (e5.current = null), u7();
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
            } catch (RJ) {
              L = RJ;
            }
            Reflect.construct(W, [], u);
          } else {
            try {
              u.call();
            } catch (RJ) {
              L = RJ;
            }
            W.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (RJ) {
            L = RJ;
          }
          W();
        }
      } catch (RJ) {
        if (RJ && L && typeof RJ.stack === "string") {
          var B1 = RJ.stack.split("\n"),
            A1 = L.stack.split("\n"),
            b1 = B1.length - 1,
            y1 = A1.length - 1;
          while (b1 >= 1 && y1 >= 0 && B1[b1] !== A1[y1]) y1--;
          for (; b1 >= 1 && y1 >= 0; b1--, y1--)
            if (B1[b1] !== A1[y1]) {
              if (b1 !== 1 || y1 !== 1)
                do
                  if ((b1--, y1--, y1 < 0 || B1[b1] !== A1[y1])) {
                    var l1 = "\n" + B1[b1].replace(" at new ", " at ");
                    if (W.displayName && l1.includes("<anonymous>"))
                      l1 = l1.replace("<anonymous>", W.displayName);
                    if (typeof W === "function") C0.set(W, l1);
                    return l1;
                  }
                while (b1 >= 1 && y1 >= 0);
              break;
            }
        }
      } finally {
        (XZ = !1), (e5.current = i), ZX(), (Error.prepareStackTrace = S);
      }
      var p1 = W ? W.displayName || W.name : "",
        ZJ = p1 ? S0(p1) : "";
      if (typeof W === "function") C0.set(W, ZJ);
      return ZJ;
    }
    function J6(W, V, A) {
      return d7(W, !1);
    }
    function XX(W) {
      var V = W.prototype;
      return !!(V && V.isReactComponent);
    }
    function v0(W, V, A) {
      if (W == null) return "";
      if (typeof W === "function") return d7(W, XX(W));
      if (typeof W === "string") return S0(W);
      switch (W) {
        case a:
          return S0("Suspense");
        case UJ:
          return S0("SuspenseList");
      }
      if (typeof W === "object")
        switch (W.$$typeof) {
          case K1:
            return J6(W.render);
          case m:
            return v0(W.type, V, A);
          case O1: {
            var L = W,
              S = L._payload,
              i = L._init;
            try {
              return v0(i(S), V, A);
            } catch (u) {}
          }
        }
      return "";
    }
    var s7 = {},
      c4 = Q1.ReactDebugCurrentFrame;
    function i4(W) {
      if (W) {
        var V = W._owner,
          A = v0(W.type, W._source, V ? V.type : null);
        c4.setExtraStackFrame(A);
      } else c4.setExtraStackFrame(null);
    }
    function m7(W, V, A, L, S) {
      {
        var i = Function.call.bind(DQ);
        for (var u in W)
          if (i(W, u)) {
            var B1 = void 0;
            try {
              if (typeof W[u] !== "function") {
                var A1 = Error(
                  (L || "React class") +
                    ": " +
                    A +
                    " type `" +
                    u +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof W[u] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((A1.name = "Invariant Violation"), A1);
              }
              B1 = W[u](
                V,
                u,
                L,
                A,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (b1) {
              B1 = b1;
            }
            if (B1 && !(B1 instanceof Error))
              i4(S),
                e(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  L || "React class",
                  A,
                  u,
                  typeof B1,
                ),
                i4(null);
            if (B1 instanceof Error && !(B1.message in s7))
              (s7[B1.message] = !0),
                i4(S),
                e("Failed %s type: %s", A, B1.message),
                i4(null);
          }
      }
    }
    function N0(W) {
      if (W) {
        var V = W._owner,
          A = v0(W.type, W._source, V ? V.type : null);
        _1(A);
      } else _1(null);
    }
    var Q6 = !1;
    function f1() {
      if (r1.current) {
        var W = qJ(r1.current.type);
        if (W) return "\n\nCheck the render method of `" + W + "`.";
      }
      return "";
    }
    function GX(W) {
      if (W !== void 0) {
        var V = W.fileName.replace(/^.*[\\\/]/, ""),
          A = W.lineNumber;
        return "\n\nCheck your code at " + V + ":" + A + ".";
      }
      return "";
    }
    function y7(W) {
      if (W !== null && W !== void 0) return GX(W.__source);
      return "";
    }
    var Y1 = {};
    function l7(W) {
      var V = f1();
      if (!V) {
        var A = typeof W === "string" ? W : W.displayName || W.name;
        if (A) V = "\n\nCheck the top-level render call using <" + A + ">.";
      }
      return V;
    }
    function KQ(W, V) {
      if (!W._store || W._store.validated || W.key != null) return;
      W._store.validated = !0;
      var A = l7(V);
      if (Y1[A]) return;
      Y1[A] = !0;
      var L = "";
      if (W && W._owner && W._owner !== r1.current)
        L = " It was passed a child from " + qJ(W._owner.type) + ".";
      N0(W),
        e(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          A,
          L,
        ),
        N0(null);
    }
    function b0(W, V) {
      if (typeof W !== "object") return;
      if (BQ(W))
        for (var A = 0; A < W.length; A++) {
          var L = W[A];
          if (U1(L)) KQ(L, V);
        }
      else if (U1(W)) {
        if (W._store) W._store.validated = !0;
      } else if (W) {
        var S = MZ(W);
        if (typeof S === "function") {
          if (S !== W.entries) {
            var i = S.call(W),
              u;
            while (!(u = i.next()).done) if (U1(u.value)) KQ(u.value, V);
          }
        }
      }
    }
    function k0(W) {
      {
        var V = W.type;
        if (V === null || V === void 0 || typeof V === "string") return;
        var A;
        if (typeof V === "function") A = V.propTypes;
        else if (
          typeof V === "object" &&
          (V.$$typeof === K1 || V.$$typeof === m)
        )
          A = V.propTypes;
        else return;
        if (A) {
          var L = qJ(V);
          m7(A, W.props, "prop", L, W);
        } else if (V.PropTypes !== void 0 && !Q6) {
          Q6 = !0;
          var S = qJ(V);
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
    function BX(W) {
      {
        var V = Object.keys(W.props);
        for (var A = 0; A < V.length; A++) {
          var L = V[A];
          if (L !== "children" && L !== "key") {
            N0(W),
              e(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                L,
              ),
              N0(null);
            break;
          }
        }
        if (W.ref !== null)
          N0(W),
            e("Invalid attribute `ref` supplied to `React.Fragment`."),
            N0(null);
      }
    }
    function gJ(W, V, A) {
      var L = N(W);
      if (!L) {
        var S = "";
        if (
          W === void 0 ||
          (typeof W === "object" && W !== null && Object.keys(W).length === 0)
        )
          S +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        var i = y7(V);
        if (i) S += i;
        else S += f1();
        var u;
        if (W === null) u = "null";
        else if (BQ(W)) u = "array";
        else if (W !== void 0 && W.$$typeof === s)
          (u = "<" + (qJ(W.type) || "Unknown") + " />"),
            (S =
              " Did you accidentally export a JSX literal instead of a component?");
        else u = typeof W;
        e(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          u,
          S,
        );
      }
      var B1 = rZ.apply(this, arguments);
      if (B1 == null) return B1;
      if (L) for (var A1 = 2; A1 < arguments.length; A1++) b0(arguments[A1], W);
      if (W === BJ) BX(B1);
      else k0(B1);
      return B1;
    }
    var JJ = !1;
    function UX(W) {
      var V = gJ.bind(null, W);
      V.type = W;
      {
        if (!JJ)
          (JJ = !0),
            a1(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.",
            );
        Object.defineProperty(V, "type", {
          enumerable: !1,
          get: function () {
            return (
              a1(
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
    function GZ(W, V, A) {
      var L = y.apply(this, arguments);
      for (var S = 2; S < arguments.length; S++) b0(arguments[S], L.type);
      return k0(L), L;
    }
    function SQ(W, V) {
      var A = w1.transition;
      w1.transition = {};
      var L = w1.transition;
      w1.transition._updatedFibers = new Set();
      try {
        W();
      } finally {
        if (((w1.transition = A), A === null && L._updatedFibers)) {
          var S = L._updatedFibers.size;
          if (S > 10)
            a1(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          L._updatedFibers.clear();
        }
      }
    }
    var jZ = !1,
      a4 = null;
    function Z6(W) {
      if (a4 === null)
        try {
          var V = ("require" + Math.random()).slice(0, 7),
            A = n9 && n9[V];
          a4 = A.call(n9, "timers").setImmediate;
        } catch (L) {
          a4 = function (S) {
            if (jZ === !1) {
              if (((jZ = !0), typeof MessageChannel === "undefined"))
                e(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                );
            }
            var i = new MessageChannel();
            (i.port1.onmessage = S), i.port2.postMessage(void 0);
          };
        }
      return a4(W);
    }
    var eZ = 0,
      X6 = !1;
    function YX(W) {
      {
        var V = eZ;
        if ((eZ++, J1.current === null)) J1.current = [];
        var A = J1.isBatchingLegacy,
          L;
        try {
          if (
            ((J1.isBatchingLegacy = !0),
            (L = W()),
            !A && J1.didScheduleLegacyUpdate)
          ) {
            var S = J1.current;
            if (S !== null) (J1.didScheduleLegacyUpdate = !1), o4(S);
          }
        } catch (p1) {
          throw (p4(V), p1);
        } finally {
          J1.isBatchingLegacy = A;
        }
        if (
          L !== null &&
          typeof L === "object" &&
          typeof L.then === "function"
        ) {
          var i = L,
            u = !1,
            B1 = {
              then: function (p1, ZJ) {
                (u = !0),
                  i.then(
                    function (RJ) {
                      if ((p4(V), eZ === 0)) G6(RJ, p1, ZJ);
                      else p1(RJ);
                    },
                    function (RJ) {
                      p4(V), ZJ(RJ);
                    },
                  );
              },
            };
          if (!X6 && typeof Promise !== "undefined")
            Promise.resolve()
              .then(function () {})
              .then(function () {
                if (!u)
                  (X6 = !0),
                    e(
                      "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                    );
              });
          return B1;
        } else {
          var A1 = L;
          if ((p4(V), eZ === 0)) {
            var b1 = J1.current;
            if (b1 !== null) o4(b1), (J1.current = null);
            var y1 = {
              then: function (p1, ZJ) {
                if (J1.current === null) (J1.current = []), G6(A1, p1, ZJ);
                else p1(A1);
              },
            };
            return y1;
          } else {
            var l1 = {
              then: function (p1, ZJ) {
                p1(A1);
              },
            };
            return l1;
          }
        }
      }
    }
    function p4(W) {
      {
        if (W !== eZ - 1)
          e(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
          );
        eZ = W;
      }
    }
    function G6(W, V, A) {
      {
        var L = J1.current;
        if (L !== null)
          try {
            o4(L),
              Z6(function () {
                if (L.length === 0) (J1.current = null), V(W);
                else G6(W, V, A);
              });
          } catch (S) {
            A(S);
          }
        else V(W);
      }
    }
    var g0 = !1;
    function o4(W) {
      if (!g0) {
        g0 = !0;
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
          g0 = !1;
        }
      }
    }
    var r4 = gJ,
      c7 = GZ,
      i7 = UX,
      a7 = { map: n1, forEach: w0, count: B4, toArray: U4, only: s4 };
    if (
      ((YA.Children = a7),
      (YA.Component = GQ),
      (YA.Fragment = BJ),
      (YA.Profiler = AJ),
      (YA.PureComponent = OZ),
      (YA.StrictMode = i1),
      (YA.Suspense = a),
      (YA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1),
      (YA.cloneElement = c7),
      (YA.createContext = c5),
      (YA.createElement = r4),
      (YA.createFactory = i7),
      (YA.createRef = $Q),
      (YA.forwardRef = q),
      (YA.isValidElement = U1),
      (YA.lazy = gZ),
      (YA.memo = p),
      (YA.startTransition = SQ),
      (YA.unstable_act = YX),
      (YA.useCallback = TZ),
      (YA.useContext = S1),
      (YA.useDebugValue = e9),
      (YA.useDeferredValue = f7),
      (YA.useEffect = h1),
      (YA.useId = QX),
      (YA.useImperativeHandle = uQ),
      (YA.useInsertionEffect = $1),
      (YA.useLayoutEffect = YQ),
      (YA.useMemo = K4),
      (YA.useReducer = z1),
      (YA.useRef = WJ),
      (YA.useState = W1),
      (YA.useSyncExternalStore = tZ),
      (YA.useTransition = JX),
      (YA.version = R1),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var R3 = g7((KA) => {
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var R1 = !1,
      s = !1,
      L1 = 5;
    function BJ(v, y) {
      var U1 = v.length;
      v.push(y), M(v, y, U1);
    }
    function i1(v) {
      return v.length === 0 ? null : v[0];
    }
    function AJ(v) {
      if (v.length === 0) return null;
      var y = v[0],
        U1 = v.pop();
      if (U1 !== y) (v[0] = U1), pQ(v, U1, 0);
      return y;
    }
    function M(v, y, U1) {
      var v1 = U1;
      while (v1 > 0) {
        var d1 = (v1 - 1) >>> 1,
          kJ = v[d1];
        if (K1(kJ, y) > 0) (v[d1] = y), (v[v1] = kJ), (v1 = d1);
        else return;
      }
    }
    function pQ(v, y, U1) {
      var v1 = U1,
        d1 = v.length,
        kJ = d1 >>> 1;
      while (v1 < kJ) {
        var KJ = (v1 + 1) * 2 - 1,
          _Q = v[KJ],
          s1 = KJ + 1,
          PQ = v[s1];
        if (K1(_Q, y) < 0)
          if (s1 < d1 && K1(PQ, _Q) < 0) (v[v1] = PQ), (v[s1] = y), (v1 = s1);
          else (v[v1] = _Q), (v[KJ] = y), (v1 = KJ);
        else if (s1 < d1 && K1(PQ, y) < 0) (v[v1] = PQ), (v[s1] = y), (v1 = s1);
        else return;
      }
    }
    function K1(v, y) {
      var U1 = v.sortIndex - y.sortIndex;
      return U1 !== 0 ? U1 : v.id - y.id;
    }
    var a = 1,
      UJ = 2,
      m = 3,
      O1 = 4,
      c = 5;
    function x1(v, y) {}
    var oQ =
      typeof performance === "object" && typeof performance.now === "function";
    if (oQ) {
      var MZ = performance;
      KA.unstable_now = function () {
        return MZ.now();
      };
    } else {
      var dJ = Date,
        w1 = dJ.now();
      KA.unstable_now = function () {
        return dJ.now() - w1;
      };
    }
    var J1 = 1073741823,
      r1 = -1,
      P1 = 250,
      VJ = 5000,
      _1 = 1e4,
      VZ = J1,
      YJ = [],
      bJ = [],
      EJ = 1,
      u1 = null,
      Q1 = m,
      a1 = !1,
      e = !1,
      OQ = !1,
      bZ = typeof setTimeout === "function" ? setTimeout : null,
      sJ = typeof clearTimeout === "function" ? clearTimeout : null,
      qZ = typeof setImmediate !== "undefined" ? setImmediate : null,
      XQ =
        typeof navigator !== "undefined" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0
          ? navigator.scheduling.isInputPending.bind(navigator.scheduling)
          : null;
    function rQ(v) {
      var y = i1(bJ);
      while (y !== null) {
        if (y.callback === null) AJ(bJ);
        else if (y.startTime <= v)
          AJ(bJ), (y.sortIndex = y.expirationTime), BJ(YJ, y);
        else return;
        y = i1(bJ);
      }
    }
    function GQ(v) {
      if (((OQ = !1), rQ(v), !e))
        if (i1(YJ) !== null) (e = !0), QZ(wQ);
        else {
          var y = i1(bJ);
          if (y !== null) OJ(GQ, y.startTime - v);
        }
    }
    function wQ(v, y) {
      if (((e = !1), OQ)) (OQ = !1), ZZ();
      a1 = !0;
      var U1 = Q1;
      try {
        if (s)
          try {
            return F0(v, y);
          } catch (d1) {
            if (u1 !== null) {
              var v1 = KA.unstable_now();
              x1(u1, v1), (u1.isQueued = !1);
            }
            throw d1;
          }
        else return F0(v, y);
      } finally {
        (u1 = null), (Q1 = U1), (a1 = !1);
      }
    }
    function F0(v, y) {
      var U1 = y;
      rQ(U1), (u1 = i1(YJ));
      while (u1 !== null && !R1) {
        if (u1.expirationTime > U1 && (!v || DQ())) break;
        var v1 = u1.callback;
        if (typeof v1 === "function") {
          (u1.callback = null), (Q1 = u1.priorityLevel);
          var d1 = u1.expirationTime <= U1,
            kJ = v1(d1);
          if (((U1 = KA.unstable_now()), typeof kJ === "function"))
            u1.callback = kJ;
          else if (u1 === i1(YJ)) AJ(YJ);
          rQ(U1);
        } else AJ(YJ);
        u1 = i1(YJ);
      }
      if (u1 !== null) return !0;
      else {
        var KJ = i1(bJ);
        if (KJ !== null) OJ(GQ, KJ.startTime - U1);
        return !1;
      }
    }
    function kZ(v, y) {
      switch (v) {
        case a:
        case UJ:
        case m:
        case O1:
        case c:
          break;
        default:
          v = m;
      }
      var U1 = Q1;
      Q1 = v;
      try {
        return y();
      } finally {
        Q1 = U1;
      }
    }
    function nQ(v) {
      var y;
      switch (Q1) {
        case a:
        case UJ:
        case m:
          y = m;
          break;
        default:
          y = Q1;
          break;
      }
      var U1 = Q1;
      Q1 = y;
      try {
        return v();
      } finally {
        Q1 = U1;
      }
    }
    function OZ(v) {
      var y = Q1;
      return function () {
        var U1 = Q1;
        Q1 = y;
        try {
          return v.apply(this, arguments);
        } finally {
          Q1 = U1;
        }
      };
    }
    function hQ(v, y, U1) {
      var v1 = KA.unstable_now(),
        d1;
      if (typeof U1 === "object" && U1 !== null) {
        var kJ = U1.delay;
        if (typeof kJ === "number" && kJ > 0) d1 = v1 + kJ;
        else d1 = v1;
      } else d1 = v1;
      var KJ;
      switch (v) {
        case a:
          KJ = r1;
          break;
        case UJ:
          KJ = P1;
          break;
        case c:
          KJ = VZ;
          break;
        case O1:
          KJ = _1;
          break;
        case m:
        default:
          KJ = VJ;
          break;
      }
      var _Q = d1 + KJ,
        s1 = {
          id: EJ++,
          callback: y,
          priorityLevel: v,
          startTime: d1,
          expirationTime: _Q,
          sortIndex: -1,
        };
      if (d1 > v1) {
        if (
          ((s1.sortIndex = d1), BJ(bJ, s1), i1(YJ) === null && s1 === i1(bJ))
        ) {
          if (OQ) ZZ();
          else OQ = !0;
          OJ(GQ, d1 - v1);
        }
      } else if (((s1.sortIndex = _Q), BJ(YJ, s1), !e && !a1)) (e = !0), QZ(wQ);
      return s1;
    }
    function $Q() {}
    function tQ() {
      if (!e && !a1) (e = !0), QZ(wQ);
    }
    function BQ() {
      return i1(YJ);
    }
    function fQ(v) {
      v.callback = null;
    }
    function mJ() {
      return Q1;
    }
    var yJ = !1,
      HJ = null,
      lJ = -1,
      cJ = L1,
      qJ = -1;
    function DQ() {
      var v = KA.unstable_now() - qJ;
      if (v < cJ) return !1;
      return !0;
    }
    function I0() {}
    function x0(v) {
      if (v < 0 || v > 125) {
        console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        );
        return;
      }
      if (v > 0) cJ = Math.floor(1000 / v);
      else cJ = L1;
    }
    var eQ = function () {
        if (HJ !== null) {
          var v = KA.unstable_now();
          qJ = v;
          var y = !0,
            U1 = !0;
          try {
            U1 = HJ(y, v);
          } finally {
            if (U1) UQ();
            else (yJ = !1), (HJ = null);
          }
        } else yJ = !1;
      },
      UQ;
    if (typeof qZ === "function")
      UQ = function () {
        qZ(eQ);
      };
    else if (typeof MessageChannel !== "undefined") {
      var JZ = new MessageChannel(),
        jQ = JZ.port2;
      (JZ.port1.onmessage = eQ),
        (UQ = function () {
          jQ.postMessage(null);
        });
    } else
      UQ = function () {
        bZ(eQ, 0);
      };
    function QZ(v) {
      if (((HJ = v), !yJ)) (yJ = !0), UQ();
    }
    function OJ(v, y) {
      lJ = bZ(function () {
        v(KA.unstable_now());
      }, y);
    }
    function ZZ() {
      sJ(lJ), (lJ = -1);
    }
    var $Z = I0,
      rZ = null;
    if (
      ((KA.unstable_IdlePriority = c),
      (KA.unstable_ImmediatePriority = a),
      (KA.unstable_LowPriority = O1),
      (KA.unstable_NormalPriority = m),
      (KA.unstable_Profiling = rZ),
      (KA.unstable_UserBlockingPriority = UJ),
      (KA.unstable_cancelCallback = fQ),
      (KA.unstable_continueExecution = tQ),
      (KA.unstable_forceFrameRate = x0),
      (KA.unstable_getCurrentPriorityLevel = mJ),
      (KA.unstable_getFirstCallbackNode = BQ),
      (KA.unstable_next = nQ),
      (KA.unstable_pauseExecution = $Q),
      (KA.unstable_requestPaint = $Z),
      (KA.unstable_runWithPriority = kZ),
      (KA.unstable_scheduleCallback = hQ),
      (KA.unstable_shouldYield = DQ),
      (KA.unstable_wrapCallback = OZ),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var L3 = g7((WA) => {
  var R1 = e1(T7(), 1),
    s = e1(R3(), 1);
  (function () {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        "function"
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var L1 = R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      BJ = !1;
    function i1(J) {
      BJ = J;
    }
    function AJ(J) {
      if (!BJ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        pQ("warn", J, Z);
      }
    }
    function M(J) {
      if (!BJ) {
        for (
          var Q = arguments.length, Z = new Array(Q > 1 ? Q - 1 : 0), X = 1;
          X < Q;
          X++
        )
          Z[X - 1] = arguments[X];
        pQ("error", J, Z);
      }
    }
    function pQ(J, Q, Z) {
      {
        var X = L1.ReactDebugCurrentFrame,
          G = X.getStackAddendum();
        if (G !== "") (Q += "%s"), (Z = Z.concat([G]));
        var B = Z.map(function (U) {
          return String(U);
        });
        B.unshift("Warning: " + Q),
          Function.prototype.apply.call(console[J], console, B);
      }
    }
    var K1 = 0,
      a = 1,
      UJ = 2,
      m = 3,
      O1 = 4,
      c = 5,
      x1 = 6,
      oQ = 7,
      MZ = 8,
      dJ = 9,
      w1 = 10,
      J1 = 11,
      r1 = 12,
      P1 = 13,
      VJ = 14,
      _1 = 15,
      VZ = 16,
      YJ = 17,
      bJ = 18,
      EJ = 19,
      u1 = 21,
      Q1 = 22,
      a1 = 23,
      e = 24,
      OQ = 25,
      bZ = !0,
      sJ = !1,
      qZ = !1,
      XQ = !1,
      rQ = !1,
      GQ = !0,
      wQ = !1,
      F0 = !1,
      kZ = !0,
      nQ = !0,
      OZ = !0,
      hQ = new Set(),
      $Q = {},
      tQ = {};
    function BQ(J, Q) {
      fQ(J, Q), fQ(J + "Capture", Q);
    }
    function fQ(J, Q) {
      if ($Q[J])
        M(
          "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
          J,
        );
      $Q[J] = Q;
      {
        var Z = J.toLowerCase();
        if (((tQ[Z] = J), J === "onDoubleClick")) tQ.ondblclick = J;
      }
      for (var X = 0; X < Q.length; X++) hQ.add(Q[X]);
    }
    var mJ =
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        typeof window.document.createElement !== "undefined",
      yJ = Object.prototype.hasOwnProperty;
    function HJ(J) {
      {
        var Q = typeof Symbol === "function" && Symbol.toStringTag,
          Z = (Q && J[Symbol.toStringTag]) || J.constructor.name || "Object";
        return Z;
      }
    }
    function lJ(J) {
      try {
        return cJ(J), !1;
      } catch (Q) {
        return !0;
      }
    }
    function cJ(J) {
      return "" + J;
    }
    function qJ(J, Q) {
      if (lJ(J))
        return (
          M(
            "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HJ(J),
          ),
          cJ(J)
        );
    }
    function DQ(J) {
      if (lJ(J))
        return (
          M(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            HJ(J),
          ),
          cJ(J)
        );
    }
    function I0(J, Q) {
      if (lJ(J))
        return (
          M(
            "The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HJ(J),
          ),
          cJ(J)
        );
    }
    function x0(J, Q) {
      if (lJ(J))
        return (
          M(
            "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
            Q,
            HJ(J),
          ),
          cJ(J)
        );
    }
    function eQ(J) {
      if (lJ(J))
        return (
          M(
            "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
            HJ(J),
          ),
          cJ(J)
        );
    }
    function UQ(J) {
      if (lJ(J))
        return (
          M(
            "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",
            HJ(J),
          ),
          cJ(J)
        );
    }
    var JZ = 0,
      jQ = 1,
      QZ = 2,
      OJ = 3,
      ZZ = 4,
      $Z = 5,
      rZ = 6,
      v =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      y = v + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
      U1 = new RegExp("^[" + v + "][" + y + "]*$"),
      v1 = {},
      d1 = {};
    function kJ(J) {
      if (yJ.call(d1, J)) return !0;
      if (yJ.call(v1, J)) return !1;
      if (U1.test(J)) return (d1[J] = !0), !0;
      return (v1[J] = !0), M("Invalid attribute name: `%s`", J), !1;
    }
    function KJ(J, Q, Z) {
      if (Q !== null) return Q.type === JZ;
      if (Z) return !1;
      if (
        J.length > 2 &&
        (J[0] === "o" || J[0] === "O") &&
        (J[1] === "n" || J[1] === "N")
      )
        return !0;
      return !1;
    }
    function _Q(J, Q, Z, X) {
      if (Z !== null && Z.type === JZ) return !1;
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
    function s1(J, Q, Z, X) {
      if (Q === null || typeof Q === "undefined") return !0;
      if (_Q(J, Q, Z, X)) return !0;
      if (X) return !1;
      if (Z !== null)
        switch (Z.type) {
          case OJ:
            return !Q;
          case ZZ:
            return Q === !1;
          case $Z:
            return isNaN(Q);
          case rZ:
            return isNaN(Q) || Q < 1;
        }
      return !1;
    }
    function PQ(J) {
      return n1.hasOwnProperty(J) ? n1[J] : null;
    }
    function m1(J, Q, Z, X, G, B, U) {
      (this.acceptsBooleans = Q === QZ || Q === OJ || Q === ZZ),
        (this.attributeName = X),
        (this.attributeNamespace = G),
        (this.mustUseProperty = Z),
        (this.propertyName = J),
        (this.type = Q),
        (this.sanitizeURL = B),
        (this.removeEmptyString = U);
    }
    var n1 = {},
      B4 = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ];
    B4.forEach(function (J) {
      n1[J] = new m1(J, JZ, !1, J, null, !1, !1);
    }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (J) {
        var Q = J[0],
          Z = J[1];
        n1[Q] = new m1(Q, jQ, !1, Z, null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(
        function (J) {
          n1[J] = new m1(J, QZ, !1, J.toLowerCase(), null, !1, !1);
        },
      ),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (J) {
        n1[J] = new m1(J, QZ, !1, J, null, !1, !1);
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
        n1[J] = new m1(J, OJ, !1, J.toLowerCase(), null, !1, !1);
      }),
      ["checked", "multiple", "muted", "selected"].forEach(function (J) {
        n1[J] = new m1(J, OJ, !0, J, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (J) {
        n1[J] = new m1(J, ZZ, !1, J, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (J) {
        n1[J] = new m1(J, rZ, !1, J, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (J) {
        n1[J] = new m1(J, $Z, !1, J.toLowerCase(), null, !1, !1);
      });
    var w0 = /[\-\:]([a-z])/g,
      U4 = function (J) {
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
      var Q = J.replace(w0, U4);
      n1[Q] = new m1(Q, jQ, !1, J, null, !1, !1);
    }),
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type",
      ].forEach(function (J) {
        var Q = J.replace(w0, U4);
        n1[Q] = new m1(Q, jQ, !1, J, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (J) {
        var Q = J.replace(w0, U4);
        n1[Q] = new m1(
          Q,
          jQ,
          !1,
          J,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1,
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (J) {
        n1[J] = new m1(J, jQ, !1, J.toLowerCase(), null, !1, !1);
      });
    var s4 = "xlinkHref";
    (n1[s4] = new m1(
      "xlinkHref",
      jQ,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
      ["src", "href", "action", "formAction"].forEach(function (J) {
        n1[J] = new m1(J, jQ, !1, J.toLowerCase(), null, !0, !0);
      });
    var c5 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
      DZ = !1;
    function nZ(J) {
      if (!DZ && c5.test(J))
        (DZ = !0),
          M(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(J),
          );
    }
    function m4(J, Q, Z, X) {
      if (X.mustUseProperty) {
        var G = X.propertyName;
        return J[G];
      } else {
        if ((qJ(Z, Q), X.sanitizeURL)) nZ("" + Z);
        var B = X.attributeName,
          U = null;
        if (X.type === ZZ) {
          if (J.hasAttribute(B)) {
            var Y = J.getAttribute(B);
            if (Y === "") return !0;
            if (s1(Q, Z, X, !1)) return Y;
            if (Y === "" + Z) return Z;
            return Y;
          }
        } else if (J.hasAttribute(B)) {
          if (s1(Q, Z, X, !1)) return J.getAttribute(B);
          if (X.type === OJ) return Z;
          U = J.getAttribute(B);
        }
        if (s1(Q, Z, X, !1)) return U === null ? Z : U;
        else if (U === "" + Z) return Z;
        else return U;
      }
    }
    function y4(J, Q, Z, X) {
      {
        if (!kJ(Q)) return;
        if (!J.hasAttribute(Q)) return Z === void 0 ? void 0 : null;
        var G = J.getAttribute(Q);
        if ((qJ(Z, Q), G === "" + Z)) return Z;
        return G;
      }
    }
    function Y4(J, Q, Z, X) {
      var G = PQ(Q);
      if (KJ(Q, G, X)) return;
      if (s1(Q, Z, G, X)) Z = null;
      if (X || G === null) {
        if (kJ(Q)) {
          var B = Q;
          if (Z === null) J.removeAttribute(B);
          else qJ(Z, Q), J.setAttribute(B, "" + Z);
        }
        return;
      }
      var U = G.mustUseProperty;
      if (U) {
        var Y = G.propertyName;
        if (Z === null) {
          var K = G.type;
          J[Y] = K === OJ ? !1 : "";
        } else J[Y] = Z;
        return;
      }
      var { attributeName: z, attributeNamespace: H } = G;
      if (Z === null) J.removeAttribute(z);
      else {
        var $ = G.type,
          O;
        if ($ === OJ || ($ === ZZ && Z === !0)) O = "";
        else if ((qJ(Z, z), (O = "" + Z), G.sanitizeURL)) nZ(O.toString());
        if (H) J.setAttributeNS(H, z, O);
        else J.setAttribute(z, O);
      }
    }
    var gZ = Symbol.for("react.element"),
      q = Symbol.for("react.portal"),
      w = Symbol.for("react.fragment"),
      N = Symbol.for("react.strict_mode"),
      p = Symbol.for("react.profiler"),
      n = Symbol.for("react.provider"),
      S1 = Symbol.for("react.context"),
      W1 = Symbol.for("react.forward_ref"),
      z1 = Symbol.for("react.suspense"),
      WJ = Symbol.for("react.suspense_list"),
      h1 = Symbol.for("react.memo"),
      $1 = Symbol.for("react.lazy"),
      YQ = Symbol.for("react.scope"),
      TZ = Symbol.for("react.debug_trace_mode"),
      K4 = Symbol.for("react.offscreen"),
      uQ = Symbol.for("react.legacy_hidden"),
      e9 = Symbol.for("react.cache"),
      JX = Symbol.for("react.tracing_marker"),
      f7 = Symbol.iterator,
      QX = "@@iterator";
    function tZ(J) {
      if (J === null || typeof J !== "object") return null;
      var Q = (f7 && J[f7]) || J[QX];
      if (typeof Q === "function") return Q;
      return null;
    }
    var M1 = Object.assign,
      _0 = 0,
      i5,
      a5,
      p5,
      o5,
      r5,
      n5,
      t5;
    function u7() {}
    u7.__reactDisabledLog = !0;
    function ZX() {
      {
        if (_0 === 0) {
          (i5 = console.log),
            (a5 = console.info),
            (p5 = console.warn),
            (o5 = console.error),
            (r5 = console.group),
            (n5 = console.groupCollapsed),
            (t5 = console.groupEnd);
          var J = { configurable: !0, enumerable: !0, value: u7, writable: !0 };
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
        _0++;
      }
    }
    function e5() {
      {
        if ((_0--, _0 === 0)) {
          var J = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: M1({}, J, { value: i5 }),
            info: M1({}, J, { value: a5 }),
            warn: M1({}, J, { value: p5 }),
            error: M1({}, J, { value: o5 }),
            group: M1({}, J, { value: r5 }),
            groupCollapsed: M1({}, J, { value: n5 }),
            groupEnd: M1({}, J, { value: t5 }),
          });
        }
        if (_0 < 0)
          M(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var W4 = L1.ReactCurrentDispatcher,
      S0;
    function XZ(J, Q, Z) {
      {
        if (S0 === void 0)
          try {
            throw Error();
          } catch (G) {
            var X = G.stack.trim().match(/\n( *(at )?)/);
            S0 = (X && X[1]) || "";
          }
        return "\n" + S0 + J;
      }
    }
    var C0 = !1,
      l4;
    {
      var d7 = typeof WeakMap === "function" ? WeakMap : Map;
      l4 = new d7();
    }
    function J6(J, Q) {
      if (!J || C0) return "";
      {
        var Z = l4.get(J);
        if (Z !== void 0) return Z;
      }
      var X;
      C0 = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      (B = W4.current), (W4.current = null), ZX();
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
            z = Y.length - 1,
            H = K.length - 1;
          while (z >= 1 && H >= 0 && Y[z] !== K[H]) H--;
          for (; z >= 1 && H >= 0; z--, H--)
            if (Y[z] !== K[H]) {
              if (z !== 1 || H !== 1)
                do
                  if ((z--, H--, H < 0 || Y[z] !== K[H])) {
                    var $ = "\n" + Y[z].replace(" at new ", " at ");
                    if (J.displayName && $.includes("<anonymous>"))
                      $ = $.replace("<anonymous>", J.displayName);
                    if (typeof J === "function") l4.set(J, $);
                    return $;
                  }
                while (z >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        (C0 = !1), (W4.current = B), e5(), (Error.prepareStackTrace = G);
      }
      var O = J ? J.displayName || J.name : "",
        E = O ? XZ(O) : "";
      if (typeof J === "function") l4.set(J, E);
      return E;
    }
    function XX(J, Q, Z) {
      return J6(J, !0);
    }
    function v0(J, Q, Z) {
      return J6(J, !1);
    }
    function s7(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function c4(J, Q, Z) {
      if (J == null) return "";
      if (typeof J === "function") return J6(J, s7(J));
      if (typeof J === "string") return XZ(J);
      switch (J) {
        case z1:
          return XZ("Suspense");
        case WJ:
          return XZ("SuspenseList");
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case W1:
            return v0(J.render);
          case h1:
            return c4(J.type, Q, Z);
          case $1: {
            var X = J,
              G = X._payload,
              B = X._init;
            try {
              return c4(B(G), Q, Z);
            } catch (U) {}
          }
        }
      return "";
    }
    function i4(J) {
      var Q = J._debugOwner ? J._debugOwner.type : null,
        Z = J._debugSource;
      switch (J.tag) {
        case c:
          return XZ(J.type);
        case VZ:
          return XZ("Lazy");
        case P1:
          return XZ("Suspense");
        case EJ:
          return XZ("SuspenseList");
        case K1:
        case UJ:
        case _1:
          return v0(J.type);
        case J1:
          return v0(J.type.render);
        case a:
          return XX(J.type);
        default:
          return "";
      }
    }
    function m7(J) {
      try {
        var Q = "",
          Z = J;
        do (Q += i4(Z)), (Z = Z.return);
        while (Z);
        return Q;
      } catch (X) {
        return "\nError generating stack: " + X.message + "\n" + X.stack;
      }
    }
    function N0(J, Q, Z) {
      var X = J.displayName;
      if (X) return X;
      var G = Q.displayName || Q.name || "";
      return G !== "" ? Z + "(" + G + ")" : Z;
    }
    function Q6(J) {
      return J.displayName || "Context";
    }
    function f1(J) {
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
        case z1:
          return "Suspense";
        case WJ:
          return "SuspenseList";
      }
      if (typeof J === "object")
        switch (J.$$typeof) {
          case S1:
            var Q = J;
            return Q6(Q) + ".Consumer";
          case n:
            var Z = J;
            return Q6(Z._context) + ".Provider";
          case W1:
            return N0(J, J.render, "ForwardRef");
          case h1:
            var X = J.displayName || null;
            if (X !== null) return X;
            return f1(J.type) || "Memo";
          case $1: {
            var G = J,
              B = G._payload,
              U = G._init;
            try {
              return f1(U(B));
            } catch (Y) {
              return null;
            }
          }
        }
      return null;
    }
    function GX(J, Q, Z) {
      var X = Q.displayName || Q.name || "";
      return J.displayName || (X !== "" ? Z + "(" + X + ")" : Z);
    }
    function y7(J) {
      return J.displayName || "Context";
    }
    function Y1(J) {
      var { tag: Q, type: Z } = J;
      switch (Q) {
        case e:
          return "Cache";
        case dJ:
          var X = Z;
          return y7(X) + ".Consumer";
        case w1:
          var G = Z;
          return y7(G._context) + ".Provider";
        case bJ:
          return "DehydratedFragment";
        case J1:
          return GX(Z, Z.render, "ForwardRef");
        case oQ:
          return "Fragment";
        case c:
          return Z;
        case O1:
          return "Portal";
        case m:
          return "Root";
        case x1:
          return "Text";
        case VZ:
          return f1(Z);
        case MZ:
          if (Z === N) return "StrictMode";
          return "Mode";
        case Q1:
          return "Offscreen";
        case r1:
          return "Profiler";
        case u1:
          return "Scope";
        case P1:
          return "Suspense";
        case EJ:
          return "SuspenseList";
        case OQ:
          return "TracingMarker";
        case a:
        case K1:
        case YJ:
        case UJ:
        case VJ:
        case _1:
          if (typeof Z === "function") return Z.displayName || Z.name || null;
          if (typeof Z === "string") return Z;
          break;
      }
      return null;
    }
    var l7 = L1.ReactDebugCurrentFrame,
      KQ = null,
      b0 = !1;
    function k0() {
      {
        if (KQ === null) return null;
        var J = KQ._debugOwner;
        if (J !== null && typeof J !== "undefined") return Y1(J);
      }
      return null;
    }
    function BX() {
      {
        if (KQ === null) return "";
        return m7(KQ);
      }
    }
    function gJ() {
      (l7.getCurrentStack = null), (KQ = null), (b0 = !1);
    }
    function JJ(J) {
      (l7.getCurrentStack = J === null ? null : BX), (KQ = J), (b0 = !1);
    }
    function UX() {
      return KQ;
    }
    function GZ(J) {
      b0 = J;
    }
    function SQ(J) {
      return "" + J;
    }
    function jZ(J) {
      switch (typeof J) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return J;
        case "object":
          return UQ(J), J;
        default:
          return "";
      }
    }
    var a4 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0,
    };
    function Z6(J, Q) {
      {
        if (
          !(
            a4[Q.type] ||
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
    function eZ(J) {
      var { type: Q, nodeName: Z } = J;
      return (
        Z && Z.toLowerCase() === "input" && (Q === "checkbox" || Q === "radio")
      );
    }
    function X6(J) {
      return J._valueTracker;
    }
    function YX(J) {
      J._valueTracker = null;
    }
    function p4(J) {
      var Q = "";
      if (!J) return Q;
      if (eZ(J)) Q = J.checked ? "true" : "false";
      else Q = J.value;
      return Q;
    }
    function G6(J) {
      var Q = eZ(J) ? "checked" : "value",
        Z = Object.getOwnPropertyDescriptor(J.constructor.prototype, Q);
      UQ(J[Q]);
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
          UQ(Y), (X = "" + Y), B.call(this, Y);
        },
      }),
        Object.defineProperty(J, Q, { enumerable: Z.enumerable });
      var U = {
        getValue: function () {
          return X;
        },
        setValue: function (Y) {
          UQ(Y), (X = "" + Y);
        },
        stopTracking: function () {
          YX(J), delete J[Q];
        },
      };
      return U;
    }
    function g0(J) {
      if (X6(J)) return;
      J._valueTracker = G6(J);
    }
    function o4(J) {
      if (!J) return !1;
      var Q = X6(J);
      if (!Q) return !0;
      var Z = Q.getValue(),
        X = p4(J);
      if (X !== Z) return Q.setValue(X), !0;
      return !1;
    }
    function r4(J) {
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
    var c7 = !1,
      i7 = !1,
      a7 = !1,
      W = !1;
    function V(J) {
      var Q = J.type === "checkbox" || J.type === "radio";
      return Q ? J.checked != null : J.value != null;
    }
    function A(J, Q) {
      var Z = J,
        X = Q.checked,
        G = M1({}, Q, {
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
          (Z6("input", Q),
          Q.checked !== void 0 && Q.defaultChecked !== void 0 && !i7)
        )
          M(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-componentsInput elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            k0() || "A component",
            Q.type,
          ),
            (i7 = !0);
        if (Q.value !== void 0 && Q.defaultValue !== void 0 && !c7)
          M(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
            k0() || "A component",
            Q.type,
          ),
            (c7 = !0);
      }
      var Z = J,
        X = Q.defaultValue == null ? "" : Q.defaultValue;
      Z._wrapperState = {
        initialChecked: Q.checked != null ? Q.checked : Q.defaultChecked,
        initialValue: jZ(Q.value != null ? Q.value : X),
        controlled: V(Q),
      };
    }
    function S(J, Q) {
      var Z = J,
        X = Q.checked;
      if (X != null) Y4(Z, "checked", X, !1);
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
        if (Z._wrapperState.controlled && !X && !a7)
          M(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components",
          ),
            (a7 = !0);
      }
      S(J, Q);
      var G = jZ(Q.value),
        B = Q.type;
      if (G != null) {
        if (B === "number") {
          if ((G === 0 && Z.value === "") || Z.value != G) Z.value = SQ(G);
        } else if (Z.value !== SQ(G)) Z.value = SQ(G);
      } else if (B === "submit" || B === "reset") {
        Z.removeAttribute("value");
        return;
      }
      if (Q.hasOwnProperty("value")) b1(Z, Q.type, G);
      else if (Q.hasOwnProperty("defaultValue"))
        b1(Z, Q.type, jZ(Q.defaultValue));
      if (Q.checked == null && Q.defaultChecked != null)
        Z.defaultChecked = !!Q.defaultChecked;
    }
    function u(J, Q, Z) {
      var X = J;
      if (Q.hasOwnProperty("value") || Q.hasOwnProperty("defaultValue")) {
        var G = Q.type,
          B = G === "submit" || G === "reset";
        if (B && (Q.value === void 0 || Q.value === null)) return;
        var U = SQ(X._wrapperState.initialValue);
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
    function B1(J, Q) {
      var Z = J;
      i(Z, Q), A1(Z, Q);
    }
    function A1(J, Q) {
      var Z = Q.name;
      if (Q.type === "radio" && Z != null) {
        var X = J;
        while (X.parentNode) X = X.parentNode;
        qJ(Z, "name");
        var G = X.querySelectorAll(
          "input[name=" + JSON.stringify("" + Z) + '][type="radio"]',
        );
        for (var B = 0; B < G.length; B++) {
          var U = G[B];
          if (U === J || U.form !== J.form) continue;
          var Y = g8(U);
          if (!Y)
            throw new Error(
              "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.",
            );
          o4(U), i(U, Y);
        }
      }
    }
    function b1(J, Q, Z) {
      if (Q !== "number" || r4(J.ownerDocument) !== J) {
        if (Z == null) J.defaultValue = SQ(J._wrapperState.initialValue);
        else if (J.defaultValue !== SQ(Z)) J.defaultValue = SQ(Z);
      }
    }
    var y1 = !1,
      l1 = !1,
      p1 = !1;
    function ZJ(J, Q) {
      {
        if (Q.value == null) {
          if (typeof Q.children === "object" && Q.children !== null)
            R1.Children.forEach(Q.children, function (Z) {
              if (Z == null) return;
              if (typeof Z === "string" || typeof Z === "number") return;
              if (!l1)
                (l1 = !0),
                  M(
                    "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.",
                  );
            });
          else if (Q.dangerouslySetInnerHTML != null) {
            if (!p1)
              (p1 = !0),
                M(
                  "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.",
                );
          }
        }
        if (Q.selected != null && !y1)
          M(
            "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.",
          ),
            (y1 = !0);
      }
    }
    function RJ(J, Q) {
      if (Q.value != null) J.setAttribute("value", SQ(jZ(Q.value)));
    }
    var n4 = Array.isArray;
    function LJ(J) {
      return n4(J);
    }
    var B6 = !1;
    function p7() {
      var J = k0();
      if (J) return "\n\nCheck the render method of `" + J + "`.";
      return "";
    }
    var U6 = ["value", "defaultValue"];
    function KX(J) {
      {
        Z6("select", J);
        for (var Q = 0; Q < U6.length; Q++) {
          var Z = U6[Q];
          if (J[Z] == null) continue;
          var X = LJ(J[Z]);
          if (J.multiple && !X)
            M(
              "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
              Z,
              p7(),
            );
          else if (!J.multiple && X)
            M(
              "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
              Z,
              p7(),
            );
        }
      }
    }
    function J0(J, Q, Z, X) {
      var G = J.options;
      if (Q) {
        var B = Z,
          U = {};
        for (var Y = 0; Y < B.length; Y++) U["$" + B[Y]] = !0;
        for (var K = 0; K < G.length; K++) {
          var z = U.hasOwnProperty("$" + G[K].value);
          if (G[K].selected !== z) G[K].selected = z;
          if (z && X) G[K].defaultSelected = !0;
        }
      } else {
        var H = SQ(jZ(Z)),
          $ = null;
        for (var O = 0; O < G.length; O++) {
          if (G[O].value === H) {
            if (((G[O].selected = !0), X)) G[O].defaultSelected = !0;
            return;
          }
          if ($ === null && !G[O].disabled) $ = G[O];
        }
        if ($ !== null) $.selected = !0;
      }
    }
    function Y6(J, Q) {
      return M1({}, Q, { value: void 0 });
    }
    function MY(J, Q) {
      var Z = J;
      if (
        (KX(Q),
        (Z._wrapperState = { wasMultiple: !!Q.multiple }),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !B6)
      )
        M(
          "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
        ),
          (B6 = !0);
    }
    function h3(J, Q) {
      var Z = J;
      Z.multiple = !!Q.multiple;
      var X = Q.value;
      if (X != null) J0(Z, !!Q.multiple, X, !1);
      else if (Q.defaultValue != null) J0(Z, !!Q.multiple, Q.defaultValue, !0);
    }
    function f3(J, Q) {
      var Z = J,
        X = Z._wrapperState.wasMultiple;
      Z._wrapperState.wasMultiple = !!Q.multiple;
      var G = Q.value;
      if (G != null) J0(Z, !!Q.multiple, G, !1);
      else if (X !== !!Q.multiple)
        if (Q.defaultValue != null) J0(Z, !!Q.multiple, Q.defaultValue, !0);
        else J0(Z, !!Q.multiple, Q.multiple ? [] : "", !1);
    }
    function u3(J, Q) {
      var Z = J,
        X = Q.value;
      if (X != null) J0(Z, !!Q.multiple, X, !1);
    }
    var VY = !1;
    function WX(J, Q) {
      var Z = J;
      if (Q.dangerouslySetInnerHTML != null)
        throw new Error(
          "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
        );
      var X = M1({}, Q, {
        value: void 0,
        defaultValue: void 0,
        children: SQ(Z._wrapperState.initialValue),
      });
      return X;
    }
    function qY(J, Q) {
      var Z = J;
      if (
        (Z6("textarea", Q),
        Q.value !== void 0 && Q.defaultValue !== void 0 && !VY)
      )
        M(
          "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",
          k0() || "A component",
        ),
          (VY = !0);
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
            if (LJ(G)) {
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
      Z._wrapperState = { initialValue: jZ(X) };
    }
    function OY(J, Q) {
      var Z = J,
        X = jZ(Q.value),
        G = jZ(Q.defaultValue);
      if (X != null) {
        var B = SQ(X);
        if (B !== Z.value) Z.value = B;
        if (Q.defaultValue == null && Z.defaultValue !== B) Z.defaultValue = B;
      }
      if (G != null) Z.defaultValue = SQ(G);
    }
    function $Y(J, Q) {
      var Z = J,
        X = Z.textContent;
      if (X === Z._wrapperState.initialValue) {
        if (X !== "" && X !== null) Z.value = X;
      }
    }
    function d3(J, Q) {
      OY(J, Q);
    }
    var Q0 = "http://www.w3.org/1999/xhtml",
      s3 = "http://www.w3.org/1998/Math/MathML",
      zX = "http://www.w3.org/2000/svg";
    function HX(J) {
      switch (J) {
        case "svg":
          return zX;
        case "math":
          return s3;
        default:
          return Q0;
      }
    }
    function MX(J, Q) {
      if (J == null || J === Q0) return HX(Q);
      if (J === zX && Q === "foreignObject") return Q0;
      return J;
    }
    var m3 = function (J) {
        if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction)
          return function (Q, Z, X, G) {
            MSApp.execUnsafeLocalFunction(function () {
              return J(Q, Z, X, G);
            });
          };
        else return J;
      },
      o7,
      DY = m3(function (J, Q) {
        if (J.namespaceURI === zX) {
          if (!("innerHTML" in J)) {
            (o7 = o7 || document.createElement("div")),
              (o7.innerHTML = "<svg>" + Q.valueOf().toString() + "</svg>");
            var Z = o7.firstChild;
            while (J.firstChild) J.removeChild(J.firstChild);
            while (Z.firstChild) J.appendChild(Z.firstChild);
            return;
          }
        }
        J.innerHTML = Q;
      }),
      CQ = 1,
      Z0 = 3,
      $J = 8,
      X0 = 9,
      VX = 11,
      r7 = function (J, Q) {
        if (Q) {
          var Z = J.firstChild;
          if (Z && Z === J.lastChild && Z.nodeType === Z0) {
            Z.nodeValue = Q;
            return;
          }
        }
        J.textContent = Q;
      },
      y3 = {
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
      K6 = {
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
    function l3(J, Q) {
      return J + Q.charAt(0).toUpperCase() + Q.substring(1);
    }
    var c3 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(K6).forEach(function (J) {
      c3.forEach(function (Q) {
        K6[l3(Q, J)] = K6[J];
      });
    });
    function qX(J, Q, Z) {
      var X = Q == null || typeof Q === "boolean" || Q === "";
      if (X) return "";
      if (
        !Z &&
        typeof Q === "number" &&
        Q !== 0 &&
        !(K6.hasOwnProperty(J) && K6[J])
      )
        return Q + "px";
      return x0(Q, J), ("" + Q).trim();
    }
    var i3 = /([A-Z])/g,
      a3 = /^ms-/;
    function p3(J) {
      return J.replace(i3, "-$1").toLowerCase().replace(a3, "-ms-");
    }
    var jY = function () {};
    {
      var o3 = /^(?:webkit|moz|o)[A-Z]/,
        r3 = /^-ms-/,
        n3 = /-(.)/g,
        PY = /;\s*$/,
        t4 = {},
        OX = {},
        AY = !1,
        EY = !1,
        t3 = function (J) {
          return J.replace(n3, function (Q, Z) {
            return Z.toUpperCase();
          });
        },
        e3 = function (J) {
          if (t4.hasOwnProperty(J) && t4[J]) return;
          (t4[J] = !0),
            M(
              "Unsupported style property %s. Did you mean %s?",
              J,
              t3(J.replace(r3, "ms-")),
            );
        },
        JM = function (J) {
          if (t4.hasOwnProperty(J) && t4[J]) return;
          (t4[J] = !0),
            M(
              "Unsupported vendor-prefixed style property %s. Did you mean %s?",
              J,
              J.charAt(0).toUpperCase() + J.slice(1),
            );
        },
        QM = function (J, Q) {
          if (OX.hasOwnProperty(Q) && OX[Q]) return;
          (OX[Q] = !0),
            M(
              `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.Try "%s: %s" instead.`,
              J,
              Q.replace(PY, ""),
            );
        },
        ZM = function (J, Q) {
          if (AY) return;
          (AY = !0),
            M("`NaN` is an invalid value for the `%s` css style property.", J);
        },
        XM = function (J, Q) {
          if (EY) return;
          (EY = !0),
            M(
              "`Infinity` is an invalid value for the `%s` css style property.",
              J,
            );
        };
      jY = function (J, Q) {
        if (J.indexOf("-") > -1) e3(J);
        else if (o3.test(J)) JM(J);
        else if (PY.test(Q)) QM(J, Q);
        if (typeof Q === "number") {
          if (isNaN(Q)) ZM(J, Q);
          else if (!isFinite(Q)) XM(J, Q);
        }
      };
    }
    var GM = jY;
    function BM(J) {
      {
        var Q = "",
          Z = "";
        for (var X in J) {
          if (!J.hasOwnProperty(X)) continue;
          var G = J[X];
          if (G != null) {
            var B = X.indexOf("--") === 0;
            (Q += Z + (B ? X : p3(X)) + ":"), (Q += qX(X, G, B)), (Z = ";");
          }
        }
        return Q || null;
      }
    }
    function RY(J, Q) {
      var Z = J.style;
      for (var X in Q) {
        if (!Q.hasOwnProperty(X)) continue;
        var G = X.indexOf("--") === 0;
        if (!G) GM(X, Q[X]);
        var B = qX(X, Q[X], G);
        if (X === "float") X = "cssFloat";
        if (G) Z.setProperty(X, B);
        else Z[X] = B;
      }
    }
    function UM(J) {
      return J == null || typeof J === "boolean" || J === "";
    }
    function LY(J) {
      var Q = {};
      for (var Z in J) {
        var X = y3[Z] || [Z];
        for (var G = 0; G < X.length; G++) Q[X[G]] = Z;
      }
      return Q;
    }
    function YM(J, Q) {
      {
        if (!Q) return;
        var Z = LY(J),
          X = LY(Q),
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
                UM(J[U]) ? "Removing" : "Updating",
                U,
                Y,
              );
          }
        }
      }
    }
    var KM = {
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
      WM = M1({ menuitem: !0 }, KM),
      zM = "__html";
    function $X(J, Q) {
      if (!Q) return;
      if (WM[J]) {
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
          !(zM in Q.dangerouslySetInnerHTML)
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
    function z4(J, Q) {
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
    var n7 = {
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
      FY = {
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
      e4 = {},
      HM = new RegExp("^(aria)-[" + y + "]*$"),
      MM = new RegExp("^(aria)[A-Z][" + y + "]*$");
    function VM(J, Q) {
      {
        if (yJ.call(e4, Q) && e4[Q]) return !0;
        if (MM.test(Q)) {
          var Z = "aria-" + Q.slice(4).toLowerCase(),
            X = FY.hasOwnProperty(Z) ? Z : null;
          if (X == null)
            return (
              M(
                "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                Q,
              ),
              (e4[Q] = !0),
              !0
            );
          if (Q !== X)
            return (
              M("Invalid ARIA attribute `%s`. Did you mean `%s`?", Q, X),
              (e4[Q] = !0),
              !0
            );
        }
        if (HM.test(Q)) {
          var G = Q.toLowerCase(),
            B = FY.hasOwnProperty(G) ? G : null;
          if (B == null) return (e4[Q] = !0), !1;
          if (Q !== B)
            return (
              M("Unknown ARIA attribute `%s`. Did you mean `%s`?", Q, B),
              (e4[Q] = !0),
              !0
            );
        }
      }
      return !0;
    }
    function qM(J, Q) {
      {
        var Z = [];
        for (var X in Q) {
          var G = VM(J, X);
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
    function OM(J, Q) {
      if (z4(J, Q)) return;
      qM(J, Q);
    }
    var IY = !1;
    function $M(J, Q) {
      {
        if (J !== "input" && J !== "textarea" && J !== "select") return;
        if (Q != null && Q.value === null && !IY)
          if (((IY = !0), J === "select" && Q.multiple))
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
    var xY = function () {};
    {
      var AQ = {},
        wY = /^on./,
        DM = /^on[^A-Z]/,
        jM = new RegExp("^(aria)-[" + y + "]*$"),
        PM = new RegExp("^(aria)[A-Z][" + y + "]*$");
      xY = function (J, Q, Z, X) {
        if (yJ.call(AQ, Q) && AQ[Q]) return !0;
        var G = Q.toLowerCase();
        if (G === "onfocusin" || G === "onfocusout")
          return (
            M(
              "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.",
            ),
            (AQ[Q] = !0),
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
              (AQ[Q] = !0),
              !0
            );
          if (wY.test(Q))
            return (
              M("Unknown event handler property `%s`. It will be ignored.", Q),
              (AQ[Q] = !0),
              !0
            );
        } else if (wY.test(Q)) {
          if (DM.test(Q))
            M(
              "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
              Q,
            );
          return (AQ[Q] = !0), !0;
        }
        if (jM.test(Q) || PM.test(Q)) return !0;
        if (G === "innerhtml")
          return (
            M(
              "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.",
            ),
            (AQ[Q] = !0),
            !0
          );
        if (G === "aria")
          return (
            M(
              "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.",
            ),
            (AQ[Q] = !0),
            !0
          );
        if (G === "is" && Z !== null && Z !== void 0 && typeof Z !== "string")
          return (
            M(
              "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
              typeof Z,
            ),
            (AQ[Q] = !0),
            !0
          );
        if (typeof Z === "number" && isNaN(Z))
          return (
            M(
              "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
              Q,
            ),
            (AQ[Q] = !0),
            !0
          );
        var K = PQ(Q),
          z = K !== null && K.type === JZ;
        if (n7.hasOwnProperty(G)) {
          var H = n7[G];
          if (H !== Q)
            return (
              M("Invalid DOM property `%s`. Did you mean `%s`?", Q, H),
              (AQ[Q] = !0),
              !0
            );
        } else if (!z && Q !== G)
          return (
            M(
              "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
              Q,
              G,
            ),
            (AQ[Q] = !0),
            !0
          );
        if (typeof Z === "boolean" && _Q(Q, Z, K, !1)) {
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
          return (AQ[Q] = !0), !0;
        }
        if (z) return !0;
        if (_Q(Q, Z, K, !1)) return (AQ[Q] = !0), !1;
        if ((Z === "false" || Z === "true") && K !== null && K.type === OJ)
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
            (AQ[Q] = !0),
            !0
          );
        return !0;
      };
    }
    var AM = function (J, Q, Z) {
      {
        var X = [];
        for (var G in Q) {
          var B = xY(J, G, Q[G], Z);
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
    function EM(J, Q, Z) {
      if (z4(J, Q)) return;
      AM(J, Q, Z);
    }
    var _Y = 1,
      DX = 1 << 1,
      W6 = 1 << 2,
      RM = _Y | DX | W6,
      z6 = null;
    function LM(J) {
      if (z6 !== null)
        M(
          "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      z6 = J;
    }
    function FM() {
      if (z6 === null)
        M(
          "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.",
        );
      z6 = null;
    }
    function IM(J) {
      return J === z6;
    }
    function jX(J) {
      var Q = J.target || J.srcElement || window;
      if (Q.correspondingUseElement) Q = Q.correspondingUseElement;
      return Q.nodeType === Z0 ? Q.parentNode : Q;
    }
    var PX = null,
      J5 = null,
      Q5 = null;
    function SY(J) {
      var Q = y0(J);
      if (!Q) return;
      if (typeof PX !== "function")
        throw new Error(
          "setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.",
        );
      var Z = Q.stateNode;
      if (Z) {
        var X = g8(Z);
        PX(Q.stateNode, Q.type, X);
      }
    }
    function xM(J) {
      PX = J;
    }
    function CY(J) {
      if (J5)
        if (Q5) Q5.push(J);
        else Q5 = [J];
      else J5 = J;
    }
    function wM() {
      return J5 !== null || Q5 !== null;
    }
    function vY() {
      if (!J5) return;
      var J = J5,
        Q = Q5;
      if (((J5 = null), (Q5 = null), SY(J), Q))
        for (var Z = 0; Z < Q.length; Z++) SY(Q[Z]);
    }
    var NY = function (J, Q) {
        return J(Q);
      },
      bY = function () {},
      AX = !1;
    function _M() {
      var J = wM();
      if (J) bY(), vY();
    }
    function kY(J, Q, Z) {
      if (AX) return J(Q, Z);
      AX = !0;
      try {
        return NY(J, Q, Z);
      } finally {
        (AX = !1), _M();
      }
    }
    function SM(J, Q, Z) {
      (NY = J), (bY = Z);
    }
    function CM(J) {
      return (
        J === "button" || J === "input" || J === "select" || J === "textarea"
      );
    }
    function vM(J, Q, Z) {
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
          return !!(Z.disabled && CM(Q));
        default:
          return !1;
      }
    }
    function H6(J, Q) {
      var Z = J.stateNode;
      if (Z === null) return null;
      var X = g8(Z);
      if (X === null) return null;
      var G = X[Q];
      if (vM(Q, J.type, X)) return null;
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
    var EX = !1;
    if (mJ)
      try {
        var M6 = {};
        Object.defineProperty(M6, "passive", {
          get: function () {
            EX = !0;
          },
        }),
          window.addEventListener("test", M6, M6),
          window.removeEventListener("test", M6, M6);
      } catch (J) {
        EX = !1;
      }
    function gY(J, Q, Z, X, G, B, U, Y, K) {
      var z = Array.prototype.slice.call(arguments, 3);
      try {
        Q.apply(Z, z);
      } catch (H) {
        this.onError(H);
      }
    }
    var TY = gY;
    if (
      typeof window !== "undefined" &&
      typeof window.dispatchEvent === "function" &&
      typeof document !== "undefined" &&
      typeof document.createEvent === "function"
    ) {
      var RX = document.createElement("react");
      TY = function J(Q, Z, X, G, B, U, Y, K, z) {
        if (typeof document === "undefined" || document === null)
          throw new Error(
            "The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.",
          );
        var H = document.createEvent("Event"),
          $ = !1,
          O = !0,
          E = window.event,
          P = Object.getOwnPropertyDescriptor(window, "event");
        function R() {
          if (
            (RX.removeEventListener(F, l, !1),
            typeof window.event !== "undefined" &&
              window.hasOwnProperty("event"))
          )
            window.event = E;
        }
        var g = Array.prototype.slice.call(arguments, 3);
        function l() {
          ($ = !0), R(), Z.apply(X, g), (O = !1);
        }
        var d,
          V1 = !1,
          q1 = !1;
        function D(j) {
          if (
            ((d = j.error),
            (V1 = !0),
            d === null && j.colno === 0 && j.lineno === 0)
          )
            q1 = !0;
          if (j.defaultPrevented) {
            if (d != null && typeof d === "object")
              try {
                d._suppressLogging = !0;
              } catch (_) {}
          }
        }
        var F = "react-" + (Q ? Q : "invokeguardedcallback");
        if (
          (window.addEventListener("error", D),
          RX.addEventListener(F, l, !1),
          H.initEvent(F, !1, !1),
          RX.dispatchEvent(H),
          P)
        )
          Object.defineProperty(window, "event", P);
        if ($ && O) {
          if (!V1)
            d = new Error(
              `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`,
            );
          else if (q1)
            d = new Error(
              "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.",
            );
          this.onError(d);
        }
        if ((window.removeEventListener("error", D), !$))
          return R(), gY.apply(this, arguments);
      };
    }
    var NM = TY,
      Z5 = !1,
      t7 = null,
      e7 = !1,
      LX = null,
      bM = {
        onError: function (J) {
          (Z5 = !0), (t7 = J);
        },
      };
    function FX(J, Q, Z, X, G, B, U, Y, K) {
      (Z5 = !1), (t7 = null), NM.apply(bM, arguments);
    }
    function kM(J, Q, Z, X, G, B, U, Y, K) {
      if ((FX.apply(this, arguments), Z5)) {
        var z = IX();
        if (!e7) (e7 = !0), (LX = z);
      }
    }
    function gM() {
      if (e7) {
        var J = LX;
        throw ((e7 = !1), (LX = null), J);
      }
    }
    function TM() {
      return Z5;
    }
    function IX() {
      if (Z5) {
        var J = t7;
        return (Z5 = !1), (t7 = null), J;
      } else
        throw new Error(
          "clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function X5(J) {
      return J._reactInternals;
    }
    function hM(J) {
      return J._reactInternals !== void 0;
    }
    function fM(J, Q) {
      J._reactInternals = Q;
    }
    var o = 0,
      G5 = 1,
      DJ = 2,
      E1 = 4,
      H4 = 16,
      V6 = 32,
      xX = 64,
      C1 = 128,
      G0 = 256,
      T0 = 512,
      M4 = 1024,
      PZ = 2048,
      B0 = 4096,
      V4 = 8192,
      J8 = 16384,
      uM = PZ | E1 | xX | T0 | M4 | J8,
      dM = 32767,
      q6 = 32768,
      EQ = 65536,
      wX = 131072,
      hY = 1048576,
      _X = 2097152,
      q4 = 4194304,
      SX = 8388608,
      U0 = 16777216,
      Q8 = 33554432,
      CX = E1 | M4 | 0,
      vX = DJ | E1 | H4 | V6 | T0 | B0 | V4,
      O6 = E1 | xX | T0 | V4,
      B5 = PZ | H4,
      Y0 = q4 | SX | _X,
      sM = L1.ReactCurrentOwner;
    function O4(J) {
      var Q = J,
        Z = J;
      if (!J.alternate) {
        var X = Q;
        do {
          if (((Q = X), (Q.flags & (DJ | B0)) !== o)) Z = Q.return;
          X = Q.return;
        } while (X);
      } else while (Q.return) Q = Q.return;
      if (Q.tag === m) return Z;
      return null;
    }
    function fY(J) {
      if (J.tag === P1) {
        var Q = J.memoizedState;
        if (Q === null) {
          var Z = J.alternate;
          if (Z !== null) Q = Z.memoizedState;
        }
        if (Q !== null) return Q.dehydrated;
      }
      return null;
    }
    function uY(J) {
      return J.tag === m ? J.stateNode.containerInfo : null;
    }
    function mM(J) {
      return O4(J) === J;
    }
    function yM(J) {
      {
        var Q = sM.current;
        if (Q !== null && Q.tag === a) {
          var Z = Q,
            X = Z.stateNode;
          if (!X._warnedAboutRefsInRender)
            M(
              "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              Y1(Z) || "A component",
            );
          X._warnedAboutRefsInRender = !0;
        }
      }
      var G = X5(J);
      if (!G) return !1;
      return O4(G) === G;
    }
    function dY(J) {
      if (O4(J) !== J)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function sY(J) {
      var Q = J.alternate;
      if (!Q) {
        var Z = O4(J);
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
            if (K === X) return dY(B), J;
            if (K === G) return dY(B), Q;
            K = K.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (X.return !== G.return) (X = B), (G = U);
        else {
          var z = !1,
            H = B.child;
          while (H) {
            if (H === X) {
              (z = !0), (X = B), (G = U);
              break;
            }
            if (H === G) {
              (z = !0), (G = B), (X = U);
              break;
            }
            H = H.sibling;
          }
          if (!z) {
            H = U.child;
            while (H) {
              if (H === X) {
                (z = !0), (X = U), (G = B);
                break;
              }
              if (H === G) {
                (z = !0), (G = U), (X = B);
                break;
              }
              H = H.sibling;
            }
            if (!z)
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
    function mY(J) {
      var Q = sY(J);
      return Q !== null ? yY(Q) : null;
    }
    function yY(J) {
      if (J.tag === c || J.tag === x1) return J;
      var Q = J.child;
      while (Q !== null) {
        var Z = yY(Q);
        if (Z !== null) return Z;
        Q = Q.sibling;
      }
      return null;
    }
    function lM(J) {
      var Q = sY(J);
      return Q !== null ? lY(Q) : null;
    }
    function lY(J) {
      if (J.tag === c || J.tag === x1) return J;
      var Q = J.child;
      while (Q !== null) {
        if (Q.tag !== O1) {
          var Z = lY(Q);
          if (Z !== null) return Z;
        }
        Q = Q.sibling;
      }
      return null;
    }
    var cY = s.unstable_scheduleCallback,
      cM = s.unstable_cancelCallback,
      iM = s.unstable_shouldYield,
      aM = s.unstable_requestPaint,
      TJ = s.unstable_now,
      pM = s.unstable_getCurrentPriorityLevel,
      Z8 = s.unstable_ImmediatePriority,
      NX = s.unstable_UserBlockingPriority,
      $4 = s.unstable_NormalPriority,
      oM = s.unstable_LowPriority,
      bX = s.unstable_IdlePriority,
      rM = s.unstable_yieldValue,
      nM = s.unstable_setDisableYieldValue,
      D4 = null,
      iJ = null,
      k = null,
      hZ = !1,
      AZ = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function tM(J) {
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
        if (kZ)
          J = M1({}, J, { getLaneLabelMap: GV, injectProfilingHooks: XV });
        (D4 = Q.inject(J)), (iJ = Q);
      } catch (Z) {
        M("React instrumentation encountered an error: %s.", Z);
      }
      if (Q.checkDCE) return !0;
      else return !1;
    }
    function eM(J, Q) {
      if (iJ && typeof iJ.onScheduleFiberRoot === "function")
        try {
          iJ.onScheduleFiberRoot(D4, J, Q);
        } catch (Z) {
          if (!hZ)
            (hZ = !0), M("React instrumentation encountered an error: %s", Z);
        }
    }
    function JV(J, Q) {
      if (iJ && typeof iJ.onCommitFiberRoot === "function")
        try {
          var Z = (J.current.flags & C1) === C1;
          if (nQ) {
            var X;
            switch (Q) {
              case mQ:
                X = Z8;
                break;
              case W0:
                X = NX;
                break;
              case z0:
                X = $4;
                break;
              case z8:
                X = bX;
                break;
              default:
                X = $4;
                break;
            }
            iJ.onCommitFiberRoot(D4, J, X, Z);
          } else iJ.onCommitFiberRoot(D4, J, void 0, Z);
        } catch (G) {
          if (!hZ)
            (hZ = !0), M("React instrumentation encountered an error: %s", G);
        }
    }
    function QV(J) {
      if (iJ && typeof iJ.onPostCommitFiberRoot === "function")
        try {
          iJ.onPostCommitFiberRoot(D4, J);
        } catch (Q) {
          if (!hZ)
            (hZ = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function ZV(J) {
      if (iJ && typeof iJ.onCommitFiberUnmount === "function")
        try {
          iJ.onCommitFiberUnmount(D4, J);
        } catch (Q) {
          if (!hZ)
            (hZ = !0), M("React instrumentation encountered an error: %s", Q);
        }
    }
    function hJ(J) {
      {
        if (typeof rM === "function") nM(J), i1(J);
        if (iJ && typeof iJ.setStrictMode === "function")
          try {
            iJ.setStrictMode(D4, J);
          } catch (Q) {
            if (!hZ)
              (hZ = !0), M("React instrumentation encountered an error: %s", Q);
          }
      }
    }
    function XV(J) {
      k = J;
    }
    function GV() {
      {
        var J = new Map(),
          Q = 1;
        for (var Z = 0; Z < gX; Z++) {
          var X = FV(Q);
          J.set(Q, X), (Q *= 2);
        }
        return J;
      }
    }
    function BV(J) {
      if (k !== null && typeof k.markCommitStarted === "function")
        k.markCommitStarted(J);
    }
    function iY() {
      if (k !== null && typeof k.markCommitStopped === "function")
        k.markCommitStopped();
    }
    function $6(J) {
      if (k !== null && typeof k.markComponentRenderStarted === "function")
        k.markComponentRenderStarted(J);
    }
    function U5() {
      if (k !== null && typeof k.markComponentRenderStopped === "function")
        k.markComponentRenderStopped();
    }
    function UV(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStarted === "function"
      )
        k.markComponentPassiveEffectMountStarted(J);
    }
    function YV() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectMountStopped === "function"
      )
        k.markComponentPassiveEffectMountStopped();
    }
    function KV(J) {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStarted === "function"
      )
        k.markComponentPassiveEffectUnmountStarted(J);
    }
    function WV() {
      if (
        k !== null &&
        typeof k.markComponentPassiveEffectUnmountStopped === "function"
      )
        k.markComponentPassiveEffectUnmountStopped();
    }
    function zV(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStarted === "function"
      )
        k.markComponentLayoutEffectMountStarted(J);
    }
    function HV() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectMountStopped === "function"
      )
        k.markComponentLayoutEffectMountStopped();
    }
    function aY(J) {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStarted === "function"
      )
        k.markComponentLayoutEffectUnmountStarted(J);
    }
    function pY() {
      if (
        k !== null &&
        typeof k.markComponentLayoutEffectUnmountStopped === "function"
      )
        k.markComponentLayoutEffectUnmountStopped();
    }
    function MV(J, Q, Z) {
      if (k !== null && typeof k.markComponentErrored === "function")
        k.markComponentErrored(J, Q, Z);
    }
    function VV(J, Q, Z) {
      if (k !== null && typeof k.markComponentSuspended === "function")
        k.markComponentSuspended(J, Q, Z);
    }
    function qV(J) {
      if (k !== null && typeof k.markLayoutEffectsStarted === "function")
        k.markLayoutEffectsStarted(J);
    }
    function OV() {
      if (k !== null && typeof k.markLayoutEffectsStopped === "function")
        k.markLayoutEffectsStopped();
    }
    function $V(J) {
      if (k !== null && typeof k.markPassiveEffectsStarted === "function")
        k.markPassiveEffectsStarted(J);
    }
    function DV() {
      if (k !== null && typeof k.markPassiveEffectsStopped === "function")
        k.markPassiveEffectsStopped();
    }
    function oY(J) {
      if (k !== null && typeof k.markRenderStarted === "function")
        k.markRenderStarted(J);
    }
    function jV() {
      if (k !== null && typeof k.markRenderYielded === "function")
        k.markRenderYielded();
    }
    function rY() {
      if (k !== null && typeof k.markRenderStopped === "function")
        k.markRenderStopped();
    }
    function PV(J) {
      if (k !== null && typeof k.markRenderScheduled === "function")
        k.markRenderScheduled(J);
    }
    function AV(J, Q) {
      if (k !== null && typeof k.markForceUpdateScheduled === "function")
        k.markForceUpdateScheduled(J, Q);
    }
    function kX(J, Q) {
      if (k !== null && typeof k.markStateUpdateScheduled === "function")
        k.markStateUpdateScheduled(J, Q);
    }
    var r = 0,
      D1 = 1,
      k1 = 2,
      jJ = 8,
      fZ = 16,
      nY = Math.clz32 ? Math.clz32 : LV,
      EV = Math.log,
      RV = Math.LN2;
    function LV(J) {
      var Q = J >>> 0;
      if (Q === 0) return 32;
      return (31 - ((EV(Q) / RV) | 0)) | 0;
    }
    var gX = 31,
      x = 0,
      fJ = 0,
      Z1 = 1,
      Y5 = 2,
      K0 = 4,
      j4 = 8,
      uZ = 16,
      D6 = 32,
      K5 = 4194240,
      j6 = 64,
      TX = 128,
      hX = 256,
      fX = 512,
      uX = 1024,
      dX = 2048,
      sX = 4096,
      mX = 8192,
      yX = 16384,
      lX = 32768,
      cX = 65536,
      iX = 131072,
      aX = 262144,
      pX = 524288,
      oX = 1048576,
      rX = 2097152,
      X8 = 130023424,
      W5 = 4194304,
      nX = 8388608,
      tX = 16777216,
      eX = 33554432,
      JG = 67108864,
      tY = W5,
      P6 = 134217728,
      eY = 268435455,
      A6 = 268435456,
      P4 = 536870912,
      dQ = 1073741824;
    function FV(J) {
      {
        if (J & Z1) return "Sync";
        if (J & Y5) return "InputContinuousHydration";
        if (J & K0) return "InputContinuous";
        if (J & j4) return "DefaultHydration";
        if (J & uZ) return "Default";
        if (J & D6) return "TransitionHydration";
        if (J & K5) return "Transition";
        if (J & X8) return "Retry";
        if (J & P6) return "SelectiveHydration";
        if (J & A6) return "IdleHydration";
        if (J & P4) return "Idle";
        if (J & dQ) return "Offscreen";
      }
    }
    var o1 = -1,
      G8 = j6,
      B8 = W5;
    function E6(J) {
      switch (A4(J)) {
        case Z1:
          return Z1;
        case Y5:
          return Y5;
        case K0:
          return K0;
        case j4:
          return j4;
        case uZ:
          return uZ;
        case D6:
          return D6;
        case j6:
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
        case aX:
        case pX:
        case oX:
        case rX:
          return J & K5;
        case W5:
        case nX:
        case tX:
        case eX:
        case JG:
          return J & X8;
        case P6:
          return P6;
        case A6:
          return A6;
        case P4:
          return P4;
        case dQ:
          return dQ;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), J
          );
      }
    }
    function U8(J, Q) {
      var Z = J.pendingLanes;
      if (Z === x) return x;
      var X = x,
        G = J.suspendedLanes,
        B = J.pingedLanes,
        U = Z & eY;
      if (U !== x) {
        var Y = U & ~G;
        if (Y !== x) X = E6(Y);
        else {
          var K = U & B;
          if (K !== x) X = E6(K);
        }
      } else {
        var z = Z & ~G;
        if (z !== x) X = E6(z);
        else if (B !== x) X = E6(B);
      }
      if (X === x) return x;
      if (Q !== x && Q !== X && (Q & G) === x) {
        var H = A4(X),
          $ = A4(Q);
        if (H >= $ || (H === uZ && ($ & K5) !== x)) return Q;
      }
      if ((X & K0) !== x) X |= Z & uZ;
      var O = J.entangledLanes;
      if (O !== x) {
        var E = J.entanglements,
          P = X & O;
        while (P > 0) {
          var R = E4(P),
            g = 1 << R;
          (X |= E[R]), (P &= ~g);
        }
      }
      return X;
    }
    function IV(J, Q) {
      var Z = J.eventTimes,
        X = o1;
      while (Q > 0) {
        var G = E4(Q),
          B = 1 << G,
          U = Z[G];
        if (U > X) X = U;
        Q &= ~B;
      }
      return X;
    }
    function xV(J, Q) {
      switch (J) {
        case Z1:
        case Y5:
        case K0:
          return Q + 250;
        case j4:
        case uZ:
        case D6:
        case j6:
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
        case aX:
        case pX:
        case oX:
        case rX:
          return Q + 5000;
        case W5:
        case nX:
        case tX:
        case eX:
        case JG:
          return o1;
        case P6:
        case A6:
        case P4:
        case dQ:
          return o1;
        default:
          return (
            M("Should have found matching lanes. This is a bug in React."), o1
          );
      }
    }
    function wV(J, Q) {
      var {
          pendingLanes: Z,
          suspendedLanes: X,
          pingedLanes: G,
          expirationTimes: B,
        } = J,
        U = Z;
      while (U > 0) {
        var Y = E4(U),
          K = 1 << Y,
          z = B[Y];
        if (z === o1) {
          if ((K & X) === x || (K & G) !== x) B[Y] = xV(K, Q);
        } else if (z <= Q) J.expiredLanes |= K;
        U &= ~K;
      }
    }
    function _V(J) {
      return E6(J.pendingLanes);
    }
    function QG(J) {
      var Q = J.pendingLanes & ~dQ;
      if (Q !== x) return Q;
      if (Q & dQ) return dQ;
      return x;
    }
    function SV(J) {
      return (J & Z1) !== x;
    }
    function ZG(J) {
      return (J & eY) !== x;
    }
    function JK(J) {
      return (J & X8) === J;
    }
    function CV(J) {
      var Q = Z1 | K0 | uZ;
      return (J & Q) === x;
    }
    function vV(J) {
      return (J & K5) === J;
    }
    function Y8(J, Q) {
      var Z = Y5 | K0 | j4 | uZ;
      return (Q & Z) !== x;
    }
    function NV(J, Q) {
      return (Q & J.expiredLanes) !== x;
    }
    function QK(J) {
      return (J & K5) !== x;
    }
    function ZK() {
      var J = G8;
      if (((G8 <<= 1), (G8 & K5) === x)) G8 = j6;
      return J;
    }
    function bV() {
      var J = B8;
      if (((B8 <<= 1), (B8 & X8) === x)) B8 = W5;
      return J;
    }
    function A4(J) {
      return J & -J;
    }
    function R6(J) {
      return A4(J);
    }
    function E4(J) {
      return 31 - nY(J);
    }
    function XG(J) {
      return E4(J);
    }
    function sQ(J, Q) {
      return (J & Q) !== x;
    }
    function z5(J, Q) {
      return (J & Q) === Q;
    }
    function H1(J, Q) {
      return J | Q;
    }
    function K8(J, Q) {
      return J & ~Q;
    }
    function XK(J, Q) {
      return J & Q;
    }
    function W8(J) {
      return J;
    }
    function kV(J, Q) {
      return J !== fJ && J < Q ? J : Q;
    }
    function GG(J) {
      var Q = [];
      for (var Z = 0; Z < gX; Z++) Q.push(J);
      return Q;
    }
    function L6(J, Q, Z) {
      if (((J.pendingLanes |= Q), Q !== P4))
        (J.suspendedLanes = x), (J.pingedLanes = x);
      var X = J.eventTimes,
        G = XG(Q);
      X[G] = Z;
    }
    function gV(J, Q) {
      (J.suspendedLanes |= Q), (J.pingedLanes &= ~Q);
      var Z = J.expirationTimes,
        X = Q;
      while (X > 0) {
        var G = E4(X),
          B = 1 << G;
        (Z[G] = o1), (X &= ~B);
      }
    }
    function GK(J, Q, Z) {
      J.pingedLanes |= J.suspendedLanes & Q;
    }
    function TV(J, Q) {
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
        var Y = E4(U),
          K = 1 << Y;
        (X[Y] = x), (G[Y] = o1), (B[Y] = o1), (U &= ~K);
      }
    }
    function BG(J, Q) {
      var Z = (J.entangledLanes |= Q),
        X = J.entanglements,
        G = Z;
      while (G) {
        var B = E4(G),
          U = 1 << B;
        if ((U & Q) | (X[B] & Q)) X[B] |= Q;
        G &= ~U;
      }
    }
    function hV(J, Q) {
      var Z = A4(Q),
        X;
      switch (Z) {
        case K0:
          X = Y5;
          break;
        case uZ:
          X = j4;
          break;
        case j6:
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
        case aX:
        case pX:
        case oX:
        case rX:
        case W5:
        case nX:
        case tX:
        case eX:
        case JG:
          X = D6;
          break;
        case P4:
          X = A6;
          break;
        default:
          X = fJ;
          break;
      }
      if ((X & (J.suspendedLanes | Q)) !== fJ) return fJ;
      return X;
    }
    function BK(J, Q, Z) {
      if (!AZ) return;
      var X = J.pendingUpdatersLaneMap;
      while (Z > 0) {
        var G = XG(Z),
          B = 1 << G,
          U = X[G];
        U.add(Q), (Z &= ~B);
      }
    }
    function UK(J, Q) {
      if (!AZ) return;
      var { pendingUpdatersLaneMap: Z, memoizedUpdaters: X } = J;
      while (Q > 0) {
        var G = XG(Q),
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
    function YK(J, Q) {
      return null;
    }
    var mQ = Z1,
      W0 = K0,
      z0 = uZ,
      z8 = P4,
      F6 = fJ;
    function EZ() {
      return F6;
    }
    function uJ(J) {
      F6 = J;
    }
    function fV(J, Q) {
      var Z = F6;
      try {
        return (F6 = J), Q();
      } finally {
        F6 = Z;
      }
    }
    function uV(J, Q) {
      return J !== 0 && J < Q ? J : Q;
    }
    function dV(J, Q) {
      return J === 0 || J > Q ? J : Q;
    }
    function UG(J, Q) {
      return J !== 0 && J < Q;
    }
    function KK(J) {
      var Q = A4(J);
      if (!UG(mQ, Q)) return mQ;
      if (!UG(W0, Q)) return W0;
      if (ZG(Q)) return z0;
      return z8;
    }
    function H8(J) {
      var Q = J.current.memoizedState;
      return Q.isDehydrated;
    }
    var WK;
    function sV(J) {
      WK = J;
    }
    function mV(J) {
      WK(J);
    }
    var YG;
    function yV(J) {
      YG = J;
    }
    var zK;
    function lV(J) {
      zK = J;
    }
    var HK;
    function cV(J) {
      HK = J;
    }
    var MK;
    function iV(J) {
      MK = J;
    }
    var KG = !1,
      M8 = [],
      h0 = null,
      f0 = null,
      u0 = null,
      I6 = new Map(),
      x6 = new Map(),
      d0 = [],
      aV = [
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
    function pV(J) {
      return aV.indexOf(J) > -1;
    }
    function oV(J, Q, Z, X, G) {
      return {
        blockedOn: J,
        domEventName: Q,
        eventSystemFlags: Z,
        nativeEvent: G,
        targetContainers: [X],
      };
    }
    function VK(J, Q) {
      switch (J) {
        case "focusin":
        case "focusout":
          h0 = null;
          break;
        case "dragenter":
        case "dragleave":
          f0 = null;
          break;
        case "mouseover":
        case "mouseout":
          u0 = null;
          break;
        case "pointerover":
        case "pointerout": {
          var Z = Q.pointerId;
          I6.delete(Z);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var X = Q.pointerId;
          x6.delete(X);
          break;
        }
      }
    }
    function w6(J, Q, Z, X, G, B) {
      if (J === null || J.nativeEvent !== B) {
        var U = oV(Q, Z, X, G, B);
        if (Q !== null) {
          var Y = y0(Q);
          if (Y !== null) YG(Y);
        }
        return U;
      }
      J.eventSystemFlags |= X;
      var K = J.targetContainers;
      if (G !== null && K.indexOf(G) === -1) K.push(G);
      return J;
    }
    function rV(J, Q, Z, X, G) {
      switch (Q) {
        case "focusin": {
          var B = G;
          return (h0 = w6(h0, J, Q, Z, X, B)), !0;
        }
        case "dragenter": {
          var U = G;
          return (f0 = w6(f0, J, Q, Z, X, U)), !0;
        }
        case "mouseover": {
          var Y = G;
          return (u0 = w6(u0, J, Q, Z, X, Y)), !0;
        }
        case "pointerover": {
          var K = G,
            z = K.pointerId;
          return I6.set(z, w6(I6.get(z) || null, J, Q, Z, X, K)), !0;
        }
        case "gotpointercapture": {
          var H = G,
            $ = H.pointerId;
          return x6.set($, w6(x6.get($) || null, J, Q, Z, X, H)), !0;
        }
      }
      return !1;
    }
    function qK(J) {
      var Q = F4(J.target);
      if (Q !== null) {
        var Z = O4(Q);
        if (Z !== null) {
          var X = Z.tag;
          if (X === P1) {
            var G = fY(Z);
            if (G !== null) {
              (J.blockedOn = G),
                MK(J.priority, function () {
                  zK(Z);
                });
              return;
            }
          } else if (X === m) {
            var B = Z.stateNode;
            if (H8(B)) {
              J.blockedOn = uY(Z);
              return;
            }
          }
        }
      }
      J.blockedOn = null;
    }
    function nV(J) {
      var Q = HK(),
        Z = { blockedOn: null, target: J, priority: Q },
        X = 0;
      for (; X < d0.length; X++) if (!UG(Q, d0[X].priority)) break;
      if ((d0.splice(X, 0, Z), X === 0)) qK(Z);
    }
    function V8(J) {
      if (J.blockedOn !== null) return !1;
      var Q = J.targetContainers;
      while (Q.length > 0) {
        var Z = Q[0],
          X = HG(J.domEventName, J.eventSystemFlags, Z, J.nativeEvent);
        if (X === null) {
          var G = J.nativeEvent,
            B = new G.constructor(G.type, G);
          LM(B), G.target.dispatchEvent(B), FM();
        } else {
          var U = y0(X);
          if (U !== null) YG(U);
          return (J.blockedOn = X), !1;
        }
        Q.shift();
      }
      return !0;
    }
    function OK(J, Q, Z) {
      if (V8(J)) Z.delete(Q);
    }
    function tV() {
      if (((KG = !1), h0 !== null && V8(h0))) h0 = null;
      if (f0 !== null && V8(f0)) f0 = null;
      if (u0 !== null && V8(u0)) u0 = null;
      I6.forEach(OK), x6.forEach(OK);
    }
    function _6(J, Q) {
      if (J.blockedOn === Q) {
        if (((J.blockedOn = null), !KG))
          (KG = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, tV);
      }
    }
    function S6(J) {
      if (M8.length > 0) {
        _6(M8[0], J);
        for (var Q = 1; Q < M8.length; Q++) {
          var Z = M8[Q];
          if (Z.blockedOn === J) Z.blockedOn = null;
        }
      }
      if (h0 !== null) _6(h0, J);
      if (f0 !== null) _6(f0, J);
      if (u0 !== null) _6(u0, J);
      var X = function (Y) {
        return _6(Y, J);
      };
      I6.forEach(X), x6.forEach(X);
      for (var G = 0; G < d0.length; G++) {
        var B = d0[G];
        if (B.blockedOn === J) B.blockedOn = null;
      }
      while (d0.length > 0) {
        var U = d0[0];
        if (U.blockedOn !== null) break;
        else if ((qK(U), U.blockedOn === null)) d0.shift();
      }
    }
    var H5 = L1.ReactCurrentBatchConfig,
      WG = !0;
    function $K(J) {
      WG = !!J;
    }
    function eV() {
      return WG;
    }
    function Jq(J, Q, Z) {
      var X = DK(Q),
        G;
      switch (X) {
        case mQ:
          G = Qq;
          break;
        case W0:
          G = Zq;
          break;
        case z0:
        default:
          G = zG;
          break;
      }
      return G.bind(null, Q, Z, J);
    }
    function Qq(J, Q, Z, X) {
      var G = EZ(),
        B = H5.transition;
      H5.transition = null;
      try {
        uJ(mQ), zG(J, Q, Z, X);
      } finally {
        uJ(G), (H5.transition = B);
      }
    }
    function Zq(J, Q, Z, X) {
      var G = EZ(),
        B = H5.transition;
      H5.transition = null;
      try {
        uJ(W0), zG(J, Q, Z, X);
      } finally {
        uJ(G), (H5.transition = B);
      }
    }
    function zG(J, Q, Z, X) {
      if (!WG) return;
      Xq(J, Q, Z, X);
    }
    function Xq(J, Q, Z, X) {
      var G = HG(J, Q, Z, X);
      if (G === null) {
        IG(J, Q, X, q8, Z), VK(J, X);
        return;
      }
      if (rV(G, J, Q, Z, X)) {
        X.stopPropagation();
        return;
      }
      if ((VK(J, X), Q & W6 && pV(J))) {
        while (G !== null) {
          var B = y0(G);
          if (B !== null) mV(B);
          var U = HG(J, Q, Z, X);
          if (U === null) IG(J, Q, X, q8, Z);
          if (U === G) break;
          G = U;
        }
        if (G !== null) X.stopPropagation();
        return;
      }
      IG(J, Q, X, null, Z);
    }
    var q8 = null;
    function HG(J, Q, Z, X) {
      q8 = null;
      var G = jX(X),
        B = F4(G);
      if (B !== null) {
        var U = O4(B);
        if (U === null) B = null;
        else {
          var Y = U.tag;
          if (Y === P1) {
            var K = fY(U);
            if (K !== null) return K;
            B = null;
          } else if (Y === m) {
            var z = U.stateNode;
            if (H8(z)) return uY(U);
            B = null;
          } else if (U !== B) B = null;
        }
      }
      return (q8 = B), null;
    }
    function DK(J) {
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
          return mQ;
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
          return W0;
        case "message": {
          var Q = pM();
          switch (Q) {
            case Z8:
              return mQ;
            case NX:
              return W0;
            case $4:
            case oM:
              return z0;
            case bX:
              return z8;
            default:
              return z0;
          }
        }
        default:
          return z0;
      }
    }
    function Gq(J, Q, Z) {
      return J.addEventListener(Q, Z, !1), Z;
    }
    function Bq(J, Q, Z) {
      return J.addEventListener(Q, Z, !0), Z;
    }
    function Uq(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { capture: !0, passive: X }), Z;
    }
    function Yq(J, Q, Z, X) {
      return J.addEventListener(Q, Z, { passive: X }), Z;
    }
    var C6 = null,
      MG = null,
      v6 = null;
    function Kq(J) {
      return (C6 = J), (MG = PK()), !0;
    }
    function Wq() {
      (C6 = null), (MG = null), (v6 = null);
    }
    function jK() {
      if (v6) return v6;
      var J,
        Q = MG,
        Z = Q.length,
        X,
        G = PK(),
        B = G.length;
      for (J = 0; J < Z; J++) if (Q[J] !== G[J]) break;
      var U = Z - J;
      for (X = 1; X <= U; X++) if (Q[Z - X] !== G[B - X]) break;
      var Y = X > 1 ? 1 - X : void 0;
      return (v6 = G.slice(J, Y)), v6;
    }
    function PK() {
      if ("value" in C6) return C6.value;
      return C6.textContent;
    }
    function O8(J) {
      var Q,
        Z = J.keyCode;
      if ("charCode" in J) {
        if (((Q = J.charCode), Q === 0 && Z === 13)) Q = 13;
      } else Q = Z;
      if (Q === 10) Q = 13;
      if (Q >= 32 || Q === 13) return Q;
      return 0;
    }
    function $8() {
      return !0;
    }
    function AK() {
      return !1;
    }
    function yQ(J) {
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
        var z =
          B.defaultPrevented != null
            ? B.defaultPrevented
            : B.returnValue === !1;
        if (z) this.isDefaultPrevented = $8;
        else this.isDefaultPrevented = AK;
        return (this.isPropagationStopped = AK), this;
      }
      return (
        M1(Q.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.preventDefault) Z.preventDefault();
            else if (typeof Z.returnValue !== "unknown") Z.returnValue = !1;
            this.isDefaultPrevented = $8;
          },
          stopPropagation: function () {
            var Z = this.nativeEvent;
            if (!Z) return;
            if (Z.stopPropagation) Z.stopPropagation();
            else if (typeof Z.cancelBubble !== "unknown") Z.cancelBubble = !0;
            this.isPropagationStopped = $8;
          },
          persist: function () {},
          isPersistent: $8,
        }),
        Q
      );
    }
    var M5 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (J) {
          return J.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      VG = yQ(M5),
      N6 = M1({}, M5, { view: 0, detail: 0 }),
      zq = yQ(N6),
      qG,
      OG,
      b6;
    function Hq(J) {
      if (J !== b6) {
        if (b6 && J.type === "mousemove")
          (qG = J.screenX - b6.screenX), (OG = J.screenY - b6.screenY);
        else (qG = 0), (OG = 0);
        b6 = J;
      }
    }
    var D8 = M1({}, N6, {
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
        getModifierState: DG,
        button: 0,
        buttons: 0,
        relatedTarget: function (J) {
          if (J.relatedTarget === void 0)
            return J.fromElement === J.srcElement ? J.toElement : J.fromElement;
          return J.relatedTarget;
        },
        movementX: function (J) {
          if ("movementX" in J) return J.movementX;
          return Hq(J), qG;
        },
        movementY: function (J) {
          if ("movementY" in J) return J.movementY;
          return OG;
        },
      }),
      EK = yQ(D8),
      Mq = M1({}, D8, { dataTransfer: 0 }),
      Vq = yQ(Mq),
      qq = M1({}, N6, { relatedTarget: 0 }),
      $G = yQ(qq),
      Oq = M1({}, M5, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      $q = yQ(Oq),
      Dq = M1({}, M5, {
        clipboardData: function (J) {
          return "clipboardData" in J ? J.clipboardData : window.clipboardData;
        },
      }),
      jq = yQ(Dq),
      Pq = M1({}, M5, { data: 0 }),
      RK = yQ(Pq),
      Aq = RK,
      Eq = {
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
      Rq = {
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
    function Lq(J) {
      if (J.key) {
        var Q = Eq[J.key] || J.key;
        if (Q !== "Unidentified") return Q;
      }
      if (J.type === "keypress") {
        var Z = O8(J);
        return Z === 13 ? "Enter" : String.fromCharCode(Z);
      }
      if (J.type === "keydown" || J.type === "keyup")
        return Rq[J.keyCode] || "Unidentified";
      return "";
    }
    var Fq = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
    function Iq(J) {
      var Q = this,
        Z = Q.nativeEvent;
      if (Z.getModifierState) return Z.getModifierState(J);
      var X = Fq[J];
      return X ? !!Z[X] : !1;
    }
    function DG(J) {
      return Iq;
    }
    var xq = M1({}, N6, {
        key: Lq,
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: DG,
        charCode: function (J) {
          if (J.type === "keypress") return O8(J);
          return 0;
        },
        keyCode: function (J) {
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
        which: function (J) {
          if (J.type === "keypress") return O8(J);
          if (J.type === "keydown" || J.type === "keyup") return J.keyCode;
          return 0;
        },
      }),
      wq = yQ(xq),
      _q = M1({}, D8, {
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
      LK = yQ(_q),
      Sq = M1({}, N6, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: DG,
      }),
      Cq = yQ(Sq),
      vq = M1({}, M5, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Nq = yQ(vq),
      bq = M1({}, D8, {
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
      kq = yQ(bq),
      gq = [9, 13, 27, 32],
      FK = 229,
      jG = mJ && "CompositionEvent" in window,
      k6 = null;
    if (mJ && "documentMode" in document) k6 = document.documentMode;
    var Tq = mJ && "TextEvent" in window && !k6,
      IK = mJ && (!jG || (k6 && k6 > 8 && k6 <= 11)),
      xK = 32,
      wK = String.fromCharCode(xK);
    function hq() {
      BQ("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        BQ("onCompositionEnd", [
          "compositionend",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]),
        BQ("onCompositionStart", [
          "compositionstart",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]),
        BQ("onCompositionUpdate", [
          "compositionupdate",
          "focusout",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
        ]);
    }
    var _K = !1;
    function fq(J) {
      return (J.ctrlKey || J.altKey || J.metaKey) && !(J.ctrlKey && J.altKey);
    }
    function uq(J) {
      switch (J) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dq(J, Q) {
      return J === "keydown" && Q.keyCode === FK;
    }
    function SK(J, Q) {
      switch (J) {
        case "keyup":
          return gq.indexOf(Q.keyCode) !== -1;
        case "keydown":
          return Q.keyCode !== FK;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function CK(J) {
      var Q = J.detail;
      if (typeof Q === "object" && "data" in Q) return Q.data;
      return null;
    }
    function vK(J) {
      return J.locale === "ko";
    }
    var V5 = !1;
    function sq(J, Q, Z, X, G) {
      var B, U;
      if (jG) B = uq(Q);
      else if (!V5) {
        if (dq(Q, X)) B = "onCompositionStart";
      } else if (SK(Q, X)) B = "onCompositionEnd";
      if (!B) return null;
      if (IK && !vK(X)) {
        if (!V5 && B === "onCompositionStart") V5 = Kq(G);
        else if (B === "onCompositionEnd") {
          if (V5) U = jK();
        }
      }
      var Y = R8(Z, B);
      if (Y.length > 0) {
        var K = new RK(B, Q, null, X, G);
        if ((J.push({ event: K, listeners: Y }), U)) K.data = U;
        else {
          var z = CK(X);
          if (z !== null) K.data = z;
        }
      }
    }
    function mq(J, Q) {
      switch (J) {
        case "compositionend":
          return CK(Q);
        case "keypress":
          var Z = Q.which;
          if (Z !== xK) return null;
          return (_K = !0), wK;
        case "textInput":
          var X = Q.data;
          if (X === wK && _K) return null;
          return X;
        default:
          return null;
      }
    }
    function yq(J, Q) {
      if (V5) {
        if (J === "compositionend" || (!jG && SK(J, Q))) {
          var Z = jK();
          return Wq(), (V5 = !1), Z;
        }
        return null;
      }
      switch (J) {
        case "paste":
          return null;
        case "keypress":
          if (!fq(Q)) {
            if (Q.char && Q.char.length > 1) return Q.char;
            else if (Q.which) return String.fromCharCode(Q.which);
          }
          return null;
        case "compositionend":
          return IK && !vK(Q) ? null : Q.data;
        default:
          return null;
      }
    }
    function lq(J, Q, Z, X, G) {
      var B;
      if (Tq) B = mq(Q, X);
      else B = yq(Q, X);
      if (!B) return null;
      var U = R8(Z, "onBeforeInput");
      if (U.length > 0) {
        var Y = new Aq("onBeforeInput", "beforeinput", null, X, G);
        J.push({ event: Y, listeners: U }), (Y.data = B);
      }
    }
    function cq(J, Q, Z, X, G, B, U) {
      sq(J, Q, Z, X, G), lq(J, Q, Z, X, G);
    }
    var iq = {
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
    function NK(J) {
      var Q = J && J.nodeName && J.nodeName.toLowerCase();
      if (Q === "input") return !!iq[J.type];
      if (Q === "textarea") return !0;
      return !1;
    }
    function aq(J) {
      if (!mJ) return !1;
      var Q = "on" + J,
        Z = Q in document;
      if (!Z) {
        var X = document.createElement("div");
        X.setAttribute(Q, "return;"), (Z = typeof X[Q] === "function");
      }
      return Z;
    }
    function pq() {
      BQ("onChange", [
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
    function bK(J, Q, Z, X) {
      CY(X);
      var G = R8(Q, "onChange");
      if (G.length > 0) {
        var B = new VG("onChange", "change", null, Z, X);
        J.push({ event: B, listeners: G });
      }
    }
    var g6 = null,
      T6 = null;
    function oq(J) {
      var Q = J.nodeName && J.nodeName.toLowerCase();
      return Q === "select" || (Q === "input" && J.type === "file");
    }
    function rq(J) {
      var Q = [];
      bK(Q, T6, J, jX(J)), kY(nq, Q);
    }
    function nq(J) {
      nK(J, 0);
    }
    function j8(J) {
      var Q = P5(J);
      if (o4(Q)) return J;
    }
    function tq(J, Q) {
      if (J === "change") return Q;
    }
    var kK = !1;
    if (mJ)
      kK = aq("input") && (!document.documentMode || document.documentMode > 9);
    function eq(J, Q) {
      (g6 = J), (T6 = Q), g6.attachEvent("onpropertychange", TK);
    }
    function gK() {
      if (!g6) return;
      g6.detachEvent("onpropertychange", TK), (g6 = null), (T6 = null);
    }
    function TK(J) {
      if (J.propertyName !== "value") return;
      if (j8(T6)) rq(J);
    }
    function JO(J, Q, Z) {
      if (J === "focusin") gK(), eq(Q, Z);
      else if (J === "focusout") gK();
    }
    function QO(J, Q) {
      if (J === "selectionchange" || J === "keyup" || J === "keydown")
        return j8(T6);
    }
    function ZO(J) {
      var Q = J.nodeName;
      return (
        Q &&
        Q.toLowerCase() === "input" &&
        (J.type === "checkbox" || J.type === "radio")
      );
    }
    function XO(J, Q) {
      if (J === "click") return j8(Q);
    }
    function GO(J, Q) {
      if (J === "input" || J === "change") return j8(Q);
    }
    function BO(J) {
      var Q = J._wrapperState;
      if (!Q || !Q.controlled || J.type !== "number") return;
      b1(J, "number", J.value);
    }
    function UO(J, Q, Z, X, G, B, U) {
      var Y = Z ? P5(Z) : window,
        K,
        z;
      if (oq(Y)) K = tq;
      else if (NK(Y))
        if (kK) K = GO;
        else (K = QO), (z = JO);
      else if (ZO(Y)) K = XO;
      if (K) {
        var H = K(Q, Z);
        if (H) {
          bK(J, H, X, G);
          return;
        }
      }
      if (z) z(Q, Y, Z);
      if (Q === "focusout") BO(Y);
    }
    function YO() {
      fQ("onMouseEnter", ["mouseout", "mouseover"]),
        fQ("onMouseLeave", ["mouseout", "mouseover"]),
        fQ("onPointerEnter", ["pointerout", "pointerover"]),
        fQ("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function KO(J, Q, Z, X, G, B, U) {
      var Y = Q === "mouseover" || Q === "pointerover",
        K = Q === "mouseout" || Q === "pointerout";
      if (Y && !IM(X)) {
        var z = X.relatedTarget || X.fromElement;
        if (z) {
          if (F4(z) || n6(z)) return;
        }
      }
      if (!K && !Y) return;
      var H;
      if (G.window === G) H = G;
      else {
        var $ = G.ownerDocument;
        if ($) H = $.defaultView || $.parentWindow;
        else H = window;
      }
      var O, E;
      if (K) {
        var P = X.relatedTarget || X.toElement;
        if (((O = Z), (E = P ? F4(P) : null), E !== null)) {
          var R = O4(E);
          if (E !== R || (E.tag !== c && E.tag !== x1)) E = null;
        }
      } else (O = null), (E = Z);
      if (O === E) return;
      var g = EK,
        l = "onMouseLeave",
        d = "onMouseEnter",
        V1 = "mouse";
      if (Q === "pointerout" || Q === "pointerover")
        (g = LK),
          (l = "onPointerLeave"),
          (d = "onPointerEnter"),
          (V1 = "pointer");
      var q1 = O == null ? H : P5(O),
        D = E == null ? H : P5(E),
        F = new g(l, V1 + "leave", O, X, G);
      (F.target = q1), (F.relatedTarget = D);
      var j = null,
        _ = F4(G);
      if (_ === Z) {
        var h = new g(d, V1 + "enter", E, X, G);
        (h.target = D), (h.relatedTarget = q1), (j = h);
      }
      NO(J, F, j, O, E);
    }
    function WO(J, Q) {
      return (J === Q && (J !== 0 || 1 / J === 1 / Q)) || (J !== J && Q !== Q);
    }
    var lQ = typeof Object.is === "function" ? Object.is : WO;
    function h6(J, Q) {
      if (lQ(J, Q)) return !0;
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
        if (!yJ.call(Q, B) || !lQ(J[B], Q[B])) return !1;
      }
      return !0;
    }
    function hK(J) {
      while (J && J.firstChild) J = J.firstChild;
      return J;
    }
    function zO(J) {
      while (J) {
        if (J.nextSibling) return J.nextSibling;
        J = J.parentNode;
      }
    }
    function fK(J, Q) {
      var Z = hK(J),
        X = 0,
        G = 0;
      while (Z) {
        if (Z.nodeType === Z0) {
          if (((G = X + Z.textContent.length), X <= Q && G >= Q))
            return { node: Z, offset: Q - X };
          X = G;
        }
        Z = hK(zO(Z));
      }
    }
    function HO(J) {
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
      return MO(J, G, B, U, Y);
    }
    function MO(J, Q, Z, X, G) {
      var B = 0,
        U = -1,
        Y = -1,
        K = 0,
        z = 0,
        H = J,
        $ = null;
      J: while (!0) {
        var O = null;
        while (!0) {
          if (H === Q && (Z === 0 || H.nodeType === Z0)) U = B + Z;
          if (H === X && (G === 0 || H.nodeType === Z0)) Y = B + G;
          if (H.nodeType === Z0) B += H.nodeValue.length;
          if ((O = H.firstChild) === null) break;
          ($ = H), (H = O);
        }
        while (!0) {
          if (H === J) break J;
          if ($ === Q && ++K === Z) U = B;
          if ($ === X && ++z === G) Y = B;
          if ((O = H.nextSibling) !== null) break;
          (H = $), ($ = H.parentNode);
        }
        H = O;
      }
      if (U === -1 || Y === -1) return null;
      return { start: U, end: Y };
    }
    function VO(J, Q) {
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
      var z = fK(J, U),
        H = fK(J, Y);
      if (z && H) {
        if (
          G.rangeCount === 1 &&
          G.anchorNode === z.node &&
          G.anchorOffset === z.offset &&
          G.focusNode === H.node &&
          G.focusOffset === H.offset
        )
          return;
        var $ = Z.createRange();
        if (($.setStart(z.node, z.offset), G.removeAllRanges(), U > Y))
          G.addRange($), G.extend(H.node, H.offset);
        else $.setEnd(H.node, H.offset), G.addRange($);
      }
    }
    function uK(J) {
      return J && J.nodeType === Z0;
    }
    function dK(J, Q) {
      if (!J || !Q) return !1;
      else if (J === Q) return !0;
      else if (uK(J)) return !1;
      else if (uK(Q)) return dK(J, Q.parentNode);
      else if ("contains" in J) return J.contains(Q);
      else if (J.compareDocumentPosition)
        return !!(J.compareDocumentPosition(Q) & 16);
      else return !1;
    }
    function qO(J) {
      return J && J.ownerDocument && dK(J.ownerDocument.documentElement, J);
    }
    function OO(J) {
      try {
        return typeof J.contentWindow.location.href === "string";
      } catch (Q) {
        return !1;
      }
    }
    function sK() {
      var J = window,
        Q = r4();
      while (Q instanceof J.HTMLIFrameElement) {
        if (OO(Q)) J = Q.contentWindow;
        else return Q;
        Q = r4(J.document);
      }
      return Q;
    }
    function PG(J) {
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
    function $O() {
      var J = sK();
      return { focusedElem: J, selectionRange: PG(J) ? jO(J) : null };
    }
    function DO(J) {
      var Q = sK(),
        Z = J.focusedElem,
        X = J.selectionRange;
      if (Q !== Z && qO(Z)) {
        if (X !== null && PG(Z)) PO(Z, X);
        var G = [],
          B = Z;
        while ((B = B.parentNode))
          if (B.nodeType === CQ)
            G.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
        if (typeof Z.focus === "function") Z.focus();
        for (var U = 0; U < G.length; U++) {
          var Y = G[U];
          (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
        }
      }
    }
    function jO(J) {
      var Q;
      if ("selectionStart" in J)
        Q = { start: J.selectionStart, end: J.selectionEnd };
      else Q = HO(J);
      return Q || { start: 0, end: 0 };
    }
    function PO(J, Q) {
      var { start: Z, end: X } = Q;
      if (X === void 0) X = Z;
      if ("selectionStart" in J)
        (J.selectionStart = Z), (J.selectionEnd = Math.min(X, J.value.length));
      else VO(J, Q);
    }
    var AO = mJ && "documentMode" in document && document.documentMode <= 11;
    function EO() {
      BQ("onSelect", [
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
    var q5 = null,
      AG = null,
      f6 = null,
      EG = !1;
    function RO(J) {
      if ("selectionStart" in J && PG(J))
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
    function LO(J) {
      return J.window === J
        ? J.document
        : J.nodeType === X0
          ? J
          : J.ownerDocument;
    }
    function mK(J, Q, Z) {
      var X = LO(Z);
      if (EG || q5 == null || q5 !== r4(X)) return;
      var G = RO(q5);
      if (!f6 || !h6(f6, G)) {
        f6 = G;
        var B = R8(AG, "onSelect");
        if (B.length > 0) {
          var U = new VG("onSelect", "select", null, Q, Z);
          J.push({ event: U, listeners: B }), (U.target = q5);
        }
      }
    }
    function FO(J, Q, Z, X, G, B, U) {
      var Y = Z ? P5(Z) : window;
      switch (Q) {
        case "focusin":
          if (NK(Y) || Y.contentEditable === "true")
            (q5 = Y), (AG = Z), (f6 = null);
          break;
        case "focusout":
          (q5 = null), (AG = null), (f6 = null);
          break;
        case "mousedown":
          EG = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (EG = !1), mK(J, X, G);
          break;
        case "selectionchange":
          if (AO) break;
        case "keydown":
        case "keyup":
          mK(J, X, G);
      }
    }
    function P8(J, Q) {
      var Z = {};
      return (
        (Z[J.toLowerCase()] = Q.toLowerCase()),
        (Z["Webkit" + J] = "webkit" + Q),
        (Z["Moz" + J] = "moz" + Q),
        Z
      );
    }
    var O5 = {
        animationend: P8("Animation", "AnimationEnd"),
        animationiteration: P8("Animation", "AnimationIteration"),
        animationstart: P8("Animation", "AnimationStart"),
        transitionend: P8("Transition", "TransitionEnd"),
      },
      RG = {},
      yK = {};
    if (mJ) {
      if (
        ((yK = document.createElement("div").style),
        !("AnimationEvent" in window))
      )
        delete O5.animationend.animation,
          delete O5.animationiteration.animation,
          delete O5.animationstart.animation;
      if (!("TransitionEvent" in window)) delete O5.transitionend.transition;
    }
    function A8(J) {
      if (RG[J]) return RG[J];
      else if (!O5[J]) return J;
      var Q = O5[J];
      for (var Z in Q)
        if (Q.hasOwnProperty(Z) && Z in yK) return (RG[J] = Q[Z]);
      return J;
    }
    var lK = A8("animationend"),
      cK = A8("animationiteration"),
      iK = A8("animationstart"),
      aK = A8("transitionend"),
      pK = new Map(),
      oK = [
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
    function s0(J, Q) {
      pK.set(J, Q), BQ(Q, [J]);
    }
    function IO() {
      for (var J = 0; J < oK.length; J++) {
        var Q = oK[J],
          Z = Q.toLowerCase(),
          X = Q[0].toUpperCase() + Q.slice(1);
        s0(Z, "on" + X);
      }
      s0(lK, "onAnimationEnd"),
        s0(cK, "onAnimationIteration"),
        s0(iK, "onAnimationStart"),
        s0("dblclick", "onDoubleClick"),
        s0("focusin", "onFocus"),
        s0("focusout", "onBlur"),
        s0(aK, "onTransitionEnd");
    }
    function xO(J, Q, Z, X, G, B, U) {
      var Y = pK.get(Q);
      if (Y === void 0) return;
      var K = VG,
        z = Q;
      switch (Q) {
        case "keypress":
          if (O8(X) === 0) return;
        case "keydown":
        case "keyup":
          K = wq;
          break;
        case "focusin":
          (z = "focus"), (K = $G);
          break;
        case "focusout":
          (z = "blur"), (K = $G);
          break;
        case "beforeblur":
        case "afterblur":
          K = $G;
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
          K = EK;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          K = Vq;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          K = Cq;
          break;
        case lK:
        case cK:
        case iK:
          K = $q;
          break;
        case aK:
          K = Nq;
          break;
        case "scroll":
          K = zq;
          break;
        case "wheel":
          K = kq;
          break;
        case "copy":
        case "cut":
        case "paste":
          K = jq;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          K = LK;
          break;
      }
      var H = (B & W6) !== 0;
      {
        var $ = !H && Q === "scroll",
          O = CO(Z, Y, X.type, H, $);
        if (O.length > 0) {
          var E = new K(Y, z, null, X, G);
          J.push({ event: E, listeners: O });
        }
      }
    }
    IO(), YO(), pq(), EO(), hq();
    function wO(J, Q, Z, X, G, B, U) {
      xO(J, Q, Z, X, G, B);
      var Y = (B & RM) === 0;
      if (Y)
        KO(J, Q, Z, X, G),
          UO(J, Q, Z, X, G),
          FO(J, Q, Z, X, G),
          cq(J, Q, Z, X, G);
    }
    var u6 = [
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
      LG = new Set(
        ["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(u6),
      );
    function rK(J, Q, Z) {
      var X = J.type || "unknown-event";
      (J.currentTarget = Z), kM(X, Q, void 0, J), (J.currentTarget = null);
    }
    function _O(J, Q, Z) {
      var X;
      if (Z)
        for (var G = Q.length - 1; G >= 0; G--) {
          var B = Q[G],
            U = B.instance,
            Y = B.currentTarget,
            K = B.listener;
          if (U !== X && J.isPropagationStopped()) return;
          rK(J, K, Y), (X = U);
        }
      else
        for (var z = 0; z < Q.length; z++) {
          var H = Q[z],
            $ = H.instance,
            O = H.currentTarget,
            E = H.listener;
          if ($ !== X && J.isPropagationStopped()) return;
          rK(J, E, O), (X = $);
        }
    }
    function nK(J, Q) {
      var Z = (Q & W6) !== 0;
      for (var X = 0; X < J.length; X++) {
        var G = J[X],
          B = G.event,
          U = G.listeners;
        _O(B, U, Z);
      }
      gM();
    }
    function SO(J, Q, Z, X, G) {
      var B = jX(Z),
        U = [];
      wO(U, J, X, Z, B, Q), nK(U, Q);
    }
    function t1(J, Q) {
      if (!LG.has(J))
        M(
          'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
          J,
        );
      var Z = !1,
        X = B$(Q),
        G = bO(J, Z);
      if (!X.has(G)) tK(Q, J, DX, Z), X.add(G);
    }
    function FG(J, Q, Z) {
      if (LG.has(J) && !Q)
        M(
          'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
          J,
        );
      var X = 0;
      if (Q) X |= W6;
      tK(Z, J, X, Q);
    }
    var E8 = "_reactListening" + Math.random().toString(36).slice(2);
    function d6(J) {
      if (!J[E8]) {
        (J[E8] = !0),
          hQ.forEach(function (Z) {
            if (Z !== "selectionchange") {
              if (!LG.has(Z)) FG(Z, !1, J);
              FG(Z, !0, J);
            }
          });
        var Q = J.nodeType === X0 ? J : J.ownerDocument;
        if (Q !== null) {
          if (!Q[E8]) (Q[E8] = !0), FG("selectionchange", !1, Q);
        }
      }
    }
    function tK(J, Q, Z, X, G) {
      var B = Jq(J, Q, Z),
        U = void 0;
      if (EX) {
        if (Q === "touchstart" || Q === "touchmove" || Q === "wheel") U = !0;
      }
      J = J;
      var Y;
      if (X)
        if (U !== void 0) Y = Uq(J, Q, B, U);
        else Y = Bq(J, Q, B);
      else if (U !== void 0) Y = Yq(J, Q, B, U);
      else Y = Gq(J, Q, B);
    }
    function eK(J, Q) {
      return J === Q || (J.nodeType === $J && J.parentNode === Q);
    }
    function IG(J, Q, Z, X, G) {
      var B = X;
      if ((Q & _Y) === 0 && (Q & DX) === 0) {
        var U = G;
        if (X !== null) {
          var Y = X;
          J: while (!0) {
            if (Y === null) return;
            var K = Y.tag;
            if (K === m || K === O1) {
              var z = Y.stateNode.containerInfo;
              if (eK(z, U)) break;
              if (K === O1) {
                var H = Y.return;
                while (H !== null) {
                  var $ = H.tag;
                  if ($ === m || $ === O1) {
                    var O = H.stateNode.containerInfo;
                    if (eK(O, U)) return;
                  }
                  H = H.return;
                }
              }
              while (z !== null) {
                var E = F4(z);
                if (E === null) return;
                var P = E.tag;
                if (P === c || P === x1) {
                  Y = B = E;
                  continue J;
                }
                z = z.parentNode;
              }
            }
            Y = Y.return;
          }
        }
      }
      kY(function () {
        return SO(J, Q, Z, B);
      });
    }
    function s6(J, Q, Z) {
      return { instance: J, listener: Q, currentTarget: Z };
    }
    function CO(J, Q, Z, X, G, B) {
      var U = Q !== null ? Q + "Capture" : null,
        Y = X ? U : Q,
        K = [],
        z = J,
        H = null;
      while (z !== null) {
        var $ = z,
          O = $.stateNode,
          E = $.tag;
        if (E === c && O !== null) {
          if (((H = O), Y !== null)) {
            var P = H6(z, Y);
            if (P != null) K.push(s6(z, P, H));
          }
        }
        if (G) break;
        z = z.return;
      }
      return K;
    }
    function R8(J, Q) {
      var Z = Q + "Capture",
        X = [],
        G = J;
      while (G !== null) {
        var B = G,
          U = B.stateNode,
          Y = B.tag;
        if (Y === c && U !== null) {
          var K = U,
            z = H6(G, Z);
          if (z != null) X.unshift(s6(G, z, K));
          var H = H6(G, Q);
          if (H != null) X.push(s6(G, H, K));
        }
        G = G.return;
      }
      return X;
    }
    function $5(J) {
      if (J === null) return null;
      do J = J.return;
      while (J && J.tag !== c);
      if (J) return J;
      return null;
    }
    function vO(J, Q) {
      var Z = J,
        X = Q,
        G = 0;
      for (var B = Z; B; B = $5(B)) G++;
      var U = 0;
      for (var Y = X; Y; Y = $5(Y)) U++;
      while (G - U > 0) (Z = $5(Z)), G--;
      while (U - G > 0) (X = $5(X)), U--;
      var K = G;
      while (K--) {
        if (Z === X || (X !== null && Z === X.alternate)) return Z;
        (Z = $5(Z)), (X = $5(X));
      }
      return null;
    }
    function JW(J, Q, Z, X, G) {
      var B = Q._reactName,
        U = [],
        Y = Z;
      while (Y !== null) {
        if (Y === X) break;
        var K = Y,
          z = K.alternate,
          H = K.stateNode,
          $ = K.tag;
        if (z !== null && z === X) break;
        if ($ === c && H !== null) {
          var O = H;
          if (G) {
            var E = H6(Y, B);
            if (E != null) U.unshift(s6(Y, E, O));
          } else if (!G) {
            var P = H6(Y, B);
            if (P != null) U.push(s6(Y, P, O));
          }
        }
        Y = Y.return;
      }
      if (U.length !== 0) J.push({ event: Q, listeners: U });
    }
    function NO(J, Q, Z, X, G) {
      var B = X && G ? vO(X, G) : null;
      if (X !== null) JW(J, Q, X, B, !1);
      if (G !== null && Z !== null) JW(J, Z, G, B, !0);
    }
    function bO(J, Q) {
      return J + "__" + (Q ? "capture" : "bubble");
    }
    var vQ = !1,
      m6 = "dangerouslySetInnerHTML",
      L8 = "suppressContentEditableWarning",
      m0 = "suppressHydrationWarning",
      QW = "autoFocus",
      R4 = "children",
      L4 = "style",
      F8 = "__html",
      xG,
      I8,
      y6,
      ZW,
      x8,
      XW,
      GW;
    (xG = { dialog: !0, webview: !0 }),
      (I8 = function (J, Q) {
        OM(J, Q),
          $M(J, Q),
          EM(J, Q, {
            registrationNameDependencies: $Q,
            possibleRegistrationNames: tQ,
          });
      }),
      (XW = mJ && !document.documentMode),
      (y6 = function (J, Q, Z) {
        if (vQ) return;
        var X = w8(Z),
          G = w8(Q);
        if (G === X) return;
        (vQ = !0),
          M(
            "Prop `%s` did not match. Server: %s Client: %s",
            J,
            JSON.stringify(G),
            JSON.stringify(X),
          );
      }),
      (ZW = function (J) {
        if (vQ) return;
        vQ = !0;
        var Q = [];
        J.forEach(function (Z) {
          Q.push(Z);
        }),
          M("Extra attributes from the server: %s", Q);
      }),
      (x8 = function (J, Q) {
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
      (GW = function (J, Q) {
        var Z =
          J.namespaceURI === Q0
            ? J.ownerDocument.createElement(J.tagName)
            : J.ownerDocument.createElementNS(J.namespaceURI, J.tagName);
        return (Z.innerHTML = Q), Z.innerHTML;
      });
    var kO = /\r\n?/g,
      gO = /\u0000|\uFFFD/g;
    function w8(J) {
      eQ(J);
      var Q = typeof J === "string" ? J : "" + J;
      return Q.replace(kO, "\n").replace(gO, "");
    }
    function _8(J, Q, Z, X) {
      var G = w8(Q),
        B = w8(J);
      if (B === G) return;
      if (X) {
        if (!vQ)
          (vQ = !0),
            M('Text content did not match. Server: "%s" Client: "%s"', B, G);
      }
      if (Z && bZ)
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function BW(J) {
      return J.nodeType === X0 ? J : J.ownerDocument;
    }
    function TO() {}
    function S8(J) {
      J.onclick = TO;
    }
    function hO(J, Q, Z, X, G) {
      for (var B in X) {
        if (!X.hasOwnProperty(B)) continue;
        var U = X[B];
        if (B === L4) {
          if (U) Object.freeze(U);
          RY(Q, U);
        } else if (B === m6) {
          var Y = U ? U[F8] : void 0;
          if (Y != null) DY(Q, Y);
        } else if (B === R4) {
          if (typeof U === "string") {
            var K = J !== "textarea" || U !== "";
            if (K) r7(Q, U);
          } else if (typeof U === "number") r7(Q, "" + U);
        } else if (B === L8 || B === m0);
        else if (B === QW);
        else if ($Q.hasOwnProperty(B)) {
          if (U != null) {
            if (typeof U !== "function") x8(B, U);
            if (B === "onScroll") t1("scroll", Q);
          }
        } else if (U != null) Y4(Q, B, U, G);
      }
    }
    function fO(J, Q, Z, X) {
      for (var G = 0; G < Q.length; G += 2) {
        var B = Q[G],
          U = Q[G + 1];
        if (B === L4) RY(J, U);
        else if (B === m6) DY(J, U);
        else if (B === R4) r7(J, U);
        else Y4(J, B, U, X);
      }
    }
    function uO(J, Q, Z, X) {
      var G,
        B = BW(Z),
        U,
        Y = X;
      if (Y === Q0) Y = HX(J);
      if (Y === Q0) {
        if (((G = z4(J, Q)), !G && J !== J.toLowerCase()))
          M(
            "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
            J,
          );
        if (J === "script") {
          var K = B.createElement("div");
          K.innerHTML = "<script></script>/script>";
          var z = K.firstChild;
          U = K.removeChild(z);
        } else if (typeof Q.is === "string")
          U = B.createElement(J, { is: Q.is });
        else if (((U = B.createElement(J)), J === "select")) {
          var H = U;
          if (Q.multiple) H.multiple = !0;
          else if (Q.size) H.size = Q.size;
        }
      } else U = B.createElementNS(Y, J);
      if (Y === Q0) {
        if (
          !G &&
          Object.prototype.toString.call(U) === "[object HTMLUnknownElement]" &&
          !yJ.call(xG, J)
        )
          (xG[J] = !0),
            M(
              "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
              J,
            );
      }
      return U;
    }
    function dO(J, Q) {
      return BW(Q).createTextNode(J);
    }
    function sO(J, Q, Z, X) {
      var G = z4(Q, Z);
      I8(Q, Z);
      var B;
      switch (Q) {
        case "dialog":
          t1("cancel", J), t1("close", J), (B = Z);
          break;
        case "iframe":
        case "object":
        case "embed":
          t1("load", J), (B = Z);
          break;
        case "video":
        case "audio":
          for (var U = 0; U < u6.length; U++) t1(u6[U], J);
          B = Z;
          break;
        case "source":
          t1("error", J), (B = Z);
          break;
        case "img":
        case "image":
        case "link":
          t1("error", J), t1("load", J), (B = Z);
          break;
        case "details":
          t1("toggle", J), (B = Z);
          break;
        case "input":
          L(J, Z), (B = A(J, Z)), t1("invalid", J);
          break;
        case "option":
          ZJ(J, Z), (B = Z);
          break;
        case "select":
          MY(J, Z), (B = Y6(J, Z)), t1("invalid", J);
          break;
        case "textarea":
          qY(J, Z), (B = WX(J, Z)), t1("invalid", J);
          break;
        default:
          B = Z;
      }
      switch (($X(Q, B), hO(Q, J, X, B, G), Q)) {
        case "input":
          g0(J), u(J, Z, !1);
          break;
        case "textarea":
          g0(J), $Y(J);
          break;
        case "option":
          RJ(J, Z);
          break;
        case "select":
          h3(J, Z);
          break;
        default:
          if (typeof B.onClick === "function") S8(J);
          break;
      }
    }
    function mO(J, Q, Z, X, G) {
      I8(Q, X);
      var B = null,
        U,
        Y;
      switch (Q) {
        case "input":
          (U = A(J, Z)), (Y = A(J, X)), (B = []);
          break;
        case "select":
          (U = Y6(J, Z)), (Y = Y6(J, X)), (B = []);
          break;
        case "textarea":
          (U = WX(J, Z)), (Y = WX(J, X)), (B = []);
          break;
        default:
          if (
            ((U = Z),
            (Y = X),
            typeof U.onClick !== "function" && typeof Y.onClick === "function")
          )
            S8(J);
          break;
      }
      $X(Q, Y);
      var K,
        z,
        H = null;
      for (K in U) {
        if (Y.hasOwnProperty(K) || !U.hasOwnProperty(K) || U[K] == null)
          continue;
        if (K === L4) {
          var $ = U[K];
          for (z in $)
            if ($.hasOwnProperty(z)) {
              if (!H) H = {};
              H[z] = "";
            }
        } else if (K === m6 || K === R4);
        else if (K === L8 || K === m0);
        else if (K === QW);
        else if ($Q.hasOwnProperty(K)) {
          if (!B) B = [];
        } else (B = B || []).push(K, null);
      }
      for (K in Y) {
        var O = Y[K],
          E = U != null ? U[K] : void 0;
        if (!Y.hasOwnProperty(K) || O === E || (O == null && E == null))
          continue;
        if (K === L4) {
          if (O) Object.freeze(O);
          if (E) {
            for (z in E)
              if (E.hasOwnProperty(z) && (!O || !O.hasOwnProperty(z))) {
                if (!H) H = {};
                H[z] = "";
              }
            for (z in O)
              if (O.hasOwnProperty(z) && E[z] !== O[z]) {
                if (!H) H = {};
                H[z] = O[z];
              }
          } else {
            if (!H) {
              if (!B) B = [];
              B.push(K, H);
            }
            H = O;
          }
        } else if (K === m6) {
          var P = O ? O[F8] : void 0,
            R = E ? E[F8] : void 0;
          if (P != null) {
            if (R !== P) (B = B || []).push(K, P);
          }
        } else if (K === R4) {
          if (typeof O === "string" || typeof O === "number")
            (B = B || []).push(K, "" + O);
        } else if (K === L8 || K === m0);
        else if ($Q.hasOwnProperty(K)) {
          if (O != null) {
            if (typeof O !== "function") x8(K, O);
            if (K === "onScroll") t1("scroll", J);
          }
          if (!B && E !== O) B = [];
        } else (B = B || []).push(K, O);
      }
      if (H) YM(H, Y[L4]), (B = B || []).push(L4, H);
      return B;
    }
    function yO(J, Q, Z, X, G) {
      if (Z === "input" && G.type === "radio" && G.name != null) S(J, G);
      var B = z4(Z, X),
        U = z4(Z, G);
      switch ((fO(J, Q, B, U), Z)) {
        case "input":
          i(J, G);
          break;
        case "textarea":
          OY(J, G);
          break;
        case "select":
          f3(J, G);
          break;
      }
    }
    function lO(J) {
      {
        var Q = J.toLowerCase();
        if (!n7.hasOwnProperty(Q)) return null;
        return n7[Q] || null;
      }
    }
    function cO(J, Q, Z, X, G, B, U) {
      var Y, K;
      switch (((Y = z4(Q, Z)), I8(Q, Z), Q)) {
        case "dialog":
          t1("cancel", J), t1("close", J);
          break;
        case "iframe":
        case "object":
        case "embed":
          t1("load", J);
          break;
        case "video":
        case "audio":
          for (var z = 0; z < u6.length; z++) t1(u6[z], J);
          break;
        case "source":
          t1("error", J);
          break;
        case "img":
        case "image":
        case "link":
          t1("error", J), t1("load", J);
          break;
        case "details":
          t1("toggle", J);
          break;
        case "input":
          L(J, Z), t1("invalid", J);
          break;
        case "option":
          ZJ(J, Z);
          break;
        case "select":
          MY(J, Z), t1("invalid", J);
          break;
        case "textarea":
          qY(J, Z), t1("invalid", J);
          break;
      }
      $X(Q, Z);
      {
        K = new Set();
        var H = J.attributes;
        for (var $ = 0; $ < H.length; $++) {
          var O = H[$].name.toLowerCase();
          switch (O) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              K.add(H[$].name);
          }
        }
      }
      var E = null;
      for (var P in Z) {
        if (!Z.hasOwnProperty(P)) continue;
        var R = Z[P];
        if (P === R4) {
          if (typeof R === "string") {
            if (J.textContent !== R) {
              if (Z[m0] !== !0) _8(J.textContent, R, B, U);
              E = [R4, R];
            }
          } else if (typeof R === "number") {
            if (J.textContent !== "" + R) {
              if (Z[m0] !== !0) _8(J.textContent, R, B, U);
              E = [R4, "" + R];
            }
          }
        } else if ($Q.hasOwnProperty(P)) {
          if (R != null) {
            if (typeof R !== "function") x8(P, R);
            if (P === "onScroll") t1("scroll", J);
          }
        } else if (U && !0 && typeof Y === "boolean") {
          var g = void 0,
            l = Y && wQ ? null : PQ(P);
          if (Z[m0] === !0);
          else if (
            P === L8 ||
            P === m0 ||
            P === "value" ||
            P === "checked" ||
            P === "selected"
          );
          else if (P === m6) {
            var d = J.innerHTML,
              V1 = R ? R[F8] : void 0;
            if (V1 != null) {
              var q1 = GW(J, V1);
              if (q1 !== d) y6(P, d, q1);
            }
          } else if (P === L4) {
            if ((K.delete(P), XW)) {
              var D = BM(R);
              if (((g = J.getAttribute("style")), D !== g)) y6(P, g, D);
            }
          } else if (Y && !wQ) {
            if ((K.delete(P.toLowerCase()), (g = y4(J, P, R)), R !== g))
              y6(P, g, R);
          } else if (!KJ(P, l, Y) && !s1(P, R, l, Y)) {
            var F = !1;
            if (l !== null) K.delete(l.attributeName), (g = m4(J, P, R, l));
            else {
              var j = X;
              if (j === Q0) j = HX(Q);
              if (j === Q0) K.delete(P.toLowerCase());
              else {
                var _ = lO(P);
                if (_ !== null && _ !== P) (F = !0), K.delete(_);
                K.delete(P);
              }
              g = y4(J, P, R);
            }
            var h = wQ;
            if (!h && R !== g && !F) y6(P, g, R);
          }
        }
      }
      if (U) {
        if (K.size > 0 && Z[m0] !== !0) ZW(K);
      }
      switch (Q) {
        case "input":
          g0(J), u(J, Z, !0);
          break;
        case "textarea":
          g0(J), $Y(J);
          break;
        case "select":
        case "option":
          break;
        default:
          if (typeof Z.onClick === "function") S8(J);
          break;
      }
      return E;
    }
    function iO(J, Q, Z) {
      var X = J.nodeValue !== Q;
      return X;
    }
    function wG(J, Q) {
      {
        if (vQ) return;
        (vQ = !0),
          M(
            "Did not expect server HTML to contain a <%s> in <%s>.",
            Q.nodeName.toLowerCase(),
            J.nodeName.toLowerCase(),
          );
      }
    }
    function _G(J, Q) {
      {
        if (vQ) return;
        (vQ = !0),
          M(
            'Did not expect server HTML to contain the text node "%s" in <%s>.',
            Q.nodeValue,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function SG(J, Q, Z) {
      {
        if (vQ) return;
        (vQ = !0),
          M(
            "Expected server HTML to contain a matching <%s> in <%s>.",
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function CG(J, Q) {
      {
        if (Q === "") return;
        if (vQ) return;
        (vQ = !0),
          M(
            'Expected server HTML to contain a matching text node for "%s" in <%s>.',
            Q,
            J.nodeName.toLowerCase(),
          );
      }
    }
    function aO(J, Q, Z) {
      switch (Q) {
        case "input":
          B1(J, Z);
          return;
        case "textarea":
          d3(J, Z);
          return;
        case "select":
          u3(J, Z);
          return;
      }
    }
    var l6 = function () {},
      c6 = function () {};
    {
      var pO = [
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
        UW = [
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
        oO = UW.concat(["button"]),
        rO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
        YW = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null,
        };
      c6 = function (J, Q) {
        var Z = M1({}, J || YW),
          X = { tag: Q };
        if (UW.indexOf(Q) !== -1)
          (Z.aTagInScope = null),
            (Z.buttonTagInScope = null),
            (Z.nobrTagInScope = null);
        if (oO.indexOf(Q) !== -1) Z.pTagInButtonScope = null;
        if (pO.indexOf(Q) !== -1 && Q !== "address" && Q !== "div" && Q !== "p")
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
      var nO = function (J, Q) {
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
              return rO.indexOf(Q) === -1;
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
        tO = function (J, Q) {
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
        KW = {};
      l6 = function (J, Q, Z) {
        Z = Z || YW;
        var X = Z.current,
          G = X && X.tag;
        if (Q != null) {
          if (J != null)
            M(
              "validateDOMNesting: when childText is passed, childTag should be null",
            );
          J = "#text";
        }
        var B = nO(J, G) ? null : X,
          U = B ? null : tO(J, Z),
          Y = B || U;
        if (!Y) return;
        var K = Y.tag,
          z = !!B + "|" + J + "|" + K;
        if (KW[z]) return;
        KW[z] = !0;
        var H = J,
          $ = "";
        if (J === "#text")
          if (/\S/.test(Q)) H = "Text nodes";
          else
            (H = "Whitespace text nodes"),
              ($ =
                " Make sure you don't have any extra whitespace between tags on each line of your source code.");
        else H = "<" + J + ">";
        if (B) {
          var O = "";
          if (K === "table" && J === "tr")
            O +=
              " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
          M(
            "validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",
            H,
            K,
            $,
            O,
          );
        } else
          M(
            "validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",
            H,
            K,
          );
      };
    }
    var C8 = "suppressHydrationWarning",
      v8 = "$",
      N8 = "/$",
      i6 = "$?",
      a6 = "$!",
      eO = "style",
      vG = null,
      NG = null;
    function J2(J) {
      var Q,
        Z,
        X = J.nodeType;
      switch (X) {
        case X0:
        case VX: {
          Q = X === X0 ? "#document" : "#fragment";
          var G = J.documentElement;
          Z = G ? G.namespaceURI : MX(null, "");
          break;
        }
        default: {
          var B = X === $J ? J.parentNode : J,
            U = B.namespaceURI || null;
          (Q = B.tagName), (Z = MX(U, Q));
          break;
        }
      }
      {
        var Y = Q.toLowerCase(),
          K = c6(null, Y);
        return { namespace: Z, ancestorInfo: K };
      }
    }
    function Q2(J, Q, Z) {
      {
        var X = J,
          G = MX(X.namespace, Q),
          B = c6(X.ancestorInfo, Q);
        return { namespace: G, ancestorInfo: B };
      }
    }
    function bG(J) {
      return J;
    }
    function Z2(J) {
      (vG = eV()), (NG = $O());
      var Q = null;
      return $K(!1), Q;
    }
    function X2(J) {
      DO(NG), $K(vG), (vG = null), (NG = null);
    }
    function G2(J, Q, Z, X, G) {
      var B;
      {
        var U = X;
        if (
          (l6(J, null, U.ancestorInfo),
          typeof Q.children === "string" || typeof Q.children === "number")
        ) {
          var Y = "" + Q.children,
            K = c6(U.ancestorInfo, J);
          l6(null, Y, K);
        }
        B = U.namespace;
      }
      var z = uO(J, Q, Z, B);
      return r6(G, z), sG(z, Q), z;
    }
    function B2(J, Q) {
      J.appendChild(Q);
    }
    function U2(J, Q, Z, X, G) {
      switch ((sO(J, Q, Z, X), Q)) {
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
    function Y2(J, Q, Z, X, G, B) {
      {
        var U = B;
        if (
          typeof X.children !== typeof Z.children &&
          (typeof X.children === "string" || typeof X.children === "number")
        ) {
          var Y = "" + X.children,
            K = c6(U.ancestorInfo, Q);
          l6(null, Y, K);
        }
      }
      return mO(J, Q, Z, X);
    }
    function kG(J, Q) {
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
    function K2(J, Q, Z, X) {
      {
        var G = Z;
        l6(null, J, G.ancestorInfo);
      }
      var B = dO(J, Q);
      return r6(X, B), B;
    }
    function W2() {
      var J = window.event;
      if (J === void 0) return z0;
      return DK(J.type);
    }
    var gG = typeof setTimeout === "function" ? setTimeout : void 0,
      z2 = typeof clearTimeout === "function" ? clearTimeout : void 0,
      TG = -1,
      WW = typeof Promise === "function" ? Promise : void 0,
      H2 =
        typeof queueMicrotask === "function"
          ? queueMicrotask
          : typeof WW !== "undefined"
            ? function (J) {
                return WW.resolve(null).then(J).catch(M2);
              }
            : gG;
    function M2(J) {
      setTimeout(function () {
        throw J;
      });
    }
    function V2(J, Q, Z, X) {
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
    function q2(J, Q, Z, X, G, B) {
      yO(J, Q, Z, X, G), sG(J, G);
    }
    function zW(J) {
      r7(J, "");
    }
    function O2(J, Q, Z) {
      J.nodeValue = Z;
    }
    function $2(J, Q) {
      J.appendChild(Q);
    }
    function D2(J, Q) {
      var Z;
      if (J.nodeType === $J) (Z = J.parentNode), Z.insertBefore(Q, J);
      else (Z = J), Z.appendChild(Q);
      var X = J._reactRootContainer;
      if ((X === null || X === void 0) && Z.onclick === null) S8(Z);
    }
    function j2(J, Q, Z) {
      J.insertBefore(Q, Z);
    }
    function P2(J, Q, Z) {
      if (J.nodeType === $J) J.parentNode.insertBefore(Q, Z);
      else J.insertBefore(Q, Z);
    }
    function A2(J, Q) {
      J.removeChild(Q);
    }
    function E2(J, Q) {
      if (J.nodeType === $J) J.parentNode.removeChild(Q);
      else J.removeChild(Q);
    }
    function hG(J, Q) {
      var Z = Q,
        X = 0;
      do {
        var G = Z.nextSibling;
        if ((J.removeChild(Z), G && G.nodeType === $J)) {
          var B = G.data;
          if (B === N8)
            if (X === 0) {
              J.removeChild(G), S6(Q);
              return;
            } else X--;
          else if (B === v8 || B === i6 || B === a6) X++;
        }
        Z = G;
      } while (Z);
      S6(Q);
    }
    function R2(J, Q) {
      if (J.nodeType === $J) hG(J.parentNode, Q);
      else if (J.nodeType === CQ) hG(J, Q);
      S6(J);
    }
    function L2(J) {
      J = J;
      var Q = J.style;
      if (typeof Q.setProperty === "function")
        Q.setProperty("display", "none", "important");
      else Q.display = "none";
    }
    function F2(J) {
      J.nodeValue = "";
    }
    function I2(J, Q) {
      J = J;
      var Z = Q[eO],
        X =
          Z !== void 0 && Z !== null && Z.hasOwnProperty("display")
            ? Z.display
            : null;
      J.style.display = qX("display", X);
    }
    function x2(J, Q) {
      J.nodeValue = Q;
    }
    function w2(J) {
      if (J.nodeType === CQ) J.textContent = "";
      else if (J.nodeType === X0) {
        if (J.documentElement) J.removeChild(J.documentElement);
      }
    }
    function _2(J, Q, Z) {
      if (J.nodeType !== CQ || Q.toLowerCase() !== J.nodeName.toLowerCase())
        return null;
      return J;
    }
    function S2(J, Q) {
      if (Q === "" || J.nodeType !== Z0) return null;
      return J;
    }
    function C2(J) {
      if (J.nodeType !== $J) return null;
      return J;
    }
    function HW(J) {
      return J.data === i6;
    }
    function fG(J) {
      return J.data === a6;
    }
    function v2(J) {
      var Q = J.nextSibling && J.nextSibling.dataset,
        Z,
        X,
        G;
      if (Q) (Z = Q.dgst), (X = Q.msg), (G = Q.stck);
      return { message: X, digest: Z, stack: G };
    }
    function N2(J, Q) {
      J._reactRetry = Q;
    }
    function b8(J) {
      for (; J != null; J = J.nextSibling) {
        var Q = J.nodeType;
        if (Q === CQ || Q === Z0) break;
        if (Q === $J) {
          var Z = J.data;
          if (Z === v8 || Z === a6 || Z === i6) break;
          if (Z === N8) return null;
        }
      }
      return J;
    }
    function p6(J) {
      return b8(J.nextSibling);
    }
    function b2(J) {
      return b8(J.firstChild);
    }
    function k2(J) {
      return b8(J.firstChild);
    }
    function g2(J) {
      return b8(J.nextSibling);
    }
    function T2(J, Q, Z, X, G, B, U) {
      r6(B, J), sG(J, Z);
      var Y;
      {
        var K = G;
        Y = K.namespace;
      }
      var z = (B.mode & D1) !== r;
      return cO(J, Q, Z, Y, X, z, U);
    }
    function h2(J, Q, Z, X) {
      r6(Z, J);
      var G = (Z.mode & D1) !== r;
      return iO(J, Q);
    }
    function f2(J, Q) {
      r6(Q, J);
    }
    function u2(J) {
      var Q = J.nextSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === $J) {
          var X = Q.data;
          if (X === N8)
            if (Z === 0) return p6(Q);
            else Z--;
          else if (X === v8 || X === a6 || X === i6) Z++;
        }
        Q = Q.nextSibling;
      }
      return null;
    }
    function MW(J) {
      var Q = J.previousSibling,
        Z = 0;
      while (Q) {
        if (Q.nodeType === $J) {
          var X = Q.data;
          if (X === v8 || X === a6 || X === i6)
            if (Z === 0) return Q;
            else Z--;
          else if (X === N8) Z++;
        }
        Q = Q.previousSibling;
      }
      return null;
    }
    function d2(J) {
      S6(J);
    }
    function s2(J) {
      S6(J);
    }
    function m2(J) {
      return J !== "head" && J !== "body";
    }
    function y2(J, Q, Z, X) {
      var G = !0;
      _8(Q.nodeValue, Z, X, G);
    }
    function l2(J, Q, Z, X, G, B) {
      if (Q[C8] !== !0) {
        var U = !0;
        _8(X.nodeValue, G, B, U);
      }
    }
    function c2(J, Q) {
      if (Q.nodeType === CQ) wG(J, Q);
      else if (Q.nodeType === $J);
      else _G(J, Q);
    }
    function i2(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null)
          if (Q.nodeType === CQ) wG(Z, Q);
          else if (Q.nodeType === $J);
          else _G(Z, Q);
      }
    }
    function a2(J, Q, Z, X, G) {
      if (G || Q[C8] !== !0)
        if (X.nodeType === CQ) wG(Z, X);
        else if (X.nodeType === $J);
        else _G(Z, X);
    }
    function p2(J, Q, Z) {
      SG(J, Q);
    }
    function o2(J, Q) {
      CG(J, Q);
    }
    function r2(J, Q, Z) {
      {
        var X = J.parentNode;
        if (X !== null) SG(X, Q);
      }
    }
    function n2(J, Q) {
      {
        var Z = J.parentNode;
        if (Z !== null) CG(Z, Q);
      }
    }
    function t2(J, Q, Z, X, G, B) {
      if (B || Q[C8] !== !0) SG(Z, X);
    }
    function e2(J, Q, Z, X, G) {
      if (G || Q[C8] !== !0) CG(Z, X);
    }
    function J$(J) {
      M(
        "An error occurred during hydration. The server HTML was replaced with client content in <%s>.",
        J.nodeName.toLowerCase(),
      );
    }
    function Q$(J) {
      d6(J);
    }
    var D5 = Math.random().toString(36).slice(2),
      j5 = "__reactFiber$" + D5,
      uG = "__reactProps$" + D5,
      o6 = "__reactContainer$" + D5,
      dG = "__reactEvents$" + D5,
      Z$ = "__reactListeners$" + D5,
      X$ = "__reactHandles$" + D5;
    function G$(J) {
      delete J[j5], delete J[uG], delete J[dG], delete J[Z$], delete J[X$];
    }
    function r6(J, Q) {
      Q[j5] = J;
    }
    function k8(J, Q) {
      Q[o6] = J;
    }
    function VW(J) {
      J[o6] = null;
    }
    function n6(J) {
      return !!J[o6];
    }
    function F4(J) {
      var Q = J[j5];
      if (Q) return Q;
      var Z = J.parentNode;
      while (Z) {
        if (((Q = Z[o6] || Z[j5]), Q)) {
          var X = Q.alternate;
          if (Q.child !== null || (X !== null && X.child !== null)) {
            var G = MW(J);
            while (G !== null) {
              var B = G[j5];
              if (B) return B;
              G = MW(G);
            }
          }
          return Q;
        }
        (J = Z), (Z = J.parentNode);
      }
      return null;
    }
    function y0(J) {
      var Q = J[j5] || J[o6];
      if (Q)
        if (Q.tag === c || Q.tag === x1 || Q.tag === P1 || Q.tag === m)
          return Q;
        else return null;
      return null;
    }
    function P5(J) {
      if (J.tag === c || J.tag === x1) return J.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function g8(J) {
      return J[uG] || null;
    }
    function sG(J, Q) {
      J[uG] = Q;
    }
    function B$(J) {
      var Q = J[dG];
      if (Q === void 0) Q = J[dG] = new Set();
      return Q;
    }
    var qW = {},
      OW = L1.ReactDebugCurrentFrame;
    function T8(J) {
      if (J) {
        var Q = J._owner,
          Z = c4(J.type, J._source, Q ? Q.type : null);
        OW.setExtraStackFrame(Z);
      } else OW.setExtraStackFrame(null);
    }
    function RZ(J, Q, Z, X, G) {
      {
        var B = Function.call.bind(yJ);
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
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
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
            } catch (z) {
              Y = z;
            }
            if (Y && !(Y instanceof Error))
              T8(G),
                M(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  X || "React class",
                  Z,
                  U,
                  typeof Y,
                ),
                T8(null);
            if (Y instanceof Error && !(Y.message in qW))
              (qW[Y.message] = !0),
                T8(G),
                M("Failed %s type: %s", Z, Y.message),
                T8(null);
          }
      }
    }
    var mG = [],
      h8;
    h8 = [];
    var H0 = -1;
    function l0(J) {
      return { current: J };
    }
    function WQ(J, Q) {
      if (H0 < 0) {
        M("Unexpected pop.");
        return;
      }
      if (Q !== h8[H0]) M("Unexpected Fiber popped.");
      (J.current = mG[H0]), (mG[H0] = null), (h8[H0] = null), H0--;
    }
    function zQ(J, Q, Z) {
      H0++, (mG[H0] = J.current), (h8[H0] = Z), (J.current = Q);
    }
    var $W = {},
      cQ = {};
    Object.freeze(cQ);
    var M0 = l0(cQ),
      dZ = l0(!1),
      yG = cQ;
    function A5(J, Q, Z) {
      {
        if (Z && sZ(Q)) return yG;
        return M0.current;
      }
    }
    function DW(J, Q, Z) {
      {
        var X = J.stateNode;
        (X.__reactInternalMemoizedUnmaskedChildContext = Q),
          (X.__reactInternalMemoizedMaskedChildContext = Z);
      }
    }
    function E5(J, Q) {
      {
        var Z = J.type,
          X = Z.contextTypes;
        if (!X) return cQ;
        var G = J.stateNode;
        if (G && G.__reactInternalMemoizedUnmaskedChildContext === Q)
          return G.__reactInternalMemoizedMaskedChildContext;
        var B = {};
        for (var U in X) B[U] = Q[U];
        {
          var Y = Y1(J) || "Unknown";
          RZ(X, B, "context", Y);
        }
        if (G) DW(J, Q, B);
        return B;
      }
    }
    function f8() {
      return dZ.current;
    }
    function sZ(J) {
      {
        var Q = J.childContextTypes;
        return Q !== null && Q !== void 0;
      }
    }
    function u8(J) {
      WQ(dZ, J), WQ(M0, J);
    }
    function lG(J) {
      WQ(dZ, J), WQ(M0, J);
    }
    function jW(J, Q, Z) {
      {
        if (M0.current !== cQ)
          throw new Error(
            "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.",
          );
        zQ(M0, Q, J), zQ(dZ, Z, J);
      }
    }
    function PW(J, Q, Z) {
      {
        var X = J.stateNode,
          G = Q.childContextTypes;
        if (typeof X.getChildContext !== "function") {
          {
            var B = Y1(J) || "Unknown";
            if (!$W[B])
              ($W[B] = !0),
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
              (Y1(J) || "Unknown") +
                '.getChildContext(): key "' +
                Y +
                '" is not defined in childContextTypes.',
            );
        {
          var K = Y1(J) || "Unknown";
          RZ(G, U, "child context", K);
        }
        return M1({}, Z, U);
      }
    }
    function d8(J) {
      {
        var Q = J.stateNode,
          Z = (Q && Q.__reactInternalMemoizedMergedChildContext) || cQ;
        return (yG = M0.current), zQ(M0, Z, J), zQ(dZ, dZ.current, J), !0;
      }
    }
    function AW(J, Q, Z) {
      {
        var X = J.stateNode;
        if (!X)
          throw new Error(
            "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.",
          );
        if (Z) {
          var G = PW(J, Q, yG);
          (X.__reactInternalMemoizedMergedChildContext = G),
            WQ(dZ, J),
            WQ(M0, J),
            zQ(M0, G, J),
            zQ(dZ, Z, J);
        } else WQ(dZ, J), zQ(dZ, Z, J);
      }
    }
    function U$(J) {
      {
        if (!mM(J) || J.tag !== a)
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
              if (sZ(Z))
                return Q.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          Q = Q.return;
        } while (Q !== null);
        throw new Error(
          "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.",
        );
      }
    }
    var c0 = 0,
      s8 = 1,
      V0 = null,
      cG = !1,
      iG = !1;
    function EW(J) {
      if (V0 === null) V0 = [J];
      else V0.push(J);
    }
    function Y$(J) {
      (cG = !0), EW(J);
    }
    function RW() {
      if (cG) i0();
    }
    function i0() {
      if (!iG && V0 !== null) {
        iG = !0;
        var J = 0,
          Q = EZ();
        try {
          var Z = !0,
            X = V0;
          uJ(mQ);
          for (; J < X.length; J++) {
            var G = X[J];
            do G = G(Z);
            while (G !== null);
          }
          (V0 = null), (cG = !1);
        } catch (B) {
          if (V0 !== null) V0 = V0.slice(J + 1);
          throw (cY(Z8, i0), B);
        } finally {
          uJ(Q), (iG = !1);
        }
      }
      return null;
    }
    var R5 = [],
      L5 = 0,
      m8 = null,
      y8 = 0,
      BZ = [],
      UZ = 0,
      I4 = null,
      q0 = 1,
      O0 = "";
    function K$(J) {
      return w4(), (J.flags & hY) !== o;
    }
    function W$(J) {
      return w4(), y8;
    }
    function z$() {
      var J = O0,
        Q = q0,
        Z = Q & ~H$(Q);
      return Z.toString(32) + J;
    }
    function x4(J, Q) {
      w4(), (R5[L5++] = y8), (R5[L5++] = m8), (m8 = J), (y8 = Q);
    }
    function LW(J, Q, Z) {
      w4(), (BZ[UZ++] = q0), (BZ[UZ++] = O0), (BZ[UZ++] = I4), (I4 = J);
      var X = q0,
        G = O0,
        B = l8(X) - 1,
        U = X & ~(1 << B),
        Y = Z + 1,
        K = l8(Q) + B;
      if (K > 30) {
        var z = B - (B % 5),
          H = (1 << z) - 1,
          $ = (U & H).toString(32),
          O = U >> z,
          E = B - z,
          P = l8(Q) + E,
          R = Y << E,
          g = R | O,
          l = $ + G;
        (q0 = (1 << P) | g), (O0 = l);
      } else {
        var d = Y << B,
          V1 = d | U,
          q1 = G;
        (q0 = (1 << K) | V1), (O0 = q1);
      }
    }
    function aG(J) {
      w4();
      var Q = J.return;
      if (Q !== null) {
        var Z = 1,
          X = 0;
        x4(J, Z), LW(J, Z, X);
      }
    }
    function l8(J) {
      return 32 - nY(J);
    }
    function H$(J) {
      return 1 << (l8(J) - 1);
    }
    function pG(J) {
      while (J === m8)
        (m8 = R5[--L5]), (R5[L5] = null), (y8 = R5[--L5]), (R5[L5] = null);
      while (J === I4)
        (I4 = BZ[--UZ]),
          (BZ[UZ] = null),
          (O0 = BZ[--UZ]),
          (BZ[UZ] = null),
          (q0 = BZ[--UZ]),
          (BZ[UZ] = null);
    }
    function M$() {
      if ((w4(), I4 !== null)) return { id: q0, overflow: O0 };
      else return null;
    }
    function V$(J, Q) {
      w4(),
        (BZ[UZ++] = q0),
        (BZ[UZ++] = O0),
        (BZ[UZ++] = I4),
        (q0 = Q.id),
        (O0 = Q.overflow),
        (I4 = J);
    }
    function w4() {
      if (!pJ())
        M(
          "Expected to be hydrating. This is a bug in React. Please file an issue.",
        );
    }
    var aJ = null,
      YZ = null,
      LZ = !1,
      _4 = !1,
      a0 = null;
    function q$() {
      if (LZ)
        M(
          "We should not be hydrating here. This is a bug in React. Please file a bug.",
        );
    }
    function FW() {
      _4 = !0;
    }
    function O$() {
      return _4;
    }
    function $$(J) {
      var Q = J.stateNode.containerInfo;
      return (YZ = k2(Q)), (aJ = J), (LZ = !0), (a0 = null), (_4 = !1), !0;
    }
    function D$(J, Q, Z) {
      if (
        ((YZ = g2(Q)), (aJ = J), (LZ = !0), (a0 = null), (_4 = !1), Z !== null)
      )
        V$(J, Z);
      return !0;
    }
    function IW(J, Q) {
      switch (J.tag) {
        case m: {
          c2(J.stateNode.containerInfo, Q);
          break;
        }
        case c: {
          var Z = (J.mode & D1) !== r;
          a2(J.type, J.memoizedProps, J.stateNode, Q, Z);
          break;
        }
        case P1: {
          var X = J.memoizedState;
          if (X.dehydrated !== null) i2(X.dehydrated, Q);
          break;
        }
      }
    }
    function xW(J, Q) {
      IW(J, Q);
      var Z = FP();
      (Z.stateNode = Q), (Z.return = J);
      var X = J.deletions;
      if (X === null) (J.deletions = [Z]), (J.flags |= H4);
      else X.push(Z);
    }
    function oG(J, Q) {
      {
        if (_4) return;
        switch (J.tag) {
          case m: {
            var Z = J.stateNode.containerInfo;
            switch (Q.tag) {
              case c:
                var { type: X, pendingProps: G } = Q;
                p2(Z, X);
                break;
              case x1:
                var B = Q.pendingProps;
                o2(Z, B);
                break;
            }
            break;
          }
          case c: {
            var { type: U, memoizedProps: Y, stateNode: K } = J;
            switch (Q.tag) {
              case c: {
                var { type: z, pendingProps: H } = Q,
                  $ = (J.mode & D1) !== r;
                t2(U, Y, K, z, H, $);
                break;
              }
              case x1: {
                var O = Q.pendingProps,
                  E = (J.mode & D1) !== r;
                e2(U, Y, K, O, E);
                break;
              }
            }
            break;
          }
          case P1: {
            var P = J.memoizedState,
              R = P.dehydrated;
            if (R !== null)
              switch (Q.tag) {
                case c:
                  var { type: g, pendingProps: l } = Q;
                  r2(R, g);
                  break;
                case x1:
                  var d = Q.pendingProps;
                  n2(R, d);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function wW(J, Q) {
      (Q.flags = (Q.flags & ~B0) | DJ), oG(J, Q);
    }
    function _W(J, Q) {
      switch (J.tag) {
        case c: {
          var { type: Z, pendingProps: X } = J,
            G = _2(Q, Z);
          if (G !== null) return (J.stateNode = G), (aJ = J), (YZ = b2(G)), !0;
          return !1;
        }
        case x1: {
          var B = J.pendingProps,
            U = S2(Q, B);
          if (U !== null) return (J.stateNode = U), (aJ = J), (YZ = null), !0;
          return !1;
        }
        case P1: {
          var Y = C2(Q);
          if (Y !== null) {
            var K = { dehydrated: Y, treeContext: M$(), retryLane: dQ };
            J.memoizedState = K;
            var z = IP(Y);
            return (z.return = J), (J.child = z), (aJ = J), (YZ = null), !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function rG(J) {
      return (J.mode & D1) !== r && (J.flags & C1) === o;
    }
    function nG(J) {
      throw new Error(
        "Hydration failed because the initial UI does not match what was rendered on the server.rendered on the server.",
      );
    }
    function tG(J) {
      if (!LZ) return;
      var Q = YZ;
      if (!Q) {
        if (rG(J)) oG(aJ, J), nG();
        wW(aJ, J), (LZ = !1), (aJ = J);
        return;
      }
      var Z = Q;
      if (!_W(J, Q)) {
        if (rG(J)) oG(aJ, J), nG();
        Q = p6(Z);
        var X = aJ;
        if (!Q || !_W(J, Q)) {
          wW(aJ, J), (LZ = !1), (aJ = J);
          return;
        }
        xW(X, Z);
      }
    }
    function j$(J, Q, Z) {
      var X = J.stateNode,
        G = !_4,
        B = T2(X, J.type, J.memoizedProps, Q, Z, J, G);
      if (((J.updateQueue = B), B !== null)) return !0;
      return !1;
    }
    function P$(J) {
      var { stateNode: Q, memoizedProps: Z } = J,
        X = h2(Q, Z, J);
      if (X) {
        var G = aJ;
        if (G !== null)
          switch (G.tag) {
            case m: {
              var B = G.stateNode.containerInfo,
                U = (G.mode & D1) !== r;
              y2(B, Q, Z, U);
              break;
            }
            case c: {
              var { type: Y, memoizedProps: K, stateNode: z } = G,
                H = (G.mode & D1) !== r;
              l2(Y, K, z, Q, Z, H);
              break;
            }
          }
      }
      return X;
    }
    function A$(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      f2(Z, J);
    }
    function E$(J) {
      var Q = J.memoizedState,
        Z = Q !== null ? Q.dehydrated : null;
      if (!Z)
        throw new Error(
          "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.",
        );
      return u2(Z);
    }
    function SW(J) {
      var Q = J.return;
      while (Q !== null && Q.tag !== c && Q.tag !== m && Q.tag !== P1)
        Q = Q.return;
      aJ = Q;
    }
    function c8(J) {
      if (J !== aJ) return !1;
      if (!LZ) return SW(J), (LZ = !0), !1;
      if (
        J.tag !== m &&
        (J.tag !== c || (m2(J.type) && !kG(J.type, J.memoizedProps)))
      ) {
        var Q = YZ;
        if (Q)
          if (rG(J)) CW(J), nG();
          else while (Q) xW(J, Q), (Q = p6(Q));
      }
      if ((SW(J), J.tag === P1)) YZ = E$(J);
      else YZ = aJ ? p6(J.stateNode) : null;
      return !0;
    }
    function R$() {
      return LZ && YZ !== null;
    }
    function CW(J) {
      var Q = YZ;
      while (Q) IW(J, Q), (Q = p6(Q));
    }
    function F5() {
      (aJ = null), (YZ = null), (LZ = !1), (_4 = !1);
    }
    function vW() {
      if (a0 !== null) xH(a0), (a0 = null);
    }
    function pJ() {
      return LZ;
    }
    function eG(J) {
      if (a0 === null) a0 = [J];
      else a0.push(J);
    }
    var L$ = L1.ReactCurrentBatchConfig,
      F$ = null;
    function I$() {
      return L$.transition;
    }
    var FZ = {
      recordUnsafeLifecycleWarnings: function (J, Q) {},
      flushPendingUnsafeLifecycleWarnings: function () {},
      recordLegacyContextWarning: function (J, Q) {},
      flushLegacyContextWarning: function () {},
      discardPendingWarnings: function () {},
    };
    {
      var x$ = function (J) {
          var Q = null,
            Z = J;
          while (Z !== null) {
            if (Z.mode & jJ) Q = Z;
            Z = Z.return;
          }
          return Q;
        },
        S4 = function (J) {
          var Q = [];
          return (
            J.forEach(function (Z) {
              Q.push(Z);
            }),
            Q.sort().join(", ")
          );
        },
        t6 = [],
        e6 = [],
        J7 = [],
        Q7 = [],
        Z7 = [],
        X7 = [],
        C4 = new Set();
      (FZ.recordUnsafeLifecycleWarnings = function (J, Q) {
        if (C4.has(J.type)) return;
        if (
          typeof Q.componentWillMount === "function" &&
          Q.componentWillMount.__suppressDeprecationWarning !== !0
        )
          t6.push(J);
        if (J.mode & jJ && typeof Q.UNSAFE_componentWillMount === "function")
          e6.push(J);
        if (
          typeof Q.componentWillReceiveProps === "function" &&
          Q.componentWillReceiveProps.__suppressDeprecationWarning !== !0
        )
          J7.push(J);
        if (
          J.mode & jJ &&
          typeof Q.UNSAFE_componentWillReceiveProps === "function"
        )
          Q7.push(J);
        if (
          typeof Q.componentWillUpdate === "function" &&
          Q.componentWillUpdate.__suppressDeprecationWarning !== !0
        )
          Z7.push(J);
        if (J.mode & jJ && typeof Q.UNSAFE_componentWillUpdate === "function")
          X7.push(J);
      }),
        (FZ.flushPendingUnsafeLifecycleWarnings = function () {
          var J = new Set();
          if (t6.length > 0)
            t6.forEach(function (O) {
              J.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (t6 = []);
          var Q = new Set();
          if (e6.length > 0)
            e6.forEach(function (O) {
              Q.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (e6 = []);
          var Z = new Set();
          if (J7.length > 0)
            J7.forEach(function (O) {
              Z.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (J7 = []);
          var X = new Set();
          if (Q7.length > 0)
            Q7.forEach(function (O) {
              X.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (Q7 = []);
          var G = new Set();
          if (Z7.length > 0)
            Z7.forEach(function (O) {
              G.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (Z7 = []);
          var B = new Set();
          if (X7.length > 0)
            X7.forEach(function (O) {
              B.add(Y1(O) || "Component"), C4.add(O.type);
            }),
              (X7 = []);
          if (Q.size > 0) {
            var U = S4(Q);
            M(
              "Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",
              U,
            );
          }
          if (X.size > 0) {
            var Y = S4(X);
            M(
              "Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",
              Y,
            );
          }
          if (B.size > 0) {
            var K = S4(B);
            M(
              "Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",
              K,
            );
          }
          if (J.size > 0) {
            var z = S4(J);
            AJ(
              "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              z,
            );
          }
          if (Z.size > 0) {
            var H = S4(Z);
            AJ(
              "componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              H,
            );
          }
          if (G.size > 0) {
            var $ = S4(G);
            AJ(
              "componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",
              $,
            );
          }
        });
      var i8 = new Map(),
        NW = new Set();
      (FZ.recordLegacyContextWarning = function (J, Q) {
        var Z = x$(J);
        if (Z === null) {
          M(
            "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.",
          );
          return;
        }
        if (NW.has(J.type)) return;
        var X = i8.get(Z);
        if (
          J.type.contextTypes != null ||
          J.type.childContextTypes != null ||
          (Q !== null && typeof Q.getChildContext === "function")
        ) {
          if (X === void 0) (X = []), i8.set(Z, X);
          X.push(J);
        }
      }),
        (FZ.flushLegacyContextWarning = function () {
          i8.forEach(function (J, Q) {
            if (J.length === 0) return;
            var Z = J[0],
              X = new Set();
            J.forEach(function (B) {
              X.add(Y1(B) || "Component"), NW.add(B.type);
            });
            var G = S4(X);
            try {
              JJ(Z),
                M(
                  "Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context",
                  G,
                );
            } finally {
              gJ();
            }
          });
        }),
        (FZ.discardPendingWarnings = function () {
          (t6 = []),
            (e6 = []),
            (J7 = []),
            (Q7 = []),
            (Z7 = []),
            (X7 = []),
            (i8 = new Map());
        });
    }
    function IZ(J, Q) {
      if (J && J.defaultProps) {
        var Z = M1({}, Q),
          X = J.defaultProps;
        for (var G in X) if (Z[G] === void 0) Z[G] = X[G];
        return Z;
      }
      return Q;
    }
    var JB = l0(null),
      QB;
    QB = {};
    var a8 = null,
      I5 = null,
      ZB = null,
      p8 = !1;
    function o8() {
      (a8 = null), (I5 = null), (ZB = null), (p8 = !1);
    }
    function bW() {
      p8 = !0;
    }
    function kW() {
      p8 = !1;
    }
    function gW(J, Q, Z) {
      {
        zQ(JB, Q._currentValue, J), (Q._currentValue = Z);
        {
          if (
            Q._currentRenderer !== void 0 &&
            Q._currentRenderer !== null &&
            Q._currentRenderer !== QB
          )
            M(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.",
            );
          Q._currentRenderer = QB;
        }
      }
    }
    function XB(J, Q) {
      var Z = JB.current;
      WQ(JB, Q), (J._currentValue = Z);
    }
    function GB(J, Q, Z) {
      var X = J;
      while (X !== null) {
        var G = X.alternate;
        if (!z5(X.childLanes, Q)) {
          if (((X.childLanes = H1(X.childLanes, Q)), G !== null))
            G.childLanes = H1(G.childLanes, Q);
        } else if (G !== null && !z5(G.childLanes, Q))
          G.childLanes = H1(G.childLanes, Q);
        if (X === Z) break;
        X = X.return;
      }
      if (X !== Z)
        M(
          "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    function w$(J, Q, Z) {
      _$(J, Q, Z);
    }
    function _$(J, Q, Z) {
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
                var Y = R6(Z),
                  K = $0(o1, Y);
                K.tag = n8;
                var z = X.updateQueue;
                if (z === null);
                else {
                  var H = z.shared,
                    $ = H.pending;
                  if ($ === null) K.next = K;
                  else (K.next = $.next), ($.next = K);
                  H.pending = K;
                }
              }
              X.lanes = H1(X.lanes, Z);
              var O = X.alternate;
              if (O !== null) O.lanes = H1(O.lanes, Z);
              GB(X.return, Z, J), (B.lanes = H1(B.lanes, Z));
              break;
            }
            U = U.next;
          }
        } else if (X.tag === w1) G = X.type === J.type ? null : X.child;
        else if (X.tag === bJ) {
          var E = X.return;
          if (E === null)
            throw new Error(
              "We just came from a parent so we must have had a parent. This is a bug in React.",
            );
          E.lanes = H1(E.lanes, Z);
          var P = E.alternate;
          if (P !== null) P.lanes = H1(P.lanes, Z);
          GB(E, Z, J), (G = X.sibling);
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
    function x5(J, Q) {
      (a8 = J), (I5 = null), (ZB = null);
      var Z = J.dependencies;
      if (Z !== null) {
        var X = Z.firstContext;
        if (X !== null) {
          if (sQ(Z.lanes, Q)) D7();
          Z.firstContext = null;
        }
      }
    }
    function PJ(J) {
      if (p8)
        M(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
        );
      var Q = J._currentValue;
      if (ZB === J);
      else {
        var Z = { context: J, memoizedValue: Q, next: null };
        if (I5 === null) {
          if (a8 === null)
            throw new Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
            );
          (I5 = Z), (a8.dependencies = { lanes: x, firstContext: Z });
        } else I5 = I5.next = Z;
      }
      return Q;
    }
    var v4 = null;
    function BB(J) {
      if (v4 === null) v4 = [J];
      else v4.push(J);
    }
    function S$() {
      if (v4 !== null) {
        for (var J = 0; J < v4.length; J++) {
          var Q = v4[J],
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
        v4 = null;
      }
    }
    function TW(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), BB(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), r8(J, X);
    }
    function C$(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), BB(Q);
      else (Z.next = G.next), (G.next = Z);
      Q.interleaved = Z;
    }
    function v$(J, Q, Z, X) {
      var G = Q.interleaved;
      if (G === null) (Z.next = Z), BB(Q);
      else (Z.next = G.next), (G.next = Z);
      return (Q.interleaved = Z), r8(J, X);
    }
    function NQ(J, Q) {
      return r8(J, Q);
    }
    var N$ = r8;
    function r8(J, Q) {
      J.lanes = H1(J.lanes, Q);
      var Z = J.alternate;
      if (Z !== null) Z.lanes = H1(Z.lanes, Q);
      if (Z === null && (J.flags & (DJ | B0)) !== o) fH(J);
      var X = J,
        G = J.return;
      while (G !== null) {
        if (
          ((G.childLanes = H1(G.childLanes, Q)), (Z = G.alternate), Z !== null)
        )
          Z.childLanes = H1(Z.childLanes, Q);
        else if ((G.flags & (DJ | B0)) !== o) fH(J);
        (X = G), (G = G.return);
      }
      if (X.tag === m) {
        var B = X.stateNode;
        return B;
      } else return null;
    }
    var hW = 0,
      fW = 1,
      n8 = 2,
      UB = 3,
      t8 = !1,
      YB,
      e8;
    (YB = !1), (e8 = null);
    function KB(J) {
      var Q = {
        baseState: J.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: x },
        effects: null,
      };
      J.updateQueue = Q;
    }
    function uW(J, Q) {
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
    function $0(J, Q) {
      var Z = {
        eventTime: J,
        lane: Q,
        tag: hW,
        payload: null,
        callback: null,
        next: null,
      };
      return Z;
    }
    function p0(J, Q, Z) {
      var X = J.updateQueue;
      if (X === null) return null;
      var G = X.shared;
      if (e8 === G && !YB)
        M(
          "An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.",
        ),
          (YB = !0);
      if (Tj()) {
        var B = G.pending;
        if (B === null) Q.next = Q;
        else (Q.next = B.next), (B.next = Q);
        return (G.pending = Q), N$(J, Z);
      } else return v$(J, G, Q, Z);
    }
    function J9(J, Q, Z) {
      var X = Q.updateQueue;
      if (X === null) return;
      var G = X.shared;
      if (QK(Z)) {
        var B = G.lanes;
        B = XK(B, J.pendingLanes);
        var U = H1(B, Z);
        (G.lanes = U), BG(J, U);
      }
    }
    function WB(J, Q) {
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
              var z = {
                eventTime: K.eventTime,
                lane: K.lane,
                tag: K.tag,
                payload: K.payload,
                callback: K.callback,
                next: null,
              };
              if (U === null) B = U = z;
              else (U.next = z), (U = z);
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
      var H = Z.lastBaseUpdate;
      if (H === null) Z.firstBaseUpdate = Q;
      else H.next = Q;
      Z.lastBaseUpdate = Q;
    }
    function b$(J, Q, Z, X, G, B) {
      switch (Z.tag) {
        case fW: {
          var U = Z.payload;
          if (typeof U === "function") {
            bW();
            var Y = U.call(B, X, G);
            {
              if (J.mode & jJ) {
                hJ(!0);
                try {
                  U.call(B, X, G);
                } finally {
                  hJ(!1);
                }
              }
              kW();
            }
            return Y;
          }
          return U;
        }
        case UB:
          J.flags = (J.flags & ~EQ) | C1;
        case hW: {
          var K = Z.payload,
            z;
          if (typeof K === "function") {
            bW(), (z = K.call(B, X, G));
            {
              if (J.mode & jJ) {
                hJ(!0);
                try {
                  K.call(B, X, G);
                } finally {
                  hJ(!1);
                }
              }
              kW();
            }
          } else z = K;
          if (z === null || z === void 0) return X;
          return M1({}, X, z);
        }
        case n8:
          return (t8 = !0), X;
      }
      return X;
    }
    function Q9(J, Q, Z, X) {
      var G = J.updateQueue;
      (t8 = !1), (e8 = G.shared);
      var { firstBaseUpdate: B, lastBaseUpdate: U } = G,
        Y = G.shared.pending;
      if (Y !== null) {
        G.shared.pending = null;
        var K = Y,
          z = K.next;
        if (((K.next = null), U === null)) B = z;
        else U.next = z;
        U = K;
        var H = J.alternate;
        if (H !== null) {
          var $ = H.updateQueue,
            O = $.lastBaseUpdate;
          if (O !== U) {
            if (O === null) $.firstBaseUpdate = z;
            else O.next = z;
            $.lastBaseUpdate = K;
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
          var { lane: V1, eventTime: q1 } = d;
          if (!z5(X, V1)) {
            var D = {
              eventTime: q1,
              lane: V1,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            };
            if (l === null) (g = l = D), (R = E);
            else l = l.next = D;
            P = H1(P, V1);
          } else {
            if (l !== null) {
              var F = {
                eventTime: q1,
                lane: fJ,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              };
              l = l.next = F;
            }
            E = b$(J, G, d, E, Q, Z);
            var j = d.callback;
            if (j !== null && d.lane !== fJ) {
              J.flags |= xX;
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
          var G1 = t;
          do (P = H1(P, G1.lane)), (G1 = G1.next);
          while (G1 !== t);
        } else if (B === null) G.shared.lanes = x;
        S7(P), (J.lanes = P), (J.memoizedState = E);
      }
      e8 = null;
    }
    function k$(J, Q) {
      if (typeof J !== "function")
        throw new Error(
          "Invalid argument passed as callback. Expected a function. Instead " +
            ("received: " + J),
        );
      J.call(Q);
    }
    function dW() {
      t8 = !1;
    }
    function Z9() {
      return t8;
    }
    function sW(J, Q, Z) {
      var X = Q.effects;
      if (((Q.effects = null), X !== null))
        for (var G = 0; G < X.length; G++) {
          var B = X[G],
            U = B.callback;
          if (U !== null) (B.callback = null), k$(U, Z);
        }
    }
    var zB = {},
      mW = new R1.Component().refs,
      HB,
      MB,
      VB,
      qB,
      OB,
      yW,
      X9,
      $B,
      DB,
      jB;
    {
      (HB = new Set()),
        (MB = new Set()),
        (VB = new Set()),
        (qB = new Set()),
        ($B = new Set()),
        (OB = new Set()),
        (DB = new Set()),
        (jB = new Set());
      var lW = new Set();
      (X9 = function (J, Q) {
        if (J === null || typeof J === "function") return;
        var Z = Q + "_" + J;
        if (!lW.has(Z))
          lW.add(Z),
            M(
              "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
              Q,
              J,
            );
      }),
        (yW = function (J, Q) {
          if (Q === void 0) {
            var Z = f1(J) || "Component";
            if (!OB.has(Z))
              OB.add(Z),
                M(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  Z,
                );
          }
        }),
        Object.defineProperty(zB, "_processChildContext", {
          enumerable: !1,
          value: function () {
            throw new Error(
              "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).",
            );
          },
        }),
        Object.freeze(zB);
    }
    function PB(J, Q, Z, X) {
      var G = J.memoizedState,
        B = Z(X, G);
      {
        if (J.mode & jJ) {
          hJ(!0);
          try {
            B = Z(X, G);
          } finally {
            hJ(!1);
          }
        }
        yW(Q, B);
      }
      var U = B === null || B === void 0 ? G : M1({}, G, B);
      if (((J.memoizedState = U), J.lanes === x)) {
        var Y = J.updateQueue;
        Y.baseState = U;
      }
    }
    var AB = {
      isMounted: yM,
      enqueueSetState: function (J, Q, Z) {
        var X = X5(J),
          G = FQ(),
          B = Z4(X),
          U = $0(G, B);
        if (((U.payload = Q), Z !== void 0 && Z !== null))
          X9(Z, "setState"), (U.callback = Z);
        var Y = p0(X, U, B);
        if (Y !== null) vJ(Y, X, B, G), J9(Y, X, B);
        kX(X, B);
      },
      enqueueReplaceState: function (J, Q, Z) {
        var X = X5(J),
          G = FQ(),
          B = Z4(X),
          U = $0(G, B);
        if (((U.tag = fW), (U.payload = Q), Z !== void 0 && Z !== null))
          X9(Z, "replaceState"), (U.callback = Z);
        var Y = p0(X, U, B);
        if (Y !== null) vJ(Y, X, B, G), J9(Y, X, B);
        kX(X, B);
      },
      enqueueForceUpdate: function (J, Q) {
        var Z = X5(J),
          X = FQ(),
          G = Z4(Z),
          B = $0(X, G);
        if (((B.tag = n8), Q !== void 0 && Q !== null))
          X9(Q, "forceUpdate"), (B.callback = Q);
        var U = p0(Z, B, G);
        if (U !== null) vJ(U, Z, G, X), J9(U, Z, G);
        AV(Z, G);
      },
    };
    function cW(J, Q, Z, X, G, B, U) {
      var Y = J.stateNode;
      if (typeof Y.shouldComponentUpdate === "function") {
        var K = Y.shouldComponentUpdate(X, B, U);
        {
          if (J.mode & jJ) {
            hJ(!0);
            try {
              K = Y.shouldComponentUpdate(X, B, U);
            } finally {
              hJ(!1);
            }
          }
          if (K === void 0)
            M(
              "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
              f1(Q) || "Component",
            );
        }
        return K;
      }
      if (Q.prototype && Q.prototype.isPureReactComponent)
        return !h6(Z, X) || !h6(G, B);
      return !0;
    }
    function g$(J, Q, Z) {
      var X = J.stateNode;
      {
        var G = f1(Q) || "Component",
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
          if (Q.contextType && Q.contextTypes && !DB.has(Q))
            DB.add(Q),
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
            f1(Q) || "A pure component",
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
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
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
          !VB.has(Q)
        )
          VB.add(Q),
            M(
              "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
              f1(Q),
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
        if (Y && (typeof Y !== "object" || LJ(Y)))
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
    function iW(J, Q) {
      (Q.updater = AB),
        (J.stateNode = Q),
        fM(Q, J),
        (Q._reactInternalInstance = zB);
    }
    function aW(J, Q, Z) {
      var X = !1,
        G = cQ,
        B = cQ,
        U = Q.contextType;
      if ("contextType" in Q) {
        var Y =
          U === null ||
          (U !== void 0 && U.$$typeof === S1 && U._context === void 0);
        if (!Y && !jB.has(Q)) {
          jB.add(Q);
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
            f1(Q) || "Component",
            K,
          );
        }
      }
      if (typeof U === "object" && U !== null) B = PJ(U);
      else {
        G = A5(J, Q, !0);
        var z = Q.contextTypes;
        (X = z !== null && z !== void 0), (B = X ? E5(J, G) : cQ);
      }
      var H = new Q(Z, B);
      if (J.mode & jJ) {
        hJ(!0);
        try {
          H = new Q(Z, B);
        } finally {
          hJ(!1);
        }
      }
      var $ = (J.memoizedState =
        H.state !== null && H.state !== void 0 ? H.state : null);
      iW(J, H);
      {
        if (typeof Q.getDerivedStateFromProps === "function" && $ === null) {
          var O = f1(Q) || "Component";
          if (!MB.has(O))
            MB.add(O),
              M(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                O,
                H.state === null ? "null" : "undefined",
                O,
              );
        }
        if (
          typeof Q.getDerivedStateFromProps === "function" ||
          typeof H.getSnapshotBeforeUpdate === "function"
        ) {
          var E = null,
            P = null,
            R = null;
          if (
            typeof H.componentWillMount === "function" &&
            H.componentWillMount.__suppressDeprecationWarning !== !0
          )
            E = "componentWillMount";
          else if (typeof H.UNSAFE_componentWillMount === "function")
            E = "UNSAFE_componentWillMount";
          if (
            typeof H.componentWillReceiveProps === "function" &&
            H.componentWillReceiveProps.__suppressDeprecationWarning !== !0
          )
            P = "componentWillReceiveProps";
          else if (typeof H.UNSAFE_componentWillReceiveProps === "function")
            P = "UNSAFE_componentWillReceiveProps";
          if (
            typeof H.componentWillUpdate === "function" &&
            H.componentWillUpdate.__suppressDeprecationWarning !== !0
          )
            R = "componentWillUpdate";
          else if (typeof H.UNSAFE_componentWillUpdate === "function")
            R = "UNSAFE_componentWillUpdate";
          if (E !== null || P !== null || R !== null) {
            var g = f1(Q) || "Component",
              l =
                typeof Q.getDerivedStateFromProps === "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            if (!qB.has(g))
              qB.add(g),
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
      if (X) DW(J, G, B);
      return H;
    }
    function T$(J, Q) {
      var Z = Q.state;
      if (typeof Q.componentWillMount === "function") Q.componentWillMount();
      if (typeof Q.UNSAFE_componentWillMount === "function")
        Q.UNSAFE_componentWillMount();
      if (Z !== Q.state)
        M(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          Y1(J) || "Component",
        ),
          AB.enqueueReplaceState(Q, Q.state, null);
    }
    function pW(J, Q, Z, X) {
      var G = Q.state;
      if (typeof Q.componentWillReceiveProps === "function")
        Q.componentWillReceiveProps(Z, X);
      if (typeof Q.UNSAFE_componentWillReceiveProps === "function")
        Q.UNSAFE_componentWillReceiveProps(Z, X);
      if (Q.state !== G) {
        {
          var B = Y1(J) || "Component";
          if (!HB.has(B))
            HB.add(B),
              M(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                B,
              );
        }
        AB.enqueueReplaceState(Q, Q.state, null);
      }
    }
    function EB(J, Q, Z, X) {
      g$(J, Q, Z);
      var G = J.stateNode;
      (G.props = Z), (G.state = J.memoizedState), (G.refs = mW), KB(J);
      var B = Q.contextType;
      if (typeof B === "object" && B !== null) G.context = PJ(B);
      else {
        var U = A5(J, Q, !0);
        G.context = E5(J, U);
      }
      {
        if (G.state === Z) {
          var Y = f1(Q) || "Component";
          if (!$B.has(Y))
            $B.add(Y),
              M(
                "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                Y,
              );
        }
        if (J.mode & jJ) FZ.recordLegacyContextWarning(J, G);
        FZ.recordUnsafeLifecycleWarnings(J, G);
      }
      G.state = J.memoizedState;
      var K = Q.getDerivedStateFromProps;
      if (typeof K === "function") PB(J, Q, K, Z), (G.state = J.memoizedState);
      if (
        typeof Q.getDerivedStateFromProps !== "function" &&
        typeof G.getSnapshotBeforeUpdate !== "function" &&
        (typeof G.UNSAFE_componentWillMount === "function" ||
          typeof G.componentWillMount === "function")
      )
        T$(J, G), Q9(J, Z, G, X), (G.state = J.memoizedState);
      if (typeof G.componentDidMount === "function") {
        var z = E1;
        if (((z |= q4), (J.mode & fZ) !== r)) z |= U0;
        J.flags |= z;
      }
    }
    function h$(J, Q, Z, X) {
      var { stateNode: G, memoizedProps: B } = J;
      G.props = B;
      var U = G.context,
        Y = Q.contextType,
        K = cQ;
      if (typeof Y === "object" && Y !== null) K = PJ(Y);
      else {
        var z = A5(J, Q, !0);
        K = E5(J, z);
      }
      var H = Q.getDerivedStateFromProps,
        $ =
          typeof H === "function" ||
          typeof G.getSnapshotBeforeUpdate === "function";
      if (
        !$ &&
        (typeof G.UNSAFE_componentWillReceiveProps === "function" ||
          typeof G.componentWillReceiveProps === "function")
      ) {
        if (B !== Z || U !== K) pW(J, G, Z, K);
      }
      dW();
      var O = J.memoizedState,
        E = (G.state = O);
      if (
        (Q9(J, Z, G, X),
        (E = J.memoizedState),
        B === Z && O === E && !f8() && !Z9())
      ) {
        if (typeof G.componentDidMount === "function") {
          var P = E1;
          if (((P |= q4), (J.mode & fZ) !== r)) P |= U0;
          J.flags |= P;
        }
        return !1;
      }
      if (typeof H === "function") PB(J, Q, H, Z), (E = J.memoizedState);
      var R = Z9() || cW(J, Q, B, Z, O, E, K);
      if (R) {
        if (
          !$ &&
          (typeof G.UNSAFE_componentWillMount === "function" ||
            typeof G.componentWillMount === "function")
        ) {
          if (typeof G.componentWillMount === "function")
            G.componentWillMount();
          if (typeof G.UNSAFE_componentWillMount === "function")
            G.UNSAFE_componentWillMount();
        }
        if (typeof G.componentDidMount === "function") {
          var g = E1;
          if (((g |= q4), (J.mode & fZ) !== r)) g |= U0;
          J.flags |= g;
        }
      } else {
        if (typeof G.componentDidMount === "function") {
          var l = E1;
          if (((l |= q4), (J.mode & fZ) !== r)) l |= U0;
          J.flags |= l;
        }
        (J.memoizedProps = Z), (J.memoizedState = E);
      }
      return (G.props = Z), (G.state = E), (G.context = K), R;
    }
    function f$(J, Q, Z, X, G) {
      var B = Q.stateNode;
      uW(J, Q);
      var U = Q.memoizedProps,
        Y = Q.type === Q.elementType ? U : IZ(Q.type, U);
      B.props = Y;
      var K = Q.pendingProps,
        z = B.context,
        H = Z.contextType,
        $ = cQ;
      if (typeof H === "object" && H !== null) $ = PJ(H);
      else {
        var O = A5(Q, Z, !0);
        $ = E5(Q, O);
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
        if (U !== K || z !== $) pW(Q, B, X, $);
      }
      dW();
      var R = Q.memoizedState,
        g = (B.state = R);
      if (
        (Q9(Q, X, B, G),
        (g = Q.memoizedState),
        U === K && R === g && !f8() && !Z9() && !qZ)
      ) {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= E1;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= M4;
        }
        return !1;
      }
      if (typeof E === "function") PB(Q, Z, E, X), (g = Q.memoizedState);
      var l = Z9() || cW(Q, Z, Y, X, R, g, $) || qZ;
      if (l) {
        if (
          !P &&
          (typeof B.UNSAFE_componentWillUpdate === "function" ||
            typeof B.componentWillUpdate === "function")
        ) {
          if (typeof B.componentWillUpdate === "function")
            B.componentWillUpdate(X, g, $);
          if (typeof B.UNSAFE_componentWillUpdate === "function")
            B.UNSAFE_componentWillUpdate(X, g, $);
        }
        if (typeof B.componentDidUpdate === "function") Q.flags |= E1;
        if (typeof B.getSnapshotBeforeUpdate === "function") Q.flags |= M4;
      } else {
        if (typeof B.componentDidUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= E1;
        }
        if (typeof B.getSnapshotBeforeUpdate === "function") {
          if (U !== J.memoizedProps || R !== J.memoizedState) Q.flags |= M4;
        }
        (Q.memoizedProps = X), (Q.memoizedState = g);
      }
      return (B.props = X), (B.state = g), (B.context = $), l;
    }
    var RB,
      LB,
      FB,
      IB,
      xB,
      oW = function (J, Q) {};
    (RB = !1),
      (LB = !1),
      (FB = {}),
      (IB = {}),
      (xB = {}),
      (oW = function (J, Q) {
        if (J === null || typeof J !== "object") return;
        if (!J._store || J._store.validated || J.key != null) return;
        if (typeof J._store !== "object")
          throw new Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.",
          );
        J._store.validated = !0;
        var Z = Y1(Q) || "Component";
        if (IB[Z]) return;
        (IB[Z] = !0),
          M(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.',
          );
      });
    function G7(J, Q, Z) {
      var X = Z.ref;
      if (X !== null && typeof X !== "function" && typeof X !== "object") {
        if (
          (J.mode & jJ || F0) &&
          !(Z._owner && Z._self && Z._owner.stateNode !== Z._self)
        ) {
          var G = Y1(J) || "Component";
          if (!FB[G])
            M(
              'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              X,
            ),
              (FB[G] = !0);
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
          var K = U;
          I0(X, "ref");
          var z = "" + X;
          if (
            Q !== null &&
            Q.ref !== null &&
            typeof Q.ref === "function" &&
            Q.ref._stringRef === z
          )
            return Q.ref;
          var H = function ($) {
            var O = K.refs;
            if (O === mW) O = K.refs = {};
            if ($ === null) delete O[z];
            else O[z] = $;
          };
          return (H._stringRef = z), H;
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
    function G9(J, Q) {
      var Z = Object.prototype.toString.call(Q);
      throw new Error(
        "Objects are not valid as a React child (found: " +
          (Z === "[object Object]"
            ? "object with keys {" + Object.keys(Q).join(", ") + "}"
            : Z) +
          "). If you meant to render a collection of children, use an array instead.",
      );
    }
    function B9(J) {
      {
        var Q = Y1(J) || "Component";
        if (xB[Q]) return;
        (xB[Q] = !0),
          M(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.",
          );
      }
    }
    function rW(J) {
      var { _payload: Q, _init: Z } = J;
      return Z(Q);
    }
    function nW(J) {
      function Q(D, F) {
        if (!J) return;
        var j = D.deletions;
        if (j === null) (D.deletions = [F]), (D.flags |= H4);
        else j.push(F);
      }
      function Z(D, F) {
        if (!J) return null;
        var j = F;
        while (j !== null) Q(D, j), (j = j.sibling);
        return null;
      }
      function X(D, F) {
        var j = new Map(),
          _ = F;
        while (_ !== null) {
          if (_.key !== null) j.set(_.key, _);
          else j.set(_.index, _);
          _ = _.sibling;
        }
        return j;
      }
      function G(D, F) {
        var j = u4(D, F);
        return (j.index = 0), (j.sibling = null), j;
      }
      function B(D, F, j) {
        if (((D.index = j), !J)) return (D.flags |= hY), F;
        var _ = D.alternate;
        if (_ !== null) {
          var h = _.index;
          if (h < F) return (D.flags |= DJ), F;
          else return h;
        } else return (D.flags |= DJ), F;
      }
      function U(D) {
        if (J && D.alternate === null) D.flags |= DJ;
        return D;
      }
      function Y(D, F, j, _) {
        if (F === null || F.tag !== x1) {
          var h = QY(j, D.mode, _);
          return (h.return = D), h;
        } else {
          var b = G(F, j);
          return (b.return = D), b;
        }
      }
      function K(D, F, j, _) {
        var h = j.type;
        if (h === w) return H(D, F, j.props.children, _, j.key);
        if (F !== null) {
          if (
            F.elementType === h ||
            mH(F, j) ||
            (typeof h === "object" &&
              h !== null &&
              h.$$typeof === $1 &&
              rW(h) === F.type)
          ) {
            var b = G(F, j.props);
            return (
              (b.ref = G7(D, F, j)),
              (b.return = D),
              (b._debugSource = j._source),
              (b._debugOwner = j._owner),
              b
            );
          }
        }
        var t = JY(j, D.mode, _);
        return (t.ref = G7(D, F, j)), (t.return = D), t;
      }
      function z(D, F, j, _) {
        if (
          F === null ||
          F.tag !== O1 ||
          F.stateNode.containerInfo !== j.containerInfo ||
          F.stateNode.implementation !== j.implementation
        ) {
          var h = ZY(j, D.mode, _);
          return (h.return = D), h;
        } else {
          var b = G(F, j.children || []);
          return (b.return = D), b;
        }
      }
      function H(D, F, j, _, h) {
        if (F === null || F.tag !== oQ) {
          var b = G4(j, D.mode, _, h);
          return (b.return = D), b;
        } else {
          var t = G(F, j);
          return (t.return = D), t;
        }
      }
      function $(D, F, j) {
        if ((typeof F === "string" && F !== "") || typeof F === "number") {
          var _ = QY("" + F, D.mode, j);
          return (_.return = D), _;
        }
        if (typeof F === "object" && F !== null) {
          switch (F.$$typeof) {
            case gZ: {
              var h = JY(F, D.mode, j);
              return (h.ref = G7(D, null, F)), (h.return = D), h;
            }
            case q: {
              var b = ZY(F, D.mode, j);
              return (b.return = D), b;
            }
            case $1: {
              var { _payload: t, _init: G1 } = F;
              return $(D, G1(t), j);
            }
          }
          if (LJ(F) || tZ(F)) {
            var T1 = G4(F, D.mode, j, null);
            return (T1.return = D), T1;
          }
          G9(D, F);
        }
        if (typeof F === "function") B9(D);
        return null;
      }
      function O(D, F, j, _) {
        var h = F !== null ? F.key : null;
        if ((typeof j === "string" && j !== "") || typeof j === "number") {
          if (h !== null) return null;
          return Y(D, F, "" + j, _);
        }
        if (typeof j === "object" && j !== null) {
          switch (j.$$typeof) {
            case gZ:
              if (j.key === h) return K(D, F, j, _);
              else return null;
            case q:
              if (j.key === h) return z(D, F, j, _);
              else return null;
            case $1: {
              var { _payload: b, _init: t } = j;
              return O(D, F, t(b), _);
            }
          }
          if (LJ(j) || tZ(j)) {
            if (h !== null) return null;
            return H(D, F, j, _, null);
          }
          G9(D, j);
        }
        if (typeof j === "function") B9(D);
        return null;
      }
      function E(D, F, j, _, h) {
        if ((typeof _ === "string" && _ !== "") || typeof _ === "number") {
          var b = D.get(j) || null;
          return Y(F, b, "" + _, h);
        }
        if (typeof _ === "object" && _ !== null) {
          switch (_.$$typeof) {
            case gZ: {
              var t = D.get(_.key === null ? j : _.key) || null;
              return K(F, t, _, h);
            }
            case q: {
              var G1 = D.get(_.key === null ? j : _.key) || null;
              return z(F, G1, _, h);
            }
            case $1:
              var { _payload: T1, _init: F1 } = _;
              return E(D, F, j, F1(T1), h);
          }
          if (LJ(_) || tZ(_)) {
            var MJ = D.get(j) || null;
            return H(F, MJ, _, h, null);
          }
          G9(F, _);
        }
        if (typeof _ === "function") B9(F);
        return null;
      }
      function P(D, F, j) {
        {
          if (typeof D !== "object" || D === null) return F;
          switch (D.$$typeof) {
            case gZ:
            case q:
              oW(D, j);
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
            case $1:
              var { _payload: h, _init: b } = D;
              P(b(h), F, j);
              break;
          }
        }
        return F;
      }
      function R(D, F, j, _) {
        {
          var h = null;
          for (var b = 0; b < j.length; b++) {
            var t = j[b];
            h = P(t, h, D);
          }
        }
        var G1 = null,
          T1 = null,
          F1 = F,
          MJ = 0,
          I1 = 0,
          zJ = null;
        for (; F1 !== null && I1 < j.length; I1++) {
          if (F1.index > I1) (zJ = F1), (F1 = null);
          else zJ = F1.sibling;
          var MQ = O(D, F1, j[I1], _);
          if (MQ === null) {
            if (F1 === null) F1 = zJ;
            break;
          }
          if (J) {
            if (F1 && MQ.alternate === null) Q(D, F1);
          }
          if (((MJ = B(MQ, MJ, I1)), T1 === null)) G1 = MQ;
          else T1.sibling = MQ;
          (T1 = MQ), (F1 = zJ);
        }
        if (I1 === j.length) {
          if ((Z(D, F1), pJ())) {
            var QQ = I1;
            x4(D, QQ);
          }
          return G1;
        }
        if (F1 === null) {
          for (; I1 < j.length; I1++) {
            var aQ = $(D, j[I1], _);
            if (aQ === null) continue;
            if (((MJ = B(aQ, MJ, I1)), T1 === null)) G1 = aQ;
            else T1.sibling = aQ;
            T1 = aQ;
          }
          if (pJ()) {
            var IQ = I1;
            x4(D, IQ);
          }
          return G1;
        }
        var xQ = X(D, F1);
        for (; I1 < j.length; I1++) {
          var VQ = E(xQ, D, I1, j[I1], _);
          if (VQ !== null) {
            if (J) {
              if (VQ.alternate !== null)
                xQ.delete(VQ.key === null ? I1 : VQ.key);
            }
            if (((MJ = B(VQ, MJ, I1)), T1 === null)) G1 = VQ;
            else T1.sibling = VQ;
            T1 = VQ;
          }
        }
        if (J)
          xQ.forEach(function (y5) {
            return Q(D, y5);
          });
        if (pJ()) {
          var R0 = I1;
          x4(D, R0);
        }
        return G1;
      }
      function g(D, F, j, _) {
        var h = tZ(j);
        if (typeof h !== "function")
          throw new Error(
            "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.",
          );
        {
          if (
            typeof Symbol === "function" &&
            j[Symbol.toStringTag] === "Generator"
          ) {
            if (!LB)
              M(
                "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.",
              );
            LB = !0;
          }
          if (j.entries === h) {
            if (!RB)
              M(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
              );
            RB = !0;
          }
          var b = h.call(j);
          if (b) {
            var t = null,
              G1 = b.next();
            for (; !G1.done; G1 = b.next()) {
              var T1 = G1.value;
              t = P(T1, t, D);
            }
          }
        }
        var F1 = h.call(j);
        if (F1 == null)
          throw new Error("An iterable object provided no iterator.");
        var MJ = null,
          I1 = null,
          zJ = F,
          MQ = 0,
          QQ = 0,
          aQ = null,
          IQ = F1.next();
        for (; zJ !== null && !IQ.done; QQ++, IQ = F1.next()) {
          if (zJ.index > QQ) (aQ = zJ), (zJ = null);
          else aQ = zJ.sibling;
          var xQ = O(D, zJ, IQ.value, _);
          if (xQ === null) {
            if (zJ === null) zJ = aQ;
            break;
          }
          if (J) {
            if (zJ && xQ.alternate === null) Q(D, zJ);
          }
          if (((MQ = B(xQ, MQ, QQ)), I1 === null)) MJ = xQ;
          else I1.sibling = xQ;
          (I1 = xQ), (zJ = aQ);
        }
        if (IQ.done) {
          if ((Z(D, zJ), pJ())) {
            var VQ = QQ;
            x4(D, VQ);
          }
          return MJ;
        }
        if (zJ === null) {
          for (; !IQ.done; QQ++, IQ = F1.next()) {
            var R0 = $(D, IQ.value, _);
            if (R0 === null) continue;
            if (((MQ = B(R0, MQ, QQ)), I1 === null)) MJ = R0;
            else I1.sibling = R0;
            I1 = R0;
          }
          if (pJ()) {
            var y5 = QQ;
            x4(D, y5);
          }
          return MJ;
        }
        var k7 = X(D, zJ);
        for (; !IQ.done; QQ++, IQ = F1.next()) {
          var oZ = E(k7, D, QQ, IQ.value, _);
          if (oZ !== null) {
            if (J) {
              if (oZ.alternate !== null)
                k7.delete(oZ.key === null ? QQ : oZ.key);
            }
            if (((MQ = B(oZ, MQ, QQ)), I1 === null)) MJ = oZ;
            else I1.sibling = oZ;
            I1 = oZ;
          }
        }
        if (J)
          k7.forEach(function (ZA) {
            return Q(D, ZA);
          });
        if (pJ()) {
          var QA = QQ;
          x4(D, QA);
        }
        return MJ;
      }
      function l(D, F, j, _) {
        if (F !== null && F.tag === x1) {
          Z(D, F.sibling);
          var h = G(F, j);
          return (h.return = D), h;
        }
        Z(D, F);
        var b = QY(j, D.mode, _);
        return (b.return = D), b;
      }
      function d(D, F, j, _) {
        var h = j.key,
          b = F;
        while (b !== null) {
          if (b.key === h) {
            var t = j.type;
            if (t === w) {
              if (b.tag === oQ) {
                Z(D, b.sibling);
                var G1 = G(b, j.props.children);
                return (
                  (G1.return = D),
                  (G1._debugSource = j._source),
                  (G1._debugOwner = j._owner),
                  G1
                );
              }
            } else if (
              b.elementType === t ||
              mH(b, j) ||
              (typeof t === "object" &&
                t !== null &&
                t.$$typeof === $1 &&
                rW(t) === b.type)
            ) {
              Z(D, b.sibling);
              var T1 = G(b, j.props);
              return (
                (T1.ref = G7(D, b, j)),
                (T1.return = D),
                (T1._debugSource = j._source),
                (T1._debugOwner = j._owner),
                T1
              );
            }
            Z(D, b);
            break;
          } else Q(D, b);
          b = b.sibling;
        }
        if (j.type === w) {
          var F1 = G4(j.props.children, D.mode, _, j.key);
          return (F1.return = D), F1;
        } else {
          var MJ = JY(j, D.mode, _);
          return (MJ.ref = G7(D, F, j)), (MJ.return = D), MJ;
        }
      }
      function V1(D, F, j, _) {
        var h = j.key,
          b = F;
        while (b !== null) {
          if (b.key === h)
            if (
              b.tag === O1 &&
              b.stateNode.containerInfo === j.containerInfo &&
              b.stateNode.implementation === j.implementation
            ) {
              Z(D, b.sibling);
              var t = G(b, j.children || []);
              return (t.return = D), t;
            } else {
              Z(D, b);
              break;
            }
          else Q(D, b);
          b = b.sibling;
        }
        var G1 = ZY(j, D.mode, _);
        return (G1.return = D), G1;
      }
      function q1(D, F, j, _) {
        var h =
          typeof j === "object" && j !== null && j.type === w && j.key === null;
        if (h) j = j.props.children;
        if (typeof j === "object" && j !== null) {
          switch (j.$$typeof) {
            case gZ:
              return U(d(D, F, j, _));
            case q:
              return U(V1(D, F, j, _));
            case $1:
              var { _payload: b, _init: t } = j;
              return q1(D, F, t(b), _);
          }
          if (LJ(j)) return R(D, F, j, _);
          if (tZ(j)) return g(D, F, j, _);
          G9(D, j);
        }
        if ((typeof j === "string" && j !== "") || typeof j === "number")
          return U(l(D, F, "" + j, _));
        if (typeof j === "function") B9(D);
        return Z(D, F);
      }
      return q1;
    }
    var w5 = nW(!0),
      tW = nW(!1);
    function u$(J, Q) {
      if (J !== null && Q.child !== J.child)
        throw new Error("Resuming work not yet implemented.");
      if (Q.child === null) return;
      var Z = Q.child,
        X = u4(Z, Z.pendingProps);
      (Q.child = X), (X.return = Q);
      while (Z.sibling !== null)
        (Z = Z.sibling),
          (X = X.sibling = u4(Z, Z.pendingProps)),
          (X.return = Q);
      X.sibling = null;
    }
    function d$(J, Q) {
      var Z = J.child;
      while (Z !== null) PP(Z, Q), (Z = Z.sibling);
    }
    var B7 = {},
      o0 = l0(B7),
      U7 = l0(B7),
      U9 = l0(B7);
    function Y9(J) {
      if (J === B7)
        throw new Error(
          "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.",
        );
      return J;
    }
    function eW() {
      var J = Y9(U9.current);
      return J;
    }
    function wB(J, Q) {
      zQ(U9, Q, J), zQ(U7, J, J), zQ(o0, B7, J);
      var Z = J2(Q);
      WQ(o0, J), zQ(o0, Z, J);
    }
    function _5(J) {
      WQ(o0, J), WQ(U7, J), WQ(U9, J);
    }
    function _B() {
      var J = Y9(o0.current);
      return J;
    }
    function Jz(J) {
      var Q = Y9(U9.current),
        Z = Y9(o0.current),
        X = Q2(Z, J.type);
      if (Z === X) return;
      zQ(U7, J, J), zQ(o0, X, J);
    }
    function SB(J) {
      if (U7.current !== J) return;
      WQ(o0, J), WQ(U7, J);
    }
    var s$ = 0,
      Qz = 1,
      Zz = 1,
      Y7 = 2,
      xZ = l0(s$);
    function CB(J, Q) {
      return (J & Q) !== 0;
    }
    function S5(J) {
      return J & Qz;
    }
    function vB(J, Q) {
      return (J & Qz) | Q;
    }
    function m$(J, Q) {
      return J | Q;
    }
    function r0(J, Q) {
      zQ(xZ, Q, J);
    }
    function C5(J) {
      WQ(xZ, J);
    }
    function y$(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null) {
        if (Z.dehydrated !== null) return !0;
        return !1;
      }
      var X = J.memoizedProps;
      return !0;
    }
    function K9(J) {
      var Q = J;
      while (Q !== null) {
        if (Q.tag === P1) {
          var Z = Q.memoizedState;
          if (Z !== null) {
            var X = Z.dehydrated;
            if (X === null || HW(X) || fG(X)) return Q;
          }
        } else if (Q.tag === EJ && Q.memoizedProps.revealOrder !== void 0) {
          var G = (Q.flags & C1) !== o;
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
    var bQ = 0,
      FJ = 1,
      mZ = 2,
      IJ = 4,
      oJ = 8,
      NB = [];
    function bB() {
      for (var J = 0; J < NB.length; J++) {
        var Q = NB[J];
        Q._workInProgressVersionPrimary = null;
      }
      NB.length = 0;
    }
    function l$(J, Q) {
      var Z = Q._getVersion,
        X = Z(Q._source);
      if (J.mutableSourceEagerHydrationData == null)
        J.mutableSourceEagerHydrationData = [Q, X];
      else J.mutableSourceEagerHydrationData.push(Q, X);
    }
    var { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: K7 } = L1,
      kB,
      v5;
    kB = new Set();
    var N4 = x,
      g1 = null,
      xJ = null,
      wJ = null,
      W9 = !1,
      W7 = !1,
      z7 = 0,
      c$ = 0,
      i$ = 25,
      I = null,
      KZ = null,
      n0 = -1,
      gB = !1;
    function N1() {
      {
        var J = I;
        if (KZ === null) KZ = [J];
        else KZ.push(J);
      }
    }
    function C() {
      {
        var J = I;
        if (KZ !== null) {
          if ((n0++, KZ[n0] !== J)) a$(J);
        }
      }
    }
    function N5(J) {
      if (J !== void 0 && J !== null && !LJ(J))
        M(
          "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.specified, the final argument must be an array.",
          I,
          typeof J,
        );
    }
    function a$(J) {
      {
        var Q = Y1(g1);
        if (!kB.has(Q)) {
          if ((kB.add(Q), KZ !== null)) {
            var Z = "",
              X = 30;
            for (var G = 0; G <= n0; G++) {
              var B = KZ[G],
                U = G === n0 ? J : B,
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
    function HQ() {
      throw new Error(
        "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
      );
    }
    function TB(J, Q) {
      if (gB) return !1;
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
        if (lQ(J[Z], Q[Z])) continue;
        return !1;
      }
      return !0;
    }
    function b5(J, Q, Z, X, G, B) {
      if (
        ((N4 = B),
        (g1 = Q),
        (KZ = J !== null ? J._debugHookTypes : null),
        (n0 = -1),
        (gB = J !== null && J.type !== Q.type),
        (Q.memoizedState = null),
        (Q.updateQueue = null),
        (Q.lanes = x),
        J !== null && J.memoizedState !== null)
      )
        T.current = Fz;
      else if (KZ !== null) T.current = Lz;
      else T.current = Rz;
      var U = Z(X, G);
      if (W7) {
        var Y = 0;
        do {
          if (((W7 = !1), (z7 = 0), Y >= i$))
            throw new Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
            );
          (Y += 1),
            (gB = !1),
            (xJ = null),
            (wJ = null),
            (Q.updateQueue = null),
            (n0 = -1),
            (T.current = Iz),
            (U = Z(X, G));
        } while (W7);
      }
      (T.current = F9), (Q._debugHookTypes = KZ);
      var K = xJ !== null && xJ.next !== null;
      if (
        ((N4 = x),
        (g1 = null),
        (xJ = null),
        (wJ = null),
        (I = null),
        (KZ = null),
        (n0 = -1),
        J !== null && (J.flags & Y0) !== (Q.flags & Y0) && (J.mode & D1) !== r)
      )
        M(
          "Internal React error: Expected static flag was missing. Please notify the React team.",
        );
      if (((W9 = !1), K))
        throw new Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement.early return statement.",
        );
      return U;
    }
    function k5() {
      var J = z7 !== 0;
      return (z7 = 0), J;
    }
    function Xz(J, Q, Z) {
      if (((Q.updateQueue = J.updateQueue), (Q.mode & fZ) !== r))
        Q.flags &= ~(Q8 | U0 | PZ | E1);
      else Q.flags &= ~(PZ | E1);
      J.lanes = K8(J.lanes, Z);
    }
    function Gz() {
      if (((T.current = F9), W9)) {
        var J = g1.memoizedState;
        while (J !== null) {
          var Q = J.queue;
          if (Q !== null) Q.pending = null;
          J = J.next;
        }
        W9 = !1;
      }
      (N4 = x),
        (g1 = null),
        (xJ = null),
        (wJ = null),
        (KZ = null),
        (n0 = -1),
        (I = null),
        (Dz = !1),
        (W7 = !1),
        (z7 = 0);
    }
    function yZ() {
      var J = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      if (wJ === null) g1.memoizedState = wJ = J;
      else wJ = wJ.next = J;
      return wJ;
    }
    function WZ() {
      var J;
      if (xJ === null) {
        var Q = g1.alternate;
        if (Q !== null) J = Q.memoizedState;
        else J = null;
      } else J = xJ.next;
      var Z;
      if (wJ === null) Z = g1.memoizedState;
      else Z = wJ.next;
      if (Z !== null) (wJ = Z), (Z = wJ.next), (xJ = J);
      else {
        if (J === null)
          throw new Error(
            "Rendered more hooks than during the previous render.",
          );
        xJ = J;
        var X = {
          memoizedState: xJ.memoizedState,
          baseState: xJ.baseState,
          baseQueue: xJ.baseQueue,
          queue: xJ.queue,
          next: null,
        };
        if (wJ === null) g1.memoizedState = wJ = X;
        else wJ = wJ.next = X;
      }
      return wJ;
    }
    function Bz() {
      return { lastEffect: null, stores: null };
    }
    function hB(J, Q) {
      return typeof Q === "function" ? Q(J) : Q;
    }
    function fB(J, Q, Z) {
      var X = yZ(),
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
      var U = (B.dispatch = r$.bind(null, g1, B));
      return [X.memoizedState, U];
    }
    function uB(J, Q, Z) {
      var X = WZ(),
        G = X.queue;
      if (G === null)
        throw new Error(
          "Should have a queue. This is likely a bug in React. Please file an issue.",
        );
      G.lastRenderedReducer = J;
      var B = xJ,
        U = B.baseQueue,
        Y = G.pending;
      if (Y !== null) {
        if (U !== null) {
          var K = U.next,
            z = Y.next;
          (U.next = z), (Y.next = K);
        }
        if (B.baseQueue !== U)
          M(
            "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.",
          );
        (B.baseQueue = U = Y), (G.pending = null);
      }
      if (U !== null) {
        var H = U.next,
          $ = B.baseState,
          O = null,
          E = null,
          P = null,
          R = H;
        do {
          var g = R.lane;
          if (!z5(N4, g)) {
            var l = {
              lane: g,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            };
            if (P === null) (E = P = l), (O = $);
            else P = P.next = l;
            (g1.lanes = H1(g1.lanes, g)), S7(g);
          } else {
            if (P !== null) {
              var d = {
                lane: fJ,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              };
              P = P.next = d;
            }
            if (R.hasEagerState) $ = R.eagerState;
            else {
              var V1 = R.action;
              $ = J($, V1);
            }
          }
          R = R.next;
        } while (R !== null && R !== H);
        if (P === null) O = $;
        else P.next = E;
        if (!lQ($, X.memoizedState)) D7();
        (X.memoizedState = $),
          (X.baseState = O),
          (X.baseQueue = P),
          (G.lastRenderedState = $);
      }
      var q1 = G.interleaved;
      if (q1 !== null) {
        var D = q1;
        do {
          var F = D.lane;
          (g1.lanes = H1(g1.lanes, F)), S7(F), (D = D.next);
        } while (D !== q1);
      } else if (U === null) G.lanes = x;
      var j = G.dispatch;
      return [X.memoizedState, j];
    }
    function dB(J, Q, Z) {
      var X = WZ(),
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
          z = K;
        do {
          var H = z.action;
          (Y = J(Y, H)), (z = z.next);
        } while (z !== K);
        if (!lQ(Y, X.memoizedState)) D7();
        if (((X.memoizedState = Y), X.baseQueue === null)) X.baseState = Y;
        G.lastRenderedState = Y;
      }
      return [Y, B];
    }
    function sB(J, Q, Z) {
      return;
    }
    function z9(J, Q, Z) {
      return;
    }
    function mB(J, Q, Z) {
      var X = g1,
        G = yZ(),
        B,
        U = pJ();
      if (U) {
        if (Z === void 0)
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.server-rendered content. Will revert to client rendering.",
          );
        if (((B = Z()), !v5)) {
          if (B !== Z())
            M(
              "The result of getServerSnapshot should be cached to avoid an infinite loop",
            ),
              (v5 = !0);
        }
      } else {
        if (((B = Q()), !v5)) {
          var Y = Q();
          if (!lQ(B, Y))
            M(
              "The result of getSnapshot should be cached to avoid an infinite loop",
            ),
              (v5 = !0);
        }
        var K = m9();
        if (K === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!Y8(K, N4)) Uz(X, Q, B);
      }
      G.memoizedState = B;
      var z = { value: B, getSnapshot: Q };
      return (
        (G.queue = z),
        O9(Kz.bind(null, X, z, J), [J]),
        (X.flags |= PZ),
        H7(FJ | oJ, Yz.bind(null, X, z, B, Q), void 0, null),
        B
      );
    }
    function H9(J, Q, Z) {
      var X = g1,
        G = WZ(),
        B = Q();
      if (!v5) {
        var U = Q();
        if (!lQ(B, U))
          M(
            "The result of getSnapshot should be cached to avoid an infinite loop",
          ),
            (v5 = !0);
      }
      var Y = G.memoizedState,
        K = !lQ(Y, B);
      if (K) (G.memoizedState = B), D7();
      var z = G.queue;
      if (
        (V7(Kz.bind(null, X, z, J), [J]),
        z.getSnapshot !== Q || K || (wJ !== null && wJ.memoizedState.tag & FJ))
      ) {
        (X.flags |= PZ), H7(FJ | oJ, Yz.bind(null, X, z, B, Q), void 0, null);
        var H = m9();
        if (H === null)
          throw new Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue.",
          );
        if (!Y8(H, N4)) Uz(X, Q, B);
      }
      return B;
    }
    function Uz(J, Q, Z) {
      J.flags |= J8;
      var X = { getSnapshot: Q, value: Z },
        G = g1.updateQueue;
      if (G === null) (G = Bz()), (g1.updateQueue = G), (G.stores = [X]);
      else {
        var B = G.stores;
        if (B === null) G.stores = [X];
        else B.push(X);
      }
    }
    function Yz(J, Q, Z, X) {
      if (((Q.value = Z), (Q.getSnapshot = X), Wz(Q))) zz(J);
    }
    function Kz(J, Q, Z) {
      var X = function () {
        if (Wz(Q)) zz(J);
      };
      return Z(X);
    }
    function Wz(J) {
      var { getSnapshot: Q, value: Z } = J;
      try {
        var X = Q();
        return !lQ(Z, X);
      } catch (G) {
        return !0;
      }
    }
    function zz(J) {
      var Q = NQ(J, Z1);
      if (Q !== null) vJ(Q, J, Z1, o1);
    }
    function M9(J) {
      var Q = yZ();
      if (typeof J === "function") J = J();
      Q.memoizedState = Q.baseState = J;
      var Z = {
        pending: null,
        interleaved: null,
        lanes: x,
        dispatch: null,
        lastRenderedReducer: hB,
        lastRenderedState: J,
      };
      Q.queue = Z;
      var X = (Z.dispatch = n$.bind(null, g1, Z));
      return [Q.memoizedState, X];
    }
    function yB(J) {
      return uB(hB);
    }
    function lB(J) {
      return dB(hB);
    }
    function H7(J, Q, Z, X) {
      var G = { tag: J, create: Q, destroy: Z, deps: X, next: null },
        B = g1.updateQueue;
      if (B === null)
        (B = Bz()), (g1.updateQueue = B), (B.lastEffect = G.next = G);
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
    function cB(J) {
      var Q = yZ();
      {
        var Z = { current: J };
        return (Q.memoizedState = Z), Z;
      }
    }
    function V9(J) {
      var Q = WZ();
      return Q.memoizedState;
    }
    function M7(J, Q, Z, X) {
      var G = yZ(),
        B = X === void 0 ? null : X;
      (g1.flags |= J), (G.memoizedState = H7(FJ | Q, Z, void 0, B));
    }
    function q9(J, Q, Z, X) {
      var G = WZ(),
        B = X === void 0 ? null : X,
        U = void 0;
      if (xJ !== null) {
        var Y = xJ.memoizedState;
        if (((U = Y.destroy), B !== null)) {
          var K = Y.deps;
          if (TB(B, K)) {
            G.memoizedState = H7(Q, Z, U, B);
            return;
          }
        }
      }
      (g1.flags |= J), (G.memoizedState = H7(FJ | Q, Z, U, B));
    }
    function O9(J, Q) {
      if ((g1.mode & fZ) !== r) return M7(Q8 | PZ | SX, oJ, J, Q);
      else return M7(PZ | SX, oJ, J, Q);
    }
    function V7(J, Q) {
      return q9(PZ, oJ, J, Q);
    }
    function iB(J, Q) {
      return M7(E1, mZ, J, Q);
    }
    function $9(J, Q) {
      return q9(E1, mZ, J, Q);
    }
    function aB(J, Q) {
      var Z = E1;
      if (((Z |= q4), (g1.mode & fZ) !== r)) Z |= U0;
      return M7(Z, IJ, J, Q);
    }
    function D9(J, Q) {
      return q9(E1, IJ, J, Q);
    }
    function Hz(J, Q) {
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
    function pB(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null,
        G = E1;
      if (((G |= q4), (g1.mode & fZ) !== r)) G |= U0;
      return M7(G, IJ, Hz.bind(null, Q, J), X);
    }
    function j9(J, Q, Z) {
      if (typeof Q !== "function")
        M(
          "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
          Q !== null ? typeof Q : "null",
        );
      var X = Z !== null && Z !== void 0 ? Z.concat([J]) : null;
      return q9(E1, IJ, Hz.bind(null, Q, J), X);
    }
    function P9(J, Q) {}
    var A9 = P9;
    function oB(J, Q) {
      var Z = yZ(),
        X = Q === void 0 ? null : Q;
      return (Z.memoizedState = [J, X]), J;
    }
    function E9(J, Q) {
      var Z = WZ(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (TB(X, B)) return G[0];
        }
      }
      return (Z.memoizedState = [J, X]), J;
    }
    function rB(J, Q) {
      var Z = yZ(),
        X = Q === void 0 ? null : Q,
        G = J();
      return (Z.memoizedState = [G, X]), G;
    }
    function R9(J, Q) {
      var Z = WZ(),
        X = Q === void 0 ? null : Q,
        G = Z.memoizedState;
      if (G !== null) {
        if (X !== null) {
          var B = G[1];
          if (TB(X, B)) return G[0];
        }
      }
      var U = J();
      return (Z.memoizedState = [U, X]), U;
    }
    function nB(J) {
      var Q = yZ();
      return (Q.memoizedState = J), J;
    }
    function Mz(J) {
      var Q = WZ(),
        Z = xJ,
        X = Z.memoizedState;
      return qz(Q, X, J);
    }
    function Vz(J) {
      var Q = WZ();
      if (xJ === null) return (Q.memoizedState = J), J;
      else {
        var Z = xJ.memoizedState;
        return qz(Q, Z, J);
      }
    }
    function qz(J, Q, Z) {
      var X = !CV(N4);
      if (X) {
        if (!lQ(Z, Q)) {
          var G = ZK();
          (g1.lanes = H1(g1.lanes, G)), S7(G), (J.baseState = !0);
        }
        return Q;
      } else {
        if (J.baseState) (J.baseState = !1), D7();
        return (J.memoizedState = Z), Z;
      }
    }
    function p$(J, Q, Z) {
      var X = EZ();
      uJ(uV(X, W0)), J(!0);
      var G = K7.transition;
      K7.transition = {};
      var B = K7.transition;
      K7.transition._updatedFibers = new Set();
      try {
        J(!1), Q();
      } finally {
        if ((uJ(X), (K7.transition = G), G === null && B._updatedFibers)) {
          var U = B._updatedFibers.size;
          if (U > 10)
            AJ(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
            );
          B._updatedFibers.clear();
        }
      }
    }
    function tB() {
      var J = M9(!1),
        Q = J[0],
        Z = J[1],
        X = p$.bind(null, Z),
        G = yZ();
      return (G.memoizedState = X), [Q, X];
    }
    function Oz() {
      var J = yB(),
        Q = J[0],
        Z = WZ(),
        X = Z.memoizedState;
      return [Q, X];
    }
    function $z() {
      var J = lB(),
        Q = J[0],
        Z = WZ(),
        X = Z.memoizedState;
      return [Q, X];
    }
    var Dz = !1;
    function o$() {
      return Dz;
    }
    function eB() {
      var J = yZ(),
        Q = m9(),
        Z = Q.identifierPrefix,
        X;
      if (pJ()) {
        var G = z$();
        X = ":" + Z + "R" + G;
        var B = z7++;
        if (B > 0) X += "H" + B.toString(32);
        X += ":";
      } else {
        var U = c$++;
        X = ":" + Z + "r" + U.toString(32) + ":";
      }
      return (J.memoizedState = X), X;
    }
    function L9() {
      var J = WZ(),
        Q = J.memoizedState;
      return Q;
    }
    function r$(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = Z4(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (jz(J)) Pz(Q, G);
      else {
        var B = TW(J, Q, G, X);
        if (B !== null) {
          var U = FQ();
          vJ(B, J, X, U), Az(B, Q, X);
        }
      }
      Ez(J, X);
    }
    function n$(J, Q, Z) {
      if (typeof arguments[3] === "function")
        M(
          "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
        );
      var X = Z4(J),
        G = {
          lane: X,
          action: Z,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (jz(J)) Pz(Q, G);
      else {
        var B = J.alternate;
        if (J.lanes === x && (B === null || B.lanes === x)) {
          var U = Q.lastRenderedReducer;
          if (U !== null) {
            var Y;
            (Y = T.current), (T.current = wZ);
            try {
              var K = Q.lastRenderedState,
                z = U(K, Z);
              if (((G.hasEagerState = !0), (G.eagerState = z), lQ(z, K))) {
                C$(J, Q, G, X);
                return;
              }
            } catch (O) {
            } finally {
              T.current = Y;
            }
          }
        }
        var H = TW(J, Q, G, X);
        if (H !== null) {
          var $ = FQ();
          vJ(H, J, X, $), Az(H, Q, X);
        }
      }
      Ez(J, X);
    }
    function jz(J) {
      var Q = J.alternate;
      return J === g1 || (Q !== null && Q === g1);
    }
    function Pz(J, Q) {
      W7 = W9 = !0;
      var Z = J.pending;
      if (Z === null) Q.next = Q;
      else (Q.next = Z.next), (Z.next = Q);
      J.pending = Q;
    }
    function Az(J, Q, Z) {
      if (QK(Z)) {
        var X = Q.lanes;
        X = XK(X, J.pendingLanes);
        var G = H1(X, Z);
        (Q.lanes = G), BG(J, G);
      }
    }
    function Ez(J, Q, Z) {
      kX(J, Q);
    }
    var F9 = {
        readContext: PJ,
        useCallback: HQ,
        useContext: HQ,
        useEffect: HQ,
        useImperativeHandle: HQ,
        useInsertionEffect: HQ,
        useLayoutEffect: HQ,
        useMemo: HQ,
        useReducer: HQ,
        useRef: HQ,
        useState: HQ,
        useDebugValue: HQ,
        useDeferredValue: HQ,
        useTransition: HQ,
        useMutableSource: HQ,
        useSyncExternalStore: HQ,
        useId: HQ,
        unstable_isNewReconciler: sJ,
      },
      Rz = null,
      Lz = null,
      Fz = null,
      Iz = null,
      lZ = null,
      wZ = null,
      I9 = null;
    {
      var JU = function () {
          M(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().",
          );
        },
        X1 = function () {
          M(
            "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks",
          );
        };
      (Rz = {
        readContext: function (J) {
          return PJ(J);
        },
        useCallback: function (J, Q) {
          return (I = "useCallback"), N1(), N5(Q), oB(J, Q);
        },
        useContext: function (J) {
          return (I = "useContext"), N1(), PJ(J);
        },
        useEffect: function (J, Q) {
          return (I = "useEffect"), N1(), N5(Q), O9(J, Q);
        },
        useImperativeHandle: function (J, Q, Z) {
          return (I = "useImperativeHandle"), N1(), N5(Z), pB(J, Q, Z);
        },
        useInsertionEffect: function (J, Q) {
          return (I = "useInsertionEffect"), N1(), N5(Q), iB(J, Q);
        },
        useLayoutEffect: function (J, Q) {
          return (I = "useLayoutEffect"), N1(), N5(Q), aB(J, Q);
        },
        useMemo: function (J, Q) {
          (I = "useMemo"), N1(), N5(Q);
          var Z = T.current;
          T.current = lZ;
          try {
            return rB(J, Q);
          } finally {
            T.current = Z;
          }
        },
        useReducer: function (J, Q, Z) {
          (I = "useReducer"), N1();
          var X = T.current;
          T.current = lZ;
          try {
            return fB(J, Q, Z);
          } finally {
            T.current = X;
          }
        },
        useRef: function (J) {
          return (I = "useRef"), N1(), cB(J);
        },
        useState: function (J) {
          (I = "useState"), N1();
          var Q = T.current;
          T.current = lZ;
          try {
            return M9(J);
          } finally {
            T.current = Q;
          }
        },
        useDebugValue: function (J, Q) {
          return (I = "useDebugValue"), N1(), P9();
        },
        useDeferredValue: function (J) {
          return (I = "useDeferredValue"), N1(), nB(J);
        },
        useTransition: function () {
          return (I = "useTransition"), N1(), tB();
        },
        useMutableSource: function (J, Q, Z) {
          return (I = "useMutableSource"), N1(), sB();
        },
        useSyncExternalStore: function (J, Q, Z) {
          return (I = "useSyncExternalStore"), N1(), mB(J, Q, Z);
        },
        useId: function () {
          return (I = "useId"), N1(), eB();
        },
        unstable_isNewReconciler: sJ,
      }),
        (Lz = {
          readContext: function (J) {
            return PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), oB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), O9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), pB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), iB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), aB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = lZ;
            try {
              return rB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = lZ;
            try {
              return fB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), cB(J);
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = lZ;
            try {
              return M9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), P9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), nB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), tB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), sB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), mB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), C(), eB();
          },
          unstable_isNewReconciler: sJ,
        }),
        (Fz = {
          readContext: function (J) {
            return PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), E9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), V7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), j9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), $9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), D9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = wZ;
            try {
              return R9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = wZ;
            try {
              return uB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), V9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = wZ;
            try {
              return yB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), A9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), Mz(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), Oz();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), z9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), H9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), L9();
          },
          unstable_isNewReconciler: sJ,
        }),
        (Iz = {
          readContext: function (J) {
            return PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), C(), E9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), C(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), C(), V7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), C(), j9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), C(), $9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), C(), D9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), C();
            var Z = T.current;
            T.current = I9;
            try {
              return R9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), C();
            var X = T.current;
            T.current = I9;
            try {
              return dB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), C(), V9();
          },
          useState: function (J) {
            (I = "useState"), C();
            var Q = T.current;
            T.current = I9;
            try {
              return lB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), C(), A9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), C(), Vz(J);
          },
          useTransition: function () {
            return (I = "useTransition"), C(), $z();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), C(), z9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), C(), H9(J, Q);
          },
          useId: function () {
            return (I = "useId"), C(), L9();
          },
          unstable_isNewReconciler: sJ,
        }),
        (lZ = {
          readContext: function (J) {
            return JU(), PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), X1(), N1(), oB(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), X1(), N1(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), X1(), N1(), O9(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), X1(), N1(), pB(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), X1(), N1(), iB(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), X1(), N1(), aB(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), X1(), N1();
            var Z = T.current;
            T.current = lZ;
            try {
              return rB(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), X1(), N1();
            var X = T.current;
            T.current = lZ;
            try {
              return fB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), X1(), N1(), cB(J);
          },
          useState: function (J) {
            (I = "useState"), X1(), N1();
            var Q = T.current;
            T.current = lZ;
            try {
              return M9(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), X1(), N1(), P9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), X1(), N1(), nB(J);
          },
          useTransition: function () {
            return (I = "useTransition"), X1(), N1(), tB();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), X1(), N1(), sB();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), X1(), N1(), mB(J, Q, Z);
          },
          useId: function () {
            return (I = "useId"), X1(), N1(), eB();
          },
          unstable_isNewReconciler: sJ,
        }),
        (wZ = {
          readContext: function (J) {
            return JU(), PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), X1(), C(), E9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), X1(), C(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), X1(), C(), V7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), X1(), C(), j9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), X1(), C(), $9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), X1(), C(), D9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), X1(), C();
            var Z = T.current;
            T.current = wZ;
            try {
              return R9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), X1(), C();
            var X = T.current;
            T.current = wZ;
            try {
              return uB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), X1(), C(), V9();
          },
          useState: function (J) {
            (I = "useState"), X1(), C();
            var Q = T.current;
            T.current = wZ;
            try {
              return yB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), X1(), C(), A9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), X1(), C(), Mz(J);
          },
          useTransition: function () {
            return (I = "useTransition"), X1(), C(), Oz();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), X1(), C(), z9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), X1(), C(), H9(J, Q);
          },
          useId: function () {
            return (I = "useId"), X1(), C(), L9();
          },
          unstable_isNewReconciler: sJ,
        }),
        (I9 = {
          readContext: function (J) {
            return JU(), PJ(J);
          },
          useCallback: function (J, Q) {
            return (I = "useCallback"), X1(), C(), E9(J, Q);
          },
          useContext: function (J) {
            return (I = "useContext"), X1(), C(), PJ(J);
          },
          useEffect: function (J, Q) {
            return (I = "useEffect"), X1(), C(), V7(J, Q);
          },
          useImperativeHandle: function (J, Q, Z) {
            return (I = "useImperativeHandle"), X1(), C(), j9(J, Q, Z);
          },
          useInsertionEffect: function (J, Q) {
            return (I = "useInsertionEffect"), X1(), C(), $9(J, Q);
          },
          useLayoutEffect: function (J, Q) {
            return (I = "useLayoutEffect"), X1(), C(), D9(J, Q);
          },
          useMemo: function (J, Q) {
            (I = "useMemo"), X1(), C();
            var Z = T.current;
            T.current = wZ;
            try {
              return R9(J, Q);
            } finally {
              T.current = Z;
            }
          },
          useReducer: function (J, Q, Z) {
            (I = "useReducer"), X1(), C();
            var X = T.current;
            T.current = wZ;
            try {
              return dB(J, Q, Z);
            } finally {
              T.current = X;
            }
          },
          useRef: function (J) {
            return (I = "useRef"), X1(), C(), V9();
          },
          useState: function (J) {
            (I = "useState"), X1(), C();
            var Q = T.current;
            T.current = wZ;
            try {
              return lB(J);
            } finally {
              T.current = Q;
            }
          },
          useDebugValue: function (J, Q) {
            return (I = "useDebugValue"), X1(), C(), A9();
          },
          useDeferredValue: function (J) {
            return (I = "useDeferredValue"), X1(), C(), Vz(J);
          },
          useTransition: function () {
            return (I = "useTransition"), X1(), C(), $z();
          },
          useMutableSource: function (J, Q, Z) {
            return (I = "useMutableSource"), X1(), C(), z9();
          },
          useSyncExternalStore: function (J, Q, Z) {
            return (I = "useSyncExternalStore"), X1(), C(), H9(J, Q);
          },
          useId: function () {
            return (I = "useId"), X1(), C(), L9();
          },
          unstable_isNewReconciler: sJ,
        });
    }
    var t0 = s.unstable_now,
      xz = 0,
      x9 = -1,
      q7 = -1,
      w9 = -1,
      QU = !1,
      _9 = !1;
    function wz() {
      return QU;
    }
    function t$() {
      _9 = !0;
    }
    function e$() {
      (QU = !1), (_9 = !1);
    }
    function JD() {
      (QU = _9), (_9 = !1);
    }
    function _z() {
      return xz;
    }
    function Sz() {
      xz = t0();
    }
    function ZU(J) {
      if (((q7 = t0()), J.actualStartTime < 0)) J.actualStartTime = t0();
    }
    function Cz(J) {
      q7 = -1;
    }
    function S9(J, Q) {
      if (q7 >= 0) {
        var Z = t0() - q7;
        if (((J.actualDuration += Z), Q)) J.selfBaseDuration = Z;
        q7 = -1;
      }
    }
    function cZ(J) {
      if (x9 >= 0) {
        var Q = t0() - x9;
        x9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case m:
              var X = Z.stateNode;
              X.effectDuration += Q;
              return;
            case r1:
              var G = Z.stateNode;
              G.effectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function XU(J) {
      if (w9 >= 0) {
        var Q = t0() - w9;
        w9 = -1;
        var Z = J.return;
        while (Z !== null) {
          switch (Z.tag) {
            case m:
              var X = Z.stateNode;
              if (X !== null) X.passiveEffectDuration += Q;
              return;
            case r1:
              var G = Z.stateNode;
              if (G !== null) G.passiveEffectDuration += Q;
              return;
          }
          Z = Z.return;
        }
      }
    }
    function iZ() {
      x9 = t0();
    }
    function GU() {
      w9 = t0();
    }
    function BU(J) {
      var Q = J.child;
      while (Q) (J.actualDuration += Q.actualDuration), (Q = Q.sibling);
    }
    function b4(J, Q) {
      return { value: J, source: Q, stack: m7(Q), digest: null };
    }
    function UU(J, Q, Z) {
      return {
        value: J,
        source: null,
        stack: Z != null ? Z : null,
        digest: Q != null ? Q : null,
      };
    }
    function QD(J, Q) {
      return !0;
    }
    function YU(J, Q) {
      try {
        var Z = QD(J, Q);
        if (Z === !1) return;
        var { value: X, source: G, stack: B } = Q,
          U = B !== null ? B : "";
        if (X != null && X._suppressLogging) {
          if (J.tag === a) return;
          console.error(X);
        }
        var Y = G ? Y1(G) : null,
          K = Y
            ? "The above error occurred in the <" + Y + "> component:"
            : "The above error occurred in one of your React components:",
          z;
        if (J.tag === m)
          z =
            "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
        else {
          var H = Y1(J) || "Anonymous";
          z =
            "React will try to recreate this component tree from scratch " +
            ("using the error boundary you provided, " + H + ".");
        }
        var $ = K + "\n" + U + "\n\n" + ("" + z);
        console.error($);
      } catch (O) {
        setTimeout(function () {
          throw O;
        });
      }
    }
    var ZD = typeof WeakMap === "function" ? WeakMap : Map;
    function vz(J, Q, Z) {
      var X = $0(o1, Z);
      (X.tag = UB), (X.payload = { element: null });
      var G = Q.value;
      return (
        (X.callback = function () {
          ej(G), YU(J, Q);
        }),
        X
      );
    }
    function KU(J, Q, Z) {
      var X = $0(o1, Z);
      X.tag = UB;
      var G = J.type.getDerivedStateFromError;
      if (typeof G === "function") {
        var B = Q.value;
        (X.payload = function () {
          return G(B);
        }),
          (X.callback = function () {
            yH(J), YU(J, Q);
          });
      }
      var U = J.stateNode;
      if (U !== null && typeof U.componentDidCatch === "function")
        X.callback = function Y() {
          if ((yH(J), YU(J, Q), typeof G !== "function")) nj(this);
          var { value: K, stack: z } = Q;
          if (
            (this.componentDidCatch(K, { componentStack: z !== null ? z : "" }),
            typeof G !== "function")
          ) {
            if (!sQ(J.lanes, Z1))
              M(
                "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                Y1(J) || "Unknown",
              );
          }
        };
      return X;
    }
    function Nz(J, Q, Z) {
      var X = J.pingCache,
        G;
      if (X === null)
        (X = J.pingCache = new ZD()), (G = new Set()), X.set(Q, G);
      else if (((G = X.get(Q)), G === void 0)) (G = new Set()), X.set(Q, G);
      if (!G.has(Z)) {
        G.add(Z);
        var B = JP.bind(null, J, Q, Z);
        if (AZ) C7(J, Z);
        Q.then(B, B);
      }
    }
    function XD(J, Q, Z, X) {
      var G = J.updateQueue;
      if (G === null) {
        var B = new Set();
        B.add(Z), (J.updateQueue = B);
      } else G.add(Z);
    }
    function GD(J, Q) {
      var Z = J.tag;
      if ((J.mode & D1) === r && (Z === K1 || Z === J1 || Z === _1)) {
        var X = J.alternate;
        if (X)
          (J.updateQueue = X.updateQueue),
            (J.memoizedState = X.memoizedState),
            (J.lanes = X.lanes);
        else (J.updateQueue = null), (J.memoizedState = null);
      }
    }
    function bz(J) {
      var Q = J;
      do {
        if (Q.tag === P1 && y$(Q)) return Q;
        Q = Q.return;
      } while (Q !== null);
      return null;
    }
    function kz(J, Q, Z, X, G) {
      if ((J.mode & D1) === r) {
        if (J === Q) J.flags |= EQ;
        else {
          if (
            ((J.flags |= C1),
            (Z.flags |= wX),
            (Z.flags &= ~(uM | q6)),
            Z.tag === a)
          ) {
            var B = Z.alternate;
            if (B === null) Z.tag = YJ;
            else {
              var U = $0(o1, Z1);
              (U.tag = n8), p0(Z, U, Z1);
            }
          }
          Z.lanes = H1(Z.lanes, Z1);
        }
        return J;
      }
      return (J.flags |= EQ), (J.lanes = G), J;
    }
    function BD(J, Q, Z, X, G) {
      if (((Z.flags |= q6), AZ)) C7(J, G);
      if (X !== null && typeof X === "object" && typeof X.then === "function") {
        var B = X;
        if ((GD(Z), pJ() && Z.mode & D1)) FW();
        var U = bz(Q);
        if (U !== null) {
          if (((U.flags &= ~G0), kz(U, Q, Z, J, G), U.mode & D1)) Nz(J, B, G);
          XD(U, J, B);
          return;
        } else {
          if (!SV(G)) {
            Nz(J, B, G), mU();
            return;
          }
          var Y = new Error(
            "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
          );
          X = Y;
        }
      } else if (pJ() && Z.mode & D1) {
        FW();
        var K = bz(Q);
        if (K !== null) {
          if ((K.flags & EQ) === o) K.flags |= G0;
          kz(K, Q, Z, J, G), eG(b4(X, Z));
          return;
        }
      }
      (X = b4(X, Z)), yj(X);
      var z = Q;
      do {
        switch (z.tag) {
          case m: {
            var H = X;
            z.flags |= EQ;
            var $ = R6(G);
            z.lanes = H1(z.lanes, $);
            var O = vz(z, H, $);
            WB(z, O);
            return;
          }
          case a:
            var E = X,
              P = z.type,
              R = z.stateNode;
            if (
              (z.flags & C1) === o &&
              (typeof P.getDerivedStateFromError === "function" ||
                (R !== null &&
                  typeof R.componentDidCatch === "function" &&
                  !kH(R)))
            ) {
              z.flags |= EQ;
              var g = R6(G);
              z.lanes = H1(z.lanes, g);
              var l = KU(z, E, g);
              WB(z, l);
              return;
            }
            break;
        }
        z = z.return;
      } while (z !== null);
    }
    function UD() {
      return null;
    }
    var O7 = L1.ReactCurrentOwner,
      _Z = !1,
      WU,
      $7,
      zU,
      HU,
      MU,
      k4,
      VU,
      C9;
    (WU = {}),
      ($7 = {}),
      (zU = {}),
      (HU = {}),
      (MU = {}),
      (k4 = !1),
      (VU = {}),
      (C9 = {});
    function RQ(J, Q, Z, X) {
      if (J === null) Q.child = tW(Q, null, Z, X);
      else Q.child = w5(Q, J.child, Z, X);
    }
    function YD(J, Q, Z, X) {
      (Q.child = w5(Q, J.child, null, X)), (Q.child = w5(Q, null, Z, X));
    }
    function gz(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) RZ(B, X, "prop", f1(Z));
      }
      var U = Z.render,
        Y = Q.ref,
        K,
        z;
      x5(Q, G), $6(Q);
      {
        if (
          ((O7.current = Q),
          GZ(!0),
          (K = b5(J, Q, U, X, Y, G)),
          (z = k5()),
          Q.mode & jJ)
        ) {
          hJ(!0);
          try {
            (K = b5(J, Q, U, X, Y, G)), (z = k5());
          } finally {
            hJ(!1);
          }
        }
        GZ(!1);
      }
      if ((U5(), J !== null && !_Z)) return Xz(J, Q, G), D0(J, Q, G);
      if (pJ() && z) aG(Q);
      return (Q.flags |= G5), RQ(J, Q, K, G), Q.child;
    }
    function Tz(J, Q, Z, X, G) {
      if (J === null) {
        var B = Z.type;
        if (DP(B) && Z.compare === null && Z.defaultProps === void 0) {
          var U = B;
          return (
            (U = m5(B)), (Q.tag = _1), (Q.type = U), $U(Q, B), hz(J, Q, U, X, G)
          );
        }
        {
          var Y = B.propTypes;
          if (Y) RZ(Y, X, "prop", f1(B));
        }
        var K = eU(Z.type, null, X, Q, Q.mode, G);
        return (K.ref = Q.ref), (K.return = Q), (Q.child = K), K;
      }
      {
        var z = Z.type,
          H = z.propTypes;
        if (H) RZ(H, X, "prop", f1(z));
      }
      var $ = J.child,
        O = RU(J, G);
      if (!O) {
        var E = $.memoizedProps,
          P = Z.compare;
        if (((P = P !== null ? P : h6), P(E, X) && J.ref === Q.ref))
          return D0(J, Q, G);
      }
      Q.flags |= G5;
      var R = u4($, X);
      return (R.ref = Q.ref), (R.return = Q), (Q.child = R), R;
    }
    function hz(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Q.elementType;
        if (B.$$typeof === $1) {
          var U = B,
            Y = U._payload,
            K = U._init;
          try {
            B = K(Y);
          } catch ($) {
            B = null;
          }
          var z = B && B.propTypes;
          if (z) RZ(z, X, "prop", f1(B));
        }
      }
      if (J !== null) {
        var H = J.memoizedProps;
        if (h6(H, X) && J.ref === Q.ref && Q.type === J.type) {
          if (((_Z = !1), (Q.pendingProps = X = H), !RU(J, G)))
            return (Q.lanes = J.lanes), D0(J, Q, G);
          else if ((J.flags & wX) !== o) _Z = !0;
        }
      }
      return qU(J, Q, Z, X, G);
    }
    function fz(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.children,
        B = J !== null ? J.memoizedState : null;
      if (X.mode === "hidden" || XQ)
        if ((Q.mode & D1) === r) {
          var U = { baseLanes: x, cachePool: null, transitions: null };
          (Q.memoizedState = U), y9(Q, Z);
        } else if (!sQ(Z, dQ)) {
          var Y = null,
            K;
          if (B !== null) {
            var z = B.baseLanes;
            K = H1(z, Z);
          } else K = Z;
          Q.lanes = Q.childLanes = W8(dQ);
          var H = { baseLanes: K, cachePool: Y, transitions: null };
          return (Q.memoizedState = H), (Q.updateQueue = null), y9(Q, K), null;
        } else {
          var $ = { baseLanes: x, cachePool: null, transitions: null };
          Q.memoizedState = $;
          var O = B !== null ? B.baseLanes : Z;
          y9(Q, O);
        }
      else {
        var E;
        if (B !== null) (E = H1(B.baseLanes, Z)), (Q.memoizedState = null);
        else E = Z;
        y9(Q, E);
      }
      return RQ(J, Q, G, Z), Q.child;
    }
    function KD(J, Q, Z) {
      var X = Q.pendingProps;
      return RQ(J, Q, X, Z), Q.child;
    }
    function WD(J, Q, Z) {
      var X = Q.pendingProps.children;
      return RQ(J, Q, X, Z), Q.child;
    }
    function zD(J, Q, Z) {
      {
        Q.flags |= E1;
        {
          var X = Q.stateNode;
          (X.effectDuration = 0), (X.passiveEffectDuration = 0);
        }
      }
      var G = Q.pendingProps,
        B = G.children;
      return RQ(J, Q, B, Z), Q.child;
    }
    function uz(J, Q) {
      var Z = Q.ref;
      if ((J === null && Z !== null) || (J !== null && J.ref !== Z))
        (Q.flags |= T0), (Q.flags |= _X);
    }
    function qU(J, Q, Z, X, G) {
      if (Q.type !== Q.elementType) {
        var B = Z.propTypes;
        if (B) RZ(B, X, "prop", f1(Z));
      }
      var U;
      {
        var Y = A5(Q, Z, !0);
        U = E5(Q, Y);
      }
      var K, z;
      x5(Q, G), $6(Q);
      {
        if (
          ((O7.current = Q),
          GZ(!0),
          (K = b5(J, Q, Z, X, U, G)),
          (z = k5()),
          Q.mode & jJ)
        ) {
          hJ(!0);
          try {
            (K = b5(J, Q, Z, X, U, G)), (z = k5());
          } finally {
            hJ(!1);
          }
        }
        GZ(!1);
      }
      if ((U5(), J !== null && !_Z)) return Xz(J, Q, G), D0(J, Q, G);
      if (pJ() && z) aG(Q);
      return (Q.flags |= G5), RQ(J, Q, K, G), Q.child;
    }
    function dz(J, Q, Z, X, G) {
      {
        switch (NP(Q)) {
          case !1: {
            var { stateNode: B, type: U } = Q,
              Y = new U(Q.memoizedProps, B.context),
              K = Y.state;
            B.updater.enqueueSetState(B, K, null);
            break;
          }
          case !0: {
            (Q.flags |= C1), (Q.flags |= EQ);
            var z = new Error("Simulated error coming from DevTools"),
              H = R6(G);
            Q.lanes = H1(Q.lanes, H);
            var $ = KU(Q, b4(z, Q), H);
            WB(Q, $);
            break;
          }
        }
        if (Q.type !== Q.elementType) {
          var O = Z.propTypes;
          if (O) RZ(O, X, "prop", f1(Z));
        }
      }
      var E;
      if (sZ(Z)) (E = !0), d8(Q);
      else E = !1;
      x5(Q, G);
      var P = Q.stateNode,
        R;
      if (P === null) N9(J, Q), aW(Q, Z, X), EB(Q, Z, X, G), (R = !0);
      else if (J === null) R = h$(Q, Z, X, G);
      else R = f$(J, Q, Z, X, G);
      var g = OU(J, Q, Z, R, E, G);
      {
        var l = Q.stateNode;
        if (R && l.props !== X) {
          if (!k4)
            M(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              Y1(Q) || "a component",
            );
          k4 = !0;
        }
      }
      return g;
    }
    function OU(J, Q, Z, X, G, B) {
      uz(J, Q);
      var U = (Q.flags & C1) !== o;
      if (!X && !U) {
        if (G) AW(Q, Z, !1);
        return D0(J, Q, B);
      }
      var Y = Q.stateNode;
      O7.current = Q;
      var K;
      if (U && typeof Z.getDerivedStateFromError !== "function")
        (K = null), Cz();
      else {
        $6(Q);
        {
          if ((GZ(!0), (K = Y.render()), Q.mode & jJ)) {
            hJ(!0);
            try {
              Y.render();
            } finally {
              hJ(!1);
            }
          }
          GZ(!1);
        }
        U5();
      }
      if (((Q.flags |= G5), J !== null && U)) YD(J, Q, K, B);
      else RQ(J, Q, K, B);
      if (((Q.memoizedState = Y.state), G)) AW(Q, Z, !0);
      return Q.child;
    }
    function sz(J) {
      var Q = J.stateNode;
      if (Q.pendingContext)
        jW(J, Q.pendingContext, Q.pendingContext !== Q.context);
      else if (Q.context) jW(J, Q.context, !1);
      wB(J, Q.containerInfo);
    }
    function HD(J, Q, Z) {
      if ((sz(Q), J === null))
        throw new Error("Should have a current fiber. This is a bug in React.");
      var { pendingProps: X, memoizedState: G } = Q,
        B = G.element;
      uW(J, Q), Q9(Q, X, null, Z);
      var { memoizedState: U, stateNode: Y } = Q,
        K = U.element;
      if (G.isDehydrated) {
        var z = {
            element: K,
            isDehydrated: !1,
            cache: U.cache,
            pendingSuspenseBoundaries: U.pendingSuspenseBoundaries,
            transitions: U.transitions,
          },
          H = Q.updateQueue;
        if (((H.baseState = z), (Q.memoizedState = z), Q.flags & G0)) {
          var $ = b4(
            new Error(
              "There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.of a Suspense boundary, the entire root will switch to client rendering.",
            ),
            Q,
          );
          return mz(J, Q, K, Z, $);
        } else if (K !== B) {
          var O = b4(
            new Error(
              "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.hydrate. Switched the entire root to client rendering.",
            ),
            Q,
          );
          return mz(J, Q, K, Z, O);
        } else {
          $$(Q);
          var E = tW(Q, null, K, Z);
          Q.child = E;
          var P = E;
          while (P) (P.flags = (P.flags & ~DJ) | B0), (P = P.sibling);
        }
      } else {
        if ((F5(), K === B)) return D0(J, Q, Z);
        RQ(J, Q, K, Z);
      }
      return Q.child;
    }
    function mz(J, Q, Z, X, G) {
      return F5(), eG(G), (Q.flags |= G0), RQ(J, Q, Z, X), Q.child;
    }
    function MD(J, Q, Z) {
      if ((Jz(Q), J === null)) tG(Q);
      var { type: X, pendingProps: G } = Q,
        B = J !== null ? J.memoizedProps : null,
        U = G.children,
        Y = kG(X, G);
      if (Y) U = null;
      else if (B !== null && kG(X, B)) Q.flags |= V6;
      return uz(J, Q), RQ(J, Q, U, Z), Q.child;
    }
    function VD(J, Q) {
      if (J === null) tG(Q);
      return null;
    }
    function qD(J, Q, Z, X) {
      N9(J, Q);
      var G = Q.pendingProps,
        B = Z,
        U = B._payload,
        Y = B._init,
        K = Y(U);
      Q.type = K;
      var z = (Q.tag = jP(K)),
        H = IZ(K, G),
        $;
      switch (z) {
        case K1:
          return $U(Q, K), (Q.type = K = m5(K)), ($ = qU(null, Q, K, H, X)), $;
        case a:
          return (Q.type = K = aU(K)), ($ = dz(null, Q, K, H, X)), $;
        case J1:
          return (Q.type = K = pU(K)), ($ = gz(null, Q, K, H, X)), $;
        case VJ: {
          if (Q.type !== Q.elementType) {
            var O = K.propTypes;
            if (O) RZ(O, H, "prop", f1(K));
          }
          return ($ = Tz(null, Q, K, IZ(K.type, H), X)), $;
        }
      }
      var E = "";
      if (K !== null && typeof K === "object" && K.$$typeof === $1)
        E = " Did you wrap a component in React.lazy() more than once?";
      throw new Error(
        "Element type is invalid. Received a promise that resolves to: " +
          K +
          ". " +
          ("Lazy element type must resolve to a class or function." + E),
      );
    }
    function OD(J, Q, Z, X, G) {
      N9(J, Q), (Q.tag = a);
      var B;
      if (sZ(Z)) (B = !0), d8(Q);
      else B = !1;
      return x5(Q, G), aW(Q, Z, X), EB(Q, Z, X, G), OU(null, Q, Z, !0, B, G);
    }
    function $D(J, Q, Z, X) {
      N9(J, Q);
      var G = Q.pendingProps,
        B;
      {
        var U = A5(Q, Z, !1);
        B = E5(Q, U);
      }
      x5(Q, X);
      var Y, K;
      $6(Q);
      {
        if (Z.prototype && typeof Z.prototype.render === "function") {
          var z = f1(Z) || "Unknown";
          if (!WU[z])
            M(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.This is likely to cause errors. Change %s to extend React.Component instead.",
              z,
              z,
            ),
              (WU[z] = !0);
        }
        if (Q.mode & jJ) FZ.recordLegacyContextWarning(Q, null);
        GZ(!0),
          (O7.current = Q),
          (Y = b5(null, Q, Z, G, B, X)),
          (K = k5()),
          GZ(!1);
      }
      if (
        (U5(),
        (Q.flags |= G5),
        typeof Y === "object" &&
          Y !== null &&
          typeof Y.render === "function" &&
          Y.$$typeof === void 0)
      ) {
        var H = f1(Z) || "Unknown";
        if (!$7[H])
          M(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            H,
            H,
            H,
          ),
            ($7[H] = !0);
      }
      if (
        typeof Y === "object" &&
        Y !== null &&
        typeof Y.render === "function" &&
        Y.$$typeof === void 0
      ) {
        {
          var $ = f1(Z) || "Unknown";
          if (!$7[$])
            M(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              $,
              $,
              $,
            ),
              ($7[$] = !0);
        }
        (Q.tag = a), (Q.memoizedState = null), (Q.updateQueue = null);
        var O = !1;
        if (sZ(Z)) (O = !0), d8(Q);
        else O = !1;
        return (
          (Q.memoizedState =
            Y.state !== null && Y.state !== void 0 ? Y.state : null),
          KB(Q),
          iW(Q, Y),
          EB(Q, Z, G, X),
          OU(null, Q, Z, !0, O, X)
        );
      } else {
        if (((Q.tag = K1), Q.mode & jJ)) {
          hJ(!0);
          try {
            (Y = b5(null, Q, Z, G, B, X)), (K = k5());
          } finally {
            hJ(!1);
          }
        }
        if (pJ() && K) aG(Q);
        return RQ(null, Q, Y, X), $U(Q, Z), Q.child;
      }
    }
    function $U(J, Q) {
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
            X = k0();
          if (X) Z += "\n\nCheck the render method of `" + X + "`.";
          var G = X || "",
            B = J._debugSource;
          if (B) G = B.fileName + ":" + B.lineNumber;
          if (!MU[G])
            (MU[G] = !0),
              M(
                "Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",
                Z,
              );
        }
        if (typeof Q.getDerivedStateFromProps === "function") {
          var U = f1(Q) || "Unknown";
          if (!HU[U])
            M(
              "%s: Function components do not support getDerivedStateFromProps.",
              U,
            ),
              (HU[U] = !0);
        }
        if (typeof Q.contextType === "object" && Q.contextType !== null) {
          var Y = f1(Q) || "Unknown";
          if (!zU[Y])
            M("%s: Function components do not support contextType.", Y),
              (zU[Y] = !0);
        }
      }
    }
    var DU = { dehydrated: null, treeContext: null, retryLane: fJ };
    function jU(J) {
      return { baseLanes: J, cachePool: UD(), transitions: null };
    }
    function DD(J, Q) {
      var Z = null;
      return {
        baseLanes: H1(J.baseLanes, Q),
        cachePool: Z,
        transitions: J.transitions,
      };
    }
    function jD(J, Q, Z, X) {
      if (Q !== null) {
        var G = Q.memoizedState;
        if (G === null) return !1;
      }
      return CB(J, Y7);
    }
    function PD(J, Q) {
      return K8(J.childLanes, Q);
    }
    function yz(J, Q, Z) {
      var X = Q.pendingProps;
      if (bP(Q)) Q.flags |= C1;
      var G = xZ.current,
        B = !1,
        U = (Q.flags & C1) !== o;
      if (U || jD(G, J)) (B = !0), (Q.flags &= ~C1);
      else if (J === null || J.memoizedState !== null) G = m$(G, Zz);
      if (((G = S5(G)), r0(Q, G), J === null)) {
        tG(Q);
        var Y = Q.memoizedState;
        if (Y !== null) {
          var K = Y.dehydrated;
          if (K !== null) return FD(Q, K);
        }
        var { children: z, fallback: H } = X;
        if (B) {
          var $ = AD(Q, z, H, Z),
            O = Q.child;
          return (O.memoizedState = jU(Z)), (Q.memoizedState = DU), $;
        } else return PU(Q, z);
      } else {
        var E = J.memoizedState;
        if (E !== null) {
          var P = E.dehydrated;
          if (P !== null) return ID(J, Q, U, X, P, E, Z);
        }
        if (B) {
          var { fallback: R, children: g } = X,
            l = RD(J, Q, g, R, Z),
            d = Q.child,
            V1 = J.child.memoizedState;
          return (
            (d.memoizedState = V1 === null ? jU(Z) : DD(V1, Z)),
            (d.childLanes = PD(J, Z)),
            (Q.memoizedState = DU),
            l
          );
        } else {
          var q1 = X.children,
            D = ED(J, Q, q1, Z);
          return (Q.memoizedState = null), D;
        }
      }
    }
    function PU(J, Q, Z) {
      var X = J.mode,
        G = { mode: "visible", children: Q },
        B = AU(G, X);
      return (B.return = J), (J.child = B), B;
    }
    function AD(J, Q, Z, X) {
      var { mode: G, child: B } = J,
        U = { mode: "hidden", children: Q },
        Y,
        K;
      if ((G & D1) === r && B !== null) {
        if (((Y = B), (Y.childLanes = x), (Y.pendingProps = U), J.mode & k1))
          (Y.actualDuration = 0),
            (Y.actualStartTime = -1),
            (Y.selfBaseDuration = 0),
            (Y.treeBaseDuration = 0);
        K = G4(Z, G, X, null);
      } else (Y = AU(U, G)), (K = G4(Z, G, X, null));
      return (Y.return = J), (K.return = J), (Y.sibling = K), (J.child = Y), K;
    }
    function AU(J, Q, Z) {
      return cH(J, Q, x, null);
    }
    function lz(J, Q) {
      return u4(J, Q);
    }
    function ED(J, Q, Z, X) {
      var G = J.child,
        B = G.sibling,
        U = lz(G, { mode: "visible", children: Z });
      if ((Q.mode & D1) === r) U.lanes = X;
      if (((U.return = Q), (U.sibling = null), B !== null)) {
        var Y = Q.deletions;
        if (Y === null) (Q.deletions = [B]), (Q.flags |= H4);
        else Y.push(B);
      }
      return (Q.child = U), U;
    }
    function RD(J, Q, Z, X, G) {
      var B = Q.mode,
        U = J.child,
        Y = U.sibling,
        K = { mode: "hidden", children: Z },
        z;
      if ((B & D1) === r && Q.child !== U) {
        var H = Q.child;
        if (((z = H), (z.childLanes = x), (z.pendingProps = K), Q.mode & k1))
          (z.actualDuration = 0),
            (z.actualStartTime = -1),
            (z.selfBaseDuration = U.selfBaseDuration),
            (z.treeBaseDuration = U.treeBaseDuration);
        Q.deletions = null;
      } else (z = lz(U, K)), (z.subtreeFlags = U.subtreeFlags & Y0);
      var $;
      if (Y !== null) $ = u4(Y, X);
      else ($ = G4(X, B, G, null)), ($.flags |= DJ);
      return ($.return = Q), (z.return = Q), (z.sibling = $), (Q.child = z), $;
    }
    function v9(J, Q, Z, X) {
      if (X !== null) eG(X);
      w5(Q, J.child, null, Z);
      var G = Q.pendingProps,
        B = G.children,
        U = PU(Q, B);
      return (U.flags |= DJ), (Q.memoizedState = null), U;
    }
    function LD(J, Q, Z, X, G) {
      var B = Q.mode,
        U = { mode: "visible", children: Z },
        Y = AU(U, B),
        K = G4(X, B, G, null);
      if (
        ((K.flags |= DJ),
        (Y.return = Q),
        (K.return = Q),
        (Y.sibling = K),
        (Q.child = Y),
        (Q.mode & D1) !== r)
      )
        w5(Q, J.child, null, G);
      return K;
    }
    function FD(J, Q, Z) {
      if ((J.mode & D1) === r)
        M(
          "Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.",
        ),
          (J.lanes = W8(Z1));
      else if (fG(Q)) J.lanes = W8(j4);
      else J.lanes = W8(dQ);
      return null;
    }
    function ID(J, Q, Z, X, G, B, U) {
      if (!Z) {
        if ((q$(), (Q.mode & D1) === r)) return v9(J, Q, U, null);
        if (fG(G)) {
          var Y, K, z;
          {
            var H = v2(G);
            (Y = H.digest), (K = H.message), (z = H.stack);
          }
          var $;
          if (K) $ = new Error(K);
          else
            $ = new Error(
              "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.",
            );
          var O = UU($, Y, z);
          return v9(J, Q, U, O);
        }
        var E = sQ(U, J.childLanes);
        if (_Z || E) {
          var P = m9();
          if (P !== null) {
            var R = hV(P, U);
            if (R !== fJ && R !== B.retryLane) {
              B.retryLane = R;
              var g = o1;
              NQ(J, R), vJ(P, J, R, g);
            }
          }
          mU();
          var l = UU(
            new Error(
              "This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.",
            ),
          );
          return v9(J, Q, U, l);
        } else if (HW(G)) {
          (Q.flags |= C1), (Q.child = J.child);
          var d = QP.bind(null, J);
          return N2(G, d), null;
        } else {
          D$(Q, G, B.treeContext);
          var V1 = X.children,
            q1 = PU(Q, V1);
          return (q1.flags |= B0), q1;
        }
      } else if (Q.flags & G0) {
        Q.flags &= ~G0;
        var D = UU(
          new Error(
            "There was an error while hydrating this Suspense boundary. Switched to client rendering.Switched to client rendering.",
          ),
        );
        return v9(J, Q, U, D);
      } else if (Q.memoizedState !== null)
        return (Q.child = J.child), (Q.flags |= C1), null;
      else {
        var { children: F, fallback: j } = X,
          _ = LD(J, Q, F, j, U),
          h = Q.child;
        return (h.memoizedState = jU(U)), (Q.memoizedState = DU), _;
      }
    }
    function cz(J, Q, Z) {
      J.lanes = H1(J.lanes, Q);
      var X = J.alternate;
      if (X !== null) X.lanes = H1(X.lanes, Q);
      GB(J.return, Q, Z);
    }
    function xD(J, Q, Z) {
      var X = Q;
      while (X !== null) {
        if (X.tag === P1) {
          var G = X.memoizedState;
          if (G !== null) cz(X, Z, J);
        } else if (X.tag === EJ) cz(X, Z, J);
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
    function wD(J) {
      var Q = J,
        Z = null;
      while (Q !== null) {
        var X = Q.alternate;
        if (X !== null && K9(X) === null) Z = Q;
        Q = Q.sibling;
      }
      return Z;
    }
    function _D(J) {
      if (
        J !== void 0 &&
        J !== "forwards" &&
        J !== "backwards" &&
        J !== "together" &&
        !VU[J]
      )
        if (((VU[J] = !0), typeof J === "string"))
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
    function SD(J, Q) {
      if (J !== void 0 && !C9[J]) {
        if (J !== "collapsed" && J !== "hidden")
          (C9[J] = !0),
            M(
              '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
              J,
            );
        else if (Q !== "forwards" && Q !== "backwards")
          (C9[J] = !0),
            M(
              '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
              J,
            );
      }
    }
    function iz(J, Q) {
      {
        var Z = LJ(J),
          X = !Z && typeof tZ(J) === "function";
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
    function CD(J, Q) {
      if (
        (Q === "forwards" || Q === "backwards") &&
        J !== void 0 &&
        J !== null &&
        J !== !1
      )
        if (LJ(J)) {
          for (var Z = 0; Z < J.length; Z++) if (!iz(J[Z], Z)) return;
        } else {
          var X = tZ(J);
          if (typeof X === "function") {
            var G = X.call(J);
            if (G) {
              var B = G.next(),
                U = 0;
              for (; !B.done; B = G.next()) {
                if (!iz(B.value, U)) return;
                U++;
              }
            }
          } else
            M(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              Q,
            );
        }
    }
    function EU(J, Q, Z, X, G) {
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
    function az(J, Q, Z) {
      var X = Q.pendingProps,
        G = X.revealOrder,
        B = X.tail,
        U = X.children;
      _D(G), SD(B, G), CD(U, G), RQ(J, Q, U, Z);
      var Y = xZ.current,
        K = CB(Y, Y7);
      if (K) (Y = vB(Y, Y7)), (Q.flags |= C1);
      else {
        var z = J !== null && (J.flags & C1) !== o;
        if (z) xD(Q, Q.child, Z);
        Y = S5(Y);
      }
      if ((r0(Q, Y), (Q.mode & D1) === r)) Q.memoizedState = null;
      else
        switch (G) {
          case "forwards": {
            var H = wD(Q.child),
              $;
            if (H === null) ($ = Q.child), (Q.child = null);
            else ($ = H.sibling), (H.sibling = null);
            EU(Q, !1, $, H, B);
            break;
          }
          case "backwards": {
            var O = null,
              E = Q.child;
            Q.child = null;
            while (E !== null) {
              var P = E.alternate;
              if (P !== null && K9(P) === null) {
                Q.child = E;
                break;
              }
              var R = E.sibling;
              (E.sibling = O), (O = E), (E = R);
            }
            EU(Q, !0, O, null, B);
            break;
          }
          case "together": {
            EU(Q, !1, null, null, void 0);
            break;
          }
          default:
            Q.memoizedState = null;
        }
      return Q.child;
    }
    function vD(J, Q, Z) {
      wB(Q, Q.stateNode.containerInfo);
      var X = Q.pendingProps;
      if (J === null) Q.child = w5(Q, null, X, Z);
      else RQ(J, Q, X, Z);
      return Q.child;
    }
    var pz = !1;
    function ND(J, Q, Z) {
      var X = Q.type,
        G = X._context,
        B = Q.pendingProps,
        U = Q.memoizedProps,
        Y = B.value;
      {
        if (!("value" in B)) {
          if (!pz)
            (pz = !0),
              M(
                "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?",
              );
        }
        var K = Q.type.propTypes;
        if (K) RZ(K, B, "prop", "Context.Provider");
      }
      if ((gW(Q, G, Y), U !== null)) {
        var z = U.value;
        if (lQ(z, Y)) {
          if (U.children === B.children && !f8()) return D0(J, Q, Z);
        } else w$(Q, G, Z);
      }
      var H = B.children;
      return RQ(J, Q, H, Z), Q.child;
    }
    var oz = !1;
    function bD(J, Q, Z) {
      var X = Q.type;
      if (X._context === void 0) {
        if (X !== X.Consumer) {
          if (!oz)
            (oz = !0),
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
      x5(Q, Z);
      var U = PJ(X);
      $6(Q);
      var Y;
      return (
        (O7.current = Q),
        GZ(!0),
        (Y = B(U)),
        GZ(!1),
        U5(),
        (Q.flags |= G5),
        RQ(J, Q, Y, Z),
        Q.child
      );
    }
    function D7() {
      _Z = !0;
    }
    function N9(J, Q) {
      if ((Q.mode & D1) === r) {
        if (J !== null)
          (J.alternate = null), (Q.alternate = null), (Q.flags |= DJ);
      }
    }
    function D0(J, Q, Z) {
      if (J !== null) Q.dependencies = J.dependencies;
      if ((Cz(), S7(Q.lanes), !sQ(Z, Q.childLanes))) return null;
      return u$(J, Q), Q.child;
    }
    function kD(J, Q, Z) {
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
        if (B === null) (X.deletions = [J]), (X.flags |= H4);
        else B.push(J);
        return (Z.flags |= DJ), Z;
      }
    }
    function RU(J, Q) {
      var Z = J.lanes;
      if (sQ(Z, Q)) return !0;
      return !1;
    }
    function gD(J, Q, Z) {
      switch (Q.tag) {
        case m:
          sz(Q);
          var X = Q.stateNode;
          F5();
          break;
        case c:
          Jz(Q);
          break;
        case a: {
          var G = Q.type;
          if (sZ(G)) d8(Q);
          break;
        }
        case O1:
          wB(Q, Q.stateNode.containerInfo);
          break;
        case w1: {
          var B = Q.memoizedProps.value,
            U = Q.type._context;
          gW(Q, U, B);
          break;
        }
        case r1:
          {
            var Y = sQ(Z, Q.childLanes);
            if (Y) Q.flags |= E1;
            {
              var K = Q.stateNode;
              (K.effectDuration = 0), (K.passiveEffectDuration = 0);
            }
          }
          break;
        case P1: {
          var z = Q.memoizedState;
          if (z !== null) {
            if (z.dehydrated !== null)
              return r0(Q, S5(xZ.current)), (Q.flags |= C1), null;
            var H = Q.child,
              $ = H.childLanes;
            if (sQ(Z, $)) return yz(J, Q, Z);
            else {
              r0(Q, S5(xZ.current));
              var O = D0(J, Q, Z);
              if (O !== null) return O.sibling;
              else return null;
            }
          } else r0(Q, S5(xZ.current));
          break;
        }
        case EJ: {
          var E = (J.flags & C1) !== o,
            P = sQ(Z, Q.childLanes);
          if (E) {
            if (P) return az(J, Q, Z);
            Q.flags |= C1;
          }
          var R = Q.memoizedState;
          if (R !== null)
            (R.rendering = null), (R.tail = null), (R.lastEffect = null);
          if ((r0(Q, xZ.current), P)) break;
          else return null;
        }
        case Q1:
        case a1:
          return (Q.lanes = x), fz(J, Q, Z);
      }
      return D0(J, Q, Z);
    }
    function rz(J, Q, Z) {
      if (Q._debugNeedsRemount && J !== null)
        return kD(
          J,
          Q,
          eU(
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
        if (X !== G || f8() || Q.type !== J.type) _Z = !0;
        else {
          var B = RU(J, Z);
          if (!B && (Q.flags & C1) === o) return (_Z = !1), gD(J, Q, Z);
          if ((J.flags & wX) !== o) _Z = !0;
          else _Z = !1;
        }
      } else if (((_Z = !1), pJ() && K$(Q))) {
        var U = Q.index,
          Y = W$();
        LW(Q, Y, U);
      }
      switch (((Q.lanes = x), Q.tag)) {
        case UJ:
          return $D(J, Q, Q.type, Z);
        case VZ: {
          var K = Q.elementType;
          return qD(J, Q, K, Z);
        }
        case K1: {
          var { type: z, pendingProps: H } = Q,
            $ = Q.elementType === z ? H : IZ(z, H);
          return qU(J, Q, z, $, Z);
        }
        case a: {
          var { type: O, pendingProps: E } = Q,
            P = Q.elementType === O ? E : IZ(O, E);
          return dz(J, Q, O, P, Z);
        }
        case m:
          return HD(J, Q, Z);
        case c:
          return MD(J, Q, Z);
        case x1:
          return VD(J, Q);
        case P1:
          return yz(J, Q, Z);
        case O1:
          return vD(J, Q, Z);
        case J1: {
          var { type: R, pendingProps: g } = Q,
            l = Q.elementType === R ? g : IZ(R, g);
          return gz(J, Q, R, l, Z);
        }
        case oQ:
          return KD(J, Q, Z);
        case MZ:
          return WD(J, Q, Z);
        case r1:
          return zD(J, Q, Z);
        case w1:
          return ND(J, Q, Z);
        case dJ:
          return bD(J, Q, Z);
        case VJ: {
          var { type: d, pendingProps: V1 } = Q,
            q1 = IZ(d, V1);
          if (Q.type !== Q.elementType) {
            var D = d.propTypes;
            if (D) RZ(D, q1, "prop", f1(d));
          }
          return (q1 = IZ(d.type, q1)), Tz(J, Q, d, q1, Z);
        }
        case _1:
          return hz(J, Q, Q.type, Q.pendingProps, Z);
        case YJ: {
          var { type: F, pendingProps: j } = Q,
            _ = Q.elementType === F ? j : IZ(F, j);
          return OD(J, Q, F, _, Z);
        }
        case EJ:
          return az(J, Q, Z);
        case u1:
          break;
        case Q1:
          return fz(J, Q, Z);
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function g5(J) {
      J.flags |= E1;
    }
    function nz(J) {
      (J.flags |= T0), (J.flags |= _X);
    }
    var tz, LU, ez, JH;
    (tz = function (J, Q, Z, X) {
      var G = Q.child;
      while (G !== null) {
        if (G.tag === c || G.tag === x1) B2(J, G.stateNode);
        else if (G.tag === O1);
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
      (LU = function (J, Q) {}),
      (ez = function (J, Q, Z, X, G) {
        var B = J.memoizedProps;
        if (B === X) return;
        var U = Q.stateNode,
          Y = _B(),
          K = Y2(U, Z, B, X, G, Y);
        if (((Q.updateQueue = K), K)) g5(Q);
      }),
      (JH = function (J, Q, Z, X) {
        if (Z !== X) g5(Q);
      });
    function j7(J, Q) {
      if (pJ()) return;
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
    function rJ(J) {
      var Q = J.alternate !== null && J.alternate.child === J.child,
        Z = x,
        X = o;
      if (!Q) {
        if ((J.mode & k1) !== r) {
          var { actualDuration: G, selfBaseDuration: B, child: U } = J;
          while (U !== null)
            (Z = H1(Z, H1(U.lanes, U.childLanes))),
              (X |= U.subtreeFlags),
              (X |= U.flags),
              (G += U.actualDuration),
              (B += U.treeBaseDuration),
              (U = U.sibling);
          (J.actualDuration = G), (J.treeBaseDuration = B);
        } else {
          var Y = J.child;
          while (Y !== null)
            (Z = H1(Z, H1(Y.lanes, Y.childLanes))),
              (X |= Y.subtreeFlags),
              (X |= Y.flags),
              (Y.return = J),
              (Y = Y.sibling);
        }
        J.subtreeFlags |= X;
      } else {
        if ((J.mode & k1) !== r) {
          var { selfBaseDuration: K, child: z } = J;
          while (z !== null)
            (Z = H1(Z, H1(z.lanes, z.childLanes))),
              (X |= z.subtreeFlags & Y0),
              (X |= z.flags & Y0),
              (K += z.treeBaseDuration),
              (z = z.sibling);
          J.treeBaseDuration = K;
        } else {
          var H = J.child;
          while (H !== null)
            (Z = H1(Z, H1(H.lanes, H.childLanes))),
              (X |= H.subtreeFlags & Y0),
              (X |= H.flags & Y0),
              (H.return = J),
              (H = H.sibling);
        }
        J.subtreeFlags |= X;
      }
      return (J.childLanes = Z), Q;
    }
    function TD(J, Q, Z) {
      if (R$() && (Q.mode & D1) !== r && (Q.flags & C1) === o)
        return CW(Q), F5(), (Q.flags |= G0 | q6 | EQ), !1;
      var X = c8(Q);
      if (Z !== null && Z.dehydrated !== null)
        if (J === null) {
          if (!X)
            throw new Error(
              "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.",
            );
          if ((A$(Q), rJ(Q), (Q.mode & k1) !== r)) {
            var G = Z !== null;
            if (G) {
              var B = Q.child;
              if (B !== null) Q.treeBaseDuration -= B.treeBaseDuration;
            }
          }
          return !1;
        } else {
          if ((F5(), (Q.flags & C1) === o)) Q.memoizedState = null;
          if (((Q.flags |= E1), rJ(Q), (Q.mode & k1) !== r)) {
            var U = Z !== null;
            if (U) {
              var Y = Q.child;
              if (Y !== null) Q.treeBaseDuration -= Y.treeBaseDuration;
            }
          }
          return !1;
        }
      else return vW(), !0;
    }
    function QH(J, Q, Z) {
      var X = Q.pendingProps;
      switch ((pG(Q), Q.tag)) {
        case UJ:
        case VZ:
        case _1:
        case K1:
        case J1:
        case oQ:
        case MZ:
        case r1:
        case dJ:
        case VJ:
          return rJ(Q), null;
        case a: {
          var G = Q.type;
          if (sZ(G)) u8(Q);
          return rJ(Q), null;
        }
        case m: {
          var B = Q.stateNode;
          if ((_5(Q), lG(Q), bB(), B.pendingContext))
            (B.context = B.pendingContext), (B.pendingContext = null);
          if (J === null || J.child === null) {
            var U = c8(Q);
            if (U) g5(Q);
            else if (J !== null) {
              var Y = J.memoizedState;
              if (!Y.isDehydrated || (Q.flags & G0) !== o)
                (Q.flags |= M4), vW();
            }
          }
          return LU(J, Q), rJ(Q), null;
        }
        case c: {
          SB(Q);
          var K = eW(),
            z = Q.type;
          if (J !== null && Q.stateNode != null) {
            if ((ez(J, Q, z, X, K), J.ref !== Q.ref)) nz(Q);
          } else {
            if (!X) {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
                );
              return rJ(Q), null;
            }
            var H = _B(),
              $ = c8(Q);
            if ($) {
              if (j$(Q, K, H)) g5(Q);
            } else {
              var O = G2(z, X, K, H, Q);
              if ((tz(O, Q, !1, !1), (Q.stateNode = O), U2(O, z, X, K))) g5(Q);
            }
            if (Q.ref !== null) nz(Q);
          }
          return rJ(Q), null;
        }
        case x1: {
          var E = X;
          if (J && Q.stateNode != null) {
            var P = J.memoizedProps;
            JH(J, Q, P, E);
          } else {
            if (typeof E !== "string") {
              if (Q.stateNode === null)
                throw new Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.",
                );
            }
            var R = eW(),
              g = _B(),
              l = c8(Q);
            if (l) {
              if (P$(Q)) g5(Q);
            } else Q.stateNode = K2(E, R, g, Q);
          }
          return rJ(Q), null;
        }
        case P1: {
          C5(Q);
          var d = Q.memoizedState;
          if (
            J === null ||
            (J.memoizedState !== null && J.memoizedState.dehydrated !== null)
          ) {
            var V1 = TD(J, Q, d);
            if (!V1)
              if (Q.flags & EQ) return Q;
              else return null;
          }
          if ((Q.flags & C1) !== o) {
            if (((Q.lanes = Z), (Q.mode & k1) !== r)) BU(Q);
            return Q;
          }
          var q1 = d !== null,
            D = J !== null && J.memoizedState !== null;
          if (q1 !== D) {
            if (q1) {
              var F = Q.child;
              if (((F.flags |= V4), (Q.mode & D1) !== r)) {
                var j =
                  J === null &&
                  (Q.memoizedProps.unstable_avoidThisFallback !== !0 || !rQ);
                if (j || CB(xZ.current, Zz)) mj();
                else mU();
              }
            }
          }
          var _ = Q.updateQueue;
          if (_ !== null) Q.flags |= E1;
          if ((rJ(Q), (Q.mode & k1) !== r)) {
            if (q1) {
              var h = Q.child;
              if (h !== null) Q.treeBaseDuration -= h.treeBaseDuration;
            }
          }
          return null;
        }
        case O1:
          if ((_5(Q), LU(J, Q), J === null)) Q$(Q.stateNode.containerInfo);
          return rJ(Q), null;
        case w1:
          var b = Q.type._context;
          return XB(b, Q), rJ(Q), null;
        case YJ: {
          var t = Q.type;
          if (sZ(t)) u8(Q);
          return rJ(Q), null;
        }
        case EJ: {
          C5(Q);
          var G1 = Q.memoizedState;
          if (G1 === null) return rJ(Q), null;
          var T1 = (Q.flags & C1) !== o,
            F1 = G1.rendering;
          if (F1 === null)
            if (!T1) {
              var MJ = lj() && (J === null || (J.flags & C1) === o);
              if (!MJ) {
                var I1 = Q.child;
                while (I1 !== null) {
                  var zJ = K9(I1);
                  if (zJ !== null) {
                    (T1 = !0), (Q.flags |= C1), j7(G1, !1);
                    var MQ = zJ.updateQueue;
                    if (MQ !== null) (Q.updateQueue = MQ), (Q.flags |= E1);
                    return (
                      (Q.subtreeFlags = o),
                      d$(Q, Z),
                      r0(Q, vB(xZ.current, Y7)),
                      Q.child
                    );
                  }
                  I1 = I1.sibling;
                }
              }
              if (G1.tail !== null && TJ() > LH())
                (Q.flags |= C1), (T1 = !0), j7(G1, !1), (Q.lanes = tY);
            } else j7(G1, !1);
          else {
            if (!T1) {
              var QQ = K9(F1);
              if (QQ !== null) {
                (Q.flags |= C1), (T1 = !0);
                var aQ = QQ.updateQueue;
                if (aQ !== null) (Q.updateQueue = aQ), (Q.flags |= E1);
                if (
                  (j7(G1, !0),
                  G1.tail === null &&
                    G1.tailMode === "hidden" &&
                    !F1.alternate &&
                    !pJ())
                )
                  return rJ(Q), null;
              } else if (TJ() * 2 - G1.renderingStartTime > LH() && Z !== dQ)
                (Q.flags |= C1), (T1 = !0), j7(G1, !1), (Q.lanes = tY);
            }
            if (G1.isBackwards) (F1.sibling = Q.child), (Q.child = F1);
            else {
              var IQ = G1.last;
              if (IQ !== null) IQ.sibling = F1;
              else Q.child = F1;
              G1.last = F1;
            }
          }
          if (G1.tail !== null) {
            var xQ = G1.tail;
            (G1.rendering = xQ),
              (G1.tail = xQ.sibling),
              (G1.renderingStartTime = TJ()),
              (xQ.sibling = null);
            var VQ = xZ.current;
            if (T1) VQ = vB(VQ, Y7);
            else VQ = S5(VQ);
            return r0(Q, VQ), xQ;
          }
          return rJ(Q), null;
        }
        case u1:
          break;
        case Q1:
        case a1: {
          sU(Q);
          var R0 = Q.memoizedState,
            y5 = R0 !== null;
          if (J !== null) {
            var k7 = J.memoizedState,
              oZ = k7 !== null;
            if (oZ !== y5 && !XQ) Q.flags |= V4;
          }
          if (!y5 || (Q.mode & D1) === r) rJ(Q);
          else if (sQ(pZ, dQ)) {
            if ((rJ(Q), Q.subtreeFlags & (DJ | E1))) Q.flags |= V4;
          }
          return null;
        }
        case e:
          return null;
        case OQ:
          return null;
      }
      throw new Error(
        "Unknown unit of work tag (" +
          Q.tag +
          "). This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function hD(J, Q, Z) {
      switch ((pG(Q), Q.tag)) {
        case a: {
          var X = Q.type;
          if (sZ(X)) u8(Q);
          var G = Q.flags;
          if (G & EQ) {
            if (((Q.flags = (G & ~EQ) | C1), (Q.mode & k1) !== r)) BU(Q);
            return Q;
          }
          return null;
        }
        case m: {
          var B = Q.stateNode;
          _5(Q), lG(Q), bB();
          var U = Q.flags;
          if ((U & EQ) !== o && (U & C1) === o)
            return (Q.flags = (U & ~EQ) | C1), Q;
          return null;
        }
        case c:
          return SB(Q), null;
        case P1: {
          C5(Q);
          var Y = Q.memoizedState;
          if (Y !== null && Y.dehydrated !== null) {
            if (Q.alternate === null)
              throw new Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.",
              );
            F5();
          }
          var K = Q.flags;
          if (K & EQ) {
            if (((Q.flags = (K & ~EQ) | C1), (Q.mode & k1) !== r)) BU(Q);
            return Q;
          }
          return null;
        }
        case EJ:
          return C5(Q), null;
        case O1:
          return _5(Q), null;
        case w1:
          var z = Q.type._context;
          return XB(z, Q), null;
        case Q1:
        case a1:
          return sU(Q), null;
        case e:
          return null;
        default:
          return null;
      }
    }
    function ZH(J, Q, Z) {
      switch ((pG(Q), Q.tag)) {
        case a: {
          var X = Q.type.childContextTypes;
          if (X !== null && X !== void 0) u8(Q);
          break;
        }
        case m: {
          var G = Q.stateNode;
          _5(Q), lG(Q), bB();
          break;
        }
        case c: {
          SB(Q);
          break;
        }
        case O1:
          _5(Q);
          break;
        case P1:
          C5(Q);
          break;
        case EJ:
          C5(Q);
          break;
        case w1:
          var B = Q.type._context;
          XB(B, Q);
          break;
        case Q1:
        case a1:
          sU(Q);
          break;
      }
    }
    var XH = null;
    XH = new Set();
    var b9 = !1,
      nJ = !1,
      fD = typeof WeakSet === "function" ? WeakSet : Set,
      f = null,
      T5 = null,
      h5 = null;
    function uD(J) {
      FX(null, function () {
        throw J;
      }),
        IX();
    }
    var dD = function (J, Q) {
      if (
        ((Q.props = J.memoizedProps), (Q.state = J.memoizedState), J.mode & k1)
      )
        try {
          iZ(), Q.componentWillUnmount();
        } finally {
          cZ(J);
        }
      else Q.componentWillUnmount();
    };
    function GH(J, Q) {
      try {
        e0(IJ, J);
      } catch (Z) {
        c1(J, Q, Z);
      }
    }
    function FU(J, Q, Z) {
      try {
        dD(J, Z);
      } catch (X) {
        c1(J, Q, X);
      }
    }
    function sD(J, Q, Z) {
      try {
        Z.componentDidMount();
      } catch (X) {
        c1(J, Q, X);
      }
    }
    function BH(J, Q) {
      try {
        KH(J);
      } catch (Z) {
        c1(J, Q, Z);
      }
    }
    function f5(J, Q) {
      var Z = J.ref;
      if (Z !== null)
        if (typeof Z === "function") {
          var X;
          try {
            if (nQ && OZ && J.mode & k1)
              try {
                iZ(), (X = Z(null));
              } finally {
                cZ(J);
              }
            else X = Z(null);
          } catch (G) {
            c1(J, Q, G);
          }
          if (typeof X === "function")
            M(
              "Unexpected return value from a callback ref in %s. A callback ref should not return a function.",
              Y1(J),
            );
        } else Z.current = null;
    }
    function k9(J, Q, Z) {
      try {
        Z();
      } catch (X) {
        c1(J, Q, X);
      }
    }
    var UH = null,
      YH = !1;
    function mD(J, Q) {
      (UH = Z2(J.containerInfo)), (f = Q), yD();
      var Z = YH;
      return (YH = !1), (UH = null), Z;
    }
    function yD() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((J.subtreeFlags & CX) !== o && Q !== null) (Q.return = J), (f = Q);
        else lD();
      }
    }
    function lD() {
      while (f !== null) {
        var J = f;
        JJ(J);
        try {
          cD(J);
        } catch (Z) {
          c1(J, J.return, Z);
        }
        gJ();
        var Q = J.sibling;
        if (Q !== null) {
          (Q.return = J.return), (f = Q);
          return;
        }
        f = J.return;
      }
    }
    function cD(J) {
      var { alternate: Q, flags: Z } = J;
      if ((Z & M4) !== o) {
        switch ((JJ(J), J.tag)) {
          case K1:
          case J1:
          case _1:
            break;
          case a: {
            if (Q !== null) {
              var { memoizedProps: X, memoizedState: G } = Q,
                B = J.stateNode;
              if (J.type === J.elementType && !k4) {
                if (B.props !== J.memoizedProps)
                  M(
                    "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    Y1(J) || "instance",
                  );
                if (B.state !== J.memoizedState)
                  M(
                    "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                    Y1(J) || "instance",
                  );
              }
              var U = B.getSnapshotBeforeUpdate(
                J.elementType === J.type ? X : IZ(J.type, X),
                G,
              );
              {
                var Y = XH;
                if (U === void 0 && !Y.has(J.type))
                  Y.add(J.type),
                    M(
                      "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.must be returned. You have returned undefined.",
                      Y1(J),
                    );
              }
              B.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          }
          case m: {
            {
              var K = J.stateNode;
              w2(K.containerInfo);
            }
            break;
          }
          case c:
          case x1:
          case O1:
          case YJ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
        gJ();
      }
    }
    function SZ(J, Q, Z) {
      var X = Q.updateQueue,
        G = X !== null ? X.lastEffect : null;
      if (G !== null) {
        var B = G.next,
          U = B;
        do {
          if ((U.tag & J) === J) {
            var Y = U.destroy;
            if (((U.destroy = void 0), Y !== void 0)) {
              if ((J & oJ) !== bQ) KV(Q);
              else if ((J & IJ) !== bQ) aY(Q);
              if ((J & mZ) !== bQ) v7(!0);
              if ((k9(Q, Z, Y), (J & mZ) !== bQ)) v7(!1);
              if ((J & oJ) !== bQ) WV();
              else if ((J & IJ) !== bQ) pY();
            }
          }
          U = U.next;
        } while (U !== B);
      }
    }
    function e0(J, Q) {
      var Z = Q.updateQueue,
        X = Z !== null ? Z.lastEffect : null;
      if (X !== null) {
        var G = X.next,
          B = G;
        do {
          if ((B.tag & J) === J) {
            if ((J & oJ) !== bQ) UV(Q);
            else if ((J & IJ) !== bQ) zV(Q);
            var U = B.create;
            if ((J & mZ) !== bQ) v7(!0);
            if (((B.destroy = U()), (J & mZ) !== bQ)) v7(!1);
            if ((J & oJ) !== bQ) YV();
            else if ((J & IJ) !== bQ) HV();
            {
              var Y = B.destroy;
              if (Y !== void 0 && typeof Y !== "function") {
                var K = void 0;
                if ((B.tag & IJ) !== o) K = "useLayoutEffect";
                else if ((B.tag & mZ) !== o) K = "useInsertionEffect";
                else K = "useEffect";
                var z = void 0;
                if (Y === null)
                  z =
                    " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                else if (typeof Y.then === "function")
                  z =
                    "\n\nIt looks like you wrote " +
                    K +
                    "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" +
                    K +
                    "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                else z = " You returned: " + Y;
                M(
                  "%s must not return anything besides a function, which is used for clean-up.%s",
                  K,
                  z,
                );
              }
            }
          }
          B = B.next;
        } while (B !== G);
      }
    }
    function iD(J, Q) {
      if ((Q.flags & E1) !== o)
        switch (Q.tag) {
          case r1: {
            var Z = Q.stateNode.passiveEffectDuration,
              X = Q.memoizedProps,
              G = X.id,
              B = X.onPostCommit,
              U = _z(),
              Y = Q.alternate === null ? "mount" : "update";
            if (wz()) Y = "nested-update";
            if (typeof B === "function") B(G, Y, Z, U);
            var K = Q.return;
            J: while (K !== null) {
              switch (K.tag) {
                case m:
                  var z = K.stateNode;
                  z.passiveEffectDuration += Z;
                  break J;
                case r1:
                  var H = K.stateNode;
                  H.passiveEffectDuration += Z;
                  break J;
              }
              K = K.return;
            }
            break;
          }
        }
    }
    function aD(J, Q, Z, X) {
      if ((Z.flags & O6) !== o)
        switch (Z.tag) {
          case K1:
          case J1:
          case _1: {
            if (!nJ)
              if (Z.mode & k1)
                try {
                  iZ(), e0(IJ | FJ, Z);
                } finally {
                  cZ(Z);
                }
              else e0(IJ | FJ, Z);
            break;
          }
          case a: {
            var G = Z.stateNode;
            if (Z.flags & E1) {
              if (!nJ)
                if (Q === null) {
                  if (Z.type === Z.elementType && !k4) {
                    if (G.props !== Z.memoizedProps)
                      M(
                        "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        Y1(Z) || "instance",
                      );
                    if (G.state !== Z.memoizedState)
                      M(
                        "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        Y1(Z) || "instance",
                      );
                  }
                  if (Z.mode & k1)
                    try {
                      iZ(), G.componentDidMount();
                    } finally {
                      cZ(Z);
                    }
                  else G.componentDidMount();
                } else {
                  var B =
                      Z.elementType === Z.type
                        ? Q.memoizedProps
                        : IZ(Z.type, Q.memoizedProps),
                    U = Q.memoizedState;
                  if (Z.type === Z.elementType && !k4) {
                    if (G.props !== Z.memoizedProps)
                      M(
                        "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        Y1(Z) || "instance",
                      );
                    if (G.state !== Z.memoizedState)
                      M(
                        "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        Y1(Z) || "instance",
                      );
                  }
                  if (Z.mode & k1)
                    try {
                      iZ(),
                        G.componentDidUpdate(
                          B,
                          U,
                          G.__reactInternalSnapshotBeforeUpdate,
                        );
                    } finally {
                      cZ(Z);
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
              if (Z.type === Z.elementType && !k4) {
                if (G.props !== Z.memoizedProps)
                  M(
                    "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                    Y1(Z) || "instance",
                  );
                if (G.state !== Z.memoizedState)
                  M(
                    "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                    Y1(Z) || "instance",
                  );
              }
              sW(Z, Y, G);
            }
            break;
          }
          case m: {
            var K = Z.updateQueue;
            if (K !== null) {
              var z = null;
              if (Z.child !== null)
                switch (Z.child.tag) {
                  case c:
                    z = bG(Z.child.stateNode);
                    break;
                  case a:
                    z = Z.child.stateNode;
                    break;
                }
              sW(Z, K, z);
            }
            break;
          }
          case c: {
            var H = Z.stateNode;
            if (Q === null && Z.flags & E1) {
              var { type: $, memoizedProps: O } = Z;
              V2(H, $, O);
            }
            break;
          }
          case x1:
            break;
          case O1:
            break;
          case r1: {
            {
              var E = Z.memoizedProps,
                P = E.onCommit,
                R = E.onRender,
                g = Z.stateNode.effectDuration,
                l = _z(),
                d = Q === null ? "mount" : "update";
              if (wz()) d = "nested-update";
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
                oj(Z);
                var V1 = Z.return;
                J: while (V1 !== null) {
                  switch (V1.tag) {
                    case m:
                      var q1 = V1.stateNode;
                      q1.effectDuration += g;
                      break J;
                    case r1:
                      var D = V1.stateNode;
                      D.effectDuration += g;
                      break J;
                  }
                  V1 = V1.return;
                }
              }
            }
            break;
          }
          case P1: {
            Qj(J, Z);
            break;
          }
          case EJ:
          case YJ:
          case u1:
          case Q1:
          case a1:
          case OQ:
            break;
          default:
            throw new Error(
              "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.",
            );
        }
      if (!nJ) {
        if (Z.flags & T0) KH(Z);
      }
    }
    function pD(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          if (J.mode & k1)
            try {
              iZ(), GH(J, J.return);
            } finally {
              cZ(J);
            }
          else GH(J, J.return);
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentDidMount === "function") sD(J, J.return, Q);
          BH(J, J.return);
          break;
        }
        case c: {
          BH(J, J.return);
          break;
        }
      }
    }
    function oD(J, Q) {
      var Z = null;
      {
        var X = J;
        while (!0) {
          if (X.tag === c) {
            if (Z === null) {
              Z = X;
              try {
                var G = X.stateNode;
                if (Q) L2(G);
                else I2(X.stateNode, X.memoizedProps);
              } catch (U) {
                c1(J, J.return, U);
              }
            }
          } else if (X.tag === x1) {
            if (Z === null)
              try {
                var B = X.stateNode;
                if (Q) F2(B);
                else x2(B, X.memoizedProps);
              } catch (U) {
                c1(J, J.return, U);
              }
          } else if (
            (X.tag === Q1 || X.tag === a1) &&
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
    function KH(J) {
      var Q = J.ref;
      if (Q !== null) {
        var Z = J.stateNode,
          X;
        switch (J.tag) {
          case c:
            X = bG(Z);
            break;
          default:
            X = Z;
        }
        if (typeof Q === "function") {
          var G;
          if (J.mode & k1)
            try {
              iZ(), (G = Q(X));
            } finally {
              cZ(J);
            }
          else G = Q(X);
          if (typeof G === "function")
            M(
              "Unexpected return value from a callback ref in %s. A callback ref should not return a function.A callback ref should not return a function.",
              Y1(J),
            );
        } else {
          if (!Q.hasOwnProperty("current"))
            M(
              "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
              Y1(J),
            );
          Q.current = X;
        }
      }
    }
    function rD(J) {
      var Q = J.alternate;
      if (Q !== null) Q.return = null;
      J.return = null;
    }
    function WH(J) {
      var Q = J.alternate;
      if (Q !== null) (J.alternate = null), WH(Q);
      {
        if (
          ((J.child = null),
          (J.deletions = null),
          (J.sibling = null),
          J.tag === c)
        ) {
          var Z = J.stateNode;
          if (Z !== null) G$(Z);
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
    function nD(J) {
      var Q = J.return;
      while (Q !== null) {
        if (zH(Q)) return Q;
        Q = Q.return;
      }
      throw new Error(
        "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
      );
    }
    function zH(J) {
      return J.tag === c || J.tag === m || J.tag === O1;
    }
    function HH(J) {
      var Q = J;
      J: while (!0) {
        while (Q.sibling === null) {
          if (Q.return === null || zH(Q.return)) return null;
          Q = Q.return;
        }
        (Q.sibling.return = Q.return), (Q = Q.sibling);
        while (Q.tag !== c && Q.tag !== x1 && Q.tag !== bJ) {
          if (Q.flags & DJ) continue J;
          if (Q.child === null || Q.tag === O1) continue J;
          else (Q.child.return = Q), (Q = Q.child);
        }
        if (!(Q.flags & DJ)) return Q.stateNode;
      }
    }
    function tD(J) {
      var Q = nD(J);
      switch (Q.tag) {
        case c: {
          var Z = Q.stateNode;
          if (Q.flags & V6) zW(Z), (Q.flags &= ~V6);
          var X = HH(J);
          xU(J, X, Z);
          break;
        }
        case m:
        case O1: {
          var G = Q.stateNode.containerInfo,
            B = HH(J);
          IU(J, B, G);
          break;
        }
        default:
          throw new Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.",
          );
      }
    }
    function IU(J, Q, Z) {
      var X = J.tag,
        G = X === c || X === x1;
      if (G) {
        var B = J.stateNode;
        if (Q) P2(Z, B, Q);
        else D2(Z, B);
      } else if (X === O1);
      else {
        var U = J.child;
        if (U !== null) {
          IU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) IU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    function xU(J, Q, Z) {
      var X = J.tag,
        G = X === c || X === x1;
      if (G) {
        var B = J.stateNode;
        if (Q) j2(Z, B, Q);
        else $2(Z, B);
      } else if (X === O1);
      else {
        var U = J.child;
        if (U !== null) {
          xU(U, Q, Z);
          var Y = U.sibling;
          while (Y !== null) xU(Y, Q, Z), (Y = Y.sibling);
        }
      }
    }
    var tJ = null,
      CZ = !1;
    function eD(J, Q, Z) {
      {
        var X = Q;
        J: while (X !== null) {
          switch (X.tag) {
            case c: {
              (tJ = X.stateNode), (CZ = !1);
              break J;
            }
            case m: {
              (tJ = X.stateNode.containerInfo), (CZ = !0);
              break J;
            }
            case O1: {
              (tJ = X.stateNode.containerInfo), (CZ = !0);
              break J;
            }
          }
          X = X.return;
        }
        if (tJ === null)
          throw new Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.",
          );
        MH(J, Q, Z), (tJ = null), (CZ = !1);
      }
      rD(Z);
    }
    function J4(J, Q, Z) {
      var X = Z.child;
      while (X !== null) MH(J, Q, X), (X = X.sibling);
    }
    function MH(J, Q, Z) {
      switch ((ZV(Z), Z.tag)) {
        case c:
          if (!nJ) f5(Z, Q);
        case x1: {
          {
            var X = tJ,
              G = CZ;
            if (((tJ = null), J4(J, Q, Z), (tJ = X), (CZ = G), tJ !== null))
              if (CZ) E2(tJ, Z.stateNode);
              else A2(tJ, Z.stateNode);
          }
          return;
        }
        case bJ: {
          if (tJ !== null)
            if (CZ) R2(tJ, Z.stateNode);
            else hG(tJ, Z.stateNode);
          return;
        }
        case O1: {
          {
            var B = tJ,
              U = CZ;
            (tJ = Z.stateNode.containerInfo),
              (CZ = !0),
              J4(J, Q, Z),
              (tJ = B),
              (CZ = U);
          }
          return;
        }
        case K1:
        case J1:
        case VJ:
        case _1: {
          if (!nJ) {
            var Y = Z.updateQueue;
            if (Y !== null) {
              var K = Y.lastEffect;
              if (K !== null) {
                var z = K.next,
                  H = z;
                do {
                  var $ = H,
                    O = $.destroy,
                    E = $.tag;
                  if (O !== void 0) {
                    if ((E & mZ) !== bQ) k9(Z, Q, O);
                    else if ((E & IJ) !== bQ) {
                      if ((aY(Z), Z.mode & k1)) iZ(), k9(Z, Q, O), cZ(Z);
                      else k9(Z, Q, O);
                      pY();
                    }
                  }
                  H = H.next;
                } while (H !== z);
              }
            }
          }
          J4(J, Q, Z);
          return;
        }
        case a: {
          if (!nJ) {
            f5(Z, Q);
            var P = Z.stateNode;
            if (typeof P.componentWillUnmount === "function") FU(Z, Q, P);
          }
          J4(J, Q, Z);
          return;
        }
        case u1: {
          J4(J, Q, Z);
          return;
        }
        case Q1: {
          if (Z.mode & D1) {
            var R = nJ;
            (nJ = R || Z.memoizedState !== null), J4(J, Q, Z), (nJ = R);
          } else J4(J, Q, Z);
          break;
        }
        default: {
          J4(J, Q, Z);
          return;
        }
      }
    }
    function Jj(J) {
      var Q = J.memoizedState;
    }
    function Qj(J, Q) {
      var Z = Q.memoizedState;
      if (Z === null) {
        var X = Q.alternate;
        if (X !== null) {
          var G = X.memoizedState;
          if (G !== null) {
            var B = G.dehydrated;
            if (B !== null) s2(B);
          }
        }
      }
    }
    function VH(J) {
      var Q = J.updateQueue;
      if (Q !== null) {
        J.updateQueue = null;
        var Z = J.stateNode;
        if (Z === null) Z = J.stateNode = new fD();
        Q.forEach(function (X) {
          var G = ZP.bind(null, J, X);
          if (!Z.has(X)) {
            if ((Z.add(X), AZ))
              if (T5 !== null && h5 !== null) C7(h5, T5);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React.",
                );
            X.then(G, G);
          }
        });
      }
    }
    function Zj(J, Q, Z) {
      (T5 = Z), (h5 = J), JJ(Q), qH(Q, J), JJ(Q), (T5 = null), (h5 = null);
    }
    function vZ(J, Q, Z) {
      var X = Q.deletions;
      if (X !== null)
        for (var G = 0; G < X.length; G++) {
          var B = X[G];
          try {
            eD(J, Q, B);
          } catch (K) {
            c1(B, Q, K);
          }
        }
      var U = UX();
      if (Q.subtreeFlags & vX) {
        var Y = Q.child;
        while (Y !== null) JJ(Y), qH(Y, J), (Y = Y.sibling);
      }
      JJ(U);
    }
    function qH(J, Q, Z) {
      var { alternate: X, flags: G } = J;
      switch (J.tag) {
        case K1:
        case J1:
        case VJ:
        case _1: {
          if ((vZ(Q, J), aZ(J), G & E1)) {
            try {
              SZ(mZ | FJ, J, J.return), e0(mZ | FJ, J);
            } catch (t) {
              c1(J, J.return, t);
            }
            if (J.mode & k1) {
              try {
                iZ(), SZ(IJ | FJ, J, J.return);
              } catch (t) {
                c1(J, J.return, t);
              }
              cZ(J);
            } else
              try {
                SZ(IJ | FJ, J, J.return);
              } catch (t) {
                c1(J, J.return, t);
              }
          }
          return;
        }
        case a: {
          if ((vZ(Q, J), aZ(J), G & T0)) {
            if (X !== null) f5(X, X.return);
          }
          return;
        }
        case c: {
          if ((vZ(Q, J), aZ(J), G & T0)) {
            if (X !== null) f5(X, X.return);
          }
          {
            if (J.flags & V6) {
              var B = J.stateNode;
              try {
                zW(B);
              } catch (t) {
                c1(J, J.return, t);
              }
            }
            if (G & E1) {
              var U = J.stateNode;
              if (U != null) {
                var Y = J.memoizedProps,
                  K = X !== null ? X.memoizedProps : Y,
                  z = J.type,
                  H = J.updateQueue;
                if (((J.updateQueue = null), H !== null))
                  try {
                    q2(U, H, z, K, Y, J);
                  } catch (t) {
                    c1(J, J.return, t);
                  }
              }
            }
          }
          return;
        }
        case x1: {
          if ((vZ(Q, J), aZ(J), G & E1)) {
            if (J.stateNode === null)
              throw new Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.caused by a bug in React. Please file an issue.",
              );
            var { stateNode: $, memoizedProps: O } = J,
              E = X !== null ? X.memoizedProps : O;
            try {
              O2($, E, O);
            } catch (t) {
              c1(J, J.return, t);
            }
          }
          return;
        }
        case m: {
          if ((vZ(Q, J), aZ(J), G & E1)) {
            if (X !== null) {
              var P = X.memoizedState;
              if (P.isDehydrated)
                try {
                  d2(Q.containerInfo);
                } catch (t) {
                  c1(J, J.return, t);
                }
            }
          }
          return;
        }
        case O1: {
          vZ(Q, J), aZ(J);
          return;
        }
        case P1: {
          vZ(Q, J), aZ(J);
          var R = J.child;
          if (R.flags & V4) {
            var { stateNode: g, memoizedState: l } = R,
              d = l !== null;
            if (((g.isHidden = d), d)) {
              var V1 =
                R.alternate !== null && R.alternate.memoizedState !== null;
              if (!V1) sj();
            }
          }
          if (G & E1) {
            try {
              Jj(J);
            } catch (t) {
              c1(J, J.return, t);
            }
            VH(J);
          }
          return;
        }
        case Q1: {
          var q1 = X !== null && X.memoizedState !== null;
          if (J.mode & D1) {
            var D = nJ;
            (nJ = D || q1), vZ(Q, J), (nJ = D);
          } else vZ(Q, J);
          if ((aZ(J), G & V4)) {
            var { stateNode: F, memoizedState: j } = J,
              _ = j !== null,
              h = J;
            if (((F.isHidden = _), _)) {
              if (!q1) {
                if ((h.mode & D1) !== r) {
                  f = h;
                  var b = h.child;
                  while (b !== null) (f = b), Gj(b), (b = b.sibling);
                }
              }
            }
            oD(h, _);
          }
          return;
        }
        case EJ: {
          if ((vZ(Q, J), aZ(J), G & E1)) VH(J);
          return;
        }
        case u1:
          return;
        default: {
          vZ(Q, J), aZ(J);
          return;
        }
      }
    }
    function aZ(J) {
      var Q = J.flags;
      if (Q & DJ) {
        try {
          tD(J);
        } catch (Z) {
          c1(J, J.return, Z);
        }
        J.flags &= ~DJ;
      }
      if (Q & B0) J.flags &= ~B0;
    }
    function Xj(J, Q, Z) {
      (T5 = Z), (h5 = Q), (f = J), OH(J, Q, Z), (T5 = null), (h5 = null);
    }
    function OH(J, Q, Z) {
      var X = (J.mode & D1) !== r;
      while (f !== null) {
        var G = f,
          B = G.child;
        if (G.tag === Q1 && X) {
          var U = G.memoizedState !== null,
            Y = U || b9;
          if (Y) {
            wU(J, Q, Z);
            continue;
          } else {
            var K = G.alternate,
              z = K !== null && K.memoizedState !== null,
              H = z || nJ,
              $ = b9,
              O = nJ;
            if (((b9 = Y), (nJ = H), nJ && !O)) (f = G), Bj(G);
            var E = B;
            while (E !== null) (f = E), OH(E, Q, Z), (E = E.sibling);
            (f = G), (b9 = $), (nJ = O), wU(J, Q, Z);
            continue;
          }
        }
        if ((G.subtreeFlags & O6) !== o && B !== null) (B.return = G), (f = B);
        else wU(J, Q, Z);
      }
    }
    function wU(J, Q, Z) {
      while (f !== null) {
        var X = f;
        if ((X.flags & O6) !== o) {
          var G = X.alternate;
          JJ(X);
          try {
            aD(Q, G, X, Z);
          } catch (U) {
            c1(X, X.return, U);
          }
          gJ();
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
    function Gj(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        switch (Q.tag) {
          case K1:
          case J1:
          case VJ:
          case _1: {
            if (Q.mode & k1)
              try {
                iZ(), SZ(IJ, Q, Q.return);
              } finally {
                cZ(Q);
              }
            else SZ(IJ, Q, Q.return);
            break;
          }
          case a: {
            f5(Q, Q.return);
            var X = Q.stateNode;
            if (typeof X.componentWillUnmount === "function")
              FU(Q, Q.return, X);
            break;
          }
          case c: {
            f5(Q, Q.return);
            break;
          }
          case Q1: {
            var G = Q.memoizedState !== null;
            if (G) {
              $H(J);
              continue;
            }
            break;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else $H(J);
      }
    }
    function $H(J) {
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
    function Bj(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.child;
        if (Q.tag === Q1) {
          var X = Q.memoizedState !== null;
          if (X) {
            DH(J);
            continue;
          }
        }
        if (Z !== null) (Z.return = Q), (f = Z);
        else DH(J);
      }
    }
    function DH(J) {
      while (f !== null) {
        var Q = f;
        JJ(Q);
        try {
          pD(Q);
        } catch (X) {
          c1(Q, Q.return, X);
        }
        if ((gJ(), Q === J)) {
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
    function Uj(J, Q, Z, X) {
      (f = Q), Yj(Q, J, Z, X);
    }
    function Yj(J, Q, Z, X) {
      while (f !== null) {
        var G = f,
          B = G.child;
        if ((G.subtreeFlags & B5) !== o && B !== null) (B.return = G), (f = B);
        else Kj(J, Q, Z, X);
      }
    }
    function Kj(J, Q, Z, X) {
      while (f !== null) {
        var G = f;
        if ((G.flags & PZ) !== o) {
          JJ(G);
          try {
            Wj(Q, G, Z, X);
          } catch (U) {
            c1(G, G.return, U);
          }
          gJ();
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
    function Wj(J, Q, Z, X) {
      switch (Q.tag) {
        case K1:
        case J1:
        case _1: {
          if (Q.mode & k1) {
            GU();
            try {
              e0(oJ | FJ, Q);
            } finally {
              XU(Q);
            }
          } else e0(oJ | FJ, Q);
          break;
        }
      }
    }
    function zj(J) {
      (f = J), Hj();
    }
    function Hj() {
      while (f !== null) {
        var J = f,
          Q = J.child;
        if ((f.flags & H4) !== o) {
          var Z = J.deletions;
          if (Z !== null) {
            for (var X = 0; X < Z.length; X++) {
              var G = Z[X];
              (f = G), qj(G, J);
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
        if ((J.subtreeFlags & B5) !== o && Q !== null) (Q.return = J), (f = Q);
        else Mj();
      }
    }
    function Mj() {
      while (f !== null) {
        var J = f;
        if ((J.flags & PZ) !== o) JJ(J), Vj(J), gJ();
        var Q = J.sibling;
        if (Q !== null) {
          (Q.return = J.return), (f = Q);
          return;
        }
        f = J.return;
      }
    }
    function Vj(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          if (J.mode & k1) GU(), SZ(oJ | FJ, J, J.return), XU(J);
          else SZ(oJ | FJ, J, J.return);
          break;
        }
      }
    }
    function qj(J, Q) {
      while (f !== null) {
        var Z = f;
        JJ(Z), $j(Z, Q), gJ();
        var X = Z.child;
        if (X !== null) (X.return = Z), (f = X);
        else Oj(J);
      }
    }
    function Oj(J) {
      while (f !== null) {
        var Q = f,
          Z = Q.sibling,
          X = Q.return;
        if ((WH(Q), Q === J)) {
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
    function $j(J, Q) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          if (J.mode & k1) GU(), SZ(oJ, J, Q), XU(J);
          else SZ(oJ, J, Q);
          break;
        }
      }
    }
    function Dj(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          try {
            e0(IJ | FJ, J);
          } catch (Z) {
            c1(J, J.return, Z);
          }
          break;
        }
        case a: {
          var Q = J.stateNode;
          try {
            Q.componentDidMount();
          } catch (Z) {
            c1(J, J.return, Z);
          }
          break;
        }
      }
    }
    function jj(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          try {
            e0(oJ | FJ, J);
          } catch (Q) {
            c1(J, J.return, Q);
          }
          break;
        }
      }
    }
    function Pj(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1: {
          try {
            SZ(IJ | FJ, J, J.return);
          } catch (Z) {
            c1(J, J.return, Z);
          }
          break;
        }
        case a: {
          var Q = J.stateNode;
          if (typeof Q.componentWillUnmount === "function") FU(J, J.return, Q);
          break;
        }
      }
    }
    function Aj(J) {
      switch (J.tag) {
        case K1:
        case J1:
        case _1:
          try {
            SZ(oJ | FJ, J, J.return);
          } catch (Q) {
            c1(J, J.return, Q);
          }
      }
    }
    var Ej = 0,
      Rj = 1,
      Lj = 2,
      Fj = 3,
      Ij = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var P7 = Symbol.for;
      (Ej = P7("selector.component")),
        (Rj = P7("selector.has_pseudo_class")),
        (Lj = P7("selector.role")),
        (Fj = P7("selector.test_id")),
        (Ij = P7("selector.text"));
    }
    var xj = [];
    function wj() {
      xj.forEach(function (J) {
        return J();
      });
    }
    var _j = L1.ReactCurrentActQueue;
    function Sj(J) {
      {
        var Q =
            typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
              ? IS_REACT_ACT_ENVIRONMENT
              : void 0,
          Z = typeof jest !== "undefined";
        return Z && Q !== !1;
      }
    }
    function jH() {
      {
        var J =
          typeof IS_REACT_ACT_ENVIRONMENT !== "undefined"
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0;
        if (!J && _j.current !== null)
          M(
            "The current testing environment is not configured to support act(...)",
          );
        return J;
      }
    }
    var Cj = Math.ceil,
      _U = L1.ReactCurrentDispatcher,
      SU = L1.ReactCurrentOwner,
      eJ = L1.ReactCurrentBatchConfig,
      NZ = L1.ReactCurrentActQueue,
      _J = 0,
      PH = 1,
      JQ = 2,
      zZ = 4,
      j0 = 0,
      A7 = 1,
      g4 = 2,
      g9 = 3,
      E7 = 4,
      AH = 5,
      CU = 6,
      j1 = _J,
      LQ = null,
      XJ = null,
      SJ = x,
      pZ = x,
      vU = l0(x),
      CJ = j0,
      R7 = null,
      NU = x,
      T9 = x,
      L7 = x,
      h9 = x,
      F7 = null,
      kQ = null,
      bU = 0,
      EH = 500,
      RH = Infinity,
      vj = 500,
      P0 = null;
    function I7() {
      RH = TJ() + vj;
    }
    function LH() {
      return RH;
    }
    var f9 = !1,
      kU = null,
      u5 = null,
      T4 = !1,
      Q4 = null,
      x7 = x,
      gU = [],
      TU = null,
      Nj = 50,
      w7 = 0,
      hU = null,
      fU = !1,
      u9 = !1,
      bj = 50,
      d5 = 0,
      d9 = null,
      _7 = o1,
      s9 = x,
      FH = !1;
    function m9() {
      return LQ;
    }
    function FQ() {
      if ((j1 & (JQ | zZ)) !== _J) return TJ();
      if (_7 !== o1) return _7;
      return (_7 = TJ()), _7;
    }
    function Z4(J) {
      var Q = J.mode;
      if ((Q & D1) === r) return Z1;
      else if ((j1 & JQ) !== _J && SJ !== x) return R6(SJ);
      var Z = I$() !== F$;
      if (Z) {
        if (eJ.transition !== null) {
          var X = eJ.transition;
          if (!X._updatedFibers) X._updatedFibers = new Set();
          X._updatedFibers.add(J);
        }
        if (s9 === fJ) s9 = ZK();
        return s9;
      }
      var G = EZ();
      if (G !== fJ) return G;
      var B = W2();
      return B;
    }
    function kj(J) {
      var Q = J.mode;
      if ((Q & D1) === r) return Z1;
      return bV();
    }
    function vJ(J, Q, Z, X) {
      if ((GP(), FH)) M("useInsertionEffect must not schedule updates.");
      if (fU) u9 = !0;
      if ((L6(J, Z, X), (j1 & JQ) !== x && J === LQ)) YP(Q);
      else {
        if (AZ) BK(J, Q, Z);
        if ((KP(Q), J === LQ)) {
          if ((j1 & JQ) === _J) L7 = H1(L7, Z);
          if (CJ === E7) X4(J, SJ);
        }
        if (
          (gQ(J, X),
          Z === Z1 && j1 === _J && (Q.mode & D1) === r && !NZ.isBatchingLegacy)
        )
          I7(), RW();
      }
    }
    function gj(J, Q, Z) {
      var X = J.current;
      (X.lanes = Q), L6(J, Q, Z), gQ(J, Z);
    }
    function Tj(J) {
      return (j1 & JQ) !== _J;
    }
    function gQ(J, Q) {
      var Z = J.callbackNode;
      wV(J, Q);
      var X = U8(J, J === LQ ? SJ : x);
      if (X === x) {
        if (Z !== null) dH(Z);
        (J.callbackNode = null), (J.callbackPriority = fJ);
        return;
      }
      var G = A4(X),
        B = J.callbackPriority;
      if (B === G && !(NZ.current !== null && Z !== cU)) {
        if (Z == null && B !== Z1)
          M(
            "Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.",
          );
        return;
      }
      if (Z != null) dH(Z);
      var U;
      if (G === Z1) {
        if (J.tag === c0) {
          if (NZ.isBatchingLegacy !== null) NZ.didScheduleLegacyUpdate = !0;
          Y$(wH.bind(null, J));
        } else EW(wH.bind(null, J));
        if (NZ.current !== null) NZ.current.push(i0);
        else
          H2(function () {
            if ((j1 & (JQ | zZ)) === _J) i0();
          });
        U = null;
      } else {
        var Y;
        switch (KK(X)) {
          case mQ:
            Y = Z8;
            break;
          case W0:
            Y = NX;
            break;
          case z0:
            Y = $4;
            break;
          case z8:
            Y = bX;
            break;
          default:
            Y = $4;
            break;
        }
        U = iU(Y, IH.bind(null, J));
      }
      (J.callbackPriority = G), (J.callbackNode = U);
    }
    function IH(J, Q) {
      if ((e$(), (_7 = o1), (s9 = x), (j1 & (JQ | zZ)) !== _J))
        throw new Error("Should not already be working.");
      var Z = J.callbackNode,
        X = E0();
      if (X) {
        if (J.callbackNode !== Z) return null;
      }
      var G = U8(J, J === LQ ? SJ : x);
      if (G === x) return null;
      var B = !Y8(J, G) && !NV(J, G) && !Q,
        U = B ? ij(J, G) : l9(J, G);
      if (U !== j0) {
        if (U === g4) {
          var Y = QG(J);
          if (Y !== x) (G = Y), (U = uU(J, Y));
        }
        if (U === A7) {
          var K = R7;
          throw (h4(J, x), X4(J, G), gQ(J, TJ()), K);
        }
        if (U === CU) X4(J, G);
        else {
          var z = !Y8(J, G),
            H = J.current.alternate;
          if (z && !fj(H)) {
            if (((U = l9(J, G)), U === g4)) {
              var $ = QG(J);
              if ($ !== x) (G = $), (U = uU(J, $));
            }
            if (U === A7) {
              var O = R7;
              throw (h4(J, x), X4(J, G), gQ(J, TJ()), O);
            }
          }
          (J.finishedWork = H), (J.finishedLanes = G), hj(J, U, G);
        }
      }
      if ((gQ(J, TJ()), J.callbackNode === Z)) return IH.bind(null, J);
      return null;
    }
    function uU(J, Q) {
      var Z = F7;
      if (H8(J)) {
        var X = h4(J, Q);
        (X.flags |= G0), J$(J.containerInfo);
      }
      var G = l9(J, Q);
      if (G !== g4) {
        var B = kQ;
        if (((kQ = Z), B !== null)) xH(B);
      }
      return G;
    }
    function xH(J) {
      if (kQ === null) kQ = J;
      else kQ.push.apply(kQ, J);
    }
    function hj(J, Q, Z) {
      switch (Q) {
        case j0:
        case A7:
          throw new Error("Root did not complete. This is a bug in React.");
        case g4: {
          f4(J, kQ, P0);
          break;
        }
        case g9: {
          if ((X4(J, Z), JK(Z) && !sH())) {
            var X = bU + EH - TJ();
            if (X > 10) {
              var G = U8(J, x);
              if (G !== x) break;
              var B = J.suspendedLanes;
              if (!z5(B, Z)) {
                var U = FQ();
                GK(J, B);
                break;
              }
              J.timeoutHandle = gG(f4.bind(null, J, kQ, P0), X);
              break;
            }
          }
          f4(J, kQ, P0);
          break;
        }
        case E7: {
          if ((X4(J, Z), vV(Z))) break;
          if (!sH()) {
            var Y = IV(J, Z),
              K = Y,
              z = TJ() - K,
              H = XP(z) - z;
            if (H > 10) {
              J.timeoutHandle = gG(f4.bind(null, J, kQ, P0), H);
              break;
            }
          }
          f4(J, kQ, P0);
          break;
        }
        case AH: {
          f4(J, kQ, P0);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function fj(J) {
      var Q = J;
      while (!0) {
        if (Q.flags & J8) {
          var Z = Q.updateQueue;
          if (Z !== null) {
            var X = Z.stores;
            if (X !== null)
              for (var G = 0; G < X.length; G++) {
                var B = X[G],
                  U = B.getSnapshot,
                  Y = B.value;
                try {
                  if (!lQ(U(), Y)) return !1;
                } catch (z) {
                  return !1;
                }
              }
          }
        }
        var K = Q.child;
        if (Q.subtreeFlags & J8 && K !== null) {
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
    function X4(J, Q) {
      (Q = K8(Q, h9)), (Q = K8(Q, L7)), gV(J, Q);
    }
    function wH(J) {
      if ((JD(), (j1 & (JQ | zZ)) !== _J))
        throw new Error("Should not already be working.");
      E0();
      var Q = U8(J, x);
      if (!sQ(Q, Z1)) return gQ(J, TJ()), null;
      var Z = l9(J, Q);
      if (J.tag !== c0 && Z === g4) {
        var X = QG(J);
        if (X !== x) (Q = X), (Z = uU(J, X));
      }
      if (Z === A7) {
        var G = R7;
        throw (h4(J, x), X4(J, Q), gQ(J, TJ()), G);
      }
      if (Z === CU)
        throw new Error("Root did not complete. This is a bug in React.");
      var B = J.current.alternate;
      return (
        (J.finishedWork = B),
        (J.finishedLanes = Q),
        f4(J, kQ, P0),
        gQ(J, TJ()),
        null
      );
    }
    function uj(J, Q) {
      if (Q !== x) {
        if ((BG(J, H1(Q, Z1)), gQ(J, TJ()), (j1 & (JQ | zZ)) === _J))
          I7(), i0();
      }
    }
    function dU(J, Q) {
      var Z = j1;
      j1 |= PH;
      try {
        return J(Q);
      } finally {
        if (((j1 = Z), j1 === _J && !NZ.isBatchingLegacy)) I7(), RW();
      }
    }
    function dj(J, Q, Z, X, G) {
      var B = EZ(),
        U = eJ.transition;
      try {
        return (eJ.transition = null), uJ(mQ), J(Q, Z, X, G);
      } finally {
        if ((uJ(B), (eJ.transition = U), j1 === _J)) I7();
      }
    }
    function A0(J) {
      if (Q4 !== null && Q4.tag === c0 && (j1 & (JQ | zZ)) === _J) E0();
      var Q = j1;
      j1 |= PH;
      var Z = eJ.transition,
        X = EZ();
      try {
        if (((eJ.transition = null), uJ(mQ), J)) return J();
        else return;
      } finally {
        if ((uJ(X), (eJ.transition = Z), (j1 = Q), (j1 & (JQ | zZ)) === _J))
          i0();
      }
    }
    function _H() {
      return (j1 & (JQ | zZ)) !== _J;
    }
    function y9(J, Q) {
      zQ(vU, pZ, J), (pZ = H1(pZ, Q)), (NU = H1(NU, Q));
    }
    function sU(J) {
      (pZ = vU.current), WQ(vU, J);
    }
    function h4(J, Q) {
      (J.finishedWork = null), (J.finishedLanes = x);
      var Z = J.timeoutHandle;
      if (Z !== TG) (J.timeoutHandle = TG), z2(Z);
      if (XJ !== null) {
        var X = XJ.return;
        while (X !== null) {
          var G = X.alternate;
          ZH(G, X), (X = X.return);
        }
      }
      LQ = J;
      var B = u4(J.current, null);
      return (
        (XJ = B),
        (SJ = pZ = NU = Q),
        (CJ = j0),
        (R7 = null),
        (T9 = x),
        (L7 = x),
        (h9 = x),
        (F7 = null),
        (kQ = null),
        S$(),
        FZ.discardPendingWarnings(),
        B
      );
    }
    function SH(J, Q) {
      do {
        var Z = XJ;
        try {
          if (
            (o8(),
            Gz(),
            gJ(),
            (SU.current = null),
            Z === null || Z.return === null)
          ) {
            (CJ = A7), (R7 = Q), (XJ = null);
            return;
          }
          if (nQ && Z.mode & k1) S9(Z, !0);
          if (kZ)
            if (
              (U5(),
              Q !== null &&
                typeof Q === "object" &&
                typeof Q.then === "function")
            ) {
              var X = Q;
              VV(Z, X, SJ);
            } else MV(Z, Q, SJ);
          BD(J, Z.return, Z, Q, SJ), bH(Z);
        } catch (G) {
          if (((Q = G), XJ === Z && Z !== null)) (Z = Z.return), (XJ = Z);
          else Z = XJ;
          continue;
        }
        return;
      } while (!0);
    }
    function CH() {
      var J = _U.current;
      if (((_U.current = F9), J === null)) return F9;
      else return J;
    }
    function vH(J) {
      _U.current = J;
    }
    function sj() {
      bU = TJ();
    }
    function S7(J) {
      T9 = H1(J, T9);
    }
    function mj() {
      if (CJ === j0) CJ = g9;
    }
    function mU() {
      if (CJ === j0 || CJ === g9 || CJ === g4) CJ = E7;
      if (LQ !== null && (ZG(T9) || ZG(L7))) X4(LQ, SJ);
    }
    function yj(J) {
      if (CJ !== E7) CJ = g4;
      if (F7 === null) F7 = [J];
      else F7.push(J);
    }
    function lj() {
      return CJ === j0;
    }
    function l9(J, Q) {
      var Z = j1;
      j1 |= JQ;
      var X = CH();
      if (LQ !== J || SJ !== Q) {
        if (AZ) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) C7(J, SJ), G.clear();
          UK(J, Q);
        }
        (P0 = YK()), h4(J, Q);
      }
      oY(Q);
      do
        try {
          cj();
          break;
        } catch (B) {
          SH(J, B);
        }
      while (!0);
      if ((o8(), (j1 = Z), vH(X), XJ !== null))
        throw new Error(
          "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.",
        );
      return rY(), (LQ = null), (SJ = x), CJ;
    }
    function cj() {
      while (XJ !== null) NH(XJ);
    }
    function ij(J, Q) {
      var Z = j1;
      j1 |= JQ;
      var X = CH();
      if (LQ !== J || SJ !== Q) {
        if (AZ) {
          var G = J.memoizedUpdaters;
          if (G.size > 0) C7(J, SJ), G.clear();
          UK(J, Q);
        }
        (P0 = YK()), I7(), h4(J, Q);
      }
      oY(Q);
      do
        try {
          aj();
          break;
        } catch (B) {
          SH(J, B);
        }
      while (!0);
      if ((o8(), vH(X), (j1 = Z), XJ !== null)) return jV(), j0;
      else return rY(), (LQ = null), (SJ = x), CJ;
    }
    function aj() {
      while (XJ !== null && !iM()) NH(XJ);
    }
    function NH(J) {
      var Q = J.alternate;
      JJ(J);
      var Z;
      if ((J.mode & k1) !== r) ZU(J), (Z = yU(Q, J, pZ)), S9(J, !0);
      else Z = yU(Q, J, pZ);
      if ((gJ(), (J.memoizedProps = J.pendingProps), Z === null)) bH(J);
      else XJ = Z;
      SU.current = null;
    }
    function bH(J) {
      var Q = J;
      do {
        var { alternate: Z, return: X } = Q;
        if ((Q.flags & q6) === o) {
          JJ(Q);
          var G = void 0;
          if ((Q.mode & k1) === r) G = QH(Z, Q, pZ);
          else ZU(Q), (G = QH(Z, Q, pZ)), S9(Q, !1);
          if ((gJ(), G !== null)) {
            XJ = G;
            return;
          }
        } else {
          var B = hD(Z, Q);
          if (B !== null) {
            (B.flags &= dM), (XJ = B);
            return;
          }
          if ((Q.mode & k1) !== r) {
            S9(Q, !1);
            var { actualDuration: U, child: Y } = Q;
            while (Y !== null) (U += Y.actualDuration), (Y = Y.sibling);
            Q.actualDuration = U;
          }
          if (X !== null)
            (X.flags |= q6), (X.subtreeFlags = o), (X.deletions = null);
          else {
            (CJ = CU), (XJ = null);
            return;
          }
        }
        var K = Q.sibling;
        if (K !== null) {
          XJ = K;
          return;
        }
        (Q = X), (XJ = Q);
      } while (Q !== null);
      if (CJ === j0) CJ = AH;
    }
    function f4(J, Q, Z) {
      var X = EZ(),
        G = eJ.transition;
      try {
        (eJ.transition = null), uJ(mQ), pj(J, Q, Z, X);
      } finally {
        (eJ.transition = G), uJ(X);
      }
      return null;
    }
    function pj(J, Q, Z, X) {
      do E0();
      while (Q4 !== null);
      if ((BP(), (j1 & (JQ | zZ)) !== _J))
        throw new Error("Should not already be working.");
      var { finishedWork: G, finishedLanes: B } = J;
      if ((BV(B), G === null)) return iY(), null;
      else if (B === x)
        M(
          "root.finishedLanes should not be empty during a commit. This is a bug in React.",
        );
      if (((J.finishedWork = null), (J.finishedLanes = x), G === J.current))
        throw new Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.",
        );
      (J.callbackNode = null), (J.callbackPriority = fJ);
      var U = H1(G.lanes, G.childLanes);
      if ((TV(J, U), J === LQ)) (LQ = null), (XJ = null), (SJ = x);
      if ((G.subtreeFlags & B5) !== o || (G.flags & B5) !== o) {
        if (!T4)
          (T4 = !0),
            (TU = Z),
            iU($4, function () {
              return E0(), null;
            });
      }
      var Y = (G.subtreeFlags & (CX | vX | O6 | B5)) !== o,
        K = (G.flags & (CX | vX | O6 | B5)) !== o;
      if (Y || K) {
        var z = eJ.transition;
        eJ.transition = null;
        var H = EZ();
        uJ(mQ);
        var $ = j1;
        (j1 |= zZ), (SU.current = null);
        var O = mD(J, G);
        Sz(),
          Zj(J, G, B),
          X2(J.containerInfo),
          (J.current = G),
          qV(B),
          Xj(G, J, B),
          OV(),
          aM(),
          (j1 = $),
          uJ(H),
          (eJ.transition = z);
      } else (J.current = G), Sz();
      var E = T4;
      if (T4) (T4 = !1), (Q4 = J), (x7 = B);
      else (d5 = 0), (d9 = null);
      if (((U = J.pendingLanes), U === x)) u5 = null;
      if (!E) hH(J.current, !1);
      if ((JV(G.stateNode, X), AZ)) J.memoizedUpdaters.clear();
      if ((wj(), gQ(J, TJ()), Q !== null)) {
        var P = J.onRecoverableError;
        for (var R = 0; R < Q.length; R++) {
          var g = Q[R],
            l = g.stack,
            d = g.digest;
          P(g.value, { componentStack: l, digest: d });
        }
      }
      if (f9) {
        f9 = !1;
        var V1 = kU;
        throw ((kU = null), V1);
      }
      if (sQ(x7, Z1) && J.tag !== c0) E0();
      if (((U = J.pendingLanes), sQ(U, Z1)))
        if ((t$(), J === hU)) w7++;
        else (w7 = 0), (hU = J);
      else w7 = 0;
      return i0(), iY(), null;
    }
    function E0() {
      if (Q4 !== null) {
        var J = KK(x7),
          Q = dV(z0, J),
          Z = eJ.transition,
          X = EZ();
        try {
          return (eJ.transition = null), uJ(Q), rj();
        } finally {
          uJ(X), (eJ.transition = Z);
        }
      }
      return !1;
    }
    function oj(J) {
      if ((gU.push(J), !T4))
        (T4 = !0),
          iU($4, function () {
            return E0(), null;
          });
    }
    function rj() {
      if (Q4 === null) return !1;
      var J = TU;
      TU = null;
      var Q = Q4,
        Z = x7;
      if (((Q4 = null), (x7 = x), (j1 & (JQ | zZ)) !== _J))
        throw new Error(
          "Cannot flush passive effects while already rendering.",
        );
      (fU = !0), (u9 = !1), $V(Z);
      var X = j1;
      (j1 |= zZ), zj(Q.current), Uj(Q, Q.current, Z, J);
      {
        var G = gU;
        gU = [];
        for (var B = 0; B < G.length; B++) {
          var U = G[B];
          iD(Q, U);
        }
      }
      DV(), hH(Q.current, !0), (j1 = X), i0();
      {
        if (u9)
          if (Q === d9) d5++;
          else (d5 = 0), (d9 = Q);
        else d5 = 0;
        (fU = !1), (u9 = !1);
      }
      QV(Q);
      {
        var Y = Q.current.stateNode;
        (Y.effectDuration = 0), (Y.passiveEffectDuration = 0);
      }
      return !0;
    }
    function kH(J) {
      return u5 !== null && u5.has(J);
    }
    function nj(J) {
      if (u5 === null) u5 = new Set([J]);
      else u5.add(J);
    }
    function tj(J) {
      if (!f9) (f9 = !0), (kU = J);
    }
    var ej = tj;
    function gH(J, Q, Z) {
      var X = b4(Z, Q),
        G = vz(J, X, Z1),
        B = p0(J, G, Z1),
        U = FQ();
      if (B !== null) L6(B, Z1, U), gQ(B, U);
    }
    function c1(J, Q, Z) {
      if ((uD(Z), v7(!1), J.tag === m)) {
        gH(J, J, Z);
        return;
      }
      var X = null;
      X = Q;
      while (X !== null) {
        if (X.tag === m) {
          gH(X, J, Z);
          return;
        } else if (X.tag === a) {
          var { type: G, stateNode: B } = X;
          if (
            typeof G.getDerivedStateFromError === "function" ||
            (typeof B.componentDidCatch === "function" && !kH(B))
          ) {
            var U = b4(Z, J),
              Y = KU(X, U, Z1),
              K = p0(X, Y, Z1),
              z = FQ();
            if (K !== null) L6(K, Z1, z), gQ(K, z);
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
    function JP(J, Q, Z) {
      var X = J.pingCache;
      if (X !== null) X.delete(Q);
      var G = FQ();
      if ((GK(J, Z), WP(J), LQ === J && z5(SJ, Z)))
        if (CJ === E7 || (CJ === g9 && JK(SJ) && TJ() - bU < EH)) h4(J, x);
        else h9 = H1(h9, Z);
      gQ(J, G);
    }
    function TH(J, Q) {
      if (Q === fJ) Q = kj(J);
      var Z = FQ(),
        X = NQ(J, Q);
      if (X !== null) L6(X, Q, Z), gQ(X, Z);
    }
    function QP(J) {
      var Q = J.memoizedState,
        Z = fJ;
      if (Q !== null) Z = Q.retryLane;
      TH(J, Z);
    }
    function ZP(J, Q) {
      var Z = fJ,
        X;
      switch (J.tag) {
        case P1:
          X = J.stateNode;
          var G = J.memoizedState;
          if (G !== null) Z = G.retryLane;
          break;
        case EJ:
          X = J.stateNode;
          break;
        default:
          throw new Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React.",
          );
      }
      if (X !== null) X.delete(Q);
      TH(J, Z);
    }
    function XP(J) {
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
                  : Cj(J / 1960) * 1960;
    }
    function GP() {
      if (w7 > Nj)
        throw (
          ((w7 = 0),
          (hU = null),
          new Error(
            "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.",
          ))
        );
      if (d5 > bj)
        (d5 = 0),
          (d9 = null),
          M(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
          );
    }
    function BP() {
      FZ.flushLegacyContextWarning(), FZ.flushPendingUnsafeLifecycleWarnings();
    }
    function hH(J, Q) {
      {
        if ((JJ(J), c9(J, U0, Pj), Q)) c9(J, Q8, Aj);
        if ((c9(J, U0, Dj), Q)) c9(J, Q8, jj);
        gJ();
      }
    }
    function c9(J, Q, Z) {
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
    var i9 = null;
    function fH(J) {
      {
        if ((j1 & JQ) !== _J) return;
        if (!(J.mode & D1)) return;
        var Q = J.tag;
        if (
          Q !== UJ &&
          Q !== m &&
          Q !== a &&
          Q !== K1 &&
          Q !== J1 &&
          Q !== VJ &&
          Q !== _1
        )
          return;
        var Z = Y1(J) || "ReactComponent";
        if (i9 !== null) {
          if (i9.has(Z)) return;
          i9.add(Z);
        } else i9 = new Set([Z]);
        var X = KQ;
        try {
          JJ(J),
            M(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.",
            );
        } finally {
          if (X) JJ(J);
          else gJ();
        }
      }
    }
    var yU;
    {
      var UP = null;
      yU = function (J, Q, Z) {
        var X = iH(UP, Q);
        try {
          return rz(J, Q, Z);
        } catch (B) {
          if (
            O$() ||
            (B !== null &&
              typeof B === "object" &&
              typeof B.then === "function")
          )
            throw B;
          if ((o8(), Gz(), ZH(J, Q), iH(Q, X), Q.mode & k1)) ZU(Q);
          if ((FX(null, rz, null, J, Q, Z), TM())) {
            var G = IX();
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
    var uH = !1,
      lU;
    lU = new Set();
    function YP(J) {
      if (b0 && !o$())
        switch (J.tag) {
          case K1:
          case J1:
          case _1: {
            var Q = (XJ && Y1(XJ)) || "Unknown",
              Z = Q;
            if (!lU.has(Z)) {
              lU.add(Z);
              var X = Y1(J) || "Unknown";
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
            if (!uH)
              M(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
              ),
                (uH = !0);
            break;
          }
        }
    }
    function C7(J, Q) {
      if (AZ) {
        var Z = J.memoizedUpdaters;
        Z.forEach(function (X) {
          BK(J, X, Q);
        });
      }
    }
    var cU = {};
    function iU(J, Q) {
      {
        var Z = NZ.current;
        if (Z !== null) return Z.push(Q), cU;
        else return cY(J, Q);
      }
    }
    function dH(J) {
      if (J === cU) return;
      return cM(J);
    }
    function sH() {
      return NZ.current !== null;
    }
    function KP(J) {
      {
        if (J.mode & D1) {
          if (!jH()) return;
        } else {
          if (!Sj()) return;
          if (j1 !== _J) return;
          if (J.tag !== K1 && J.tag !== J1 && J.tag !== _1) return;
        }
        if (NZ.current === null) {
          var Q = KQ;
          try {
            JJ(J),
              M(
                "An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
                Y1(J),
              );
          } finally {
            if (Q) JJ(J);
            else gJ();
          }
        }
      }
    }
    function WP(J) {
      if (J.tag !== c0 && jH() && NZ.current === null)
        M(
          "A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",
        );
    }
    function v7(J) {
      FH = J;
    }
    var HZ = null,
      s5 = null,
      zP = function (J) {
        HZ = J;
      };
    function m5(J) {
      {
        if (HZ === null) return J;
        var Q = HZ(J);
        if (Q === void 0) return J;
        return Q.current;
      }
    }
    function aU(J) {
      return m5(J);
    }
    function pU(J) {
      {
        if (HZ === null) return J;
        var Q = HZ(J);
        if (Q === void 0) {
          if (J !== null && J !== void 0 && typeof J.render === "function") {
            var Z = m5(J.render);
            if (J.render !== Z) {
              var X = { $$typeof: W1, render: Z };
              if (J.displayName !== void 0) X.displayName = J.displayName;
              return X;
            }
          }
          return J;
        }
        return Q.current;
      }
    }
    function mH(J, Q) {
      {
        if (HZ === null) return !1;
        var Z = J.elementType,
          X = Q.type,
          G = !1,
          B = typeof X === "object" && X !== null ? X.$$typeof : null;
        switch (J.tag) {
          case a: {
            if (typeof X === "function") G = !0;
            break;
          }
          case K1: {
            if (typeof X === "function") G = !0;
            else if (B === $1) G = !0;
            break;
          }
          case J1: {
            if (B === W1) G = !0;
            else if (B === $1) G = !0;
            break;
          }
          case VJ:
          case _1: {
            if (B === h1) G = !0;
            else if (B === $1) G = !0;
            break;
          }
          default:
            return !1;
        }
        if (G) {
          var U = HZ(Z);
          if (U !== void 0 && U === HZ(X)) return !0;
        }
        return !1;
      }
    }
    function yH(J) {
      {
        if (HZ === null) return;
        if (typeof WeakSet !== "function") return;
        if (s5 === null) s5 = new WeakSet();
        s5.add(J);
      }
    }
    var HP = function (J, Q) {
        {
          if (HZ === null) return;
          var { staleFamilies: Z, updatedFamilies: X } = Q;
          E0(),
            A0(function () {
              oU(J.current, X, Z);
            });
        }
      },
      MP = function (J, Q) {
        {
          if (J.context !== cQ) return;
          E0(),
            A0(function () {
              N7(Q, J, null, null);
            });
        }
      };
    function oU(J, Q, Z) {
      {
        var { alternate: X, child: G, sibling: B, tag: U, type: Y } = J,
          K = null;
        switch (U) {
          case K1:
          case _1:
          case a:
            K = Y;
            break;
          case J1:
            K = Y.render;
            break;
        }
        if (HZ === null)
          throw new Error(
            "Expected resolveFamily to be set during hot reload.",
          );
        var z = !1,
          H = !1;
        if (K !== null) {
          var $ = HZ(K);
          if ($ !== void 0) {
            if (Z.has($)) H = !0;
            else if (Q.has($))
              if (U === a) H = !0;
              else z = !0;
          }
        }
        if (s5 !== null) {
          if (s5.has(J) || (X !== null && s5.has(X))) H = !0;
        }
        if (H) J._debugNeedsRemount = !0;
        if (H || z) {
          var O = NQ(J, Z1);
          if (O !== null) vJ(O, J, Z1, o1);
        }
        if (G !== null && !H) oU(G, Q, Z);
        if (B !== null) oU(B, Q, Z);
      }
    }
    var VP = function (J, Q) {
      {
        var Z = new Set(),
          X = new Set(
            Q.map(function (G) {
              return G.current;
            }),
          );
        return rU(J.current, X, Z), Z;
      }
    };
    function rU(J, Q, Z) {
      {
        var { child: X, sibling: G, tag: B, type: U } = J,
          Y = null;
        switch (B) {
          case K1:
          case _1:
          case a:
            Y = U;
            break;
          case J1:
            Y = U.render;
            break;
        }
        var K = !1;
        if (Y !== null) {
          if (Q.has(Y)) K = !0;
        }
        if (K) qP(J, Z);
        else if (X !== null) rU(X, Q, Z);
        if (G !== null) rU(G, Q, Z);
      }
    }
    function qP(J, Q) {
      {
        var Z = OP(J, Q);
        if (Z) return;
        var X = J;
        while (!0) {
          switch (X.tag) {
            case c:
              Q.add(X.stateNode);
              return;
            case O1:
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
    function OP(J, Q) {
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
    var nU;
    {
      nU = !1;
      try {
        var lH = Object.preventExtensions({});
      } catch (J) {
        nU = !0;
      }
    }
    function $P(J, Q, Z, X) {
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
        !nU && typeof Object.preventExtensions === "function")
      )
        Object.preventExtensions(this);
    }
    var iQ = function (J, Q, Z, X) {
      return new $P(J, Q, Z, X);
    };
    function tU(J) {
      var Q = J.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function DP(J) {
      return typeof J === "function" && !tU(J) && J.defaultProps === void 0;
    }
    function jP(J) {
      if (typeof J === "function") return tU(J) ? a : K1;
      else if (J !== void 0 && J !== null) {
        var Q = J.$$typeof;
        if (Q === W1) return J1;
        if (Q === h1) return VJ;
      }
      return UJ;
    }
    function u4(J, Q) {
      var Z = J.alternate;
      if (Z === null)
        (Z = iQ(J.tag, Q, J.key, J.mode)),
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
      (Z.flags = J.flags & Y0),
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
        case UJ:
        case K1:
        case _1:
          Z.type = m5(J.type);
          break;
        case a:
          Z.type = aU(J.type);
          break;
        case J1:
          Z.type = pU(J.type);
          break;
      }
      return Z;
    }
    function PP(J, Q) {
      J.flags &= Y0 | DJ;
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
    function AP(J, Q, Z) {
      var X;
      if (J === s8) {
        if (((X = D1), Q === !0)) (X |= jJ), (X |= fZ);
      } else X = r;
      if (AZ) X |= k1;
      return iQ(m, null, null, X);
    }
    function eU(J, Q, Z, X, G, B) {
      var U = UJ,
        Y = J;
      if (typeof J === "function")
        if (tU(J)) (U = a), (Y = aU(Y));
        else Y = m5(Y);
      else if (typeof J === "string") U = c;
      else
        J: switch (J) {
          case w:
            return G4(Z.children, G, B, Q);
          case N:
            if (((U = MZ), (G |= jJ), (G & D1) !== r)) G |= fZ;
            break;
          case p:
            return EP(Z, G, B, Q);
          case z1:
            return RP(Z, G, B, Q);
          case WJ:
            return LP(Z, G, B, Q);
          case K4:
            return cH(Z, G, B, Q);
          case uQ:
          case YQ:
          case e9:
          case JX:
          case TZ:
          default: {
            if (typeof J === "object" && J !== null)
              switch (J.$$typeof) {
                case n:
                  U = w1;
                  break J;
                case S1:
                  U = dJ;
                  break J;
                case W1:
                  (U = J1), (Y = pU(Y));
                  break J;
                case h1:
                  U = VJ;
                  break J;
                case $1:
                  (U = VZ), (Y = null);
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
              var z = X ? Y1(X) : null;
              if (z) K += "\n\nCheck the render method of `" + z + "`.";
            }
            throw new Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
                ("but got: " + (J == null ? J : typeof J) + "." + K),
            );
          }
        }
      var H = iQ(U, Z, Q, G);
      return (
        (H.elementType = J), (H.type = Y), (H.lanes = B), (H._debugOwner = X), H
      );
    }
    function JY(J, Q, Z) {
      var X = null;
      X = J._owner;
      var { type: G, key: B, props: U } = J,
        Y = eU(G, B, U, X, Q, Z);
      return (Y._debugSource = J._source), (Y._debugOwner = J._owner), Y;
    }
    function G4(J, Q, Z, X) {
      var G = iQ(oQ, J, X, Q);
      return (G.lanes = Z), G;
    }
    function EP(J, Q, Z, X) {
      if (typeof J.id !== "string")
        M(
          'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
          typeof J.id,
        );
      var G = iQ(r1, J, X, Q | k1);
      return (
        (G.elementType = p),
        (G.lanes = Z),
        (G.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
        G
      );
    }
    function RP(J, Q, Z, X) {
      var G = iQ(P1, J, X, Q);
      return (G.elementType = z1), (G.lanes = Z), G;
    }
    function LP(J, Q, Z, X) {
      var G = iQ(EJ, J, X, Q);
      return (G.elementType = WJ), (G.lanes = Z), G;
    }
    function cH(J, Q, Z, X) {
      var G = iQ(Q1, J, X, Q);
      (G.elementType = K4), (G.lanes = Z);
      var B = { isHidden: !1 };
      return (G.stateNode = B), G;
    }
    function QY(J, Q, Z) {
      var X = iQ(x1, J, null, Q);
      return (X.lanes = Z), X;
    }
    function FP() {
      var J = iQ(c, null, null, r);
      return (J.elementType = "DELETED"), J;
    }
    function IP(J) {
      var Q = iQ(bJ, null, null, r);
      return (Q.stateNode = J), Q;
    }
    function ZY(J, Q, Z) {
      var X = J.children !== null ? J.children : [],
        G = iQ(O1, X, J.key, Q);
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
    function iH(J, Q) {
      if (J === null) J = iQ(UJ, null, null, r);
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
    function xP(J, Q, Z, X, G) {
      (this.tag = Q),
        (this.containerInfo = J),
        (this.pendingChildren = null),
        (this.current = null),
        (this.pingCache = null),
        (this.finishedWork = null),
        (this.timeoutHandle = TG),
        (this.context = null),
        (this.pendingContext = null),
        (this.callbackNode = null),
        (this.callbackPriority = fJ),
        (this.eventTimes = GG(x)),
        (this.expirationTimes = GG(o1)),
        (this.pendingLanes = x),
        (this.suspendedLanes = x),
        (this.pingedLanes = x),
        (this.expiredLanes = x),
        (this.mutableReadLanes = x),
        (this.finishedLanes = x),
        (this.entangledLanes = x),
        (this.entanglements = GG(x)),
        (this.identifierPrefix = X),
        (this.onRecoverableError = G),
        (this.mutableSourceEagerHydrationData = null),
        (this.effectDuration = 0),
        (this.passiveEffectDuration = 0);
      {
        this.memoizedUpdaters = new Set();
        var B = (this.pendingUpdatersLaneMap = []);
        for (var U = 0; U < gX; U++) B.push(new Set());
      }
      switch (Q) {
        case s8:
          this._debugRootType = Z ? "hydrateRoot()" : "createRoot()";
          break;
        case c0:
          this._debugRootType = Z ? "hydrate()" : "render()";
          break;
      }
    }
    function aH(J, Q, Z, X, G, B, U, Y, K, z) {
      var H = new xP(J, Q, Z, Y, K),
        $ = AP(Q, B);
      (H.current = $), ($.stateNode = H);
      {
        var O = {
          element: X,
          isDehydrated: Z,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        };
        $.memoizedState = O;
      }
      return KB($), H;
    }
    var XY = "18.2.0";
    function wP(J, Q, Z) {
      var X =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return (
        DQ(X),
        {
          $$typeof: q,
          key: X == null ? null : "" + X,
          children: J,
          containerInfo: Q,
          implementation: Z,
        }
      );
    }
    var GY, BY;
    (GY = !1), (BY = {});
    function pH(J) {
      if (!J) return cQ;
      var Q = X5(J),
        Z = U$(Q);
      if (Q.tag === a) {
        var X = Q.type;
        if (sZ(X)) return PW(Q, X, Z);
      }
      return Z;
    }
    function _P(J, Q) {
      {
        var Z = X5(J);
        if (Z === void 0)
          if (typeof J.render === "function")
            throw new Error("Unable to find node on an unmounted component.");
          else {
            var X = Object.keys(J).join(",");
            throw new Error(
              "Argument appears to not be a ReactComponent. Keys: " + X,
            );
          }
        var G = mY(Z);
        if (G === null) return null;
        if (G.mode & jJ) {
          var B = Y1(Z) || "Component";
          if (!BY[B]) {
            BY[B] = !0;
            var U = KQ;
            try {
              if ((JJ(G), Z.mode & jJ))
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
              if (U) JJ(U);
              else gJ();
            }
          }
        }
        return G.stateNode;
      }
    }
    function oH(J, Q, Z, X, G, B, U, Y) {
      var K = !1,
        z = null;
      return aH(J, Q, K, z, Z, X, G, B, U);
    }
    function rH(J, Q, Z, X, G, B, U, Y, K, z) {
      var H = !0,
        $ = aH(Z, X, H, J, G, B, U, Y, K);
      $.context = pH(null);
      var O = $.current,
        E = FQ(),
        P = Z4(O),
        R = $0(E, P);
      return (
        (R.callback = Q !== void 0 && Q !== null ? Q : null),
        p0(O, R, P),
        gj($, P, E),
        $
      );
    }
    function N7(J, Q, Z, X) {
      eM(Q, J);
      var G = Q.current,
        B = FQ(),
        U = Z4(G);
      PV(U);
      var Y = pH(Z);
      if (Q.context === null) Q.context = Y;
      else Q.pendingContext = Y;
      if (b0 && KQ !== null && !GY)
        (GY = !0),
          M(
            "Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",
            Y1(KQ) || "Unknown",
          );
      var K = $0(B, U);
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
      var z = p0(G, K, U);
      if (z !== null) vJ(z, G, U, B), J9(z, G, U);
      return U;
    }
    function a9(J) {
      var Q = J.current;
      if (!Q.child) return null;
      switch (Q.child.tag) {
        case c:
          return bG(Q.child.stateNode);
        default:
          return Q.child.stateNode;
      }
    }
    function SP(J) {
      switch (J.tag) {
        case m: {
          var Q = J.stateNode;
          if (H8(Q)) {
            var Z = _V(Q);
            uj(Q, Z);
          }
          break;
        }
        case P1: {
          A0(function () {
            var G = NQ(J, Z1);
            if (G !== null) {
              var B = FQ();
              vJ(G, J, Z1, B);
            }
          });
          var X = Z1;
          UY(J, X);
          break;
        }
      }
    }
    function nH(J, Q) {
      var Z = J.memoizedState;
      if (Z !== null && Z.dehydrated !== null) Z.retryLane = kV(Z.retryLane, Q);
    }
    function UY(J, Q) {
      nH(J, Q);
      var Z = J.alternate;
      if (Z) nH(Z, Q);
    }
    function CP(J) {
      if (J.tag !== P1) return;
      var Q = P6,
        Z = NQ(J, Q);
      if (Z !== null) {
        var X = FQ();
        vJ(Z, J, Q, X);
      }
      UY(J, Q);
    }
    function vP(J) {
      if (J.tag !== P1) return;
      var Q = Z4(J),
        Z = NQ(J, Q);
      if (Z !== null) {
        var X = FQ();
        vJ(Z, J, Q, X);
      }
      UY(J, Q);
    }
    function tH(J) {
      var Q = lM(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    var eH = function (J) {
      return null;
    };
    function NP(J) {
      return eH(J);
    }
    var J3 = function (J) {
      return !1;
    };
    function bP(J) {
      return J3(J);
    }
    var Q3 = null,
      Z3 = null,
      X3 = null,
      G3 = null,
      B3 = null,
      U3 = null,
      Y3 = null,
      K3 = null,
      W3 = null;
    {
      var z3 = function (J, Q, Z) {
          var X = Q[Z],
            G = LJ(J) ? J.slice() : M1({}, J);
          if (Z + 1 === Q.length) {
            if (LJ(G)) G.splice(X, 1);
            else delete G[X];
            return G;
          }
          return (G[X] = z3(J[X], Q, Z + 1)), G;
        },
        H3 = function (J, Q) {
          return z3(J, Q, 0);
        },
        M3 = function (J, Q, Z, X) {
          var G = Q[X],
            B = LJ(J) ? J.slice() : M1({}, J);
          if (X + 1 === Q.length) {
            var U = Z[X];
            if (((B[U] = B[G]), LJ(B))) B.splice(G, 1);
            else delete B[G];
          } else B[G] = M3(J[G], Q, Z, X + 1);
          return B;
        },
        V3 = function (J, Q, Z) {
          if (Q.length !== Z.length) {
            AJ("copyWithRename() expects paths of the same length");
            return;
          } else
            for (var X = 0; X < Z.length - 1; X++)
              if (Q[X] !== Z[X]) {
                AJ(
                  "copyWithRename() expects paths to be the same except for the deepest key",
                );
                return;
              }
          return M3(J, Q, Z, 0);
        },
        q3 = function (J, Q, Z, X) {
          if (Z >= Q.length) return X;
          var G = Q[Z],
            B = LJ(J) ? J.slice() : M1({}, J);
          return (B[G] = q3(J[G], Q, Z + 1, X)), B;
        },
        O3 = function (J, Q, Z) {
          return q3(J, Q, 0, Z);
        },
        YY = function (J, Q) {
          var Z = J.memoizedState;
          while (Z !== null && Q > 0) (Z = Z.next), Q--;
          return Z;
        };
      (Q3 = function (J, Q, Z, X) {
        var G = YY(J, Q);
        if (G !== null) {
          var B = O3(G.memoizedState, Z, X);
          (G.memoizedState = B),
            (G.baseState = B),
            (J.memoizedProps = M1({}, J.memoizedProps));
          var U = NQ(J, Z1);
          if (U !== null) vJ(U, J, Z1, o1);
        }
      }),
        (Z3 = function (J, Q, Z) {
          var X = YY(J, Q);
          if (X !== null) {
            var G = H3(X.memoizedState, Z);
            (X.memoizedState = G),
              (X.baseState = G),
              (J.memoizedProps = M1({}, J.memoizedProps));
            var B = NQ(J, Z1);
            if (B !== null) vJ(B, J, Z1, o1);
          }
        }),
        (X3 = function (J, Q, Z, X) {
          var G = YY(J, Q);
          if (G !== null) {
            var B = V3(G.memoizedState, Z, X);
            (G.memoizedState = B),
              (G.baseState = B),
              (J.memoizedProps = M1({}, J.memoizedProps));
            var U = NQ(J, Z1);
            if (U !== null) vJ(U, J, Z1, o1);
          }
        }),
        (G3 = function (J, Q, Z) {
          if (((J.pendingProps = O3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = NQ(J, Z1);
          if (X !== null) vJ(X, J, Z1, o1);
        }),
        (B3 = function (J, Q) {
          if (((J.pendingProps = H3(J.memoizedProps, Q)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var Z = NQ(J, Z1);
          if (Z !== null) vJ(Z, J, Z1, o1);
        }),
        (U3 = function (J, Q, Z) {
          if (((J.pendingProps = V3(J.memoizedProps, Q, Z)), J.alternate))
            J.alternate.pendingProps = J.pendingProps;
          var X = NQ(J, Z1);
          if (X !== null) vJ(X, J, Z1, o1);
        }),
        (Y3 = function (J) {
          var Q = NQ(J, Z1);
          if (Q !== null) vJ(Q, J, Z1, o1);
        }),
        (K3 = function (J) {
          eH = J;
        }),
        (W3 = function (J) {
          J3 = J;
        });
    }
    function kP(J) {
      var Q = mY(J);
      if (Q === null) return null;
      return Q.stateNode;
    }
    function gP(J) {
      return null;
    }
    function TP() {
      return KQ;
    }
    function hP(J) {
      var Q = J.findFiberByHostInstance,
        Z = L1.ReactCurrentDispatcher;
      return tM({
        bundleType: J.bundleType,
        version: J.version,
        rendererPackageName: J.rendererPackageName,
        rendererConfig: J.rendererConfig,
        overrideHookState: Q3,
        overrideHookStateDeletePath: Z3,
        overrideHookStateRenamePath: X3,
        overrideProps: G3,
        overridePropsDeletePath: B3,
        overridePropsRenamePath: U3,
        setErrorHandler: K3,
        setSuspenseHandler: W3,
        scheduleUpdate: Y3,
        currentDispatcherRef: Z,
        findHostInstanceByFiber: kP,
        findFiberByHostInstance: Q || gP,
        findHostInstancesForRefresh: VP,
        scheduleRefresh: HP,
        scheduleRoot: MP,
        setRefreshHandler: zP,
        getCurrentFiber: TP,
        reconcilerVersion: XY,
      });
    }
    var $3 =
      typeof reportError === "function"
        ? reportError
        : function (J) {
            console.error(J);
          };
    function KY(J) {
      this._internalRoot = J;
    }
    (p9.prototype.render = KY.prototype.render =
      function (J) {
        var Q = this._internalRoot;
        if (Q === null) throw new Error("Cannot update an unmounted root.");
        {
          if (typeof arguments[1] === "function")
            M(
              "render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          else if (o9(arguments[1]))
            M(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
            );
          else if (typeof arguments[1] !== "undefined")
            M(
              "You passed a second argument to root.render(...) but it only accepts one argument.",
            );
          var Z = Q.containerInfo;
          if (Z.nodeType !== $J) {
            var X = tH(Q.current);
            if (X) {
              if (X.parentNode !== Z)
                M(
                  "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.",
                );
            }
          }
        }
        N7(J, Q, null, null);
      }),
      (p9.prototype.unmount = KY.prototype.unmount =
        function () {
          if (typeof arguments[0] === "function")
            M(
              "unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().",
            );
          var J = this._internalRoot;
          if (J !== null) {
            this._internalRoot = null;
            var Q = J.containerInfo;
            if (_H())
              M(
                "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.",
              );
            A0(function () {
              N7(null, J, null, null);
            }),
              VW(Q);
          }
        });
    function fP(J, Q) {
      if (!o9(J))
        throw new Error(
          "createRoot(...): Target container is not a DOM element.",
        );
      D3(J);
      var Z = !1,
        X = !1,
        G = "",
        B = $3,
        U = null;
      if (Q !== null && Q !== void 0) {
        if (Q.hydrate)
          AJ(
            "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.",
          );
        else if (typeof Q === "object" && Q !== null && Q.$$typeof === gZ)
          M(
            "You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);",
          );
        if (Q.unstable_strictMode === !0) Z = !0;
        if (Q.identifierPrefix !== void 0) G = Q.identifierPrefix;
        if (Q.onRecoverableError !== void 0) B = Q.onRecoverableError;
        if (Q.transitionCallbacks !== void 0) U = Q.transitionCallbacks;
      }
      var Y = oH(J, s8, null, Z, X, G, B);
      k8(Y.current, J);
      var K = J.nodeType === $J ? J.parentNode : J;
      return d6(K), new KY(Y);
    }
    function p9(J) {
      this._internalRoot = J;
    }
    function uP(J) {
      if (J) nV(J);
    }
    p9.prototype.unstable_scheduleHydration = uP;
    function dP(J, Q, Z) {
      if (!o9(J))
        throw new Error(
          "hydrateRoot(...): Target container is not a DOM element.",
        );
      if ((D3(J), Q === void 0))
        M(
          "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)",
        );
      var X = Z != null ? Z : null,
        G = (Z != null && Z.hydratedSources) || null,
        B = !1,
        U = !1,
        Y = "",
        K = $3;
      if (Z !== null && Z !== void 0) {
        if (Z.unstable_strictMode === !0) B = !0;
        if (Z.identifierPrefix !== void 0) Y = Z.identifierPrefix;
        if (Z.onRecoverableError !== void 0) K = Z.onRecoverableError;
      }
      var z = rH(Q, null, J, s8, X, B, U, Y, K);
      if ((k8(z.current, J), d6(J), G))
        for (var H = 0; H < G.length; H++) {
          var $ = G[H];
          l$(z, $);
        }
      return new p9(z);
    }
    function o9(J) {
      return !!(
        J &&
        (J.nodeType === CQ || J.nodeType === X0 || J.nodeType === VX || !GQ)
      );
    }
    function b7(J) {
      return !!(
        J &&
        (J.nodeType === CQ ||
          J.nodeType === X0 ||
          J.nodeType === VX ||
          (J.nodeType === $J && J.nodeValue === " react-mount-point-unstable "))
      );
    }
    function D3(J) {
      {
        if (
          J.nodeType === CQ &&
          J.tagName &&
          J.tagName.toUpperCase() === "BODY"
        )
          M(
            "createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.",
          );
        if (n6(J))
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
    var sP = L1.ReactCurrentOwner,
      j3;
    j3 = function (J) {
      if (J._reactRootContainer && J.nodeType !== $J) {
        var Q = tH(J._reactRootContainer.current);
        if (Q) {
          if (Q.parentNode !== J)
            M(
              "render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.",
            );
        }
      }
      var Z = !!J._reactRootContainer,
        X = WY(J),
        G = !!(X && y0(X));
      if (G && !Z)
        M(
          "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.",
        );
      if (J.nodeType === CQ && J.tagName && J.tagName.toUpperCase() === "BODY")
        M(
          "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.",
        );
    };
    function WY(J) {
      if (!J) return null;
      if (J.nodeType === X0) return J.documentElement;
      else return J.firstChild;
    }
    function P3() {}
    function mP(J, Q, Z, X, G) {
      if (G) {
        if (typeof X === "function") {
          var B = X;
          X = function () {
            var O = a9(U);
            B.call(O);
          };
        }
        var U = rH(Q, X, J, c0, null, !1, !1, "", P3);
        (J._reactRootContainer = U), k8(U.current, J);
        var Y = J.nodeType === $J ? J.parentNode : J;
        return d6(Y), A0(), U;
      } else {
        var K;
        while ((K = J.lastChild)) J.removeChild(K);
        if (typeof X === "function") {
          var z = X;
          X = function () {
            var O = a9(H);
            z.call(O);
          };
        }
        var H = oH(J, c0, null, !1, !1, "", P3);
        (J._reactRootContainer = H), k8(H.current, J);
        var $ = J.nodeType === $J ? J.parentNode : J;
        return (
          d6($),
          A0(function () {
            N7(Q, H, Z, X);
          }),
          H
        );
      }
    }
    function yP(J, Q) {
      if (J !== null && typeof J !== "function")
        M(
          "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
          Q,
          J,
        );
    }
    function r9(J, Q, Z, X, G) {
      j3(Z), yP(G === void 0 ? null : G, "render");
      var B = Z._reactRootContainer,
        U;
      if (!B) U = mP(Z, Q, J, G, X);
      else {
        if (((U = B), typeof G === "function")) {
          var Y = G;
          G = function () {
            var K = a9(U);
            Y.call(K);
          };
        }
        N7(Q, U, J, G);
      }
      return a9(U);
    }
    function lP(J) {
      {
        var Q = sP.current;
        if (Q !== null && Q.stateNode !== null) {
          var Z = Q.stateNode._warnedAboutRefsInRender;
          if (!Z)
            M(
              "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
              f1(Q.type) || "A component",
            );
          Q.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      if (J == null) return null;
      if (J.nodeType === CQ) return J;
      return _P(J, "findDOMNode");
    }
    function cP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !b7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = n6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?",
          );
      }
      return r9(null, J, Q, !0, Z);
    }
    function iP(J, Q, Z) {
      if (
        (M(
          "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createrootinstead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !b7(Q))
      )
        throw new Error("Target container is not a DOM element.");
      {
        var X = n6(Q) && Q._reactRootContainer === void 0;
        if (X)
          M(
            "You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?",
          );
      }
      return r9(null, J, Q, !1, Z);
    }
    function aP(J, Q, Z, X) {
      if (
        (M(
          "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot",
        ),
        !b7(Z))
      )
        throw new Error("Target container is not a DOM element.");
      if (J == null || !hM(J))
        throw new Error("parentComponent must be a valid React Component");
      return r9(J, Q, Z, !1, X);
    }
    function pP(J) {
      if (!b7(J))
        throw new Error(
          "unmountComponentAtNode(...): Target container is not a DOM element.",
        );
      {
        var Q = n6(J) && J._reactRootContainer === void 0;
        if (Q)
          M(
            "You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?",
          );
      }
      if (J._reactRootContainer) {
        {
          var Z = WY(J),
            X = Z && !y0(Z);
          if (X)
            M(
              "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.",
            );
        }
        return (
          A0(function () {
            r9(null, null, J, !1, function () {
              (J._reactRootContainer = null), VW(J);
            });
          }),
          !0
        );
      } else {
        {
          var G = WY(J),
            B = !!(G && y0(G)),
            U =
              J.nodeType === CQ &&
              b7(J.parentNode) &&
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
      (sV(SP),
      yV(CP),
      lV(vP),
      cV(EZ),
      iV(fV),
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
    xM(aO), SM(dU, dj, A0);
    function oP(J, Q) {
      var Z =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!o9(Q)) throw new Error("Target container is not a DOM element.");
      return wP(J, Q, null, Z);
    }
    function rP(J, Q, Z, X) {
      return aP(J, Q, Z, X);
    }
    var zY = { usingClientEntryPoint: !1, Events: [y0, P5, g8, CY, vY, dU] };
    function nP(J, Q) {
      if (!zY.usingClientEntryPoint)
        M(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".You should instead import it from "react-dom/client".',
        );
      return fP(J, Q);
    }
    function tP(J, Q, Z) {
      if (!zY.usingClientEntryPoint)
        M(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".',
        );
      return dP(J, Q, Z);
    }
    function eP(J) {
      if (_H())
        M(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.",
        );
      return A0(J);
    }
    var JA = hP({
      findFiberByHostInstance: F4,
      bundleType: 1,
      version: XY,
      rendererPackageName: "react-dom",
    });
    if (!JA && mJ && window.top === window.self) {
      if (
        (navigator.userAgent.indexOf("Chrome") > -1 &&
          navigator.userAgent.indexOf("Edge") === -1) ||
        navigator.userAgent.indexOf("Firefox") > -1
      ) {
        var A3 = window.location.protocol;
        if (/^(https?|file):$/.test(A3))
          console.info(
            "%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" +
              (A3 === "file:"
                ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faqhttps://reactjs.org/link/react-devtools-faq"
                : ""),
            "font-weight:bold",
          );
      }
    }
    if (
      ((WA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zY),
      (WA.createPortal = oP),
      (WA.createRoot = nP),
      (WA.findDOMNode = lP),
      (WA.flushSync = eP),
      (WA.hydrate = cP),
      (WA.hydrateRoot = tP),
      (WA.render = iP),
      (WA.unmountComponentAtNode = pP),
      (WA.unstable_batchedUpdates = dU),
      (WA.unstable_renderSubtreeIntoContainer = rP),
      (WA.version = XY),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          "function")
    )
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
});
var F3 = g7((zA) => {
  var l5 = e1(L3(), 1);
  (h7 = l5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
    (zA.createRoot = function (R1, s) {
      h7.usingClientEntryPoint = !0;
      try {
        return l5.createRoot(R1, s);
      } finally {
        h7.usingClientEntryPoint = !1;
      }
    }),
    (zA.hydrateRoot = function (R1, s, L1) {
      h7.usingClientEntryPoint = !0;
      try {
        return l5.hydrateRoot(R1, s, L1);
      } finally {
        h7.usingClientEntryPoint = !1;
      }
    });
  var h7;
});
var NJ = g7((HA) => {
  var R1 = e1(T7(), 1);
  (function () {
    var s = Symbol.for("react.element"),
      L1 = Symbol.for("react.portal"),
      BJ = Symbol.for("react.fragment"),
      i1 = Symbol.for("react.strict_mode"),
      AJ = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      pQ = Symbol.for("react.context"),
      K1 = Symbol.for("react.forward_ref"),
      a = Symbol.for("react.suspense"),
      UJ = Symbol.for("react.suspense_list"),
      m = Symbol.for("react.memo"),
      O1 = Symbol.for("react.lazy"),
      c = Symbol.for("react.offscreen"),
      x1 = Symbol.iterator,
      oQ = "@@iterator";
    function MZ(q) {
      if (q === null || typeof q !== "object") return null;
      var w = (x1 && q[x1]) || q[oQ];
      if (typeof w === "function") return w;
      return null;
    }
    var dJ = R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w1(q) {
      {
        for (
          var w = arguments.length, N = new Array(w > 1 ? w - 1 : 0), p = 1;
          p < w;
          p++
        )
          N[p - 1] = arguments[p];
        J1("error", q, N);
      }
    }
    function J1(q, w, N) {
      {
        var p = dJ.ReactDebugCurrentFrame,
          n = p.getStackAddendum();
        if (n !== "") (w += "%s"), (N = N.concat([n]));
        var S1 = N.map(function (W1) {
          return String(W1);
        });
        S1.unshift("Warning: " + w),
          Function.prototype.apply.call(console[q], console, S1);
      }
    }
    var r1 = !1,
      P1 = !1,
      VJ = !1,
      _1 = !1,
      VZ = !1,
      YJ;
    YJ = Symbol.for("react.module.reference");
    function bJ(q) {
      if (typeof q === "string" || typeof q === "function") return !0;
      if (
        q === BJ ||
        q === AJ ||
        VZ ||
        q === i1 ||
        q === a ||
        q === UJ ||
        _1 ||
        q === c ||
        r1 ||
        P1 ||
        VJ
      )
        return !0;
      if (typeof q === "object" && q !== null) {
        if (
          q.$$typeof === O1 ||
          q.$$typeof === m ||
          q.$$typeof === M ||
          q.$$typeof === pQ ||
          q.$$typeof === K1 ||
          q.$$typeof === YJ ||
          q.getModuleId !== void 0
        )
          return !0;
      }
      return !1;
    }
    function EJ(q, w, N) {
      var p = q.displayName;
      if (p) return p;
      var n = w.displayName || w.name || "";
      return n !== "" ? N + "(" + n + ")" : N;
    }
    function u1(q) {
      return q.displayName || "Context";
    }
    function Q1(q) {
      if (q == null) return null;
      if (typeof q.tag === "number")
        w1(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
        );
      if (typeof q === "function") return q.displayName || q.name || null;
      if (typeof q === "string") return q;
      switch (q) {
        case BJ:
          return "Fragment";
        case L1:
          return "Portal";
        case AJ:
          return "Profiler";
        case i1:
          return "StrictMode";
        case a:
          return "Suspense";
        case UJ:
          return "SuspenseList";
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case pQ:
            var w = q;
            return u1(w) + ".Consumer";
          case M:
            var N = q;
            return u1(N._context) + ".Provider";
          case K1:
            return EJ(q, q.render, "ForwardRef");
          case m:
            var p = q.displayName || null;
            if (p !== null) return p;
            return Q1(q.type) || "Memo";
          case O1: {
            var n = q,
              S1 = n._payload,
              W1 = n._init;
            try {
              return Q1(W1(S1));
            } catch (z1) {
              return null;
            }
          }
        }
      return null;
    }
    var a1 = Object.assign,
      e = 0,
      OQ,
      bZ,
      sJ,
      qZ,
      XQ,
      rQ,
      GQ;
    function wQ() {}
    wQ.__reactDisabledLog = !0;
    function F0() {
      {
        if (e === 0) {
          (OQ = console.log),
            (bZ = console.info),
            (sJ = console.warn),
            (qZ = console.error),
            (XQ = console.group),
            (rQ = console.groupCollapsed),
            (GQ = console.groupEnd);
          var q = { configurable: !0, enumerable: !0, value: wQ, writable: !0 };
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
    function kZ() {
      {
        if ((e--, e === 0)) {
          var q = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: a1({}, q, { value: OQ }),
            info: a1({}, q, { value: bZ }),
            warn: a1({}, q, { value: sJ }),
            error: a1({}, q, { value: qZ }),
            group: a1({}, q, { value: XQ }),
            groupCollapsed: a1({}, q, { value: rQ }),
            groupEnd: a1({}, q, { value: GQ }),
          });
        }
        if (e < 0)
          w1(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
          );
      }
    }
    var nQ = dJ.ReactCurrentDispatcher,
      OZ;
    function hQ(q, w, N) {
      {
        if (OZ === void 0)
          try {
            throw Error();
          } catch (n) {
            var p = n.stack.trim().match(/\n( *(at )?)/);
            OZ = (p && p[1]) || "";
          }
        return "\n" + OZ + q;
      }
    }
    var $Q = !1,
      tQ;
    {
      var BQ = typeof WeakMap === "function" ? WeakMap : Map;
      tQ = new BQ();
    }
    function fQ(q, w) {
      if (!q || $Q) return "";
      {
        var N = tQ.get(q);
        if (N !== void 0) return N;
      }
      var p;
      $Q = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S1;
      (S1 = nQ.current), (nQ.current = null), F0();
      try {
        if (w) {
          var W1 = function () {
            throw Error();
          };
          if (
            (Object.defineProperty(W1.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect === "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(W1, []);
            } catch (uQ) {
              p = uQ;
            }
            Reflect.construct(q, [], W1);
          } else {
            try {
              W1.call();
            } catch (uQ) {
              p = uQ;
            }
            q.call(W1.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (uQ) {
            p = uQ;
          }
          q();
        }
      } catch (uQ) {
        if (uQ && p && typeof uQ.stack === "string") {
          var z1 = uQ.stack.split("\n"),
            WJ = p.stack.split("\n"),
            h1 = z1.length - 1,
            $1 = WJ.length - 1;
          while (h1 >= 1 && $1 >= 0 && z1[h1] !== WJ[$1]) $1--;
          for (; h1 >= 1 && $1 >= 0; h1--, $1--)
            if (z1[h1] !== WJ[$1]) {
              if (h1 !== 1 || $1 !== 1)
                do
                  if ((h1--, $1--, $1 < 0 || z1[h1] !== WJ[$1])) {
                    var YQ = "\n" + z1[h1].replace(" at new ", " at ");
                    if (q.displayName && YQ.includes("<anonymous>"))
                      YQ = YQ.replace("<anonymous>", q.displayName);
                    if (typeof q === "function") tQ.set(q, YQ);
                    return YQ;
                  }
                while (h1 >= 1 && $1 >= 0);
              break;
            }
        }
      } finally {
        ($Q = !1), (nQ.current = S1), kZ(), (Error.prepareStackTrace = n);
      }
      var TZ = q ? q.displayName || q.name : "",
        K4 = TZ ? hQ(TZ) : "";
      if (typeof q === "function") tQ.set(q, K4);
      return K4;
    }
    function mJ(q, w, N) {
      return fQ(q, !1);
    }
    function yJ(q) {
      var w = q.prototype;
      return !!(w && w.isReactComponent);
    }
    function HJ(q, w, N) {
      if (q == null) return "";
      if (typeof q === "function") return fQ(q, yJ(q));
      if (typeof q === "string") return hQ(q);
      switch (q) {
        case a:
          return hQ("Suspense");
        case UJ:
          return hQ("SuspenseList");
      }
      if (typeof q === "object")
        switch (q.$$typeof) {
          case K1:
            return mJ(q.render);
          case m:
            return HJ(q.type, w, N);
          case O1: {
            var p = q,
              n = p._payload,
              S1 = p._init;
            try {
              return HJ(S1(n), w, N);
            } catch (W1) {}
          }
        }
      return "";
    }
    var lJ = Object.prototype.hasOwnProperty,
      cJ = {},
      qJ = dJ.ReactDebugCurrentFrame;
    function DQ(q) {
      if (q) {
        var w = q._owner,
          N = HJ(q.type, q._source, w ? w.type : null);
        qJ.setExtraStackFrame(N);
      } else qJ.setExtraStackFrame(null);
    }
    function I0(q, w, N, p, n) {
      {
        var S1 = Function.call.bind(lJ);
        for (var W1 in q)
          if (S1(q, W1)) {
            var z1 = void 0;
            try {
              if (typeof q[W1] !== "function") {
                var WJ = Error(
                  (p || "React class") +
                    ": " +
                    N +
                    " type `" +
                    W1 +
                    "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                    typeof q[W1] +
                    "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                );
                throw ((WJ.name = "Invariant Violation"), WJ);
              }
              z1 = q[W1](
                w,
                W1,
                p,
                N,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
              );
            } catch (h1) {
              z1 = h1;
            }
            if (z1 && !(z1 instanceof Error))
              DQ(n),
                w1(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  p || "React class",
                  N,
                  W1,
                  typeof z1,
                ),
                DQ(null);
            if (z1 instanceof Error && !(z1.message in cJ))
              (cJ[z1.message] = !0),
                DQ(n),
                w1("Failed %s type: %s", N, z1.message),
                DQ(null);
          }
      }
    }
    var x0 = Array.isArray;
    function eQ(q) {
      return x0(q);
    }
    function UQ(q) {
      {
        var w = typeof Symbol === "function" && Symbol.toStringTag,
          N = (w && q[Symbol.toStringTag]) || q.constructor.name || "Object";
        return N;
      }
    }
    function JZ(q) {
      try {
        return jQ(q), !1;
      } catch (w) {
        return !0;
      }
    }
    function jQ(q) {
      return "" + q;
    }
    function QZ(q) {
      if (JZ(q))
        return (
          w1(
            "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
            UQ(q),
          ),
          jQ(q)
        );
    }
    var OJ = dJ.ReactCurrentOwner,
      ZZ = { key: !0, ref: !0, __self: !0, __source: !0 },
      $Z,
      rZ,
      v;
    v = {};
    function y(q) {
      if (lJ.call(q, "ref")) {
        var w = Object.getOwnPropertyDescriptor(q, "ref").get;
        if (w && w.isReactWarning) return !1;
      }
      return q.ref !== void 0;
    }
    function U1(q) {
      if (lJ.call(q, "key")) {
        var w = Object.getOwnPropertyDescriptor(q, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return q.key !== void 0;
    }
    function v1(q, w) {
      if (
        typeof q.ref === "string" &&
        OJ.current &&
        w &&
        OJ.current.stateNode !== w
      ) {
        var N = Q1(OJ.current.type);
        if (!v[N])
          w1(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            Q1(OJ.current.type),
            q.ref,
          ),
            (v[N] = !0);
      }
    }
    function d1(q, w) {
      {
        var N = function () {
          if (!$Z)
            ($Z = !0),
              w1(
                "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                w,
              );
        };
        (N.isReactWarning = !0),
          Object.defineProperty(q, "key", { get: N, configurable: !0 });
      }
    }
    function kJ(q, w) {
      {
        var N = function () {
          if (!rZ)
            (rZ = !0),
              w1(
                "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                w,
              );
        };
        (N.isReactWarning = !0),
          Object.defineProperty(q, "ref", { get: N, configurable: !0 });
      }
    }
    var KJ = function (q, w, N, p, n, S1, W1) {
      var z1 = { $$typeof: s, type: q, key: w, ref: N, props: W1, _owner: S1 };
      if (
        ((z1._store = {}),
        Object.defineProperty(z1._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(z1, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p,
        }),
        Object.defineProperty(z1, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n,
        }),
        Object.freeze)
      )
        Object.freeze(z1.props), Object.freeze(z1);
      return z1;
    };
    function _Q(q, w, N, p, n) {
      {
        var S1,
          W1 = {},
          z1 = null,
          WJ = null;
        if (N !== void 0) QZ(N), (z1 = "" + N);
        if (U1(w)) QZ(w.key), (z1 = "" + w.key);
        if (y(w)) (WJ = w.ref), v1(w, n);
        for (S1 in w)
          if (lJ.call(w, S1) && !ZZ.hasOwnProperty(S1)) W1[S1] = w[S1];
        if (q && q.defaultProps) {
          var h1 = q.defaultProps;
          for (S1 in h1) if (W1[S1] === void 0) W1[S1] = h1[S1];
        }
        if (z1 || WJ) {
          var $1 =
            typeof q === "function" ? q.displayName || q.name || "Unknown" : q;
          if (z1) d1(W1, $1);
          if (WJ) kJ(W1, $1);
        }
        return KJ(q, z1, WJ, n, p, OJ.current, W1);
      }
    }
    var { ReactCurrentOwner: s1, ReactDebugCurrentFrame: PQ } = dJ;
    function m1(q) {
      if (q) {
        var w = q._owner,
          N = HJ(q.type, q._source, w ? w.type : null);
        PQ.setExtraStackFrame(N);
      } else PQ.setExtraStackFrame(null);
    }
    var n1 = !1;
    function B4(q) {
      return typeof q === "object" && q !== null && q.$$typeof === s;
    }
    function w0() {
      {
        if (s1.current) {
          var q = Q1(s1.current.type);
          if (q) return "\n\nCheck the render method of `" + q + "`.";
        }
        return "";
      }
    }
    function U4(q) {
      {
        if (q !== void 0) {
          var w = q.fileName.replace(/^.*[\\\/]/, ""),
            N = q.lineNumber;
          return "\n\nCheck your code at " + w + ":" + N + ".";
        }
        return "";
      }
    }
    var s4 = {};
    function c5(q) {
      {
        var w = w0();
        if (!w) {
          var N = typeof q === "string" ? q : q.displayName || q.name;
          if (N) w = "\n\nCheck the top-level render call using <" + N + ">.";
        }
        return w;
      }
    }
    function DZ(q, w) {
      {
        if (!q._store || q._store.validated || q.key != null) return;
        q._store.validated = !0;
        var N = c5(w);
        if (s4[N]) return;
        s4[N] = !0;
        var p = "";
        if (q && q._owner && q._owner !== s1.current)
          p = " It was passed a child from " + Q1(q._owner.type) + ".";
        m1(q),
          w1(
            'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
            N,
            p,
          ),
          m1(null);
      }
    }
    function nZ(q, w) {
      {
        if (typeof q !== "object") return;
        if (eQ(q))
          for (var N = 0; N < q.length; N++) {
            var p = q[N];
            if (B4(p)) DZ(p, w);
          }
        else if (B4(q)) {
          if (q._store) q._store.validated = !0;
        } else if (q) {
          var n = MZ(q);
          if (typeof n === "function") {
            if (n !== q.entries) {
              var S1 = n.call(q),
                W1;
              while (!(W1 = S1.next()).done) if (B4(W1.value)) DZ(W1.value, w);
            }
          }
        }
      }
    }
    function m4(q) {
      {
        var w = q.type;
        if (w === null || w === void 0 || typeof w === "string") return;
        var N;
        if (typeof w === "function") N = w.propTypes;
        else if (
          typeof w === "object" &&
          (w.$$typeof === K1 || w.$$typeof === m)
        )
          N = w.propTypes;
        else return;
        if (N) {
          var p = Q1(w);
          I0(N, q.props, "prop", p, q);
        } else if (w.PropTypes !== void 0 && !n1) {
          n1 = !0;
          var n = Q1(w);
          w1(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            n || "Unknown",
          );
        }
        if (
          typeof w.getDefaultProps === "function" &&
          !w.getDefaultProps.isReactClassApproved
        )
          w1(
            "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
          );
      }
    }
    function y4(q) {
      {
        var w = Object.keys(q.props);
        for (var N = 0; N < w.length; N++) {
          var p = w[N];
          if (p !== "children" && p !== "key") {
            m1(q),
              w1(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                p,
              ),
              m1(null);
            break;
          }
        }
        if (q.ref !== null)
          m1(q),
            w1("Invalid attribute `ref` supplied to `React.Fragment`."),
            m1(null);
      }
    }
    function Y4(q, w, N, p, n, S1) {
      {
        var W1 = bJ(q);
        if (!W1) {
          var z1 = "";
          if (
            q === void 0 ||
            (typeof q === "object" && q !== null && Object.keys(q).length === 0)
          )
            z1 +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          var WJ = U4(n);
          if (WJ) z1 += WJ;
          else z1 += w0();
          var h1;
          if (q === null) h1 = "null";
          else if (eQ(q)) h1 = "array";
          else if (q !== void 0 && q.$$typeof === s)
            (h1 = "<" + (Q1(q.type) || "Unknown") + " />"),
              (z1 =
                " Did you accidentally export a JSX literal instead of a component?");
          else h1 = typeof q;
          w1(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            h1,
            z1,
          );
        }
        var $1 = _Q(q, w, N, n, S1);
        if ($1 == null) return $1;
        if (W1) {
          var YQ = w.children;
          if (YQ !== void 0)
            if (p)
              if (eQ(YQ)) {
                for (var TZ = 0; TZ < YQ.length; TZ++) nZ(YQ[TZ], q);
                if (Object.freeze) Object.freeze(YQ);
              } else
                w1(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                );
            else nZ(YQ, q);
        }
        if (q === BJ) y4($1);
        else m4($1);
        return $1;
      }
    }
    var gZ = Y4;
    (HA.Fragment = BJ), (HA.jsxDEV = gZ);
  })();
});
var g3 = e1(F3(), 1);
var w3 = e1(T7(), 1);
var I3 = e1(T7(), 1),
  ZQ = e1(NJ(), 1),
  MA = () => {
    const [R1, s] = I3.useState(!0);
    return ZQ.jsxDEV(
      "html",
      {
        children: [
          ZQ.jsxDEV(
            "head",
            {
              children: [
                ZQ.jsxDEV(
                  "meta",
                  { charSet: "utf-8" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                ZQ.jsxDEV(
                  "title",
                  { children: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                ZQ.jsxDEV(
                  "meta",
                  { name: "description", content: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                ZQ.jsxDEV(
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
                ZQ.jsxDEV(
                  "link",
                  { rel: "stylesheet", href: "/styles/Help.css" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                ZQ.jsxDEV(
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
          ZQ.jsxDEV(
            "body",
            {
              children:
                R1 &&
                ZQ.jsxDEV(
                  "div",
                  {
                    className: "modal-overlay",
                    children: ZQ.jsxDEV(
                      "div",
                      {
                        className: "modal-content",
                        children: [
                          ZQ.jsxDEV(
                            "h2",
                            { children: "Help" },
                            void 0,
                            !1,
                            void 0,
                            this,
                          ),
                          ZQ.jsxDEV(
                            "div",
                            {
                              className: "help-container",
                              children: ZQ.jsxDEV(
                                "div",
                                {
                                  className: "info",
                                  children: ZQ.jsxDEV(
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
                          ZQ.jsxDEV(
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
  x3 = MA;
var TQ = e1(NJ(), 1),
  _3 = () => {
    const [R1, s] = w3.useState(!1),
      L1 = (i1) => {
        i1.preventDefault(), s(!0);
      },
      BJ = () => {
        s(!1);
      };
    return TQ.jsxDEV(
      "header",
      {
        className: "navbar",
        children: [
          TQ.jsxDEV(
            "nav",
            {
              children: [
                TQ.jsxDEV(
                  "div",
                  {
                    className: "option",
                    children: [
                      TQ.jsxDEV(
                        "a",
                        { href: "/designstudio", children: "Design Studio" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      TQ.jsxDEV(
                        "a",
                        { href: "/about", children: "About" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      TQ.jsxDEV(
                        "a",
                        { href: "/help", onClick: L1, children: "Help" },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      TQ.jsxDEV(
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
                TQ.jsxDEV(
                  "a",
                  {
                    href: "/",
                    children: TQ.jsxDEV(
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
                TQ.jsxDEV(
                  "div",
                  {
                    className: "right-buttons",
                    children: [
                      TQ.jsxDEV(
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
                      TQ.jsxDEV(
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
          R1 && TQ.jsxDEV(x3, {}, void 0, !1, void 0, this),
        ],
      },
      void 0,
      !0,
      void 0,
      this,
    );
  };
var L0 = e1(NJ(), 1),
  S3 = () => {
    return L0.jsxDEV(
      "article",
      {
        className: "demo",
        children: [
          L0.jsxDEV(
            "section",
            {
              children: [
                L0.jsxDEV(
                  "h1",
                  { children: "Medium length hero heading goes here" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                L0.jsxDEV(
                  "p",
                  {
                    children:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                L0.jsxDEV(
                  "a",
                  {
                    href: "/pricing",
                    className: "button black-button",
                    children: "Get Started",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                L0.jsxDEV(
                  "a",
                  {
                    href: "/login",
                    className: "button white-button",
                    children: "Subscribe Now",
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
          L0.jsxDEV(
            "video",
            {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              children: [
                L0.jsxDEV(
                  "source",
                  { src: "/assets/ElysiaJS.mp4", type: "video/mp4" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                "Your browser does not support the video tag. This is a demo video for Awesome.Social that goes over how we can help you maximize your social media presence and how you can get your Awesome Social Strategy.",
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
  };
var QJ = e1(NJ(), 1),
  C3 = () => {
    return QJ.jsxDEV(
      "article",
      {
        className: "demo2",
        children: [
          QJ.jsxDEV(
            "section",
            {
              children: [
                QJ.jsxDEV(
                  "span",
                  {
                    className: "text-regular-semi-bold",
                    children: QJ.jsxDEV(
                      "span",
                      { children: "Simplify" },
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
                QJ.jsxDEV(
                  "h2",
                  {
                    children:
                      "Customize Your Social Media Graphics Effortlessly",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                QJ.jsxDEV(
                  "p",
                  {
                    children:
                      "Logo365.AI is an AI-powered platform that allows small businesses to automatically generate customized social media graphics for national observances. Celebrate relevant national days, weeks, and months with your audience, enhancing brand engagement and visibility on different social media platforms.",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                QJ.jsxDEV(
                  "div",
                  {
                    className: "list",
                    children: [
                      QJ.jsxDEV(
                        "div",
                        {
                          className: "list-item",
                          children: [
                            QJ.jsxDEV(
                              "img",
                              {
                                src: "/assets/iconrelumei141-nrxb.svg",
                                alt: "IconRelumeI141",
                                className: "icon-relume",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            QJ.jsxDEV(
                              "span",
                              {
                                className: "text11",
                                children: QJ.jsxDEV(
                                  "span",
                                  { children: "Streamline Marketing" },
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
                            QJ.jsxDEV(
                              "span",
                              {
                                className: "TextRegularNormal",
                                children: QJ.jsxDEV(
                                  "span",
                                  {
                                    children:
                                      "Effortlessly celebrate national observances with customized social media graphics.",
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
                      ),
                      QJ.jsxDEV(
                        "div",
                        {
                          className: "list-item1",
                          children: [
                            QJ.jsxDEV(
                              "img",
                              {
                                src: "/assets/iconrelumei141-nrxb.svg",
                                alt: "IconRelumeI141",
                                className: "icon-relume1",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            QJ.jsxDEV(
                              "span",
                              {
                                className: "text10",
                                children: QJ.jsxDEV(
                                  "span",
                                  { children: "Enhance Engagement" },
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
                            QJ.jsxDEV(
                              "span",
                              {
                                className: "text-regular-normal",
                                children: QJ.jsxDEV(
                                  "span",
                                  {
                                    children:
                                      "Increase brand engagement and visibility on social media platforms with personalized graphics.",
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
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  void 0,
                  this,
                ),
                QJ.jsxDEV(
                  "a",
                  {
                    href: "/pricing",
                    className: "button white-button",
                    children: "Learn More",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                QJ.jsxDEV(
                  "a",
                  {
                    href: "/login",
                    className: "button white-button",
                    children: "Sign Up",
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
          QJ.jsxDEV(
            "video",
            {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              children: [
                QJ.jsxDEV(
                  "source",
                  { src: "/assets/ElysiaJS.mp4", type: "video/mp4" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                "Your browser does not support the video tag. This is a demo video for Awesome.Social that goes over how we can help you maximize your social media presence and how you can get your Awesome Social Strategy.",
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
  };
var GJ = e1(NJ(), 1),
  v3 = () => {
    return GJ.jsxDEV(
      "article",
      {
        className: "banner",
        children: [
          GJ.jsxDEV(
            "section",
            {
              className: "content1",
              children: [
                GJ.jsxDEV(
                  "h6",
                  { className: "text-regular-semi-bold", children: "Simplify" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                GJ.jsxDEV(
                  "div",
                  {
                    className: "content",
                    children: [
                      GJ.jsxDEV(
                        "h2",
                        {
                          children:
                            "Streamline Your Social Media Marketing Efforts",
                        },
                        void 0,
                        !1,
                        void 0,
                        this,
                      ),
                      GJ.jsxDEV(
                        "p",
                        {
                          children:
                            "Logo365.AI is an AI-powered platform that helps small businesses save time and maintain brand consistency by automatically generating customized social media graphics for national observances. With our platform, you can effortlessly celebrate relevant national days, weeks, and months with your audience, increasing brand engagement and visibility on different social media platforms.",
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
          GJ.jsxDEV(
            "section",
            {
              className: "overallBanner",
              children: [
                GJ.jsxDEV(
                  "section",
                  {
                    className: "column",
                    children: [
                      GJ.jsxDEV(
                        "article",
                        {
                          children: [
                            GJ.jsxDEV(
                              "img",
                              {
                                src: "/assets/iconrelumei141-nrxb.svg",
                                alt: "Business Growth Icon",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "h3",
                              { children: "Save Time and Stay Consistent" },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "p",
                              {
                                children:
                                  "Generate customized social media graphics for national observances with ease.",
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
                      GJ.jsxDEV(
                        "article",
                        {
                          children: [
                            GJ.jsxDEV(
                              "img",
                              {
                                src: "/assets/iconrelumei141-nrxb.svg",
                                alt: "Enhance Brand Engagement and Visibility",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "h3",
                              {
                                children:
                                  "Enhance Brand Engagement and Visibility",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "p",
                              {
                                children:
                                  "Celebrate relevant national days, weeks, and months with your audience.",
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
                      GJ.jsxDEV(
                        "article",
                        {
                          children: [
                            GJ.jsxDEV(
                              "img",
                              {
                                src: "/assets/iconrelumei141-nrxb.svg",
                                alt: "Awesome.Social Strategy Icon",
                              },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "h3",
                              { children: "Boost Your Social Media Presence" },
                              void 0,
                              !1,
                              void 0,
                              this,
                            ),
                            GJ.jsxDEV(
                              "p",
                              {
                                children:
                                  "Increase brand engagement and visibility on social media platforms.",
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
                GJ.jsxDEV(
                  "a",
                  {
                    href: "/pricing",
                    className: "button white-button",
                    children: "Get Started",
                  },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                GJ.jsxDEV(
                  "a",
                  {
                    href: "/login",
                    className: "button white-button",
                    children: "View Portal",
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
    );
  };
var HY = e1(NJ(), 1),
  N3 = () => {
    return HY.jsxDEV(
      "footer",
      {
        className: "footer",
        children: HY.jsxDEV(
          "p",
          { children: ["\xA9 ", new Date().getFullYear(), " Logo365.AI"] },
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
    );
  };
var t9 = e1(NJ(), 1),
  b3 = () => {
    return t9.jsxDEV(
      "article",
      {
        className: "testimonials",
        children: [
          t9.jsxDEV(
            "h2",
            { children: "Hear from our satisfied clients" },
            void 0,
            !1,
            void 0,
            this,
          ),
          [...Array(5)].map((R1, s) =>
            t9.jsxDEV(
              "img",
              { src: "/assets/brand_logo.svg", alt: "Testimonial" },
              s,
              !1,
              void 0,
              this,
            ),
          ),
        ],
      },
      void 0,
      !0,
      void 0,
      this,
    );
  };
var qQ = e1(NJ(), 1),
  VA = () => {
    return qQ.jsxDEV(
      "html",
      {
        children: [
          qQ.jsxDEV(
            "head",
            {
              children: [
                qQ.jsxDEV(
                  "meta",
                  { charSet: "utf-8" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                qQ.jsxDEV(
                  "title",
                  { children: "Awesome.Social" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                qQ.jsxDEV(
                  "meta",
                  { name: "description", content: "Bun, Elysia & React" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                qQ.jsxDEV(
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
                qQ.jsxDEV(
                  "link",
                  { rel: "stylesheet", href: "/styles/Home.css" },
                  void 0,
                  !1,
                  void 0,
                  this,
                ),
                qQ.jsxDEV(
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
          qQ.jsxDEV(
            "body",
            {
              children: [
                qQ.jsxDEV(_3, {}, void 0, !1, void 0, this),
                qQ.jsxDEV(S3, {}, void 0, !1, void 0, this),
                qQ.jsxDEV(C3, {}, void 0, !1, void 0, this),
                qQ.jsxDEV(v3, {}, void 0, !1, void 0, this),
                qQ.jsxDEV(b3, {}, void 0, !1, void 0, this),
                qQ.jsxDEV(N3, {}, void 0, !1, void 0, this),
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
  k3 = VA;
var T3 = e1(NJ(), 1);
g3.hydrateRoot(document, T3.jsxDEV(k3, {}, void 0, !1, void 0, this));
