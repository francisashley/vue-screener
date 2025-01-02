const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/1-data.story-CAr3jRoy.js","assets/vendor-BjHKTJun.js","assets/data-RdoU3UI6.js","assets/mix-objects-data-D5HdiZTi.js","assets/2-states.story-JhHgeYj8.js","assets/3-column-sorting.story-C6_9ODkN.js","assets/4-disable-search highlight.story-hd397D1O.js","assets/1-control-widths.story-dp6Mwa16.js","assets/2-control-labels.story-BI46Zr4K.js","assets/3-extra-columns.story-BsWgHx3b.js","assets/4-pin-to-side.story-DRx41HX9.js","assets/5-only-fields.story-CHiYWu_O.js","assets/6-hide-fields.story-BNTgFnjM.js","assets/7-disable-sort.story-DGiiMXXm.js","assets/8-format-column.story-BAYrorN5.js","assets/1-space.story-BnucFrYf.js","assets/2-cavern.story-BkfHnaJE.js","assets/HomeView.vue-CgDBpJi_.js","assets/story-mYDjoDXS.js","assets/StoryView.vue-UNeTaJkl.js","assets/MobileOverlay.vue2-tjSJWsFd.js","assets/BaseEmpty.vue-BBBpX5z8.js","assets/state-BEW7t_eC.js"])))=>i.map(i=>d[i]);
import { Q as Comp14, R as defineAsyncComponent, S as createRouter, U as createWebHistory, V as createWebHashHistory, W as useDark, X as useToggle, k as watch, Y as markRaw, E as reactive, d as defineComponent, r as ref, Z as watchEffect, o as openBlock, q as createBlock, _ as mergeProps, $ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-BjHKTJun.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/vue-screener/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
          link.crossOrigin = "";
        }
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./1-data.story-CAr3jRoy.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./2-states.story-JhHgeYj8.js"), true ? __vite__mapDeps([4,1,2]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./3-column-sorting.story-C6_9ODkN.js"), true ? __vite__mapDeps([5,1,2]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./4-disable-search highlight.story-hd397D1O.js"), true ? __vite__mapDeps([6,1,2]) : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./1-control-widths.story-dp6Mwa16.js"), true ? __vite__mapDeps([7,1,2,3]) : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./2-control-labels.story-BI46Zr4K.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./3-extra-columns.story-BsWgHx3b.js"), true ? __vite__mapDeps([9,1,2]) : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./4-pin-to-side.story-DRx41HX9.js"), true ? __vite__mapDeps([10,1,2]) : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./5-only-fields.story-CHiYWu_O.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./6-hide-fields.story-BNTgFnjM.js"), true ? __vite__mapDeps([12,1,2]) : void 0));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./7-disable-sort.story-DGiiMXXm.js"), true ? __vite__mapDeps([13,1,2]) : void 0));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./8-format-column.story-BAYrorN5.js"), true ? __vite__mapDeps([14,1,2]) : void 0));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./1-space.story-BnucFrYf.js"), true ? __vite__mapDeps([15,1,2]) : void 0));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./2-cavern.story-BkfHnaJE.js"), true ? __vite__mapDeps([16,1,2]) : void 0));
let files = [
  { "id": "src-stories-1-basic-usage-1-data-story-vue", "path": ["1. Input data"], "filePath": "src/stories/1-basic-usage/1-data.story.vue", "story": { "id": "src-stories-1-basic-usage-1-data-story-vue", "title": "1. Input data", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-1-data-story-vue-CX2BKPMY.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-2-states-story-vue", "path": ["2. States"], "filePath": "src/stories/1-basic-usage/2-states.story.vue", "story": { "id": "src-stories-1-basic-usage-2-states-story-vue", "title": "2. States", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-2-states-story-vue-Y7ewgKeB.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-3-column-sorting-story-vue", "path": ["3. Sort columns"], "filePath": "src/stories/1-basic-usage/3-column-sorting.story.vue", "story": { "id": "src-stories-1-basic-usage-3-column-sorting-story-vue", "title": "3. Sort columns", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-3-column-sorting-story-vue-CYUREgNO.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-4-disable-search-highlight-story-vue", "path": ["4. Disable search highlight"], "filePath": "src/stories/1-basic-usage/4-disable-search highlight.story.vue", "story": { "id": "src-stories-1-basic-usage-4-disable-search-highlight-story-vue", "title": "4. Disable search highlight", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-4-disable-search-highlight-story-vue-Dp0mxbgr.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "path": ["1. Control widths"], "filePath": "src/stories/2-configure-columns/1-control-widths.story.vue", "story": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "title": "1. Control widths", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-1-control-widths-story-vue-BxKRupfQ.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "path": ["2. Control labels"], "filePath": "src/stories/2-configure-columns/2-control-labels.story.vue", "story": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "title": "2. Control labels", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-2-control-labels-story-vue-D-nPuTie.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "path": ["3. Extra columns"], "filePath": "src/stories/2-configure-columns/3-extra-columns.story.vue", "story": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "title": "3. Extra columns", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-3-extra-columns-story-vue-CXqvzV2S.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "path": ["4. Pin to the side"], "filePath": "src/stories/2-configure-columns/4-pin-to-side.story.vue", "story": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "title": "4. Pin to the side", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-4-pin-to-side-story-vue-CBni7UAo.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-5-only-fields-story-vue", "path": ["5. Only fields"], "filePath": "src/stories/2-configure-columns/5-only-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-5-only-fields-story-vue", "title": "5. Only fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-5-only-fields-story-vue-D2fs_x80.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue", "path": ["6. Hide fields"], "filePath": "src/stories/2-configure-columns/6-hide-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue", "title": "6. Hide fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-6-hide-fields-story-vue-BsFbsW-X.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue", "path": ["8. Disable sort"], "filePath": "src/stories/2-configure-columns/7-disable-sort.story.vue", "story": { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue", "title": "8. Disable sort", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-7-disable-sort-story-vue-B-zSM9oJ.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-8-format-column-story-vue", "path": ["9. Format column"], "filePath": "src/stories/2-configure-columns/8-format-column.story.vue", "story": { "id": "src-stories-2-configure-columns-8-format-column-story-vue", "title": "9. Format column", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-8-format-column-story-vue-C6STyIBt.js"), true ? [] : void 0) },
  { "id": "src-stories-3-theming-1-space-story-vue", "path": ["1. Space theme"], "filePath": "src/stories/3-theming/1-space.story.vue", "story": { "id": "src-stories-3-theming-1-space-story-vue", "title": "1. Space theme", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 12, component: Comp12, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-theming-1-space-story-vue-BBgtJ1lV.js"), true ? [] : void 0) },
  { "id": "src-stories-3-theming-2-cavern-story-vue", "path": ["2. Cavern theme"], "filePath": "src/stories/3-theming/2-cavern.story.vue", "story": { "id": "src-stories-3-theming-2-cavern-story-vue", "title": "2. Cavern theme", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 13, component: Comp13, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-theming-2-cavern-story-vue-CQ85Q3mT.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/vue-screener/vue-screener/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }], "autoPropsDisabled": true }, "supportPluginId": "vanilla", "index": 14, component: Comp14, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind-CzfCRgSl.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 14 }] }, { "group": true, "title": "Basic usage", "children": [{ "title": "1. Input data", "index": 0 }, { "title": "2. States", "index": 1 }, { "title": "3. Sort columns", "index": 2 }, { "title": "4. Disable search highlight", "index": 3 }] }, { "group": true, "title": "Configure columns", "children": [{ "title": "1. Control widths", "index": 4 }, { "title": "2. Control labels", "index": 5 }, { "title": "3. Extra columns", "index": 6 }, { "title": "4. Pin to the side", "index": 7 }, { "title": "5. Only fields", "index": 8 }, { "title": "6. Hide fields", "index": 9 }, { "title": "8. Disable sort", "index": 10 }, { "title": "9. Format column", "index": 11 }] }, { "group": true, "title": "Theming", "children": [{ "title": "1. Space theme", "index": 12 }, { "title": "2. Cavern theme", "index": 13 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-screener/vue-screener/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-screener/vue-screener/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }, { "title": "Basic usage" }, { "title": "Configure columns" }, { "title": "Theming" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "./histoire.setup.ts", "defaultStoryProps": { "autoPropsDisabled": true } };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "/vue-screener/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-CgDBpJi_.js"), true ? __vite__mapDeps([17,18,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-UNeTaJkl.js"), true ? __vite__mapDeps([19,1,18,20,21,22]) : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
function mapFile(file, existingFile) {
  let result;
  {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-BjHKTJun.js").then((n) => n.aY), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-BjHKTJun.js").then((n) => n.aZ), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
