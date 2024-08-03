import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode, aA as createCommentVNode } from "./vendor-C63b5-kq.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-DemVpuV3.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-space.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData);
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
const _hoisted_1 = { style: { "background-color": "#101827", padding: "16px", minHeight: "calc(100vh - 16px)" } };
const _hoisted_2 = { style: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  color: "white"
} };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Space theme",
    style: { fontWeight: 400, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "1. Space theme",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["ScreenerSearch"], {
              screener: $setup.screener,
              style: {
                "--vs-border": "thin solid #374151",
                "--vs-bg-color": "#1f2937",
                "--vs-color": "white"
              }
            }, null, 8, ["screener"]),
            createVNode($setup["ScreenerSearchOptions"], {
              screener: $setup.screener,
              style: {
                "--vs-border": "thin solid #374151",
                "--vs-bg-color": "#1f2937",
                "--vs-option-bg": "#1f2937",
                "--vs-option-bg--hover": "#374151",
                "--vs-option-bg--active": "#3e51b5",
                "--vs-option-color": "white",
                "--vs-option-cursor": "pointer",
                "--vs-option-border-radius": "4px",
                "--vs-option-height": "20px",
                "--vs-option-width": "20px",
                "--vs-option-margin-bottom": "8px",
                "--vs-option-color--active": "#fff",
                "--vs-option-color--hover": "#fff"
              }
            }, null, 8, ["screener"])
          ])
        ]),
        createVNode($setup["Screener"], {
          screener: $setup.screener,
          class: "vue-screener",
          style: {
            "--vs-bg-color": "transparent",
            "--vs-border-color": "#4b5563",
            "--vs-text-color": "white",
            "--vs-border-radius": "8px",
            "--vs-cell-padding": "4px 8px",
            "--vs-header-cell-bg-color": "#1f2937",
            marginBottom: "16px"
          }
        }, null, 8, ["screener"]),
        !$setup.screener.hasError.value ? (openBlock(), createBlock($setup["ScreenerPagination"], {
          key: 0,
          screener: $setup.screener,
          style: {
            "--vs-text-color": "white",
            "--vs-button-padding": "4px 20px",
            "--vs-button-color": "white",
            "--vs-button-color--active": "#2463eb",
            "--vs-button-bg-color": "#1f2937",
            "--vs-button-bg-color--hover": "#374151",
            "--vs-button-border": "thin solid #374151",
            "--vs-button-border--hover": "thin solid #374151",
            "--vs-button-border--active": "thin solid #374151",
            "--vs-text-input-border": "thin solid #374151",
            "--vs-text-input-bg-color": "#1f2937",
            "--vs-text-input-color": "white"
          }
        }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/3-theming/1-space.story.vue";
const _1Space_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/3-theming/1-space.story.vue"]]);
export {
  _1Space_story as default
};
