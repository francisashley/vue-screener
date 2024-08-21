import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BLXYcHgQ.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-C3d35XFv.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "9-format-column.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      pick: ["id", "first_name", "last_name", "ip_address"],
      config: {
        id: { field: "id", width: "50px" },
        first_name: { field: "first_name", width: "150px", format: (value) => "😎" + value + "😎" },
        last_name: { field: "last_name", width: "150px", format: (value) => "😎" + value + "😎" },
        ip_address: {
          field: "ip_address",
          width: "minmax(150px, 1fr)",
          isSortable: false,
          format: (value) => "😎" + value + "😎"
        }
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
    title: "9. Format column",
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
_sfc_main.__file = "src/stories/2-configure-columns/9-format-column.story.vue";
const _9FormatColumn_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/9-format-column.story.vue"]]);
export {
  _9FormatColumn_story as default
};