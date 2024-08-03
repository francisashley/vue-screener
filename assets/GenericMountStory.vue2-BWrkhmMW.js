const __vite__fileDeps=["assets/1-array-of-objects.story-CG6aGdyY.js","assets/vendor-C63b5-kq.js","assets/use-screener-DemVpuV3.js","assets/data-BnlYeNVr.js","assets/2-array-of-primitives.story-QvkYNzfX.js","assets/primitives-data-BLkuaWoG.js","assets/3-array-of-mixed-objects.story-FDHxKwSX.js","assets/mix-objects-data-Ds6Uxao6.js","assets/4-no-data.story-CaNKjlCt.js","assets/5-bad-data.story-DD47Rpms.js","assets/6-link-rows.story-DY0pUNYV.js","assets/7-sort-default-sort-directions.story-CJeD7wp7.js","assets/7-sort-default-sort.story-t_3aMY7Y.js","assets/8-disable-pad-page-length.story-Bnu6aark.js","assets/9-disable-search highlight.story-BtnHzcyk.js","assets/1-control-widths.story-2cjhRCtK.js","assets/2-control-labels.story-CHMSzdS8.js","assets/3-extra-columns.story-DLupBczH.js","assets/4-pin-to-side.story-DVkZLpnt.js","assets/5-pick-fields.story-qXpz5G5q.js","assets/6-omit-fields.story-CCLlTrRU.js","assets/7-pick-omit-fields.story-Dg-sxh1o.js","assets/8-disable-sort.story-CBVsawcS.js","assets/9-format-column.story-CoVbNHcS.js","assets/1-space.story-DIlb8Z5H.js","assets/2-cavern.story-BI_DJoWT.js","assets/4-pinned-menu.story-CqKs5-Mu.js","assets/1-stress-test.story-Cnec-6Zk.js","assets/HomeView.vue-CuQXcH3D.js","assets/story-QAq0sLBZ.js","assets/StoryView.vue-wYuoeKOw.js","assets/MobileOverlay.vue2-BlyPOuAK.js","assets/BaseEmpty.vue-B8cWP5-d.js","assets/state-BWf_GL4Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
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
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./1-array-of-objects.story-CG6aGdyY.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./2-array-of-primitives.story-QvkYNzfX.js"), true ? __vite__mapDeps([4,1,2,5]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./3-array-of-mixed-objects.story-FDHxKwSX.js"), true ? __vite__mapDeps([6,1,2,7]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./4-no-data.story-CaNKjlCt.js"), true ? __vite__mapDeps([8,1,2]) : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./5-bad-data.story-DD47Rpms.js"), true ? __vite__mapDeps([9,1,2]) : void 0));
const Comp5 = defineAsyncComponent(() => __vitePreload(() => import("./6-link-rows.story-DY0pUNYV.js"), true ? __vite__mapDeps([10,1,2,3]) : void 0));
const Comp6 = defineAsyncComponent(() => __vitePreload(() => import("./7-sort-default-sort-directions.story-CJeD7wp7.js"), true ? __vite__mapDeps([11,1,2,3]) : void 0));
const Comp7 = defineAsyncComponent(() => __vitePreload(() => import("./7-sort-default-sort.story-t_3aMY7Y.js"), true ? __vite__mapDeps([12,1,2,3]) : void 0));
const Comp8 = defineAsyncComponent(() => __vitePreload(() => import("./8-disable-pad-page-length.story-Bnu6aark.js"), true ? __vite__mapDeps([13,1,2,3]) : void 0));
const Comp9 = defineAsyncComponent(() => __vitePreload(() => import("./9-disable-search highlight.story-BtnHzcyk.js"), true ? __vite__mapDeps([14,1,2,3]) : void 0));
const Comp10 = defineAsyncComponent(() => __vitePreload(() => import("./1-control-widths.story-2cjhRCtK.js"), true ? __vite__mapDeps([15,1,2,3,5,7]) : void 0));
const Comp11 = defineAsyncComponent(() => __vitePreload(() => import("./2-control-labels.story-CHMSzdS8.js"), true ? __vite__mapDeps([16,1,2,3,5,7]) : void 0));
const Comp12 = defineAsyncComponent(() => __vitePreload(() => import("./3-extra-columns.story-DLupBczH.js"), true ? __vite__mapDeps([17,1,2,3]) : void 0));
const Comp13 = defineAsyncComponent(() => __vitePreload(() => import("./4-pin-to-side.story-DVkZLpnt.js"), true ? __vite__mapDeps([18,1,2,3]) : void 0));
const Comp14 = defineAsyncComponent(() => __vitePreload(() => import("./5-pick-fields.story-qXpz5G5q.js"), true ? __vite__mapDeps([19,1,2,3]) : void 0));
const Comp15 = defineAsyncComponent(() => __vitePreload(() => import("./6-omit-fields.story-CCLlTrRU.js"), true ? __vite__mapDeps([20,1,2,3]) : void 0));
const Comp16 = defineAsyncComponent(() => __vitePreload(() => import("./7-pick-omit-fields.story-Dg-sxh1o.js"), true ? __vite__mapDeps([21,1,2,3]) : void 0));
const Comp17 = defineAsyncComponent(() => __vitePreload(() => import("./8-disable-sort.story-CBVsawcS.js"), true ? __vite__mapDeps([22,1,2,3]) : void 0));
const Comp18 = defineAsyncComponent(() => __vitePreload(() => import("./9-format-column.story-CoVbNHcS.js"), true ? __vite__mapDeps([23,1,2,3]) : void 0));
const Comp19 = defineAsyncComponent(() => __vitePreload(() => import("./1-space.story-DIlb8Z5H.js"), true ? __vite__mapDeps([24,1,2,3]) : void 0));
const Comp20 = defineAsyncComponent(() => __vitePreload(() => import("./2-cavern.story-BI_DJoWT.js"), true ? __vite__mapDeps([25,1,2,3]) : void 0));
const Comp21 = defineAsyncComponent(() => __vitePreload(() => import("./4-pinned-menu.story-CqKs5-Mu.js"), true ? __vite__mapDeps([26,1,2,3]) : void 0));
const Comp22 = defineAsyncComponent(() => __vitePreload(() => import("./1-stress-test.story-Cnec-6Zk.js"), true ? __vite__mapDeps([27,1,2]) : void 0));
let files = [
  { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue", "path": ["1. Array of objects"], "filePath": "src/stories/1-basic-usage/1-array-of-objects.story.vue", "story": { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue", "title": "1. Array of objects", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-1-array-of-objects-story-vue-B0wDQPx0.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue", "path": ["2. Array of primitives"], "filePath": "src/stories/1-basic-usage/2-array-of-primitives.story.vue", "story": { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue", "title": "2. Array of primitives", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-2-array-of-primitives-story-vue-DtN5se0L.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue", "path": ["3. Array of mixed objects"], "filePath": "src/stories/1-basic-usage/3-array-of-mixed-objects.story.vue", "story": { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue", "title": "3. Array of mixed objects", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue-Cvt05O9S.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-4-no-data-story-vue", "path": ["4. No data"], "filePath": "src/stories/1-basic-usage/4-no-data.story.vue", "story": { "id": "src-stories-1-basic-usage-4-no-data-story-vue", "title": "4. No data", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-4-no-data-story-vue-U3xv9F30.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-5-bad-data-story-vue", "path": ["5. Bad data"], "filePath": "src/stories/1-basic-usage/5-bad-data.story.vue", "story": { "id": "src-stories-1-basic-usage-5-bad-data-story-vue", "title": "5. Bad data", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-5-bad-data-story-vue-jIZdThTz.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-6-link-rows-story-vue", "path": ["6. Link rows"], "filePath": "src/stories/1-basic-usage/6-link-rows.story.vue", "story": { "id": "src-stories-1-basic-usage-6-link-rows-story-vue", "title": "6. Link rows", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-6-link-rows-story-vue-BGSC2yJL.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-7-sort-default-sort-directions-story-vue", "path": ["7. Sorting ", " Default sort directions"], "filePath": "src/stories/1-basic-usage/7-sort-default-sort-directions.story.vue", "story": { "id": "src-stories-1-basic-usage-7-sort-default-sort-directions-story-vue", "title": " Default sort directions", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-7-sort-default-sort-directions-story-vue-DnBCZMJQ.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-7-sort-default-sort-story-vue", "path": ["7. Sorting ", " Default sort"], "filePath": "src/stories/1-basic-usage/7-sort-default-sort.story.vue", "story": { "id": "src-stories-1-basic-usage-7-sort-default-sort-story-vue", "title": " Default sort", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-7-sort-default-sort-story-vue-CCEk598T.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-8-disable-pad-page-length-story-vue", "path": ["8. Disable pad page length"], "filePath": "src/stories/1-basic-usage/8-disable-pad-page-length.story.vue", "story": { "id": "src-stories-1-basic-usage-8-disable-pad-page-length-story-vue", "title": "8. Disable pad page length", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-8-disable-pad-page-length-story-vue-5KpUcOlU.js"), true ? [] : void 0) },
  { "id": "src-stories-1-basic-usage-9-disable-search-highlight-story-vue", "path": ["9. Disable search highlight"], "filePath": "src/stories/1-basic-usage/9-disable-search highlight.story.vue", "story": { "id": "src-stories-1-basic-usage-9-disable-search-highlight-story-vue", "title": "9. Disable search highlight", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 9, component: Comp9, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-9-disable-search-highlight-story-vue-Bm1H9vu-.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "path": ["1. Control widths"], "filePath": "src/stories/2-configure-columns/1-control-widths.story.vue", "story": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "title": "1. Control widths", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 10, component: Comp10, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-1-control-widths-story-vue-BJxZzvhI.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "path": ["2. Control labels"], "filePath": "src/stories/2-configure-columns/2-control-labels.story.vue", "story": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "title": "2. Control labels", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 11, component: Comp11, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-2-control-labels-story-vue-CkSGxma9.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "path": ["3. Extra columns"], "filePath": "src/stories/2-configure-columns/3-extra-columns.story.vue", "story": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "title": "3. Extra columns", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 12, component: Comp12, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-3-extra-columns-story-vue-DnApepHp.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "path": ["4. Pin to the side"], "filePath": "src/stories/2-configure-columns/4-pin-to-side.story.vue", "story": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "title": "4. Pin to the side", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 13, component: Comp13, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-4-pin-to-side-story-vue-q5VuhFie.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-5-pick-fields-story-vue", "path": ["5. Pick fields"], "filePath": "src/stories/2-configure-columns/5-pick-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-5-pick-fields-story-vue", "title": "5. Pick fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 14, component: Comp14, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-5-pick-fields-story-vue-BoZgbP26.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-6-omit-fields-story-vue", "path": ["6. Omit fields"], "filePath": "src/stories/2-configure-columns/6-omit-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-6-omit-fields-story-vue", "title": "6. Omit fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 15, component: Comp15, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-6-omit-fields-story-vue-CnqWFlrf.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-7-pick-omit-fields-story-vue", "path": ["7. Pick + omit fields"], "filePath": "src/stories/2-configure-columns/7-pick-omit-fields.story.vue", "story": { "id": "src-stories-2-configure-columns-7-pick-omit-fields-story-vue", "title": "7. Pick + omit fields", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 16, component: Comp16, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-7-pick-omit-fields-story-vue-B2GuuRq4.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-8-disable-sort-story-vue", "path": ["8. Disable sort"], "filePath": "src/stories/2-configure-columns/8-disable-sort.story.vue", "story": { "id": "src-stories-2-configure-columns-8-disable-sort-story-vue", "title": "8. Disable sort", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 17, component: Comp17, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-8-disable-sort-story-vue-BqttOiuq.js"), true ? [] : void 0) },
  { "id": "src-stories-2-configure-columns-9-format-column-story-vue", "path": ["9. Format column"], "filePath": "src/stories/2-configure-columns/9-format-column.story.vue", "story": { "id": "src-stories-2-configure-columns-9-format-column-story-vue", "title": "9. Format column", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 18, component: Comp18, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-configure-columns-9-format-column-story-vue-TAo67Mq7.js"), true ? [] : void 0) },
  { "id": "src-stories-3-theming-1-space-story-vue", "path": ["1. Space theme"], "filePath": "src/stories/3-theming/1-space.story.vue", "story": { "id": "src-stories-3-theming-1-space-story-vue", "title": "1. Space theme", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 19, component: Comp19, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-theming-1-space-story-vue-DX8G68Mo.js"), true ? [] : void 0) },
  { "id": "src-stories-3-theming-2-cavern-story-vue", "path": ["2. Cavern theme"], "filePath": "src/stories/3-theming/2-cavern.story.vue", "story": { "id": "src-stories-3-theming-2-cavern-story-vue", "title": "2. Cavern theme", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 20, component: Comp20, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-theming-2-cavern-story-vue-DwWR_7t6.js"), true ? [] : void 0) },
  { "id": "src-stories-4-recipes-4-pinned-menu-story-vue", "path": ["1. Pinned menu"], "filePath": "src/stories/4-recipes/4-pinned-menu.story.vue", "story": { "id": "src-stories-4-recipes-4-pinned-menu-story-vue", "title": "1. Pinned menu", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 21, component: Comp21, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-4-recipes-4-pinned-menu-story-vue-DYWZUf9Z.js"), true ? [] : void 0) },
  { "id": "src-stories-5-stress-test-1-stress-test-story-vue", "path": ["1. Stress Test"], "filePath": "src/stories/5-stress-test/1-stress-test.story.vue", "story": { "id": "src-stories-5-stress-test-1-stress-test-story-vue", "title": "1. Stress Test", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }], "autoPropsDisabled": true }, "supportPluginId": "vue3", "index": 22, component: Comp22, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-5-stress-test-1-stress-test-story-vue-xzJnSMqN.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "title": "Basic usage", "children": [{ "title": "1. Array of objects", "index": 0 }, { "title": "2. Array of primitives", "index": 1 }, { "title": "3. Array of mixed objects", "index": 2 }, { "title": "4. No data", "index": 3 }, { "title": "5. Bad data", "index": 4 }, { "title": "6. Link rows", "index": 5 }, { "title": "7. Sorting ", "children": [{ "title": " Default sort", "index": 7 }, { "title": " Default sort directions", "index": 6 }] }, { "title": "8. Disable pad page length", "index": 8 }, { "title": "9. Disable search highlight", "index": 9 }] }, { "group": true, "title": "Configure columns", "children": [{ "title": "1. Control widths", "index": 10 }, { "title": "2. Control labels", "index": 11 }, { "title": "3. Extra columns", "index": 12 }, { "title": "4. Pin to the side", "index": 13 }, { "title": "5. Pick fields", "index": 14 }, { "title": "6. Omit fields", "index": 15 }, { "title": "7. Pick + omit fields", "index": 16 }, { "title": "8. Disable sort", "index": 17 }, { "title": "9. Format column", "index": 18 }] }, { "group": true, "title": "Theming", "children": [{ "title": "1. Space theme", "index": 19 }, { "title": "2. Cavern theme", "index": 20 }] }, { "group": true, "title": "Stress test", "children": [] }, { "title": "1. Pinned menu", "index": 21 }, { "title": "1. Stress Test", "index": 22 }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-CuQXcH3D.js"), true ? __vite__mapDeps([28,29,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-wYuoeKOw.js"), true ? __vite__mapDeps([30,1,29,31,32,33]) : void 0)
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
