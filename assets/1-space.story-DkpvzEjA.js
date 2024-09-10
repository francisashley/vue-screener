import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aw as createVNode, aB as createCommentVNode } from "./vendor-DkvGWHs0.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-DwJAgkUi.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-space.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData);
    const __returned__ = { screener, get Screener() {
      return Screener;
    }, get ScreenerSearch() {
      return ScreenerSearch;
    }, get ScreenerSearchOptions() {
      return ScreenerSearchOptions;
    }, get ScreenerPagination() {
      return ScreenerPagination;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-bg-[#101827] vsc-p-4 vsc-min-h-[calc(100vh_-_16px)]" };
const _hoisted_2 = { class: "vsc-flex vsc-justify-between vsc-items-center vsc-mb-4 vsc-text-white" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Space theme",
    class: "vsc-text-base vsc-mb-0"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "vsc-flex vsc-items-center vsc-gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "1. Space theme",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["ScreenerSearch"], {
              screener: $setup.screener,
              ui: {
                class: "vsc-border-[#374151] vsc-bg-[#1f2937] vsc-text-white"
              }
            }, null, 8, ["screener"]),
            createVNode($setup["ScreenerSearchOptions"], {
              screener: $setup.screener,
              ui: {
                class: "vsc-border-[#374151] vsc-bg-[#1f2937]",
                toggleButton: {
                  class: "vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-text-white vsc-rounded-sm vsc-w-[25px] vsc-h-[25px]",
                  activeClass: "!vsc-bg-[#3e51b5]"
                }
              }
            }, null, 8, ["screener"])
          ])
        ]),
        createVNode($setup["Screener"], {
          screener: $setup.screener,
          class: "vsc-mb-4",
          ui: {
            tableView: {
              table: {
                class: "vsc-border-gray-700",
                header: {
                  cell: {
                    class: "vsc-bg-gray-800 vsc-border-gray-700"
                  }
                },
                row: {
                  class: "vsc-border-gray-700",
                  cell: {
                    class: "vsc-bg-gray-900 vsc-border-gray-700"
                  }
                }
              }
            }
          },
          style: {
            "--vs-bg-color": "transparent",
            "--vs-border-color": "#4b5563",
            "--vs-text-color": "white",
            "--vs-border-radius": "8px",
            "--vs-cell-padding": "4px 8px",
            "--vs-header-cell-bg-color": "#1f2937"
          }
        }, null, 8, ["screener"]),
        !$setup.screener.hasError.value ? (openBlock(), createBlock($setup["ScreenerPagination"], {
          key: 0,
          screener: $setup.screener,
          ui: {
            nav: {
              button: {
                class: "vsc-text-white vsc-py-1 vsc-px-5 vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-border-[#374151] hover:vsc-border-[#374151]",
                // eslint-disable-line
                activeClass: "vsc-border-[#374151] vsc-text-[#2463eb]"
              }
            },
            leftSide: {
              class: "vsc-min-w-[150px]"
            },
            rightSide: {
              perPageInput: {
                class: "vsc-bg-[#1f2937] vsc-border-[#374151] vsc-text-white"
              }
            }
          }
        }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/3-theming/1-space.story.vue";
const _1Space_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/3-theming/1-space.story.vue"]]);
export {
  _1Space_story as default
};
