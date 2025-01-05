import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BJ2uxNJx.js";
import { _ as _export_sfc, V as VueScreener, b as baseData } from "./data-Bb_gaFmt.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "6-hide-fields.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-p-4 vsc-bg-zinc-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "6. Hide fields",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.baseData,
          columns: {
            id: { hidden: true, order: 0 },
            first_name: { hidden: true, order: 1 },
            last_name: { hidden: true, order: 2 }
          }
        }, null, 8, ["data"])
      ])
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
