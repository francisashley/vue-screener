import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-B4nEsnDH.js";
import { _ as _export_sfc, V as VueScreener, b as baseData } from "./data-DBjJt0Ql.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-extra-columns.story",
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
    title: "3. Extra columns",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Results",
          data: $setup.baseData,
          columns: {
            id: { width: "minmax(50px, max-content)", order: 0 },
            first_name: { width: "150px", order: 1 },
            last_name: { width: "150px", order: 2 },
            full_name: { width: "150px", order: 3 },
            email: { width: "200px", order: 4 },
            gender: { width: "100px", order: 5 },
            ip_address: { width: "minmax(150px, 1fr)", order: 6 },
            extra_column: { width: "100px", order: 7 }
          }
        }, null, 8, ["data"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/3-extra-columns.story.vue";
const _3ExtraColumns_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/3-extra-columns.story.vue"]]);
export {
  _3ExtraColumns_story as default
};
