import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BLXYcHgQ.js";
import { D as DevSandbox } from "./Sandbox-C3d35XFv.js";
import { m as mixedObjectsData } from "./mix-objects-data-Ds6Uxao6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-array-of-mixed-objects.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(mixedObjectsData);
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
    title: "3. Array of mixed objects",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Array of mixed objects",
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
_sfc_main.__file = "src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue";
const _3ArrayOfMixedObjects_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue"]]);
export {
  _3ArrayOfMixedObjects_story as default
};
