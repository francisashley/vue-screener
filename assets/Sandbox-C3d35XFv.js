import { ar as defineComponent, at as openBlock, aC as createElementBlock, ax as createBaseVNode, aD as toDisplayString, aB as createCommentVNode, aw as createVNode, aE as renderSlot } from "./vendor-M4CYo89y.js";
import { _ as _export_sfc, c as ScreenerPagination, a as ScreenerSearch, b as ScreenerSearchOptions } from "./use-screener-BLXYcHgQ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sandbox",
  props: {
    screener: { type: Object, required: true },
    title: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get ScreenerPagination() {
      return ScreenerPagination;
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-bg-zinc-800 vsc-rounded-lg vsc-p-4" };
const _hoisted_2 = { class: "vsc-flex vsc-justify-between vsc-items-center" };
const _hoisted_3 = {
  key: 0,
  class: "vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300"
};
const _hoisted_4 = { class: "vsc-flex vsc-items-center vsc-gap-2" };
const _hoisted_5 = { class: "vsc-py-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      $props.title ? (openBlock(), createElementBlock(
        "h3",
        _hoisted_3,
        toDisplayString($props.title),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_4, [
        createVNode($setup["ScreenerSearch"], { screener: $props.screener }, null, 8, ["screener"]),
        createVNode($setup["ScreenerSearchOptions"], { screener: $props.screener }, null, 8, ["screener"])
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createVNode($setup["ScreenerPagination"], { screener: $props.screener }, null, 8, ["screener"])
  ]);
}
_sfc_main.__file = "src/components/dev/Sandbox.vue";
const DevSandbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/dev/Sandbox.vue"]]);
export {
  DevSandbox as D
};
