import { aq as defineComponent, au as openBlock, aD as createElementBlock, aE as toDisplayString, aB as createBaseVNode, av as createBlock, aF as createCommentVNode, aG as renderSlot, aH as normalizeClass, aw as withCtx, aI as computed, aJ as Fragment, aK as renderList, aL as normalizeStyle, ax as createVNode, aM as ref, aN as onMounted, as as watch, aA as createTextVNode, aO as directive, aP as withDirectives, aQ as Transition, aR as withModifiers, aS as orderBy, ay as normalizeProps, az as guardReactiveProps } from "./vendor-e300ac54.js";
const JsonView_vue_vue_type_style_index_0_lang = "";
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
const SortSelector_vue_vue_type_style_index_0_lang = "";
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
const TableViewCell_vue_vue_type_style_index_0_lang = "";
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
const TableViewHeaderCell_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TableViewHeaderCell",
  props: {
    cell: { type: Object, required: true },
    sortDirection: { type: [null, String], required: false }
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
      $props.cell.isHeader ? (openBlock(), createBlock($setup["SortSelector"], {
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
    class: normalizeClass([
      "vs-table-view__cell--is-value",
      $props.cell.isStickyAction && "vs-table-view__cell--is-sticky"
    ])
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
const TableView_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TableView",
  props: {
    fields: { type: Array, required: true },
    rows: { type: Array, required: true },
    highlight: { type: String, required: true },
    sortField: { type: [null, String], required: true },
    sortDirection: { type: [null, String], required: true },
    includeStickyActions: { type: Boolean, required: false }
  },
  emits: ["on-sort"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const getCells = computed(() => {
      const fields = [];
      props.fields.forEach((field, i) => {
        fields.push({
          field,
          value: field,
          highlightedValue: "",
          isHeader: true,
          isFirst: i === 0,
          isLast: !props.includeStickyActions && i === props.fields.length - 1,
          type: "string"
        });
      });
      if (props.includeStickyActions) {
        fields.push({
          field: "",
          value: "",
          highlightedValue: "",
          isHeader: true,
          isLast: true,
          isStickyAction: true,
          type: "string"
        });
      }
      props.rows.forEach((row) => {
        row == null ? void 0 : row.forEach((col, i) => {
          fields.push({
            field: col.key,
            isValue: true,
            value: col.hasValue ? col.value : "",
            highlightedValue: col.hasValue ? highlightText(col.value ? String(col.value) : "", props.highlight) : "",
            isFirst: i === 0,
            isLast: !props.includeStickyActions && i === row.length - 1,
            type: col.type,
            row
          });
        });
        if (props.includeStickyActions && row) {
          fields.push({
            field: "",
            value: "",
            highlightedValue: "",
            isValue: true,
            isLast: true,
            isStickyAction: true,
            type: "string",
            row
          });
        }
      });
      return fields;
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
    const getSortDirection = (field) => {
      if (props.sortField === field) {
        return props.sortDirection;
      }
      return null;
    };
    const __returned__ = { props, emit, getCells, tableStyle, getSortDirection, get highlightText() {
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
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.getCells, (cell, i) => {
          return openBlock(), createElementBlock(
            Fragment,
            null,
            [
              cell.isHeader ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  cell.isStickyAction ? renderSlot(_ctx.$slots, "sticky-actions-head", {
                    key: "sticky-actions-head-" + i,
                    cell
                  }, () => [
                    createVNode($setup["HeaderCell"], { cell }, null, 8, ["cell"])
                  ]) : renderSlot(_ctx.$slots, "header-cell", {
                    key: "col-" + i,
                    cell,
                    sortDirection: $setup.getSortDirection(cell.field),
                    onOnSort: _cache[0] || (_cache[0] = ($event) => $setup.emit("on-sort", $event))
                  }, () => [
                    (openBlock(), createBlock($setup["HeaderCell"], {
                      key: i,
                      cell,
                      "sort-direction": $setup.getSortDirection(cell.field),
                      onOnSort: _cache[1] || (_cache[1] = ($event) => $setup.emit("on-sort", $event))
                    }, null, 8, ["cell", "sort-direction"]))
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : cell.isValue ? (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [
                  cell.isStickyAction ? renderSlot(_ctx.$slots, "sticky-actions-value", {
                    key: "sticky-actions-value-" + i,
                    cell,
                    highlight: $setup.highlightText,
                    highlightValue: $props.highlight
                  }, () => [
                    (openBlock(), createBlock($setup["ValueCell"], {
                      key: i,
                      cell
                    }, null, 8, ["cell"]))
                  ]) : renderSlot(_ctx.$slots, "value-cell", {
                    key: i,
                    cell,
                    highlight: $setup.highlightText,
                    highlightValue: $props.highlight
                  }, () => [
                    (openBlock(), createBlock($setup["ValueCell"], {
                      key: i,
                      cell
                    }, null, 8, ["cell"]))
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ],
    4
    /* STYLE */
  );
}
_sfc_main$9.__file = "src/components/views/TableView.vue";
const TableView = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableView.vue"]]);
const NoDataView_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = {};
const _hoisted_1$8 = { class: "vs-no-data-view" };
function _sfc_render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, "No data provided");
}
_sfc_main$8.__file = "src/components/views/NoDataView.vue";
const NoDataView = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/NoDataView.vue"]]);
const VueScreenerSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerSearch",
  props: {
    query: { type: String, required: true },
    isValidQuery: { type: Boolean, required: true },
    searchOptions: { type: Array, required: true }
  },
  emits: ["input", "search", "update-options"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const {
      query = "",
      isValidQuery = true,
      searchOptions = []
    } = __props;
    const history = ref([]);
    const historyIndex = ref(null);
    const useRegEx = computed(() => {
      return searchOptions.some((activeOption) => activeOption === "use-regex");
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const searchQuery = event.target.value;
      if (isEnter) {
        search2(searchQuery);
        if (searchQuery) {
          history.value.push(searchQuery);
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
      search2(history.value[historyIndex.value]);
    };
    const onInput = (event) => {
      const query2 = event.target.value;
      emit("input", query2);
    };
    const search2 = (searchQuery) => {
      emit("search", searchQuery);
    };
    const __returned__ = { emit, history, historyIndex, useRegEx, onKeydown, onInput, search: search2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["value"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.query,
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput,
    type: "text",
    class: normalizeClass(["vs-search", [$setup.useRegEx && !$props.isValidQuery && "vs-search--error"]]),
    placeholder: "Search..."
  }, null, 42, _hoisted_1$7);
}
_sfc_main$7.__file = "src/components/stuff/VueScreenerSearch.vue";
const VueScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/VueScreenerSearch.vue"]]);
const Pagination_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    currentPage: { type: Number, required: false, default: 1 },
    totalItems: { type: Number, required: false, default: 0 },
    perPage: { type: Number, required: false, default: 25 }
  },
  emits: ["change-page", "change-per-page"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const totalPages = computed(() => {
      return Math.ceil(props.totalItems / props.perPage) || 0;
    });
    const getPages = computed(() => {
      let pages = [props.currentPage - 1, props.currentPage, props.currentPage + 1];
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
      return props.currentPage > 1;
    });
    const canNavigatePrev = computed(() => {
      return props.currentPage > 1;
    });
    const canNavigateNext = computed(() => {
      return props.currentPage < totalPages.value;
    });
    const canNavigateLast = computed(() => {
      return props.currentPage < totalPages.value;
    });
    const firstIndexOfCurrentPage = computed(() => {
      return props.currentPage * props.perPage - props.perPage + 1;
    });
    const lastIndexOfCurrentPage = computed(() => {
      return props.currentPage * props.perPage > props.totalItems ? props.totalItems : props.currentPage * props.perPage;
    });
    const currentPageIsInRange = computed(() => {
      return totalPages.value >= props.currentPage;
    });
    onMounted(() => {
      ensureCurrentPageIsValid();
    });
    watch(
      () => props.totalItems,
      () => {
        ensureCurrentPageIsValid();
      }
    );
    const isActive = (page) => {
      return page === props.currentPage;
    };
    const ensureCurrentPageIsValid = () => {
      if (!currentPageIsInRange.value) {
        handleSelectPage(totalPages.value ? totalPages.value : 1);
      }
    };
    const handleClickFirst = () => {
      emit("change-page", 1);
    };
    const handleClickPrev = () => {
      emit("change-page", canNavigatePrev.value ? props.currentPage - 1 : 1);
    };
    const handleClickNext = () => {
      emit(
        "change-page",
        canNavigateNext.value ? props.currentPage + 1 : totalPages.value
      );
    };
    const handleClickLast = () => {
      emit("change-page", totalPages.value);
    };
    const handleSelectPage = (targetPage) => {
      emit("change-page", targetPage);
    };
    const handleChangePerPage = (event) => {
      const perPage = Number(event.target.value);
      emit("change-per-page", perPage);
    };
    const __returned__ = { props, emit, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleClickFirst, handleClickPrev, handleClickNext, handleClickLast, handleSelectPage, handleChangePerPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { class: "vs-pagination" };
const _hoisted_2$4 = { class: "vs-pagination__info" };
const _hoisted_3$3 = { class: "vs-pagination__nav" };
const _hoisted_4$2 = ["disabled"];
const _hoisted_5$2 = ["disabled"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "vs-pagination__per-page" };
const _hoisted_10 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("div", _hoisted_2$4, [
      !$props.totalItems ? (openBlock(), createElementBlock(
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
            " Showing " + toDisplayString($setup.firstIndexOfCurrentPage) + "-" + toDisplayString($setup.lastIndexOfCurrentPage) + " of " + toDisplayString($props.totalItems),
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
      }, " Prev ", 10, _hoisted_5$2),
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
        value: $props.perPage,
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
const ErrorMessage_vue_vue_type_style_index_0_lang = "";
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
const Dropdown_vue_vue_type_style_index_0_lang = "";
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
const ViewSelector_vue_vue_type_style_index_0_lang = "";
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
        class: normalizeClass([
          "vs-view-selector__link",
          $props.activeFormat === "table" && "vs-view-selector__link--is-active"
        ]),
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
        class: normalizeClass([
          "vs-view-selector__link",
          $props.activeFormat === "raw" && "vs-view-selector__link--is-active"
        ]),
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
  fill: "currentColor",
  class: "vs__settings-button-icon"
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
const Settings_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    activeFormat: { type: String, required: true },
    searchOptions: { type: Array, required: true }
  },
  emits: ["select-format", "change-search-options"],
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
        isActive: props.searchOptions.includes(option.id)
      }));
    });
    const toggleOption = (option) => {
      if (props.searchOptions.includes(option)) {
        emit(
          "change-search-options",
          props.searchOptions.filter((activeOption) => activeOption !== option)
        );
      } else {
        emit("change-search-options", [...props.searchOptions, option]);
      }
    };
    const __returned__ = { props, emit, options, getOptions, toggleOption, Dropdown, ViewSelector, CogIcon };
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
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
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
        createVNode($setup["CogIcon"])
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
      _hoisted_5$1,
      createVNode($setup["ViewSelector"], {
        "active-format": $props.activeFormat,
        onSelectFormat: _cache[0] || (_cache[0] = ($event) => $setup.emit("select-format", $event))
      }, null, 8, ["active-format"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "src/components/stuff/Settings.vue";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Settings.vue"]]);
function isValidInput(data) {
  const isObject = (val) => typeof val === "object" && val !== null;
  return Array.isArray(data) && data.every((row) => Array.isArray(row) || isObject(row));
}
function normaliseInput(data) {
  data = data.map((row) => Array.isArray(row) ? { ...row } : row);
  const normaliseField = (field, value) => ({
    key: field,
    value,
    type: getTypeOf(value),
    hasValue: value !== null || value !== void 0
  });
  let normalisedData = data.map((row) => {
    return Object.keys(row).map(
      (key) => normaliseField(key, row[key])
    );
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
function excludeFields(rows, excludeFields2) {
  return rows.map((row) => {
    return row.filter((field) => !excludeFields2.includes(field.key));
  });
}
function getPaginated(options) {
  let { rows = [] } = options;
  const { page = 1, perPage = 25, withPlaceholders = false } = options;
  const start = perPage * page;
  const end = start + perPage;
  rows = rows.slice(start, end);
  if (withPlaceholders && rows.length !== perPage) {
    const emptyRows = Array(perPage).fill(null);
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
const parseSearchQuery = (searchQuery) => {
  const excludeFilters = [];
  searchQuery = searchQuery.replace(new RegExp("(?<!\\w)-\\w+:\\w+", "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });
  searchQuery = searchQuery.replace(new RegExp('(?<!\\w)-\\w+:"[^"]*"$', "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  const includeFilters = [];
  searchQuery = searchQuery.replace(/\b\w+:\w+\b/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value]);
    return "";
  }).trim();
  searchQuery = searchQuery.replace(/\b\w+:"[^"]*"$/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  return {
    searchQuery,
    excludeFilters,
    includeFilters
  };
};
function search(options) {
  let { searchQuery = "" } = options;
  if (!searchQuery)
    return options.rows;
  let {
    searchQuery: parsedSearchQuery,
    excludeFilters,
    includeFilters
  } = parseSearchQuery(searchQuery);
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
    const rowMap = row.reduce(
      (acc, field) => ({ ...acc, [field.key]: field }),
      {}
    );
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
const VueScreener_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueScreener",
  props: {
    data: { type: Array, required: false, default: () => [] },
    title: { type: String, required: false, default: "Results" },
    pick: { type: Array, required: false, default: () => [] },
    exclude: { type: Array, required: false, default: () => [] },
    perPage: { type: Number, required: false, default: 15 },
    currentPage: { type: Number, required: false, default: 1 },
    includeStickyActions: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const searchQuery = ref("");
    const highlightQuery = ref("");
    const stagedCurrentPage = ref(props.currentPage);
    const stagedPerPage = ref(props.perPage);
    const renderFormat = ref("table");
    const searchOptions = ref([]);
    const sortField = ref(null);
    const sortDirection = ref("desc");
    const isValidInput$1 = computed(() => {
      return isValidInput(props.data);
    });
    const isRegExFriendlySearchQuery = computed(() => {
      return isValidRegExp(searchQuery.value);
    });
    const getNormalisedData = computed(() => {
      let normalisedData = isValidInput(props.data) ? normaliseInput(props.data) : [];
      if (props.pick.length > 0) {
        normalisedData = pickFields(normalisedData, props.pick);
      }
      if (props.exclude.length > 0) {
        normalisedData = excludeFields(normalisedData, props.exclude);
      }
      return normalisedData;
    });
    const getFields$1 = computed(() => {
      return getFields(getNormalisedData.value);
    });
    const shouldUseRegEx = computed(() => {
      return searchOptions.value.includes("use-regex");
    });
    const shouldMatchCase = computed(() => {
      return searchOptions.value.includes("match-case");
    });
    const shouldMatchWord = computed(() => {
      return searchOptions.value.includes("match-word");
    });
    const getSearchedData = computed(() => {
      return search({
        rows: getNormalisedData.value,
        searchQuery: searchQuery.value,
        useRegExp: shouldUseRegEx.value,
        matchCase: shouldMatchCase.value,
        matchWord: shouldMatchWord.value
      });
    });
    const getSortedData = computed(() => {
      var _a;
      const sortedRows = searchQuery.value ? getSearchedData.value : getNormalisedData.value;
      const sortIndex = ((_a = sortedRows[0]) == null ? void 0 : _a.findIndex((column) => column.key === sortField.value)) ?? null;
      if (sortField.value && sortDirection.value) {
        const nullRows = sortedRows.filter(
          (row) => (row == null ? void 0 : row[sortIndex]) === null || (row == null ? void 0 : row[sortIndex]) === void 0
        );
        const nonNullRows = sortedRows.filter(
          (row) => (row == null ? void 0 : row[sortIndex]) !== null && (row == null ? void 0 : row[sortIndex]) !== void 0
        );
        return [
          ...orderBy(
            nonNullRows,
            [(row) => {
              var _a2;
              return (_a2 = row == null ? void 0 : row[sortIndex]) == null ? void 0 : _a2.value;
            }],
            [sortDirection.value]
          ),
          ...nullRows
        ];
      } else {
        return sortedRows;
      }
    });
    const getPaginatedData = computed(() => {
      return getPaginated({
        rows: getSortedData.value,
        page: stagedCurrentPage.value - 1,
        perPage: stagedPerPage.value,
        withPlaceholders: true
      });
    });
    const hasData = computed(() => {
      return getPaginatedData.value.filter((row) => row !== null).length > 0;
    });
    const onInputSearch = (query) => {
      highlightQuery.value = query;
    };
    const onSearch = (query) => {
      searchQuery.value = query;
      highlightQuery.value = query;
    };
    const onChangeSearchOptions = (options) => {
      searchOptions.value = options;
      onSearch(highlightQuery.value);
    };
    const onSelectFormat = (format) => {
      renderFormat.value = format;
    };
    const onChangePage = (page) => {
      stagedCurrentPage.value = page;
    };
    const onChangePerPage = (perPage) => {
      stagedPerPage.value = perPage;
    };
    const handleSort = (updatedSortField) => {
      if (sortField.value === updatedSortField) {
        sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
      }
      sortField.value = updatedSortField;
    };
    const __returned__ = { props, searchQuery, highlightQuery, stagedCurrentPage, stagedPerPage, renderFormat, searchOptions, sortField, sortDirection, isValidInput: isValidInput$1, isRegExFriendlySearchQuery, getNormalisedData, getFields: getFields$1, shouldUseRegEx, shouldMatchCase, shouldMatchWord, getSearchedData, getSortedData, getPaginatedData, hasData, onInputSearch, onSearch, onChangeSearchOptions, onSelectFormat, onChangePage, onChangePerPage, handleSort, JsonView, TableView, NoDataView, VueScreenerSearch, Pagination, ErrorMessage, Settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vs-vue-screener" };
const _hoisted_2 = { class: "vs-header" };
const _hoisted_3 = { class: "vs-title" };
const _hoisted_4 = { class: "vs-main" };
const _hoisted_5 = { class: "vs-footer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    $setup.isValidInput ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode(
            "div",
            _hoisted_3,
            toDisplayString($setup.props.title),
            1
            /* TEXT */
          ),
          createVNode($setup["VueScreenerSearch"], {
            query: $setup.searchQuery,
            "is-valid-query": $setup.isRegExFriendlySearchQuery,
            "search-options": $setup.searchOptions,
            onInput: $setup.onInputSearch,
            onSearch: $setup.onSearch,
            class: "vs-search"
          }, null, 8, ["query", "is-valid-query", "search-options"]),
          createVNode($setup["Settings"], {
            "active-format": $setup.renderFormat,
            onSelectFormat: $setup.onSelectFormat,
            "search-options": $setup.searchOptions,
            onChangeSearchOptions: $setup.onChangeSearchOptions
          }, null, 8, ["active-format", "search-options"])
        ]),
        createBaseVNode("main", _hoisted_4, [
          $setup.hasData && $setup.renderFormat === "table" ? (openBlock(), createBlock($setup["TableView"], {
            key: 0,
            fields: $setup.getFields,
            rows: $setup.getPaginatedData,
            highlight: $setup.highlightQuery,
            "sort-direction": $setup.sortDirection,
            "sort-field": $setup.sortField,
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
          }, 8, ["fields", "rows", "highlight", "sort-direction", "sort-field", "include-sticky-actions"])) : $setup.hasData ? (openBlock(), createBlock($setup["JsonView"], {
            key: 1,
            data: $setup.getPaginatedData
          }, null, 8, ["data"])) : (openBlock(), createBlock($setup["NoDataView"], { key: 2 }))
        ]),
        createBaseVNode("footer", _hoisted_5, [
          createVNode($setup["Pagination"], {
            "total-items": $setup.getSearchedData.length,
            "per-page": $setup.stagedPerPage,
            "current-page": $setup.stagedCurrentPage,
            onChangePage: $setup.onChangePage,
            onChangePerPage: $setup.onChangePerPage
          }, null, 8, ["total-items", "per-page", "current-page"])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (openBlock(), createBlock($setup["ErrorMessage"], {
      key: 1,
      message: "Invalid data was provided. Please provide an\n      array of objects or an array of arrays.",
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
