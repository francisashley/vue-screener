const __vite__fileDeps=["assets/1-array-of-objects.story-C_nlAJEs.js","assets/vendor-C63b5-kq.js","assets/use-screener-BLtURJGO.js","assets/data-BnlYeNVr.js","assets/2-array-of-primitives.story-LkcYdkxW.js","assets/primitives-data-BLkuaWoG.js","assets/3-array-of-mixed-objects.story-DlIeqkgV.js","assets/mix-objects-data-Ds6Uxao6.js","assets/4-no-data.story-DBmIy6eP.js","assets/5-bad-data.story-D0eKOkz8.js","assets/6-link-rows.story-CGeAhI4c.js","assets/1-control-widths.story-iV7-_bZn.js","assets/2-control-labels.story-BKHMk25O.js","assets/3-extra-columns.story-BKBh-jp2.js","assets/4-pin-to-side.story-CxKVJ61c.js","assets/5-pick-fields.story-Cg-Xavl1.js","assets/6-omit-fields.story-pF3_omKl.js","assets/7-pick-omit-fields.story-ClpVuGyc.js","assets/8-disable-sort.story-CpYXHNIu.js","assets/9-format-column.story-CeioWA-r.js","assets/3-theming.story-CuWh9vUu.js","assets/4-stress-test.story-BDJlHUOL.js","assets/HomeView.vue-DW_CIOK5.js","assets/story-DVGpR6fd.js","assets/StoryView.vue-CP-mN7-a.js","assets/MobileOverlay.vue2-BlyPOuAK.js","assets/BaseEmpty.vue-B8cWP5-d.js","assets/state-CV3sGtVS.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-C63b5-kq.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/vue-screener/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
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
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./1-array-of-objects.story-C_nlAJEs.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./2-array-of-primitives.story-LkcYdkxW.js"), true ? __vite__mapDeps([4,1,2,5]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./3-array-of-mixed-objects.story-DlIeqkgV.js"), true ? __vite__mapDeps([6,1,2,7]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./4-no-data.story-DBmIy6eP.js"), true ? __vite__mapDeps([8,1,2]) : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./5-bad-data.story-D0eKOkz8.js"), true ? __vite__mapDeps([9,1,2]) : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./6-link-rows.story-CGeAhI4c.js"), true ? __vite__mapDeps([10,1,2,3]) : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./1-control-widths.story-iV7-_bZn.js"), true ? __vite__mapDeps([11,1,2,3,5,7]) : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./2-control-labels.story-BKHMk25O.js"), true ? __vite__mapDeps([12,1,2,3,5,7]) : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./3-extra-columns.story-BKBh-jp2.js"), true ? __vite__mapDeps([13,1,2,3]) : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./4-pin-to-side.story-CxKVJ61c.js"), true ? __vite__mapDeps([14,1,2,3]) : void 0));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./5-pick-fields.story-Cg-Xavl1.js"), true ? __vite__mapDeps([15,1,2,3]) : void 0));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./6-omit-fields.story-pF3_omKl.js"), true ? __vite__mapDeps([16,1,2,3]) : void 0));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./7-pick-omit-fields.story-ClpVuGyc.js"), true ? __vite__mapDeps([17,1,2,3]) : void 0));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./8-disable-sort.story-CpYXHNIu.js"), true ? __vite__mapDeps([18,1,2,3]) : void 0));
const Comp14 = defineAsyncComponent(() => __vitePreload(() => import("./9-format-column.story-CeioWA-r.js"), true ? __vite__mapDeps([19,1,2,3]) : void 0));
const Comp15 = defineAsyncComponent(() => __vitePreload(() => import("./3-theming.story-CuWh9vUu.js"), true ? __vite__mapDeps([20,1,2,3]) : void 0));
const Comp16 = defineAsyncComponent(() => __vitePreload(() => import("./4-stress-test.story-BDJlHUOL.js"), true ? __vite__mapDeps([21,1,2]) : void 0));
let files = [
  { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue", "path": ["1. Array of objects"], "filePath": "src/stories/1-basic-usage/1-array-of-objects.story.vue", "story": { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue", "title": "1. Array of objects", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-1-array-of-objects-story-vue-BhI0B5XX.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue", "path": ["2. Array of primitives"], "filePath": "src/stories/1-basic-usage/2-array-of-primitives.story.vue", "story": { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue", "title": "2. Array of primitives", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-2-array-of-primitives-story-vue-B4qq8w_j.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue", "path": ["3. Array of mixed objects"], "filePath": "src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue", "story": { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue", "title": "3. Array of mixed objects", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue-CVJrod1s.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-4-no-data-story-vue", "path": ["4. No data"], "filePath": "src/stories/1-basic-usage/4-no-data.story.vue", "story": { "id": "src-stories-1-basic-usage-4-no-data-story-vue", "title": "4. No data", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-4-no-data-story-vue-BTxMcqvE.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-5-bad-data-story-vue", "path": ["5. Bad data"], "filePath": "src/stories/1-basic-usage/5-bad-data.story.vue", "story": { "id": "src-stories-1-basic-usage-5-bad-data-story-vue", "title": "5. Bad data", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-5-bad-data-story-vue-CsC9nm4B.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-6-link-rows-story-vue", "path": ["6. Link rows"], "filePath": "src/stories/1-basic-usage/6-link-rows.story.vue", "story": { "id": "src-stories-1-basic-usage-6-link-rows-story-vue", "title": "6. Link rows", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-6-link-rows-story-vue-Cm9ymk2U.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "path": ["1. Control widths"], "filePath": "src/stories/2-configure-columns/1-control-widths.story.vue", "story": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "title": "1. Control widths", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-1-control-widths-story-vue-D5flWHaw.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "path": ["2. Control labels"], "filePath": "src/stories/2-configure-columns/2-control-labels.story.vue", "story": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "title": "2. Control labels", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-2-control-labels-story-vue-vrlsqL6z.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "path": ["3. Extra columns"], "filePath": "src/stories/2-configure-columns/3-extra-columns.story.vue", "story": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "title": "3. Extra columns", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-3-extra-columns-story-vue-D_enKtlI.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "path": ["4. Pin to the side"], "filePath": "src/stories/2-configure-columns/4-pin-to-side.story.vue", "story": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "title": "4. Pin to the side", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-4-pin-to-side-story-vue-BcXujpv2.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-5-pick-fields-story-vue", "path": ["5. Pick fields"], "filePath": "src/stories/2-configure-columns/5-pick-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-5-pick-fields-story-vue", "title": "5. Pick fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-5-pick-fields-story-vue-D5JOESNQ.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-6-omit-fields-story-vue", "path": ["6. Omit fields"], "filePath": "src/stories/2-configure-columns/6-omit-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-6-omit-fields-story-vue", "title": "6. Omit fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-6-omit-fields-story-vue-PRSVf_dE.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-7-pick-omit-fields-story-vue", "path": ["7. Pick + omit fields"], "filePath": "src/stories/2-configure-columns/7-pick-omit-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-7-pick-omit-fields-story-vue", "title": "7. Pick + omit fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 12, component: Comp12, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-7-pick-omit-fields-story-vue-x0NDYHER.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-8-disable-sort-story-vue", "path": ["8. Disable sort"], "filePath": "src/stories/2-configure-columns/8-disable-sort.story.vue", "story": { "id": "src-stories-2-configure-columns-8-disable-sort-story-vue", "title": "8. Disable sort", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 13, component: Comp13, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-8-disable-sort-story-vue-DMNzc_8M.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-9-format-column-story-vue", "path": ["9. Format column"], "filePath": "src/stories/2-configure-columns/9-format-column.story.vue", "story": { "id": "src-stories-2-configure-columns-9-format-column-story-vue", "title": "9. Format column", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 14, component: Comp14, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-9-format-column-story-vue-Bxd1BHy_.js"), true ? [] : void 0) },
  { "id": "src-stories-3-theming-3-theming-story-vue", "path": ["1. Theming"], "filePath": "src/stories/3-theming/3-theming.story.vue", "story": { "id": "src-stories-3-theming-3-theming-story-vue", "title": "1. Theming", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 15, component: Comp15, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-theming-3-theming-story-vue-BXMy0_3q.js"), true ? [] : void 0) },
  { "id": "src-stories-4-stress-test-4-stress-test-story-vue", "path": ["1. Stress Test"], "filePath": "src/stories/4-stress-test/4-stress-test.story.vue", "story": { "id": "src-stories-4-stress-test-4-stress-test-story-vue", "title": "1. Stress Test", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 16, component: Comp16, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-4-stress-test-4-stress-test-story-vue-C_k9cAPN.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "title": "Basic usage", "children": [{ "title": "1. Array of objects", "index": 0 }, { "title": "2. Array of primitives", "index": 1 }, { "title": "3. Array of mixed objects", "index": 2 }, { "title": "4. No data", "index": 3 }, { "title": "5. Bad data", "index": 4 }, { "title": "6. Link rows", "index": 5 }] }, { "group": true, "title": "Configure columns", "children": [{ "title": "1. Control widths", "index": 6 }, { "title": "2. Control labels", "index": 7 }, { "title": "3. Extra columns", "index": 8 }, { "title": "4. Pin to the side", "index": 9 }, { "title": "5. Pick fields", "index": 10 }, { "title": "6. Omit fields", "index": 11 }, { "title": "7. Pick + omit fields", "index": 12 }, { "title": "8. Disable sort", "index": 13 }, { "title": "9. Format column", "index": 14 }] }, { "group": true, "title": "Theming", "children": [{ "title": "1. Theming", "index": 15 }] }, { "group": true, "title": "Stress test", "children": [{ "title": "1. Stress Test", "index": 16 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-screener/vue-screener/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-screener/vue-screener/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "title": "Basic usage" }, { "title": "Configure columns" }, { "title": "Theming" }, { "title": "Stress test" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "defaultStoryProps": { "autoPropsDisabled": true } };
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
      component: () => __vitePreload(() => import("./HomeView.vue-DW_CIOK5.js"), true ? __vite__mapDeps([22,23,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-CP-mN7-a.js"), true ? __vite__mapDeps([24,1,23,25,26,27]) : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-C63b5-kq.js").then((n) => n.aT), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-C63b5-kq.js").then((n) => n.aU), true ? [] : void 0)
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
