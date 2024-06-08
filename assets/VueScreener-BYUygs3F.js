import { aq as defineComponent, as as openBlock, aB as createElementBlock, aC as toDisplayString, az as createBaseVNode, at as createBlock, aD as createCommentVNode, aE as renderSlot, aF as normalizeClass, au as withCtx, aG as computed, aH as Fragment, aI as renderList, aJ as normalizeStyle, av as createVNode, ay as createTextVNode, aK as ref, aL as onMounted, aM as watch, aN as directive, aO as withDirectives, aP as Transition, aQ as withModifiers, aR as debounce, aS as orderBy, aw as normalizeProps, ax as guardReactiveProps } from "./vendor-iGRY5S0P.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "JsonView",
  props: {
    data: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = { class: "vs-json-view" };
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "pre",
    _hoisted_1$f,
    toDisplayString(JSON.stringify($props.data, null, 2)),
    1
    /* TEXT */
  );
}
_sfc_main$h.__file = "src/components/views/JsonView.vue";
const JsonView = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/JsonView.vue"]]);
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);
function escapeRegExp(string) {
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string || "";
}
function isValidRegExp(pattern) {
  try {
    new RegExp(pattern);
    return true;
  } catch (e) {
    return false;
  }
}
function highlightText(value, highlight) {
  if (["string", "number"].includes(typeof value) && highlight) {
    const highlightExp = new RegExp(escapeRegExp(highlight), "ig");
    return value.replace(highlightExp, (match) => `<mark>${match}</mark>`);
  }
  return value;
}
const _sfc_main$g = {};
const _hoisted_1$e = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
    class: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$6);
}
_sfc_main$g.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$f = {};
const _hoisted_1$d = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-up",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
    class: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$5 = [
  _hoisted_2$6
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$5);
}
_sfc_main$f.__file = "src/components/icons/SortUpIcon.vue";
const SortUpIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortUpIcon.vue"]]);
const _sfc_main$e = {};
const _hoisted_1$c = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
    class: ""
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$4);
}
_sfc_main$e.__file = "src/components/icons/SortDownIcon.vue";
const SortDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortDownIcon.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SortSelector",
  props: {
    sortDirection: { type: [null, String], required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SortIcon, SortUpIcon, SortDownIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = { class: "vs-sort-selector" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    $props.sortDirection === null ? (openBlock(), createBlock($setup["SortIcon"], {
      key: 0,
      class: "vs-sort-selector__icon vs-sort-selector__icon--none"
    })) : $props.sortDirection === "asc" ? (openBlock(), createBlock($setup["SortUpIcon"], {
      key: 1,
      class: "vs-sort-selector__icon vs-sort-selector__icon--asc"
    })) : $props.sortDirection === "desc" ? (openBlock(), createBlock($setup["SortDownIcon"], {
      key: 2,
      class: "vs-sort-selector__icon vs-sort-selector__icon--desc"
    })) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$d.__file = "src/components/stuff/SortSelector.vue";
const SortSelector = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/SortSelector.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TableViewCell",
  props: {
    cell: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = ["innerHTML"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        "vs-table-view__cell",
        $props.cell.isFirst && "vs-table-view__cell--is-first",
        $props.cell.isLast && "vs-table-view__cell--is-last",
        $props.cell.hasValue && "vs-table-view__cell--hasValue",
        $props.cell.isStickyAction && "vs-table-view__cell--is-sticky-action",
        $props.cell.type === "string" && "vs-table-view__cell--string",
        $props.cell.type === "number" && "vs-table-view__cell--number",
        $props.cell.type === "boolean" && "vs-table-view__cell--boolean",
        $props.cell.type === "symbol" && "vs-table-view__cell--symbol",
        $props.cell.type === "undefined" && "vs-table-view__cell--undefined",
        $props.cell.type === "object" && "vs-table-view__cell--object",
        $props.cell.type === "null" && "vs-table-view__cell--null"
      ])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.cell.highlightedValue
        }, null, 8, _hoisted_1$a)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$c.__file = "src/components/views/TableViewCell.vue";
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewCell.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TableViewHeaderCell",
  props: {
    cell: { type: Object, required: true },
    sortDirection: { type: [null, String], required: false },
    isSortable: { type: Boolean, required: false }
  },
  emits: ["on-sort"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const handleClickHeader = () => {
      emit("on-sort", props.cell.field);
    };
    const __returned__ = { props, emit, handleClickHeader, SortSelector, TableCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = ["innerHTML"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TableCell"], {
    class: normalizeClass([
      "vs-table-view__cell--is-header",
      $props.isSortable && "vs-table-view__cell--is-sortable",
      $props.cell.isStickyAction && "vs-table-view__cell--is-sticky"
    ]),
    cell: $props.cell,
    onClick: $setup.handleClickHeader
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.cell.value
        }, null, 8, _hoisted_1$9)
      ]),
      $props.isSortable ? (openBlock(), createBlock($setup["SortSelector"], {
        key: 0,
        "sort-direction": $props.sortDirection
      }, null, 8, ["sort-direction"])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "cell"]);
}
_sfc_main$b.__file = "src/components/views/TableViewHeaderCell.vue";
const HeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewHeaderCell.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TableViewValueCell",
  props: {
    cell: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { TableCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TableCell"], {
    cell: $props.cell,
    class: normalizeClass(["vs-table-view__cell--is-value", $props.cell.isStickyAction && "vs-table-view__cell--is-sticky"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["cell", "class"]);
}
_sfc_main$a.__file = "src/components/views/TableViewValueCell.vue";
const ValueCell = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewValueCell.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TableView",
  props: {
    screener: { type: Object, required: true },
    fields: { type: Array, required: true },
    rows: { type: Array, required: true },
    includeStickyActions: { type: Boolean, required: false }
  },
  emits: ["on-sort"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const getFields2 = computed(() => {
      const fields = props.fields.map((field, i) => {
        return {
          field,
          value: field,
          highlightedValue: "",
          isFirst: i === 0,
          isLast: i === props.fields.length - 1,
          type: "string"
        };
      });
      if (props.includeStickyActions) {
        fields.push({
          field: "",
          value: "",
          highlightedValue: "",
          isLast: true,
          isStickyAction: true,
          type: "string"
        });
      }
      return fields;
    });
    const getRows = computed(() => {
      return props.rows.map((row) => {
        const cells = row == null ? void 0 : row.map((col, i) => {
          return {
            field: col.key,
            value: col.hasValue ? col.value : "",
            highlightedValue: col.hasValue ? highlightText(col.value ? String(col.value) : "", props.screener.highlightQuery.value) : "",
            isFirst: i === 0,
            isLast: i === row.length - 1,
            type: col.type,
            row
          };
        });
        if (props.includeStickyActions && row) {
          cells.push({
            field: "",
            value: "",
            highlightedValue: "",
            isLast: true,
            isStickyAction: true,
            type: "string",
            row
          });
        }
        return cells;
      });
    });
    const tableStyle = computed(() => {
      let cols = props.fields.reduce((acc) => acc + " 1fr", "");
      if (props.includeStickyActions)
        cols += " min-content";
      return {
        display: "grid",
        "grid-template-columns": cols
      };
    });
    const rowStyle = computed(() => {
      let colCount = props.fields.length;
      if (props.includeStickyActions)
        colCount++;
      return {
        display: "grid",
        "grid-template-columns": "subgrid",
        "grid-column": `1 / ${colCount + 1}`
      };
    });
    const getSortDirection = (field) => {
      if (props.screener.sortField.value === field) {
        return props.screener.sortDirection.value;
      }
      return null;
    };
    const __returned__ = { props, emit, getFields: getFields2, getRows, tableStyle, rowStyle, getSortDirection, get highlightText() {
      return highlightText;
    }, HeaderCell, ValueCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      style: normalizeStyle($setup.tableStyle),
      class: "vs-table-view"
    },
    [
      createBaseVNode(
        "div",
        {
          style: normalizeStyle($setup.rowStyle),
          class: "vs-table-view__row vs-table-view__row--header"
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.getFields, (cell, i) => {
              return renderSlot(_ctx.$slots, cell.isStickyAction ? "sticky-actions-head" : "header-cell", {
                key: i,
                cell,
                sortDirection: $setup.getSortDirection(cell.field),
                onOnSort: _cache[0] || (_cache[0] = ($event) => $setup.emit("on-sort", $event))
              }, () => [
                createVNode($setup["HeaderCell"], {
                  cell,
                  "sort-direction": $setup.getSortDirection(cell.field),
                  "is-sortable": !cell.isStickyAction,
                  onOnSort: _cache[1] || (_cache[1] = ($event) => $setup.emit("on-sort", $event))
                }, null, 8, ["cell", "sort-direction", "is-sortable"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      ),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.getRows, (row, i) => {
          return openBlock(), createElementBlock(
            "div",
            {
              style: normalizeStyle($setup.rowStyle),
              key: i,
              class: "vs-table-view__row vs-table-view__row--record"
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(row, (cell, j) => {
                  return renderSlot(_ctx.$slots, cell.isStickyAction ? "sticky-actions-value" : "value-cell", {
                    cell,
                    key: j,
                    highlight: $setup.highlightText,
                    highlightValue: $props.screener.highlightQuery.value
                  }, () => [
                    createVNode($setup["ValueCell"], { cell }, null, 8, ["cell"])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              createCommentVNode(" Fill empty rows on last page "),
              !row ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createTextVNode(" ")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    4
    /* STYLE */
  );
}
_sfc_main$9.__file = "src/components/views/TableView.vue";
const TableView = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableView.vue"]]);
const _sfc_main$8 = {};
const _hoisted_1$8 = { class: "vs-no-data-view" };
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, "No data provided");
}
_sfc_main$8.__file = "src/components/views/NoDataView.vue";
const NoDataView = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/NoDataView.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerSearch",
  props: {
    isValidQuery: { type: Boolean, required: true },
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { isValidQuery = true, screener } = __props;
    const history = ref([]);
    const historyIndex = ref(null);
    const useRegEx = computed(() => {
      return screener.searchOptions.value.some((activeOption) => activeOption === "use-regex");
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const searchQuery2 = event.target.value;
      if (isEnter) {
        screener.actions.search(searchQuery2);
        if (searchQuery2) {
          history.value.push(searchQuery2);
          historyIndex.value = history.value.length - 1;
        }
      }
      if (!isPressingUp && !isPressingDown || historyIndex.value === null) {
        return;
      }
      event.preventDefault();
      if (isPressingUp && historyIndex.value > 0) {
        historyIndex.value--;
      } else if (isPressingDown && historyIndex.value < history.value.length - 1) {
        historyIndex.value++;
      }
      screener.actions.search(history.value[historyIndex.value]);
    };
    const onInput = (event) => {
      const query = event.target.value;
      screener.highlightQuery.value = query;
    };
    const __returned__ = { history, historyIndex, useRegEx, onKeydown, onInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["value"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.screener.searchQuery.value,
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput,
    type: "text",
    class: normalizeClass(["vs-search", [$setup.useRegEx && !$props.isValidQuery && "vs-search--error"]]),
    placeholder: "Search..."
  }, null, 42, _hoisted_1$7);
}
_sfc_main$7.__file = "src/components/stuff/ScreenerSearch.vue";
const ScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ScreenerSearch.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const totalPages = computed(() => {
      return Math.ceil(props.screener.totalItems.value / props.screener.perPage.value) || 0;
    });
    const getPages = computed(() => {
      let pages = [
        props.screener.currentPage.value - 1,
        props.screener.currentPage.value,
        props.screener.currentPage.value + 1
      ];
      pages = pages.filter((page) => page > 0);
      if (pages.length < 3) {
        pages.push(pages[pages.length - 1] + 1);
      }
      pages = pages.filter((page) => page <= totalPages.value);
      if (pages.length < 3 && pages[0] > 1) {
        pages.unshift(pages[0] - 1);
      }
      return pages;
    });
    const canNavigateFirst = computed(() => {
      return props.screener.currentPage.value > 1;
    });
    const canNavigatePrev = computed(() => {
      return props.screener.currentPage.value > 1;
    });
    const canNavigateNext = computed(() => {
      return props.screener.currentPage.value < totalPages.value;
    });
    const canNavigateLast = computed(() => {
      return props.screener.currentPage.value < totalPages.value;
    });
    const firstIndexOfCurrentPage = computed(() => {
      return props.screener.currentPage.value * props.screener.perPage.value - props.screener.perPage.value + 1;
    });
    const lastIndexOfCurrentPage = computed(() => {
      return props.screener.currentPage.value * props.screener.perPage.value > props.screener.totalItems.value ? props.screener.totalItems.value : props.screener.currentPage.value * props.screener.perPage.value;
    });
    const currentPageIsInRange = computed(() => {
      return totalPages.value >= props.screener.currentPage.value;
    });
    onMounted(() => {
      ensureCurrentPageIsValid();
    });
    watch(
      () => props.screener.totalItems.value,
      () => {
        ensureCurrentPageIsValid();
      }
    );
    const isActive = (page) => {
      return page === props.screener.currentPage.value;
    };
    const ensureCurrentPageIsValid = () => {
      if (!currentPageIsInRange.value) {
        handleSelectPage(totalPages.value ? totalPages.value : 1);
      }
    };
    const handleClickFirst = () => {
      props.screener.currentPage.value = 1;
    };
    const handleClickPrev = () => {
      props.screener.currentPage.value = canNavigatePrev.value ? props.screener.currentPage.value - 1 : 1;
    };
    const handleClickNext = () => {
      props.screener.currentPage.value = canNavigateNext.value ? props.screener.currentPage.value + 1 : totalPages.value;
    };
    const handleClickLast = () => {
      props.screener.currentPage.value = totalPages.value;
    };
    const handleSelectPage = (targetPage) => {
      props.screener.currentPage.value = targetPage;
    };
    const handleChangePerPage = (event) => {
      const perPage2 = Number(event.target.value);
      props.screener.perPage.value = perPage2;
    };
    const __returned__ = { props, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleClickFirst, handleClickPrev, handleClickNext, handleClickLast, handleSelectPage, handleChangePerPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { class: "vs-pagination" };
const _hoisted_2$4 = { class: "vs-pagination__info" };
const _hoisted_3$3 = { class: "vs-pagination__nav" };
const _hoisted_4$2 = ["disabled"];
const _hoisted_5$1 = ["disabled"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "vs-pagination__per-page" };
const _hoisted_10 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("div", _hoisted_2$4, [
      !$props.screener.totalItems.value ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createTextVNode("Showing 0 results")
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createTextVNode(
            " Showing " + toDisplayString($setup.firstIndexOfCurrentPage) + "-" + toDisplayString($setup.lastIndexOfCurrentPage) + " of " + toDisplayString($props.screener.totalItems.value),
            1
            /* TEXT */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]),
    createBaseVNode("ul", _hoisted_3$3, [
      createBaseVNode("button", {
        disabled: !$setup.canNavigateFirst,
        onClick: $setup.handleClickFirst,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--first",
          !$setup.canNavigateFirst && "vs-pagination__button--disabled"
        ])
      }, " First ", 10, _hoisted_4$2),
      createBaseVNode("button", {
        disabled: !$setup.canNavigatePrev,
        onClick: $setup.handleClickPrev,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--prev",
          !$setup.canNavigatePrev && "vs-pagination__button--disabled"
        ])
      }, " Prev ", 10, _hoisted_5$1),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.getPages, (page) => {
          return openBlock(), createElementBlock("button", {
            key: page,
            onClick: ($event) => $setup.handleSelectPage(page),
            class: normalizeClass([
              "vs-pagination__button",
              "vs-pagination__button--page",
              $setup.isActive(page) && "vs-pagination__button--active"
            ])
          }, toDisplayString(page), 11, _hoisted_6);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createBaseVNode("button", {
        disabled: !$setup.canNavigateNext,
        onClick: $setup.handleClickNext,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--next",
          !$setup.canNavigateNext && "vs-pagination__button--disabled"
        ])
      }, " Next ", 10, _hoisted_7),
      createBaseVNode("button", {
        disabled: !$setup.canNavigateLast,
        onClick: $setup.handleClickLast,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--last",
          !$setup.canNavigateLast && "vs-pagination__button--disabled"
        ])
      }, " Last ", 10, _hoisted_8)
    ]),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("input", {
        type: "number",
        value: $props.screener.perPage.value,
        min: "1",
        step: "1",
        onInput: $setup.handleChangePerPage,
        class: "vs-pagination__per-page-input"
      }, null, 40, _hoisted_10)
    ])
  ]);
}
_sfc_main$6.__file = "src/components/stuff/Pagination.vue";
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Pagination.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ErrorMessage",
  props: {
    message: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "vs-error-message" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$5,
    "[VueScreenerError]: " + toDisplayString($props.message),
    1
    /* TEXT */
  );
}
_sfc_main$5.__file = "src/components/stuff/ErrorMessage.vue";
const ErrorMessage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ErrorMessage.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  setup(__props, { expose: __expose }) {
    __expose();
    const show = ref(false);
    const toggleDropdown = () => show.value = !show.value;
    const handleClickOutside = () => show.value = false;
    const __returned__ = { show, toggleDropdown, handleClickOutside, get vOnClickaway() {
      return directive;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "vs-dropdown" };
const _hoisted_2$3 = {
  key: 0,
  class: "vs-dropdown__content"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "dropdown-button", {
      show: $setup.show,
      toggle: $setup.toggleDropdown
    }),
    createVNode(Transition, { name: "vs-dropdown__content" }, {
      default: withCtx(() => [
        $setup.show ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("v-if", true)
      ]),
      _: 3
      /* FORWARDED */
    })
  ])), [
    [$setup["vOnClickaway"], $setup.handleClickOutside]
  ]);
}
_sfc_main$4.__file = "src/components/stuff/Dropdown.vue";
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Dropdown.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ViewSelector",
  props: {
    activeFormat: { type: String, required: true }
  },
  emits: ["select-format"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const onSelectFormat = (format) => emit("select-format", format);
    const __returned__ = { emit, onSelectFormat };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "vs-view-selector" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode(
      "a",
      {
        href: "#",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.onSelectFormat("table"), ["prevent"])),
        class: normalizeClass(["vs-view-selector__link", $props.activeFormat === "table" && "vs-view-selector__link--is-active"]),
        textContent: "Table"
      },
      null,
      2
      /* CLASS */
    ),
    createBaseVNode(
      "a",
      {
        href: "#",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.onSelectFormat("raw"), ["prevent"])),
        class: normalizeClass(["vs-view-selector__link", $props.activeFormat === "raw" && "vs-view-selector__link--is-active"]),
        textContent: "Raw"
      },
      null,
      2
      /* CLASS */
    )
  ]);
}
_sfc_main$3.__file = "src/components/stuff/ViewSelector.vue";
const ViewSelector = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ViewSelector.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    "fill-rule": "evenodd",
    d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
    "clip-rule": "evenodd"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
