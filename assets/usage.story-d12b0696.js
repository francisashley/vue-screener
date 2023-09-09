import { aq as defineComponent, ar as reactive, as as watch, at as resolveComponent, au as openBlock, av as createBlock, aw as withCtx, ax as createVNode } from "./vendor-91e65c6f.js";
import { _ as _export_sfc, b as baseData, p as primitivesData, a as VueScreener } from "./primitives-data-7f39503b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "usage.story",
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
    const __returned__ = { options, state, get VueScreener() {
      return VueScreener;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
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
            data: $setup.state.data
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
_sfc_main.__file = "src/stories/usage.story.vue";
const usage_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/usage.story.vue"]]);
export {
  usage_story as default
};
