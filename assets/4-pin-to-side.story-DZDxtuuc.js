import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ay as normalizeProps, az as mergeProps, aA as createTextVNode, aB as createCommentVNode, ax as createBaseVNode } from "./vendor-DkvGWHs0.js";
import { _ as _export_sfc, u as useScreener, S as Screener, T as TableCell } from "./use-screener-De4zNbQY.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-BRn05viR.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4-pin-to-side.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (item) => console.log("edit", item);
    const handleClickDelete = (item) => console.log("delete", item);
    const screener = useScreener(baseData, {
      columnDefs: {
        actions: { isSticky: true }
      }
    });
    const __returned__ = { handleClickEdit, handleClickDelete, screener, get Screener() {
      return Screener;
    }, TableCell, DevSandbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", gap: "5px", padding: "3px 0" } };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "4. Stick to the side",
    source: "-"
  }, {
    default: withCtx(() => [
      createVNode($setup["DevSandbox"], {
        title: "Results",
        screener: $setup.screener
      }, {
        default: withCtx(() => [
          createVNode($setup["Screener"], {
            screener: $setup.screener,
            style: { marginBottom: "12px" }
          }, {
            "table-head": withCtx((props) => [
              props.column.isSticky ? (openBlock(), createBlock(
                $setup["TableCell"],
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
            "table-cell": withCtx((props) => [
              props.column.isSticky ? (openBlock(), createBlock(
                $setup["TableCell"],
                normalizeProps(mergeProps({ key: 0 }, props)),
                {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickEdit(props.item),
                        class: "vsc-border vsc-border-black vsc-rounded vsc-px-1.5 vsc-py-0.5 vsc-leading-none vsc-text-xs vsc-bg-neutral-100 vsc-text-black"
                      }, " Edit ", 8, _hoisted_2),
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickDelete(props.column),
                        class: "vsc-border vsc-border-black vsc-rounded vsc-px-1.5 vsc-py-0.5 vsc-leading-none vsc-text-xs vsc-bg-neutral-100 vsc-text-black"
                      }, " Delete ", 8, _hoisted_3)
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
          }, 8, ["screener"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["screener"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2-configure-columns/4-pin-to-side.story.vue";
const _4PinToSide_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/2-configure-columns/4-pin-to-side.story.vue"]]);
export {
  _4PinToSide_story as default
};
