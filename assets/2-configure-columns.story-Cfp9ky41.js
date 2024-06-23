import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createVNode, aw as normalizeProps, ax as mergeProps, ay as createTextVNode, az as createCommentVNode, aA as createBaseVNode } from "./vendor-DadODwuJ.js";
import { _ as _export_sfc, V as VueScreener, H as Head, D as Data } from "./VueScreener-C0uH8wex.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { p as primitivesData, m as mixedObjectsData } from "./mix-objects-data-D5HdiZTi.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-configure-columns.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (item) => console.log("edit", item);
    const handleClickDelete = (item) => console.log("delete", item);
    const __returned__ = { handleClickEdit, handleClickDelete, get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    }, get primitivesData() {
      return primitivesData;
    }, get mixedObjectsData() {
      return mixedObjectsData;
    }, Head, Data };
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = { style: { display: "flex", gap: "4px" } };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["onClick"];
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
            config: {
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
            config: {
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
            config: {
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
        title: "Control labels",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            config: {
              id: { field: "id", label: "ID" },
              first_name: { field: "first_name", label: "First name" },
              last_name: { field: "last_name", label: "Last name" },
              full_name: { field: "full_name", label: "Full name" },
              email: { field: "email", label: "Email" },
              gender: { field: "gender", label: "Gender" },
              ip_address: { field: "ip_address", label: "IP address" }
            }
          }, null, 8, ["data"]),
          _hoisted_3,
          createVNode($setup["VueScreener"], {
            data: $setup.primitivesData,
            config: {
              0: { field: 0, label: "ID" },
              1: { field: 1, label: "First name" },
              2: { field: 2, label: "Last name" },
              3: { field: 3, label: "Email" },
              4: { field: 4, label: "Gender" },
              5: { field: 5, label: "IP address" }
            }
          }, null, 8, ["data"]),
          _hoisted_4,
          createVNode($setup["VueScreener"], {
            data: $setup.mixedObjectsData,
            pick: ["id", "name", "address", "country", "flag_colours"],
            config: {
              id: { field: "id", label: "ID" },
              name: { field: "name", label: "Name" },
              address: { field: "address", label: "Address" },
              country: { field: "country", label: "Country" },
              flag_colours: { field: "flag_colours", label: "Flag colours" }
            }
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Extra columns",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            pick: ["id", "first_name", "last_name", "full_name", "email", "gender", "ip_address", "extra_column"],
            config: {
              id: { field: "id", width: "50px" },
              first_name: { field: "first_name", width: "150px" },
              last_name: { field: "last_name", width: "150px" },
              full_name: { field: "full_name", width: "150px" },
              email: { field: "email", width: "200px" },
              gender: { field: "gender", width: "100px" },
              ip_address: { field: "ip_address", width: "minmax(150px, 1fr)" },
              extra_column: { width: "100px" }
            }
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Pin to the side",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            pick: ["id", "first_name", "last_name", "full_name", "email", "gender", "ip_address", "actions"],
            config: {
              actions: { field: "actions", isPinned: true }
            }
          }, {
            head: withCtx((props) => [
              props.column.isPinned ? (openBlock(), createBlock(
                $setup["Head"],
                normalizeProps(mergeProps({ key: 0 }, props)),
                {
                  default: withCtx(() => [
                    createTextVNode("Actions")
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true)
            ]),
            data: withCtx((props) => [
              props.column.isPinned ? (openBlock(), createBlock(
                $setup["Data"],
                normalizeProps(mergeProps({ key: 0 }, props)),
                {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickEdit(props.item)
                      }, "Edit", 8, _hoisted_6),
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickDelete(props.column)
                      }, "Delete", 8, _hoisted_7)
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true)
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
      }),
      createVNode(_component_Variant, {
        title: "Disable sort",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
            pick: ["id", "first_name", "last_name", "ip_address"],
            config: {
              id: { field: "id", width: "50px" },
              first_name: { field: "first_name", width: "150px" },
              last_name: { field: "last_name", width: "150px" },
              ip_address: { field: "ip_address", width: "minmax(150px, 1fr)", isSortable: false }
            }
          }, null, 8, ["data"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Format column",
        width: "100"
      }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.baseData,
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
          }, null, 8, ["data", "config"])
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
