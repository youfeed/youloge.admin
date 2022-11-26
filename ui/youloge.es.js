import { openBlock as o, createBlock as p, Transition as _, withCtx as h, createElementBlock as n, normalizeStyle as d, createElementVNode as c, normalizeClass as m, createCommentVNode as l, toDisplayString as j, createApp as x, watchEffect as B, computed as u, unref as r, renderSlot as $ } from "vue";
const k = ["src"], v = { key: 2 }, w = { name: "yLoading" }, C = /* @__PURE__ */ Object.assign(w, {
  props: {
    obj: {
      type: Object
    }
  },
  setup(e) {
    return (t, i) => (o(), p(_, { name: "fade-pupop" }, {
      default: h(() => [
        e.obj.show ? (o(), n("div", {
          key: 0,
          class: "mzl-loading",
          style: d({ position: e.obj.position, "background-color": e.obj.bgColor })
        }, [
          c("div", {
            style: d({ color: e.obj.textColor }),
            class: "mzl-loading-center"
          }, [
            e.obj.showIcon && e.obj.img == "" ? (o(), n("i", {
              key: 0,
              class: m(["loading-icon", e.obj.icon])
            }, null, 2)) : l("", !0),
            e.obj.img != "" ? (o(), n("img", {
              key: 1,
              src: e.obj.img,
              alt: "",
              class: "loading-img"
            }, null, 8, k)) : l("", !0),
            e.obj.text != "" ? (o(), n("span", v, j(e.obj.text), 1)) : l("", !0)
          ], 4)
        ], 4)) : l("", !0)
      ]),
      _: 1
    }));
  }
}), s = {
  show: !1,
  text: "\u52A0\u8F7D\u4E2D...",
  target: "body",
  textColor: "#fff"
}, S = x(C, { obj: s }).mount(typeof document < "u" && typeof document.createElement < "u" ? document.createElement("div") : ""), z = {
  name: "loading",
  show(e) {
    s.show = !0, B(() => {
    }), document.body.appendChild(S.$el);
  },
  hide() {
    s.show = !0;
  }
}, b = [z];
const E = ["disabled"], O = /* @__PURE__ */ c("span", null, "I", -1), I = { name: "yButton" }, a = /* @__PURE__ */ Object.assign(I, {
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
  setup(e) {
    const t = e;
    console.log(t);
    const i = u(() => [
      "y-button",
      `y-button-${t.type}`,
      { "y-button-text": t.text }
    ]), f = u(() => t.disabled);
    return (y, N) => (o(), n("button", {
      class: m(r(i)),
      disabled: r(f)
    }, [
      c("span", null, [
        $(y.$slots, "default")
      ]),
      O
    ], 10, E));
  }
});
a.install = (e) => {
  e.component(a.name, a);
};
const g = [a], L = function(e) {
  g.map((t) => {
    e.component(t.name, t);
  }), b.map((t) => {
    e.config.globalProperties[`$${t.name}`] = t;
  });
}, Y = {
  install: L,
  name: "Youloge",
  version: "0.1.0",
  ...g,
  ...b
};
export {
  Y as Youloge,
  Y as default,
  L as install
};
