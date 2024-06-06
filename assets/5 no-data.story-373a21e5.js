import { aq as defineComponent, at as resolveComponent, au as openBlock, av as createBlock, aw as withCtx, ax as createVNode } from "./vendor-e300ac54.js";
import { _ as _export_sfc, V as VueScreener } from "./VueScreener-faf598f6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "5 no-data.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get VueScreener() {
      return VueScreener;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "default" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: [] })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/5 no-data.story.vue";
const _5_noData_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/5 no-data.story.vue"]]);
export {
  _5_noData_story as default
};
