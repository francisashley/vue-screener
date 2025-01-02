import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode } from "./vendor-BjHKTJun.js";
import { _ as _export_sfc, u as useVueScreener, b as baseData, V as VueScreener } from "./data-qTo4tToe.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-control-labels.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener1 = useVueScreener(baseData, {
      columns: {
        id: { label: "ID", width: "max-content" },
        first_name: { label: "First name" },
        last_name: { label: "Last name" },
        full_name: { label: "Full name" },
        email: { label: "Email" },
        gender: { label: "Gender" },
        ip_address: { label: "IP address" }
      }
    });
    const screener2 = useVueScreener(primitivesData, {
      columns: {
        0: { label: "ID", width: "minmax(50px, max-content)" },
        1: { label: "First name" },
        2: { label: "Last name" },
        3: { label: "Email" },
        4: { label: "Gender" },
        5: { label: "IP address" }
      }
    });
    const screener3 = useVueScreener(mixedObjectsData, {
      columns: {
        id: { label: "ID", order: 0 },
        name: { label: "Name", order: 1 },
        address: { label: "Address", order: 2 },
        country: { label: "Country", order: 3 },
        flag_colours: { label: "Flag colours", order: 4 }
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
    title: "2. Control labels",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener1,
          title: "Results"
        }, null, 8, ["screener"])
      ]),
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener2,
          title: "Results"
        }, null, 8, ["screener"])
      ]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        createVNode($setup["VueScreener"], {
          screener: $setup.screener3,
          title: "Results"
        }, null, 8, ["screener"])
      ])
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
