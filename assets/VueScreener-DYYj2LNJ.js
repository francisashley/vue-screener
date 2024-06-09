import { aq as defineComponent, aB as ref, aC as computed, as as openBlock, aD as createElementBlock, aE as normalizeClass, aF as directive, aG as withDirectives, aH as renderSlot, av as createVNode, au as withCtx, az as createCommentVNode, aI as Transition, aA as createBaseVNode, aJ as withModifiers, at as createBlock, aK as Fragment, aL as renderList, aM as toDisplayString, aN as debounce, aO as onMounted, aP as watch, ay as createTextVNode, aQ as normalizeStyle, aw as normalizeProps, aR as guardReactiveProps, aS as orderBy, aT as watchEffect } from "./vendor-DadODwuJ.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "ScreenerSearch",
  props: {
    isValidQuery: { type: Boolean, required: true, default: true },
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const history = ref([]);
    const historyIndex = ref(null);
    const useRegEx = computed(() => {
      return __props.screener.searchOptions.value.some((activeOption) => activeOption === "use-regex");
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
      __props.screener.highlightQuery.value = query;
    };
    const __returned__ = { history, historyIndex, useRegEx, onKeydown, onInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$h = ["value"];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    value: $props.screener.searchQuery.value,
    onKeydown: $setup.onKeydown,
    onInput: $setup.onInput,
    type: "text",
    class: normalizeClass(["vs-search", [$setup.useRegEx && !$props.isValidQuery && "vs-search--error"]]),
    placeholder: "Search..."
  }, null, 42, _hoisted_1$h);
}
_sfc_main$m.__file = "src/components/stuff/ScreenerSearch.vue";
const ScreenerSearch = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ScreenerSearch.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$g = { class: "vs-dropdown" };
const _hoisted_2$7 = {
  key: 0,
  class: "vs-dropdown__content"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$g, [
    renderSlot(_ctx.$slots, "dropdown-button", {
      show: $setup.show,
      toggle: $setup.toggleDropdown
    }),
    createVNode(Transition, { name: "vs-dropdown__content" }, {
      default: withCtx(() => [
        $setup.show ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
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
_sfc_main$l.__file = "src/components/stuff/Dropdown.vue";
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Dropdown.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "ViewSelector",
  props: {
    activeFormat: { type: String, required: true, default: "table" }
  },
  emits: ["select-format"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const onSelectFormat = (format) => emit("select-format", format);
    const __returned__ = { emit, onSelectFormat };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = { class: "vs-view-selector" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
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
_sfc_main$k.__file = "src/components/stuff/ViewSelector.vue";
const ViewSelector = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ViewSelector.vue"]]);
const _sfc_main$j = {};
const _hoisted_1$e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$5 = [
  _hoisted_2$6
];
function _sfc_render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, [..._hoisted_3$5]);
}
_sfc_main$j.__file = "src/components/icons/CogIcon.vue";
const CogIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/CogIcon.vue"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
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
        props.screener.actions.search(
          props.screener.highlightQuery.value,
          props.screener.searchOptions.value.filter((activeOption) => activeOption !== option)
        );
      } else {
        props.screener.actions.search(props.screener.highlightQuery.value, [...props.screener.searchOptions.value, option]);
      }
    };
    const handleSelectFormat = (format) => {
      props.screener.renderFormat.value = format;
    };
    const __returned__ = { props, options, getOptions, toggleOption, handleSelectFormat, Dropdown, ViewSelector, CogIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = ["onClick"];
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vs-settings__heading" },
  "Search",
  -1
  /* HOISTED */
);
const _hoisted_3$4 = { class: "vs-settings__options" };
const _hoisted_4$1 = ["title", "onClick"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
  "h3",
  { class: "vs-settings__heading" },
  "Presentation",
  -1
  /* HOISTED */
);
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Dropdown"], { class: "vs-settings" }, {
    "dropdown-button": withCtx(({ show, toggle }) => [
      createBaseVNode("button", {
        class: normalizeClass(["vs-settings__button", [show && "vs-settings__button--active"]]),
        onClick: toggle
      }, [
        createVNode($setup["CogIcon"], { class: "vs-settings__button-icon" })
      ], 10, _hoisted_1$d)
    ]),
    default: withCtx(() => [
      _hoisted_2$5,
      createBaseVNode("div", _hoisted_3$4, [
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
        "active-format": $props.screener.renderFormat.value,
        onSelectFormat: _cache[0] || (_cache[0] = ($event) => $setup.handleSelectFormat($event))
      }, null, 8, ["active-format"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$i.__file = "src/components/stuff/Settings.vue";
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Settings.vue"]]);
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ScreenerHeader",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const isRegExFriendlySearchQuery = computed(() => {
      return isValidRegExp(props.screener.searchQuery.value);
    });
    const __returned__ = { props, isRegExFriendlySearchQuery, ScreenerSearch, Settings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$c = { class: "vs-header" };
const _hoisted_2$4 = ["textContent"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", _hoisted_1$c, [
    createBaseVNode("div", {
      class: "vs-title",
      textContent: toDisplayString($props.screener.title.value)
    }, null, 8, _hoisted_2$4),
    createVNode($setup["ScreenerSearch"], {
      screener: $props.screener,
      "is-valid-query": $setup.isRegExFriendlySearchQuery,
      class: "vs-search"
    }, null, 8, ["screener", "is-valid-query"]),
    createVNode($setup["Settings"], { screener: $props.screener }, null, 8, ["screener"])
  ]);
}
_sfc_main$h.__file = "src/components/ScreenerHeader.vue";
const ScreenerHeader = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerHeader.vue"]]);
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
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ScreenerMain",
  setup(__props, { expose: __expose }) {
    __expose();
    const { ref: mainRef, isScrollable, isScrolledEnd } = useScrollable();
    const __returned__ = { mainRef, isScrollable, isScrolledEnd };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "main",
    {
      class: normalizeClass(["vs-main", { "vs-main--is-scrollable": $setup.isScrollable, "vs-main--is-scrolled-end": $setup.isScrolledEnd }]),
      ref: "mainRef"
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$g.__file = "src/components/ScreenerMain.vue";
const ScreenerMain = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerMain.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
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
      const perPage = Number(event.target.value);
      props.screener.perPage.value = perPage;
    };
    const __returned__ = { props, totalPages, getPages, canNavigateFirst, canNavigatePrev, canNavigateNext, canNavigateLast, firstIndexOfCurrentPage, lastIndexOfCurrentPage, currentPageIsInRange, isActive, ensureCurrentPageIsValid, handleClickFirst, handleClickPrev, handleClickNext, handleClickLast, handleSelectPage, handleChangePerPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = { class: "vs-pagination" };
const _hoisted_2$3 = { class: "vs-pagination__info" };
const _hoisted_3$3 = { class: "vs-pagination__nav" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "vs-pagination__per-page" };
const _hoisted_10 = ["value"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
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
    createBaseVNode("ul", _hoisted_3$3, [
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
_sfc_main$f.__file = "src/components/stuff/Pagination.vue";
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/Pagination.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ScreenerFooter",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { Pagination };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = { class: "vs-footer" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", _hoisted_1$a, [
    createVNode($setup["Pagination"], { screener: $props.screener }, null, 8, ["screener"])
  ]);
}
_sfc_main$e.__file = "src/components/ScreenerFooter.vue";
const ScreenerFooter = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/ScreenerFooter.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "JsonView",
  props: {
    data: { type: null, required: true, default: () => [] }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { class: "vs-json-view" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "pre",
    _hoisted_1$9,
    toDisplayString(JSON.stringify($props.data, null, 2)),
    1
    /* TEXT */
  );
}
_sfc_main$d.__file = "src/components/views/JsonView.vue";
const JsonView = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/JsonView.vue"]]);
const _sfc_main$c = {};
const _hoisted_1$8 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "0.75rem" }
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [..._hoisted_3$2]);
}
_sfc_main$c.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$b = {};
const _hoisted_1$7 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-up",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "0.75rem" }
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._hoisted_3$1]);
}
_sfc_main$b.__file = "src/components/icons/SortUpIcon.vue";
const SortUpIcon = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortUpIcon.vue"]]);
const _sfc_main$a = {};
const _hoisted_1$6 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "sort-down",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  style: { "height": "0.75rem" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
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
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._hoisted_3]);
}
_sfc_main$a.__file = "src/components/icons/SortDownIcon.vue";
const SortDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortDownIcon.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SortSelector",
  props: {
    sortDirection: { type: [null, String], required: false, default: null }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { SortIcon, SortUpIcon, SortDownIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "vs-sort-selector" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
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
_sfc_main$9.__file = "src/components/stuff/SortSelector.vue";
const SortSelector = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/SortSelector.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
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
const _hoisted_1$4 = ["innerHTML"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        "vs-table__cell",
        $props.isFirst && "vs-table__cell--is-first",
        $props.isLast && "vs-table__cell--is-last",
        $props.hasValue && "vs-table__cell--hasValue",
        $props.isPinned && "vs-table__cell--is-pinned",
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
        createBaseVNode("span", { innerHTML: $props.value }, null, 8, _hoisted_1$4)
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$8.__file = "src/components/table/TableCell.vue";
const TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/TableCell.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  props: {
    column: { type: Object, required: true },
    sortDirection: { type: [null, String], required: false }
  },
  emits: ["on-sort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const handleClickHeader = () => {
      emit("on-sort", props.column.field);
    };
    const __returned__ = { props, emit, handleClickHeader, SortSelector, TableCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = ["innerHTML"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["TableCell"], {
    value: $props.column.field,
    "is-first": $props.column.isFirst,
    "is-last": $props.column.isLast,
    "has-value": Boolean($props.column.field),
    "is-pinned": $props.column.isPinned,
    type: "string",
    class: normalizeClass([
      "vs-table__cell--is-header",
      $props.column.isSortable && "vs-table__cell--is-sortable",
      $props.column.isPinned && "vs-table__cell--is-pinned"
    ]),
    onClick: $setup.handleClickHeader
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createBaseVNode("span", {
          innerHTML: $props.column.label
        }, null, 8, _hoisted_1$3)
      ]),
      $props.column.isSortable ? (openBlock(), createBlock($setup["SortSelector"], {
        key: 0,
        "sort-direction": $props.sortDirection
      }, null, 8, ["sort-direction"])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value", "is-first", "is-last", "has-value", "is-pinned", "class"]);
}
_sfc_main$7.__file = "src/components/table/TableHead.vue";
const Head = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/TableHead.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
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
    const __returned__ = { props, rowStyle, getSortDirection, TableHead: Head };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
            createVNode($setup["TableHead"], {
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
_sfc_main$6.__file = "src/components/table/TableHeader.vue";
const TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/TableHeader.vue"]]);
function highlightText(value, highlight) {
  if (["string", "number"].includes(typeof value) && highlight) {
    const highlightExp = new RegExp(escapeRegExp(highlight), "ig");
    return value.replace(highlightExp, (match) => `<mark>${match}</mark>`);
  }
  return value;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableData",
  props: {
    column: { type: Object, required: true },
    item: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { TableCell };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  return openBlock(), createBlock($setup["TableCell"], {
    value: (_a = $props.item.fields[$props.column.field]) == null ? void 0 : _a.htmlValue,
    "is-first": $props.column.isFirst,
    "is-last": $props.column.isLast,
    "has-value": (_b = $props.item.fields[$props.column.field]) == null ? void 0 : _b.hasValue,
    "is-pinned": $props.column.isPinned,
    type: (_c = $props.item.fields[$props.column.field]) == null ? void 0 : _c.type,
    class: normalizeClass(["vs-table__cell--is-value", $props.column.isPinned && "vs-table__cell--is-pinned"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value", "is-first", "is-last", "has-value", "is-pinned", "type", "class"]);
}
_sfc_main$5.__file = "src/components/table/TableData.vue";
const Data = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/TableData.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
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
    const __returned__ = { props, rowStyle, get highlightText() {
      return highlightText;
    }, TableData: Data };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($props.screener.items.value, (item, i) => {
      return openBlock(), createElementBlock(
        "div",
        {
          style: normalizeStyle($setup.rowStyle),
          key: i,
          class: "vs-table__row vs-table__row--record"
        },
        [
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
                createVNode($setup["TableData"], {
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
        ],
        4
        /* STYLE */
      );
    }),
    128
    /* KEYED_FRAGMENT */
  );
}
_sfc_main$4.__file = "src/components/table/TableBody.vue";
const TableBody = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/TableBody.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  props: {
    screener: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const tableStyle = computed(() => {
      return {
        display: "grid",
        "grid-template-columns": props.screener.columns.value.map((item) => item.width).join(" ")
      };
    });
    const __returned__ = { props, tableStyle, TableHeader, TableBody };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      style: normalizeStyle($setup.tableStyle),
      class: "vs-table"
    },
    [
      createVNode($setup["TableHeader"], { screener: $props.screener }, {
        head: withCtx((headProps) => [
          renderSlot(_ctx.$slots, "head", normalizeProps(guardReactiveProps(headProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["screener"]),
      createVNode($setup["TableBody"], { screener: $props.screener }, {
        data: withCtx((dataProps) => [
          renderSlot(_ctx.$slots, "data", normalizeProps(guardReactiveProps(dataProps)))
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["screener"])
    ],
    4
    /* STYLE */
  );
}
_sfc_main$3.__file = "src/components/table/Table.vue";
const Table = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/Table.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "vs-no-data-view" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, "No data provided");
}
_sfc_main$2.__file = "src/components/views/NoDataView.vue";
const NoDataView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/views/NoDataView.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = { class: "vs-error-message" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    _hoisted_1$1,
    "[VueScreenerError]: " + toDisplayString($props.message),
    1
    /* TEXT */
  );
}
_sfc_main$1.__file = "src/components/stuff/ErrorMessage.vue";
const ErrorMessage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/stuff/ErrorMessage.vue"]]);
function isValidInput(data) {
  const isObject = (val) => typeof val === "object" && val !== null;
  return Array.isArray(data) && data.every((item) => Array.isArray(item) || isObject(item));
}
function normaliseInput(data) {
  const transformedData = data.map((item) => Array.isArray(item) ? { ...item } : item);
  const normaliseField = (field, value) => ({
    field,
    type: getTypeOf(value),
    value,
    htmlValue: String(value),
    hasValue: value !== null || value !== void 0
  });
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
  withPlaceholders = false
}) {
  const start = perPage * page;
  const end = start + perPage;
  items = items.slice(start, end);
  if (withPlaceholders && items.length !== perPage) {
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
const useScreener = (options = {}) => {
  const title = ref("Results");
  const searchQuery = ref("");
  const highlightQuery = ref("");
  const currentPage = ref(1);
  const perPage = ref(15);
  const renderFormat = ref("table");
  const searchOptions = ref([]);
  const sortField = ref(null);
  const sortDirection = ref("desc");
  const data = ref([]);
  const columnConfig = ref({});
  const pick = ref([]);
  const omit = ref([]);
  title.value = options.title ?? title.value;
  columnConfig.value = options.columnConfig ?? columnConfig.value;
  currentPage.value = options.defaultCurrentPage ?? currentPage.value;
  perPage.value = options.defaultPerPage ?? perPage.value;
  data.value = options.defaultData ?? data.value;
  pick.value = options.pick ?? pick.value;
  omit.value = options.omit ?? omit.value;
  const shouldUseRegEx = computed(() => searchOptions.value.includes("use-regex"));
  const shouldMatchCase = computed(() => searchOptions.value.includes("match-case"));
  const shouldMatchWord = computed(() => searchOptions.value.includes("match-word"));
  const hasError = computed(() => {
    return !isValidInput(data.value);
  });
  const normalisedData = computed(() => {
    return isValidInput(data.value) ? normaliseInput(data.value) : [];
  });
  const searchedData = computed(() => {
    return search({
      items: normalisedData.value,
      searchQuery: searchQuery.value,
      useRegExp: shouldUseRegEx.value,
      matchCase: shouldMatchCase.value,
      matchWord: shouldMatchWord.value
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
      withPlaceholders: true
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
              htmlValue: highlightText(field.value ? String(field.value) : "", highlightQuery.value)
            }
          };
        }, {})
      };
    });
  });
  const columns = computed(() => {
    var _a;
    const fields = ((_a = pick.value) == null ? void 0 : _a.length) ? pick.value : getFields(normalisedData.value);
    let columns2 = fields.map((field, i) => {
      const inputColumn = columnConfig.value[field] ?? {};
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
    title,
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
    items,
    totalItems: computed(() => searchedData.value.length),
    hasError,
    hasData,
    columnConfig,
    pick,
    omit,
    columns,
    actions: {
      search: (query, options2) => {
        searchQuery.value = query;
        highlightQuery.value = query;
        if (options2) {
          searchOptions.value = options2;
        }
      },
      sort: (field) => {
        if (sortField.value === field) {
          sortDirection.value = sortDirection.value === "desc" ? "asc" : "desc";
        }
        sortField.value = field;
      }
    }
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueScreener",
  props: {
    title: { type: String, required: false, default: "Results" },
    data: { type: Array, required: false, default: () => [] },
    columnConfig: { type: Object, required: false, default: () => ({}) },
    pick: { type: Array, required: false, default: () => [] },
    omit: { type: Array, required: false, default: () => [] },
    perPage: { type: Number, required: false, default: 15 },
    currentPage: { type: Number, required: false, default: 1 },
    hideHeader: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const screener = useScreener({
      title: __props.title,
      defaultCurrentPage: __props.currentPage,
      defaultPerPage: __props.perPage,
      defaultData: __props.data,
      columnConfig: __props.columnConfig,
      pick: __props.pick,
      omit: __props.omit
    });
    watchEffect(() => screener.title.value = __props.title);
    watchEffect(() => screener.data.value = __props.data);
    watchEffect(() => screener.columnConfig.value = __props.columnConfig);
    watchEffect(() => screener.pick.value = __props.pick);
    watchEffect(() => screener.omit.value = __props.omit);
    watchEffect(() => screener.perPage.value = __props.perPage);
    watchEffect(() => screener.currentPage.value = __props.currentPage);
    const __returned__ = { screener, ScreenerHeader, ScreenerMain, ScreenerFooter, JsonView, Table, NoDataView, ErrorMessage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "vs-app" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    !$setup.screener.hasError.value && $props.hideHeader !== true ? (openBlock(), createBlock($setup["ScreenerHeader"], {
      key: 0,
      screener: $setup.screener
    }, null, 8, ["screener"])) : createCommentVNode("v-if", true),
    createVNode($setup["ScreenerMain"], { screener: $setup.screener }, {
      default: withCtx(() => [
        $setup.screener.hasError.value ? (openBlock(), createBlock($setup["ErrorMessage"], {
          key: 0,
          message: "Invalid data was provided. Please provide an array of objects or an array of arrays."
        })) : !$setup.screener.hasData.value ? (openBlock(), createBlock($setup["NoDataView"], { key: 1 })) : $setup.screener.renderFormat.value === "raw" ? (openBlock(), createBlock($setup["JsonView"], {
          key: 2,
          data: $setup.screener.data.value
        }, null, 8, ["data"])) : (openBlock(), createBlock($setup["Table"], {
          key: 3,
          screener: $setup.screener
        }, {
          head: withCtx((headProps) => [
            renderSlot(_ctx.$slots, "head", normalizeProps(guardReactiveProps(headProps)))
          ]),
          data: withCtx((dataProps) => [
            renderSlot(_ctx.$slots, "data", normalizeProps(guardReactiveProps(dataProps)))
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["screener"]))
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["screener"]),
    !$setup.screener.hasError.value ? (openBlock(), createBlock($setup["ScreenerFooter"], {
      key: 1,
      screener: $setup.screener
    }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/VueScreener.vue";
const VueScreener = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/VueScreener.vue"]]);
export {
  Data as D,
  Head as H,
  VueScreener as V,
  _export_sfc as _
};
