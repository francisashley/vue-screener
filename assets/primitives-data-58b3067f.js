import { aq as defineComponent, au as openBlock, aB as createElementBlock, aC as toDisplayString, az as createBaseVNode, av as createBlock, aD as normalizeClass, aE as createCommentVNode, aF as renderSlot, aw as withCtx, aG as computed, aH as Fragment, aI as renderList, aJ as normalizeStyle, aK as ref, aL as onMounted, as as watch, aA as createTextVNode, aM as directive, aN as withDirectives, ax as createVNode, aO as Transition, aP as withModifiers, aQ as orderBy, aR as normalizeProps, aS as guardReactiveProps } from "./vendor-68d73671.js";
const JsonView_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$c = { class: "vue-screener__json-view" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "pre",
    _hoisted_1$c,
    toDisplayString(JSON.stringify($props.data, null, 2)),
    1
    /* TEXT */
  );
}
_sfc_main$g.__file = "src/components/views/JsonView.vue";
const JsonView = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/JsonView.vue"]]);
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
  const highlightExp = new RegExp(escapeRegExp(highlight), "ig");
  return value.replace(highlightExp, (match) => `<mark>${match}</mark>`);
}
const _sfc_main$f = {};
const _hoisted_1$b = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$5 = [
  _hoisted_2$6
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$5);
}
_sfc_main$f.__file = "src/components/icons/Sort.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/Sort.vue"]]);
const _sfc_main$e = {};
const _hoisted_1$a = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-up",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$4);
}
_sfc_main$e.__file = "src/components/icons/SortUp.vue";
const SortUpIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortUp.vue"]]);
const _sfc_main$d = {};
const _hoisted_1$9 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "1rem", "width": "1rem" }
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$3);
}
_sfc_main$d.__file = "src/components/icons/SortDown.vue";
const SortDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortDown.vue"]]);
const SortSelector_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SortSelector",
  props: {
    sortDirection: { type: [null, String], required: true },
    classes: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SortIcon, SortUpIcon, SortDownIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["vue-screener__sort-selector", (_a = $props.classes) == null ? void 0 : _a.TABLE_VIEW_SORT])
    },
    [
      $props.sortDirection === null ? (openBlock(), createBlock($setup["SortIcon"], {
        key: 0,
        class: normalizeClass((_b = $props.classes) == null ? void 0 : _b.TABLE_VIEW_SORT_NONE)
      }, null, 8, ["class"])) : $props.sortDirection === "asc" ? (openBlock(), createBlock($setup["SortUpIcon"], {
        key: 1,
        class: normalizeClass((_c = $props.classes) == null ? void 0 : _c.TABLE_VIEW_SORT_ASC)
      }, null, 8, ["class"])) : $props.sortDirection === "desc" ? (openBlock(), createBlock($setup["SortDownIcon"], {
        key: 2,
        class: normalizeClass((_d = $props.classes) == null ? void 0 : _d.TABLE_VIEW_SORT_DESC)
      }, null, 8, ["class"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$c.__file = "src/components/stuff/SortSelector.vue";
const SortSelector = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/SortSelector.vue"]]);
const TableViewCell_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TableViewCell",
  props: {
    cell: { type: Object, required: true },
    classes: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = ["innerHTML"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        "vue-screener__table-view__cell",
        $props.cell.isFirst && "vue-screener__table-view__cell--is-first",
        $props.cell.isLast && "vue-screener__table-view__cell--is-last",
        $props.cell.hasValue && "vue-screener__table-view__cell--hasValue",
        $props.cell.type === "string" && "vue-screener__table-view__cell--string",
        $props.cell.type === "number" && "vue-screener__table-view__cell--number",
        $props.cell.type === "boolean" && "vue-screener__table-view__cell--boolean",
        $props.cell.type === "symbol" && "vue-screener__table-view__cell--symbol",
        $props.cell.type === "undefined" && "vue-screener__table-view__cell--undefined",
        $props.cell.type === "object" && "vue-screener__table-view__cell--object",
        $props.cell.type === "null" && "vue-screener__table-view__cell--null",
        (_a = $props.classes) == null ? void 0 : _a.TABLE_VIEW_CELL
      ])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.cell.value
        }, null, 8, _hoisted_1$8)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$b.__file = "src/components/views/TableViewCell.vue";
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewCell.vue"]]);
const TableViewHeaderCell_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TableViewHeaderCell",
  props: {
    cell: { type: Object, required: true },
    sortDirection: { type: [null, String], required: true },
    classes: { type: Object, required: false }
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
const _hoisted_1$7 = ["innerHTML"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createBlock($setup["TableCell"], {
    class: normalizeClass([
      "vue-screener__table-view__cell--is-header",
      (_a = $props.classes) == null ? void 0 : _a.TABLE_VIEW_HEADER_CELL
    ]),
    cell: $props.cell,
    classes: $props.classes,
    onClick: $setup.handleClickHeader
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.cell.value
        }, null, 8, _hoisted_1$7)
      ]),
      $props.cell.isHeader ? (openBlock(), createBlock($setup["SortSelector"], {
        key: 0,
        "sort-direction": $props.sortDirection,
        classes: $props.classes
      }, null, 8, ["sort-direction", "classes"])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "cell", "classes"]);
}
_sfc_main$a.__file = "src/components/views/TableViewHeaderCell.vue";
const HeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewHeaderCell.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TableViewValueCell",
  props: {
    cell: { type: Object, required: true },
    classes: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { TableCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TableCell"], {
    cell: $props.cell,
    class: "vue-screener__table-view__cell--is-value",
    classes: $props.classes
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["cell", "classes"]);
}
_sfc_main$9.__file = "src/components/views/TableViewValueCell.vue";
const ValueCell = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableViewValueCell.vue"]]);
const TableView_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TableView",
  props: {
    fields: { type: Array, required: true },
    rows: { type: Array, required: true },
    highlight: { type: String, required: true },
    sortField: { type: [null, String], required: true },
    sortDirection: { type: [null, String], required: true },
    classes: { type: Object, required: false }
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
          isHeader: true,
          isFirst: i === 0,
          isLast: i === props.fields.length - 1,
          type: "string"
        });
      });
      props.rows.forEach((row) => {
        row == null ? void 0 : row.forEach((col, i) => {
          fields.push({
            field: col.key,
            isValue: true,
            value: col.hasValue ? getHighlighted(col.value, props.highlight) : "",
            isFirst: i === 0,
            isLast: i === row.length - 1,
            type: col.type
          });
        });
      });
      return fields;
    });
    const tableStyle = computed(() => {
      return {
        display: "grid",
        "grid-template-columns": props.fields.reduce((acc) => acc + " 1fr", "")
      };
    });
    const getHighlighted = (value, highlight) => {
      if (["string", "number"].includes(typeof value)) {
        return highlightText(String(value), highlight);
      }
      return value;
    };
    const getSortDirection = (field) => {
      if (props.sortField === field) {
        return props.sortDirection;
      }
      return null;
    };
    const __returned__ = { props, emit, getCells, tableStyle, getHighlighted, getSortDirection, HeaderCell, ValueCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(
    "div",
    {
      style: normalizeStyle($setup.tableStyle),
      class: normalizeClass(["vue-screener__table-view", (_a = $props.classes) == null ? void 0 : _a.TABLE_VIEW])
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
              cell.isHeader ? renderSlot(_ctx.$slots, "header-cell", {
                key: i,
                cell,
                sortDirection: $setup.getSortDirection(cell.field),
                onOnSort: _cache[0] || (_cache[0] = ($event) => $setup.emit("on-sort", $event))
              }, () => [
                (openBlock(), createBlock($setup["HeaderCell"], {
                  key: i,
                  cell,
                  "sort-direction": $setup.getSortDirection(cell.field),
                  classes: $props.classes,
                  onOnSort: _cache[1] || (_cache[1] = ($event) => $setup.emit("on-sort", $event))
                }, null, 8, ["cell", "sort-direction", "classes"]))
              ]) : cell.isValue ? renderSlot(_ctx.$slots, "value-cell", {
                key: i,
                cell
              }, () => [
                (openBlock(), createBlock($setup["ValueCell"], {
                  key: i,
                  cell,
                  classes: $props.classes
                }, null, 8, ["cell", "classes"]))
              ]) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$8.__file = "src/components/views/TableView.vue";
const TableView = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableView.vue"]]);
const VueScreenerSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerSearch",
  props: {
    query: { type: String, required: true },
    isValidQuery: { type: Boolean, required: true },
    searchOptions: { type: Array, required: true },
    classes: { type: Object, required: false }
  },
  emits: ["search", "update-options"],
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
    const debouncedSearch = (event) => {
      const searchQuery = event.target.value;
      search2(searchQuery);
      if (searchQuery) {
        history.value.push(searchQuery);
        historyIndex.value = history.value.length - 1;
      }
    };
    const onKeydown = (e) => {
      const isPressingUp = e.key === "ArrowUp";
      const isPressingDown = e.key === "ArrowDown";
      if (!isPressingUp && !isPressingDown || historyIndex.value === null) {
        return;
      }
      e.preventDefault();
      if (isPressingUp && historyIndex.value > 0) {
        historyIndex.value--;
      } else if (isPressingDown && historyIndex.value < history.value.length - 1) {
        historyIndex.value++;
      }
      search2(history.value[historyIndex.value]);
    };
    const search2 = (searchQuery) => {
      emit("search", searchQuery);
    };
    const __returned__ = { emit, history, historyIndex, useRegEx, debouncedSearch, onKeydown, search: search2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = ["value"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.query,
    onInput: $setup.debouncedSearch,
    onKeydown: $setup.onKeydown,
    type: "text",
    class: normalizeClass(["vue-screener__search", [$setup.useRegEx && !$props.isValidQuery && "vue-screener__search--error"]]),
    placeholder: "Search..."
  }, null, 42, _hoisted_1$6);
}
_sfc_main$7.__file = "src/components/stuff/VueScreenerSearch.vue";
const VueScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/VueScreenerSearch.vue"]]);
const Pagination_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    currentPage: { type: Number, required: false, default: 1 },
    totalItems: { type: Number, required: false, default: 0 },
    perPage: { type: Number, required: false, default: 25 },
    classes: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["change-page", "change-per-page"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const totalPages = computed(() => {
      return Math.ceil(props.totalItems / props.perPage) || 1;
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
const _hoisted_1$5 = ["disabled"];
const _hoisted_2$3 = ["disabled"];
const _hoisted_3$2 = ["onClick"];
const _hoisted_4 = ["disabled"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["value"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["vue-screener__pagination", (_a = $props.classes) == null ? void 0 : _a.PAGINATION])
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["vue-screener__pagination__info", (_b = $props.classes) == null ? void 0 : _b.PAGINATION_INFO])
        },
        [
          !$props.totalItems ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createTextVNode("Showing 0 results")
            ],
            64
            /* STABLE_FRAGMENT */
          )) : $setup.lastIndexOfCurrentPage < $props.perPage ? (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createTextVNode(
                toDisplayString($setup.lastIndexOfCurrentPage) + " of " + toDisplayString($props.totalItems),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
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
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "ul",
        {
          class: normalizeClass(["vue-screener__pagination__nav", (_c = $props.classes) == null ? void 0 : _c.PAGINATION_NAV])
        },
        [
          createBaseVNode("button", {
            disabled: !$setup.canNavigateFirst,
            onClick: $setup.handleClickFirst,
            class: normalizeClass([
              "vue-screener__pagination__button",
              "vue-screener__pagination__button--first",
              !$setup.canNavigateFirst && "vue-screener__pagination__button--disabled",
              (_d = $props.classes) == null ? void 0 : _d.PAGINATION_FIRST_BUTTON,
              !$setup.canNavigateFirst && ((_e = $props.classes) == null ? void 0 : _e["PAGINATION_BUTTON--DISABLED"])
            ])
          }, " First ", 10, _hoisted_1$5),
          createBaseVNode("button", {
            disabled: !$setup.canNavigatePrev,
            onClick: $setup.handleClickPrev,
            class: normalizeClass([
              "vue-screener__pagination__button",
              "vue-screener__pagination__button--prev",
              !$setup.canNavigatePrev && "vue-screener__pagination__button--disabled",
              (_f = $props.classes) == null ? void 0 : _f.PAGINATION_BUTTON,
              (_g = $props.classes) == null ? void 0 : _g.PAGINATION_PREV_BUTTON,
              !$setup.canNavigatePrev && ((_h = $props.classes) == null ? void 0 : _h["PAGINATION_BUTTON--DISABLED"])
            ])
          }, " Prev ", 10, _hoisted_2$3),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.getPages, (page) => {
              var _a2, _b2, _c2;
              return openBlock(), createElementBlock("button", {
                key: page,
                onClick: ($event) => $setup.handleSelectPage(page),
                class: normalizeClass([
                  "vue-screener__pagination__button",
                  "vue-screener__pagination__button--page",
                  !$setup.canNavigateFirst && "vue-screener__pagination__button--disabled",
                  $setup.isActive(page) && "vue-screener__pagination__button--active",
                  (_a2 = $props.classes) == null ? void 0 : _a2.PAGINATION_BUTTON,
                  (_b2 = $props.classes) == null ? void 0 : _b2.PAGINATION_PAGE_BUTTON,
                  !$setup.canNavigateFirst && ((_c2 = $props.classes) == null ? void 0 : _c2["PAGINATION_BUTTON--DISABLED"])
                ])
              }, toDisplayString(page), 11, _hoisted_3$2);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          createBaseVNode("button", {
            disabled: !$setup.canNavigateNext,
            onClick: $setup.handleClickNext,
            class: normalizeClass([
              "vue-screener__pagination__button",
              "vue-screener__pagination__button--next",
              !$setup.canNavigateNext && "vue-screener__pagination__button--disabled",
              (_i = $props.classes) == null ? void 0 : _i.PAGINATION_BUTTON,
              (_j = $props.classes) == null ? void 0 : _j.PAGINATION_NEXT_BUTTON,
              !$setup.canNavigateNext && ((_k = $props.classes) == null ? void 0 : _k["PAGINATION_BUTTON--DISABLED"])
            ])
          }, " Next ", 10, _hoisted_4),
          createBaseVNode("button", {
            disabled: !$setup.canNavigateLast,
            onClick: $setup.handleClickLast,
            class: normalizeClass([
              "vue-screener__pagination__button",
              "vue-screener__pagination__button--last",
              !$setup.canNavigateLast && "vue-screener__pagination__button--disabled",
              (_l = $props.classes) == null ? void 0 : _l.PAGINATION_BUTTON,
              (_m = $props.classes) == null ? void 0 : _m.PAGINATION_LAST_BUTTON
            ])
          }, " Last ", 10, _hoisted_5)
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "div",
        {
          class: normalizeClass([
            "vue-screener__pagination__per-page",
            (_n = $props.classes) == null ? void 0 : _n.PAGINATION_PER_PAGE
          ])
        },
        [
          createBaseVNode("input", {
            type: "number",
            value: $props.perPage,
            min: "1",
            step: "1",
            onInput: $setup.handleChangePerPage,
            class: normalizeClass([
              "vue-screener__pagination__per-page-input",
              (_o = $props.classes) == null ? void 0 : _o.PAGINATION_PER_PAGE_INPUT
            ])
          }, null, 42, _hoisted_6)
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
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
const _hoisted_1$4 = { class: "vue-screener__error-message" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$4,
    " [VueScreenerError]: " + toDisplayString($props.message),
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
const _hoisted_1$3 = { class: "vue-screener__dropdown" };
const _hoisted_2$2 = {
  key: 0,
  class: "vue-screener__dropdown__dropdown-content"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "dropdown-button", {
      show: $setup.show,
      toggle: $setup.toggleDropdown
    }),
    createVNode(Transition, { name: "vue-screener__dropdown__dropdown-content" }, {
      default: withCtx(() => [
        $setup.show ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
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
    activeFormat: { type: String, required: true },
    classes: { type: Object, required: false }
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
const _hoisted_1$2 = { class: "vue-screener__view-selector" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode(
      "a",
      {
        href: "#",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.onSelectFormat("table"), ["prevent"])),
        class: normalizeClass([
          "vue-screener__view-selector__link",
          $props.activeFormat === "table" && "is-active",
          (_a = $props.classes) == null ? void 0 : _a.SETTINGS_VIEW_SELECTOR_CONTAINER
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
          "vue-screener__view-selector__link",
          $props.activeFormat === "raw" && "is-active",
          ,
          (_b = $props.classes) == null ? void 0 : _b.SETTINGS_VIEW_SELECTOR_LINK
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
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  class: "vue-screener__settings-button-icon"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
_sfc_main$2.__file = "src/components/icons/Cog.vue";
const CogIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/Cog.vue"]]);
const Settings_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    activeFormat: { type: String, required: true },
    searchOptions: { type: Array, required: true },
    classes: { type: Object, required: false }
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
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["title", "onClick"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vue-screener__settings-heading" },
  "Presentation",
  -1
  /* HOISTED */
);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createBlock($setup["Dropdown"], {
    class: normalizeClass(["vue-screener__settings", (_a = $props.classes) == null ? void 0 : _a.SETTINGS])
  }, {
    "dropdown-button": withCtx(({ show, toggle }) => {
      var _a2;
      return [
        createBaseVNode("button", {
          class: normalizeClass(["vue-screener__settings-button", [
            show && "vue-screener__settings-button--active",
            (_a2 = $props.classes) == null ? void 0 : _a2.SETTINGS_DROPDOWN_BUTTON
          ]]),
          onClick: toggle
        }, [
          createVNode($setup["CogIcon"])
        ], 10, _hoisted_1)
      ];
    }),
    default: withCtx(() => {
      var _a2, _b;
      return [
        createBaseVNode(
          "h3",
          {
            class: normalizeClass([
              "vue-screener__settings-heading",
              (_a2 = $props.classes) == null ? void 0 : _a2.SETTINGS_DROPDOWN_SUB_HEADING
            ])
          },
          " Search ",
          2
          /* CLASS */
        ),
        createBaseVNode(
          "div",
          {
            class: normalizeClass([
              "vue-screener__settings__options",
              (_b = $props.classes) == null ? void 0 : _b.SETTINGS_DROPDOWN_OPTIONS
            ])
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.getOptions, (option, i) => {
                var _a3;
                return openBlock(), createElementBlock("button", {
                  key: i,
                  class: normalizeClass(["vue-screener__settings__options-button", [
                    {
                      "vue-screener__settings__options-button--active": option.isActive
                    },
                    "vue-screener__settings__options-button--" + option.id,
                    (_a3 = $props.classes) == null ? void 0 : _a3.SETTINGS_DROPDOWN_OPTIONS_BUTTON
                  ]]),
                  title: option.title,
                  onClick: ($event) => $setup.toggleOption(option.id)
                }, toDisplayString(option.text), 11, _hoisted_2);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ),
        _hoisted_3,
        createVNode($setup["ViewSelector"], {
          class: "vue-screener__view-selector",
          "active-format": $props.activeFormat,
          classes: $props.classes,
          onSelectFormat: _cache[0] || (_cache[0] = ($event) => $setup.emit("select-format", $event))
        }, null, 8, ["active-format", "classes"])
      ];
    }),
    _: 1
    /* STABLE */
  }, 8, ["class"]);
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
    return row.filter((field) => pickFields2.includes(field.key));
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
const meetsCriteria = (inputText, pattern, options) => {
  const { matchCase = false, matchWord = false, useRegExp = false } = options;
  const flags = matchCase ? "g" : "gi";
  if (matchWord) {
    pattern = `\\b(${pattern})\\b`;
  }
  if (!useRegExp) {
    inputText = escapeRegExp(inputText);
  }
  return new RegExp(pattern, flags).test(inputText);
};
function search(options) {
  let { searchQuery = "" } = options;
  const {
    rows,
    useRegExp = false,
    matchCase = false,
    matchWord = false
  } = options;
  if (!useRegExp || !isValidRegExp(searchQuery)) {
    searchQuery = escapeRegExp(searchQuery);
  }
  return rows.filter((row) => {
    return row.some((field) => {
      const value = String(field.value ?? "");
      if (getTypeOf(value)) {
        return meetsCriteria(String(field.value ?? ""), searchQuery, {
          matchCase,
          matchWord,
          useRegExp
        });
      }
      return false;
    });
  });
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
    classes: { type: Object, required: false, default: () => ({}) }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const searchQuery = ref("");
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
    const onSearch = (query) => {
      searchQuery.value = query;
    };
    const onChangeSearchOptions = (options) => {
      searchOptions.value = options;
      onSearch(searchQuery.value);
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
    const __returned__ = { props, searchQuery, stagedCurrentPage, stagedPerPage, renderFormat, searchOptions, sortField, sortDirection, isValidInput: isValidInput$1, isRegExFriendlySearchQuery, getNormalisedData, getFields: getFields$1, shouldUseRegEx, shouldMatchCase, shouldMatchWord, getSearchedData, getSortedData, getPaginatedData, onSearch, onChangeSearchOptions, onSelectFormat, onChangePage, onChangePerPage, handleSort, JsonView, TableView, VueScreenerSearch, Pagination, ErrorMessage, Settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "section",
    {
      class: normalizeClass(["vue-screener", $props.classes.SCREENER])
    },
    [
      $setup.isValidInput ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createBaseVNode(
            "header",
            {
              class: normalizeClass(["vue-screener__header", $props.classes.HEADER])
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(["vue-screener__header-title", $props.classes.HEADER_TITLE])
                },
                toDisplayString($setup.props.title),
                3
                /* TEXT, CLASS */
              ),
              createVNode($setup["VueScreenerSearch"], {
                class: normalizeClass(["vue-screener__search", $props.classes.SEARCH_INPUT]),
                query: $setup.searchQuery,
                "is-valid-query": $setup.isRegExFriendlySearchQuery,
                "search-options": $setup.searchOptions,
                classes: $props.classes,
                onSearch: $setup.onSearch
              }, null, 8, ["class", "query", "is-valid-query", "search-options", "classes"]),
              createVNode($setup["Settings"], {
                "active-format": $setup.renderFormat,
                onSelectFormat: $setup.onSelectFormat,
                "search-options": $setup.searchOptions,
                onChangeSearchOptions: $setup.onChangeSearchOptions,
                classes: $props.classes
              }, null, 8, ["active-format", "search-options", "classes"])
            ],
            2
            /* CLASS */
          ),
          createBaseVNode(
            "main",
            {
              class: normalizeClass(["vue-screener__main", $props.classes.MAIN])
            },
            [
              $setup.renderFormat === "table" ? (openBlock(), createBlock($setup["TableView"], {
                key: 0,
                fields: $setup.getFields,
                rows: $setup.getPaginatedData,
                highlight: $setup.searchQuery,
                "sort-direction": $setup.sortDirection,
                "sort-field": $setup.sortField,
                classes: $props.classes,
                onOnSort: $setup.handleSort
              }, {
                "header-cell": withCtx((cellPops) => [
                  renderSlot(_ctx.$slots, "header-cell", normalizeProps(guardReactiveProps(cellPops)))
                ]),
                "value-cell": withCtx((cellPops) => [
                  renderSlot(_ctx.$slots, "value-cell", normalizeProps(guardReactiveProps(cellPops)))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["fields", "rows", "highlight", "sort-direction", "sort-field", "classes"])) : (openBlock(), createBlock($setup["JsonView"], {
                key: 1,
                data: $setup.getPaginatedData,
                class: normalizeClass($props.classes.JSON_VIEW)
              }, null, 8, ["data", "class"]))
            ],
            2
            /* CLASS */
          ),
          createBaseVNode(
            "footer",
            {
              class: normalizeClass(["vue-screener__footer", $props.classes.FOOTER])
            },
            [
              createVNode($setup["Pagination"], {
                "total-items": $setup.getSearchedData.length,
                "per-page": $setup.stagedPerPage,
                "current-page": $setup.stagedCurrentPage,
                classes: $props.classes,
                onChangePage: $setup.onChangePage,
                onChangePerPage: $setup.onChangePerPage
              }, null, 8, ["total-items", "per-page", "current-page", "classes"])
            ],
            2
            /* CLASS */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createBlock($setup["ErrorMessage"], {
        key: 1,
        message: "Invalid data was provided. Please provide an\n      array of objects or an array of arrays.",
        class: normalizeClass($props.classes.ERROR_MESSAGE)
      }, null, 8, ["class"]))
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/VueScreener.vue";
const VueScreener = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/VueScreener.vue"]]);
const baseData = [
  {
    id: 1,
    first_name: "Elicia",
    last_name: "Ivetts",
    email: "eivetts0@privacy.gov.au",
    gender: "Male",
    ip_address: "229.208.1.222"
  },
  {
    id: 2,
    first_name: "Korry",
    last_name: "O'Siaghail",
    email: "kosiaghail1@huffingtonpost.com",
    gender: "Female",
    ip_address: "31.95.2.206"
  },
  {
    id: 3,
    first_name: "Nick",
    last_name: "Millward",
    email: "nmillward2@paginegialle.it",
    gender: "Female",
    ip_address: "137.121.174.161"
  },
  {
    id: 4,
    first_name: "Link",
    last_name: "Aspden",
    email: "laspden3@yandex.ru",
    gender: "Male",
    ip_address: "130.125.108.185"
  },
  {
    id: 5,
    first_name: "Reynold",
    last_name: "Spiteri",
    email: "rspiteri4@eepurl.com",
    gender: "Female",
    ip_address: "135.199.193.154"
  },
  {
    id: 6,
    first_name: "Arney",
    last_name: "Despenser",
    email: "adespenser5@home.pl",
    gender: "Male",
    ip_address: "193.117.217.66"
  },
  {
    id: 7,
    first_name: "Lanni",
    last_name: "Costin",
    email: "lcostin6@multiply.com",
    gender: "Female",
    ip_address: "230.111.244.48"
  },
  {
    id: 8,
    first_name: "Nari",
    last_name: "Yandell",
    email: "nyandell7@ow.ly",
    gender: "Male",
    ip_address: "163.220.71.79"
  },
  {
    id: 9,
    first_name: "Thoma",
    last_name: "Andrioni",
    email: "tandrioni8@mtv.com",
    gender: "Female",
    ip_address: "155.39.106.44"
  },
  {
    id: 10,
    first_name: "Starr",
    last_name: "Malatalant",
    email: "smalatalant9@vinaora.com",
    gender: "Female",
    ip_address: "243.25.137.252"
  },
  {
    id: 11,
    first_name: "Urbanus",
    last_name: "Cratchley",
    email: "ucratchleya@paginegialle.it",
    gender: "Male",
    ip_address: "181.0.193.212"
  },
  {
    id: 12,
    first_name: "Lesly",
    last_name: "Hussy",
    email: "lhussyb@arizona.edu",
    gender: "Female",
    ip_address: "57.29.57.68"
  },
  {
    id: 13,
    first_name: "Nat",
    last_name: "Heister",
    email: "nheisterc@washingtonpost.com",
    gender: "Male",
    ip_address: "246.84.61.126"
  },
  {
    id: 14,
    first_name: "Tomi",
    last_name: "Hawket",
    email: "thawketd@cargocollective.com",
    gender: "Female",
    ip_address: "125.42.119.207"
  },
  {
    id: 15,
    first_name: "Keely",
    last_name: "Kidd",
    email: "kkidde@cmu.edu",
    gender: "Female",
    ip_address: "99.24.81.131"
  },
  {
    id: 16,
    first_name: "Baxie",
    last_name: "Rillatt",
    email: "brillattf@usa.gov",
    gender: "Male",
    ip_address: "95.69.9.253"
  },
  {
    id: 17,
    first_name: "Mellisa",
    last_name: "Twigger",
    email: "mtwiggerg@behance.net",
    gender: "Male",
    ip_address: "188.222.131.241"
  },
  {
    id: 18,
    first_name: "Bekki",
    last_name: "Blissett",
    email: "bblissetth@cpanel.net",
    gender: "Female",
    ip_address: "34.5.253.189"
  },
  {
    id: 19,
    first_name: "Dora",
    last_name: "Rosita",
    email: "drositai@google.ca",
    gender: "Male",
    ip_address: "146.218.11.105"
  },
  {
    id: 20,
    first_name: "Marcello",
    last_name: "Fassam",
    email: "mfassamj@prweb.com",
    gender: "Female",
    ip_address: "239.112.226.230"
  },
  {
    id: 21,
    first_name: "Marya",
    last_name: "Masarrat",
    email: "mmasarratk@unesco.org",
    gender: "Male",
    ip_address: "198.108.170.18"
  },
  {
    id: 22,
    first_name: "Thomasine",
    last_name: "Bonsul",
    email: "tbonsull@goodreads.com",
    gender: "Female",
    ip_address: "111.125.215.30"
  },
  {
    id: 23,
    first_name: "Ileana",
    last_name: "Cadle",
    email: "icadlem@tmall.com",
    gender: "Male",
    ip_address: "24.40.227.130"
  },
  {
    id: 24,
    first_name: "Allyn",
    last_name: "Geertz",
    email: "ageertzn@istockphoto.com",
    gender: "Male",
    ip_address: "191.16.21.95"
  },
  {
    id: 25,
    first_name: "Bendite",
    last_name: "Faccini",
    email: "bfaccinio@eepurl.com",
    gender: "Male",
    ip_address: "103.239.124.138"
  },
  {
    id: 26,
    first_name: "Barde",
    last_name: "Weld",
    email: "bweldp@washingtonpost.com",
    gender: "Male",
    ip_address: "252.86.225.47"
  },
  {
    id: 27,
    first_name: "Amberly",
    last_name: "Nassie",
    email: "anassieq@apache.org",
    gender: "Genderfluid",
    ip_address: "43.126.89.28"
  },
  {
    id: 28,
    first_name: "Sterling",
    last_name: "Burne",
    email: "sburner@arstechnica.com",
    gender: "Male",
    ip_address: "176.20.2.28"
  },
  {
    id: 29,
    first_name: "Veronique",
    last_name: "Sherel",
    email: "vsherels@paypal.com",
    gender: "Male",
    ip_address: "78.251.9.78"
  },
  {
    id: 30,
    first_name: "Caria",
    last_name: "Newland",
    email: "cnewlandt@chronoengine.com",
    gender: "Female",
    ip_address: "181.12.28.234"
  },
  {
    id: 31,
    first_name: "Lorita",
    last_name: "Westcar",
    email: "lwestcaru@theatlantic.com",
    gender: "Female",
    ip_address: "176.180.126.100"
  },
  {
    id: 32,
    first_name: "Devondra",
    last_name: "Mabbe",
    email: "dmabbev@ning.com",
    gender: "Female",
    ip_address: "166.65.47.41"
  },
  {
    id: 33,
    first_name: "Blakeley",
    last_name: "Petrowsky",
    email: "bpetrowskyw@unc.edu",
    gender: "Male",
    ip_address: "143.53.39.156"
  },
  {
    id: 34,
    first_name: "Brock",
    last_name: "Leall",
    email: "bleallx@discuz.net",
    gender: "Male",
    ip_address: "252.220.229.219"
  },
  {
    id: 35,
    first_name: "Cristy",
    last_name: "Guilder",
    email: "cguildery@businesswire.com",
    gender: "Male",
    ip_address: "232.116.36.13"
  },
  {
    id: 36,
    first_name: "Heywood",
    last_name: "Coldrick",
    email: "hcoldrickz@cloudflare.com",
    gender: "Female",
    ip_address: "54.99.143.60"
  },
  {
    id: 37,
    first_name: "Bogart",
    last_name: "Lord",
    email: "blord10@java.com",
    gender: "Male",
    ip_address: "57.176.157.241"
  },
  {
    id: 38,
    first_name: "Theodora",
    last_name: "Abate",
    email: "tabate11@tripadvisor.com",
    gender: "Female",
    ip_address: "155.111.93.180"
  },
  {
    id: 39,
    first_name: "Trevar",
    last_name: "Melledy",
    email: "tmelledy12@businessinsider.com",
    gender: "Female",
    ip_address: "120.219.36.151"
  },
  {
    id: 40,
    first_name: "Remy",
    last_name: "Camier",
    email: "rcamier13@merriam-webster.com",
    gender: "Male",
    ip_address: "48.215.203.94"
  },
  {
    id: 41,
    first_name: "Rafaelia",
    last_name: "Shillinglaw",
    email: "rshillinglaw14@umich.edu",
    gender: "Female",
    ip_address: "173.15.236.64"
  },
  {
    id: 42,
    first_name: "Zorina",
    last_name: "De Mitri",
    email: "zdemitri15@sphinn.com",
    gender: "Male",
    ip_address: "105.1.132.156"
  },
  {
    id: 43,
    first_name: "Lothario",
    last_name: "Macknish",
    email: "lmacknish16@live.com",
    gender: "Male",
    ip_address: "92.107.32.5"
  },
  {
    id: 44,
    first_name: "Trina",
    last_name: "Rathe",
    email: "trathe17@ft.com",
    gender: "Female",
    ip_address: "138.146.55.6"
  },
  {
    id: 45,
    first_name: "Grete",
    last_name: "Handmore",
    email: "ghandmore18@topsy.com",
    gender: "Male",
    ip_address: "39.57.200.172"
  },
  {
    id: 46,
    first_name: "Isaak",
    last_name: "Milius",
    email: "imilius19@163.com",
    gender: "Female",
    ip_address: "28.222.56.38"
  },
  {
    id: 47,
    first_name: "Jessika",
    last_name: "Mengue",
    email: "jmengue1a@google.com",
    gender: "Genderfluid",
    ip_address: "182.6.146.209"
  },
  {
    id: 48,
    first_name: "Felecia",
    last_name: "Peirazzi",
    email: "fpeirazzi1b@jimdo.com",
    gender: "Male",
    ip_address: "0.0.131.149"
  },
  {
    id: 49,
    first_name: "Sibelle",
    last_name: "Metzig",
    email: "smetzig1c@clickbank.net",
    gender: "Female",
    ip_address: "101.107.46.20"
  },
  {
    id: 50,
    first_name: "Tami",
    last_name: "Haill",
    email: "thaill1d@phpbb.com",
    gender: "Female",
    ip_address: "114.206.60.208"
  },
  {
    id: 51,
    first_name: "Deanna",
    last_name: "Grinyakin",
    email: "dgrinyakin1e@nba.com",
    gender: "Female",
    ip_address: "212.171.218.14"
  },
  {
    id: 52,
    first_name: "Elyn",
    last_name: "Dayes",
    email: "edayes1f@bbc.co.uk",
    gender: "Polygender",
    ip_address: "46.220.192.21"
  },
  {
    id: 53,
    first_name: "Ferris",
    last_name: "Klimentyev",
    email: "fklimentyev1g@apache.org",
    gender: "Male",
    ip_address: "242.135.9.146"
  },
  {
    id: 54,
    first_name: "Ives",
    last_name: "Garnam",
    email: "igarnam1h@freewebs.com",
    gender: "Male",
    ip_address: "173.85.233.215"
  },
  {
    id: 55,
    first_name: "Emmalee",
    last_name: "Flockhart",
    email: "eflockhart1i@reuters.com",
    gender: "Male",
    ip_address: "51.240.112.122"
  },
  {
    id: 56,
    first_name: "Nichole",
    last_name: "Ludlom",
    email: "nludlom1j@w3.org",
    gender: "Agender",
    ip_address: "252.40.15.102"
  },
  {
    id: 57,
    first_name: "Ruthanne",
    last_name: "Prys",
    email: "rprys1k@furl.net",
    gender: "Female",
    ip_address: "208.42.248.135"
  },
  {
    id: 58,
    first_name: "Porty",
    last_name: "Kiehne",
    email: "pkiehne1l@flavors.me",
    gender: "Female",
    ip_address: "236.158.227.209"
  },
  {
    id: 59,
    first_name: "Edd",
    last_name: "Bernardon",
    email: "ebernardon1m@behance.net",
    gender: "Male",
    ip_address: "12.168.8.28"
  },
  {
    id: 60,
    first_name: "Lay",
    last_name: "Catherine",
    email: "lcatherine1n@sitemeter.com",
    gender: "Female",
    ip_address: "29.123.222.86"
  },
  {
    id: 61,
    first_name: "Annalise",
    last_name: "Woolmington",
    email: "awoolmington1o@skyrock.com",
    gender: "Female",
    ip_address: "141.78.194.165"
  },
  {
    id: 62,
    first_name: "Billie",
    last_name: "D'Cruze",
    email: "bdcruze1p@spiegel.de",
    gender: "Female",
    ip_address: "40.198.214.13"
  },
  {
    id: 63,
    first_name: "Meyer",
    last_name: "Toffel",
    email: "mtoffel1q@devhub.com",
    gender: "Female",
    ip_address: "21.51.3.188"
  },
  {
    id: 64,
    first_name: "Genevieve",
    last_name: "Loach",
    email: "gloach1r@icio.us",
    gender: "Female",
    ip_address: "94.194.160.40"
  },
  {
    id: 65,
    first_name: "Prudi",
    last_name: "Huckerbe",
    email: "phuckerbe1s@sbwire.com",
    gender: "Female",
    ip_address: "218.224.38.8"
  },
  {
    id: 66,
    first_name: "Cesare",
    last_name: "Shearman",
    email: "cshearman1t@imdb.com",
    gender: "Female",
    ip_address: "164.46.150.157"
  },
  {
    id: 67,
    first_name: "Thedric",
    last_name: "Banaszkiewicz",
    email: "tbanaszkiewicz1u@list-manage.com",
    gender: "Female",
    ip_address: "196.123.115.127"
  },
  {
    id: 68,
    first_name: "Birk",
    last_name: "Jedrzejczak",
    email: "bjedrzejczak1v@deviantart.com",
    gender: "Female",
    ip_address: "74.156.64.232"
  },
  {
    id: 69,
    first_name: "Lisbeth",
    last_name: "O' Lone",
    email: "lolone1w@gov.uk",
    gender: "Male",
    ip_address: "79.70.138.129"
  },
  {
    id: 70,
    first_name: "Janet",
    last_name: "Labes",
    email: "jlabes1x@vistaprint.com",
    gender: "Female",
    ip_address: "51.9.225.251"
  },
  {
    id: 71,
    first_name: "Jeffrey",
    last_name: "Yven",
    email: "jyven1y@linkedin.com",
    gender: "Male",
    ip_address: "202.125.227.105"
  },
  {
    id: 72,
    first_name: "Clementina",
    last_name: "Anster",
    email: "canster1z@prnewswire.com",
    gender: "Female",
    ip_address: "95.67.255.160"
  },
  {
    id: 73,
    first_name: "Bobina",
    last_name: "Lansdale",
    email: "blansdale20@wisc.edu",
    gender: "Female",
    ip_address: "155.63.112.156"
  },
  {
    id: 74,
    first_name: "Florri",
    last_name: "Grayer",
    email: "fgrayer21@macromedia.com",
    gender: "Female",
    ip_address: "206.228.104.250"
  },
  {
    id: 75,
    first_name: "Terrell",
    last_name: "Lembrick",
    email: "tlembrick22@jiathis.com",
    gender: "Female",
    ip_address: "124.66.119.249"
  },
  {
    id: 76,
    first_name: "Hermia",
    last_name: "Strowan",
    email: "hstrowan23@bbb.org",
    gender: "Female",
    ip_address: "11.195.97.251"
  },
  {
    id: 77,
    first_name: "Adriano",
    last_name: "Reschke",
    email: "areschke24@google.co.jp",
    gender: "Male",
    ip_address: "137.86.220.113"
  },
  {
    id: 78,
    first_name: "Kelby",
    last_name: "Schinetti",
    email: "kschinetti25@freewebs.com",
    gender: "Genderfluid",
    ip_address: "184.102.182.183"
  },
  {
    id: 79,
    first_name: "Jereme",
    last_name: "Cashman",
    email: "jcashman26@imdb.com",
    gender: "Male",
    ip_address: "143.227.108.250"
  },
  {
    id: 80,
    first_name: "Joyce",
    last_name: "Jakuszewski",
    email: "jjakuszewski27@cdc.gov",
    gender: "Male",
    ip_address: "36.177.55.36"
  },
  {
    id: 81,
    first_name: "Jennette",
    last_name: "Seakings",
    email: "jseakings28@archive.org",
    gender: "Non-binary",
    ip_address: "116.73.45.114"
  },
  {
    id: 82,
    first_name: "Suzy",
    last_name: "McMinn",
    email: "smcminn29@yandex.ru",
    gender: "Female",
    ip_address: "219.165.54.35"
  },
  {
    id: 83,
    first_name: "Brennan",
    last_name: "Elsom",
    email: "belsom2a@dropbox.com",
    gender: "Female",
    ip_address: "173.104.246.42"
  },
  {
    id: 84,
    first_name: "Viva",
    last_name: "Cahey",
    email: "vcahey2b@phpbb.com",
    gender: "Female",
    ip_address: "194.118.3.95"
  },
  {
    id: 85,
    first_name: "Garret",
    last_name: "Bone",
    email: "gbone2c@comsenz.com",
    gender: "Male",
    ip_address: "185.18.176.132"
  },
  {
    id: 86,
    first_name: "Lewes",
    last_name: "Kelleher",
    email: "lkelleher2d@wikia.com",
    gender: "Female",
    ip_address: "208.229.57.161"
  },
  {
    id: 87,
    first_name: "Bethanne",
    last_name: "Pioli",
    email: "bpioli2e@themeforest.net",
    gender: "Male",
    ip_address: "238.46.68.150"
  },
  {
    id: 88,
    first_name: "Gaile",
    last_name: "Whannel",
    email: "gwhannel2f@go.com",
    gender: "Male",
    ip_address: "116.178.50.85"
  },
  {
    id: 89,
    first_name: "Saba",
    last_name: "Darkin",
    email: "sdarkin2g@howstuffworks.com",
    gender: "Male",
    ip_address: "211.110.200.92"
  },
  {
    id: 90,
    first_name: "Orv",
    last_name: "Syme",
    email: "osyme2h@nydailynews.com",
    gender: "Male",
    ip_address: "247.128.67.187"
  },
  {
    id: 91,
    first_name: "Lorna",
    last_name: "Brauns",
    email: "lbrauns2i@fastcompany.com",
    gender: "Female",
    ip_address: "141.206.182.175"
  },
  {
    id: 92,
    first_name: "Thea",
    last_name: "Van Der Walt",
    email: "tvanderwalt2j@4shared.com",
    gender: "Agender",
    ip_address: "40.254.114.223"
  },
  {
    id: 93,
    first_name: "Minerva",
    last_name: "Milligan",
    email: "mmilligan2k@opera.com",
    gender: "Female",
    ip_address: "114.52.211.38"
  },
  {
    id: 94,
    first_name: "Shoshana",
    last_name: "Hallt",
    email: "shallt2l@mail.ru",
    gender: "Female",
    ip_address: "242.135.42.152"
  },
  {
    id: 95,
    first_name: "Vonnie",
    last_name: "Wroath",
    email: "vwroath2m@icq.com",
    gender: "Female",
    ip_address: "8.130.5.91"
  },
  {
    id: 96,
    first_name: "Karlens",
    last_name: "Alenin",
    email: "kalenin2n@springer.com",
    gender: "Male",
    ip_address: "52.239.31.94"
  },
  {
    id: 97,
    first_name: "El(izabeth",
    last_name: "Toffanini",
    email: "etoffanini2o@weebly.com",
    gender: "Non-binary",
    ip_address: "24.131.131.174"
  },
  {
    id: 98,
    first_name: "Nedda",
    last_name: "Cowle",
    email: "ncowle2p@nationalgeographic.com",
    gender: "Female",
    ip_address: "211.103.77.133"
  },
  {
    id: 99,
    first_name: "Stefa",
    last_name: "Fell",
    email: "sfell2q@amazon.com",
    gender: "Female",
    ip_address: "105.201.95.48"
  },
  {
    id: 100,
    first_name: "Travis",
    last_name: "Klammt",
    email: "tklammt2r@princeton.edu",
    gender: "Female",
    ip_address: "43.50.19.173"
  }
];
const primitivesData = [
  [
    1,
    "Elicia",
    "Ivetts",
    "eivetts0@privacy.gov.au",
    "Male",
    "229.208.1.222"
  ],
  [
    2,
    "Korry",
    "O'Siaghail",
    "kosiaghail1@huffingtonpost.com",
    "Female",
    "31.95.2.206"
  ],
  [
    3,
    "Nick",
    "Millward",
    "nmillward2@paginegialle.it",
    "Female",
    "137.121.174.161"
  ],
  [
    4,
    "Link",
    "Aspden",
    "laspden3@yandex.ru",
    "Male",
    "130.125.108.185"
  ],
  [
    5,
    "Reynold",
    "Spiteri",
    "rspiteri4@eepurl.com",
    "Female",
    "135.199.193.154"
  ],
  [
    6,
    "Arney",
    "Despenser",
    "adespenser5@home.pl",
    "Male",
    "193.117.217.66"
  ],
  [
    7,
    "Lanni",
    "Costin",
    "lcostin6@multiply.com",
    "Female",
    "230.111.244.48"
  ],
  [
    8,
    "Nari",
    "Yandell",
    "nyandell7@ow.ly",
    "Male",
    "163.220.71.79"
  ],
  [
    9,
    "Thoma",
    "Andrioni",
    "tandrioni8@mtv.com",
    "Female",
    "155.39.106.44"
  ],
  [
    10,
    "Starr",
    "Malatalant",
    "smalatalant9@vinaora.com",
    "Female",
    "243.25.137.252"
  ],
  [
    11,
    "Urbanus",
    "Cratchley",
    "ucratchleya@paginegialle.it",
    "Male",
    "181.0.193.212"
  ],
  [
    12,
    "Lesly",
    "Hussy",
    "lhussyb@arizona.edu",
    "Female",
    "57.29.57.68"
  ],
  [
    13,
    "Nat",
    "Heister",
    "nheisterc@washingtonpost.com",
    "Male",
    "246.84.61.126"
  ],
  [
    14,
    "Tomi",
    "Hawket",
    "thawketd@cargocollective.com",
    "Female",
    "125.42.119.207"
  ],
  [
    15,
    "Keely",
    "Kidd",
    "kkidde@cmu.edu",
    "Female",
    "99.24.81.131"
  ],
  [
    16,
    "Baxie",
    "Rillatt",
    "brillattf@usa.gov",
    "Male",
    "95.69.9.253"
  ],
  [
    17,
    "Mellisa",
    "Twigger",
    "mtwiggerg@behance.net",
    "Male",
    "188.222.131.241"
  ],
  [
    18,
    "Bekki",
    "Blissett",
    "bblissetth@cpanel.net",
    "Female",
    "34.5.253.189"
  ],
  [
    19,
    "Dora",
    "Rosita",
    "drositai@google.ca",
    "Male",
    "146.218.11.105"
  ],
  [
    20,
    "Marcello",
    "Fassam",
    "mfassamj@prweb.com",
    "Female",
    "239.112.226.230"
  ],
  [
    21,
    "Marya",
    "Masarrat",
    "mmasarratk@unesco.org",
    "Male",
    "198.108.170.18"
  ],
  [
    22,
    "Thomasine",
    "Bonsul",
    "tbonsull@goodreads.com",
    "Female",
    "111.125.215.30"
  ],
  [
    23,
    "Ileana",
    "Cadle",
    "icadlem@tmall.com",
    "Male",
    "24.40.227.130"
  ],
  [
    24,
    "Allyn",
    "Geertz",
    "ageertzn@istockphoto.com",
    "Male",
    "191.16.21.95"
  ],
  [
    25,
    "Bendite",
    "Faccini",
    "bfaccinio@eepurl.com",
    "Male",
    "103.239.124.138"
  ],
  [
    26,
    "Barde",
    "Weld",
    "bweldp@washingtonpost.com",
    "Male",
    "252.86.225.47"
  ],
  [
    27,
    "Amberly",
    "Nassie",
    "anassieq@apache.org",
    "Genderfluid",
    "43.126.89.28"
  ],
  [
    28,
    "Sterling",
    "Burne",
    "sburner@arstechnica.com",
    "Male",
    "176.20.2.28"
  ],
  [
    29,
    "Veronique",
    "Sherel",
    "vsherels@paypal.com",
    "Male",
    "78.251.9.78"
  ],
  [
    30,
    "Caria",
    "Newland",
    "cnewlandt@chronoengine.com",
    "Female",
    "181.12.28.234"
  ],
  [
    31,
    "Lorita",
    "Westcar",
    "lwestcaru@theatlantic.com",
    "Female",
    "176.180.126.100"
  ],
  [
    32,
    "Devondra",
    "Mabbe",
    "dmabbev@ning.com",
    "Female",
    "166.65.47.41"
  ],
  [
    33,
    "Blakeley",
    "Petrowsky",
    "bpetrowskyw@unc.edu",
    "Male",
    "143.53.39.156"
  ],
  [
    34,
    "Brock",
    "Leall",
    "bleallx@discuz.net",
    "Male",
    "252.220.229.219"
  ],
  [
    35,
    "Cristy",
    "Guilder",
    "cguildery@businesswire.com",
    "Male",
    "232.116.36.13"
  ],
  [
    36,
    "Heywood",
    "Coldrick",
    "hcoldrickz@cloudflare.com",
    "Female",
    "54.99.143.60"
  ],
  [
    37,
    "Bogart",
    "Lord",
    "blord10@java.com",
    "Male",
    "57.176.157.241"
  ],
  [
    38,
    "Theodora",
    "Abate",
    "tabate11@tripadvisor.com",
    "Female",
    "155.111.93.180"
  ],
  [
    39,
    "Trevar",
    "Melledy",
    "tmelledy12@businessinsider.com",
    "Female",
    "120.219.36.151"
  ],
  [
    40,
    "Remy",
    "Camier",
    "rcamier13@merriam-webster.com",
    "Male",
    "48.215.203.94"
  ],
  [
    41,
    "Rafaelia",
    "Shillinglaw",
    "rshillinglaw14@umich.edu",
    "Female",
    "173.15.236.64"
  ],
  [
    42,
    "Zorina",
    "De Mitri",
    "zdemitri15@sphinn.com",
    "Male",
    "105.1.132.156"
  ],
  [
    43,
    "Lothario",
    "Macknish",
    "lmacknish16@live.com",
    "Male",
    "92.107.32.5"
  ],
  [
    44,
    "Trina",
    "Rathe",
    "trathe17@ft.com",
    "Female",
    "138.146.55.6"
  ],
  [
    45,
    "Grete",
    "Handmore",
    "ghandmore18@topsy.com",
    "Male",
    "39.57.200.172"
  ],
  [
    46,
    "Isaak",
    "Milius",
    "imilius19@163.com",
    "Female",
    "28.222.56.38"
  ],
  [
    47,
    "Jessika",
    "Mengue",
    "jmengue1a@google.com",
    "Genderfluid",
    "182.6.146.209"
  ],
  [
    48,
    "Felecia",
    "Peirazzi",
    "fpeirazzi1b@jimdo.com",
    "Male",
    "0.0.131.149"
  ],
  [
    49,
    "Sibelle",
    "Metzig",
    "smetzig1c@clickbank.net",
    "Female",
    "101.107.46.20"
  ],
  [
    50,
    "Tami",
    "Haill",
    "thaill1d@phpbb.com",
    "Female",
    "114.206.60.208"
  ],
  [
    51,
    "Deanna",
    "Grinyakin",
    "dgrinyakin1e@nba.com",
    "Female",
    "212.171.218.14"
  ],
  [
    52,
    "Elyn",
    "Dayes",
    "edayes1f@bbc.co.uk",
    "Polygender",
    "46.220.192.21"
  ],
  [
    53,
    "Ferris",
    "Klimentyev",
    "fklimentyev1g@apache.org",
    "Male",
    "242.135.9.146"
  ],
  [
    54,
    "Ives",
    "Garnam",
    "igarnam1h@freewebs.com",
    "Male",
    "173.85.233.215"
  ],
  [
    55,
    "Emmalee",
    "Flockhart",
    "eflockhart1i@reuters.com",
    "Male",
    "51.240.112.122"
  ],
  [
    56,
    "Nichole",
    "Ludlom",
    "nludlom1j@w3.org",
    "Agender",
    "252.40.15.102"
  ],
  [
    57,
    "Ruthanne",
    "Prys",
    "rprys1k@furl.net",
    "Female",
    "208.42.248.135"
  ],
  [
    58,
    "Porty",
    "Kiehne",
    "pkiehne1l@flavors.me",
    "Female",
    "236.158.227.209"
  ],
  [
    59,
    "Edd",
    "Bernardon",
    "ebernardon1m@behance.net",
    "Male",
    "12.168.8.28"
  ],
  [
    60,
    "Lay",
    "Catherine",
    "lcatherine1n@sitemeter.com",
    "Female",
    "29.123.222.86"
  ],
  [
    61,
    "Annalise",
    "Woolmington",
    "awoolmington1o@skyrock.com",
    "Female",
    "141.78.194.165"
  ],
  [
    62,
    "Billie",
    "D'Cruze",
    "bdcruze1p@spiegel.de",
    "Female",
    "40.198.214.13"
  ],
  [
    63,
    "Meyer",
    "Toffel",
    "mtoffel1q@devhub.com",
    "Female",
    "21.51.3.188"
  ],
  [
    64,
    "Genevieve",
    "Loach",
    "gloach1r@icio.us",
    "Female",
    "94.194.160.40"
  ],
  [
    65,
    "Prudi",
    "Huckerbe",
    "phuckerbe1s@sbwire.com",
    "Female",
    "218.224.38.8"
  ],
  [
    66,
    "Cesare",
    "Shearman",
    "cshearman1t@imdb.com",
    "Female",
    "164.46.150.157"
  ],
  [
    67,
    "Thedric",
    "Banaszkiewicz",
    "tbanaszkiewicz1u@list-manage.com",
    "Female",
    "196.123.115.127"
  ],
  [
    68,
    "Birk",
    "Jedrzejczak",
    "bjedrzejczak1v@deviantart.com",
    "Female",
    "74.156.64.232"
  ],
  [
    69,
    "Lisbeth",
    "O' Lone",
    "lolone1w@gov.uk",
    "Male",
    "79.70.138.129"
  ],
  [
    70,
    "Janet",
    "Labes",
    "jlabes1x@vistaprint.com",
    "Female",
    "51.9.225.251"
  ],
  [
    71,
    "Jeffrey",
    "Yven",
    "jyven1y@linkedin.com",
    "Male",
    "202.125.227.105"
  ],
  [
    72,
    "Clementina",
    "Anster",
    "canster1z@prnewswire.com",
    "Female",
    "95.67.255.160"
  ],
  [
    73,
    "Bobina",
    "Lansdale",
    "blansdale20@wisc.edu",
    "Female",
    "155.63.112.156"
  ],
  [
    74,
    "Florri",
    "Grayer",
    "fgrayer21@macromedia.com",
    "Female",
    "206.228.104.250"
  ],
  [
    75,
    "Terrell",
    "Lembrick",
    "tlembrick22@jiathis.com",
    "Female",
    "124.66.119.249"
  ],
  [
    76,
    "Hermia",
    "Strowan",
    "hstrowan23@bbb.org",
    "Female",
    "11.195.97.251"
  ],
  [
    77,
    "Adriano",
    "Reschke",
    "areschke24@google.co.jp",
    "Male",
    "137.86.220.113"
  ],
  [
    78,
    "Kelby",
    "Schinetti",
    "kschinetti25@freewebs.com",
    "Genderfluid",
    "184.102.182.183"
  ],
  [
    79,
    "Jereme",
    "Cashman",
    "jcashman26@imdb.com",
    "Male",
    "143.227.108.250"
  ],
  [
    80,
    "Joyce",
    "Jakuszewski",
    "jjakuszewski27@cdc.gov",
    "Male",
    "36.177.55.36"
  ],
  [
    81,
    "Jennette",
    "Seakings",
    "jseakings28@archive.org",
    "Non-binary",
    "116.73.45.114"
  ],
  [
    82,
    "Suzy",
    "McMinn",
    "smcminn29@yandex.ru",
    "Female",
    "219.165.54.35"
  ],
  [
    83,
    "Brennan",
    "Elsom",
    "belsom2a@dropbox.com",
    "Female",
    "173.104.246.42"
  ],
  [
    84,
    "Viva",
    "Cahey",
    "vcahey2b@phpbb.com",
    "Female",
    "194.118.3.95"
  ],
  [
    85,
    "Garret",
    "Bone",
    "gbone2c@comsenz.com",
    "Male",
    "185.18.176.132"
  ],
  [
    86,
    "Lewes",
    "Kelleher",
    "lkelleher2d@wikia.com",
    "Female",
    "208.229.57.161"
  ],
  [
    87,
    "Bethanne",
    "Pioli",
    "bpioli2e@themeforest.net",
    "Male",
    "238.46.68.150"
  ],
  [
    88,
    "Gaile",
    "Whannel",
    "gwhannel2f@go.com",
    "Male",
    "116.178.50.85"
  ],
  [
    89,
    "Saba",
    "Darkin",
    "sdarkin2g@howstuffworks.com",
    "Male",
    "211.110.200.92"
  ],
  [
    90,
    "Orv",
    "Syme",
    "osyme2h@nydailynews.com",
    "Male",
    "247.128.67.187"
  ],
  [
    91,
    "Lorna",
    "Brauns",
    "lbrauns2i@fastcompany.com",
    "Female",
    "141.206.182.175"
  ],
  [
    92,
    "Thea",
    "Van Der Walt",
    "tvanderwalt2j@4shared.com",
    "Agender",
    "40.254.114.223"
  ],
  [
    93,
    "Minerva",
    "Milligan",
    "mmilligan2k@opera.com",
    "Female",
    "114.52.211.38"
  ],
  [
    94,
    "Shoshana",
    "Hallt",
    "shallt2l@mail.ru",
    "Female",
    "242.135.42.152"
  ],
  [
    95,
    "Vonnie",
    "Wroath",
    "vwroath2m@icq.com",
    "Female",
    "8.130.5.91"
  ],
  [
    96,
    "Karlens",
    "Alenin",
    "kalenin2n@springer.com",
    "Male",
    "52.239.31.94"
  ],
  [
    97,
    "Elizabeth",
    "Toffanini",
    "etoffanini2o@weebly.com",
    "Non-binary",
    "24.131.131.174"
  ],
  [
    98,
    "Nedda",
    "Cowle",
    "ncowle2p@nationalgeographic.com",
    "Female",
    "211.103.77.133"
  ],
  [
    99,
    "Stefa",
    "Fell",
    "sfell2q@amazon.com",
    "Female",
    "105.201.95.48"
  ],
  [
    100,
    "Travis",
    "Klammt",
    "tklammt2r@princeton.edu",
    "Female",
    "43.50.19.173"
  ]
];
export {
  HeaderCell as H,
  ValueCell as V,
  _export_sfc as _,
  VueScreener as a,
  baseData as b,
  primitivesData as p
};
