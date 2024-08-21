import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BLXYcHgQ.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData } from "./primitives-data-BLkuaWoG.js";
import { m as mixedObjectsData } from "./mix-objects-data-Ds6Uxao6.js";
import { D as DevSandbox } from "./Sandbox-C3d35XFv.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-control-widths.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener1 = useScreener(baseData, {
      config: {
        id: { field: "id", width: "50px" },
        first_name: { field: "first_name", width: "150px" },
        last_name: { field: "last_name", width: "150px" },
        full_name: { field: "full_name", width: "150px" },
        email: { field: "email", width: "200px" },
        gender: { field: "gender", width: "100px" },
        ip_address: { field: "ip_address", width: "minmax(150px, 1fr)" }
      }
    });
    const screener2 = useScreener(primitivesData, {
      config: {
        0: { field: 0, width: "50px" },
        1: { field: 1, width: "100px" },
        2: { field: 2, width: "100px" },
        3: { field: 3, width: "1fr" },
        4: { field: 4, width: "100px" },
        5: { field: 5, width: "150px" }
      }
    });
    const screener3 = useScreener(mixedObjectsData, {
      pick: ["id", "type", "name", "address", "country", "flag_colours"],
      config: {
        type: { field: "type", width: "75px" },
        name: { field: "name", width: "100px" },
        id: { field: "id", width: "50px" },
        address: { field: "address", width: "minmax(200px, 1fr)" },
        country: { field: "country", width: "100px" },
        flag_colours: { field: "flag_colours", width: "200px" }
      }
    });
    const __returned__ = { screener1, screener2, screener3, get Screener() {
      return Screener;
    }, DevSandbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "1. Control widths",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Results",
        screener: $setup.screener1
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], { screener: $setup.screener1 }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"]),
      _hoisted_1,
      createVNode($setup["DevSandbox"], {
        title: "Results",
        screener: $setup.screener2
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], { screener: $setup.screener2 }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"]),
      _hoisted_2,
      createVNode($setup["DevSandbox"], {
        title: "Results",
        screener: $setup.screener3
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], { screener: $setup.screener3 }, null, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/1-control-widths.story.vue";
const _1ControlWidths_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/1-control-widths.story.vue"]]);
export {
  _1ControlWidths_story as default
};
