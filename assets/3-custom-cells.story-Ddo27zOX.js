import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createVNode, aA as mergeProps, az as createBaseVNode, ay as createTextVNode } from "./vendor-iGRY5S0P.js";
import { _ as _export_sfc, H as HeaderCell, a as ValueCell, V as VueScreener } from "./VueScreener-BYUygs3F.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "3-custom-cells.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get HeaderCell() {
      return HeaderCell;
    }, get ValueCell() {
      return ValueCell;
    }, get VueScreener() {
      return VueScreener;
    }, get baseData() {
      return baseData;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "3) Custom Cells" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "default" }, {
        default: withCtx(() => [
          createVNode($setup["VueScreener"], { data: $setup.baseData }, {
            "header-cell": withCtx((props) => [
              createVNode(
                $setup["HeaderCell"],
                mergeProps(props, { style: { background: "red" } }),
                {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      innerHTML: props.cell.value
                    }, null, 8, _hoisted_1),
                    createTextVNode(" [stuff] ")
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1040
                /* FULL_PROPS, DYNAMIC_SLOTS */
              )
            ]),
            "value-cell": withCtx((props) => [
              createVNode(
                $setup["ValueCell"],
                mergeProps(props, { style: { background: "blue" } }),
                {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      innerHTML: props.highlight(String(props.cell.value), props.highlightValue)
                    }, null, 8, _hoisted_2),
                    createTextVNode(" [stuff] ")
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
_sfc_main.__file = "src/stories/3-custom-cells.story.vue";
const _3CustomCells_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/3-custom-cells.story.vue"]]);
export {
  _3CustomCells_story as default
};
