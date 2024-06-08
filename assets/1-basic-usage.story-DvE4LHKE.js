import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createVNode } from "./vendor-DC0MkHh5.js";
import { _ as _export_sfc, V as VueScreener } from "./VueScreener-DSWS7_bq.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const badData = "bad data";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-basic-usage.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { badData, get VueScreener() {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "1) Basic Usage" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Array of objects" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: $setup.baseData }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Array of primitives" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: $setup.primitivesData }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Array of mixed objects" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: $setup.mixedObjectsData }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "No data" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: [] })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Bad data" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: $setup.badData })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom title" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            title: "Custom title",
            data: $setup.baseData
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Hide header" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            "include-header": false
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage.story.vue";
const _1BasicUsage_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage.story.vue"]]);
export {
  _1BasicUsage_story as default
};
