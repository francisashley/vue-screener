import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createVNode, aw as normalizeProps, ax as guardReactiveProps, ay as createTextVNode, az as createBaseVNode } from "./vendor-iGRY5S0P.js";
import { _ as _export_sfc, V as VueScreener, H as HeaderCell, a as ValueCell } from "./VueScreener-BYUygs3F.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-sticky-actions.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (cell) => console.log("edit", cell);
    const handleClickDelete = (cell) => console.log("delete", cell);
    const __returned__ = { handleClickEdit, handleClickDelete, get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    }, HeaderCell, ValueCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", gap: "4px" } };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "2) Sticky Actions" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "default",
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
_sfc_main.__file = "src/stories/2-sticky-actions.story.vue";
const _2StickyActions_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-sticky-actions.story.vue"]]);
export {
  _2StickyActions_story as default
};
