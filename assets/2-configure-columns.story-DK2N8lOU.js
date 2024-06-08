import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createVNode, aw as normalizeProps, ax as guardReactiveProps, ay as createTextVNode, az as createBaseVNode } from "./vendor-ZCGMzaIs.js";
import { _ as _export_sfc, V as VueScreener, H as HeaderCell, a as ValueCell } from "./VueScreener-jzm78S1M.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-configure-columns.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (cell) => console.log("edit", cell);
    const handleClickDelete = (cell) => console.log("delete", cell);
    const __returned__ = { handleClickEdit, handleClickDelete, get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    }, get primitivesData() {
      return primitivesData;
    }, get mixedObjectsData() {
      return mixedObjectsData;
    }, HeaderCell, ValueCell };
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
const _hoisted_3 = { style: { display: "flex", gap: "4px" } };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "2) Configure columns" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "Control widths",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            columns: {
              id: { field: "id", width: "50px" },
              first_name: { field: "first_name", width: "150px" },
              last_name: { field: "last_name", width: "150px" },
              full_name: { field: "full_name", width: "150px" },
              email: { field: "email", width: "200px" },
              gender: { field: "gender", width: "100px" },
              ip_address: { field: "ip_address", width: "minmax(150px, 1fr)" }
            }
          }, null, 8, ["data"]),
          _hoisted_1,
          createVNode($setup["VueScreener"], {
            data: $setup.primitivesData,
            columns: {
              0: { field: 0, width: "50px" },
              1: { field: 1, width: "100px" },
              2: { field: 2, width: "100px" },
              3: { field: 3, width: "1fr" },
              4: { field: 4, width: "100px" },
              5: { field: 5, width: "150px" }
            }
          }, null, 8, ["data"]),
          _hoisted_2,
          createVNode($setup["VueScreener"], {
            data: $setup.mixedObjectsData,
            pick: ["id", "type", "name", "address", "country", "flag_colours"],
            columns: {
              type: { field: "type", width: "75px" },
              name: { field: "name", width: "100px" },
              id: { field: "id", width: "50px" },
              address: { field: "address", width: "minmax(200px, 1fr)" },
              country: { field: "country", width: "100px" },
              flag_colours: { field: "flag_colours", width: "200px" }
            }
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Sticky Actions",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            "include-sticky-actions": ""
          }, {
            "sticky-actions-head": withCtx((props) => [
              createVNode(
                $setup["HeaderCell"],
                normalizeProps(guardReactiveProps(props)),
                {
                  default: withCtx(() => [
                    createTextVNode("Actions")
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )
            ]),
            "sticky-actions-value": withCtx((props) => [
              createVNode(
                $setup["ValueCell"],
                normalizeProps(guardReactiveProps(props)),
                {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickEdit(props.cell)
                      }, "Edit", 8, _hoisted_4),
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickDelete(props.cell)
                      }, "Delete", 8, _hoisted_5)
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Pick fields",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            pick: ["id", "first_name", "last_name"]
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Omit fields",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            omit: ["id", "first_name", "last_name"]
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Pick + omit fields",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            pick: ["id", "first_name", "last_name"],
            omit: ["id"]
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns.story.vue";
const _2ConfigureColumns_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns.story.vue"]]);
export {
  _2ConfigureColumns_story as default
};
