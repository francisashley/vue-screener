import { ar as defineComponent, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aw as createBaseVNode, ax as createVNode, aB as createElementBlock, aC as renderList, aD as Fragment } from "./vendor-BJ2uxNJx.js";
import { _ as _export_sfc, u as useVueScreener, b as baseData, V as VueScreener, d as VueScreenerSearch, e as VueScreenerPagination, f as VueScreenerPaginationRowsPerPage, g as VueScreenerPaginationResults, h as VueScreenerPaginationButtons, i as VueScreenerTableState, j as VueScreenerTableHead, c as VueScreenerTableHeadCell, k as VueScreenerTableRow, a as VueScreenerTableCell } from "./data-C1hZRF_F.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1-space.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useVueScreener(baseData, {
      columns: {
        id: {
          width: "minmax(50px, max-content)"
        }
      }
    });
    const __returned__ = { screener, get VueScreener() {
      return VueScreener;
    }, get VueScreenerSearch() {
      return VueScreenerSearch;
    }, get VueScreenerPagination() {
      return VueScreenerPagination;
    }, get VueScreenerPaginationRowsPerPage() {
      return VueScreenerPaginationRowsPerPage;
    }, get VueScreenerPaginationResults() {
      return VueScreenerPaginationResults;
    }, get VueScreenerPaginationButtons() {
      return VueScreenerPaginationButtons;
    }, get VueScreenerTableState() {
      return VueScreenerTableState;
    }, get VueScreenerTableHead() {
      return VueScreenerTableHead;
    }, get VueScreenerTableHeadCell() {
      return VueScreenerTableHeadCell;
    }, get VueScreenerTableRow() {
      return VueScreenerTableRow;
    }, get VueScreenerTableCell() {
      return VueScreenerTableCell;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vsc-bg-[#101827] vsc-p-4 vsc-min-h-[calc(100vh_-_16px)]" };
const _hoisted_2 = { class: "vsc-flex vsc-justify-between vsc-items-center vsc-mb-4 vsc-text-white" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vsc-text-base vsc-mb-0" },
  "Space theme",
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
            createVNode($setup["VueScreenerSearch"], {
              screener: $setup.screener,
              class: "vsc-border-[#374151] vsc-bg-[#1f2937] vsc-text-white",
              "toggle-button-class": "vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-text-white vsc-rounded-sm vsc-w-[25px] vsc-h-[25px]",
              "toggle-button-active-class": "vsc-bg-[#3e51b5]"
            }, null, 8, ["screener"])
          ])
        ]),
        createVNode($setup["VueScreener"], {
          screener: $setup.screener,
          class: "vsc-mb-4 vsc-border-gray-700"
        }, {
          table: withCtx(({ screener: internalScreener }) => [
            createVNode($setup["VueScreenerTableState"], { screener: internalScreener }, {
              default: withCtx(() => [
                createVNode($setup["VueScreenerTableHead"], { class: "vsc-border-gray-700" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.screener.columns.value, (column, i) => {
                        return openBlock(), createBlock($setup["VueScreenerTableHeadCell"], {
                          key: i,
                          screener: $setup.screener,
                          column,
                          text: column.label ?? column.field,
                          class: "vsc-bg-gray-800 vsc-border-gray-700"
                        }, null, 8, ["screener", "column", "text"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.screener.paginatedRows.value, (row, i) => {
                    return openBlock(), createBlock(
                      $setup["VueScreenerTableRow"],
                      {
                        key: i,
                        class: "vsc-border-gray-700"
                      },
                      {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList($setup.screener.columns.value, (column, j) => {
                              return openBlock(), createBlock($setup["VueScreenerTableCell"], {
                                key: j,
                                screener: $setup.screener,
                                column,
                                row,
                                class: "vsc-bg-gray-900 vsc-border-gray-700"
                              }, null, 8, ["screener", "column", "row"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["screener"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["screener"]),
        createVNode($setup["VueScreenerPagination"], { screener: $setup.screener }, {
          default: withCtx(() => [
            createVNode($setup["VueScreenerPaginationResults"], {
              total: $setup.screener.searchedRows.value.length ?? 0,
              "current-page": $setup.screener.searchQuery.value.page,
              "per-page": $setup.screener.searchQuery.value.rowsPerPage
            }, null, 8, ["total", "current-page", "per-page"]),
            createVNode($setup["VueScreenerPaginationButtons"], {
              total: $setup.screener.searchedRows.value.length,
              "per-page": $setup.screener.searchQuery.value.rowsPerPage,
              "current-page": $setup.screener.searchQuery.value.page,
              onGoTo: $setup.screener.actions.goToPage,
              "button-class": "vsc-bg-[#1f2937] hover:vsc-bg-[#374151] vsc-border-[#374151] hover:vsc-border-[#374151]",
              "active-button-class": "vsc-border-[#374151] vsc-text-[#2463eb]"
            }, null, 8, ["total", "per-page", "current-page", "onGoTo"]),
            createVNode($setup["VueScreenerPaginationRowsPerPage"], {
              value: $setup.screener.searchQuery.value.rowsPerPage,
              onChange: $setup.screener.actions.setPerPage,
              class: "vsc-ml-auto vsc-bg-[#1f2937] vsc-border-[#374151] vsc-text-white"
            }, null, 8, ["value", "onChange"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["screener"])
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
