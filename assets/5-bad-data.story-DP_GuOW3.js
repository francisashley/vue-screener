import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode } from "./vendor-Da5zVqzj.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-Cc5QG873.js";
const badData = "bad data";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "5-bad-data.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(badData);
    const __returned__ = { badData, screener, get Screener() {
      return Screener;
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    }, get ScreenerPagination() {
      return ScreenerPagination;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Bad data",
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
    title: "5. Bad data",
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
_sfc_main.__file = "src/stories/1-basic-usage/5-bad-data.story.vue";
const _5BadData_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/5-bad-data.story.vue"]]);
export {
  _5BadData_story as default
};
