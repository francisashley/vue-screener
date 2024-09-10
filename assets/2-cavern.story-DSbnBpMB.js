import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, ax as createBaseVNode, aw as createVNode, aB as createCommentVNode } from "./vendor-DkvGWHs0.js";
import { _ as _export_sfc, u as useScreener, S as Screener, a as ScreenerSearch, b as ScreenerSearchOptions, c as ScreenerPagination } from "./use-screener-DwJAgkUi.js";
import { b as baseData } from "./data-BnlYeNVr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2-cavern.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener(baseData, {
      columnDefs: {
        before: { label: "", width: "1fr", order: 0 },
        id: { width: "min-content", order: 1 },
        first_name: { width: "min-content", order: 2 },
        last_name: { width: "1fr", order: 3 },
        full_name: { width: "1fr", order: 4 },
        email: { width: "1fr", order: 5 },
        gender: { width: "1fr", order: 6 },
        ip_address: { width: "1fr", order: 7 },
        after: { label: "", width: "1fr", order: 8 }
      }
    });
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
const _hoisted_1 = { class: "vsc-bg-[#171717] vsc-min-h-[calc(100vh_-_16px)]" };
const _hoisted_2 = { class: "vsc-flex vsc-p-4 vsc-justify-between vsc-items-center vsc-text-white" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    textContent: "Cavern theme",
    class: "vsc-text-base vsc-mb-0"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = { class: "vsc-flex vsc-items-center vsc-gap-2" };
const _hoisted_5 = { class: "vsc-p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "2. Cavern theme",
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
                class: "vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-text-white vsc-h-[30px]"
              }
            }, null, 8, ["screener"]),
            createVNode($setup["ScreenerSearchOptions"], {
              screener: $setup.screener,
              ui: {
                class: "vsc-border-[#2a2b2b] vsc-bg-[#171717] vsc-p-px vsc-h-[30px]",
                toggleButton: {
                  class: "vsc-bg-transparent hover:vsc-bg-[#2a2b2b] vsc-text-white vsc-rounded-sm vsc-w-[26px] vsc-h-[26px]",
                  activeClass: "!vsc-bg-[#3e51b5]"
                }
              }
            }, null, 8, ["screener"])
          ])
        ]),
        createVNode($setup["Screener"], {
          screener: $setup.screener,
          ui: {
            tableView: {
              table: {
                class: "vsc-border-transparent",
                header: {
                  cell: {
                    class: "vsc-bg-transparent vsc-border-transparent vsc-uppercase vsc-text-[10px] vsc-h-6 vsc-py-0"
                  }
                },
                row: {
                  class: "vsc-border-gray-700 vsc-font-medium vsc-text-[10px] vsc-text-uppercase vsc-p-2 hover:vsc-bg-[#242424] vsc-border-[#2a2b2b]",
                  cell: {
                    class: "vsc-bg-transparent vsc-border-transparent vsc-text-[11px]"
                  }
                }
              }
            }
          }
        }, null, 8, ["screener"]),
        createBaseVNode("div", _hoisted_5, [
          !$setup.screener.hasError.value ? (openBlock(), createBlock($setup["ScreenerPagination"], {
            key: 0,
            screener: $setup.screener,
            ui: {
              nav: {
                button: {
                  class: "vsc-text-white vsc-h-7 vsc-py-0 vsc-px-5 vsc-bg-[#171717] hover:vsc-bg-[#2a2b2b] vsc-border-[#2a2b2b] hover:vsc-border-[#2a2b2b]",
                  // eslint-disable-line
                  activeClass: "!vsc-border-[#2a2b2b] vsc-text-[#2463eb]"
                }
              },
              leftSide: {
                class: "vsc-text-xs vsc-min-w-[150px]"
              },
              rightSide: {
                perPageInput: {
                  class: "vsc-bg-[#171717] vsc-border-[#2a2b2b] vsc-text-white vsc-h-7"
                }
              }
            }
          }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/3-theming/2-cavern.story.vue";
const _2Cavern_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/stories/3-theming/2-cavern.story.vue"]]);
export {
  _2Cavern_story as default
};
