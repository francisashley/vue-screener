const __vite__fileDeps=["assets/1-basic-usage.story-aOvvgBTd.js","assets/vendor-iGRY5S0P.js","assets/VueScreener-BYUygs3F.js","assets/data-BnlYeNVr.js","assets/2-sticky-actions.story-DAZfmvQw.js","assets/3-custom-cells.story-Ddo27zOX.js","assets/4-stress-test.story-BXWsn-Cx.js","assets/HomeView.vue-CIru2RYR.js","assets/story-Dn2fAmML.js","assets/StoryView.vue-CsG79BHd.js","assets/MobileOverlay.vue2-Bnl9Xd-e.js","assets/BaseEmpty.vue-BhJNS91J.js","assets/state-CYvtaa3m.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { Q as defineAsyncComponent, R as createRouter, S as createWebHistory, U as createWebHashHistory, V as useDark, W as useToggle, k as watch, X as markRaw, E as reactive, d as defineComponent, r as ref, Y as watchEffect, o as openBlock, q as createBlock, Z as mergeProps, _ as resolveDynamicComponent, h as createCommentVNode } from "./vendor-iGRY5S0P.js";
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
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./1-basic-usage.story-aOvvgBTd.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./2-sticky-actions.story-DAZfmvQw.js"), true ? __vite__mapDeps([4,1,2,3]) : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./3-custom-cells.story-Ddo27zOX.js"), true ? __vite__mapDeps([5,1,2,3]) : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./4-stress-test.story-BXWsn-Cx.js"), true ? __vite__mapDeps([6,1,2]) : void 0));
let files = [
  { "id": "src-stories-1-basic-usage-story-vue", "path": ["1) Basic Usage"], "filePath": "src/stories/1-basic-usage.story.vue", "story": { "id": "src-stories-1-basic-usage-story-vue", "title": "1) Basic Usage", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-stories-1-basic-usage-story-vue-0", "title": "Array of objects" }, { "id": "src-stories-1-basic-usage-story-vue-1", "title": "Array of primitives" }, { "id": "src-stories-1-basic-usage-story-vue-2", "title": "Array of mixed objects" }, { "id": "src-stories-1-basic-usage-story-vue-3", "title": "No data" }, { "id": "src-stories-1-basic-usage-story-vue-4", "title": "Custom title" }, { "id": "src-stories-1-basic-usage-story-vue-5", "title": "Hide header" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-1-basic-usage-story-vue-KM2p3ykt.js"), true ? [] : void 0) },
  { "id": "src-stories-2-sticky-actions-story-vue", "path": ["2) Sticky Actions"], "filePath": "src/stories/2-sticky-actions.story.vue", "story": { "id": "src-stories-2-sticky-actions-story-vue", "title": "2) Sticky Actions", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-stories-2-sticky-actions-story-vue-0", "title": "default" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-2-sticky-actions-story-vue-CcLgnDhS.js"), true ? [] : void 0) },
  { "id": "src-stories-3-custom-cells-story-vue", "path": ["3) Custom Cells"], "filePath": "src/stories/3-custom-cells.story.vue", "story": { "id": "src-stories-3-custom-cells-story-vue", "title": "3) Custom Cells", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-stories-3-custom-cells-story-vue-0", "title": "default" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-3-custom-cells-story-vue-BUXXnDFE.js"), true ? [] : void 0) },
  { "id": "src-stories-4-stress-test-story-vue", "path": ["4) Stress Test"], "filePath": "src/stories/4-stress-test.story.vue", "story": { "id": "src-stories-4-stress-test-story-vue", "title": "4) Stress Test", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-stories-4-stress-test-story-vue-0", "title": "default" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-4-stress-test-story-vue-Bit4XRil.js"), true ? [] : void 0) }
];
let tree = [{ "title": "1) Basic Usage", "index": 0 }, { "title": "2) Sticky Actions", "index": 1 }, { "title": "3) Custom Cells", "index": 2 }, { "title": "4) Stress Test", "index": 3 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-screener/vue-screener/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-screener/vue-screener/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [] };
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
      component: () => __vitePreload(() => import("./HomeView.vue-CIru2RYR.js"), true ? __vite__mapDeps([7,8,1]) : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-CsG79BHd.js"), true ? __vite__mapDeps([9,1,8,10,11,12]) : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-iGRY5S0P.js").then((n) => n.aW), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-iGRY5S0P.js").then((n) => n.aX), true ? [] : void 0)
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
