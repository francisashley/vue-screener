import { aB as debounce, aC as ref, aD as onMounted, as as openBlock, aE as createElementBlock, av as createBaseVNode, aq as defineComponent, at as createBlock, aF as normalizeClass, aG as renderSlot, au as withCtx, aA as createCommentVNode, aH as computed, aI as Fragment, aJ as renderList, aw as createVNode, aK as normalizeStyle, ar as resolveComponent, az as createTextVNode, aL as resolveDynamicComponent, ax as normalizeProps, aM as guardReactiveProps, aN as watch, aO as toDisplayString, aP as orderBy } from "./vendor-C63b5-kq.js";
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = {};
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  { d: "M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [..._hoisted_3$4]);
}
_sfc_main$d.__file = "src/components/icons/RemixSortDescIcon.vue";
const RemixSortDescIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/RemixSortDescIcon.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SortIcon",
  props: {
    direction: { type: String, required: false, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { RemixSortDescIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RemixSortDescIcon"], {
    class: normalizeClass(["vs-sort-icon", {
      "vs-sort-icon__icon--asc": $props.direction !== "desc",
      "vs-sort-icon__icon--desc": $props.direction === "desc"
    }])
  }, null, 8, ["class"]);
}
_sfc_main$c.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ScreenerCell",
  props: {
    value: { type: null, required: true },
    type: { type: String, required: false },
    isFirst: { type: Boolean, required: false },
    isLast: { type: Boolean, required: false },
    hasValue: { type: Boolean, required: false },
    isPinned: { type: Boolean, required: false }
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
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        "vs-table__cell",
        $props.isFirst && "vs-table__cell--first",
        $props.isLast && "vs-table__cell--last",
        $props.hasValue && "vs-table__cell--hasValue",
        $props.isPinned && "vs-table__cell--pinned",
        $props.type === "string" && "vs-table__cell--string",
        $props.type === "number" && "vs-table__cell--number",
        $props.type === "boolean" && "vs-table__cell--boolean",
        $props.type === "symbol" && "vs-table__cell--symbol",
        $props.type === "undefined" && "vs-table__cell--undefined",
        $props.type === "object" && "vs-table__cell--object",
        $props.type === "null" && "vs-table__cell--null"
      ])
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", { innerHTML: $props.value }, null, 8, _hoisted_1$8)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$b.__file = "src/components/ScreenerCell.vue";
const ScreenerCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerCell.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ScreenerHeaderCell",
  props: {
    column: { type: Object, required: true },
    sortDirection: { type: [null, String], required: false }
  },
  emits: ["on-sort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const handleClick = () => {
      if (props.column.isSortable) {
        emit("on-sort", props.column.field);
      }
    };
    const __returned__ = { props, emit, handleClick, SortIcon, ScreenerCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["innerHTML"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["ScreenerCell"], {
    value: $props.column.field,
    "is-first": $props.column.isFirst,
    "is-last": $props.column.isLast,
    "has-value": Boolean($props.column.field),
    "is-pinned": $props.column.isPinned,
    type: "string",
    class: normalizeClass([
      "vs-table__cell--head",
      $props.column.isSortable && "vs-table__cell--sortable",
      $props.column.isPinned && "vs-table__cell--pinned",
      $props.column.isSortable && $props.sortDirection && "vs-table__cell--sorting"
    ])
  }, {
    default: withCtx(() => [
      createBaseVNode("div", { onClick: $setup.handleClick }, [
        $props.column.isSortable && $props.sortDirection ? (openBlock(), createBlock($setup["SortIcon"], {
          key: 0,
          direction: $props.sortDirection
        }, null, 8, ["direction"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createBaseVNode("span", {
            innerHTML: $props.column.label
          }, null, 8, _hoisted_1$7)
        ])
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value", "is-first", "is-last", "has-value", "is-pinned", "class"]);
}
_sfc_main$a.__file = "src/components/ScreenerHeaderCell.vue";
const ScreenerHeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerHeaderCell.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerHeader",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const rowStyle = computed(() => {
      const colCount = props.screener.columns.value.length;
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
    const __returned__ = { props, rowStyle, getSortDirection, ScreenerHeaderCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      style: normalizeStyle($setup.rowStyle),
      class: "vs-table__row vs-table__row--header"
    },
    [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.props.screener.columns.value, (column, i) => {
          return renderSlot(_ctx.$slots, "head", {
            key: i,
            column,
            sortDirection: $setup.getSortDirection(column.field),
            onOnSort: _cache[0] || (_cache[0] = (...args) => $props.screener.actions.sort && $props.screener.actions.sort(...args))
          }, () => [
            createVNode($setup["ScreenerHeaderCell"], {
              column,
              "sort-direction": $setup.getSortDirection(column.field),
              onOnSort: $props.screener.actions.sort
            }, null, 8, ["column", "sort-direction", "onOnSort"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ],
    4
    /* STYLE */
  );
}
_sfc_main$9.__file = "src/components/ScreenerHeader.vue";
const ScreenerHeader = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerHeader.vue"]]);
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
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerBodyCell",
  props: {
    column: { type: Object, required: true },
    item: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { ScreenerCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return openBlock(), createBlock($setup["ScreenerCell"], {
    value: (_a = $props.item.fields[$props.column.field]) == null ? void 0 : _a.htmlValue,
    "is-first": $props.column.isFirst,
    "is-last": $props.column.isLast,
    "has-value": (_b = $props.item.fields[$props.column.field]) == null ? void 0 : _b.hasValue,
    "is-pinned": $props.column.isPinned,
    type: (_c = $props.item.fields[$props.column.field]) == null ? void 0 : _c.type,
    class: normalizeClass(["vs-table__cell--value", $props.column.isPinned && "vs-table__cell--pinned"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value", "is-first", "is-last", "has-value", "is-pinned", "type", "class"]);
}
_sfc_main$8.__file = "src/components/ScreenerBodyCell.vue";
const ScreenerBodyCell = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerBodyCell.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerBody",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const rowStyle = computed(() => {
      return {
        display: "grid",
        "grid-template-columns": "subgrid",
        "grid-column": `1 / ${props.screener.columns.value.length + 1}`
      };
    });
    const __returned__ = { props, rowStyle, resolveComponent, get highlightText() {
      return highlightText;
    }, ScreenerBodyCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($props.screener.items.value, (item, i) => {
      var _a, _b, _c, _d;
      return openBlock(), createBlock(resolveDynamicComponent($setup.props.screener.rowConfig.value.link ? $setup.resolveComponent("router-link") : "div"), {
        to: (_b = (_a = $setup.props.screener.rowConfig.value).getLink) == null ? void 0 : _b.call(_a, item),
        href: (_d = (_c = $setup.props.screener.rowConfig.value).getLink) == null ? void 0 : _d.call(_c, item),
        external: true,
        style: normalizeStyle($setup.rowStyle),
        key: i,
        class: "vs-table__row vs-table__row--item"
      }, {
        default: withCtx(() => [
          item ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList($props.screener.columns.value, (column, j) => {
              return renderSlot(_ctx.$slots, "data", {
                column,
                item,
                key: j,
                highlight: $setup.highlightText,
                highlightValue: $props.screener.highlightQuery.value
              }, () => [
                createVNode($setup["ScreenerBodyCell"], {
                  column,
                  item
                }, null, 8, ["column", "item"])
              ]);
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
      }, 1032, ["to", "href", "style"]);
    }),
    128
    /* KEYED_FRAGMENT */
  );
}
_sfc_main$7.__file = "src/components/ScreenerBody.vue";
const ScreenerBody = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerBody.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Screener",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable();
    const view = computed(() => {
      if (__props.screener.hasError.value)
        return "bad-data";
      if (!__props.screener.hasData.value)
        return "no-data";
      return "table";
    });
    const tableStyle = computed(() => {
      return {
        display: "grid",
        "grid-template-columns": __props.screener.columns.value.map((item) => item.width).join(" ")
      };
    });
    const __returned__ = { mainRef, isScrollable, isScrolledEnd, view, tableStyle, ScreenerHeader, ScreenerBody };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { key: 0 };
const _hoisted_2$4 = { key: 1 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "section",
    {
      class: normalizeClass(["vs-screener", {
        "vs-screener--scrollable": $setup.isScrollable,
        "vs-screener--scrolled-end": $setup.isScrolledEnd,
        "vs-screener--bad-data": $setup.view === "bad-data",
        "vs-screener--no-data": $setup.view === "no-data"
      }]),
      ref: "mainRef"
    },
    [
      $setup.view === "bad-data" ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        renderSlot(_ctx.$slots, "bad-data", {}, () => [
          createTextVNode("Invalid data provided. Please provide an array of objects or an array of arrays.")
        ])
      ])) : createCommentVNode("v-if", true),
      $setup.view === "no-data" ? (openBlock(), createElementBlock("p", _hoisted_2$4, [
        renderSlot(_ctx.$slots, "no-data", {}, () => [
          createTextVNode("No data provided")
        ])
      ])) : createCommentVNode("v-if", true),
      $setup.view === "table" ? (openBlock(), createElementBlock(
        "div",
        {
          key: 2,
          style: normalizeStyle($setup.tableStyle)
        },
        [
          createVNode($setup["ScreenerHeader"], { screener: $props.screener }, {
            head: withCtx((headProps) => [
              renderSlot(_ctx.$slots, "head", normalizeProps(guardReactiveProps(headProps)))
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["screener"]),
          createVNode($setup["ScreenerBody"], { screener: $props.screener }, {
            data: withCtx((dataProps) => [
              renderSlot(_ctx.$slots, "data", normalizeProps(guardReactiveProps(dataProps)))
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["screener"])
        ],
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$6.__file = "src/components/Screener.vue";
const Screener = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/Screener.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerPagination",
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
      const perPage = Number(event.target.value);
      props.screener.perPage.value = perPage;
    };
    const __returned__ = { props, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleClickFirst, handleClickPrev, handleClickNext, handleClickLast, handleSelectPage, handleChangePerPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "vs-pagination" };
const _hoisted_2$3 = { class: "vs-pagination__side vs-pagination__side--left" };
const _hoisted_3$3 = { class: "vs-pagination__nav" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "vs-pagination__side vs-pagination__side--right" };
const _hoisted_10 = ["value"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$3, [
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
    createBaseVNode("div", _hoisted_3$3, [
      createBaseVNode("button", {
        disabled: !$setup.canNavigateFirst,
        onClick: $setup.handleClickFirst,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--first",
          !$setup.canNavigateFirst && "vs-pagination__button--disabled"
        ])
      }, " First ", 10, _hoisted_4),
      createBaseVNode("button", {
        disabled: !$setup.canNavigatePrev,
        onClick: $setup.handleClickPrev,
        class: normalizeClass([
          "vs-pagination__button",
          "vs-pagination__button--prev",
          !$setup.canNavigatePrev && "vs-pagination__button--disabled"
        ])
      }, " Prev ", 10, _hoisted_5),
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
_sfc_main$5.__file = "src/components/ScreenerPagination.vue";
const ScreenerPagination = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerPagination.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ScreenerSearch",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const history = ref([]);
    const historyIndex = ref(null);
    const useRegEx = computed(() => {
      return __props.screener.searchOptions.value.some((activeOption) => activeOption === "use-regex");
    });
    const isValidQuery = computed(() => {
      return isValidRegExp(__props.screener.searchQuery.value);
    });
    const onKeydown = (event) => {
      const isPressingUp = event.key === "ArrowUp";
      const isPressingDown = event.key === "ArrowDown";
      const isEnter = event.key === "Enter";
      const searchQuery = event.target.value;
      if (isEnter) {
        __props.screener.actions.search(searchQuery);
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
      __props.screener.actions.search(history.value[historyIndex.value]);
    };
    const onInput = (event) => {
      const query = event.target.value;
      __props.screener.actions.search(query);
    };
    const __returned__ = { history, historyIndex, useRegEx, isValidQuery, onKeydown, onInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["value"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.screener.searchQuery.value,
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput,
    type: "text",
    class: normalizeClass(["vs-search", [$setup.useRegEx && !$setup.isValidQuery && "vs-search--error"]]),
    placeholder: "Search..."
  }, null, 42, _hoisted_1$4);
}
_sfc_main$4.__file = "src/components/ScreenerSearch.vue";
const ScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerSearch.vue"]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = {
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
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_3$2]);
}
_sfc_main$3.__file = "src/components/icons/MaterialDesignMatchCase.vue";
const MatchCaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignMatchCase.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
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
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$1]);
}
_sfc_main$2.__file = "src/components/icons/MaterialDesignMatchWord.vue";
const MatchWordIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignMatchWord.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
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
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3]);
}
_sfc_main$1.__file = "src/components/icons/MaterialDesignRegularExpression.vue";
const RegularExpressionIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/MaterialDesignRegularExpression.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScreenerSearchOptions",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
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
    const __returned__ = { props, toggleOption, MatchCaseIcon, MatchWordIcon, RegularExpressionIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vs-search-options" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode(
      "button",
      {
        class: normalizeClass(["vs-search-option", [{ "vs-search-option--active": $setup.props.screener.searchOptions.value.includes("match-case") }]]),
        title: "Match case",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggleOption("match-case"))
      },
      [
        createVNode($setup["MatchCaseIcon"])
      ],
      2
      /* CLASS */
    ),
    createBaseVNode(
      "button",
      {
        class: normalizeClass(["vs-search-option", [{ "vs-search-option--active": $setup.props.screener.searchOptions.value.includes("match-word") }]]),
        title: "Match word",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.toggleOption("match-word"))
      },
      [
        createVNode($setup["MatchWordIcon"])
      ],
      2
      /* CLASS */
    ),
    createBaseVNode(
      "button",
      {
        class: normalizeClass(["vs-search-option", [{ "vs-search-option--active": $setup.props.screener.searchOptions.value.includes("use-regex") }]]),
        title: "Use regular expression",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.toggleOption("use-regex"))
      },
      [
        createVNode($setup["RegularExpressionIcon"])
      ],
      2
      /* CLASS */
    )
  ]);
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
  if (!searchQuery)
    return options.items;
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
  const perPage = ref(15);
  const searchOptions = ref([]);
  const sortField = ref(null);
  const sortDirection = ref("desc");
  const data = ref([]);
  const config = ref({});
  const pick = ref([]);
  const omit = ref([]);
  const disablePadPageLength = ref(false);
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
  disablePadPageLength.value = options.disablePadPageLength ?? disablePadPageLength.value;
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
      padPageLength: !disablePadPageLength.value
    });
  });
  const hasData = computed(() => {
    return paginatedData.value.filter((item) => item !== null).length > 0;
  });
  const items = computed(() => {
    return paginatedData.value.map((item) => {
      if (!item)
        return null;
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
      let width = inputColumn.width ?? "1fr";
      if (!isNaN(Number(width)))
        width = width + "px";
      return {
        field,
        label: field,
        isFirst: i === 0,
        isLast: i === fields.length - 1,
        isPinned: false,
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
    disablePadPageLength,
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
  _export_sfc as _,
  ScreenerSearch as a,
  ScreenerSearchOptions as b,
  ScreenerPagination as c,
  ScreenerHeaderCell as d,
  ScreenerBodyCell as e,
  useScreener as u
};
