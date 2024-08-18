import { aq as defineComponent, ar as resolveComponent, as as openBlock, at as createBlock, au as withCtx, av as createBaseVNode, aw as createVNode, ax as normalizeProps, ay as mergeProps, az as createTextVNode, aA as createCommentVNode } from "./vendor-C63b5-kq.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination, d as ScreenerHeaderCell, e as ScreenerBodyCell } from "./use-screener-CgWBEOP5.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4-pin-to-side.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleClickEdit = (item) => console.log("edit", item);
    const handleClickDelete = (item) => console.log("delete", item);
    const screener = useScreener(baseData, {
      pick: ["id", "first_name", "last_name", "full_name", "email", "gender", "ip_address", "actions"],
      config: {
        actions: { field: "actions", isPinned: true }
      }
    });
    const __returned__ = { handleClickEdit, handleClickDelete, screener, get Screener() {
      return Screener;
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    }, get ScreenerPagination() {
      return ScreenerPagination;
    }, ScreenerHeaderCell, ScreenerBodyCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Results",
    style: { fontWeight: 400, fontSize: "16px", margin: 0 }
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = { style: { display: "flex", alignItems: "center", gap: "8px" } };
const _hoisted_4 = { style: { display: "flex", gap: "4px" } };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "4. Pin to the side",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createVNode($setup["ScreenerSearch"], { screener: $setup.screener }, null, 8, ["screener"]),
          createVNode($setup["ScreenerSearchOptions"], { screener: $setup.screener }, null, 8, ["screener"])
        ])
      ]),
      createVNode($setup["Screener"], {
        screener: $setup.screener,
        style: { marginBottom: "12px" }
      }, {
        head: withCtx((props) => [
          props.column.isPinned ? (openBlock(), createBlock(
            $setup["ScreenerHeaderCell"],
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
            $setup["ScreenerBodyCell"],
            normalizeProps(mergeProps({ key: 0 }, props)),
            {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("button", {
                    onClick: ($event) => $setup.handleClickEdit(props.item)
                  }, "Edit", 8, _hoisted_5),
                  createBaseVNode("button", {
                    onClick: ($event) => $setup.handleClickDelete(props.column)
                  }, "Delete", 8, _hoisted_6)
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
      }, 8, ["screener"]),
      createVNode($setup["ScreenerPagination"], { screener: $setup.screener }, null, 8, ["screener"])
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
