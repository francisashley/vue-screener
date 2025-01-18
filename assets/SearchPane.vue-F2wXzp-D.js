const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-CcsFUGep.js","assets/vendor-B4nEsnDH.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./GenericMountStory.vue2-D1QwPZrT.js";
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, a0 as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ad as toRefs, ae as useRouter, w as withCtx, Y as markRaw, aY as useFocus, aZ as refDebounced, y as withDirectives, a7 as vModelText, a6 as withModifiers, a_ as flexsearch_bundleExports } from "./vendor-B4nEsnDH.js";
import { u as useStoryStore } from "./story-DDrYyStd.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-8wvow-xP.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-CSOrRAXU.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-pzCiZ-IX.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2114f510"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "ddaae392": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d75a2748"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"1":[0,1,12,13,30,31],"2":[2,3,14,15,32,33],"3":[4,5,16,17],"4":[6,7,18,19],"5":[8,9,20,21],"6":[10,11,22,23],"8":[24,25,26,27],"9":[28,29],"t":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"ta":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"tal":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talf":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfe":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfem":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"talfemt":[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]},{"e":[0,1,16,17,22,23,49],"em":[0,1],"emp":[0,1],"empo":[0,1],"empot":[0,1],"s":[2,3,4,5,10,11,30,31],"st":[2,3],"sta":[2,3],"stat":[2,3],"state":[2,3],"states":[2,3],"so":[4,5],"sor":[4,5],"sort":[4,5],"t":[6,7,8,9,24,25],"te":[6,7,8,9,24,25,36],"tes":[6,7,8,9,24,25,36],"tesa":[6,7,8,9,24,25],"tesap":[6,7,8,9,24,25],"tesapl":[6,7,8,9,24,25],"tesaple":[6,7,8,9,24,25],"sl":[10,11],"slo":[10,11],"slot":[10,11],"slots":[10,11],"k":[12,13,14,15,28,29,32,33],"ko":[12,13,14,15,28,29],"kom":[12,13,14,15],"komt":[12,13,14,15],"komtr":[12,13,14,15],"komtro":[12,13,14,15],"komtrol":[12,13,14,15],"es":[16,17],"est":[16,17],"estr":[16,17],"estra":[16,17],"p":[18,19,35,37,38,46,47],"pe":[18,19],"pem":[18,19],"o":[20,21],"om":[20,21],"oml":[20,21],"omle":[20,21],"et":[22,23],"ete":[22,23],"f":[26,27,40,41,42,48,50],"fo":[26,27,40,41,42,50],"for":[26,27],"form":[26,27],"forma":[26,27],"format":[26,27],"kol":[28,29],"kolo":[28,29],"kolom":[28,29],"sp":[30,31],"spa":[30,31],"spak":[30,31],"spake":[30,31],"ka":[32,33],"kaf":[32,33],"kafe":[32,33],"kafer":[32,33],"kaferm":[32,33],"pa":[35,38],"pak":[35],"pakr":[35],"pakro":[35],"pakrom":[35],"pakromt":[35],"test":[36],"po":[37,46,47],"por":[37,46,47],"port":[37,46,47],"porte":[37,46,47],"porter":[37,46,47],"pat":[38],"pate":[38],"patem":[38],"patemk":[38],"m":[39],"ma":[39],"mar":[39],"mark":[39],"marke":[39],"markem":[39],"fom":[40,41,42],"fomt":[40,41,42],"l":[43,44],"le":[43,44],"let":[43],"lete":[43],"leter":[43],"lem":[44],"leme":[44],"tr":[45],"tro":[45],"trop":[45],"fe":[48],"fet":[48],"ek":[49],"ekt":[49],"fol":[50]},{"t":[0,1,3,11,18,19,28,29,30,31,32,33],"ta":[0,1,8,9],"tat":[0,1,8,9],"tata":[0,1,8,9],"te":[3,11,30,31,32,33],"tef":[3,11],"tefa":[3,11],"tefao":[3,11],"tefaol":[3,11],"tefaolt":[3,11],"k":[4,5,16,17,26,27,35,36,37,50],"ko":[4,5,16,17,26,27,35,36,37,50],"kol":[4,5,16,17,26,27,35,36,37],"kolo":[4,5,16,17,26,27,35,36,37],"kolom":[4,5,16,17,26,27],"koloms":[4,5,16,17],"s":[6,7,24,25,40,43,45],"se":[6,7,40],"sea":[6,7],"sear":[6,7],"seark":[6,7],"f":[12,13,20,21,22,23,47],"fe":[12,13,20,21,22,23,41,47],"fet":[12,13,47],"fets":[12,13],"l":[14,15],"la":[14,15],"lap":[14,15],"lape":[14,15],"lapel":[14,15],"lapels":[14,15],"to":[18,19,28,29],"fel":[20,21,22,23],"felt":[20,21,22,23],"felts":[20,21,22,23],"so":[24,25],"sor":[24,25],"sort":[24,25],"tol":[28,29],"tolt":[28,29],"tolte":[28,29],"toltep":[28,29],"tolteps":[28,29],"tem":[30,31,32,33],"teme":[30,31,32,33],"kolor":[35,36,37],"ses":[40],"sese":[40],"fek":[41],"fekt":[41],"fa":[42],"fam":[42],"fame":[42],"famel":[42],"famele":[42],"sp":[43],"spa":[43],"spak":[43],"spake":[43],"spakem":[43],"spakemk":[43],"e":[44],"ek":[44],"ekt":[44],"sa":[45],"sat":[45],"sato":[45],"satof":[45],"r":[46],"ra":[46],"rat":[46],"rate":[46],"rateo":[46],"rateos":[46],"kom":[50],"komf":[50],"komfe":[50],"komfek":[50]},{"te":[1,5,13,15,17,18,19,21,23,27,29],"tef":[1,5,13,15,17,21,23,25,27,29,31,33],"tefa":[1,5,13,15,17,21,23,25,27,29,31,33],"tefao":[1,5,13,15,17,21,23,25,27,29,31,33],"tefaol":[1,5,13,15,17,21,23,25,27,29,31,33],"tefaolt":[1,5,13,15,17,21,23,25,27,29,31,33],"t":[5,13,15,17,21,23,27],"e":[6,7],"ek":[6,7],"ekl":[6,7],"ekle":[6,7],"eklek":[6,7],"eklekt":[6,7],"tep":[8,9],"tepe":[8,9]},{"tef":[7],"tefa":[7],"tefao":[7],"tefaol":[7],"tefaolt":[7],"e":[8,9],"ek":[8,9],"ekl":[8,9],"ekle":[8,9],"eklek":[8,9],"eklekt":[8,9],"eklekte":[8,9],"eklektem":[8,9],"eklektemk":[8,9],"s":[18,19],"se":[18,19],"set":[18,19],"sete":[18,19]},{"tef":[9,19],"tefa":[9,19],"tefao":[9,19],"tefaol":[9,19],"tefaolt":[9,19]},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-stories-1-basic-usage-1-data-story-vue", "kind": "story" }, "1": { "id": "src-stories-1-basic-usage-1-data-story-vue:_default", "kind": "variant" }, "2": { "id": "src-stories-1-basic-usage-2-states-story-vue", "kind": "story" }, "3": { "id": "src-stories-1-basic-usage-2-states-story-vue:_default", "kind": "variant" }, "4": { "id": "src-stories-1-basic-usage-3-column-sorting-story-vue", "kind": "story" }, "5": { "id": "src-stories-1-basic-usage-3-column-sorting-story-vue:_default", "kind": "variant" }, "6": { "id": "src-stories-1-basic-usage-4-disable-search-highlight-story-vue", "kind": "story" }, "7": { "id": "src-stories-1-basic-usage-4-disable-search-highlight-story-vue:_default", "kind": "variant" }, "8": { "id": "src-stories-1-basic-usage-5-disable-data-type-highlighting-story-vue", "kind": "story" }, "9": { "id": "src-stories-1-basic-usage-5-disable-data-type-highlighting-story-vue:_default", "kind": "variant" }, "10": { "id": "src-stories-1-basic-usage-6-slots-story-vue", "kind": "story" }, "11": { "id": "src-stories-1-basic-usage-6-slots-story-vue:_default", "kind": "variant" }, "12": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "kind": "story" }, "13": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue:_default", "kind": "variant" }, "14": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "kind": "story" }, "15": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue:_default", "kind": "variant" }, "16": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "kind": "story" }, "17": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue:_default", "kind": "variant" }, "18": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "kind": "story" }, "19": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue:_default", "kind": "variant" }, "20": { "id": "src-stories-2-configure-columns-5-only-fields-story-vue", "kind": "story" }, "21": { "id": "src-stories-2-configure-columns-5-only-fields-story-vue:_default", "kind": "variant" }, "22": { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue", "kind": "story" }, "23": { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue:_default", "kind": "variant" }, "24": { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue", "kind": "story" }, "25": { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue:_default", "kind": "variant" }, "26": { "id": "src-stories-2-configure-columns-8-format-column-story-vue", "kind": "story" }, "27": { "id": "src-stories-2-configure-columns-8-format-column-story-vue:_default", "kind": "variant" }, "28": { "id": "src-stories-2-configure-columns-9-column-tooltips-story-vue", "kind": "story" }, "29": { "id": "src-stories-2-configure-columns-9-column-tooltips-story-vue:_default", "kind": "variant" }, "30": { "id": "src-stories-3-theming-1-space-story-vue", "kind": "story" }, "31": { "id": "src-stories-3-theming-1-space-story-vue:_default", "kind": "variant" }, "32": { "id": "src-stories-3-theming-2-cavern-story-vue", "kind": "story" }, "33": { "id": "src-stories-3-theming-2-cavern-story-vue:_default", "kind": "variant" }, "34": { "id": "tailwind", "kind": "story" }, "35": { "id": "tailwind:background-color", "kind": "variant" }, "36": { "id": "tailwind:text-color", "kind": "variant" }, "37": { "id": "tailwind:border-color", "kind": "variant" }, "38": { "id": "tailwind:padding", "kind": "variant" }, "39": { "id": "tailwind:margin", "kind": "variant" }, "40": { "id": "tailwind:font-size", "kind": "variant" }, "41": { "id": "tailwind:font-weight", "kind": "variant" }, "42": { "id": "tailwind:font-family", "kind": "variant" }, "43": { "id": "tailwind:letter-spacing", "kind": "variant" }, "44": { "id": "tailwind:line-height", "kind": "variant" }, "45": { "id": "tailwind:drop-shadow", "kind": "variant" }, "46": { "id": "tailwind:border-radius", "kind": "variant" }, "47": { "id": "tailwind:border-width", "kind": "variant" }, "48": { "id": "tailwind:width", "kind": "variant" }, "49": { "id": "tailwind:height", "kind": "variant" }, "50": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-CcsFUGep.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
