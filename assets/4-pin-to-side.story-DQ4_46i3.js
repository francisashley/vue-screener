import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createVNode, ay as normalizeProps, az as mergeProps, aA as createTextVNode, aB as createCommentVNode, ax as createBaseVNode } from "./vendor-BgGZQa4R.js";
import { _ as _export_sfc, u as useVueScreener, V as VueScreener, a as VueScreenerTableCell, b as VueScreenerTableHeadCell } from "./VueScreenerSearchOptions-BQ-7WraI.js";
import { b as baseData } from "./data-BnlYeNVr.js";
import { D as DevSandbox } from "./Sandbox-D72xCFqx.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4-pin-to-side.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (row) => console.log("edit", row);
    const handleClickDelete = (row) => console.log("delete", row);
    const screener = useVueScreener(baseData, {
      columns: {
        actions: { isPinned: true }
      }
    });
    const __returned__ = { handleClickEdit, handleClickDelete, screener, get VueScreener() {
      return VueScreener;
    }, VueScreenerTableCell, VueScreenerTableHeadCell, DevSandbox };
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
          createVNode($setup["VueScreener"], {
            screener: $setup.screener,
            style: { marginBottom: "12px" }
          }, {
            "header-cell": withCtx((props) => [
              props.column.isPinned ? (openBlock(), createBlock(
                $setup["VueScreenerTableHeadCell"],
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
            "body-cell": withCtx((props) => [
              props.column.isPinned ? (openBlock(), createBlock(
                $setup["VueScreenerTableCell"],
                normalizeProps(mergeProps({ key: 0 }, props)),
                {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("button", {
                        onClick: ($event) => $setup.handleClickEdit(props.row),
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
