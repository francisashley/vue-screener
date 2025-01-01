import { ar as defineComponent, aF as twMerge, at as openBlock, aC as createElementBlock, ax as createBaseVNode, aG as toDisplayString, aB as createCommentVNode, aA as createTextVNode, aw as createVNode, aH as renderSlot, aI as normalizeClass } from "./vendor-5jMRr-pA.js";
import { _ as _export_sfc, e as VueScreenerPagination, c as VueScreenerSearch, d as VueScreenerSearchOptions } from "./VueScreenerSearchOptions-DiE3bW7o.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sandbox",
  props: {
    screener: { type: Object, required: true },
    title: { type: String, required: true },
    canToggleEditable: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get VueScreenerPagination() {
      return VueScreenerPagination;
    }, get VueScreenerSearch() {
      return VueScreenerSearch;
    }, get VueScreenerSearchOptions() {
      return VueScreenerSearchOptions;
    }, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-flex vsc-justify-between vsc-items-center" };
const _hoisted_2 = {
  key: 0,
  class: "vsc-font-normal vsc-text-base vsc-mb-0 vsc-text-zinc-300"
};
const _hoisted_3 = { class: "vsc-flex vsc-items-center vsc-gap-2" };
const _hoisted_4 = {
  key: 0,
  class: "vsc-gap-2 vsc-flex vsc-text-zinc-300"
};
const _hoisted_5 = ["checked"];
const _hoisted_6 = { class: "vsc-py-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("vsc-bg-zinc-800 vsc-rounded-lg vsc-p-4", $setup.props.class))
    },
    [
      createBaseVNode("div", _hoisted_1, [
        $props.title ? (openBlock(), createElementBlock(
          "h3",
          _hoisted_2,
          toDisplayString($props.title),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_3, [
          $props.canToggleEditable ? (openBlock(), createElementBlock("label", _hoisted_4, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: $props.screener.preferences.value.editable,
              onClick: _cache[0] || (_cache[0] = ($event) => $props.screener.preferences.value.editable = !$props.screener.preferences.value.editable)
            }, null, 8, _hoisted_5),
            createTextVNode(" Editable ")
          ])) : createCommentVNode("v-if", true),
          createVNode($setup["VueScreenerSearch"], { screener: $props.screener }, null, 8, ["screener"]),
          createVNode($setup["VueScreenerSearchOptions"], { screener: $props.screener }, null, 8, ["screener"])
        ])
      ]),
      createBaseVNode("div", _hoisted_6, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createVNode($setup["VueScreenerPagination"], { screener: $props.screener }, null, 8, ["screener"])
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/dev/Sandbox.vue";
const DevSandbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/dev/Sandbox.vue"]]);
export {
  DevSandbox as D
};
