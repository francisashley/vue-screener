import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BjHKTJun.js";
import { _ as _export_sfc, V as VueScreener, b as baseData } from "./data-wznJzBL0.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-control-widths.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    }, get primitivesData() {
      return primitivesData;
    }, get mixedObjectsData() {
      return mixedObjectsData;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "vsc-p-4 vsc-bg-zinc-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "1. Control widths",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.baseData,
          columns: {
            id: { width: "max-content" },
            first_name: { width: "150px" },
            last_name: { width: "150px" },
            full_name: { width: "150px" },
            email: { width: "200px" },
            gender: { width: "100px" },
            ip_address: { width: "minmax(150px, 1fr)" }
          }
        }, null, 8, ["data"])
      ]),
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.primitivesData,
          columns: {
            0: { width: "max-content" },
            1: { width: "100px" },
            2: { width: "100px" },
            3: { width: "1fr" },
            4: { width: "100px" },
            5: { width: "150px" }
          }
        }, null, 8, ["data"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.mixedObjectsData,
          columns: {
            type: { width: "minmax(50px, max-content)", order: 1 },
            name: { width: "100px", order: 2 },
            id: { width: "50px", order: 0 },
            address: { width: "minmax(200px, 1fr)", order: 3 },
            country: { width: "100px", order: 4 },
            flag_colours: { width: "200px", order: 5 }
          }
        }, null, 8, ["data"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/1-control-widths.story.vue";
const _1ControlWidths_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/1-control-widths.story.vue"]]);
export {
  _1ControlWidths_story as default
};
