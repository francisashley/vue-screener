import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BjHKTJun.js";
import { _ as _export_sfc, u as useVueScreener, b as baseData, V as VueScreener } from "./data-RdoU3UI6.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-data.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener1 = useVueScreener(baseData, {
      columns: {
        id: {
          width: "minmax(50px, max-content)"
        }
      }
    });
    const screener2 = useVueScreener(primitivesData, {
      columns: {
        0: {
          width: "minmax(50px, max-content)"
        }
      }
    });
    const screener3 = useVueScreener(mixedObjectsData);
    const __returned__ = { screener1, screener2, screener3, get VueScreener() {
      return VueScreener;
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
    title: "1. Input data",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener1,
          title: "Array of objects"
        }, null, 8, ["screener"])
      ]),
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener2,
          title: "Array of primitives"
        }, null, 8, ["screener"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener3,
          title: "Array of mixed objects"
        }, null, 8, ["screener"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/1-data.story.vue";
const _1Data_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/1-data.story.vue"]]);
export {
  _1Data_story as default
};
