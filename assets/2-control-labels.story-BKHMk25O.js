import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode } from "./vendor-C63b5-kq.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-BLtURJGO.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData } from "./primitives-data-BLkuaWoG.js";
import { m as mixedObjectsData } from "./mix-objects-data-Ds6Uxao6.js";
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
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    }, get ScreenerPagination() {
      return ScreenerPagination;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Results",
    style: { fontWeight: 600, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Results",
    style: { fontWeight: 600, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_9 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Results",
    style: { fontWeight: 600, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_11 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "2. Control labels",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode($setup["ScreenerSearch"], { screener: $setup.screener1 }, null, 8, ["screener"]),
          createVNode($setup["ScreenerSearchOptions"], { screener: $setup.screener1 }, null, 8, ["screener"])
        ])
      ]),
      createVNode($setup["Screener"], {
        screener: $setup.screener1,
        style: { marginBottom: "16px" }
      }, null, 8, ["screener"]),
      createVNode($setup["ScreenerPagination"], { screener: $setup.screener1 }, null, 8, ["screener"]),
      _hoisted_4,
      createBaseVNode("div", _hoisted_5, [
        _hoisted_6,
        createBaseVNode("div", _hoisted_7, [
          createVNode($setup["ScreenerSearch"], { screener: $setup.screener2 }, null, 8, ["screener"]),
          createVNode($setup["ScreenerSearchOptions"], { screener: $setup.screener2 }, null, 8, ["screener"])
        ])
      ]),
      createVNode($setup["Screener"], {
        screener: $setup.screener2,
        style: { marginBottom: "16px" }
      }, null, 8, ["screener"]),
      createVNode($setup["ScreenerPagination"], { screener: $setup.screener2 }, null, 8, ["screener"]),
      _hoisted_8,
      createBaseVNode("div", _hoisted_9, [
        _hoisted_10,
        createBaseVNode("div", _hoisted_11, [
          createVNode($setup["ScreenerSearch"], { screener: $setup.screener3 }, null, 8, ["screener"]),
          createVNode($setup["ScreenerSearchOptions"], { screener: $setup.screener3 }, null, 8, ["screener"])
        ])
      ]),
      createVNode($setup["Screener"], {
        screener: $setup.screener3,
        style: { marginBottom: "16px" }
      }, null, 8, ["screener"]),
      createVNode($setup["ScreenerPagination"], { screener: $setup.screener3 }, null, 8, ["screener"])
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
