import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-5jMRr-pA.js";
import { _ as _export_sfc, u as useVueScreener, V as VueScreener } from "./VueScreenerSearchOptions-DiE3bW7o.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-BaMIYzLd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "7-disable-sort.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useVueScreener(baseData, {
      columns: {
        id: { width: "50px", order: 0 },
        first_name: { width: "150px", order: 1 },
        last_name: { width: "150px", order: 2 },
        ip_address: { width: "minmax(150px, 1fr)", isSortable: false, order: 3 }
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
    title: "8. Disable sort",
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
_sfc_main.__file = "src/stories/2-configure-columns/7-disable-sort.story.vue";
const _7DisableSort_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/7-disable-sort.story.vue"]]);
export {
  _7DisableSort_story as default
};
