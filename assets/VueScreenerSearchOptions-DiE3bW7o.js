import { aJ as ref, aK as onMounted, aL as onUnmounted, ar as defineComponent, aF as twMerge$1, at as openBlock, aC as createElementBlock, aH as renderSlot, aI as normalizeClass, aM as extendTailwindMerge, ax as createBaseVNode, aN as Icon, au as createBlock, aO as computed, av as withCtx, aB as createCommentVNode, aA as createTextVNode, aG as toDisplayString, aP as debounce, aQ as watchEffect, aR as normalizeStyle, aw as createVNode, aE as Fragment, aD as renderList, aS as v4, aT as orderBy, aU as watch } from "./vendor-5jMRr-pA.js";
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
const _sfc_main$l = /* @__PURE__ */ defineComponent({
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
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-b vsc-border-zinc-700 vsc-h-fit",
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
_sfc_main$l.__file = "src/components/table/VueScreenerTableRow.vue";
const VueScreenerTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableRow.vue"]]);
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
const _sfc_main$k = /* @__PURE__ */ defineComponent({
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
    const formatCellContent = (value, column, row) => {
      if (!props.screener) return value;
      if (column.format) {
        value = column.format(value, row);
      }
      const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight;
      const text = props.screener.searchQuery.value.text;
      if (!disableSearchHighlight && text && value !== void 0) {
        value = highlightMatches(String(value), text);
      }
      return value;
    };
    const __returned__ = { props, formatCellContent, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["innerHTML"];
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        $setup.twMerge(
          "vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800",
          $setup.props.class
        ),
        $props.column.isPinned && $setup.twMerge("vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out", $setup.props.pinnedClass),
        // eslint-disable-line
        $props.column.isOverlayingColumns && $setup.twMerge("!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]", $setup.props.pinnedOverlappingClass)
        // eslint-disable-line
      ])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.row && $setup.formatCellContent($props.row.data[$props.column.field], $props.column, $props.row)
        }, null, 8, _hoisted_1$4)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$k.__file = "src/components/table/VueScreenerTableCell.vue";
const VueScreenerTableCell = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableCell.vue"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
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
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Icon"], {
    icon: "codicon:arrow-down",
    class: normalizeClass([
      $setup.twMerge("vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100", $setup.props.class),
      // eslint-disable-line
      $props.direction === "asc" && $setup.twMerge("vsc-rotate-[-180deg]", $setup.props.ascClass)
    ])
  }, null, 8, ["class"]);
}
_sfc_main$j.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
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
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleClickColumnHeader($props.column))
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
  }, 8, ["column", "value", "is-pinned", "is-pinned-overlapping", "class"]);
}
_sfc_main$i.__file = "src/components/table/VueScreenerTableHeadCell.vue";
const VueScreenerTableHeadCell = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableHeadCell.vue"]]);
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
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
        return "1fr";
      });
      return { "grid-template-columns": sizes.join(" ") };
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
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$h.__file = "src/components/table/VueScreenerTable.vue";
const VueScreenerTable = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTable.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
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
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$g.__file = "src/components/table/VueScreenerTableHead.vue";
const VueScreenerTableHead = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableHead.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableView",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VueScreenerTableRow, VueScreenerTableCell, VueScreenerTableHeadCell, VueScreenerTable, VueScreenerTableHead };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
        (openBlock(true), createElementBlock(
          Fragment,
          null,
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
        ))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["columns", "onHasHorizontalOverflow", "onIsScrolledToRightEdge"]);
}
_sfc_main$f.__file = "src/components/views/VueScreenerTableView.vue";
const VueScreenerTableView = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/VueScreenerTableView.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerErrorView",
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
const _hoisted_1$3 = {
  key: 0,
  class: "vsc-font-medium vsc-mb-1"
};
const _hoisted_2$1 = { key: 1 };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-flex-col vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-red-500 vsc-text-red-500 vsc-rounded",
          $setup.props.class
        )
      )
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        $props.message ? (openBlock(), createElementBlock(
          "h4",
          _hoisted_1$3,
          toDisplayString($props.message),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true),
        $props.description ? (openBlock(), createElementBlock(
          "p",
          _hoisted_2$1,
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
_sfc_main$e.__file = "src/components/views/VueScreenerErrorView.vue";
const VueScreenerErrorView = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/VueScreenerErrorView.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerEmptyView",
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
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-zinc-700 vsc-rounded vsc-text-zinc-300",
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
_sfc_main$d.__file = "src/components/views/VueScreenerEmptyView.vue";
const VueScreenerEmptyView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/VueScreenerEmptyView.vue"]]);
const _sfc_main$c = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.5em",
  height: "1.5em",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
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
  _hoisted_2
];
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3]);
}
_sfc_main$c.__file = "src/components/ui/spinner/Spinner.vue";
const UiSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/spinner/Spinner.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerLoadingView",
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
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(
        $setup.twMerge(
          "vsc-overflow-hidden vsc-overflow-y-auto vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-zinc-700 vsc-rounded vsc-text-zinc-300",
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
_sfc_main$b.__file = "src/components/views/VueScreenerLoadingView.vue";
const VueScreenerLoadingView = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/VueScreenerLoadingView.vue"]]);
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
  width: "auto",
  order: 0,
  only: false,
  hidden: false,
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
  const sortDirection = options.sortDirection;
  if (sortField && sortDirection) {
    return [...orderBy(data, [(row) => row.data[sortField]], [sortDirection])];
  } else {
    return data;
  }
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
const useVueScreener = (inputData, options = {}) => {
  const preferences = ref({
    height: options.height ?? "400px",
    editable: options.editable ?? false,
    disableSearchHighlight: options.disableSearchHighlight ?? false,
    loading: options.loading ?? false
  });
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
    page: options.defaultCurrentPage ?? 1,
    // Current page number
    rowsPerPage: options.defaultRowsPerPage ?? 25,
    // Number of rows per page
    sortField: options.defaultSortField ?? null,
    // Field to sort by
    sortDirection: options.defaultSortDirection ?? "desc"
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
    const sortedRows2 = searchQuery.value.text ? queriedRows.value : allRows.value;
    const _sortField = searchQuery.value.sortField;
    if (_sortField && searchQuery.value.sortDirection) {
      return sortRows(sortedRows2, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection
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
    dataFields.forEach((field) => columns2.set(field, createColumn({ field })));
    if (options.columns) {
      Object.entries(options.columns).forEach(([field, config]) => {
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
      searchQuery.value.sortDirection = searchQuery.value.sortField === field ? searchQuery.value.sortDirection === "desc" ? "asc" : "desc" : (column == null ? void 0 : column.defaultSortDirection) || searchQuery.value.sortDirection;
      searchQuery.value.sortField = field;
    },
    goToPage: (page) => actions.search({ page }),
    setPerPage: (rowsPerPage2) => actions.search({ rowsPerPage: rowsPerPage2 }),
    setDimensions: (_dimensions) => dimensions.value = _dimensions,
    // eslint-disable-line
    setData: (inputData2) => allRows.value = isValidInput(inputData2) ? convertToRows(inputData2) : [],
    updateRow: (id, partialData) => {
      let cellChanges = [];
      let rowChanges = null;
      const updatedRows = allRows.value.map((row) => {
        if (id === row.id) {
          const updatedRow = { ...row.data, ...partialData };
          cellChanges = Object.keys(partialData).map((key) => {
            const column = columns.value.find((columns2) => columns2.field === key);
            return {
              newValue: partialData[key],
              oldValue: row.data[key],
              column,
              row
            };
          });
          rowChanges = {
            newRow: updatedRow.data,
            oldRow: row.data.data,
            updatedCells: cellChanges
          };
          return { ...row, data: updatedRow };
        }
        return row;
      });
      if (options.onCellChanged) {
        cellChanges.forEach(options.onCellChanged);
      }
      if (options.onRowChanged && rowChanges) {
        options.onRowChanged(rowChanges);
      }
      if (options.onDataChanged && rowChanges) {
        options.onDataChanged({
          newData: updatedRows.map((row) => row.data.data),
          oldData: allRows.value.map((row) => row.data.data),
          updatedRow: rowChanges
        });
      }
      allRows.value = updatedRows;
    },
    setLoading: (loading) => preferences.value.loading = loading,
    setHasHorizontalOverflow: (value) => hasHorizontalOverflow.value = value,
    setIsScrolledToRightEdge: (value) => isScrolledToRightEdge.value = value
  };
  return {
    preferences,
    // user preferences
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
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VueScreener",
  props: {
    screener: { type: Object, required: false },
    data: { type: Array, required: false },
    class: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const internalScreener = computed(() => {
      if (props.screener) return props.screener;
      return useVueScreener(props.data ?? []);
    });
    const view = computed(() => {
      if (internalScreener.value.preferences.value.loading) return "loading";
      if (internalScreener.value.hasError.value) return "error";
      if (!internalScreener.value.allRows.value.length) return "empty";
      return "default";
    });
    const screenerRef = ref();
    useElementSize(screenerRef, internalScreener.value.actions.setDimensions);
    const __returned__ = { props, internalScreener, view, screenerRef, VueScreenerTableView, VueScreenerErrorView, VueScreenerEmptyView, VueScreenerLoadingView, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "section",
    {
      class: normalizeClass($setup.twMerge("vs-screener vsc-font-sans vsc-overflow-auto vsc-text-sm vsc-rounded vsc-border vsc-border-zinc-700", $setup.props.class)),
      style: normalizeStyle({ height: $setup.internalScreener.preferences.value.height }),
      ref: "screenerRef"
    },
    [
      createCommentVNode(" eslint-disable-line "),
      $setup.view === "default" ? renderSlot(_ctx.$slots, "default", {
        key: 0,
        screener: $setup.internalScreener
      }, () => [
        createVNode($setup["VueScreenerTableView"], { screener: $setup.internalScreener }, null, 8, ["screener"])
      ]) : createCommentVNode("v-if", true),
      $setup.view === "loading" ? renderSlot(_ctx.$slots, "loading", {
        key: 1,
        screener: $setup.internalScreener
      }, () => [
        createVNode($setup["VueScreenerLoadingView"])
      ]) : createCommentVNode("v-if", true),
      $setup.view === "empty" ? renderSlot(_ctx.$slots, "empty", {
        key: 2,
        screener: $setup.internalScreener
      }, () => [
        createVNode($setup["VueScreenerEmptyView"], { message: "No data provided" })
      ]) : createCommentVNode("v-if", true),
      $setup.view === "error" ? renderSlot(_ctx.$slots, "error", {
        key: 3,
        screener: $setup.internalScreener
      }, () => [
        createVNode($setup["VueScreenerErrorView"], {
          message: "Invalid data provided.",
          description: "Please provide an array of objects or an array of arrays."
        })
      ]) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$a.__file = "src/components/VueScreener.vue";
const VueScreener = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/VueScreener.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = ["disabled"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-outline-none vsc-w-24 vsc-h-8 vsc-border vsc-border-zinc-700 vsc-rounded vsc-bg-zinc-800 vsc-px-2 vsc-text-white focus:vsc-border-zinc-600 placeholder:vsc-text-zinc-500",
        $setup.props.class
      ),
      $props.error && $setup.twMerge("vsc-border vsc-border-red-500", $setup.props.errorClass)
    ]),
    disabled: $props.disabled
  }, null, 10, _hoisted_1$1);
}
_sfc_main$9.__file = "src/components/ui/input/Input.vue";
const UiInput = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/input/Input.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInput"], {
    type: "number",
    value: $props.value,
    min: "1",
    step: "1",
    onInput: _cache[0] || (_cache[0] = ($event) => $setup.emit("change", Number($event.target.value))),
    "error-class": $props.errorClass
  }, null, 8, ["value", "error-class"]);
}
_sfc_main$8.__file = "src/components/pagination/VueScreenerPaginationRowsPerPage.vue";
const VueScreenerPaginationRowsPerPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationRowsPerPage.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$7.__file = "src/components/pagination/VueScreenerPaginationResults.vue";
const VueScreenerPaginationResults = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationResults.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1 = ["disabled"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  ], 10, _hoisted_1);
}
_sfc_main$6.__file = "src/components/ui/button/Button.vue";
const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/button/Button.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$5.__file = "src/components/pagination/VueScreenerPaginationButtons.vue";
const VueScreenerPaginationButtons = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPaginationButtons.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$4.__file = "src/components/pagination/VueScreenerPagination.vue";
const VueScreenerPagination = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/pagination/VueScreenerPagination.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerSearch",
  props: {
    screener: { type: Object, required: true },
    class: { type: null, required: false }
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
    const __returned__ = { props, history, historyIndex, regex, isValidQuery, onKeydown, onInput, UiInput, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInput"], {
    class: normalizeClass($setup.twMerge("vsc-w-[200px] vsc-flex vsc-items-center vsc-gap-2 vsc-relative", $setup.props.class)),
    type: "text",
    value: $props.screener.searchQuery.value.text,
    error: $setup.regex && !$setup.isValidQuery,
    placeholder: "Search...",
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput
  }, null, 8, ["class", "value", "error"]);
}
_sfc_main$3.__file = "src/components/search/VueScreenerSearch.vue";
const VueScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/search/VueScreenerSearch.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$2.__file = "src/components/ui/toggle-button/ToggleButtonGroup.vue";
const ToggleButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/toggle-button/ToggleButtonGroup.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$1.__file = "src/components/ui/toggle-button/ToggleButton.vue";
const ToggleButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/toggle-button/ToggleButton.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main.__file = "src/components/search/VueScreenerSearchOptions.vue";
const VueScreenerSearchOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/search/VueScreenerSearchOptions.vue"]]);
export {
  VueScreener as V,
  _export_sfc as _,
  VueScreenerTableCell as a,
  VueScreenerTableHeadCell as b,
  VueScreenerSearch as c,
  VueScreenerSearchOptions as d,
  VueScreenerPagination as e,
  VueScreenerPaginationRowsPerPage as f,
  VueScreenerPaginationResults as g,
  VueScreenerPaginationButtons as h,
  VueScreenerTableView as i,
  VueScreenerTableHead as j,
  VueScreenerTableRow as k,
  useVueScreener as u
};
