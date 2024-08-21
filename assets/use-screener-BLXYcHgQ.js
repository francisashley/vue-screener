import { aF as extendTailwindMerge, ar as defineComponent, aG as computed, as as resolveComponent, at as openBlock, au as createBlock, av as withCtx, aE as renderSlot, aH as normalizeClass, aI as resolveDynamicComponent, aC as createElementBlock, aJ as debounce, aK as ref, aL as onMounted, aM as normalizeStyle, ax as createBaseVNode, aw as createVNode, aB as createCommentVNode, aN as Fragment, aO as renderList, aA as createTextVNode, ay as normalizeProps, aP as guardReactiveProps, aQ as watch, aD as toDisplayString, aR as orderBy } from "./vendor-M4CYo89y.js";
const twMerge = extendTailwindMerge({ prefix: "vsc-" });
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  props: {
    type: { type: String, required: false },
    to: { type: String, required: false },
    external: { type: Boolean, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-border-t vsc-border-zinc-700"
      // eslint-disable-line
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, uiDefaults, ui, resolveComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.type === "router-link" ? $setup.resolveComponent("router-link") : "div"), {
    to: $props.to,
    href: $props.to,
    external: $props.external,
    class: normalizeClass({ [$setup.ui.class]: true })
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to", "href", "external", "class"]);
}
_sfc_main$j.__file = "src/components/ui/table/TableRow.vue";
const TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableRow.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  props: {
    isFirst: { type: Boolean, required: false },
    isLast: { type: Boolean, required: false },
    hasValue: { type: Boolean, required: false },
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
      var _a, _b, _c, _d, _e, _f;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class),
        // eslint-disable-line
        isFirstClass: twMerge((_b = props.ui) == null ? void 0 : _b.isFirstClass),
        isLastClass: twMerge((_c = props.ui) == null ? void 0 : _c.isLastClass, uiDefaults.isLastClass),
        hasValueClass: twMerge((_d = props.ui) == null ? void 0 : _d.hasValueClass),
        isStickyClass: twMerge((_e = props.ui) == null ? void 0 : _e.isStickyClass, uiDefaults.isStickyClass),
        isStickyOverlappingClass: twMerge((_f = props.ui) == null ? void 0 : _f.isStickyOverlappingClass, uiDefaults.isStickyOverlappingClass)
      };
    });
    const __returned__ = { props, uiDefaults, ui };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass({
        [$setup.ui.class]: true,
        [$setup.ui.isFirstClass]: $props.isFirst,
        [$setup.ui.isLastClass]: $props.isLast,
        [$setup.ui.hasValueClass]: $props.hasValue,
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
_sfc_main$i.__file = "src/components/ui/table/TableCell.vue";
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableCell.vue"]]);
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Table",
  props: {
    schema: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-rounded vsc-border vsc-overflow-auto vsc-border-zinc-700 vsc-text-zinc-200"
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const style = computed(() => {
      const fields = props.schema.fields ?? [];
      const widths = fields.map((item) => item.width);
      const sizes = widths.map((width) => width ?? "1fr");
      return { "grid-template-columns": sizes.join(" ") };
    });
    const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable();
    const __returned__ = { props, uiDefaults, ui, style, mainRef, isScrollable, isScrolledEnd };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$h.__file = "src/components/ui/table/Table.vue";
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/Table.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-grid vsc-col-span-full vsc-grid-cols-subgrid vsc-font-bold"
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
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$g.__file = "src/components/ui/table/TableHead.vue";
const TableHead = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ui/table/TableHead.vue"]]);
const _sfc_main$f = {};
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  { d: "M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._hoisted_3$3]);
}
_sfc_main$f.__file = "src/components/icons/RemixSortDescIcon.vue";
const RemixSortDescIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/RemixSortDescIcon.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RemixSortDescIcon"], {
    class: normalizeClass({
      [$setup.ui.class]: true,
      [$setup.ui.ascClass]: $props.direction === "asc"
    })
  }, null, 8, ["class"]);
}
_sfc_main$e.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
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
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TableView",
  props: {
    screener: { type: Object, required: true },
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const schema = computed(
      () => ({
        fields: props.screener.columns.value.map((column) => ({
          field: column.field,
          width: column.width,
          type: "string"
        }))
      })
    );
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
      if (props.screener.sortField.value === field) {
        return props.screener.sortDirection.value;
      }
      return null;
    };
    const handleClickColumnHeader = (column) => {
      if (column.isSortable) {
        props.screener.actions.sort(column.field);
      }
    };
    const __returned__ = { props, schema, uiDefaults, ui, getSortDirection, handleClickColumnHeader, TableRow, TableCell, Table, TableHead, SortIcon, get highlightText() {
      return highlightText;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = ["innerHTML"];
const _hoisted_2$3 = ["innerHTML"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Table"], {
    schema: $setup.schema,
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
            renderList($props.screener.columns.value, (column, _i) => {
              var _a, _b;
              return renderSlot(_ctx.$slots, "head", {
                key: _i,
                column,
                value: column.field,
                isFirst: column.isFirst,
                isLast: column.isLast,
                hasValue: Boolean(column.field),
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
                    "is-first": column.isFirst,
                    "is-last": column.isLast,
                    "has-value": Boolean(column.field),
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
                          }, null, 8, _hoisted_1$6)
                        ])
                      ];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["value", "is-first", "is-last", "has-value", "is-sticky", "is-sticky-overlapping", "ui", "class", "onClick"])
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
        renderList($props.screener.items.value, (item, _i) => {
          var _a, _b;
          return openBlock(), createBlock($setup["TableRow"], {
            key: _i,
            type: $props.screener.rowConfig.value.link ? "router-link" : "div",
            to: (_b = (_a = $props.screener.rowConfig.value).getLink) == null ? void 0 : _b.call(_a, item),
            ui: $setup.ui.table.row,
            external: ""
          }, {
            default: withCtx(() => [
              item ? (openBlock(true), createElementBlock(
                Fragment,
                { key: 0 },
                renderList($props.screener.columns.value, (column, _j) => {
                  var _a2, _b2;
                  return renderSlot(_ctx.$slots, "data", {
                    key: _j,
                    column,
                    value: column.field,
                    isFirst: column.isFirst,
                    isLast: column.isLast,
                    hasValue: (_a2 = item.fields[column.field]) == null ? void 0 : _a2.hasValue,
                    isSticky: column.isSticky,
                    isStickyOverlapping: column.isSticky && isScrollable && !isScrolledEnd,
                    item,
                    ui: (_b2 = $setup.ui.table.row) == null ? void 0 : _b2.cell,
                    highlight: $setup.highlightText,
                    highlightValue: $props.screener.highlightQuery.value
                  }, () => {
                    var _a3, _b3;
                    return [
                      createVNode($setup["TableCell"], {
                        column,
                        value: column.field,
                        "is-first": column.isFirst,
                        "is-last": column.isLast,
                        "has-value": (_a3 = item.fields[column.field]) == null ? void 0 : _a3.hasValue,
                        "is-sticky": column.isSticky,
                        "is-sticky-overlapping": column.isSticky && isScrollable && !isScrolledEnd,
                        item,
                        ui: (_b3 = $setup.ui.table.row) == null ? void 0 : _b3.cell,
                        highlight: $setup.highlightText,
                        "highlight-value": $props.screener.highlightQuery.value
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default", {}, () => {
                            var _a4;
                            return [
                              createBaseVNode("span", {
                                innerHTML: (_a4 = item.fields[column.field]) == null ? void 0 : _a4.htmlValue
                              }, null, 8, _hoisted_2$3)
                            ];
                          })
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["column", "value", "is-first", "is-last", "has-value", "is-sticky", "is-sticky-overlapping", "item", "ui", "highlight", "highlight-value"])
                    ];
                  });
                }),
                128
                /* KEYED_FRAGMENT */
              )) : (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [
                  createTextVNode(" ")
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["type", "to", "ui"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["schema", "ui"]);
}
_sfc_main$d.__file = "src/components/views/TableView.vue";
const TableView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/TableView.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BadDataView",
  props: {
    ui: { type: Object, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const uiDefaults = {
      class: "vsc-overflow-hidden vsc-flex vsc-text-center vsc-justify-center vsc-items-center vsc-py-24 vsc-border vsc-border-red-500 vsc-text-red-500 vsc-rounded"
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
      if (!props.screener.hasData.value) return "no-data";
      return "table";
    });
    const uiDefaults = {
      class: "vsc-font-sans vsc-overflow-auto vsc-text-sm"
    };
    const ui = computed(() => {
      var _a;
      return {
        class: twMerge(uiDefaults.class, (_a = props.ui) == null ? void 0 : _a.class)
      };
    });
    const __returned__ = { props, view, uiDefaults, ui, TableView, BadDataView, NoDataView };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
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
      }])
    },
    [
      $setup.view === "table" ? (openBlock(), createBlock($setup["TableView"], {
        key: 0,
        screener: $props.screener,
        ui: (_a = $setup.props.ui) == null ? void 0 : _a.tableView
      }, {
        head: withCtx((headProps) => [
          renderSlot(_ctx.$slots, "head", normalizeProps(guardReactiveProps(headProps)))
        ]),
        data: withCtx((dataProps) => [
          renderSlot(_ctx.$slots, "data", normalizeProps(guardReactiveProps(dataProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["screener", "ui"])) : $setup.view === "no-data" ? (openBlock(), createBlock($setup["NoDataView"], {
        key: 1,
        ui: (_b = $setup.props.ui) == null ? void 0 : _b.noDataView
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "no-data", {}, () => [
            createTextVNode("No data provided")
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["ui"])) : $setup.view === "bad-data" ? (openBlock(), createBlock($setup["BadDataView"], {
        key: 2,
        ui: (_c = $setup.props.ui) == null ? void 0 : _c.badDataView
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "bad-data", {}, () => [
            createTextVNode("Invalid data provided."),
            _hoisted_1$5,
            createTextVNode("Please provide an array of objects or an array of arrays.")
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["ui"])) : createCommentVNode("v-if", true)
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
      const perPage = Number(event.target.value);
      props.screener.perPage.value = perPage;
    };
    const __returned__ = { props, uiDefaults, ui, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleClickFirst, handleClickPrev, handleClickNext, handleClickLast, handleSelectPage, handleChangePerPage, UiButton, UiInput };
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
            onClick: $setup.handleClickFirst,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("First")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "ui"]),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigatePrev,
            onClick: $setup.handleClickPrev,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Prev")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "ui"]),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.getPages, (page) => {
              return openBlock(), createBlock($setup["UiButton"], {
                key: page,
                active: $setup.isActive(page),
                onClick: ($event) => $setup.handleSelectPage(page),
                ui: $setup.ui.nav.button
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
              }, 1032, ["active", "onClick", "ui"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigateNext,
            onClick: $setup.handleClickNext,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Next")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "ui"]),
          createVNode($setup["UiButton"], {
            disabled: !$setup.canNavigateLast,
            onClick: $setup.handleClickLast,
            ui: $setup.ui.nav.button
          }, {
            default: withCtx(() => [
              createTextVNode("Last")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "ui"])
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
            value: $props.screener.perPage.value,
            min: "1",
            step: "1",
            onInput: $setup.handleChangePerPage,
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
    const useRegEx = computed(() => {
      return props.screener.searchOptions.value.some((activeOption) => activeOption === "use-regex");
    });
    const isValidQuery = computed(() => {
      return isValidRegExp(props.screener.searchQuery.value);
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const searchQuery = event.target.value;
      if (isEnter) {
        props.screener.actions.search(searchQuery);
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
      props.screener.actions.search(history.value[historyIndex.value]);
    };
    const onInput = (event) => {
      const query = event.target.value;
      props.screener.actions.search(query);
    };
    const __returned__ = { props, uiDefaults, ui, history, historyIndex, useRegEx, isValidQuery, onKeydown, onInput, UiInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInput"], {
    type: "text",
    ui: $setup.ui,
    value: $props.screener.searchQuery.value,
    error: $setup.useRegEx && !$setup.isValidQuery,
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
    const toggleOption = (option) => {
      if (props.screener.searchOptions.value.includes(option)) {
        props.screener.actions.search(
          props.screener.highlightQuery.value,
          props.screener.searchOptions.value.filter((activeOption) => activeOption !== option)
        );
      } else {
        props.screener.actions.search(props.screener.highlightQuery.value, [...props.screener.searchOptions.value, option]);
      }
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
          active: $setup.props.screener.searchOptions.value.includes("match-case"),
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
          active: $setup.props.screener.searchOptions.value.includes("match-word"),
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
          active: $setup.props.screener.searchOptions.value.includes("use-regex"),
          ui: (_c = $setup.ui) == null ? void 0 : _c.toggleButton,
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.toggleOption("use-regex"))
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
function normaliseInput(data, config) {
  const transformedData = data.map((item) => Array.isArray(item) ? { ...item } : item);
  const normaliseField = (field, value) => {
    var _a;
    const format = (_a = config[field]) == null ? void 0 : _a.format;
    const _value = (format == null ? void 0 : format(value)) ?? value;
    return {
      field,
      type: getTypeOf(value),
      value: String(_value),
      htmlValue: String(_value),
      hasValue: value !== null || value !== void 0
    };
  };
  const normalisedData = transformedData.map((item) => {
    const fields2 = {};
    Object.keys(item).forEach((key) => {
      fields2[key] = normaliseField(key, item[key]);
    });
    return { data: item, fields: fields2 };
  });
  const fields = getFields(normalisedData);
  return normalisedData.map((item) => {
    fields.forEach((field) => {
      if (!item.fields[field]) {
        item.fields[field] = normaliseField(field, void 0);
      }
    });
    return item;
  });
}
function pickColumns(columns, pickColumns2) {
  return columns.filter((column) => pickColumns2.includes(column.field));
}
function omitColumns(columns, omitColumns2) {
  const omitFieldsSet = new Set(omitColumns2);
  return columns.filter((column) => !omitFieldsSet.has(column.field));
}
function getFields(items) {
  const fields = new Set(items.flatMap((item) => Object.values(item.fields).map((field) => field.field)));
  return Array.from(fields);
}
function getPaginated({
  items = [],
  page = 1,
  perPage = 25,
  padPageLength = false
}) {
  const start = perPage * page;
  const end = start + perPage;
  items = items.slice(start, end);
  if (padPageLength && items.length !== perPage) {
    const emptyRows = Array(perPage).fill(null);
    return Object.assign(emptyRows, items);
  }
  return items;
}
function getTypeOf(value) {
  switch (typeof value) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "symbol":
      return "symbol";
    case "undefined":
      return "undefined";
    case "object":
      if (value === null) {
        return "null";
      } else if (Array.isArray(value)) {
        return "array";
      }
      return "object";
    default:
      throw `Could not establish type of \`${value}\``;
  }
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
  const { searchQuery = "" } = options;
  if (!searchQuery) return options.items;
  const { searchQuery: parsedSearchQuery, excludeFilters, includeFilters } = parseSearchQuery(searchQuery);
  const { items, useRegExp = false, matchCase = false, matchWord = false } = options;
  const testExcludeFilters = (filters, itemMap) => {
    return filters.some(([field, value]) => {
      if (itemMap[field]) {
        return testCriteria(itemMap[field].value, value, {
          matchCase,
          matchWord: true,
          useRegExp
        });
      }
    });
  };
  const testIncludeFilters = (filters, itemMap) => {
    return filters.every(([field, value]) => {
      if (itemMap[field]) {
        return testCriteria(itemMap[field].value, value, {
          matchCase,
          matchWord: true,
          useRegExp
        });
      }
    });
  };
  return items.filter((item) => {
    const itemMap = item.fields;
    let shouldExclude = false;
    let shouldInclude = true;
    let meetsSearchCriteria = true;
    if (excludeFilters.length && testExcludeFilters(excludeFilters, itemMap)) {
      shouldExclude = true;
    }
    if (includeFilters.length && !testIncludeFilters(includeFilters, itemMap)) {
      shouldInclude = false;
    }
    meetsSearchCriteria = Object.values(item.fields).some((field) => {
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
const useScreener = (defaultData, options = {}) => {
  var _a, _b, _c, _d;
  const searchQuery = ref("");
  const highlightQuery = ref("");
  const currentPage = ref(1);
  const perPage = ref(10);
  const searchOptions = ref([]);
  const sortField = ref(null);
  const sortDirection = ref("desc");
  const data = ref([]);
  const config = ref({});
  const pick = ref([]);
  const omit = ref([]);
  const fixedPageSize = ref(false);
  const disableSearchHighlight = ref(false);
  const rowConfig = ref({
    link: ((_a = options.rowConfig) == null ? void 0 : _a.link) ?? false,
    getLink: (_b = options.rowConfig) == null ? void 0 : _b.getLink
  });
  config.value = options.config ?? config.value;
  currentPage.value = options.defaultCurrentPage ?? currentPage.value;
  perPage.value = options.defaultPerPage ?? perPage.value;
  sortField.value = ((_c = options.defaultSort) == null ? void 0 : _c.field) ?? sortField.value;
  sortDirection.value = ((_d = options.defaultSort) == null ? void 0 : _d.direction) ?? sortDirection.value;
  data.value = defaultData ?? data.value;
  pick.value = options.pick ?? pick.value;
  omit.value = options.omit ?? omit.value;
  fixedPageSize.value = options.fixedPageSize ?? fixedPageSize.value;
  disableSearchHighlight.value = options.disableSearchHighlight ?? disableSearchHighlight.value;
  const hasError = computed(() => {
    return !isValidInput(data.value);
  });
  const normalisedData = computed(() => {
    return isValidInput(data.value) ? normaliseInput(data.value, config.value) : [];
  });
  const searchedData = computed(() => {
    return search({
      items: normalisedData.value,
      searchQuery: searchQuery.value,
      useRegExp: searchOptions.value.includes("use-regex"),
      matchCase: searchOptions.value.includes("match-case"),
      matchWord: searchOptions.value.includes("match-word")
    });
  });
  const sortedData = computed(() => {
    const sortedItems = searchQuery.value ? searchedData.value : normalisedData.value;
    const _sortField = sortField.value;
    if (_sortField && sortDirection.value) {
      const nullItems = sortedItems.filter(
        (item) => item.data[_sortField] === null || item.data[_sortField] === void 0
      );
      const nonNullItems = sortedItems.filter(
        (item) => item.data[_sortField] !== null && item.data[_sortField] !== void 0
      );
      return [...orderBy(nonNullItems, [(item) => item.data[_sortField]], [sortDirection.value]), ...nullItems];
    } else {
      return sortedItems;
    }
  });
  const paginatedData = computed(() => {
    return getPaginated({
      items: sortedData.value,
      page: currentPage.value - 1,
      perPage: perPage.value,
      padPageLength: fixedPageSize.value
    });
  });
  const hasData = computed(() => {
    return paginatedData.value.filter((item) => item !== null).length > 0;
  });
  const items = computed(() => {
    return paginatedData.value.map((item) => {
      if (!item) return null;
      return {
        ...item,
        fields: Object.keys(item.fields).reduce((acc, key) => {
          const field = item.fields[key];
          return {
            ...acc,
            [key]: {
              ...field,
              htmlValue: disableSearchHighlight.value ? field.value : highlightText(field.value ? String(field.value) : "", highlightQuery.value)
            }
          };
        }, {})
      };
    });
  });
  const columns = computed(() => {
    var _a2;
    const fields = ((_a2 = pick.value) == null ? void 0 : _a2.length) ? pick.value : getFields(normalisedData.value);
    let columns2 = fields.map((field, i) => {
      const inputColumn = config.value[field] ?? {};
      let width = inputColumn.width ?? "auto";
      if (!isNaN(Number(width))) width = width + "px";
      return {
        field,
        label: field,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isSticky: false,
        isSortable: true,
        defaultSortDirection: (inputColumn == null ? void 0 : inputColumn.defaultSortDirection) ?? "desc",
        ...inputColumn,
        width
      };
    });
    if (options.pick && options.pick.length > 0) {
      columns2 = pickColumns(columns2, options.pick);
    }
    if (omit.value && omit.value.length > 0) {
      columns2 = omitColumns(columns2, omit.value);
    }
    return columns2;
  });
  return {
    searchQuery,
    highlightQuery,
    currentPage,
    perPage,
    searchOptions,
    sortField,
    sortDirection,
    data,
    items,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
    config,
    pick,
    omit,
    columns,
    rowConfig,
    fixedPageSize,
    disableSearchHighlight,
    actions: {
      search: (query, options2) => {
        searchQuery.value = query;
        highlightQuery.value = query;
        if (options2) {
          searchOptions.value = options2;
        }
      },
      sort: (field) => {
        const fieldConfig = columns.value.find((column) => column.field === field);
        sortDirection.value = sortField.value === field ? sortDirection.value === "desc" ? "asc" : "desc" : (fieldConfig == null ? void 0 : fieldConfig.defaultSortDirection) || sortDirection.value;
        sortField.value = field;
      }
    }
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
