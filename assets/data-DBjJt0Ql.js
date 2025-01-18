var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aE as ref, aF as onMounted, aG as onUnmounted, ar as defineComponent, aH as twMerge$1, at as openBlock, aB as createElementBlock, aI as renderSlot, aJ as normalizeClass, au as createBlock, av as withCtx, aw as createBaseVNode, aK as extendTailwindMerge, aL as createCommentVNode, aM as computed, aN as Icon, aO as Mt, aA as createTextVNode, aP as toDisplayString, aQ as withDirectives, ax as createVNode, aR as debounce, aS as watchEffect, aT as normalizeStyle, aD as Fragment, aC as renderList, aU as createSlots, ay as normalizeProps, az as guardReactiveProps, aV as watch, aW as v4, aX as orderBy } from "./vendor-B4nEsnDH.js";
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
const _sfc_main$t = /* @__PURE__ */ defineComponent({
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
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$t.__file = "src/components/table/VueScreenerTableRow.vue";
const VueScreenerTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableRow.vue"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
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
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main$s.__file = "src/components/table/VueScreenerTableSummaryRow.vue";
const VueScreenerTableSummaryRow = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableSummaryRow.vue"]]);
const twMerge = extendTailwindMerge({ prefix: "vsc-" });
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerDefaultRenderer",
  props: {
    truncate: { type: Boolean, required: false },
    text: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false }
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
const _hoisted_1$c = ["title"];
const _hoisted_2$7 = ["innerHTML"];
const _hoisted_3$5 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2",
        $props.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      )
    ]),
    title: $props.text
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", { innerHTML: $props.text }, null, 8, _hoisted_2$7),
      $props.isSearchMatch ? (openBlock(), createElementBlock("div", _hoisted_3$5)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$c);
}
_sfc_main$r.__file = "src/components/renderers/VueScreenerDefaultRenderer.vue";
const VueScreenerDefaultRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerDefaultRenderer.vue"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerStringRenderer",
  props: {
    truncate: { type: Boolean, required: false },
    text: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const parsedText = computed(() => `"${props.text}"`);
    const __returned__ = { props, parsedText, get twMerge() {
      return twMerge;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = ["title"];
const _hoisted_2$6 = ["innerHTML"];
const _hoisted_3$4 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2 vsc-text-[#cb9077]",
        $props.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      )
    ]),
    title: $props.text
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", { innerHTML: $setup.parsedText }, null, 8, _hoisted_2$6),
      $props.isSearchMatch ? (openBlock(), createElementBlock("div", _hoisted_3$4)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$b);
}
_sfc_main$q.__file = "src/components/renderers/VueScreenerStringRenderer.vue";
const VueScreenerStringRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerStringRenderer.vue"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerNumberRenderer",
  props: {
    truncate: { type: Boolean, required: false },
    text: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false }
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
const _hoisted_1$a = ["title"];
const _hoisted_2$5 = ["innerHTML"];
const _hoisted_3$3 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2 vsc-text-[#b5cea8]",
        $props.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      )
    ]),
    title: $props.text
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", { innerHTML: $props.text }, null, 8, _hoisted_2$5),
      $props.isSearchMatch ? (openBlock(), createElementBlock("div", _hoisted_3$3)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$a);
}
_sfc_main$p.__file = "src/components/renderers/VueScreenerNumberRenderer.vue";
const VueScreenerNumberRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerNumberRenderer.vue"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerBooleanRenderer",
  props: {
    truncate: { type: Boolean, required: false },
    text: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false }
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
const _hoisted_1$9 = ["title"];
const _hoisted_2$4 = ["innerHTML"];
const _hoisted_3$2 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2 vsc-text-[#569cd6]",
        $props.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      )
    ]),
    title: $props.text
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", { innerHTML: $props.text }, null, 8, _hoisted_2$4),
      $props.isSearchMatch ? (openBlock(), createElementBlock("div", _hoisted_3$2)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$9);
}
_sfc_main$o.__file = "src/components/renderers/VueScreenerBooleanRenderer.vue";
const VueScreenerBooleanRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerBooleanRenderer.vue"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerNullRenderer",
  props: {
    truncate: { type: Boolean, required: false },
    text: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false }
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
const _hoisted_1$8 = ["title"];
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$1 = {
  key: 0,
  class: "vsc-absolute vsc-inset-0 vsc-bg-yellow-400/5"
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-relative vsc-inset-0 vsc-break-words vsc-py-2 vsc-px-2 vsc-text-[#569cd6]",
        $props.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      )
    ]),
    title: $props.text
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", { innerHTML: $props.text }, null, 8, _hoisted_2$3),
      $props.isSearchMatch ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("v-if", true)
    ])
  ], 10, _hoisted_1$8);
}
_sfc_main$n.__file = "src/components/renderers/VueScreenerNullRenderer.vue";
const VueScreenerNullRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerNullRenderer.vue"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerTableCell",
  props: {
    column: { type: Object, required: true },
    pinnedClass: { type: String, required: false },
    pinnedOverlappingClass: { type: String, required: false },
    text: { type: String, required: false },
    type: { type: String, required: false },
    isSearchMatch: { type: Boolean, required: false },
    class: { type: null, required: false },
    disableDataTypeHighlight: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get twMerge() {
      return twMerge;
    }, VueScreenerDefaultRenderer, VueScreenerStringRenderer, VueScreenerNumberRenderer, VueScreenerBooleanRenderer, VueScreenerNullRenderer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["title"];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      $setup.twMerge(
        "vsc-border-r vsc-border-zinc-700 vsc-whitespace-inherit last:vsc-border-r-0 vsc-bg-zinc-800 vsc-relative",
        $props.column.truncate && "vsc-whitespace-nowrap vsc-text-ellipsis vsc-overflow-hidden",
        $setup.props.class
      ),
      $props.column.isPinned && $setup.twMerge("vsc-sticky vsc-right-0 vsc-border-l vsc-ml-[-1px] vsc-shadow-[0px_0px_0px_rgba(0,0,0,0)] vsc-transition-shadow vsc-duration-300 vsc-ease-out", $setup.props.pinnedClass),
      // eslint-disable-line
      $props.column.isOverlayingColumns && $setup.twMerge("!vsc-shadow-[-3px_0px_2px_rgba(0,0,0,0.11)]", $setup.props.pinnedOverlappingClass)
      // eslint-disable-line
    ]),
    title: $props.column.truncate ? $props.text : ""
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      !$props.disableDataTypeHighlight && $props.type === "string" ? (openBlock(), createBlock($setup["VueScreenerStringRenderer"], {
        key: 0,
        truncate: $props.column.truncate,
        text: $props.text,
        "is-search-match": $props.isSearchMatch
      }, null, 8, ["truncate", "text", "is-search-match"])) : !$props.disableDataTypeHighlight && $props.type === "number" ? (openBlock(), createBlock($setup["VueScreenerNumberRenderer"], {
        key: 1,
        truncate: $props.column.truncate,
        text: $props.text,
        "is-search-match": $props.isSearchMatch
      }, null, 8, ["truncate", "text", "is-search-match"])) : !$props.disableDataTypeHighlight && $props.type === "boolean" ? (openBlock(), createBlock($setup["VueScreenerBooleanRenderer"], {
        key: 2,
        truncate: $props.column.truncate,
        text: $props.text,
        "is-search-match": $props.isSearchMatch
      }, null, 8, ["truncate", "text", "is-search-match"])) : !$props.disableDataTypeHighlight && $props.type === "null" ? (openBlock(), createBlock($setup["VueScreenerNullRenderer"], {
        key: 3,
        truncate: $props.column.truncate,
        text: $props.text,
        "is-search-match": $props.isSearchMatch
      }, null, 8, ["truncate", "text", "is-search-match"])) : (openBlock(), createBlock($setup["VueScreenerDefaultRenderer"], {
        key: 4,
        truncate: $props.column.truncate,
        text: $props.text,
        "is-search-match": $props.isSearchMatch
      }, null, 8, ["truncate", "text", "is-search-match"]))
    ])
  ], 10, _hoisted_1$7);
}
_sfc_main$m.__file = "src/components/table/VueScreenerTableCell.vue";
const VueScreenerTableCell = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/table/VueScreenerTableCell.vue"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
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
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Icon"], {
    icon: "codicon:arrow-down",
    class: normalizeClass([
      $setup.twMerge("vsc-inline-flex vsc-items-center vsc-cursor-pointer vsc-h-[14px] vsc-w-[14px] vsc-rotate-0 vsc-transition vsc-ease-out vsc-duration-100", $setup.props.class),
      // eslint-disable-line
      $props.direction === "asc" && $setup.twMerge("vsc-rotate-[-180deg]", $setup.props.ascClass)
    ])
  }, null, 8, ["class"]);
}
_sfc_main$l.__file = "src/components/icons/SortIcon.vue";
const SortIcon = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/icons/SortIcon.vue"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VueScreenerHeadRenderer",
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
    const __returned__ = { props, isSortable, getSortDirection, handleClickColumnHeader, SortIcon, get twMerge() {
      return twMerge;
    }, get Icon() {
      return Icon;
    }, get vTooltip() {
      return Mt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([
        $setup.twMerge(
          "vsc-inline-flex vsc-items-center vsc-font-bold vsc-whitespace-nowrap vsc-h-8 vsc-gap-2 vsc-text-xs vsc-py-2 vsc-px-2",
          $setup.props.class
        ),
        $setup.isSortable && $setup.twMerge("vsc-inline-flex vsc-items-center vsc-gap-2 vsc-cursor-pointer", $setup.props.sortableClass),
        Boolean($props.column.isSortable && $setup.getSortDirection($props.column.field)) && $setup.props.sortingClass
      ]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleClickColumnHeader($props.column))
    },
    [
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
      ]),
      $props.column.info ? withDirectives((openBlock(), createBlock(
        $setup["Icon"],
        {
          key: 1,
          icon: "codicon:info",
          class: "vsc-ml-auto vsc-min-w-3 vsc-min-h-3"
        },
        null,
        512
        /* NEED_PATCH */
      )), [
        [$setup["vTooltip"], $props.column.info]
      ]) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main$k.__file = "src/components/renderers/VueScreenerHeadRenderer.vue";
const VueScreenerTableHeadRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__file", "/home/runner/work/vue-screener/vue-screener/src/components/renderers/VueScreenerHeadRenderer.vue"]]);
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
    const __returned__ = { props, VueScreenerTableCell, VueScreenerTableHeadRenderer, get twMerge() {
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
      )
    ])
  }, {
    default: withCtx(() => [
      createVNode($setup["VueScreenerTableHeadRenderer"], {
        screener: $props.screener,
        column: $props.column,
        "sortable-class": $props.sortableClass,
        "sorting-class": $props.sortingClass,
        text: $props.text
      }, null, 8, ["screener", "column", "sortable-class", "sorting-class", "text"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["column", "value", "is-pinned", "is-pinned-overlapping", "class"]);
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
                return renderSlot(_ctx.$slots, "head-cell:" + column.field, {
                  key: i,
                  screener: $props.screener,
                  column,
                  text: column.label ?? column.field
                }, () => [
                  createVNode($setup["VueScreenerTableHeadCell"], {
                    screener: $props.screener,
                    column,
                    text: column.label ?? column.field
                  }, null, 8, ["screener", "column", "text"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 3
          /* FORWARDED */
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
                      var _a, _b;
                      return renderSlot(_ctx.$slots, "cell:" + column.field, {
                        key: j,
                        screener: $props.screener,
                        column,
                        row,
                        cell: row.cells[column.field],
                        text: (_a = row.cells[column.field]) == null ? void 0 : _a.htmlValue,
                        isSearchMatch: (_b = row.cells[column.field]) == null ? void 0 : _b.isSearchMatch
                      }, () => {
                        var _a2, _b2, _c;
                        return [
                          createVNode($setup["VueScreenerTableCell"], {
                            screener: $props.screener,
                            column,
                            row,
                            type: (_a2 = row.cells[column.field]) == null ? void 0 : _a2.type,
                            text: (_b2 = row.cells[column.field]) == null ? void 0 : _b2.htmlValue,
                            "is-search-match": (_c = row.cells[column.field]) == null ? void 0 : _c.isSearchMatch,
                            "disable-data-type-highlight": $props.screener.options.value.disableDataTypeHighlight
                          }, null, 8, ["screener", "column", "row", "type", "text", "is-search-match", "disable-data-type-highlight"])
                        ];
                      });
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
      return "table";
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
      $setup.state === "table" ? renderSlot(_ctx.$slots, "table", {
        key: 0,
        screener: $props.screener
      }, () => [
        createVNode($setup["VueScreenerTableState"], { screener: $props.screener }, createSlots({
          _: 2
          /* DYNAMIC */
        }, [
          renderList($props.screener.columns.value, (column, i) => {
            return {
              name: `head-cell:${column.field}`,
              fn: withCtx((attrs) => [
                renderSlot(_ctx.$slots, "head-cell:" + column.field, normalizeProps(guardReactiveProps(attrs)))
              ])
            };
          }),
          renderList($props.screener.columns.value, (column, i) => {
            return {
              name: `cell:${column.field}`,
              fn: withCtx((attrs) => [
                renderSlot(_ctx.$slots, "cell:" + column.field, normalizeProps(guardReactiveProps(attrs)))
              ])
            };
          })
        ]), 1032, ["screener"])
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
      return Math.ceil(props.screener.searchedRows.value.length / props.screener.searchQuery.value.rowsPerPage) || 0;
    });
    const currentPageIsInRange = computed(() => {
      return totalPages.value >= props.screener.searchQuery.value.page;
    });
    onMounted(() => {
      ensureCurrentPageIsValid();
    });
    watch(
      () => props.screener.searchedRows.value.length,
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
          total: $props.screener.searchedRows.value.length ?? 0,
          "current-page": $setup.props.screener.searchQuery.value.page,
          "per-page": $setup.props.screener.searchQuery.value.rowsPerPage
        }, null, 8, ["total", "current-page", "per-page"]),
        createVNode($setup["VueScreenerPaginationButtons"], {
          total: $setup.props.screener.searchedRows.value.length,
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
    inputClass: { type: null, required: false },
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
      class: normalizeClass($setup.twMerge("vsc-w-[280px] vsc-flex vsc-items-center vsc-gap-2 vsc-relative vsc-pr-20", $setup.props.inputClass)),
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
  return data.map((row) => {
    const rowData = Array.isArray(row) ? Object.fromEntries(row.entries()) : row;
    const cells = {};
    Object.entries(rowData).forEach(([key, value]) => {
      cells[key] = {
        value,
        stringValue: String(value),
        htmlValue: String(value),
        type: getTypeOf(value)
      };
    });
    return { id: v4(), cells };
  });
}
function getFields(rows) {
  const fields = new Set(rows.flatMap((row) => Object.keys(row.cells)));
  return Array.from(fields);
}
const createColumn = (column) => ({
  field: "",
  isPinned: false,
  isSortable: true,
  defaultSortDirection: "desc",
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
    return [...orderBy(data, [(row) => row.cells[sortField].value], [sortDirection])];
  }
  return data;
};
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
function highlightMatches(value, highlight) {
  if (["string", "number"].includes(typeof value) && highlight) {
    const highlightExp = new RegExp(escapeRegExp(highlight), "ig");
    return value.replace(highlightExp, (match) => `<mark>${match}</mark>`);
  }
  return value;
}
class Search {
  constructor(rows, options) {
    __publicField(this, "searchOptions");
    __publicField(this, "rows");
    __publicField(this, "filters", []);
    this.rows = rows;
    this.searchOptions = options;
  }
  execute(searchText) {
    if (!searchText) {
      return this.rows;
    }
    const { text, filters } = this.parseSearchText(searchText);
    this.filters = filters;
    return this.rows.map((row) => {
      const newRow = this.cloneRow(row);
      Object.entries(newRow.cells).forEach(([field, cell]) => {
        cell.isSearchMatch = false;
        cell.htmlValue = String(cell.value);
        if (this.matchesSearch(cell.stringValue, text) || this.matchesFilters(field, cell.stringValue)) {
          cell.isSearchMatch = true;
          if (!this.searchOptions.disableSearchHighlight) {
            cell.htmlValue = this.highlightValue(cell.stringValue, text);
          }
        }
      });
      return newRow;
    }).filter((row) => this.shouldKeepRow(row));
  }
  parseSearchText(text) {
    const filters = [];
    let remainingText = text;
    const filterPattern = /(-?)(\w+):(?:"([^"]+)"|(\S+))/g;
    remainingText = text.replace(filterPattern, (_, exclude, field, quotedValue, value) => {
      filters.push({
        field,
        value: quotedValue || value,
        exclude: exclude === "-"
      });
      return "";
    }).trim();
    return { text: remainingText, filters };
  }
  matchesSearch(value, pattern) {
    if (!pattern) return false;
    const { regex, caseSensitive, wholeWord } = this.searchOptions;
    let searchPattern = regex ? pattern : escapeRegExp(pattern);
    if (wholeWord) {
      searchPattern = `\\b${searchPattern}\\b`;
    }
    const flags = caseSensitive ? "g" : "gi";
    return new RegExp(searchPattern, flags).test(value);
  }
  matchesFilters(field, value) {
    if (this.filters.length === 0) return false;
    return this.filters.some((filter) => {
      if (filter.field !== field) return false;
      const matches = this.matchesSearch(value, filter.value);
      return filter.exclude ? !matches : matches;
    });
  }
  shouldKeepRow(row) {
    return Object.values(row.cells).some((cell) => cell.isSearchMatch);
  }
  highlightValue(value, pattern) {
    if (!pattern) return value;
    return highlightMatches(value, pattern);
  }
  cloneRow(row) {
    return {
      id: row.id,
      cells: Object.fromEntries(Object.entries(row.cells).map(([key, cell]) => [key, { ...cell }]))
    };
  }
}
const useVueScreener = (inputData, defaultOptions = {}) => {
  const options = ref({
    contentHeight: defaultOptions.contentHeight,
    disableSearchHighlight: defaultOptions.disableSearchHighlight ?? false,
    disableDataTypeHighlight: defaultOptions.disableDataTypeHighlight ?? false,
    loading: defaultOptions.loading ?? false,
    defaultCurrentPage: defaultOptions.defaultCurrentPage ?? 1,
    defaultRowsPerPage: defaultOptions.defaultRowsPerPage ?? 10,
    defaultSortField: defaultOptions.defaultSortField,
    defaultSortDirection: defaultOptions.defaultSortDirection ?? "desc",
    defaultTruncate: defaultOptions.defaultTruncate,
    columns: defaultOptions.columns
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
    page: options.value.defaultCurrentPage ?? 1,
    // Current page number
    rowsPerPage: options.value.defaultRowsPerPage ?? 10,
    // Number of rows per page
    sortField: options.value.defaultSortField ?? null,
    // Field to sort by
    sortDirection: options.value.defaultSortDirection ?? "desc"
    // Sort direction
  });
  const parsedRows = computed(() => {
    if (!options.value.columns) return allRows.value;
    const columnsWithFormatters = Object.entries(options.value.columns).filter(([, column]) => column == null ? void 0 : column.format);
    if (columnsWithFormatters.length === 0) return allRows.value;
    return allRows.value.map((row) => {
      const formattedRow = {
        ...row,
        cells: Object.fromEntries(Object.entries(row.cells).map(([key, cell]) => [key, { ...cell }]))
      };
      columnsWithFormatters.forEach(([key, column]) => {
        if (row.cells[key] !== void 0) {
          formattedRow.cells[key].value = column.format(row.cells[key], row);
        }
      });
      return formattedRow;
    });
  });
  const searchedRows = computed(() => {
    return new Search(parsedRows.value, {
      regex: searchQuery.value.regex,
      caseSensitive: searchQuery.value.caseSensitive,
      wholeWord: searchQuery.value.wholeWord,
      disableSearchHighlight: options.value.disableSearchHighlight
    }).execute(searchQuery.value.text);
  });
  const sortedRows = computed(() => {
    var _a;
    const sortedRows2 = searchQuery.value.text ? searchedRows.value : allRows.value;
    const _sortField = searchQuery.value.sortField;
    const invertSort = _sortField && options.value.columns ? (_a = options.value.columns[_sortField]) == null ? void 0 : _a.invertSort : void 0;
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
  const totalSearchedRows = computed(() => searchedRows.value.length ?? 0);
  const currentPage = computed(() => searchQuery.value.page);
  const rowsPerPage = computed(() => searchQuery.value.rowsPerPage);
  const columnsMap = computed(() => {
    const dataFields = getFields(allRows.value);
    const columns2 = /* @__PURE__ */ new Map();
    dataFields.forEach((field) => {
      const defaults = { field };
      if (typeof options.value.defaultTruncate === "boolean") {
        defaults.truncate = options.value.defaultTruncate;
      }
      columns2.set(field, createColumn(defaults));
    });
    if (options.value.columns) {
      Object.entries(options.value.columns).forEach(([field, config]) => {
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
    columns2.filter((column) => typeof column.order === "number").forEach((column) => {
      const currentIndex = columns2.indexOf(column);
      const columnCopy = { ...column };
      columns2.splice(currentIndex, 1);
      columns2.splice(column.order, 0, columnCopy);
    });
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
    setLoading: (loading) => options.value.loading = loading,
    setHasHorizontalOverflow: (value) => hasHorizontalOverflow.value = value,
    setIsScrolledToRightEdge: (value) => isScrolledToRightEdge.value = value,
    setOptions: (newOptions) => {
      if (newOptions.contentHeight !== void 0) options.value.contentHeight = newOptions.contentHeight;
      if (newOptions.disableSearchHighlight !== void 0) options.value.disableSearchHighlight = newOptions.disableSearchHighlight;
      if (newOptions.loading !== void 0) options.value.loading = newOptions.loading;
      if (newOptions.defaultCurrentPage !== void 0) options.value.defaultCurrentPage = newOptions.defaultCurrentPage;
      if (newOptions.defaultRowsPerPage !== void 0) options.value.defaultRowsPerPage = newOptions.defaultRowsPerPage;
      if (newOptions.defaultSortField !== void 0) options.value.defaultSortField = newOptions.defaultSortField;
      if (newOptions.defaultSortDirection !== void 0) options.value.defaultSortDirection = newOptions.defaultSortDirection;
      if (newOptions.columns !== void 0) options.value.columns = newOptions.columns;
    }
  };
  return {
    options,
    // user options
    searchQuery,
    // search options (text, pagination, sort)
    allRows,
    // all data
    searchedRows,
    // filtered data (after search query)
    paginatedRows,
    // paginated data (cut from searchedRows)
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
    data: { type: [Array, null], required: false },
    class: { type: String, required: false },
    contentHeight: { type: String, required: false },
    defaultCurrentPage: { type: Number, required: false },
    defaultRowsPerPage: { type: Number, required: false },
    defaultSortField: { type: String, required: false },
    defaultSortDirection: { type: String, required: false },
    columns: { type: Object, required: false },
    disableSearchHighlight: { type: Boolean, required: false },
    disableDataTypeHighlight: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    title: { type: String, required: false },
    includeHeader: { type: Boolean, required: false, default: true },
    includeFooter: { type: Boolean, required: false, default: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const internalScreener = computed(
      () => props.screener ?? useVueScreener(props.data ?? [], {
        contentHeight: props.contentHeight,
        defaultCurrentPage: props.defaultCurrentPage,
        defaultRowsPerPage: props.defaultRowsPerPage,
        defaultSortField: props.defaultSortField,
        defaultSortDirection: props.defaultSortDirection,
        columns: props.columns,
        disableSearchHighlight: props.disableSearchHighlight,
        disableDataTypeHighlight: props.disableDataTypeHighlight,
        loading: props.loading
      })
    );
    watch(() => props.data, (data) => props.data && internalScreener.value.actions.setData(data), { immediate: true });
    watch(
      () => ({
        contentHeight: props.contentHeight,
        defaultCurrentPage: props.defaultCurrentPage,
        defaultRowsPerPage: props.defaultRowsPerPage,
        defaultSortField: props.defaultSortField,
        defaultSortDirection: props.defaultSortDirection,
        columns: props.columns,
        disableSearchHighlight: props.disableSearchHighlight,
        disableDataTypeHighlight: props.disableDataTypeHighlight,
        loading: props.loading
      }),
      (options) => internalScreener.value.actions.setOptions(options)
    );
    const screenerRef = ref();
    useElementSize(screenerRef, internalScreener.value.actions.setDimensions);
    const __returned__ = { props, internalScreener, screenerRef, VueScreenerViewport, VueScreenerPagination, VueScreenerSearch, get twMerge() {
      return twMerge$1;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "vsc-flex vsc-justify-between vsc-items-center"
};
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
      renderSlot(_ctx.$slots, "header", { screener: $setup.internalScreener }, () => [
        $props.includeHeader ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
        ])) : createCommentVNode("v-if", true)
      ]),
      renderSlot(_ctx.$slots, "viewport", { screener: $setup.internalScreener }, () => [
        createVNode($setup["VueScreenerViewport"], { screener: $setup.internalScreener }, createSlots({
          table: withCtx((attrs) => [
            renderSlot(_ctx.$slots, "table", normalizeProps(guardReactiveProps(attrs)))
          ]),
          loading: withCtx(() => [
            renderSlot(_ctx.$slots, "loading")
          ]),
          empty: withCtx(() => [
            renderSlot(_ctx.$slots, "empty")
          ]),
          error: withCtx(() => [
            renderSlot(_ctx.$slots, "error")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          renderList($setup.internalScreener.columns.value, (column, i) => {
            return {
              name: `head-cell:${column.field}`,
              fn: withCtx((attrs) => [
                renderSlot(_ctx.$slots, "head-cell:" + column.field, normalizeProps(guardReactiveProps(attrs)))
              ])
            };
          }),
          renderList($setup.internalScreener.columns.value, (column, i) => {
            return {
              name: `cell:${column.field}`,
              fn: withCtx((attrs) => [
                renderSlot(_ctx.$slots, "cell:" + column.field, normalizeProps(guardReactiveProps(attrs)))
              ])
            };
          })
        ]), 1032, ["screener"])
      ]),
      renderSlot(_ctx.$slots, "footer", { screener: $setup.internalScreener }, () => [
        $props.includeFooter ? (openBlock(), createBlock($setup["VueScreenerPagination"], {
          key: 0,
          screener: $setup.internalScreener
        }, null, 8, ["screener"])) : createCommentVNode("v-if", true)
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
    product: "Smart Headphones",
    price: 1377.71,
    inStock: null,
    stockQuantity: 82,
    rating: 4.9,
    isDiscounted: true,
    discountPercent: 19.9,
    monthlyViews: 8723,
    department: "Clothing",
    isFeatured: false,
    weight: 3.95
  },
  {
    id: 2,
    product: "Basic Camera",
    price: 1956.39,
    inStock: true,
    stockQuantity: 8,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2610,
    department: "Toys",
    isFeatured: false,
    weight: 2.19
  },
  {
    id: 3,
    product: "Pro Watch",
    price: 375.57,
    inStock: true,
    stockQuantity: 192,
    rating: 3.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2624,
    department: "Electronics",
    isFeatured: false,
    weight: 2.22
  },
  {
    id: 4,
    product: "Smart Tablet",
    price: 1953.2,
    inStock: true,
    stockQuantity: 40,
    rating: 4.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4638,
    department: "Home & Garden",
    isFeatured: false,
    weight: 2.81
  },
  {
    id: 5,
    product: "Eco Speaker",
    price: 1924.55,
    inStock: true,
    stockQuantity: 95,
    rating: 4.4,
    isDiscounted: true,
    discountPercent: 45.9,
    monthlyViews: 7622,
    department: "Books",
    isFeatured: true,
    weight: 2.16
  },
  {
    id: 6,
    product: "Premium Tablet",
    price: 652.14,
    inStock: true,
    stockQuantity: 53,
    rating: 4.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2184,
    department: "Food",
    isFeatured: true,
    weight: 2.13
  },
  {
    id: 7,
    product: "Premium Watch",
    price: 175.81,
    inStock: true,
    stockQuantity: 106,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6449,
    department: "Electronics",
    isFeatured: true,
    weight: 4.7
  },
  {
    id: 8,
    product: "Smart Laptop",
    price: 1646.25,
    inStock: true,
    stockQuantity: 174,
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7405,
    department: "Electronics",
    isFeatured: false,
    weight: 1.23
  },
  {
    id: 9,
    product: "Eco Watch",
    price: 1800.94,
    inStock: true,
    stockQuantity: 41,
    rating: 4.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8210,
    department: "Toys",
    isFeatured: false,
    weight: 1.24
  },
  {
    id: 10,
    product: "Smart Laptop",
    price: 388.39,
    inStock: false,
    stockQuantity: 0,
    rating: 3.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8146,
    department: "Sports",
    isFeatured: false,
    weight: 1
  },
  {
    id: 11,
    product: "Ultra Laptop",
    price: 642.44,
    inStock: true,
    stockQuantity: 36,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1653,
    department: "Home & Garden",
    isFeatured: true,
    weight: 1.65
  },
  {
    id: 12,
    product: "Smart Watch",
    price: 1008.74,
    inStock: true,
    stockQuantity: 43,
    rating: 4,
    isDiscounted: true,
    discountPercent: 11.3,
    monthlyViews: 1572,
    department: "Clothing",
    isFeatured: true,
    weight: 4.63
  },
  {
    id: 13,
    product: "Basic Watch",
    price: 426.76,
    inStock: true,
    stockQuantity: 85,
    rating: 3.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 980,
    department: "Sports",
    isFeatured: false,
    weight: 4.28
  },
  {
    id: 14,
    product: "Eco Camera",
    price: 1489.86,
    inStock: true,
    stockQuantity: 190,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1827,
    department: "Home & Garden",
    isFeatured: false,
    weight: 1.91
  },
  {
    id: 15,
    product: "Smart Phone",
    price: 1046.19,
    inStock: true,
    stockQuantity: 45,
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1749,
    department: "Food",
    isFeatured: false,
    weight: 0.24
  },
  {
    id: 16,
    product: "Basic Laptop",
    price: 1135.73,
    inStock: true,
    stockQuantity: 33,
    rating: 3.6,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1871,
    department: "Home & Garden",
    isFeatured: false,
    weight: 3.77
  },
  {
    id: 17,
    product: "Basic Laptop",
    price: 291.26,
    inStock: true,
    stockQuantity: 184,
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 131,
    department: "Sports",
    isFeatured: false,
    weight: 4.63
  },
  {
    id: 18,
    product: "Pro Tablet",
    price: 602.34,
    inStock: true,
    stockQuantity: 3,
    rating: 3.3,
    isDiscounted: true,
    discountPercent: 26.4,
    monthlyViews: 6883,
    department: "Sports",
    isFeatured: false,
    weight: 1.2
  },
  {
    id: 19,
    product: "Pro Tablet",
    price: 218.24,
    inStock: true,
    stockQuantity: 102,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 9087,
    department: "Electronics",
    isFeatured: false,
    weight: 3.38
  },
  {
    id: 20,
    product: "Eco Speaker",
    price: 1133.76,
    inStock: true,
    stockQuantity: 115,
    rating: 3.2,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 5804,
    department: "Books",
    isFeatured: true,
    weight: 0.83
  },
  {
    id: 21,
    product: "Premium Tablet",
    price: 297.02,
    inStock: true,
    stockQuantity: 154,
    rating: 3.4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 5981,
    department: "Books",
    isFeatured: false,
    weight: 3.13
  },
  {
    id: 22,
    product: "Super Headphones",
    price: 1019.2,
    inStock: true,
    stockQuantity: 124,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3574,
    department: "Food",
    isFeatured: false,
    weight: 0.12
  },
  {
    id: 23,
    product: "Smart Speaker",
    price: 873.27,
    inStock: true,
    stockQuantity: 62,
    rating: 3.4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4846,
    department: "Toys",
    isFeatured: false,
    weight: 3.64
  },
  {
    id: 24,
    product: "Smart Speaker",
    price: 1660.79,
    inStock: true,
    stockQuantity: 61,
    rating: 3.4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4119,
    department: "Electronics",
    isFeatured: false,
    weight: 4.46
  },
  {
    id: 25,
    product: "Smart Headphones",
    price: 1828.09,
    inStock: true,
    stockQuantity: 19,
    rating: 3.4,
    isDiscounted: true,
    discountPercent: 34.3,
    monthlyViews: 4485,
    department: "Electronics",
    isFeatured: false,
    weight: 1.24
  },
  {
    id: 26,
    product: "Ultra Watch",
    price: 648.08,
    inStock: true,
    stockQuantity: 64,
    rating: 3.2,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1877,
    department: "Electronics",
    isFeatured: false,
    weight: 3.13
  },
  {
    id: 27,
    product: "Premium Camera",
    price: 203.77,
    inStock: true,
    stockQuantity: 92,
    rating: 3.9,
    isDiscounted: true,
    discountPercent: 32.4,
    monthlyViews: 3857,
    department: "Books",
    isFeatured: false,
    weight: 0.8
  },
  {
    id: 28,
    product: "Basic Tablet",
    price: 857.54,
    inStock: true,
    stockQuantity: 147,
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 42.6,
    monthlyViews: 6349,
    department: "Toys",
    isFeatured: false,
    weight: 0.6
  },
  {
    id: 29,
    product: "Eco Headphones",
    price: 445.31,
    inStock: true,
    stockQuantity: 162,
    rating: 4.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7963,
    department: "Clothing",
    isFeatured: true,
    weight: 0.68
  },
  {
    id: 30,
    product: "Premium Laptop",
    price: 371.03,
    inStock: true,
    stockQuantity: 199,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1941,
    department: "Books",
    isFeatured: false,
    weight: 3.13
  },
  {
    id: 31,
    product: "Premium Speaker",
    price: 1579.31,
    inStock: true,
    stockQuantity: 56,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8970,
    department: "Clothing",
    isFeatured: false,
    weight: 2.91
  },
  {
    id: 32,
    product: "Pro Tablet",
    price: 1332.02,
    inStock: true,
    stockQuantity: 105,
    rating: 3.1,
    isDiscounted: true,
    discountPercent: 18.2,
    monthlyViews: 8623,
    department: "Home & Garden",
    isFeatured: false,
    weight: 3.84
  },
  {
    id: 33,
    product: "Premium Speaker",
    price: 1091.98,
    inStock: true,
    stockQuantity: 37,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6899,
    department: "Electronics",
    isFeatured: true,
    weight: 0.65
  },
  {
    id: 34,
    product: "Premium Speaker",
    price: 1607.35,
    inStock: true,
    stockQuantity: 146,
    rating: 4.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4512,
    department: "Toys",
    isFeatured: false,
    weight: 4.91
  },
  {
    id: 35,
    product: "Ultra Speaker",
    price: 1442.49,
    inStock: true,
    stockQuantity: 168,
    rating: 3.6,
    isDiscounted: true,
    discountPercent: 32.4,
    monthlyViews: 863,
    department: "Home & Garden",
    isFeatured: false,
    weight: 3.74
  },
  {
    id: 36,
    product: "Basic Tablet",
    price: 1386.1,
    inStock: true,
    stockQuantity: 102,
    rating: 4.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8152,
    department: "Books",
    isFeatured: false,
    weight: 3.33
  },
  {
    id: 37,
    product: "Premium Tablet",
    price: 1943.85,
    inStock: true,
    stockQuantity: 56,
    rating: 4.4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4447,
    department: "Food",
    isFeatured: false,
    weight: 0.04
  },
  {
    id: 38,
    product: "Ultra Headphones",
    price: 1331.72,
    inStock: true,
    stockQuantity: 38,
    rating: 3.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7916,
    department: "Food",
    isFeatured: false,
    weight: 3.63
  },
  {
    id: 39,
    product: "Pro Laptop",
    price: 1321.53,
    inStock: true,
    stockQuantity: 198,
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 5642,
    department: "Clothing",
    isFeatured: true,
    weight: 1.04
  },
  {
    id: 40,
    product: "Basic Phone",
    price: 744.97,
    inStock: true,
    stockQuantity: 191,
    rating: 3.1,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3031,
    department: "Toys",
    isFeatured: false,
    weight: 2.73
  },
  {
    id: 41,
    product: "Basic Tablet",
    price: 1698.51,
    inStock: true,
    stockQuantity: 35,
    rating: 3.4,
    isDiscounted: true,
    discountPercent: 42.7,
    monthlyViews: 3279,
    department: "Clothing",
    isFeatured: false,
    weight: 4.85
  },
  {
    id: 42,
    product: "Smart Speaker",
    price: 1646.43,
    inStock: true,
    stockQuantity: 63,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 5476,
    department: "Food",
    isFeatured: false,
    weight: 4.94
  },
  {
    id: 43,
    product: "Ultra Camera",
    price: 1713.81,
    inStock: true,
    stockQuantity: 130,
    rating: 3.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8380,
    department: "Home & Garden",
    isFeatured: false,
    weight: 1.09
  },
  {
    id: 44,
    product: "Pro Laptop",
    price: 1898.07,
    inStock: true,
    stockQuantity: 72,
    rating: 3.5,
    isDiscounted: true,
    discountPercent: 10.1,
    monthlyViews: 6281,
    department: "Sports",
    isFeatured: false,
    weight: 0.71
  },
  {
    id: 45,
    product: "Ultra Speaker",
    price: 1254.8,
    inStock: true,
    stockQuantity: 191,
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 18.9,
    monthlyViews: 2388,
    department: "Clothing",
    isFeatured: false,
    weight: 1.55
  },
  {
    id: 46,
    product: "Pro Speaker",
    price: 702.92,
    inStock: true,
    stockQuantity: 181,
    rating: 3.6,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7715,
    department: "Toys",
    isFeatured: false,
    weight: 4.85
  },
  {
    id: 47,
    product: "Eco Headphones",
    price: 939.82,
    inStock: true,
    stockQuantity: 167,
    rating: 3.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3189,
    department: "Home & Garden",
    isFeatured: true,
    weight: 4.27
  },
  {
    id: 48,
    product: "Smart Laptop",
    price: 846.68,
    inStock: true,
    stockQuantity: 93,
    rating: 3.6,
    isDiscounted: true,
    discountPercent: 35.9,
    monthlyViews: 6293,
    department: "Electronics",
    isFeatured: true,
    weight: 2.03
  },
  {
    id: 49,
    product: "Ultra Phone",
    price: 1947.68,
    inStock: true,
    stockQuantity: 118,
    rating: 3.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6539,
    department: "Books",
    isFeatured: true,
    weight: 2.75
  },
  {
    id: 50,
    product: "Eco Speaker",
    price: 1506.54,
    inStock: true,
    stockQuantity: 199,
    rating: 4,
    isDiscounted: true,
    discountPercent: 20.8,
    monthlyViews: 5441,
    department: "Electronics",
    isFeatured: true,
    weight: 2.65
  },
  {
    id: 51,
    product: "Smart Headphones",
    price: 279.19,
    inStock: true,
    stockQuantity: 135,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3324,
    department: "Sports",
    isFeatured: true,
    weight: 3.56
  },
  {
    id: 52,
    product: "Eco Laptop",
    price: 836.42,
    inStock: true,
    stockQuantity: 146,
    rating: 4.1,
    isDiscounted: true,
    discountPercent: 38.1,
    monthlyViews: 6219,
    department: "Toys",
    isFeatured: false,
    weight: 3.11
  },
  {
    id: 53,
    product: "Eco Phone",
    price: 1088.2,
    inStock: true,
    stockQuantity: 150,
    rating: 4.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1511,
    department: "Sports",
    isFeatured: true,
    weight: 4.41
  },
  {
    id: 54,
    product: "Basic Headphones",
    price: 540.81,
    inStock: true,
    stockQuantity: 73,
    rating: 3.6,
    isDiscounted: true,
    discountPercent: 49.7,
    monthlyViews: 309,
    department: "Home & Garden",
    isFeatured: false,
    weight: 1.08
  },
  {
    id: 55,
    product: "Super Watch",
    price: 793.09,
    inStock: true,
    stockQuantity: 176,
    rating: 3.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6665,
    department: "Food",
    isFeatured: false,
    weight: 2.39
  },
  {
    id: 56,
    product: "Pro Watch",
    price: 1581.21,
    inStock: true,
    stockQuantity: 118,
    rating: 4.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 9693,
    department: "Electronics",
    isFeatured: false,
    weight: 1.25
  },
  {
    id: 57,
    product: "Basic Camera",
    price: 488.5,
    inStock: true,
    stockQuantity: 155,
    rating: 5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 1839,
    department: "Toys",
    isFeatured: false,
    weight: 2.44
  },
  {
    id: 58,
    product: "Premium Phone",
    price: 1829.43,
    inStock: true,
    stockQuantity: 46,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8486,
    department: "Toys",
    isFeatured: false,
    weight: 3.95
  },
  {
    id: 59,
    product: "Pro Speaker",
    price: 495.54,
    inStock: true,
    stockQuantity: 172,
    rating: 5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2152,
    department: "Clothing",
    isFeatured: false,
    weight: 2.1
  },
  {
    id: 60,
    product: "Basic Laptop",
    price: 1807.48,
    inStock: true,
    stockQuantity: 69,
    rating: 4.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 5135,
    department: "Books",
    isFeatured: false,
    weight: 1.98
  },
  {
    id: 61,
    product: "Basic Phone",
    price: 465.53,
    inStock: true,
    stockQuantity: 51,
    rating: 3.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4193,
    department: "Sports",
    isFeatured: false,
    weight: 2.96
  },
  {
    id: 62,
    product: "Basic Watch",
    price: 606.54,
    inStock: true,
    stockQuantity: 144,
    rating: 4.6,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 943,
    department: "Electronics",
    isFeatured: false,
    weight: 1.34
  },
  {
    id: 63,
    product: "Super Phone",
    price: 919.04,
    inStock: true,
    stockQuantity: 194,
    rating: 3.2,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3592,
    department: "Toys",
    isFeatured: false,
    weight: 1.08
  },
  {
    id: 64,
    product: "Smart Speaker",
    price: 1472.03,
    inStock: true,
    stockQuantity: 50,
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 15.5,
    monthlyViews: 6281,
    department: "Food",
    isFeatured: false,
    weight: 4.5
  },
  {
    id: 65,
    product: "Smart Laptop",
    price: 322.46,
    inStock: true,
    stockQuantity: 81,
    rating: 4.4,
    isDiscounted: true,
    discountPercent: 30.6,
    monthlyViews: 2660,
    department: "Clothing",
    isFeatured: true,
    weight: 2.17
  },
  {
    id: 66,
    product: "Basic Phone",
    price: 1796.69,
    inStock: true,
    stockQuantity: 190,
    rating: 3.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 4594,
    department: "Sports",
    isFeatured: false,
    weight: 1.77
  },
  {
    id: 67,
    product: "Basic Headphones",
    price: 144.1,
    inStock: true,
    stockQuantity: 176,
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 28.1,
    monthlyViews: 9027,
    department: "Electronics",
    isFeatured: false,
    weight: 3.42
  },
  {
    id: 68,
    product: "Super Phone",
    price: 1306.99,
    inStock: true,
    stockQuantity: 130,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 740,
    department: "Home & Garden",
    isFeatured: false,
    weight: 4.73
  },
  {
    id: 69,
    product: "Super Headphones",
    price: 995.62,
    inStock: true,
    stockQuantity: 187,
    rating: 4.1,
    isDiscounted: true,
    discountPercent: 35.1,
    monthlyViews: 9500,
    department: "Food",
    isFeatured: false,
    weight: 4.43
  },
  {
    id: 70,
    product: "Ultra Tablet",
    price: 1529.15,
    inStock: true,
    stockQuantity: 99,
    rating: 4,
    isDiscounted: true,
    discountPercent: 38.9,
    monthlyViews: 8362,
    department: "Home & Garden",
    isFeatured: true,
    weight: 3.8
  },
  {
    id: 71,
    product: "Smart Tablet",
    price: 731.36,
    inStock: true,
    stockQuantity: 138,
    rating: 4.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 9903,
    department: "Toys",
    isFeatured: false,
    weight: 3.63
  },
  {
    id: 72,
    product: "Basic Watch",
    price: 1700.23,
    inStock: true,
    stockQuantity: 45,
    rating: 3.1,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7117,
    department: "Toys",
    isFeatured: false,
    weight: 3.92
  },
  {
    id: 73,
    product: "Ultra Camera",
    price: 830.23,
    inStock: true,
    stockQuantity: 110,
    rating: 5,
    isDiscounted: true,
    discountPercent: 25.3,
    monthlyViews: 3551,
    department: "Home & Garden",
    isFeatured: true,
    weight: 3.12
  },
  {
    id: 74,
    product: "Eco Phone",
    price: 1001.94,
    inStock: true,
    stockQuantity: 55,
    rating: 4.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3616,
    department: "Books",
    isFeatured: true,
    weight: 2.22
  },
  {
    id: 75,
    product: "Ultra Watch",
    price: 1175.62,
    inStock: true,
    stockQuantity: 108,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 139,
    department: "Toys",
    isFeatured: false,
    weight: 3.58
  },
  {
    id: 76,
    product: "Super Laptop",
    price: 485.79,
    inStock: true,
    stockQuantity: 130,
    rating: 4,
    isDiscounted: true,
    discountPercent: 26.1,
    monthlyViews: 6258,
    department: "Food",
    isFeatured: false,
    weight: 4.41
  },
  {
    id: 77,
    product: "Eco Tablet",
    price: 1007.45,
    inStock: true,
    stockQuantity: 49,
    rating: 5,
    isDiscounted: true,
    discountPercent: 29.3,
    monthlyViews: 1886,
    department: "Books",
    isFeatured: false,
    weight: 2.01
  },
  {
    id: 78,
    product: "Super Phone",
    price: 1009.61,
    inStock: true,
    stockQuantity: 51,
    rating: 4.5,
    isDiscounted: true,
    discountPercent: 34.4,
    monthlyViews: 4965,
    department: "Home & Garden",
    isFeatured: false,
    weight: 1.7
  },
  {
    id: 79,
    product: "Pro Camera",
    price: 1175.7,
    inStock: true,
    stockQuantity: 82,
    rating: 4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3483,
    department: "Clothing",
    isFeatured: false,
    weight: 3.6
  },
  {
    id: 80,
    product: "Ultra Speaker",
    price: 945.1,
    inStock: true,
    stockQuantity: 7,
    rating: 3.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 898,
    department: "Sports",
    isFeatured: false,
    weight: 4.17
  },
  {
    id: 81,
    product: "Super Phone",
    price: 706.24,
    inStock: true,
    stockQuantity: 114,
    rating: 3.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 7496,
    department: "Food",
    isFeatured: false,
    weight: 0.22
  },
  {
    id: 82,
    product: "Smart Laptop",
    price: 2048.33,
    inStock: true,
    stockQuantity: 7,
    rating: 4.3,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2537,
    department: "Home & Garden",
    isFeatured: false,
    weight: 4.53
  },
  {
    id: 83,
    product: "Premium Watch",
    price: 1856,
    inStock: true,
    stockQuantity: 87,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 9911,
    department: "Home & Garden",
    isFeatured: false,
    weight: 3.99
  },
  {
    id: 84,
    product: "Super Laptop",
    price: 1909.25,
    inStock: true,
    stockQuantity: 31,
    rating: 3,
    isDiscounted: true,
    discountPercent: 46.2,
    monthlyViews: 9425,
    department: "Food",
    isFeatured: false,
    weight: 3.85
  },
  {
    id: 85,
    product: "Super Phone",
    price: 474.28,
    inStock: true,
    stockQuantity: 167,
    rating: 4.5,
    isDiscounted: true,
    discountPercent: 46.1,
    monthlyViews: 6563,
    department: "Home & Garden",
    isFeatured: true,
    weight: 0.89
  },
  {
    id: 86,
    product: "Basic Camera",
    price: 375.28,
    inStock: true,
    stockQuantity: 134,
    rating: 4.2,
    isDiscounted: true,
    discountPercent: 45.4,
    monthlyViews: 6661,
    department: "Books",
    isFeatured: false,
    weight: 1.96
  },
  {
    id: 87,
    product: "Pro Phone",
    price: 887.43,
    inStock: true,
    stockQuantity: 104,
    rating: 3.4,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6687,
    department: "Clothing",
    isFeatured: false,
    weight: 0.43
  },
  {
    id: 88,
    product: "Eco Laptop",
    price: 660.99,
    inStock: true,
    stockQuantity: 129,
    rating: 3.3,
    isDiscounted: true,
    discountPercent: 43.8,
    monthlyViews: 8478,
    department: "Electronics",
    isFeatured: true,
    weight: 3.92
  },
  {
    id: 89,
    product: "Super Speaker",
    price: 676.95,
    inStock: true,
    stockQuantity: 88,
    rating: 3.2,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 2710,
    department: "Clothing",
    isFeatured: false,
    weight: 0.63
  },
  {
    id: 90,
    product: "Premium Tablet",
    price: 1000.39,
    inStock: true,
    stockQuantity: 73,
    rating: 3.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3092,
    department: "Toys",
    isFeatured: false,
    weight: 2.27
  },
  {
    id: 91,
    product: "Pro Headphones",
    price: 534.19,
    inStock: true,
    stockQuantity: 66,
    rating: 4.1,
    isDiscounted: true,
    discountPercent: 46.2,
    monthlyViews: 5497,
    department: "Electronics",
    isFeatured: false,
    weight: 3.7
  },
  {
    id: 92,
    product: "Pro Camera",
    price: 586.51,
    inStock: true,
    stockQuantity: 11,
    rating: 3.1,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8961,
    department: "Electronics",
    isFeatured: false,
    weight: 0.43
  },
  {
    id: 93,
    product: "Premium Laptop",
    price: 168.13,
    inStock: true,
    stockQuantity: 189,
    rating: 3.6,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6583,
    department: "Clothing",
    isFeatured: true,
    weight: 4.12
  },
  {
    id: 94,
    product: "Basic Watch",
    price: 1716.19,
    inStock: true,
    stockQuantity: 29,
    rating: 3.1,
    isDiscounted: true,
    discountPercent: 18.1,
    monthlyViews: 8616,
    department: "Food",
    isFeatured: false,
    weight: 3.8
  },
  {
    id: 95,
    product: "Smart Tablet",
    price: 254.2,
    inStock: true,
    stockQuantity: 8,
    rating: 4.7,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 9884,
    department: "Sports",
    isFeatured: true,
    weight: 0.15
  },
  {
    id: 96,
    product: "Ultra Camera",
    price: 1348.95,
    inStock: true,
    stockQuantity: 72,
    rating: 3.7,
    isDiscounted: true,
    discountPercent: 16.4,
    monthlyViews: 5477,
    department: "Home & Garden",
    isFeatured: false,
    weight: 2.32
  },
  {
    id: 97,
    product: "Premium Headphones",
    price: 1198.58,
    inStock: true,
    stockQuantity: 43,
    rating: 3.9,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8261,
    department: "Clothing",
    isFeatured: true,
    weight: 1.91
  },
  {
    id: 98,
    product: "Basic Speaker",
    price: 1468.85,
    inStock: true,
    stockQuantity: 151,
    rating: 3.8,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 6520,
    department: "Food",
    isFeatured: false,
    weight: 1.05
  },
  {
    id: 99,
    product: "Smart Laptop",
    price: 1219.77,
    inStock: true,
    stockQuantity: 148,
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 8602,
    department: "Home & Garden",
    isFeatured: false,
    weight: 2.7
  },
  {
    id: 100,
    product: "Ultra Watch",
    price: 650.52,
    inStock: true,
    stockQuantity: 137,
    rating: 3.5,
    isDiscounted: false,
    discountPercent: 0,
    monthlyViews: 3126,
    department: "Clothing",
    isFeatured: true,
    weight: 4.11
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
