import { reactive as w, ref as y, onMounted as B, openBlock as i, createBlock as x, Transition as N, withCtx as C, withDirectives as O, createElementVNode as c, toDisplayString as b, vShow as V, unref as u, normalizeClass as d, createVNode as k, render as $, Teleport as E, createApp as I, computed as r, provide as T, createElementBlock as g, renderSlot as v, useCssVars as M, inject as P, normalizeStyle as z } from "vue";
const D = {
  class: /* @__PURE__ */ d(["y-message"])
}, J = { class: "text" }, Y = { name: "yMessage" }, q = /* @__PURE__ */ Object.assign(Y, {
  props: {
    text: {
      type: [String, Object],
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    icon: String
  },
  setup(t) {
    const e = t, s = w({
      style: {
        info: {
          color: "#505050",
          backgroundColor: "rgb(229 227 224)",
          borderColor: "rgb(229 227 224)"
        }
      }
    }), o = y(!1), { style: n } = s;
    return console.log("1", e), B(() => {
      o.value = !0;
    }), (a, l) => (i(), x(N, { name: "slide-fade" }, {
      default: C(() => [
        O(c("div", D, [
          c("span", J, b(t.text), 1)
        ], 512), [
          [V, o.value]
        ]),
        c("div", null, b(u(n).info.color), 1)
      ]),
      _: 1
    }));
  }
}), A = {
  name: "message",
  success: function(t, e, s) {
    let o = null;
    const n = document.createElement("div");
    document.body.appendChild(n);
    const a = k(q, { text: t, type: e, timeout: s });
    $(a, n), clearTimeout(o), o = setTimeout(() => {
      $(null, n), document.body.removeChild(n), clearTimeout(o);
    }, s || 2500);
  }
}, F = /* @__PURE__ */ c("div", {
  class: /* @__PURE__ */ d(["y-confirm"])
}, "queren", -1), R = { name: "yConfirm" }, G = /* @__PURE__ */ Object.assign(R, {
  props: {
    title: {
      type: String,
      default: "\u63D0\u793A"
    }
  },
  setup(t) {
    return console.log(t), (s, o) => (i(), x(E, null, [
      F
    ]));
  }
}), H = {
  show: !1,
  text: "\u52A0\u8F7D\u4E2D...",
  target: "body",
  textColor: "#fff"
}, K = I(G, { config: H }).mount(typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : ""), L = {
  name: "confirm",
  show: function() {
    document.body.appendChild(K.$el);
  }
}, Q = {
  name: "fetch",
  api: (t = "", e = {}) => {
    const s = { method: t, params: e };
    return new Promise((o, n) => {
      fetch("https://api.youloge.com/", { method: "post", body: JSON.stringify(s) }).then((a) => a.json()).then((a) => {
        a.err == 0 ? o(a.data) : n(a);
      }).catch((a) => {
        n(a);
      });
    });
  },
  vip: (t = "", e = {}) => {
    const s = { access: localStorage.getItem("access") || "" }, o = { method: t, params: e };
    return new Promise((n, a) => {
      fetch("https://vip.youloge.com/", { method: "post", headers: s, body: JSON.stringify(o) }).then((l) => l.json()).then((l) => {
        l.err == 0 ? n(l.data) : a(l);
      }).catch((l) => {
        a(l);
      });
    });
  },
  ajax: (t, e = {}) => new Promise((s, o) => {
    fetch(t, e).then((n) => n.json()).then((n) => {
      s(n);
    }).catch((n) => {
      o(n);
    });
  })
}, S = [A, L, Q];
const U = { name: "yRow" }, p = /* @__PURE__ */ Object.assign(U, {
  props: {
    gutter: { type: Number, default: 0 },
    justify: { type: String, default: "start" },
    align: { type: String, default: "top" }
  },
  setup(t) {
    const e = t, s = r(() => e.gutter), o = r(() => ["y-row", `justify-${e.justify}`, `align-${e.align}`]);
    return T("gutter", { gutter: s }), (n, a) => (i(), g("div", {
      class: d(u(o))
    }, [
      v(n.$slots, "default")
    ], 2));
  }
});
p.install = (t) => {
  t.component(p.name, p);
};
const W = { name: "yCol" }, _ = /* @__PURE__ */ Object.assign(W, {
  props: {
    span: { type: Number, default: 24 },
    offset: { type: Number, default: 0 },
    xs: { type: Number },
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xl: { type: Number }
  },
  setup(t) {
    const e = t;
    M((h) => ({
      "51f6c686": s.value,
      "08825708": o.value
    }));
    const s = y(e.span <= 24 && e.span % 1 == 0 ? 100 / 24 * e.span + "%" : ""), o = y(e.offset <= 24 && e.offset % 1 == 0 ? 100 / 24 * e.offset + "%" : ""), { gutter: n } = P("gutter", { gutter: r(() => 0) });
    console.log("gutter", n);
    const a = r(() => ["y-col"]), l = r(() => [`padding-left:${n.value / 2}px`, `padding-right:${n.value / 2}px`]);
    return (h, le) => (i(), g("div", {
      class: d(u(a)),
      style: z(u(l))
    }, [
      v(h.$slots, "default")
    ], 6));
  }
});
_.install = (t) => {
  t.component(_.name, _);
};
const X = { class: "y-input" }, Z = ["id", "type", "placeholder", "value"], ee = ["for"], te = { name: "yInput" }, m = /* @__PURE__ */ Object.assign(te, {
  props: {
    modelValue: [String, Number],
    type: String,
    placeholder: String,
    disabled: Boolean,
    readyonly: Boolean,
    label: String
  },
  emits: ["update:modelValue", "clear", "focus", "blur", "input", "change"],
  setup(t, { emit: e }) {
    const s = t, o = r(() => "__" + Math.random().toString(32).substring(2)), n = y(s.type), a = (l) => {
      e("update:modelValue", l.target.value), e("input", l.target.value);
    };
    return console.log(s), (l, h) => (i(), g("div", X, [
      c("input", {
        id: u(o),
        type: n.value,
        placeholder: t.placeholder,
        value: t.modelValue,
        onInput: a
      }, null, 40, Z),
      c("label", { for: u(o) }, b(t.label), 9, ee)
    ]));
  }
});
m.install = (t) => {
  t.component(m.name, m);
};
const ne = ["disabled"], oe = /* @__PURE__ */ c("span", null, "I", -1), se = { name: "yButton" }, f = /* @__PURE__ */ Object.assign(se, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    icon: String,
    text: Boolean,
    link: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  setup(t) {
    const e = t;
    console.log(e);
    const s = r(() => [
      "y-button",
      `y-button-${e.type}`,
      { "y-button-text": e.text }
    ]), o = r(() => e.disabled);
    return (n, a) => (i(), g("button", {
      class: d(u(s)),
      disabled: u(o)
    }, [
      c("span", null, [
        v(n.$slots, "default")
      ]),
      oe
    ], 10, ne));
  }
});
f.install = (t) => {
  t.component(f.name, f);
};
const j = [p, _, m, f], ae = function(t) {
  j.map((e) => {
    t.component(e.name, e);
  }), S.map((e) => {
    t.config.globalProperties[`$${e.name}`] = e;
  });
}, re = {
  install: ae,
  name: "Youloge",
  version: "0.1.0",
  ...j,
  ...S
};
export {
  re as Youloge,
  re as default,
  ae as install
};
