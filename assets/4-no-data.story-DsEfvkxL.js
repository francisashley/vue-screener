import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-D_B1VaJJ.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-DCnq0APj.js";
import { D as DevSandbox } from "./Sandbox-avwugu40.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4-no-data.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(null);
    const __returned__ = { screener, get Screener() {
      return Screener;
    }, DevSandbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "4. No data",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "No data",
        screener: $setup.screener
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], { screener: $setup.screener }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/4-no-data.story.vue";
const _4NoData_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/4-no-data.story.vue"]]);
export {
  _4NoData_story as default
};
