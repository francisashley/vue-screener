import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BjHKTJun.js";
import { _ as _export_sfc, u as useVueScreener, b as baseData, V as VueScreener } from "./data-qTo4tToe.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4-disable-search highlight.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useVueScreener(baseData, {
      disableSearchHighlight: true,
      columns: {
        id: {
          width: "minmax(50px, max-content)"
        }
      }
    });
    const __returned__ = { screener, get VueScreener() {
      return VueScreener;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-p-4 vsc-bg-zinc-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "4. Disable search highlight",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener,
          title: "Custom title"
        }, null, 8, ["screener"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/4-disable-search highlight.story.vue";
const _4DisableSearch_highlight_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/4-disable-search highlight.story.vue"]]);
export {
  _4DisableSearch_highlight_story as default
};
