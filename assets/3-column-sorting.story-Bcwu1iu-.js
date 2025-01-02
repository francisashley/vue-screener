import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BjHKTJun.js";
import { _ as _export_sfc, u as useVueScreener, b as baseData, V as VueScreener } from "./data-qTo4tToe.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-column-sorting.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener1 = useVueScreener(baseData, {
      defaultSortField: "first_name",
      columns: {
        id: { width: "minmax(50px, max-content)" }
      }
    });
    const screener2 = useVueScreener(baseData, {
      defaultSortField: "first_name",
      columns: {
        id: { width: "minmax(50px, max-content)" },
        first_name: { invertSort: true }
      }
    });
    const screener3 = useVueScreener(baseData, {
      defaultSortField: "first_name",
      defaultSortDirection: "asc",
      columns: {
        id: { width: "minmax(50px, max-content)" }
      }
    });
    const __returned__ = { screener1, screener2, screener3, get VueScreener() {
      return VueScreener;
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
          screener: $setup.screener1,
          title: "Default sort field"
        }, null, 8, ["screener"])
      ]),
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener2,
          title: "Invert sort field"
        }, null, 8, ["screener"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener3,
          title: "Default sort field direction"
        }, null, 8, ["screener"])
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
