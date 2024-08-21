import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BLXYcHgQ.js";
import { D as DevSandbox } from "./Sandbox-C3d35XFv.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "7-sort-default-sort.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      defaultSort: { field: "first_name", direction: "desc" }
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
    title: "7. Sorting / Default sort",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Custom title",
        screener: $setup.screener
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], {
            screener: $setup.screener,
            ui: {
              tableView: {
                table: {
                  header: {
                    cell: { class: "vsc-text-blue-500", sortingClass: "!vsc-text-[gold]" }
                  }
                }
              }
            }
          }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1-basic-usage/7-sort-default-sort.story.vue";
const _7SortDefaultSort_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/1-basic-usage/7-sort-default-sort.story.vue"]]);
export {
  _7SortDefaultSort_story as default
};
