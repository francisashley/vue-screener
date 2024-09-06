import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode } from "./vendor-BU1pZ-lL.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-CTuEq1Lt.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-CXuKwcMg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-extra-columns.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      columnDefs: {
        id: { width: "50px", order: 0 },
        first_name: { width: "150px", order: 1 },
        last_name: { width: "150px", order: 2 },
        full_name: { width: "150px", order: 3 },
        email: { width: "200px", order: 4 },
        gender: { width: "100px", order: 5 },
        ip_address: { width: "minmax(150px, 1fr)", order: 6 },
        extra_column: { width: "100px", order: 7 }
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
    title: "3. Extra columns",
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
_sfc_main.__file = "src/stories/2-configure-columns/3-extra-columns.story.vue";
const _3ExtraColumns_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/3-extra-columns.story.vue"]]);
export {
  _3ExtraColumns_story as default
};