_sfc_main$2.__file = "src/components/icons/CogIcon.vue";
const CogIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/CogIcon.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    screener: { type: Object, required: true }
  },
  emits: ["change-search-options"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const options = ref([
      { id: "match-case", title: "Match case", text: "Aa" },
      { id: "match-word", title: "Match word", text: "ab" },
      { id: "use-regex", title: "Use regular expression", text: ".*" }
    ]);
    const getOptions = computed(() => {
      return options.value.map((option) => ({
        ...option,
        isActive: props.screener.searchOptions.value.includes(option.id)
      }));
    });
    const toggleOption = (option) => {
      if (props.screener.searchOptions.value.includes(option)) {
        emit(
          "change-search-options",
          props.screener.searchOptions.value.filter((activeOption) => activeOption !== option)
        );
      } else {
        emit("change-search-options", [...props.screener.searchOptions.value, option]);
      }
    };
    const handleSelectFormat = (format) => {
      props.screener.renderFormat.value = format;
    };
    const __returned__ = { props, emit, options, getOptions, toggleOption, handleSelectFormat, Dropdown, ViewSelector, CogIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vs-settings__heading" },
  "Search",
  -1
  /* HOISTED */
);
const _hoisted_3$1 = { class: "vs-settings__options" };
const _hoisted_4$1 = ["title", "onClick"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vs-settings__heading" },
  "Presentation",
  -1
  /* HOISTED */
);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Dropdown"], { class: "vs-settings" }, {
    "dropdown-button": withCtx(({ show, toggle }) => [
      createBaseVNode("button", {
        class: normalizeClass(["vs-settings__button", [show && "vs-settings__button--active"]]),
        onClick: toggle
      }, [
        createVNode($setup["CogIcon"], { class: "vs-settings__button-icon" })
      ], 10, _hoisted_1$1)
    ]),
    default: withCtx(() => [
      _hoisted_2$1,
      createBaseVNode("div", _hoisted_3$1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.getOptions, (option, i) => {
            return openBlock(), createElementBlock("button", {
              key: i,
              class: normalizeClass(["vs-settings__options-button", [
                {
                  "vs-settings__options-button--active": option.isActive
                },
                "vs-settings__options-button--" + option.id
              ]]),
              title: option.title,
              onClick: ($event) => $setup.toggleOption(option.id)
            }, toDisplayString(option.text), 11, _hoisted_4$1);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _hoisted_5,
      createVNode($setup["ViewSelector"], {
        "active-format": $props.screener.renderFormat.value,
        onSelectFormat: _cache[0] || (_cache[0] = ($event) => $setup.handleSelectFormat($event))
      }, null, 8, ["active-format"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "src/components/stuff/Settings.vue";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Settings.vue"]]);
function isValidInput(data2) {
  const isObject = (val) => typeof val === "object" && val !== null;
  return Array.isArray(data2) && data2.every((row) => Array.isArray(row) || isObject(row));
}
function normaliseInput(data2) {
  data2 = data2.map((row) => Array.isArray(row) ? { ...row } : row);
  const normaliseField = (field, value) => ({
    key: field,
    value,
    type: getTypeOf(value),
    hasValue: value !== null || value !== void 0
  });
  let normalisedData = data2.map((row) => {
    return Object.keys(row).map((key) => normaliseField(key, row[key]));
  });
  const fields = getFields(normalisedData);
  normalisedData = normalisedData.map((row) => {
    return fields.map((field) => {
      return row.find((_field) => _field.key === field) || normaliseField(field, void 0);
    });
  });
  return normalisedData;
}
function getFields(rows) {
  const fields = /* @__PURE__ */ new Set();
  for (const row of rows) {
    for (const field of row) {
      fields.add(field.key);
    }
  }
  return Array.from(fields);
}
function pickFields(rows, pickFields2) {
  return rows.map((row) => {
    const pickedRow = [];
    pickFields2.forEach((pickField) => {
      const pickedField = row.find((field) => field.key === pickField);
      if (pickedField) {
        pickedRow.push(pickedField);
      }
    });
    return pickedRow;
  });
}
function omitFields(rows, omitFields2) {
  return rows.map((row) => {
    return row.filter((field) => !omitFields2.includes(field.key));
  });
}
function getPaginated(options) {
  let { rows = [] } = options;
  const { page = 1, perPage: perPage2 = 25, withPlaceholders = false } = options;
  const start = perPage2 * page;
  const end = start + perPage2;
  rows = rows.slice(start, end);
  if (withPlaceholders && rows.length !== perPage2) {
    const emptyRows = Array(perPage2).fill(null);
    return Object.assign(emptyRows, rows);
  }
  return rows;
}
function getTypeOf(value) {
  if (typeof value === "string") {
    return "string";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "symbol") {
    return "symbol";
  } else if (typeof value === "undefined") {
    return "undefined";
  } else if (typeof value === "object") {
    if (value === null) {
      return "null";
    } else if (Array.isArray(value)) {
      return "array";
    }
    return "object";
  }
  throw `Could not establish type of \`${value}\``;
}
const testCriteria = (subject, pattern, options) => {
  const { matchCase = false, matchWord = false, useRegExp = false } = options;
  if (!useRegExp) {
    pattern = escapeRegExp(pattern);
  }
  if (matchWord) {
    pattern = `\\b(${pattern})\\b`;
  }
  const flags = matchCase ? "g" : "gi";
  return new RegExp(pattern, flags).test(subject);
};
const parseSearchQuery = (searchQuery2) => {
  const excludeFilters = [];
  searchQuery2 = searchQuery2.replace(new RegExp("(?<!\\w)-\\w+:\\w+", "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });
  searchQuery2 = searchQuery2.replace(new RegExp('(?<!\\w)-\\w+:"[^"]*"$', "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  const includeFilters = [];
  searchQuery2 = searchQuery2.replace(/\b\w+:\w+\b/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value]);
    return "";
  }).trim();
  searchQuery2 = searchQuery2.replace(/\b\w+:"[^"]*"$/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  return {
    searchQuery: searchQuery2,
    excludeFilters,
    includeFilters
  };
};
function search(options) {
  const { searchQuery: searchQuery2 = "" } = options;
  if (!searchQuery2)
    return options.rows;
  const { searchQuery: parsedSearchQuery, excludeFilters, includeFilters } = parseSearchQuery(searchQuery2);
  const { rows, useRegExp = false, matchCase = false, matchWord = false } = options;
  const testExcludeFilters = (filters, rowMap) => {
    return filters.some(([field, value]) => {
      if (rowMap[field]) {
        return testCriteria(rowMap[field].value, value, {
          matchCase,
          matchWord: true,
          useRegExp
        });
      }
    });
  };
  const testIncludeFilters = (filters, rowMap) => {
    return filters.every(([field, value]) => {
      if (rowMap[field]) {
        return testCriteria(rowMap[field].value, value, {
          matchCase,
          matchWord: true,
          useRegExp
        });
      }
    });
  };
  return rows.filter((row) => {
    const rowMap = row.reduce((acc, field) => ({ ...acc, [field.key]: field }), {});
    let shouldExclude = false;
    let shouldInclude = true;
    let meetsSearchCriteria = true;
    if (excludeFilters.length && testExcludeFilters(excludeFilters, rowMap)) {
      shouldExclude = true;
    }
    if (includeFilters.length && !testIncludeFilters(includeFilters, rowMap)) {
      shouldInclude = false;
    }
    meetsSearchCriteria = row.some((field) => {
      if (testCriteria(String(field.value ?? ""), parsedSearchQuery, {
        matchCase,
        matchWord,
        useRegExp
      })) {
        return true;
      }
    });
    return !shouldExclude && shouldInclude && meetsSearchCriteria;
  });
}
const searchQuery = ref("");
const highlightQuery = ref("");
const currentPage = ref(1);
const perPage = ref(15);
const renderFormat = ref("table");
const searchOptions = ref([]);
const sortField = ref(null);
const sortDirection = ref("desc");
const data = ref([]);
const useScreener = (options = {}) => {
  currentPage.value = options.defaultCurrentPage ?? currentPage.value;
  perPage.value = options.defaultPerPage ?? perPage.value;
  data.value = options.defaultData ?? data.value;
  const shouldUseRegEx = computed(() => searchOptions.value.includes("use-regex"));
  const shouldMatchCase = computed(() => searchOptions.value.includes("match-case"));
  const shouldMatchWord = computed(() => searchOptions.value.includes("match-word"));
  const normalisedData = computed(() => {
    let normalisedData2 = isValidInput(data.value) ? normaliseInput(data.value) : [];
    if (options.pick && options.pick.length > 0) {
      normalisedData2 = pickFields(normalisedData2, options.pick);
    }
    if (options.omit && options.omit.length > 0) {
      normalisedData2 = omitFields(normalisedData2, options.omit);
    }
    return normalisedData2;
  });
  const searchedData = computed(() => {
    return search({
      rows: normalisedData.value,
      searchQuery: searchQuery.value,
      useRegExp: shouldUseRegEx.value,
      matchCase: shouldMatchCase.value,
      matchWord: shouldMatchWord.value
    });
  });
  return {
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    renderFormat,
    searchOptions,
    sortField,
    sortDirection,
    shouldUseRegEx,
    shouldMatchCase,
    shouldMatchWord,
    data,
    normalisedData,
    searchedData,
    totalItems: computed(() => searchedData.value.length),
    actions: {
      search: (query) => {
        searchQuery.value = query;
        highlightQuery.value = query;
      }
    }
  };
};
function isHorizontallyScrollable(element) {
  return element.scrollWidth > element.clientWidth;
}
function isScrolledToStartHorizontally(element) {
  return element.scrollLeft === 0;
}
function isScrolledToEndHorizontally(element) {
  return Math.round(element.scrollWidth - element.scrollLeft) === element.clientWidth;
}
function observeHorizontalScrollability(element, callback, debounceTime = 20) {
  const updateScrollState = debounce(() => {
    callback({
      isXScrollable: isHorizontallyScrollable(element),
      isXScrolledStart: isScrolledToStartHorizontally(element),
      isXScrolledEnd: isScrolledToEndHorizontally(element)
    });
  }, debounceTime);
  updateScrollState();
  const resizeObserver = new ResizeObserver(updateScrollState);
  resizeObserver.observe(element);
  element.addEventListener("scroll", updateScrollState);
  return {
    disconnect: () => {
      updateScrollState.cancel();
      resizeObserver.disconnect();
      element.removeEventListener("scroll", updateScrollState);
    }
  };
}
const useScrollable = () => {
  const elRef = ref();
  const isScrollable = ref(false);
  const isScrolledEnd = ref(false);
  onMounted(() => {
    if (elRef.value) {
      observeHorizontalScrollability(elRef.value, (state) => {
        isScrollable.value = state.isXScrollable;
        isScrolledEnd.value = state.isXScrolledEnd;
      });
    }
  });
  return {
    ref: elRef,
    isScrollable,
    isScrolledEnd
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueScreener",
  props: {
    data: { type: Array, required: false, default: () => [] },
    title: { type: String, required: false, default: "Results" },
    pick: { type: Array, required: false, default: () => [] },
    omit: { type: Array, required: false, default: () => [] },
    perPage: { type: Number, required: false, default: 15 },
    currentPage: { type: Number, required: false, default: 1 },
    includeStickyActions: { type: Boolean, required: false, default: false },
    includeHeader: { type: Boolean, required: false, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const screener = useScreener({
      defaultCurrentPage: props.currentPage,
      defaultPerPage: props.perPage,
      defaultData: props.data,
      pick: props.pick,
      omit: props.omit
    });
    const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable();
    const isValidInput$1 = computed(() => {
      return isValidInput(screener.data.value);
    });
    const isRegExFriendlySearchQuery = computed(() => {
      return isValidRegExp(screener.searchQuery.value);
    });
    const getFields$1 = computed(() => {
      return getFields(screener.normalisedData.value);
    });
    const getSortedData = computed(() => {
      var _a;
      const sortedRows = screener.searchQuery.value ? screener.searchedData.value : screener.normalisedData.value;
      const sortIndex = ((_a = sortedRows[0]) == null ? void 0 : _a.findIndex((column) => column.key === screener.sortField.value)) ?? null;
      if (screener.sortField.value && screener.sortDirection.value) {
        const nullRows = sortedRows.filter((row) => (row == null ? void 0 : row[sortIndex]) === null || (row == null ? void 0 : row[sortIndex]) === void 0);
        const nonNullRows = sortedRows.filter((row) => (row == null ? void 0 : row[sortIndex]) !== null && (row == null ? void 0 : row[sortIndex]) !== void 0);
        return [
          ...orderBy(nonNullRows, [(row) => {
            var _a2;
            return (_a2 = row == null ? void 0 : row[sortIndex]) == null ? void 0 : _a2.value;
          }], [screener.sortDirection.value]),
          ...nullRows
        ];
      } else {
        return sortedRows;
      }
    });
    const getPaginatedData = computed(() => {
      return getPaginated({
        rows: getSortedData.value,
        page: screener.currentPage.value - 1,
        perPage: screener.perPage.value,
        withPlaceholders: true
      });
    });
    const hasData = computed(() => {
      return getPaginatedData.value.filter((row) => row !== null).length > 0;
    });
    const onChangeSearchOptions = (options) => {
      screener.searchOptions.value = options;
      screener.actions.search(screener.highlightQuery.value);
    };
    const handleSort = (updatedSortField) => {
      if (screener.sortField.value === updatedSortField) {
        screener.sortDirection.value = screener.sortDirection.value === "desc" ? "asc" : "desc";
      }
      screener.sortField.value = updatedSortField;
    };
    const __returned__ = { props, screener, mainRef, isScrollable, isScrolledEnd, isValidInput: isValidInput$1, isRegExFriendlySearchQuery, getFields: getFields$1, getSortedData, getPaginatedData, hasData, onChangeSearchOptions, handleSort, JsonView, TableView, NoDataView, ScreenerSearch, Pagination, ErrorMessage, Settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vs-vue-screener" };
const _hoisted_2 = {
  key: 0,
  class: "vs-header"
};
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "vs-footer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    $setup.isValidInput ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [
        $props.includeHeader ? (openBlock(), createElementBlock("header", _hoisted_2, [
          createBaseVNode("div", {
            class: "vs-title",
            textContent: toDisplayString($setup.props.title)
          }, null, 8, _hoisted_3),
          createVNode($setup["ScreenerSearch"], {
            screener: $setup.screener,
            "is-valid-query": $setup.isRegExFriendlySearchQuery,
            class: "vs-search"
          }, null, 8, ["screener", "is-valid-query"]),
          createVNode($setup["Settings"], {
            screener: $setup.screener,
            onChangeSearchOptions: $setup.onChangeSearchOptions
          }, null, 8, ["screener"])
        ])) : createCommentVNode("v-if", true),
        createBaseVNode(
          "main",
          {
            class: normalizeClass(["vs-main", { "vs-main--is-scrollable": $setup.isScrollable, "vs-main--is-scrolled-end": $setup.isScrolledEnd }]),
            ref: "mainRef"
          },
          [
            $setup.hasData && $setup.screener.renderFormat.value === "table" ? (openBlock(), createBlock($setup["TableView"], {
              key: 0,
              screener: $setup.screener,
              fields: $setup.getFields,
              rows: $setup.getPaginatedData,
              "include-sticky-actions": $props.includeStickyActions,
              onOnSort: $setup.handleSort
            }, {
              "header-cell": withCtx((cellProps) => [
                renderSlot(_ctx.$slots, "header-cell", normalizeProps(guardReactiveProps(cellProps)))
              ]),
              "value-cell": withCtx((cellProps) => [
                renderSlot(_ctx.$slots, "value-cell", normalizeProps(guardReactiveProps(cellProps)))
              ]),
              "sticky-actions-head": withCtx((cellProps) => [
                renderSlot(_ctx.$slots, "sticky-actions-head", normalizeProps(guardReactiveProps(cellProps)))
              ]),
              "sticky-actions-value": withCtx((cellProps) => [
                renderSlot(_ctx.$slots, "sticky-actions-value", normalizeProps(guardReactiveProps(cellProps)))
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["screener", "fields", "rows", "include-sticky-actions"])) : $setup.hasData ? (openBlock(), createBlock($setup["JsonView"], {
              key: 1,
              data: $setup.getPaginatedData
            }, null, 8, ["data"])) : (openBlock(), createBlock($setup["NoDataView"], { key: 2 }))
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("footer", _hoisted_4, [
          createVNode($setup["Pagination"], { screener: $setup.screener }, null, 8, ["screener"])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (openBlock(), createBlock($setup["ErrorMessage"], {
      key: 1,
      message: "Invalid data was provided. Please provide an array of objects or an array of arrays.",
      class: "vs-error-message"
    }))
  ]);
}
_sfc_main.__file = "src/components/VueScreener.vue";
const VueScreener = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/VueScreener.vue"]]);
export {
  HeaderCell as H,
  VueScreener as V,
  _export_sfc as _,
  ValueCell as a
};
