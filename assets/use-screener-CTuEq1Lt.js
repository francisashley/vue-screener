import { aF as ref, aG as onMounted, aH as onUnmounted, aI as extendTailwindMerge, ar as defineComponent, aJ as computed, at as openBlock, aC as createElementBlock, aE as renderSlot, aK as normalizeClass, aL as debounce, aM as normalizeStyle, ax as createBaseVNode, au as createBlock, av as withCtx, aw as createVNode, aB as createCommentVNode, aN as Fragment, aO as renderList, aP as watchEffect, aQ as twMerge$1, aD as toDisplayString, ay as normalizeProps, aR as guardReactiveProps, aA as createTextVNode, aS as watch, aT as v4, aU as orderBy } from "./vendor-BU1pZ-lL.js";
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
const twMerge = extendTailwindMerge({ prefix: "vsc-" });
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-b vsc-border-zinc-700 vsc-h-fit"
      // eslint-disable-line
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$n.__file = "src/components/ui/table/TableRow.vue";
const TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableRow.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  props: {
    isFirst: { type: Boolean, required: false },
    isLast: { type: Boolean, required: false },
    isSticky: { type: Boolean, required: false },
    isStickyOverlapping: { type: Boolean, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-border-r vsc-border-zinc-700 vsc-py-2 vsc-px-2 vsc-whitespace-inherit vsc-bg-zinc-800",
      isLastClass: "vsc-border-r-0",
      isStickyClass: "vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px]  vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out",
      // eslint-disable-line
      isStickyOverlappingClass: "!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]"
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        // eslint-disable-line
        isFirstClass: twMerge((_b = props.ui) == null ? void 0 : _b.isFirstClass),
        isLastClass: twMerge((_c = props.ui) == null ? void 0 : _c.isLastClass, uiDefaults.isLastClass),
        isStickyClass: twMerge((_d = props.ui) == null ? void 0 : _d.isStickyClass, uiDefaults.isStickyClass),
        isStickyOverlappingClass: twMerge((_e = props.ui) == null ? void 0 : _e.isStickyOverlappingClass, uiDefaults.isStickyOverlappingClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({
        [$setup.ui.class]: true,
        [$setup.ui.isFirstClass]: $props.isFirst,
        [$setup.ui.isLastClass]: $props.isLast,
        [$setup.ui.isStickyClass]: $props.isSticky,
        [$setup.ui.isStickyOverlappingClass]: $props.isStickyOverlapping
      })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$m.__file = "src/components/ui/table/TableCell.vue";
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableCell.vue"]]);
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
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Table",
  props: {
    columnDefs: { type: Array, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-rounded vsc-border vsc-overflow-auto vsc-border-zinc-700 vsc-text-zinc-200 vsc-auto-rows-min"
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const style = computed(() => {
      const sizes = props.columnDefs.map((columnDef) => columnDef.width ?? "1fr");
      return { "grid-template-columns": sizes.join(" ") };
    });
    const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable();
    const __returned__ = { props, uiDefaults, ui, style, mainRef, isScrollable, isScrolledEnd };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true }),
      style: normalizeStyle($setup.style),
      ref: "mainRef"
    },
    [
      renderSlot(_ctx.$slots, "default", {
        isScrollable: $setup.isScrollable,
        isScrolledEnd: $setup.isScrolledEnd
      })
    ],
    6
    /* CLASS, STYLE */
  );
}
_sfc_main$l.__file = "src/components/ui/table/Table.vue";
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/Table.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-font-bold vsc-border-b vsc-border-zinc-700 vsc-sticky vsc-top-0 vsc-h-fit"
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$k.__file = "src/components/ui/table/TableHead.vue";
const TableHead = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableHead.vue"]]);
const _sfc_main$j = {};
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  { d: "M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = [
  _hoisted_2$6
];
function _sfc_render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, [..._hoisted_3$3]);
}
_sfc_main$j.__file = "src/components/icons/RemixSortDescIcon.vue";
const RemixSortDescIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/RemixSortDescIcon.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SortIcon",
  props: {
    direction: { type: [null, String], required: false },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100",
      // eslint-disable-line
      ascClass: "vsc-rotate-[-180deg]"
    };
    const ui = computed(() => {
      var _a, _b;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        ascClass: twMerge(uiDefaults.ascClass, (_b = props.ui) == null ? void 0 : _b.ascClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui, RemixSortDescIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RemixSortDescIcon"], {
    class: normalizeClass({
      [$setup.ui.class]: true,
      [$setup.ui.ascClass]: $props.direction === "asc"
    })
  }, null, 8, ["class"]);
}
_sfc_main$i.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TableView",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      table: {
        header: {
          cell: {
            class: "vsc-inline-flex vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-bg-[#1f1f22] vsc-text-xs",
            sortableClass: "vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer"
          }
        }
      }
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
      return {
        table: {
          class: (_b = (_a = props.ui) == null ? void 0 : _a.table) == null ? void 0 : _b.class,
          header: {
            class: (_e = (_d = (_c = props.ui) == null ? void 0 : _c.table) == null ? void 0 : _d.header) == null ? void 0 : _e.class,
            cell: {
              class: twMerge(uiDefaults.table.header.cell.class, (_i = (_h = (_g = (_f = props.ui) == null ? void 0 : _f.table) == null ? void 0 : _g.header) == null ? void 0 : _h.cell) == null ? void 0 : _i.class),
              sortableClass: twMerge(
                uiDefaults.table.header.cell.sortableClass,
                (_m = (_l = (_k = (_j = props.ui) == null ? void 0 : _j.table) == null ? void 0 : _k.header) == null ? void 0 : _l.cell) == null ? void 0 : _m.sortableClass
              ),
              sortingClass: twMerge(
                (_q = (_p = (_o = (_n = props.ui) == null ? void 0 : _n.table) == null ? void 0 : _o.header) == null ? void 0 : _p.cell) == null ? void 0 : _q.sortingClass,
                (_u = (_t = (_s = (_r = props.ui) == null ? void 0 : _r.table) == null ? void 0 : _s.header) == null ? void 0 : _t.cell) == null ? void 0 : _u.sortingClass
              ),
              sortIcon: (_y = (_x = (_w = (_v = props.ui) == null ? void 0 : _v.table) == null ? void 0 : _w.header) == null ? void 0 : _x.cell) == null ? void 0 : _y.sortIcon
            }
          },
          row: (_A = (_z = props.ui) == null ? void 0 : _z.table) == null ? void 0 : _A.row
        }
      };
    });
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
    const processValue = (value, colDef) => {
      if (colDef.format) {
        value = colDef.format(value);
      }
      const disableSearchHighlight = props.screener.preferences.value.disableSearchHighlight;
      const searchText = props.screener.searchQuery.value.searchText;
      if (!disableSearchHighlight && searchText && value !== void 0) {
        value = highlightMatches(String(value), searchText);
      }
      return value;
    };
    const __returned__ = { props, uiDefaults, ui, getSortDirection, handleClickColumnHeader, processValue, TableRow, TableCell, Table, TableHead, SortIcon, get highlightMatches() {
      return highlightMatches;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = ["innerHTML"];
const _hoisted_2$5 = ["innerHTML"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Table"], {
    "column-defs": $props.screener.columnDefs.value,
    ui: $setup.ui.table
  }, {
    default: withCtx(({ isScrollable, isScrolledEnd }) => [
      createVNode($setup["TableHead"], {
        ui: $setup.ui.table.header
      }, {
        default: withCtx(() => [
          createCommentVNode(" @ts-ignore "),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($props.screener.columnDefs.value, (column, _i) => {
              var _a, _b;
              return renderSlot(_ctx.$slots, "table-head", {
                key: _i,
                column,
                value: column.field,
                isSticky: column.isSticky,
                isStickyOverlapping: column.isSticky && isScrollable && !isScrolledEnd,
                ui: $setup.ui.table.header.cell,
                class: normalizeClass({
                  [(_a = $setup.ui.table.header) == null ? void 0 : _a.cell.sortableClass]: column.isSortable,
                  [(_b = $setup.ui.table.header) == null ? void 0 : _b.cell.sortingClass]: Boolean(column.isSortable && $setup.getSortDirection(column.field))
                }),
                onClick: ($event) => $setup.handleClickColumnHeader(column)
              }, () => {
                var _a2, _b2;
                return [
                  createVNode($setup["TableCell"], {
                    value: column.field,
                    "is-sticky": column.isSticky,
                    "is-sticky-overlapping": column.isSticky && isScrollable && !isScrolledEnd,
                    ui: $setup.ui.table.header.cell,
                    class: normalizeClass({
                      [(_a2 = $setup.ui.table.header) == null ? void 0 : _a2.cell.sortableClass]: column.isSortable,
                      [(_b2 = $setup.ui.table.header) == null ? void 0 : _b2.cell.sortingClass]: Boolean(column.isSortable && $setup.getSortDirection(column.field))
                    }),
                    onClick: ($event) => $setup.handleClickColumnHeader(column)
                  }, {
                    default: withCtx(() => {
                      var _a3, _b3;
                      return [
                        column.isSortable && $setup.getSortDirection(column.field) ? (openBlock(), createBlock($setup["SortIcon"], {
                          key: 0,
                          direction: $setup.getSortDirection(column.field),
                          ui: (_b3 = (_a3 = $setup.ui.table.header) == null ? void 0 : _a3.cell) == null ? void 0 : _b3.sortIcon
                        }, null, 8, ["direction", "ui"])) : createCommentVNode("v-if", true),
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          createBaseVNode("span", {
                            innerHTML: column.label
                          }, null, 8, _hoisted_1$9)
                        ])
                      ];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["value", "is-sticky", "is-sticky-overlapping", "ui", "class", "onClick"])
                ];
              });
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["ui"]),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($props.screener.paginatedItems.value, (item, _i) => {
          return openBlock(), createBlock($setup["TableRow"], {
            key: _i,
            ui: $setup.ui.table.row
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($props.screener.columnDefs.value, (column, _j) => {
                  var _a;
                  return renderSlot(_ctx.$slots, "table-cell", {
                    key: _j,
                    column,
                    value: column.field,
                    isSticky: column.isSticky,
                    isStickyOverlapping: column.isSticky && isScrollable && !isScrolledEnd,
                    item,
                    ui: (_a = $setup.ui.table.row) == null ? void 0 : _a.cell,
                    highlightMatches: $setup.highlightMatches,
                    searchText: $props.screener.searchQuery.value.searchText
                  }, () => {
                    var _a2;
                    return [
                      createVNode($setup["TableCell"], {
                        column,
                        value: column.field,
                        "is-sticky": column.isSticky,
                        "is-sticky-overlapping": column.isSticky && isScrollable && !isScrolledEnd,
                        item,
                        ui: (_a2 = $setup.ui.table.row) == null ? void 0 : _a2.cell,
                        "highlight-matches": $setup.highlightMatches,
                        "search-text": $props.screener.searchQuery.value.searchText
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default", {}, () => [
                            createBaseVNode("span", {
                              innerHTML: $setup.processValue(item.data[column.field], column)
                            }, null, 8, _hoisted_2$5)
                          ])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["column", "value", "is-sticky", "is-sticky-overlapping", "item", "ui", "highlight-matches", "search-text"])
                    ];
                  });
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["ui"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["column-defs", "ui"]);
}
_sfc_main$h.__file = "src/components/views/TableView.vue";
const TableView = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableView.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  props: {
    autofocus: { type: Boolean, required: false },
    modelValue: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const container = ref(null);
    const textarea = ref(null);
    const props = __props;
    const emit = __emit;
    const handleInput = (event) => {
      const target = event.target;
      container.value.setAttribute("data-value", target.value);
      emit("update:modelValue", event.target.value);
    };
    onMounted(() => {
      if (props.autofocus) {
        textarea.value.focus();
      }
    });
    const __returned__ = { container, textarea, props, emit, handleInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = ["data-value"];
const _hoisted_2$4 = ["value"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "vsc-textarea-container vsc-h-fit vsc-inline-grid vsc-align-top vsc-relative vsc-min-w-full vsc-w-max vsc-max-w-[150px]",
    "data-value": $props.modelValue,
    ref: "container"
  }, [
    createBaseVNode("textarea", {
      ref: "textarea",
      value: $props.modelValue,
      onInput: $setup.handleInput,
      onBlur: _cache[0] || (_cache[0] = ($event) => $setup.emit("blur"))
    }, null, 40, _hoisted_2$4)
  ], 8, _hoisted_1$8);
}
_sfc_main$g.__file = "src/components/ui/textarea/Textarea.vue";
const UiTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/textarea/Textarea.vue"]]);
function isCharacterKeyPress(event) {
  return /^.$/u.test(event.key);
}
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SpreadsheetCell",
  props: {
    ui: { type: Object, required: false },
    value: { type: null, required: false },
    point: { type: Array, required: true },
    isHeader: { type: Boolean, required: false },
    isSelectable: { type: Boolean, required: false },
    isActive: { type: Boolean, required: false }
  },
  emits: [
    "select",
    "select-up",
    "select-right",
    "select-down",
    "select-left",
    "select-next",
    "select-prev",
    "update",
    "clear"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const isEditing = ref(false);
    const uiDefaults = {
      class: "vsc-relative vsc-border-r vsc-border-zinc-700 vsc-flex vsc-items-center",
      headerClass: "vsc-font-bold vsc-bg-[#1f1f22] vsc-text-zinc-200 vsc-text-xs",
      activeClass: "vsc-outline vsc-outline-blue-500 vsc-outline-offset-[-1px]",
      textareaClass: "!vsc-absolute vsc-top-0 vsc-left-0 vsc-min-w-full vsc-w-fit vsc-min-h-full vsc-outline-none vsc-z-50 vsc-whitespace-pre ",
      // eslint-disable-line
      buttonClass: "vsc-cursor-default vsc-w-full vsc-h-full vsc-outline-none vsc-text-start vsc-px-1.5 vsc-overflow-hidden vsc-text-zinc-200",
      // eslint-disable-line
      headerButtonClass: "!vsc-text-center !vsc-whitespace-normal !vsc-h-6"
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        class: twMerge$1(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        headerClass: twMerge$1(uiDefaults.headerClass, (_b = props.ui) == null ? void 0 : _b.headerClass),
        activeClass: twMerge$1(uiDefaults.activeClass, (_c = props.ui) == null ? void 0 : _c.activeClass),
        textareaClass: twMerge$1(uiDefaults.textareaClass, (_d = props.ui) == null ? void 0 : _d.textareaClass),
        buttonClass: twMerge$1(uiDefaults.buttonClass, (_e = props.ui) == null ? void 0 : _e.buttonClass),
        headerButtonClass: twMerge$1(uiDefaults.headerButtonClass, (_f = props.ui) == null ? void 0 : _f.buttonHeaderClass)
        // eslint-disable-line
      };
    });
    const stagedValue = ref(props.value);
    watchEffect(() => stagedValue.value = props.value);
    const handleKeydown = (event) => {
      switch (event.code) {
        case "Backspace":
          if (!isEditing.value) {
            emit("clear");
          }
          break;
        case "Tab":
          if (!event.shiftKey) {
            emit("select-next");
          } else {
            emit("select-prev");
          }
          isEditing.value = false;
          emit("update", stagedValue.value);
          break;
        case "ArrowUp":
          if (!isEditing.value) {
            event.preventDefault();
            emit("select-up");
          }
          break;
        case "ArrowRight":
          if (!isEditing.value) {
            event.preventDefault();
            emit("select-right");
          }
          break;
        case "ArrowDown":
          if (!isEditing.value) {
            event.preventDefault();
            emit("select-down");
          }
          break;
        case "ArrowLeft":
          if (!isEditing.value) {
            event.preventDefault();
            emit("select-left");
          }
          break;
        case "Space":
          if (!isEditing.value) {
            event.preventDefault();
            isEditing.value = true;
            stagedValue.value = "";
          }
          break;
        case "Enter":
          if (!isEditing.value) {
            event.preventDefault();
            isEditing.value = true;
          } else if (!event.shiftKey) {
            isEditing.value = false;
            emit("update", stagedValue.value);
          }
          break;
        case "Escape":
          if (isEditing.value) {
            stagedValue.value = props.value;
            isEditing.value = false;
          }
          break;
        default:
          if (!event.altKey && !event.shiftKey && !event.ctrlKey && !event.metaKey && isCharacterKeyPress(event) && !isEditing.value) {
            event.preventDefault();
            isEditing.value = true;
            stagedValue.value = event.key;
          }
          break;
      }
    };
    watchEffect(() => {
      if (props.isActive) {
        document.addEventListener("keydown", handleKeydown);
      } else {
        document.removeEventListener("keydown", handleKeydown);
      }
    });
    onUnmounted(() => {
      document.removeEventListener("keydown", handleKeydown);
    });
    const cell = ref(null);
    const handleBlurTextarea = () => {
      isEditing.value = false;
      emit("update", stagedValue.value);
    };
    const __returned__ = { props, emit, isEditing, uiDefaults, ui, stagedValue, handleKeydown, cell, handleBlurTextarea, UiTextarea };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true, [$setup.ui.headerClass]: $props.isHeader, [$setup.ui.activeClass]: $props.isActive }),
      ref: "cell"
    },
    [
      createBaseVNode(
        "button",
        {
          class: normalizeClass({ [$setup.ui.buttonClass]: true, [$setup.ui.headerButtonClass]: $props.isHeader }),
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("select", $event)),
          onDblclick: _cache[1] || (_cache[1] = ($event) => !$props.isHeader && ($setup.isEditing = true))
        },
        toDisplayString($props.value),
        35
        /* TEXT, CLASS, NEED_HYDRATION */
      ),
      $setup.isEditing ? (openBlock(), createBlock($setup["UiTextarea"], {
        key: 0,
        modelValue: $setup.stagedValue,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.stagedValue = $event),
        class: normalizeClass($setup.ui.textareaClass),
        autofocus: "",
        onBlur: $setup.handleBlurTextarea
      }, null, 8, ["modelValue", "class"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$f.__file = "src/components/ui/spreadsheet/SpreadsheetCell.vue";
const SpreadsheetCell = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/spreadsheet/SpreadsheetCell.vue"]]);
const _sfc_main$e = {};
const _hoisted_1$7 = { class: "vsc-relative vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-b vsc-border-zinc-700 last:vsc-border-b-0 vsc-w-fit vsc-bg-zinc-800" };
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
_sfc_main$e.__file = "src/components/ui/spreadsheet/SpreadsheetRow.vue";
const SpreadsheetRow = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/spreadsheet/SpreadsheetRow.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SpreadsheetView",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      spreadsheetView: {
        class: ""
      }
    };
    const ui = computed(() => {
      var _a, _b, _c;
      return {
        spreadsheetView: twMerge((_a = uiDefaults.spreadsheetView) == null ? void 0 : _a.class, (_c = (_b = props.ui) == null ? void 0 : _b.spreadsheetView) == null ? void 0 : _c.class)
      };
    });
    const activeCell = ref(null);
    const actions = {
      selectCell: (point) => {
        activeCell.value = point;
      },
      moveSelectionPrev: (point) => {
        let nextPoint = point;
        if (point[1] > 0) {
          nextPoint = [point[0], point[1] - 1];
        } else {
          nextPoint = [point[0] - 1, props.screener.columnDefs.value.length - 1];
        }
        activeCell.value = nextPoint;
      },
      moveSelectionNext: (point) => {
        let nextPoint = point;
        if (point[1] < props.screener.columnDefs.value.length - 1) {
          nextPoint = [point[0], point[1] + 1];
        } else {
          nextPoint = [point[0] + 1, 0];
        }
        activeCell.value = nextPoint;
      },
      moveSelectionUp: (point) => {
        if (point[0] > 0) {
          activeCell.value = [point[0] - 1, point[1]];
        }
      },
      moveSelectionRight: (point) => {
        if (point[1] < props.screener.columnDefs.value.length - 1) {
          activeCell.value = [point[0], point[1] + 1];
        }
      },
      moveSelectionDown: (point) => {
        if (point[0] < props.screener.paginatedItems.value.length - 1) {
          activeCell.value = [point[0] + 1, point[1]];
        }
      },
      moveSelectionLeft: (point) => {
        if (point[1] > 0) {
          activeCell.value = [point[0], point[1] - 1];
        }
      },
      deleteCell: (point) => {
        const selectedItem = props.screener.paginatedItems.value[point[0]];
        const selectedField = props.screener.columnDefs.value[point[1]].field;
        props.screener.actions.updateItem(selectedItem.id, { [selectedField]: null });
      }
    };
    const style = computed(() => {
      const sizes = props.screener.columnDefs.value.map(() => "minmax(auto, 300px)");
      return { "grid-template-columns": "minmax(48px, min-content) " + sizes.join(" ") };
    });
    const __returned__ = { props, uiDefaults, ui, activeCell, actions, style, SpreadsheetCell, SpreadsheetRow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = ["ui"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.screener.dimensions ? (openBlock(), createElementBlock("div", {
    key: 0,
    ui: $setup.ui.spreadsheetView,
    class: "vsc-border vsc-border-zinc-700 vsc-bg-[#1f1f22] vsc-grid vsc-auto-rows-min",
    style: normalizeStyle($setup.style)
  }, [
    createCommentVNode(" // Field columns "),
    createVNode($setup["SpreadsheetRow"], null, {
      default: withCtx(() => [
        createVNode($setup["SpreadsheetCell"], {
          "is-header": "",
          point: [-1, -1]
        }),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.props.screener.columnDefs.value, (columnDef, ci) => {
            return openBlock(), createBlock($setup["SpreadsheetCell"], {
              "is-header": "",
              key: ci,
              point: [-1, ci],
              value: columnDef.field
            }, null, 8, ["point", "value"]);
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
      renderList($props.screener.paginatedItems.value, (item, ri) => {
        return openBlock(), createBlock(
          $setup["SpreadsheetRow"],
          { key: ri },
          {
            default: withCtx(() => [
              createCommentVNode(" // Row index "),
              createVNode($setup["SpreadsheetCell"], {
                "is-header": "",
                point: [ri, -1],
                value: ri
              }, null, 8, ["point", "value"]),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.props.screener.columnDefs.value, (columnDef, ci) => {
                  return openBlock(), createBlock($setup["SpreadsheetCell"], {
                    key: ci,
                    point: [ri, ci],
                    "is-active": $setup.activeCell ? $setup.activeCell[0] === ri && $setup.activeCell[1] === ci : false,
                    value: item == null ? void 0 : item.data[columnDef.field],
                    onSelect: ($event) => $setup.actions.selectCell([ri, ci]),
                    onSelectUp: ($event) => $setup.actions.moveSelectionUp([ri, ci]),
                    onSelectRight: ($event) => $setup.actions.moveSelectionRight([ri, ci]),
                    onSelectDown: ($event) => $setup.actions.moveSelectionDown([ri, ci]),
                    onSelectLeft: ($event) => $setup.actions.moveSelectionLeft([ri, ci]),
                    onSelectNext: ($event) => $setup.actions.moveSelectionNext([ri, ci]),
                    onSelectPrev: ($event) => $setup.actions.moveSelectionPrev([ri, ci]),
                    onClear: ($event) => $setup.actions.deleteCell([ri, ci]),
                    onUpdate: ($event) => $props.screener.actions.updateItem(item.id, { [columnDef.field]: $event })
                  }, null, 8, ["point", "is-active", "value", "onSelect", "onSelectUp", "onSelectRight", "onSelectDown", "onSelectLeft", "onSelectNext", "onSelectPrev", "onClear", "onUpdate"]);
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
  ], 12, _hoisted_1$6)) : createCommentVNode("v-if", true);
}
_sfc_main$d.__file = "src/components/views/SpreadsheetView.vue";
const SpreadsheetView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/SpreadsheetView.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BadDataView",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-overflow-hidden vsc-flex vsc-flex-col vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-red-500 vsc-text-red-500 vsc-rounded"
      // eslint-disable-line
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$c.__file = "src/components/views/BadDataView.vue";
const BadDataView = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/BadDataView.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NoDataView",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-overflow-hidden vsc-flex vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-zinc-700 vsc-rounded vsc-text-zinc-300"
      // eslint-disable-line
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$b.__file = "src/components/views/NoDataView.vue";
const NoDataView = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/NoDataView.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Screener",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const view = computed(() => {
      if (props.screener.hasError.value) return "bad-data";
      if (props.screener.preferences.value.editable) return "spreadsheet";
      if (!props.screener.allItems.value.length) return "no-data";
      return "table";
    });
    const uiDefaults = {
      class: "vsc-font-sans vsc-overflow-auto vsc-text-sm",
      tableView: {
        table: {
          class: "vsc-overflow-y-auto"
        }
      },
      noDataView: {
        class: "vsc-overflow-y-auto"
      },
      badDataView: {
        class: "vsc-overflow-y-auto"
      }
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        tableView: {
          ...(_b = props.ui) == null ? void 0 : _b.tableView,
          table: {
            ...(_d = (_c = props.ui) == null ? void 0 : _c.tableView) == null ? void 0 : _d.table,
            class: twMerge(uiDefaults.tableView.table.class, (_f = (_e = props.ui) == null ? void 0 : _e.tableView) == null ? void 0 : _f.table.class)
          }
        },
        noDataView: {
          ...(_g = props.ui) == null ? void 0 : _g.noDataView,
          class: twMerge(uiDefaults.noDataView.class, (_i = (_h = props.ui) == null ? void 0 : _h.noDataView) == null ? void 0 : _i.class)
        },
        badDataView: {
          ...(_j = props.ui) == null ? void 0 : _j.badDataView,
          class: twMerge(uiDefaults.badDataView.class, (_l = (_k = props.ui) == null ? void 0 : _k.badDataView) == null ? void 0 : _l.class)
        }
      };
    });
    const screenerRef = ref();
    useElementSize(screenerRef, props.screener.actions.setDimensions);
    const __returned__ = { props, view, uiDefaults, ui, screenerRef, TableView, SpreadsheetView, BadDataView, NoDataView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode(
  "h4",
  { class: "vsc-font-medium vsc-mb-1" },
  "Invalid data provided.",
  -1
  /* HOISTED */
);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Please provide an array of objects or an array of arrays.",
  -1
  /* HOISTED */
);
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return openBlock(), createElementBlock(
    "section",
    {
      class: normalizeClass(["vs-screener", {
        [$setup.ui.class]: true
      }]),
      ref: "screenerRef"
    },
    [
      $setup.view === "table" ? (openBlock(), createBlock($setup["TableView"], {
        key: 0,
        screener: $props.screener,
        ui: $setup.ui.tableView,
        style: normalizeStyle({ height: $props.screener.preferences.value.height })
      }, {
        "table-head": withCtx((headProps) => [
          renderSlot(_ctx.$slots, "table-head", normalizeProps(guardReactiveProps(headProps)))
        ]),
        "table-cell": withCtx((cellProps) => [
          renderSlot(_ctx.$slots, "table-cell", normalizeProps(guardReactiveProps(cellProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["screener", "ui", "style"])) : $setup.view === "spreadsheet" ? (openBlock(), createBlock($setup["SpreadsheetView"], {
        key: 1,
        screener: $props.screener,
        ui: (_a = $setup.props.ui) == null ? void 0 : _a.spreadsheetView
      }, null, 8, ["screener", "ui"])) : $setup.view === "no-data" ? (openBlock(), createBlock($setup["NoDataView"], {
        key: 2,
        ui: (_b = $setup.ui) == null ? void 0 : _b.noDataView,
        style: normalizeStyle({ height: $props.screener.preferences.value.height })
      }, {
        default: withCtx(() => [
          createCommentVNode(" eslint-disable-line "),
          renderSlot(_ctx.$slots, "no-data", {}, () => [
            createTextVNode("No data provided")
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["ui", "style"])) : $setup.view === "bad-data" ? (openBlock(), createBlock($setup["BadDataView"], {
        key: 3,
        ui: (_c = $setup.ui) == null ? void 0 : _c.badDataView,
        style: normalizeStyle({ height: $props.screener.preferences.value.height })
      }, {
        default: withCtx(() => [
          createCommentVNode(" eslint-disable-line "),
          renderSlot(_ctx.$slots, "bad-data", {}, () => [
            _hoisted_1$5,
            _hoisted_2$3
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["ui", "style"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$a.__file = "src/components/Screener.vue";
const Screener = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/Screener.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    disabled: { type: Boolean, required: false },
    ui: { type: Object, required: false },
    active: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-bg-zinc-800 vsc-text-zinc-300 vsc-border vsc-border-zinc-700 vsc-rounded vsc-h-8 vsc-min-w-8 vsc-px-2 vsc-py-[3px] hover:vsc-border-zinc-600",
      // eslint-disable-line
      activeClass: "!vsc-text-blue-500 !vsc-border-zinc-500/60",
      disabledClass: "vsc-opacity-50 vsc-pointer-events-none"
    };
    const ui = computed(() => {
      var _a, _b, _c;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        activeClass: twMerge(uiDefaults.activeClass, (_b = props.ui) == null ? void 0 : _b.activeClass),
        disabledClass: twMerge(uiDefaults.disabledClass, (_c = props.ui) == null ? void 0 : _c.disabledClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["disabled"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass({
      [$setup.ui.class]: true,
      [$setup.ui.activeClass]: $props.active,
      [$setup.ui.disabledClass]: $props.disabled
    }),
    disabled: $props.disabled
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$4);
}
_sfc_main$9.__file = "src/components/ui/button/Button.vue";
const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/button/Button.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    ui: { type: Object, required: false },
    disabled: { type: Boolean, required: false },
    error: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-outline-none vsc-w-24 vsc-h-8 vsc-border vsc-border-zinc-700 vsc-rounded vsc-bg-zinc-800 vsc-px-2 vsc-text-white focus:vsc-border-zinc-600 placeholder:vsc-text-zinc-500",
      // eslint-disable-line
      errorClass: "vsc-border vsc-border-red-500"
    };
    const ui = computed(() => {
      var _a, _b;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        errorClass: twMerge(uiDefaults.errorClass, (_b = props.ui) == null ? void 0 : _b.errorClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = ["disabled"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: normalizeClass({
      [$setup.ui.class]: true,
      [$setup.ui.errorClass]: $props.error
    }),
    disabled: $props.disabled
  }, null, 10, _hoisted_1$3);
}
_sfc_main$8.__file = "src/components/ui/input/Input.vue";
const UiInput = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/input/Input.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerPagination",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-flex vsc-items-center vsc-justify-between vsc-text-zinc-300 vsc-text-sm vsc-gap-2 vsc-whitespace-nowrap",
      sideClass: "vsc-inline-flex vsc-w-[150px]",
      leftSideClass: "",
      rightSideClass: "vsc-justify-end",
      navClass: "vsc-flex vsc-gap-2"
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        leftSide: {
          class: twMerge(uiDefaults.leftSideClass, (_c = (_b = props.ui) == null ? void 0 : _b.leftSide) == null ? void 0 : _c.class)
        },
        rightSide: {
          class: twMerge(uiDefaults.rightSideClass, (_e = (_d = props.ui) == null ? void 0 : _d.rightSide) == null ? void 0 : _e.class),
          perPageInput: (_g = (_f = props.ui) == null ? void 0 : _f.rightSide) == null ? void 0 : _g.perPageInput
        },
        nav: {
          class: twMerge(uiDefaults.navClass, (_i = (_h = props.ui) == null ? void 0 : _h.nav) == null ? void 0 : _i.class),
          button: (_k = (_j = props.ui) == null ? void 0 : _j.nav) == null ? void 0 : _k.button
        }
      };
    });
    const totalPages = computed(() => {
      return Math.ceil(props.screener.queriedItems.value.length / props.screener.searchQuery.value.itemsPerPage) || 0;
    });
    const getPages = computed(() => {
      let pages = [
        props.screener.searchQuery.value.page - 1,
        props.screener.searchQuery.value.page,
        props.screener.searchQuery.value.page + 1
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
      return props.screener.searchQuery.value.page > 1;
    });
    const canNavigatePrev = computed(() => {
      return props.screener.searchQuery.value.page > 1;
    });
    const canNavigateNext = computed(() => {
      return props.screener.searchQuery.value.page < totalPages.value;
    });
    const canNavigateLast = computed(() => {
      return props.screener.searchQuery.value.page < totalPages.value;
    });
    const firstIndexOfCurrentPage = computed(() => {
      return props.screener.searchQuery.value.page * props.screener.searchQuery.value.itemsPerPage - props.screener.searchQuery.value.itemsPerPage + 1;
    });
    const lastIndexOfCurrentPage = computed(() => {
      return props.screener.searchQuery.value.page * props.screener.searchQuery.value.itemsPerPage > props.screener.queriedItems.value.length ? props.screener.queriedItems.value.length : props.screener.searchQuery.value.page * props.screener.searchQuery.value.itemsPerPage;
    });
    const currentPageIsInRange = computed(() => {
      return totalPages.value >= props.screener.searchQuery.value.page;
    });
    onMounted(() => {
      ensureCurrentPageIsValid();
    });
    watch(
      () => props.screener.queriedItems.value.length,
      () => ensureCurrentPageIsValid()
    );
    const isActive = (page) => {
      return page === props.screener.searchQuery.value.page;
    };
    const ensureCurrentPageIsValid = () => {
      if (!currentPageIsInRange.value) {
        props.screener.actions.navToPage(totalPages.value ? totalPages.value : 1);
      }
    };
    const handleChangeItemsPerPage = (event) => {
      props.screener.actions.search({ itemsPerPage: Number(event.target.value) });
    };
    const __returned__ = { props, uiDefaults, ui, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleChangeItemsPerPage, UiButton, UiInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass({
            [$setup.ui.leftSide.class]: true
          })
        },
        [
          !$props.screener.queriedItems.value.length ? (openBlock(), createElementBlock(
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
                " Showing " + toDisplayString($setup.firstIndexOfCurrentPage) + "-" + toDisplayString($setup.lastIndexOfCurrentPage) + " of " + toDisplayString($props.screener.queriedItems.value.length),
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
        "div",
        {
          class: normalizeClass({ [$setup.ui.nav.class]: true })
        },
        [
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigateFirst,
            onClick: $props.screener.actions.navToFirstPage,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("First")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick", "ui"]),
          createCommentVNode(" eslint-disable-line "),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigatePrev,
            onClick: $props.screener.actions.navToPrevPage,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Prev")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick", "ui"]),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.getPages, (page) => {
              return openBlock(), createBlock($setup["UiButton"], {
                key: page,
                active: $setup.isActive(page),
                onClick: ($event) => $props.screener.actions.navToPage(page),
                ui: $setup.ui.nav.button
              }, {
                default: withCtx(() => [
                  createCommentVNode(" eslint-disable-line "),
                  createTextVNode(
                    " " + toDisplayString(page),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["active", "onClick", "ui"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigateNext,
            onClick: $props.screener.actions.navToNextPage,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Next")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick", "ui"]),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigateLast,
            onClick: $props.screener.actions.navToLastPage,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Last")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick", "ui"])
        ],
        2
        /* CLASS */
      ),
      createBaseVNode(
        "div",
        {
          class: normalizeClass({
            [$setup.ui.rightSide.class]: true
          })
        },
        [
          createVNode($setup["UiInput"], {
            type: "number",
            value: $props.screener.searchQuery.value.itemsPerPage,
            min: "1",
            step: "1",
            onInput: $setup.handleChangeItemsPerPage,
            ui: $setup.ui.rightSide.perPageInput
          }, null, 8, ["value", "ui"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
_sfc_main$7.__file = "src/components/ScreenerPagination.vue";
const ScreenerPagination = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerPagination.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerSearch",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-w-[200px]"
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const history = ref([]);
    const historyIndex = ref(null);
    const matchRegex = computed(() => {
      return props.screener.searchQuery.value.searchTextOptions.matchRegex;
    });
    const isValidQuery = computed(() => {
      return isValidRegExp(props.screener.searchQuery.value.searchText);
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const searchText = event.target.value;
      if (isEnter) {
        props.screener.actions.search({ searchText });
        if (searchText) {
          history.value.push(searchText);
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
      props.screener.actions.search({ searchText: history.value[historyIndex.value] });
    };
    const onInput = (event) => {
      const searchText = event.target.value;
      props.screener.actions.search({ searchText });
    };
    const __returned__ = { props, uiDefaults, ui, history, historyIndex, matchRegex, isValidQuery, onKeydown, onInput, UiInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInput"], {
    type: "text",
    ui: $setup.ui,
    value: $props.screener.searchQuery.value.searchText,
    error: $setup.matchRegex && !$setup.isValidQuery,
    placeholder: "Search...",
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput
  }, null, 8, ["ui", "value", "error"]);
}
_sfc_main$6.__file = "src/components/ScreenerSearch.vue";
const ScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerSearch.vue"]]);
const _sfc_main$5 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M3.275 17.7L7.4 6.7h1.975l4.125 11h-1.9l-.975-2.8h-4.45l-1 2.8zm3.475-4.4h3.275l-1.6-4.55h-.1zm9.875 4.65q-1.275 0-2.025-.687t-.75-1.813q0-1.1.863-1.812t2.212-.713q.575 0 1.125.1t.95.275V13q0-.725-.513-1.175t-1.362-.45q-.575 0-1.05.238t-.825.687l-1.175-.875q.6-.725 1.363-1.075T17.15 10q1.725 0 2.575.813t.85 2.437v4.45H19v-.925h-.1q-.35.575-.95.875t-1.325.3m.3-1.35q.875 0 1.488-.6t.612-1.4q-.35-.2-.837-.312t-.963-.113q-.8 0-1.25.35t-.45.925q0 .5.4.825t1 .325"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
_sfc_main$5.__file = "src/components/icons/MaterialDesignMatchCase.vue";
const MatchCaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignMatchCase.vue"]]);
const _sfc_main$4 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M1 19.025v-5h2v3h18v-3h2v5zM9.55 15v-.85h-.075q-.325.5-.875.788t-1.25.287q-1.225 0-1.925-.637t-.7-1.738q0-1.05.813-1.712t2.087-.663q.575 0 1.063.088t.837.287v-.35q0-.675-.462-1.075t-1.263-.4q-.525 0-.987.225t-.788.65L4.95 9.1q.475-.675 1.2-1.025t1.675-.35q1.55 0 2.375.738t.825 2.137V15zM7.9 11.65q-.8 0-1.225.313t-.425.887q0 .5.375.813t.975.312q.8 0 1.363-.562t.562-1.363q-.35-.2-.8-.3t-.825-.1M12.525 15V4.975h1.55V7.8L14 8.8h.075q.075-.125.6-.638t1.65-.512q1.6 0 2.525 1.15t.925 2.65t-.912 2.638t-2.538 1.137q-1.025 0-1.562-.45t-.688-.7H14V15zM16.1 9.05q-1 0-1.55.738T14 11.425q0 .925.55 1.65t1.55.725t1.563-.725t.562-1.65t-.562-1.65T16.1 9.05"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
_sfc_main$4.__file = "src/components/icons/MaterialDesignMatchWord.vue";
const MatchWordIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignMatchWord.vue"]]);
const _sfc_main$3 = {};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M4.925 19.025q-1.4-1.425-2.162-3.25T2 11.95t.75-3.825t2.175-3.25L6.35 6.3Q5.2 7.425 4.6 8.888T4 11.95t.613 3.063T6.35 17.6zM9.5 18q-.625 0-1.062-.437T8 16.5t.438-1.062T9.5 15t1.063.438T11 16.5t-.437 1.063T9.5 18m3.475-5v-1.775l-1.525.9l-1-1.75l1.525-.875l-1.525-.875l1-1.75l1.525.9V6h2v1.775l1.525-.9l1 1.75l-1.525.875l1.525.875l-1 1.75l-1.525-.9V13zm6.1 6.025L17.65 17.6q1.15-1.125 1.75-2.588t.6-3.062t-.612-3.062T17.65 6.3l1.425-1.425q1.4 1.425 2.163 3.25T22 11.95t-.75 3.825t-2.175 3.25"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
_sfc_main$3.__file = "src/components/icons/MaterialDesignRegularExpression.vue";
const RegularExpressionIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignRegularExpression.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ToggleButtonGroup",
  props: {
    active: { type: Boolean, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-flex vsc-gap-0.5 vsc-items-center vsc-rounded vsc-h-8 vsc-border vsc-border-zinc-700 vsc-py-0.5 vsc-px-[3px]"
      // eslint-disable-line
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({ [$setup.ui.class]: true })
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
    active: { type: Boolean, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-cursor-pointer vsc-rounded-sm vsc-h-6 vsc-w-6 vsc-flex vsc-items-center vsc-justify-center vsc-text-zinc-300 hover:vsc-text-zinc-300 hover:vsc-bg-[#3e51b5]",
      // eslint-disable-line
      activeClass: "vsc-text-white vsc-bg-[#3e51b5]"
    };
    const ui = computed(() => {
      var _a, _b;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        activeClass: twMerge(uiDefaults.activeClass, (_b = props.ui) == null ? void 0 : _b.activeClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass({
        [$setup.ui.class]: true,
        [$setup.ui.activeClass]: $setup.props.active
      })
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
  __name: "ScreenerSearchOptions",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      toggleButton: {
        icon: {
          class: "vsc-w-4 vsc-h-4"
        }
      }
    };
    const ui = computed(() => {
      var _a, _b, _c, _d, _e;
      return {
        class: (_a = props.ui) == null ? void 0 : _a.class,
        toggleButton: {
          ...(_b = props.ui) == null ? void 0 : _b.toggleButton,
          icon: {
            class: twMerge(uiDefaults.toggleButton.icon.class, (_e = (_d = (_c = props.ui) == null ? void 0 : _c.toggleButton) == null ? void 0 : _d.icon) == null ? void 0 : _e.class)
          }
        }
      };
    });
    const toggleOption = (searchTextOption) => {
      const updatedSearchTextOptions = { ...props.screener.searchQuery.value.searchTextOptions };
      if (searchTextOption === "match-case") {
        updatedSearchTextOptions.matchCase = !updatedSearchTextOptions.matchCase;
      } else if (searchTextOption === "match-word") {
        updatedSearchTextOptions.matchWord = !updatedSearchTextOptions.matchWord;
      } else if (searchTextOption === "match-regex") {
        updatedSearchTextOptions.matchRegex = !updatedSearchTextOptions.matchRegex;
      }
      props.screener.actions.search({ searchTextOptions: updatedSearchTextOptions });
    };
    const __returned__ = { props, uiDefaults, ui, toggleOption, MatchCaseIcon, MatchWordIcon, RegularExpressionIcon, ToggleButtonGroup, ToggleButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["ToggleButtonGroup"], { ui: $setup.ui }, {
    default: withCtx(() => {
      var _a, _b, _c;
      return [
        createVNode($setup["ToggleButton"], {
          title: "Match case",
          active: $setup.props.screener.searchQuery.value.searchTextOptions.matchCase,
          ui: (_a = $setup.ui) == null ? void 0 : _a.toggleButton,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggleOption("match-case"))
        }, {
          default: withCtx(() => [
            createVNode($setup["MatchCaseIcon"], {
              class: normalizeClass($setup.ui.toggleButton.icon.class)
            }, null, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["active", "ui"]),
        createVNode($setup["ToggleButton"], {
          title: "Match word",
          active: $setup.props.screener.searchQuery.value.searchTextOptions.matchWord,
          ui: (_b = $setup.ui) == null ? void 0 : _b.toggleButton,
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.toggleOption("match-word"))
        }, {
          default: withCtx(() => [
            createVNode($setup["MatchWordIcon"], {
              class: normalizeClass($setup.ui.toggleButton.icon.class)
            }, null, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["active", "ui"]),
        createVNode($setup["ToggleButton"], {
          title: "Use regular expression",
          active: $setup.props.screener.searchQuery.value.searchTextOptions.matchRegex,
          ui: (_c = $setup.ui) == null ? void 0 : _c.toggleButton,
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.toggleOption("match-regex"))
        }, {
          default: withCtx(() => [
            createVNode($setup["RegularExpressionIcon"], {
              class: normalizeClass($setup.ui.toggleButton.icon.class)
            }, null, 8, ["class"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["active", "ui"])
      ];
    }),
    _: 1
    /* STABLE */
  }, 8, ["ui"]);
}
_sfc_main.__file = "src/components/ScreenerSearchOptions.vue";
const ScreenerSearchOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerSearchOptions.vue"]]);
function isValidInput(data) {
  const isObject = (val) => typeof val === "object" && val !== null;
  return Array.isArray(data) && data.every((item) => Array.isArray(item) || isObject(item));
}
function normaliseInput(data) {
  const transformedData = data.map((item) => Array.isArray(item) ? { ...item } : item);
  return transformedData.map((item) => {
    return { id: v4(), data: item };
  });
}
function getFields(rows) {
  const fields = new Set(rows.flatMap((item) => Object.keys(item.data)));
  return Array.from(fields);
}
const createColumnDef = (colDef) => ({
  field: "",
  label: "",
  isSticky: false,
  isSortable: true,
  defaultSortDirection: "desc",
  width: "auto",
  order: 0,
  only: false,
  hidden: false,
  ...colDef
});
function getPaginated({
  rows = [],
  page = 1,
  itemsPerPage = 25
}) {
  const start = itemsPerPage * page;
  const end = start + itemsPerPage;
  return rows.slice(start, end);
}
const sortItems = (data, options) => {
  const sortField = options.sortField;
  const sortDirection = options.sortDirection;
  if (sortField && sortDirection) {
    return [...orderBy(data, [(item) => item.data[sortField]], [sortDirection])];
  } else {
    return data;
  }
};
const testCriteria = (subject, pattern, options) => {
  const { matchCase = false, matchWord = false, matchRegex = false } = options;
  if (!matchRegex) {
    pattern = escapeRegExp(pattern);
  }
  if (matchWord) {
    pattern = `\\b(${pattern})\\b`;
  }
  const flags = matchCase ? "g" : "gi";
  return new RegExp(pattern, flags).test(subject);
};
const parseSearchText = (searchText) => {
  const excludeFilters = [];
  searchText = searchText.replace(new RegExp("(?<!\\w)-\\w+:\\w+", "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value]);
    return "";
  });
  searchText = searchText.replace(new RegExp('(?<!\\w)-\\w+:"[^"]*"$', "g"), (match) => {
    const [field, value] = match.replace("-", "").split(":");
    excludeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  const includeFilters = [];
  searchText = searchText.replace(/\b\w+:\w+\b/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value]);
    return "";
  }).trim();
  searchText = searchText.replace(/\b\w+:"[^"]*"$/g, (match) => {
    const [field, value] = match.split(":");
    includeFilters.push([field, value.slice(1, -1)]);
    return "";
  }).trim();
  return {
    searchText,
    excludeFilters,
    includeFilters
  };
};
function search(options) {
  const { searchText = "" } = options;
  if (!searchText) return options.rows;
  const { searchText: parsedSearchText, excludeFilters, includeFilters } = parseSearchText(searchText);
  const { rows, matchRegex = false, matchCase = false, matchWord = false } = options;
  const testExcludeFilters = (filters, row) => {
    return filters.some(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value, value, {
          matchCase,
          matchWord: true,
          matchRegex
        });
      }
    });
  };
  const testIncludeFilters = (filters, row) => {
    return filters.every(([field, value]) => {
      if (row.data[field]) {
        return testCriteria(row.data[field].value, value, {
          matchCase,
          matchWord: true,
          matchRegex
        });
      }
    });
  };
  return rows.filter((item) => {
    let shouldExclude = false;
    let shouldInclude = true;
    let meetsSearchCriteria = true;
    if (excludeFilters.length && testExcludeFilters(excludeFilters, item)) {
      shouldExclude = true;
    }
    if (includeFilters.length && !testIncludeFilters(includeFilters, item)) {
      shouldInclude = false;
    }
    meetsSearchCriteria = options.columnDefs.some((columnDef) => {
      if (testCriteria(String(columnDef.field ? item.data[columnDef.field] : ""), parsedSearchText, {
        matchCase,
        matchWord,
        matchRegex
      })) {
        return true;
      }
    });
    return !shouldExclude && shouldInclude && meetsSearchCriteria;
  });
}
const useScreener = (inputData, options = {}) => {
  const preferences = ref({
    height: options.height ?? "400px",
    editable: options.editable ?? false,
    disableSearchHighlight: options.disableSearchHighlight ?? false
  });
  const dimensions = ref(null);
  const allItems = ref(isValidInput(inputData) ? normaliseInput(inputData) : []);
  const hasError = computed(() => !isValidInput(inputData));
  const searchQuery = ref({
    searchText: "",
    // Search text
    searchTextOptions: {
      matchRegex: false,
      // Whether to match regex in search
      matchCase: false,
      // Whether to match case in search
      matchWord: false
      // Whether to match whole word in search
    },
    page: options.defaultCurrentPage ?? 1,
    // Current page number
    itemsPerPage: options.defaultItemsPerPage ?? 25,
    // Number of rows per page
    sortField: options.defaultSortField ?? null,
    // Field to sort by
    sortDirection: options.defaultSortDirection ?? "desc"
    // Sort direction
  });
  const queriedItems = computed(() => {
    return search({
      rows: allItems.value,
      columnDefs: columnDefs.value,
      searchText: searchQuery.value.searchText,
      matchRegex: searchQuery.value.searchTextOptions.matchRegex,
      matchCase: searchQuery.value.searchTextOptions.matchCase,
      matchWord: searchQuery.value.searchTextOptions.matchWord
    });
  });
  const sortedItems = computed(() => {
    const sortedItems2 = searchQuery.value.searchText ? queriedItems.value : allItems.value;
    const _sortField = searchQuery.value.sortField;
    if (_sortField && searchQuery.value.sortDirection) {
      return sortItems(sortedItems2, {
        sortField: _sortField,
        sortDirection: searchQuery.value.sortDirection
      });
    } else {
      return sortedItems2;
    }
  });
  const paginatedItems = computed(() => {
    return getPaginated({
      rows: sortedItems.value,
      page: searchQuery.value.page - 1,
      itemsPerPage: searchQuery.value.itemsPerPage
    });
  });
  const columnDefsMap = computed(() => {
    const userColDefs = options.columnDefs ? Object.entries(options.columnDefs).map(([field, colDef]) => createColumnDef({ field, label: field, ...colDef })) : [];
    const dataColDefs = getFields(allItems.value).map((field) => createColumnDef({ field, label: field }));
    const additionalUserDefs = userColDefs.filter(
      (userColDef) => !dataColDefs.map((dataColDef) => dataColDef.field).includes(userColDef.field)
    );
    const mergedDataColDefs = dataColDefs.reduce(
      (acc, colDef) => {
        acc[colDef.field] = {
          ...colDef,
          ...userColDefs.find((userColDef) => userColDef.field === colDef.field) ?? {}
        };
        return acc;
      },
      {}
    );
    const mergedAdditionalUserDefs = additionalUserDefs.reduce(
      (acc, colDef) => {
        acc[colDef.field] = {
          ...colDef,
          ...dataColDefs.find((dataColDef) => dataColDef.field === colDef.field) ?? {}
        };
        return acc;
      },
      {}
    );
    return {
      ...mergedDataColDefs,
      ...mergedAdditionalUserDefs
    };
  });
  const columnDefs = computed(() => {
    let columns = Object.values(columnDefsMap.value);
    columns = columns.sort((a, b) => a.order - b.order);
    columns = columns.filter((column) => !column.hidden);
    if (columns.some((column) => column.only)) {
      columns = columns.filter((column) => column.only);
    }
    return columns;
  });
  const actions = {
    search: (_searchQuery) => searchQuery.value = { ...searchQuery.value, ..._searchQuery },
    sort: (field) => {
      const columnDef = columnDefs.value.find((columnDefs2) => columnDefs2.field === field);
      searchQuery.value.sortDirection = searchQuery.value.sortField === field ? searchQuery.value.sortDirection === "desc" ? "asc" : "desc" : (columnDef == null ? void 0 : columnDef.defaultSortDirection) || searchQuery.value.sortDirection;
      searchQuery.value.sortField = field;
    },
    navToFirstPage: () => actions.search({ page: 1 }),
    navToPrevPage: () => actions.search({ page: Math.max(searchQuery.value.page - 1, 1) }),
    navToPage: (page) => actions.search({ page }),
    navToNextPage: () => actions.search({ page: Math.min(searchQuery.value.page + 1, Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage)) }),
    // eslint-disable-line
    navToLastPage: () => actions.search({ page: Math.ceil(allItems.value.length / searchQuery.value.itemsPerPage) }),
    setDimensions: (_dimensions) => dimensions.value = _dimensions,
    // eslint-disable-line
    updateItem: (id, partialData) => {
      let cellChanges = [];
      let itemChanges = null;
      const updatedItems = allItems.value.map((item) => {
        if (id === item.id) {
          const updatedItem = { ...item.data, ...partialData };
          cellChanges = Object.keys(partialData).map((key) => {
            const columnDef = columnDefs.value.find((columnDefs2) => columnDefs2.field === key);
            return {
              newValue: partialData[key],
              oldValue: item.data[key],
              column: columnDef,
              item
            };
          });
          itemChanges = {
            newItem: updatedItem,
            oldItem: item.data,
            updatedCells: cellChanges
          };
          return { ...item, data: updatedItem };
        }
        return item;
      });
      if (options.onCellChanged) {
        cellChanges.forEach(options.onCellChanged);
      }
      if (options.onItemChanged && itemChanges) {
        options.onItemChanged(itemChanges);
      }
      if (options.onChanged && itemChanges) {
        options.onChanged({
          newData: updatedItems.map((item) => item.data),
          oldData: allItems.value.map((item) => item.data),
          updatedItem: itemChanges
        });
      }
      allItems.value = updatedItems;
    }
  };
  return {
    preferences,
    // user preferences
    searchQuery,
    // search options (searchText, pagination, sort)
    allItems,
    // all data
    queriedItems,
    // filtered data (after search query)
    paginatedItems,
    // paginated data (cut from queriedItems)
    hasError,
    // boolean indicating if the data is valid
    columnDefs,
    // columnDefs (field, label, width, isSticky, isSortable, defaultSortDirection)s
    dimensions,
    // screener dimensions
    actions
    // actions
  };
};
export {
  Screener as S,
  TableCell as T,
  _export_sfc as _,
  ScreenerSearch as a,
  ScreenerSearchOptions as b,
  ScreenerPagination as c,
  useScreener as u
};
