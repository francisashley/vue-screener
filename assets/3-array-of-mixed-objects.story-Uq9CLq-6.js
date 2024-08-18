import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode } from "./vendor-Da5zVqzj.js";
import { _ as _export_sfc, u as useScreener, S as Screener, c as ScreenerPagination, a as ScreenerSearch, b as ScreenerSearchOptions } from "./use-screener-Cc5QG873.js";
import { m as mixedObjectsData } from "./mix-objects-data-Ds6Uxao6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-array-of-mixed-objects.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(mixedObjectsData);
    const __returned__ = { screener, get Screener() {
      return Screener;
    }, get ScreenerPagination() {
      return ScreenerPagination;
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Array of mixed objects",
    style: { fontWeight: 400, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "3. Array of mixed objects",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode($setup["ScreenerSearch"], { screener: $setup.screener }, null, 8, ["screener"]),
          createVNode($setup["ScreenerSearchOptions"], { screener: $setup.screener }, null, 8, ["screener"])
        ])
      ]),
      createVNode($setup["Screener"], {
        screener: $setup.screener,
        style: { marginBottom: "12px" }
      }, null, 8, ["screener"]),
      createVNode($setup["ScreenerPagination"], { screener: $setup.screener }, null, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue";
const _3ArrayOfMixedObjects_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue"]]);
export {
  _3ArrayOfMixedObjects_story as default
};
