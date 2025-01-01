import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-BgGZQa4R.js";
import { _ as _export_sfc, u as useVueScreener, V as VueScreener } from "./VueScreenerSearchOptions-BQ-7WraI.js";
import { D as DevSandbox } from "./Sandbox-D72xCFqx.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-array-of-objects.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useVueScreener(baseData);
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
    title: "1. Array of objects",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Array of objects",
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
_sfc_main.__file = "src/stories/1-basic-usage/1-array-of-objects.story.vue";
const _1ArrayOfObjects_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/1-array-of-objects.story.vue"]]);
export {
  _1ArrayOfObjects_story as default
};