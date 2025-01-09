import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode, ay as normalizeProps, az as guardReactiveProps } from "./vendor-BJ2uxNJx.js";
import { _ as _export_sfc, V as VueScreener, a as VueScreenerTableCell, c as VueScreenerTableHeadCell, b as baseData } from "./data-C1hZRF_F.js";
const invalidData = "this is invalid data";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "5-slots.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { invalidData, get VueScreener() {
      return VueScreener;
    }, get VueScreenerTableCell() {
      return VueScreenerTableCell;
    }, get VueScreenerTableHeadCell() {
      return VueScreenerTableHeadCell;
    }, get baseData() {
      return baseData;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "vsc-text-yellow-400" },
  "Header overridden",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "vsc-text-yellow-400" },
  "Footer overridden",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "span",
  { class: "vsc-text-yellow-400" },
  "Viewport overridden",
  -1
  /* HOISTED */
);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_10 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "vsc-text-yellow-400 vsc-p-4" },
  "Viewport table overridden",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_13 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "vsc-text-yellow-400 vsc-p-4" },
  "Loading...",
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_16 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "vsc-text-yellow-400 vsc-p-4" },
  "Overridden error state",
  -1
  /* HOISTED */
);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_19 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_22 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_23 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "5. Slots",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Override header",
          data: $setup.baseData
        }, {
          header: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        createVNode($setup["VueScreener"], {
          title: "Override footer",
          data: $setup.baseData
        }, {
          footer: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_6,
      createBaseVNode("div", _hoisted_7, [
        createVNode($setup["VueScreener"], {
          title: "Override viewport",
          data: $setup.baseData
        }, {
          viewport: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_9,
      createBaseVNode("div", _hoisted_10, [
        createVNode($setup["VueScreener"], {
          title: "Override viewport table state",
          data: $setup.baseData
        }, {
          table: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_12,
      createBaseVNode("div", _hoisted_13, [
        createVNode($setup["VueScreener"], {
          title: "Override viewport loading state",
          data: $setup.baseData,
          loading: ""
        }, {
          loading: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_15,
      createBaseVNode("div", _hoisted_16, [
        createVNode($setup["VueScreener"], {
          title: "Override viewport error state",
          data: $setup.invalidData
        }, {
          error: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _hoisted_18,
      createBaseVNode("div", _hoisted_19, [
        createVNode($setup["VueScreener"], {
          title: "Override Table Head Cell",
          data: $setup.baseData
        }, {
          "head-cell:id": withCtx((props) => [
            createVNode(
              $setup["VueScreenerTableHeadCell"],
              normalizeProps(guardReactiveProps(props)),
              {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "vsc-text-yellow-400",
                    innerHTML: props.column.field ?? props.column.label
                  }, null, 8, _hoisted_20)
                ]),
                _: 2
                /* DYNAMIC */
              },
              1040
              /* FULL_PROPS, DYNAMIC_SLOTS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]),
      _hoisted_21,
      createBaseVNode("div", _hoisted_22, [
        createVNode($setup["VueScreener"], {
          title: "Override Table Cell",
          data: $setup.baseData
        }, {
          "cell:id": withCtx((props) => [
            createVNode(
              $setup["VueScreenerTableCell"],
              normalizeProps(guardReactiveProps(props)),
              {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "vsc-text-yellow-400",
                    innerHTML: props.cell.htmlValue
                  }, null, 8, _hoisted_23)
                ]),
                _: 2
                /* DYNAMIC */
              },
              1040
              /* FULL_PROPS, DYNAMIC_SLOTS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/5-slots.story.vue";
const _5Slots_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/5-slots.story.vue"]]);
export {
  _5Slots_story as default
};
