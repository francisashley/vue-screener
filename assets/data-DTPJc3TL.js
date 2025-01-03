import { aF as ref, aG as onMounted, aH as onUnmounted, ar as defineComponent, aI as twMerge$1, at as openBlock, aC as createElementBlock, aJ as renderSlot, aK as normalizeClass, au as createBlock, av as withCtx, aw as createBaseVNode, aL as extendTailwindMerge, aM as computed, aB as createCommentVNode, aN as Icon, aA as createTextVNode, aO as toDisplayString, aP as debounce, aQ as watchEffect, aR as normalizeStyle, ax as createVNode, aE as Fragment, aD as renderList, aS as watch, aT as v4, aU as orderBy } from "./vendor-BjHKTJun.js";
function observeSize(element, onChangeCallback) {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      let width = null;
      let height = null;
      if (entry.contentBoxSize) {
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
        width = contentBoxSize.inlineSize;
        height = contentBoxSize.blockSize;
      } else {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
      }
      onChangeCallback({ width, height });
    }
  });
  resizeObserver.observe(element);
  return () => {
    resizeObserver.unobserve(element);
  };
}
const useElementSize = (target, handler, removeWidthObserver) => {
  if (!window) return;
  const height = ref(null);
  const width = ref(null);
  onMounted(() => {
    const el = target.value;
    if (!el) return;
    removeWidthObserver = observeSize(target.value, (size) => {
      height.value = size.height;
      width.value = size.width;
      handler(size);
    });
  });
  onUnmounted(() => removeWidthObserver == null ? void 0 : removeWidthObserver());
  return { height, width };
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableRow",
  props: {
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-b last:vsc-border-b-0 vsc-border-zinc-700 vsc-h-fit",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$n.__file = "src/components/table/VueScreenerTableRow.vue";
const VueScreenerTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableRow.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableSummaryRow",
  props: {
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, VueScreenerTableRow, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["VueScreenerTableRow"], null, {
    default: withCtx(() => [
      createBaseVNode(
        "div",
        {
          class: normalizeClass($setup.twMerge("vsc-col-span-full", $setup.props.class))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$m.__file = "src/components/table/VueScreenerTableSummaryRow.vue";
const VueScreenerTableSummaryRow = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableSummaryRow.vue"]]);
const twMerge = extendTailwindMerge({ prefix: "vsc-" });
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
function highlightMatches(value, highlight) {
  if (["string", "number"].includes(typeof value) && highlight) {
    const highlightExp = new RegExp(escapeRegExp(highlight), "ig");
    return value.replace(highlightExp, (match) => `<mark>${match}</mark>`);
  }
  return value;
}
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableCell",
  props: {
    screener: { type: Object, required: false },
    column: { type: Object, required: true },
    row: { type: Object, required: false },
    pinnedClass: { type: String, required: false },
    pinnedOverlappingClass: { type: String, required: false },
    text: { type: String, required: false },
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const value = computed(() => {
      return props.row ? props.row.data[props.column.field] : void 0;
    });
    const formattedValue = computed(() => {
      let formattedValue2 = {
        isHighlighted: false,
        value: value.value
      };
      if (!props.row || !props.screener) return formattedValue2;
      if (props.column.format) {
        formattedValue2 = {
          isHighlighted: false,
          value: props.column.format(formattedValue2, props.row)
        };
      }
      const disableSearchHighlight = props.screener.options.value.disableSearchHighlight;
      const text = props.screener.searchQuery.value.text;
      if (!disableSearchHighlight && text && formattedValue2 !== void 0) {
        const updatedFormattedValue = highlightMatches(String(formattedValue2.value), text);
        formattedValue2 = {
          isHighlighted: formattedValue2.value != updatedFormattedValue,
          value: updatedFormattedValue
        };
      }
      return formattedValue2;
    });
    const __returned__ = { props, value, formattedValue, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["title"];
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$1 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800 vsc-break-words vsc-relative",
        $props.column.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      ),
      $props.column.isPinned && $setup.twMerge("vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out", $setup.props.pinnedClass),
      // eslint-disable-line
      $props.column.isOverlayingColumns && $setup.twMerge("!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]", $setup.props.pinnedOverlappingClass)
      // eslint-disable-line
    ]),
    title: $props.column.truncate && $setup.value
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", {
        innerHTML: $setup.formattedValue.value
      }, null, 8, _hoisted_2$3),
      $setup.formattedValue.isHighlighted ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$7);
}
_sfc_main$l.__file = "src/components/table/VueScreenerTableCell.vue";
const VueScreenerTableCell = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableCell.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SortIcon",
  props: {
    direction: { type: [null, String], required: false },
    class: { type: null, required: false },
    ascClass: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    }, get Icon() {
      return Icon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Icon"], {
    icon: "codicon:arrow-down",
    class: normalizeClass([
      $setup.twMerge("vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100", $setup.props.class),
      // eslint-disable-line
      $props.direction === "asc" && $setup.twMerge("vsc-rotate-[-180deg]", $setup.props.ascClass)
    ])
  }, null, 8, ["class"]);
}
_sfc_main$k.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableHeadCell",
  props: {
    screener: { type: Object, required: true },
    column: { type: Object, required: true },
    sortableClass: { type: String, required: false },
    sortingClass: { type: String, required: false },
    text: { type: [String, Number], required: false },
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isSortable = computed(() => props.column.isSortable);
    const getSortDirection = (field) => {
      if (props.screener.searchQuery.value.sortField === field) {
        return props.screener.searchQuery.value.sortDirection;
      }
      return null;
    };
    const handleClickColumnHeader = (column) => {
      if (column.isSortable) {
        props.screener.actions.sort(column.field);
      }
    };
    const __returned__ = { props, isSortable, getSortDirection, handleClickColumnHeader, VueScreenerTableCell, SortIcon, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["VueScreenerTableCell"], {
    column: $props.column,
    value: $props.column.field,
    "is-pinned": $props.column.isPinned,
    "is-pinned-overlapping": $props.column.isOverlayingColumns,
    class: normalizeClass([
      $setup.twMerge(
        "vsc-inline-flex vsc-bg-[#1f1f22] vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-text-xs last:vsc-border-r-0",
        $setup.props.class
      ),
      $setup.isSortable && $setup.twMerge("vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer", $setup.props.sortableClass),
      Boolean($props.column.isSortable && $setup.getSortDirection($props.column.field)) && $setup.props.sortingClass
    ]),
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleClickColumnHeader($props.column)),
    title: $props.text
  }, {
    default: withCtx(() => [
      $props.column.isSortable && $setup.getSortDirection($props.column.field) ? (openBlock(), createBlock($setup["SortIcon"], {
        key: 0,
        direction: $setup.getSortDirection($props.column.field)
      }, null, 8, ["direction"])) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(
          toDisplayString($props.text),
          1
          /* TEXT */
        )
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["column", "value", "is-pinned", "is-pinned-overlapping", "class", "title"]);
}
_sfc_main$j.__file = "src/components/table/VueScreenerTableHeadCell.vue";
const VueScreenerTableHeadCell = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableHeadCell.vue"]]);
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
  const hasHorizontalOverflow = ref(false);
  const isScrolledToRightEdge = ref(false);
  onMounted(() => {
    if (elRef.value) {
      observeHorizontalScrollability(elRef.value, (state) => {
        hasHorizontalOverflow.value = state.isXScrollable;
        isScrolledToRightEdge.value = state.isXScrolledEnd;
      });
    }
  });
  return {
    ref: elRef,
    hasHorizontalOverflow,
    isScrolledToRightEdge
  };
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTable",
  props: {
    columns: { type: Array, required: true },
    class: { type: null, required: false }
  },
  emits: ["has-horizontal-overflow", "is-scrolled-to-right-edge"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const style = computed(() => {
      const sizes = props.columns.map((column) => {
        if (typeof column.width === "number") return column.width + "px";
        return column.width;
      });
      return { "grid-template-columns": sizes.join(" "), "color-scheme": "dark" };
    });
    const { ref: mainRef, hasHorizontalOverflow, isScrolledToRightEdge } = useScrollable();
    watchEffect(() => {
      emit("has-horizontal-overflow", hasHorizontalOverflow.value);
      emit("is-scrolled-to-right-edge", isScrolledToRightEdge.value);
    });
    const __returned__ = { props, emit, style, mainRef, hasHorizontalOverflow, isScrolledToRightEdge, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-grid vsc-overflow-auto vsc-h-full vsc-sticky vsc-top-0 vsc-text-zinc-200 vsc-auto-rows-min",
          $setup.props.class
        )
      ),
      style: normalizeStyle($setup.style),
      ref: "mainRef"
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$i.__file = "src/components/table/VueScreenerTable.vue";
const VueScreenerTable = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTable.vue"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableHead",
  props: {
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-font-bold vsc-border-b vsc-border-zinc-700 vsc-sticky vsc-top-0 vsc-h-fit",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$h.__file = "src/components/table/VueScreenerTableHead.vue";
const VueScreenerTableHead = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableHead.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableState",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VueScreenerTableRow, VueScreenerTableSummaryRow, VueScreenerTableCell, VueScreenerTableHeadCell, VueScreenerTable, VueScreenerTableHead };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "vsc-p-4" },
  "No results found",
  -1
  /* HOISTED */
);
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["VueScreenerTable"], {
    columns: $props.screener.columns.value,
    onHasHorizontalOverflow: $props.screener.actions.setHasHorizontalOverflow,
    onIsScrolledToRightEdge: $props.screener.actions.setIsScrolledToRightEdge
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode($setup["VueScreenerTableHead"], null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($props.screener.columns.value, (column, i) => {
                return openBlock(), createBlock($setup["VueScreenerTableHeadCell"], {
                  key: i,
                  screener: $props.screener,
                  column,
                  text: column.label ?? column.field
                }, null, 8, ["screener", "column", "text"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        $props.screener.paginatedRows.value.length ? (openBlock(true), createElementBlock(
          Fragment,
          { key: 0 },
          renderList($props.screener.paginatedRows.value, (row, i) => {
            return openBlock(), createBlock(
              $setup["VueScreenerTableRow"],
              { key: i },
              {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($props.screener.columns.value, (column, j) => {
                      return openBlock(), createBlock($setup["VueScreenerTableCell"], {
                        key: j,
                        screener: $props.screener,
                        column,
                        row
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
        )) : (openBlock(), createBlock($setup["VueScreenerTableSummaryRow"], {
          key: 1,
          class: "vsc-text-center"
        }, {
          default: withCtx(() => [
            _hoisted_1$6
          ]),
          _: 1
          /* STABLE */
        }))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["columns", "onHasHorizontalOverflow", "onIsScrolledToRightEdge"]);
}
_sfc_main$g.__file = "src/components/viewport/states/VueScreenerTableState.vue";
const VueScreenerTableState = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/viewport/states/VueScreenerTableState.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerErrorState",
  props: {
    message: { type: String, required: false },
    description: { type: String, required: false },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "vsc-font-medium vsc-mb-1"
};
const _hoisted_2$2 = { key: 1 };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-flex-col vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-text-red-500",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        $props.message ? (openBlock(), createElementBlock(
          "h4",
          _hoisted_1$5,
          toDisplayString($props.message),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        $props.description ? (openBlock(), createElementBlock(
          "p",
          _hoisted_2$2,
          toDisplayString($props.description),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$f.__file = "src/components/viewport/states/VueScreenerErrorState.vue";
const VueScreenerErrorState = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/viewport/states/VueScreenerErrorState.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerEmptyState",
  props: {
    message: { type: String, required: false },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-text-zinc-300",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(
          toDisplayString($props.message),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$e.__file = "src/components/viewport/states/VueScreenerEmptyState.vue";
const VueScreenerEmptyState = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/viewport/states/VueScreenerEmptyState.vue"]]);
const _sfc_main$d = {};
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.5em",
  height: "1.5em",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
  },
  [
    /* @__PURE__ */ createBaseVNode("animateTransform", {
      attributeName: "transform",
      dur: "0.75s",
      repeatCount: "indefinite",
      type: "rotate",
      values: "0 12 12;360 12 12"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2$1
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._hoisted_3]);
}
_sfc_main$d.__file = "src/components/ui/spinner/Spinner.vue";
const UiSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/spinner/Spinner.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerLoadingState",
  props: {
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    }, UiSpinner };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-text-zinc-300",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode($setup["UiSpinner"])
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$c.__file = "src/components/viewport/states/VueScreenerLoadingState.vue";
const VueScreenerLoadingState = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/viewport/states/VueScreenerLoadingState.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerViewport",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const state = computed(() => {
      if (props.screener.options.value.loading) return "loading";
      if (props.screener.hasError.value) return "error";
      if (!props.screener.allRows.value.length) return "empty";
      return "default";
    });
    const __returned__ = { props, state, VueScreenerTableState, VueScreenerErrorState, VueScreenerEmptyState, VueScreenerLoadingState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["vsc-border vsc-rounded vsc-overflow-auto", $setup.state === "error" ? "vsc-border-red-500" : "vsc-border-zinc-700"]),
      style: normalizeStyle({ height: $props.screener.options.value.contentHeight })
    },
    [
      $setup.state === "default" ? renderSlot(_ctx.$slots, "default", {
        key: 0,
        screener: $props.screener
      }, () => [
        createVNode($setup["VueScreenerTableState"], { screener: $props.screener }, null, 8, ["screener"])
      ]) : createCommentVNode("v-if", true),
      $setup.state === "loading" ? renderSlot(_ctx.$slots, "loading", {
        key: 1,
        screener: $props.screener
      }, () => [
        createVNode($setup["VueScreenerLoadingState"])
      ]) : createCommentVNode("v-if", true),
      $setup.state === "empty" ? renderSlot(_ctx.$slots, "empty", {
        key: 2,
        screener: $props.screener
      }, () => [
        createVNode($setup["VueScreenerEmptyState"], { message: "No data provided" })
      ]) : createCommentVNode("v-if", true),
      $setup.state === "error" ? renderSlot(_ctx.$slots, "error", {
        key: 3,
        screener: $props.screener
      }, () => [
        createVNode($setup["VueScreenerErrorState"], {
          message: "Invalid data provided.",
          description: "Please provide an array of objects or an array of arrays."
        })
      ]) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$b.__file = "src/components/viewport/VueScreenerViewport.vue";
const VueScreenerViewport = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/viewport/VueScreenerViewport.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    class: { type: String, required: false },
    errorClass: { type: String, required: false },
    error: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = ["disabled"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-outline-none vsc-w-24 vsc-h-8 vsc-border vsc-border-zinc-700 vsc-rounded vsc-bg-zinc-800 vsc-px-2 vsc-text-white focus:vsc-border-zinc-600 placeholder:vsc-text-zinc-500",
        $setup.props.class
      ),
      $props.error && $setup.twMerge("vsc-border vsc-border-red-500", $setup.props.errorClass)
    ]),
    disabled: $props.disabled
  }, null, 10, _hoisted_1$3);
}
_sfc_main$a.__file = "src/components/ui/input/Input.vue";
const UiInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/input/Input.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerPaginationRowsPerPage",
  props: {
    errorClass: { type: String, required: false },
    value: { type: Number, required: false }
  },
  emits: ["change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const __returned__ = { emit, UiInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInput"], {
    type: "number",
    value: $props.value,
    min: "1",
    step: "1",
    onInput: _cache[0] || (_cache[0] = ($event) => $setup.emit("change", Number($event.target.value))),
    "error-class": $props.errorClass
  }, null, 8, ["value", "error-class"]);
}
_sfc_main$9.__file = "src/components/pagination/VueScreenerPaginationRowsPerPage.vue";
const VueScreenerPaginationRowsPerPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationRowsPerPage.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerPaginationResults",
  props: {
    total: { type: Number, required: true },
    currentPage: { type: Number, required: true },
    perPage: { type: Number, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const firstIndex = computed(() => props.currentPage * props.perPage - props.perPage + 1);
    const lastIndex = computed(() => Math.min(props.currentPage * props.perPage, props.total));
    const __returned__ = { props, firstIndex, lastIndex };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return !$props.total ? (openBlock(), createElementBlock(
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
        " Showing " + toDisplayString($setup.firstIndex) + "-" + toDisplayString($setup.lastIndex) + " of " + toDisplayString($props.total),
        1
        /* TEXT */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  ));
}
_sfc_main$8.__file = "src/components/pagination/VueScreenerPaginationResults.vue";
const VueScreenerPaginationResults = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationResults.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    class: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    activeClass: { type: String, required: false },
    active: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["disabled"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-bg-zinc-800 vsc-text-zinc-300 vsc-border vsc-border-zinc-700 vsc-rounded vsc-h-8 vsc-min-w-8 vsc-px-2 vsc-py-[3px] hover:vsc-border-zinc-600 disabled:vsc-opacity-50 disabled:vsc-pointer-events-none",
        $setup.props.class
      ),
      $props.active && $setup.twMerge("!vsc-text-blue-500 !vsc-border-zinc-500/60", $setup.props.activeClass)
    ]),
    disabled: $props.disabled
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$2);
}
_sfc_main$7.__file = "src/components/ui/button/Button.vue";
const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/button/Button.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerPaginationButtons",
  props: {
    class: { type: null, required: false },
    buttonClass: { type: String, required: false },
    activeButtonClass: { type: String, required: false },
    total: { type: Number, required: true },
    perPage: { type: Number, required: true },
    currentPage: { type: Number, required: true }
  },
  emits: ["go-to"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const totalPages = computed(() => Math.ceil(props.total / props.perPage) || 0);
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
    const canNavigateFirst = computed(() => props.currentPage > 1);
    const canNavigatePrev = computed(() => props.currentPage > 1);
    const canNavigateNext = computed(() => props.currentPage < totalPages.value);
    const canNavigateLast = computed(() => props.currentPage < totalPages.value);
    const isActive = (page) => page === props.currentPage;
    const __returned__ = { props, emit, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, isActive, UiButton, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass($setup.twMerge("vsc-flex vsc-gap-2", $setup.props.class))
    },
    [
      createVNode($setup["UiButton"], {
        disabled: !$setup.canNavigateFirst,
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("go-to", 1)),
        class: normalizeClass($props.buttonClass),
        "active-class": $props.activeButtonClass
      }, {
        default: withCtx(() => [
          createTextVNode(" First ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "class", "active-class"]),
      createVNode($setup["UiButton"], {
        disabled: !$setup.canNavigatePrev,
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("go-to", $props.currentPage - 1)),
        class: normalizeClass($props.buttonClass),
        "active-class": $props.activeButtonClass
      }, {
        default: withCtx(() => [
          createTextVNode(" Prev ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "class", "active-class"]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.getPages, (page) => {
          return openBlock(), createBlock($setup["UiButton"], {
            key: page,
            active: $setup.isActive(page),
            onClick: ($event) => $setup.emit("go-to", page),
            class: normalizeClass($props.buttonClass),
            "active-class": $props.activeButtonClass
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(page),
                1
                /* TEXT */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["active", "onClick", "class", "active-class"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createVNode($setup["UiButton"], {
        disabled: !$setup.canNavigateNext,
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.emit("go-to", $props.currentPage + 1)),
        class: normalizeClass($props.buttonClass),
        "active-class": $props.activeButtonClass
      }, {
        default: withCtx(() => [
          createTextVNode(" Next ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "class", "active-class"]),
      createVNode($setup["UiButton"], {
        disabled: !$setup.canNavigateLast,
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.emit("go-to", Math.ceil($props.total / $props.perPage))),
        class: normalizeClass($props.buttonClass),
        "active-class": $props.activeButtonClass
      }, {
        default: withCtx(() => [
          createTextVNode(" Last ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled", "class", "active-class"])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$6.__file = "src/components/pagination/VueScreenerPaginationButtons.vue";
const VueScreenerPaginationButtons = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationButtons.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerPagination",
  props: {
    screener: { type: Object, required: true },
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const totalPages = computed(() => {
      return Math.ceil(props.screener.queriedRows.value.length / props.screener.searchQuery.value.rowsPerPage) || 0;
    });
    const currentPageIsInRange = computed(() => {
      return totalPages.value >= props.screener.searchQuery.value.page;
    });
    onMounted(() => {
      ensureCurrentPageIsValid();
    });
    watch(
      () => props.screener.queriedRows.value.length,
      () => ensureCurrentPageIsValid()
    );
    const ensureCurrentPageIsValid = () => {
      if (!currentPageIsInRange.value) {
        props.screener.actions.goToPage(totalPages.value ? totalPages.value : 1);
      }
    };
    const __returned__ = { props, totalPages, currentPageIsInRange, ensureCurrentPageIsValid, VueScreenerPaginationRowsPerPage, VueScreenerPaginationResults, VueScreenerPaginationButtons, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-grid vsc-items-center vsc-justify-between vsc-text-zinc-300 vsc-text-sm vsc-gap-2 vsc-whitespace-nowrap vsc-grid-cols-[150px_auto_150px]",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default", { screener: $props.screener }, () => [
        createVNode($setup["VueScreenerPaginationResults"], {
          total: $props.screener.queriedRows.value.length ?? 0,
          "current-page": $setup.props.screener.searchQuery.value.page,
          "per-page": $setup.props.screener.searchQuery.value.rowsPerPage
        }, null, 8, ["total", "current-page", "per-page"]),
        createVNode($setup["VueScreenerPaginationButtons"], {
          total: $setup.props.screener.queriedRows.value.length,
          "per-page": $setup.props.screener.searchQuery.value.rowsPerPage,
          "current-page": $setup.props.screener.searchQuery.value.page,
          onGoTo: $props.screener.actions.goToPage
        }, null, 8, ["total", "per-page", "current-page", "onGoTo"]),
        createVNode($setup["VueScreenerPaginationRowsPerPage"], {
          value: $props.screener.searchQuery.value.rowsPerPage,
          onChange: $setup.props.screener.actions.setPerPage,
          class: "vsc-ml-auto"
        }, null, 8, ["value", "onChange"])
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$5.__file = "src/components/pagination/VueScreenerPagination.vue";
const VueScreenerPagination = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPagination.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ToggleButtonGroup",
  props: {
    active: { type: Boolean, required: false },
    activeClass: { type: String, required: false },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        $setup.twMerge(
          "vsc-flex vsc-gap-0.5 vsc-items-center vsc-rounded vsc-h-8 vsc-border vsc-border-zinc-700 vsc-py-0.5 vsc-px-[3px]",
          $setup.props.class
        ),
        $props.active && $props.activeClass
      ])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$4.__file = "src/components/ui/toggle-button/ToggleButtonGroup.vue";
const ToggleButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/toggle-button/ToggleButtonGroup.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ToggleButton",
  props: {
    class: { type: String, required: false },
    active: { type: Boolean, required: false },
    activeClass: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass([
        $setup.twMerge(
          "vsc-cursor-pointer vsc-rounded-sm vsc-h-6 vsc-w-6 vsc-flex vsc-items-center vsc-justify-center vsc-text-zinc-300 hover:vsc-text-zinc-300 hover:vsc-bg-[#3e51b5]",
          $setup.props.class
        ),
        $setup.props.active && $setup.twMerge("vsc-text-white vsc-bg-[#3e51b5]", $setup.props.activeClass)
      ])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$3.__file = "src/components/ui/toggle-button/ToggleButton.vue";
const ToggleButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/toggle-button/ToggleButton.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerSearchOptions",
  props: {
    screener: { type: Object, required: true },
    toggleButtonClass: { type: String, required: false },
    toggleButtonActiveClass: { type: String, required: false },
    iconClass: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const toggleOption = (searchTextOption) => {
      const updatedSearchQuery = { ...props.screener.searchQuery.value };
      if (searchTextOption === "case-sensitive") {
        updatedSearchQuery.caseSensitive = !updatedSearchQuery.caseSensitive;
      } else if (searchTextOption === "whole-word") {
        updatedSearchQuery.wholeWord = !updatedSearchQuery.wholeWord;
      } else if (searchTextOption === "regex") {
        updatedSearchQuery.regex = !updatedSearchQuery.regex;
      }
      props.screener.actions.search(updatedSearchQuery);
    };
    const __returned__ = { props, toggleOption, ToggleButtonGroup, ToggleButton, get twMerge() {
      return twMerge;
    }, get Icon() {
      return Icon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["ToggleButtonGroup"], null, {
    default: withCtx(() => [
      createVNode($setup["ToggleButton"], {
        title: "Case sensitive",
        active: $setup.props.screener.searchQuery.value.caseSensitive,
        class: normalizeClass($props.toggleButtonClass),
        "active-class": $props.toggleButtonActiveClass,
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggleOption("case-sensitive"))
      }, {
        default: withCtx(() => [
          createVNode($setup["Icon"], {
            icon: "codicon:case-sensitive",
            class: normalizeClass($setup.twMerge("vsc-w-4 vsc-h-4", $setup.props.iconClass))
          }, null, 8, ["class"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["active", "class", "active-class"]),
      createVNode($setup["ToggleButton"], {
        title: "Whole word",
        active: $setup.props.screener.searchQuery.value.wholeWord,
        class: normalizeClass($props.toggleButtonClass),
        "active-class": $props.toggleButtonActiveClass,
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.toggleOption("whole-word"))
      }, {
        default: withCtx(() => [
          createVNode($setup["Icon"], {
            icon: "codicon:whole-word",
            class: normalizeClass($setup.twMerge("vsc-w-4 vsc-h-4", $setup.props.iconClass))
          }, null, 8, ["class"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["active", "class", "active-class"]),
      createVNode($setup["ToggleButton"], {
        title: "Regular expression",
        active: $setup.props.screener.searchQuery.value.regex,
        class: normalizeClass($props.toggleButtonClass),
        "active-class": $props.toggleButtonActiveClass,
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.toggleOption("regex"))
      }, {
        default: withCtx(() => [
          createVNode($setup["Icon"], {
            icon: "codicon:regex",
            class: normalizeClass($setup.twMerge("vsc-w-4 vsc-h-4", $setup.props.iconClass))
          }, null, 8, ["class"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["active", "class", "active-class"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$2.__file = "src/components/search/VueScreenerSearchOptions.vue";
const VueScreenerSearchOptions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/search/VueScreenerSearchOptions.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerSearch",
  props: {
    screener: { type: Object, required: true },
    class: { type: null, required: false },
    optionsClass: { type: String, required: false },
    toggleButtonClass: { type: String, required: false },
    toggleButtonActiveClass: { type: String, required: false },
    toggleButtonIconClass: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const history = ref([]);
    const historyIndex = ref(null);
    const regex = computed(() => {
      return props.screener.searchQuery.value.regex;
    });
    const isValidQuery = computed(() => {
      return isValidRegExp(props.screener.searchQuery.value.text);
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const text = event.target.value;
      if (isEnter) {
        props.screener.actions.search({ text });
        if (text) {
          history.value.push(text);
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
      props.screener.actions.search({ text: history.value[historyIndex.value] });
    };
    const onInput = (event) => {
      const text = event.target.value;
      props.screener.actions.search({ text });
    };
    const __returned__ = { props, history, historyIndex, regex, isValidQuery, onKeydown, onInput, UiInput, VueScreenerSearchOptions, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "vsc-flex vsc-items-center vsc-gap-2 vsc-relative" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode($setup["UiInput"], {
      class: normalizeClass($setup.twMerge("vsc-w-[280px] vsc-flex vsc-items-center vsc-gap-2 vsc-relative vsc-pr-20", $setup.props.class)),
      type: "text",
      value: $props.screener.searchQuery.value.text,
      error: $setup.regex && !$setup.isValidQuery,
      placeholder: "Search...",
      onKeydown: $setup.onKeydown,
      onInput: $setup.onInput
    }, null, 8, ["class", "value", "error"]),
    createVNode($setup["VueScreenerSearchOptions"], {
      screener: $props.screener,
      class: normalizeClass($setup.twMerge("vsc-absolute vsc-right-0 vsc-border-0", $props.optionsClass)),
      "toggle-button-class": $props.toggleButtonClass,
      "toggle-button-active-class": $props.toggleButtonActiveClass,
      "toggle-button-icon-class": $props.toggleButtonIconClass
    }, null, 8, ["screener", "class", "toggle-button-class", "toggle-button-active-class", "toggle-button-icon-class"])
  ]);
}
_sfc_main$1.__file = "src/components/search/VueScreenerSearch.vue";
const VueScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/search/VueScreenerSearch.vue"]]);
function isValidInput(data) {
  const isObject = (val) => typeof val === "object" && val !== null;
  return Array.isArray(data) && data.every((row) => Array.isArray(row) || isObject(row));
}
function convertToRows(data) {
  return data.map((row) => ({
    id: v4(),
    // Handle both array and object inputs in one step
    data: Array.isArray(row) ? Object.fromEntries(row.entries()) : row
  }));
}
function getFields(rows) {
  const fields = new Set(rows.flatMap((row) => Object.keys(row.data)));
  return Array.from(fields);
}
const createColumn = (column) => ({
  field: "",
  isPinned: false,
  isSortable: true,
  defaultSortDirection: "desc",
  order: 0,
  only: false,
  width: "minmax(100px,auto)",
  hidden: false,
  truncate: true,
  ...column
});
function getPaginated({
  rows = [],
  page = 1,
  rowsPerPage = 25
}) {
  const start = rowsPerPage * page;
  const end = start + rowsPerPage;
  return rows.slice(start, end);
}
const sortRows = (data, options) => {
  const sortField = options.sortField;
  const sortDirection = options.invertSort ? options.sortDirection === "asc" ? "desc" : "asc" : options.sortDirection;
  if (sortField && sortDirection) {
    return [...orderBy(data, [(row) => row.data[sortField]], [sortDirection])];
  }
  return data;
};
const testCriteria = (subject, pattern, options) => {
  const { caseSensitive = false, wholeWord = false, regex = false } = options;
  if (!regex) {
    pattern = escapeRegExp(pattern);
  }
  if (wholeWord) {
    pattern = `\\b(${pattern})\\b`;
  }
  const flags = caseSensitive ? "g" : "gi";
  return new RegExp(pattern, flags).test(subject);
};
const parseSearchText = (text) => {
  const excludeFilters = [];
  text = text.replace(new RegExp("(?<!\\w)-\\w+:\\w+", "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });
  text = text.replace(new RegExp('(?<!\\w)-\\w+:"[^"]*"$', "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  const includeFilters = [];
  text = text.replace(/\b\w+:\w+\b/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value]);
    return "";
  }).trim();
  text = text.replace(/\b\w+:"[^"]*"$/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  return {
    text,
    excludeFilters,
    includeFilters
  };
};
function search(options) {
  const { text = "" } = options;
  if (!text) return options.rows;
  const { text: parsedText, excludeFilters, includeFilters } = parseSearchText(text);
  const { rows, regex = false, caseSensitive = false, wholeWord = false } = options;
  const testExcludeFilters = (filters, row) => {
    return filters.some(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value, value, {
          caseSensitive,
          wholeWord: true,
          regex
        });
      }
    });
  };
  const testIncludeFilters = (filters, row) => {
    return filters.every(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value, value, {
          caseSensitive,
          wholeWord: true,
          regex
        });
      }
    });
  };
  return rows.filter((row) => {
    let shouldExclude = false;
    let shouldInclude = true;
    let meetsSearchCriteria = true;
    if (excludeFilters.length && testExcludeFilters(excludeFilters, row)) {
      shouldExclude = true;
    }
    if (includeFilters.length && !testIncludeFilters(includeFilters, row)) {
      shouldInclude = false;
    }
    meetsSearchCriteria = options.columns.some((column) => {
      if (testCriteria(String(column.field ? row.data[column.field] : ""), parsedText, {
        caseSensitive,
        wholeWord,
        regex
      })) {
        return true;
      }
    });
    return !shouldExclude && shouldInclude && meetsSearchCriteria;
  });
}
const useVueScreener = (inputData, defaultOptions = {}) => {
  const contentHeight = ref(defaultOptions.contentHeight);
  const disableSearchHighlight = ref(defaultOptions.disableSearchHighlight ?? false);
  const loading = ref(defaultOptions.loading ?? false);
  const defaultCurrentPage = ref(defaultOptions.defaultCurrentPage ?? 1);
  const defaultRowsPerPage = ref(defaultOptions.defaultRowsPerPage ?? 10);
  const defaultSortField = ref(defaultOptions.defaultSortField);
  const defaultSortDirection = ref(defaultOptions.defaultSortDirection);
  const defaultTruncate = ref(defaultOptions.defaultTruncate);
  const columnsConfig = ref(defaultOptions.columns);
  const options = computed(() => ({
    contentHeight: contentHeight.value,
    defaultCurrentPage: defaultCurrentPage.value,
    defaultRowsPerPage: defaultRowsPerPage.value,
    defaultSortField: defaultSortField.value,
    defaultSortDirection: defaultSortDirection.value,
    defaultTruncate: defaultTruncate.value,
    columns: columnsConfig.value,
    disableSearchHighlight: disableSearchHighlight.value,
    loading: loading.value
  }));
  const dimensions = ref(null);
  const hasHorizontalOverflow = ref(false);
  const isScrolledToRightEdge = ref(false);
  const allRows = ref(isValidInput(inputData) ? convertToRows(inputData) : []);
  const hasError = computed(() => !isValidInput(inputData));
  const searchQuery = ref({
    text: "",
    // Search text
    regex: false,
    // Whether to match regex in search
    caseSensitive: false,
    // Whether to match case in search
    wholeWord: false,
    // Whether to match whole word in search
    page: defaultCurrentPage.value,
    // Current page number
    rowsPerPage: defaultRowsPerPage.value ?? 10,
    // Number of rows per page
    sortField: defaultSortField.value ?? null,
    // Field to sort by
    sortDirection: defaultSortDirection.value ?? "desc"
    // Sort direction
  });
  const queriedRows = computed(() => {
    return search({
      rows: allRows.value,
      columns: columns.value,
      text: searchQuery.value.text,
      regex: searchQuery.value.regex,
      caseSensitive: searchQuery.value.caseSensitive,
      wholeWord: searchQuery.value.wholeWord
    });
  });
  const sortedRows = computed(() => {
    var _a;
    const sortedRows2 = searchQuery.value.text ? queriedRows.value : allRows.value;
    const _sortField = searchQuery.value.sortField;
    const invertSort = _sortField && columnsConfig.value ? (_a = columnsConfig.value[_sortField]) == null ? void 0 : _a.invertSort : void 0;
    if (_sortField && searchQuery.value.sortDirection) {
      return sortRows(sortedRows2, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection,
        invertSort
      });
    } else {
      return sortedRows2;
    }
  });
  const paginatedRows = computed(() => {
    return getPaginated({
      rows: sortedRows.value,
      page: searchQuery.value.page - 1,
      rowsPerPage: searchQuery.value.rowsPerPage
    });
  });
  const totalSearchedRows = computed(() => queriedRows.value.length ?? 0);
  const currentPage = computed(() => searchQuery.value.page);
  const rowsPerPage = computed(() => searchQuery.value.rowsPerPage);
  const columnsMap = computed(() => {
    const dataFields = getFields(allRows.value);
    const columns2 = /* @__PURE__ */ new Map();
    dataFields.forEach((field) => {
      const defaults = { field };
      if (typeof defaultTruncate.value === "boolean") {
        defaults.truncate = defaultTruncate.value;
      }
      columns2.set(field, createColumn(defaults));
    });
    if (columnsConfig.value) {
      Object.entries(columnsConfig.value).forEach(([field, config]) => {
        columns2.set(field, {
          ...columns2.get(field) || createColumn({ field }),
          ...config
        });
      });
    }
    return Object.fromEntries(columns2);
  });
  const columns = computed(() => {
    let columns2 = Object.values(columnsMap.value);
    columns2 = columns2.sort((a, b) => a.order - b.order);
    columns2 = columns2.filter((column) => !column.hidden);
    columns2 = columns2.map((column) => ({
      ...column,
      isOverlayingColumns: Boolean(column.isPinned && hasHorizontalOverflow.value && !isScrolledToRightEdge.value)
    }));
    if (columns2.some((column) => column.only)) {
      columns2 = columns2.filter((column) => column.only);
    }
    return columns2;
  });
  const actions = {
    search: (_searchQuery) => searchQuery.value = { ...searchQuery.value, ..._searchQuery },
    sort: (field) => {
      const column = columns.value.find((columns2) => columns2.field === field);
      const currentDirection = searchQuery.value.sortDirection;
      const isCurrentField = searchQuery.value.sortField === field;
      const newDirection = isCurrentField ? currentDirection === "desc" ? "asc" : "desc" : (column == null ? void 0 : column.defaultSortDirection) || "desc";
      searchQuery.value.sortDirection = newDirection;
      searchQuery.value.invertSort = Boolean(column == null ? void 0 : column.invertSort);
      searchQuery.value.sortField = field;
    },
    goToPage: (page) => actions.search({ page }),
    setPerPage: (rowsPerPage2) => actions.search({ rowsPerPage: rowsPerPage2 }),
    setDimensions: (_dimensions) => dimensions.value = _dimensions,
    // eslint-disable-line
    setData: (inputData2) => allRows.value = isValidInput(inputData2) ? convertToRows(inputData2) : [],
    setLoading: (isLoading) => loading.value = isLoading,
    setHasHorizontalOverflow: (value) => hasHorizontalOverflow.value = value,
    setIsScrolledToRightEdge: (value) => isScrolledToRightEdge.value = value,
    setOptions: (newOptions) => {
      if (newOptions.contentHeight !== void 0) contentHeight.value = newOptions.contentHeight;
      if (newOptions.disableSearchHighlight !== void 0)
        disableSearchHighlight.value = newOptions.disableSearchHighlight;
      if (newOptions.loading !== void 0) loading.value = newOptions.loading;
      if (newOptions.defaultCurrentPage !== void 0) defaultCurrentPage.value = newOptions.defaultCurrentPage;
      if (newOptions.defaultRowsPerPage !== void 0) defaultRowsPerPage.value = newOptions.defaultRowsPerPage;
      if (newOptions.defaultSortField !== void 0) defaultSortField.value = newOptions.defaultSortField;
      if (newOptions.defaultSortDirection !== void 0) defaultSortDirection.value = newOptions.defaultSortDirection;
      if (newOptions.columns !== void 0) columnsConfig.value = newOptions.columns;
    }
  };
  return {
    options,
    // user options
    searchQuery,
    // search options (text, pagination, sort)
    allRows,
    // all data
    queriedRows,
    // filtered data (after search query)
    paginatedRows,
    // paginated data (cut from queriedRows)
    hasError,
    // boolean indicating if the data is valid
    columns,
    // columns (field, label, width, isPinned, isSortable, defaultSortDirection)
    dimensions,
    // screener dimensions
    hasHorizontalOverflow,
    isScrolledToRightEdge,
    actions,
    // actions
    totalSearchedRows,
    currentPage,
    rowsPerPage
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueScreener",
  props: {
    screener: { type: Object, required: false },
    data: { type: Array, required: false },
    class: { type: String, required: false },
    contentHeight: { type: String, required: false },
    defaultCurrentPage: { type: Number, required: false },
    defaultRowsPerPage: { type: Number, required: false },
    defaultSortField: { type: String, required: false },
    defaultSortDirection: { type: String, required: false },
    columns: { type: Object, required: false },
    disableSearchHighlight: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    title: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const internalScreener = computed(() => props.screener ?? useVueScreener(props.data ?? []));
    watch(() => props.data, (data) => internalScreener.value.actions.setData(data));
    watch(() => props.contentHeight, (contentHeight) => internalScreener.value.actions.setOptions({ contentHeight }));
    watch(() => props.defaultCurrentPage, (defaultCurrentPage) => internalScreener.value.actions.setOptions({ defaultCurrentPage }));
    watch(() => props.defaultRowsPerPage, (defaultRowsPerPage) => internalScreener.value.actions.setOptions({ defaultRowsPerPage }));
    watch(() => props.defaultSortField, (defaultSortField) => internalScreener.value.actions.setOptions({ defaultSortField }));
    watch(() => props.defaultSortDirection, (defaultSortDirection) => internalScreener.value.actions.setOptions({ defaultSortDirection }));
    watch(() => props.columns, (columns) => internalScreener.value.actions.setOptions({ columns }));
    watch(() => props.disableSearchHighlight, (disableSearchHighlight) => internalScreener.value.actions.setOptions({ disableSearchHighlight }));
    watch(() => props.loading, (loading) => internalScreener.value.actions.setOptions({ loading }));
    const screenerRef = ref();
    useElementSize(screenerRef, internalScreener.value.actions.setDimensions);
    const __returned__ = { props, internalScreener, screenerRef, VueScreenerViewport, VueScreenerPagination, VueScreenerSearch, get twMerge() {
      return twMerge$1;
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "section",
    {
      class: normalizeClass($setup.twMerge("vs-screener vsc-font-sans vsc-text-sm vsc-flex vsc-flex-col vsc-gap-2", $setup.props.class)),
      ref: "screenerRef"
    },
    [
      createCommentVNode(" eslint-disable-line "),
      renderSlot(_ctx.$slots, "default", { screener: $setup.internalScreener }, () => [
        renderSlot(_ctx.$slots, "header", { screener: $setup.internalScreener }, () => [
          createBaseVNode("div", _hoisted_1, [
            $props.title ? (openBlock(), createElementBlock(
              "h3",
              _hoisted_2,
              toDisplayString($props.title),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true),
            createVNode($setup["VueScreenerSearch"], {
              screener: $setup.internalScreener,
              class: "vsc-ml-auto"
            }, null, 8, ["screener"])
          ])
        ]),
        renderSlot(_ctx.$slots, "viewport", { screener: $setup.internalScreener }, () => [
          createVNode($setup["VueScreenerViewport"], { screener: $setup.internalScreener }, null, 8, ["screener"])
        ]),
        renderSlot(_ctx.$slots, "footer", { screener: $setup.internalScreener }, () => [
          createVNode($setup["VueScreenerPagination"], { screener: $setup.internalScreener }, null, 8, ["screener"])
        ])
      ])
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
    full_name: "Elicia Ivetts",
    email: "eivetts0@privacy.gov.au",
    gender: "Male",
    ip_address: "229.208.1.222"
  },
  {
    id: 2,
    first_name: "Korry",
    last_name: "O'Siaghail",
    full_name: "Korry O'Siaghail",
    email: "kosiaghail1@huffingtonpost.com",
    gender: "Female",
    ip_address: "31.95.2.206"
  },
  {
    id: 3,
    first_name: "Nick",
    last_name: "Millward",
    full_name: "Nick Millward",
    email: "nmillward2@paginegialle.it",
    gender: "Female",
    ip_address: "137.121.174.161"
  },
  {
    id: 4,
    first_name: "Link",
    last_name: "Aspden",
    full_name: "Link Aspden",
    email: "laspden3@yandex.ru",
    gender: "Male",
    ip_address: "130.125.108.185"
  },
  {
    id: 5,
    first_name: "Reynold",
    last_name: "Spiteri",
    full_name: "Reynold Spiteri",
    email: "rspiteri4@eepurl.com",
    gender: "Female",
    ip_address: "135.199.193.154"
  },
  {
    id: 6,
    first_name: "Arney",
    last_name: "Despenser",
    full_name: "Arney Despenser",
    email: "adespenser5@home.pl",
    gender: "Male",
    ip_address: "193.117.217.66"
  },
  {
    id: 7,
    first_name: "Lanni",
    last_name: "Costin",
    full_name: "Lanni Costin",
    email: "lcostin6@multiply.com",
    gender: "Female",
    ip_address: "230.111.244.48"
  },
  {
    id: 8,
    first_name: "Nari",
    last_name: "Yandell",
    full_name: "Nari Yandell",
    email: "nyandell7@ow.ly",
    gender: "Male",
    ip_address: "163.220.71.79"
  },
  {
    id: 9,
    first_name: "Thoma",
    last_name: "Andrioni",
    full_name: "Thoma Andrioni",
    email: "tandrioni8@mtv.com",
    gender: "Female",
    ip_address: "155.39.106.44"
  },
  {
    id: 10,
    first_name: "Starr",
    last_name: "Malatalant",
    full_name: "Starr Malatalant",
    email: "smalatalant9@vinaora.com",
    gender: "Female",
    ip_address: "243.25.137.252"
  },
  {
    id: 11,
    first_name: "Urbanus",
    last_name: "Cratchley",
    full_name: "Urbanus Cratchley",
    email: "ucratchleya@paginegialle.it",
    gender: "Male",
    ip_address: "181.0.193.212"
  },
  {
    id: 12,
    first_name: "Lesly",
    last_name: "Hussy",
    full_name: "Lesly Hussy",
    email: "lhussyb@arizona.edu",
    gender: "Female",
    ip_address: "57.29.57.68"
  },
  {
    id: 13,
    first_name: "Nat",
    last_name: "Heister",
    full_name: "Nat Heister",
    email: "nheisterc@washingtonpost.com",
    gender: "Male",
    ip_address: "246.84.61.126"
  },
  {
    id: 14,
    first_name: "Tomi",
    last_name: "Hawket",
    full_name: "Tomi Hawket",
    email: "thawketd@cargocollective.com",
    gender: "Female",
    ip_address: "125.42.119.207"
  },
  {
    id: 15,
    first_name: "Keely",
    last_name: "Kidd",
    full_name: "Keely Kidd",
    email: "kkidde@cmu.edu",
    gender: "Female",
    ip_address: "99.24.81.131"
  },
  {
    id: 16,
    first_name: "Baxie",
    last_name: "Rillatt",
    full_name: "Baxie Rillatt",
    email: "brillattf@usa.gov",
    gender: "Male",
    ip_address: "95.69.9.253"
  },
  {
    id: 17,
    first_name: "Mellisa",
    last_name: "Twigger",
    full_name: "Mellisa Twigger",
    email: "mtwiggerg@behance.net",
    gender: "Male",
    ip_address: "188.222.131.241"
  },
  {
    id: 18,
    first_name: "Bekki",
    last_name: "Blissett",
    full_name: "Bekki Blissett",
    email: "bblissetth@cpanel.net",
    gender: "Female",
    ip_address: "34.5.253.189"
  },
  {
    id: 19,
    first_name: "Dora",
    last_name: "Rosita",
    full_name: "Dora Rosita",
    email: "drositai@google.ca",
    gender: "Male",
    ip_address: "146.218.11.105"
  },
  {
    id: 20,
    first_name: "Marcello",
    last_name: "Fassam",
    full_name: "Marcello Fassam",
    email: "mfassamj@prweb.com",
    gender: "Female",
    ip_address: "239.112.226.230"
  },
  {
    id: 21,
    first_name: "Marya",
    last_name: "Masarrat",
    full_name: "Marya Masarrat",
    email: "mmasarratk@unesco.org",
    gender: "Male",
    ip_address: "198.108.170.18"
  },
  {
    id: 22,
    first_name: "Thomasine",
    last_name: "Bonsul",
    full_name: "Thomasine Bonsul",
    email: "tbonsull@goodreads.com",
    gender: "Female",
    ip_address: "111.125.215.30"
  },
  {
    id: 23,
    first_name: "Ileana",
    last_name: "Cadle",
    full_name: "Ileana Cadle",
    email: "icadlem@tmall.com",
    gender: "Male",
    ip_address: "24.40.227.130"
  },
  {
    id: 24,
    first_name: "Allyn",
    last_name: "Geertz",
    full_name: "Allyn Geertz",
    email: "ageertzn@istockphoto.com",
    gender: "Male",
    ip_address: "191.16.21.95"
  },
  {
    id: 25,
    first_name: "Bendite",
    last_name: "Faccini",
    full_name: "Bendite Faccini",
    email: "bfaccinio@eepurl.com",
    gender: "Male",
    ip_address: "103.239.124.138"
  },
  {
    id: 26,
    first_name: "Barde",
    last_name: "Weld",
    full_name: "Barde Weld",
    email: "bweldp@washingtonpost.com",
    gender: "Male",
    ip_address: "252.86.225.47"
  },
  {
    id: 27,
    first_name: "Amberly",
    last_name: "Nassie",
    full_name: "Amberly Nassie",
    email: "anassieq@apache.org",
    gender: "Genderfluid",
    ip_address: "43.126.89.28"
  },
  {
    id: 28,
    first_name: "Sterling",
    last_name: "Burne",
    full_name: "Sterling Burne",
    email: "sburner@arstechnica.com",
    gender: "Male",
    ip_address: "176.20.2.28"
  },
  {
    id: 29,
    first_name: "Veronique",
    last_name: "Sherel",
    full_name: "Veronique Sherel",
    email: "vsherels@paypal.com",
    gender: "Male",
    ip_address: "78.251.9.78"
  },
  {
    id: 30,
    first_name: "Caria",
    last_name: "Newland",
    full_name: "Caria Newland",
    email: "cnewlandt@chronoengine.com",
    gender: "Female",
    ip_address: "181.12.28.234"
  },
  {
    id: 31,
    first_name: "Lorita",
    last_name: "Westcar",
    full_name: "Lorita Westcar",
    email: "lwestcaru@theatlantic.com",
    gender: "Female",
    ip_address: "176.180.126.100"
  },
  {
    id: 32,
    first_name: "Devondra",
    last_name: "Mabbe",
    full_name: "Devondra Mabbe",
    email: "dmabbev@ning.com",
    gender: "Female",
    ip_address: "166.65.47.41"
  },
  {
    id: 33,
    first_name: "Blakeley",
    last_name: "Petrowsky",
    full_name: "Blakeley Petrowsky",
    email: "bpetrowskyw@unc.edu",
    gender: "Male",
    ip_address: "143.53.39.156"
  },
  {
    id: 34,
    first_name: "Brock",
    last_name: "Leall",
    full_name: "Brock Leall",
    email: "bleallx@discuz.net",
    gender: "Male",
    ip_address: "252.220.229.219"
  },
  {
    id: 35,
    first_name: "Cristy",
    last_name: "Guilder",
    full_name: "Cristy Guilder",
    email: "cguildery@businesswire.com",
    gender: "Male",
    ip_address: "232.116.36.13"
  },
  {
    id: 36,
    first_name: "Heywood",
    last_name: "Coldrick",
    full_name: "Heywood Coldrick",
    email: "hcoldrickz@cloudflare.com",
    gender: "Female",
    ip_address: "54.99.143.60"
  },
  {
    id: 37,
    first_name: "Bogart",
    last_name: "Lord",
    full_name: "Bogart Lord",
    email: "blord10@java.com",
    gender: "Male",
    ip_address: "57.176.157.241"
  },
  {
    id: 38,
    first_name: "Theodora",
    last_name: "Abate",
    full_name: "Theodora Abate",
    email: "tabate11@tripadvisor.com",
    gender: "Female",
    ip_address: "155.111.93.180"
  },
  {
    id: 39,
    first_name: "Trevar",
    last_name: "Melledy",
    full_name: "Trevar Melledy",
    email: "tmelledy12@businessinsider.com",
    gender: "Female",
    ip_address: "120.219.36.151"
  },
  {
    id: 40,
    first_name: "Remy",
    last_name: "Camier",
    full_name: "Remy Camier",
    email: "rcamier13@merriam-webster.com",
    gender: "Male",
    ip_address: "48.215.203.94"
  },
  {
    id: 41,
    first_name: "Rafaelia",
    last_name: "Shillinglaw",
    full_name: "Rafaelia Shillinglaw",
    email: "rshillinglaw14@umich.edu",
    gender: "Female",
    ip_address: "173.15.236.64"
  },
  {
    id: 42,
    first_name: "Zorina",
    last_name: "De Mitri",
    full_name: "Zorina De Mitri",
    email: "zdemitri15@sphinn.com",
    gender: "Male",
    ip_address: "105.1.132.156"
  },
  {
    id: 43,
    first_name: "Lothario",
    last_name: "Macknish",
    full_name: "Lothario Macknish",
    email: "lmacknish16@live.com",
    gender: "Male",
    ip_address: "92.107.32.5"
  },
  {
    id: 44,
    first_name: "Trina",
    last_name: "Rathe",
    full_name: "Trina Rathe",
    email: "trathe17@ft.com",
    gender: "Female",
    ip_address: "138.146.55.6"
  },
  {
    id: 45,
    first_name: "Grete",
    last_name: "Handmore",
    full_name: "Grete Handmore",
    email: "ghandmore18@topsy.com",
    gender: "Male",
    ip_address: "39.57.200.172"
  },
  {
    id: 46,
    first_name: "Isaak",
    last_name: "Milius",
    full_name: "Isaak Milius",
    email: "imilius19@163.com",
    gender: "Female",
    ip_address: "28.222.56.38"
  },
  {
    id: 47,
    first_name: "Jessika",
    last_name: "Mengue",
    full_name: "Jessika Mengue",
    email: "jmengue1a@google.com",
    gender: "Genderfluid",
    ip_address: "182.6.146.209"
  },
  {
    id: 48,
    first_name: "Felecia",
    last_name: "Peirazzi",
    full_name: "Felecia Peirazzi",
    email: "fpeirazzi1b@jimdo.com",
    gender: "Male",
    ip_address: "0.0.131.149"
  },
  {
    id: 49,
    first_name: "Sibelle",
    last_name: "Metzig",
    full_name: "Sibelle Metzig",
    email: "smetzig1c@clickbank.net",
    gender: "Female",
    ip_address: "101.107.46.20"
  },
  {
    id: 50,
    first_name: "Tami",
    last_name: "Haill",
    full_name: "Tami Haill",
    email: "thaill1d@phpbb.com",
    gender: "Female",
    ip_address: "114.206.60.208"
  },
  {
    id: 51,
    first_name: "Deanna",
    last_name: "Grinyakin",
    full_name: "Deanna Grinyakin",
    email: "dgrinyakin1e@nba.com",
    gender: "Female",
    ip_address: "212.171.218.14"
  },
  {
    id: 52,
    first_name: "Elyn",
    last_name: "Dayes",
    full_name: "Elyn Dayes",
    email: "edayes1f@bbc.co.uk",
    gender: "Polygender",
    ip_address: "46.220.192.21"
  },
  {
    id: 53,
    first_name: "Ferris",
    last_name: "Klimentyev",
    full_name: "Ferris Klimentyev",
    email: "fklimentyev1g@apache.org",
    gender: "Male",
    ip_address: "242.135.9.146"
  },
  {
    id: 54,
    first_name: "Ives",
    last_name: "Garnam",
    full_name: "Ives Garnam",
    email: "igarnam1h@freewebs.com",
    gender: "Male",
    ip_address: "173.85.233.215"
  },
  {
    id: 55,
    first_name: "Emmalee",
    last_name: "Flockhart",
    full_name: "Emmalee Flockhart",
    email: "eflockhart1i@reuters.com",
    gender: "Male",
    ip_address: "51.240.112.122"
  },
  {
    id: 56,
    first_name: "Nichole",
    last_name: "Ludlom",
    full_name: "Nichole Ludlom",
    email: "nludlom1j@w3.org",
    gender: "Agender",
    ip_address: "252.40.15.102"
  },
  {
    id: 57,
    first_name: "Ruthanne",
    last_name: "Prys",
    full_name: "Ruthanne Prys",
    email: "rprys1k@furl.net",
    gender: "Female",
    ip_address: "208.42.248.135"
  },
  {
    id: 58,
    first_name: "Porty",
    last_name: "Kiehne",
    full_name: "Porty Kiehne",
    email: "pkiehne1l@flavors.me",
    gender: "Female",
    ip_address: "236.158.227.209"
  },
  {
    id: 59,
    first_name: "Edd",
    last_name: "Bernardon",
    full_name: "Edd Bernardon",
    email: "ebernardon1m@behance.net",
    gender: "Male",
    ip_address: "12.168.8.28"
  },
  {
    id: 60,
    first_name: "Lay",
    last_name: "Catherine",
    full_name: "Lay Catherine",
    email: "lcatherine1n@sitemeter.com",
    gender: "Female",
    ip_address: "29.123.222.86"
  },
  {
    id: 61,
    first_name: "Annalise",
    last_name: "Woolmington",
    full_name: "Annalise Woolmington",
    email: "awoolmington1o@skyrock.com",
    gender: "Female",
    ip_address: "141.78.194.165"
  },
  {
    id: 62,
    first_name: "Billie",
    last_name: "D'Cruze",
    full_name: "Billie D'Cruze",
    email: "bdcruze1p@spiegel.de",
    gender: "Female",
    ip_address: "40.198.214.13"
  },
  {
    id: 63,
    first_name: "Meyer",
    last_name: "Toffel",
    full_name: "Meyer Toffel",
    email: "mtoffel1q@devhub.com",
    gender: "Female",
    ip_address: "21.51.3.188"
  },
  {
    id: 64,
    first_name: "Genevieve",
    last_name: "Loach",
    full_name: "Genevieve Loach",
    email: "gloach1r@icio.us",
    gender: "Female",
    ip_address: "94.194.160.40"
  },
  {
    id: 65,
    first_name: "Prudi",
    last_name: "Huckerbe",
    full_name: "Prudi Huckerbe",
    email: "phuckerbe1s@sbwire.com",
    gender: "Female",
    ip_address: "218.224.38.8"
  },
  {
    id: 66,
    first_name: "Cesare",
    last_name: "Shearman",
    full_name: "Cesare Shearman",
    email: "cshearman1t@imdb.com",
    gender: "Female",
    ip_address: "164.46.150.157"
  },
  {
    id: 67,
    first_name: "Thedric",
    last_name: "Banaszkiewicz",
    full_name: "Thedric Banaszkiewicz",
    email: "tbanaszkiewicz1u@list-manage.com",
    gender: "Female",
    ip_address: "196.123.115.127"
  },
  {
    id: 68,
    first_name: "Birk",
    last_name: "Jedrzejczak",
    full_name: "Birk Jedrzejczak",
    email: "bjedrzejczak1v@deviantart.com",
    gender: "Female",
    ip_address: "74.156.64.232"
  },
  {
    id: 69,
    first_name: "Lisbeth",
    last_name: "O' Lone",
    full_name: "Lisbeth O' Lone",
    email: "lolone1w@gov.uk",
    gender: "Male",
    ip_address: "79.70.138.129"
  },
  {
    id: 70,
    first_name: "Janet",
    last_name: "Labes",
    full_name: "Janet Labes",
    email: "jlabes1x@vistaprint.com",
    gender: "Female",
    ip_address: "51.9.225.251"
  },
  {
    id: 71,
    first_name: "Jeffrey",
    last_name: "Yven",
    full_name: "Jeffrey Yven",
    email: "jyven1y@linkedin.com",
    gender: "Male",
    ip_address: "202.125.227.105"
  },
  {
    id: 72,
    first_name: "Clementina",
    last_name: "Anster",
    full_name: "Clementina Anster",
    email: "canster1z@prnewswire.com",
    gender: "Female",
    ip_address: "95.67.255.160"
  },
  {
    id: 73,
    first_name: "Bobina",
    last_name: "Lansdale",
    full_name: "Bobina Lansdale",
    email: "blansdale20@wisc.edu",
    gender: "Female",
    ip_address: "155.63.112.156"
  },
  {
    id: 74,
    first_name: "Florri",
    last_name: "Grayer",
    full_name: "Florri Grayer",
    email: "fgrayer21@macromedia.com",
    gender: "Female",
    ip_address: "206.228.104.250"
  },
  {
    id: 75,
    first_name: "Terrell",
    last_name: "Lembrick",
    full_name: "Terrell Lembrick",
    email: "tlembrick22@jiathis.com",
    gender: "Female",
    ip_address: "124.66.119.249"
  },
  {
    id: 76,
    first_name: "Hermia",
    last_name: "Strowan",
    full_name: "Hermia Strowan",
    email: "hstrowan23@bbb.org",
    gender: "Female",
    ip_address: "11.195.97.251"
  },
  {
    id: 77,
    first_name: "Adriano",
    last_name: "Reschke",
    full_name: "Adriano Reschke",
    email: "areschke24@google.co.jp",
    gender: "Male",
    ip_address: "137.86.220.113"
  },
  {
    id: 78,
    first_name: "Kelby",
    last_name: "Schinetti",
    full_name: "Kelby Schinetti",
    email: "kschinetti25@freewebs.com",
    gender: "Genderfluid",
    ip_address: "184.102.182.183"
  },
  {
    id: 79,
    first_name: "Jereme",
    last_name: "Cashman",
    full_name: "Jereme Cashman",
    email: "jcashman26@imdb.com",
    gender: "Male",
    ip_address: "143.227.108.250"
  },
  {
    id: 80,
    first_name: "Joyce",
    last_name: "Jakuszewski",
    full_name: "Joyce Jakuszewski",
    email: "jjakuszewski27@cdc.gov",
    gender: "Male",
    ip_address: "36.177.55.36"
  },
  {
    id: 81,
    first_name: "Jennette",
    last_name: "Seakings",
    full_name: "Jennette Seakings",
    email: "jseakings28@archive.org",
    gender: "Non-binary",
    ip_address: "116.73.45.114"
  },
  {
    id: 82,
    first_name: "Suzy",
    last_name: "McMinn",
    full_name: "Suzy McMinn",
    email: "smcminn29@yandex.ru",
    gender: "Female",
    ip_address: "219.165.54.35"
  },
  {
    id: 83,
    first_name: "Brennan",
    last_name: "Elsom",
    full_name: "Brennan Elsom",
    email: "belsom2a@dropbox.com",
    gender: "Female",
    ip_address: "173.104.246.42"
  },
  {
    id: 84,
    first_name: "Viva",
    last_name: "Cahey",
    full_name: "Viva Cahey",
    email: "vcahey2b@phpbb.com",
    gender: "Female",
    ip_address: "194.118.3.95"
  },
  {
    id: 85,
    first_name: "Garret",
    last_name: "Bone",
    full_name: "Garret Bone",
    email: "gbone2c@comsenz.com",
    gender: "Male",
    ip_address: "185.18.176.132"
  },
  {
    id: 86,
    first_name: "Lewes",
    last_name: "Kelleher",
    full_name: "Lewes Kelleher",
    email: "lkelleher2d@wikia.com",
    gender: "Female",
    ip_address: "208.229.57.161"
  },
  {
    id: 87,
    first_name: "Bethanne",
    last_name: "Pioli",
    full_name: "Bethanne Pioli",
    email: "bpioli2e@themeforest.net",
    gender: "Male",
    ip_address: "238.46.68.150"
  },
  {
    id: 88,
    first_name: "Gaile",
    last_name: "Whannel",
    full_name: "Gaile Whannel",
    email: "gwhannel2f@go.com",
    gender: "Male",
    ip_address: "116.178.50.85"
  },
  {
    id: 89,
    first_name: "Saba",
    last_name: "Darkin",
    full_name: "Saba Darkin",
    email: "sdarkin2g@howstuffworks.com",
    gender: "Male",
    ip_address: "211.110.200.92"
  },
  {
    id: 90,
    first_name: "Orv",
    last_name: "Syme",
    full_name: "Orv Syme",
    email: "osyme2h@nydailynews.com",
    gender: "Male",
    ip_address: "247.128.67.187"
  },
  {
    id: 91,
    first_name: "Lorna",
    last_name: "Brauns",
    full_name: "Lorna Brauns",
    email: "lbrauns2i@fastcompany.com",
    gender: "Female",
    ip_address: "141.206.182.175"
  },
  {
    id: 92,
    first_name: "Thea",
    last_name: "Van Der Walt",
    full_name: "Thea Van Der Walt",
    email: "tvanderwalt2j@4shared.com",
    gender: "Agender",
    ip_address: "40.254.114.223"
  },
  {
    id: 93,
    first_name: "Minerva",
    last_name: "Milligan",
    full_name: "Minerva Milligan",
    email: "mmilligan2k@opera.com",
    gender: "Female",
    ip_address: "114.52.211.38"
  },
  {
    id: 94,
    first_name: "Shoshana",
    last_name: "Hallt",
    full_name: "Shoshana Hallt",
    email: "shallt2l@mail.ru",
    gender: "Female",
    ip_address: "242.135.42.152"
  },
  {
    id: 95,
    first_name: "Vonnie",
    last_name: "Wroath",
    full_name: "Vonnie Wroath",
    email: "vwroath2m@icq.com",
    gender: "Female",
    ip_address: "8.130.5.91"
  },
  {
    id: 96,
    first_name: "Karlens",
    last_name: "Alenin",
    full_name: "Karlens Alenin",
    email: "kalenin2n@springer.com",
    gender: "Male",
    ip_address: "52.239.31.94"
  },
  {
    id: 97,
    first_name: "El(izabeth",
    last_name: "Toffanini",
    full_name: "El(izabeth Toffanini",
    email: "etoffanini2o@weebly.com",
    gender: "Non-binary",
    ip_address: "24.131.131.174"
  },
  {
    id: 98,
    first_name: "Nedda",
    last_name: "Cowle",
    full_name: "Nedda Cowle",
    email: "ncowle2p@nationalgeographic.com",
    gender: "Female",
    ip_address: "211.103.77.133"
  },
  {
    id: 99,
    first_name: "Stefa",
    last_name: "Fell",
    full_name: "Stefa Fell",
    email: "sfell2q@amazon.com",
    gender: "Female",
    ip_address: "105.201.95.48"
  },
  {
    id: 100,
    first_name: "Travis",
    last_name: "Klammt",
    full_name: "Travis Klammt",
    email: "tklammt2r@princeton.edu",
    gender: "Female",
    ip_address: "43.50.19.173"
  }
];
export {
  VueScreener as V,
  _export_sfc as _,
  VueScreenerTableCell as a,
  baseData as b,
  VueScreenerTableHeadCell as c,
  VueScreenerSearch as d,
  VueScreenerPagination as e,
  VueScreenerPaginationRowsPerPage as f,
  VueScreenerPaginationResults as g,
  VueScreenerPaginationButtons as h,
  VueScreenerTableState as i,
  VueScreenerTableHead as j,
  VueScreenerTableRow as k,
  useVueScreener as u
};
