import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ax as createBaseVNode } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, u as useScreener, S as Screener } from "./use-screener-BLXYcHgQ.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData } from "./primitives-data-BLkuaWoG.js";
import { m as mixedObjectsData } from "./mix-objects-data-Ds6Uxao6.js";
import { D as DevSandbox } from "./Sandbox-C3d35XFv.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-control-labels.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener1 = useScreener(baseData, {
      config: {
        id: { field: "id", label: "ID" },
        first_name: { field: "first_name", label: "First name" },
        last_name: { field: "last_name", label: "Last name" },
        full_name: { field: "full_name", label: "Full name" },
        email: { field: "email", label: "Email" },
        gender: { field: "gender", label: "Gender" },
        ip_address: { field: "ip_address", label: "IP address" }
      }
    });
    const screener2 = useScreener(primitivesData, {
      config: {
        0: { field: 0, label: "ID" },
        1: { field: 1, label: "First name" },
        2: { field: 2, label: "Last name" },
        3: { field: 3, label: "Email" },
        4: { field: 4, label: "Gender" },
        5: { field: 5, label: "IP address" }
      }
    });
    const screener3 = useScreener(mixedObjectsData, {
      pick: ["id", "name", "address", "country", "flag_colours"],
      config: {
        id: { field: "id", label: "ID" },
        name: { field: "name", label: "Name" },
        address: { field: "address", label: "Address" },
        country: { field: "country", label: "Country" },
        flag_colours: { field: "flag_colours", label: "Flag colours" }
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
    title: "2. Control labels",
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
_sfc_main.__file = "src/stories/2-configure-columns/2-control-labels.story.vue";
const _2ControlLabels_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/2-control-labels.story.vue"]]);
export {
  _2ControlLabels_story as default
};
