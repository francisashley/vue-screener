import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode } from "./vendor-C63b5-kq.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-DemVpuV3.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "9-format-column.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      pick: ["id", "first_name", "last_name", "ip_address"],
      config: {
        id: { field: "id", width: "50px" },
        first_name: { field: "first_name", width: "150px", format: (value) => "😎" + value + "😎" },
        last_name: { field: "last_name", width: "150px", format: (value) => "😎" + value + "😎" },
        ip_address: {
          field: "ip_address",
          width: "minmax(150px, 1fr)",
          isSortable: false,
          format: (value) => "😎" + value + "😎"
        }
      }
    });
    const __returned__ = { screener, get Screener() {
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
    textContent: "Results",
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
    title: "9. Format column",
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
_sfc_main.__file = "src/stories/2-configure-columns/9-format-column.story.vue";
const _9FormatColumn_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/9-format-column.story.vue"]]);
export {
  _9FormatColumn_story as default
};
