import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode, aA as createCommentVNode } from "./vendor-C63b5-kq.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-CgWBEOP5.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-cavern.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      pick: ["", "id", "first_name", "last_name", "full_name", "email", "gender", "ip_address", ""],
      rowConfig: {
        link: true,
        getLink: () => "#"
      },
      config: {
        id: { width: "min-content" },
        first_name: { width: "min-content" }
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
const _hoisted_1 = { style: { "background-color": "#171717", minHeight: "calc(100vh - 16px)" } };
const _hoisted_2 = { style: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  color: "white"
} };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Cavern theme",
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
    title: "2. Cavern theme",
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
                "--vs-border": "thin solid #2a2b2b",
                "--vs-bg-color": "#171717",
                "--vs-color": "white",
                "--vs-height": "30px"
              }
            }, null, 8, ["screener"]),
            createVNode($setup["ScreenerSearchOptions"], {
              screener: $setup.screener,
              style: {
                "--vs-border": "thin solid #2a2b2b",
                "--vs-bg-color": "#171717",
                "--vs-height": "30px",
                "--vs-width": "30px",
                "--vs-icon-size": "18px",
                "--vs-option-bg": "transparent",
                "--vs-option-bg--hover": "#2a2b2b",
                "--vs-option-bg--active": "#3e51b5",
                "--vs-option-color": "white",
                "--vs-option-cursor": "pointer",
                "--vs-option-border-radius": "4px",
                "--vs-option-height": "26px",
                "--vs-option-width": "26px",
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
            // base styles
            "--vs-bg-color": "transparent",
            "--vs-border-color": "#2a2b2b",
            "--vs-border": "none",
            "--vs-text-color": "white",
            "--vs-border-radius": "0",
            "--vs-font-size": "11px",
            // cell styles
            "--vs-cell-padding": "20px 8px",
            "--vs-cell-border-right": "none",
            "--vs-cell-white-space": "nowrap",
            // header cell styles
            "--vs-header-cell-font-weight": "500",
            "--vs-header-cell-font-size": "10px",
            "--vs-header-cell-text-transform": "uppercase",
            "--vs-header-cell-padding": "8px",
            "--vs-row-background--hover": "#242424"
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
            "--vs-button-bg-color": "#171717",
            "--vs-button-bg-color--hover": "#2a2b2b",
            "--vs-button-border": "thin solid #2a2b2b",
            "--vs-button-border--hover": "thin solid #2a2b2b",
            "--vs-button-border--active": "thin solid #2a2b2b",
            "--vs-text-input-border": "thin solid #2a2b2b",
            "--vs-text-input-bg-color": "#171717",
            "--vs-text-input-color": "white",
            "--vs-font-size": "12px",
            padding: "16px"
          }
        }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/3-theming/2-cavern.story.vue";
const _2Cavern_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/3-theming/2-cavern.story.vue"]]);
export {
  _2Cavern_story as default
};
