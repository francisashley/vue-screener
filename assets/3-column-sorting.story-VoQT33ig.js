import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-B4nEsnDH.js";
import { _ as _export_sfc, V as VueScreener, b as baseData } from "./data-BAg6L1QX.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-column-sorting.story",
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = { class: "vsc-p-4 vsc-bg-zinc-800" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = { class: "vsc-p-4 vsc-bg-zinc-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "3. Sort columns",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          title: "Default sort field",
          data: $setup.baseData,
          "default-sort-field": "first_name",
          columns: { id: { width: "minmax(50px, max-content)" } }
        }, null, 8, ["data"])
      ]),
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["VueScreener"], {
          title: "Invert sort field",
          data: $setup.baseData,
          "default-sort-field": "first_name",
          columns: { id: { width: "minmax(50px, max-content)" }, first_name: { invertSort: true } }
        }, null, 8, ["data"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["VueScreener"], {
          title: "Default sort field direction",
          data: $setup.baseData,
          "default-sort-field": "first_name",
          "default-sort-direction": "asc",
          columns: { id: { width: "minmax(50px, max-content)" } }
        }, null, 8, ["data"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/3-column-sorting.story.vue";
const _3ColumnSorting_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/3-column-sorting.story.vue"]]);
export {
  _3ColumnSorting_story as default
};
