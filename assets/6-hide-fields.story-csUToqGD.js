import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-BU1pZ-lL.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BY7tALh7.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-CovMIZhP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "6-hide-fields.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      columnDefs: {
        id: { hidden: true, order: 0 },
        first_name: { hidden: true, order: 1 },
        last_name: { hidden: true, order: 2 }
      }
    });
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
    title: "6. Hide fields",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Results",
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
_sfc_main.__file = "src/stories/2-configure-columns/6-hide-fields.story.vue";
const _6HideFields_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/6-hide-fields.story.vue"]]);
export {
  _6HideFields_story as default
};
