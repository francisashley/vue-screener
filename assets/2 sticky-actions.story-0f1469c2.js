import { aq as defineComponent, ar as reactive, as as watch, at as resolveComponent, au as openBlock, av as createBlock, aw as withCtx, ax as createVNode, ay as normalizeProps, az as guardReactiveProps, aA as createTextVNode, aB as createBaseVNode } from "./vendor-e300ac54.js";
import { _ as _export_sfc, V as VueScreener, H as HeaderCell, a as ValueCell } from "./VueScreener-faf598f6.js";
import { b as baseData, p as primitivesData } from "./primitives-data-4454990d.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2 sticky-actions.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const options = {
      "array-of-objects": "Array of objects",
      "array-of-primitives": "Array of primitives",
      "array-of-mixed-objects": "Array of mixed objects",
      "bad-data": "Bad data"
    };
    const state = reactive({
      select: "array-of-objects",
      data: baseData
    });
    watch(
      () => state.select,
      () => {
        switch (state.select) {
          case "array-of-objects":
            state.data = baseData;
            break;
          case "array-of-primitives":
            state.data = primitivesData;
            break;
          case "array-of-mixed-objects":
            state.data = [
              { type: "fruit", name: "Orange" },
              { id: 122, address: "42 Park Avenue" },
              {
                country: "UK",
                name: "Great Britain",
                flag_colours: "Red, white and blue"
              }
            ];
            break;
          case "bad-data":
            state.data = ["a", "b", "c", "d"];
            break;
        }
        console.log("a", state.select);
      }
    );
    const handleClickEdit = (cell) => console.log("edit", cell);
    const handleClickDelete = (cell) => console.log("delete", cell);
    const __returned__ = { options, state, handleClickEdit, handleClickDelete, get VueScreener() {
      return VueScreener;
    }, HeaderCell, ValueCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", gap: "4px" } };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "default" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $setup.state.select,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.select = $event),
            title: "Data",
            options: $setup.options
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["VueScreener"], {
            data: $setup.state.data,
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
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickEdit(props.cell)
                      }, "Edit", 8, _hoisted_2),
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickDelete(props.cell)
                      }, "Delete", 8, _hoisted_3)
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2 sticky-actions.story.vue";
const _2_stickyActions_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2 sticky-actions.story.vue"]]);
export {
  _2_stickyActions_story as default
};