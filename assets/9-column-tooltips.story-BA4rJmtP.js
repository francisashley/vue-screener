import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BJ2uxNJx.js";
import { _ as _export_sfc, V as VueScreener, b as baseData } from "./data-B2IrIHtJ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "9-column-tooltips.story",
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
    title: "9. Column tooltips",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.baseData,
          columns: {
            id: { info: "The ID column" },
            first_name: { info: "The First Name column" },
            last_name: { info: "The Last Name column" },
            full_name: { info: "The Full Name column" },
            email: { info: "The Email column" },
            gender: { info: "The Gender column" },
            ip_address: { info: "The IP column" }
          }
        }, null, 8, ["data"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/9-column-tooltips.story.vue";
const _9ColumnTooltips_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/9-column-tooltips.story.vue"]]);
export {
  _9ColumnTooltips_story as default
};
