import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-BgGZQa4R.js";
import { _ as _export_sfc, u as useVueScreener, V as VueScreener } from "./VueScreenerSearchOptions-BQ-7WraI.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-D72xCFqx.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "8-format-column.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useVueScreener(baseData, {
      columns: {
        id: { width: "50px", order: 0 },
        first_name: { width: "150px", format: (value) => "😎" + value + "😎", order: 1 },
        last_name: { width: "150px", format: (value) => "😎" + value + "😎", order: 2 },
        ip_address: {
          width: "minmax(150px, 1fr)",
          isSortable: false,
          format: (value) => "😎" + value + "😎",
          order: 3
        }
      }
    });
    const __returned__ = { screener, get VueScreener() {
      return VueScreener;
    }, DevSandbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "9. Format column",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Results",
        screener: $setup.screener
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { screener: $setup.screener }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/8-format-column.story.vue";
const _8FormatColumn_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/8-format-column.story.vue"]]);
export {
  _8FormatColumn_story as default
};