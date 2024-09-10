const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-docs-data-BJJTfTK4.js","assets/vendor-DkvGWHs0.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./GenericMountStory.vue2-CNC0PvBb.js";
import { r as ref, k as watch, c as computed, d as defineComponent, o as openBlock, b as createElementBlock, a0 as renderSlot, n as normalizeClass, m as withKeys, q as createBlock, g as unref, I as Icon, e as createVNode, f as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, ad as toRefs, ae as useRouter, w as withCtx, Y as markRaw, aV as useFocus, aW as refDebounced, y as withDirectives, a7 as vModelText, a6 as withModifiers, aX as flexsearch_bundleExports } from "./vendor-DkvGWHs0.js";
import { u as useStoryStore } from "./story-BZcoFQd1.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-dqG6S8w-.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-Be91bkaZ.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-ROA-IAJJ.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"1":[0,1,20,21,36,37,40,41],"2":[2,3,22,23,38,39],"3":[4,5,24,25],"4":[6,7,26,27],"5":[8,9,28,29],"6":[10,11,30,31],"8":[16,17,32,33],"9":[18,19,34,35],"t":[12,13,14,15,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"te":[12,13,14,15],"tef":[12,13,14,15],"tefa":[12,13,14,15],"tefao":[12,13,14,15],"tefaol":[12,13,14,15],"tefaolt":[12,13,14,15],"ta":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"tal":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"talf":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"talfe":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"talfem":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"talfemt":[42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]},{"a":[0,1,2,3,4,5],"ar":[0,1,2,3,4,5],"ara":[0,1,2,3,4,5],"l":[6,7,51,52],"lo":[6,7],"loa":[6,7],"loat":[6,7],"loate":[6,7],"loatem":[6,7],"loatemk":[6,7],"m":[8,9,47],"mo":[8,9],"p":[10,11,43,45,46,54,55],"pa":[10,11,43,46],"pat":[10,11,46],"s":[12,13,14,15,26,27,36,37,40,41],"so":[12,13,14,15],"sor":[12,13,14,15],"sort":[12,13,14,15],"t":[16,17,32,33],"te":[16,17,32,33,44],"tes":[16,17,32,33,44],"tesa":[16,17,32,33],"tesap":[16,17,32,33],"tesapl":[16,17,32,33],"tesaple":[16,17,32,33],"e":[18,19,24,25,30,31,57],"et":[18,19,30,31],"ete":[18,19,30,31],"etet":[18,19],"eteta":[18,19],"etetap":[18,19],"etetapl":[18,19],"etetaple":[18,19],"k":[20,21,22,23,38,39],"ko":[20,21,22,23],"kom":[20,21,22,23],"komt":[20,21,22,23],"komtr":[20,21,22,23],"komtro":[20,21,22,23],"komtrol":[20,21,22,23],"es":[24,25],"est":[24,25],"estr":[24,25],"estra":[24,25],"st":[26,27,40,41],"ste":[26,27],"stek":[26,27],"o":[28,29],"om":[28,29],"oml":[28,29],"omle":[28,29],"f":[34,35,48,49,50,56,58],"fo":[34,35,48,49,50,58],"for":[34,35],"form":[34,35],"forma":[34,35],"format":[34,35],"sp":[36,37],"spa":[36,37],"spak":[36,37],"spake":[36,37],"ka":[38,39],"kaf":[38,39],"kafe":[38,39],"kafer":[38,39],"kaferm":[38,39],"str":[40,41],"stre":[40,41],"stres":[40,41],"pak":[43],"pakr":[43],"pakro":[43],"pakrom":[43],"pakromt":[43],"test":[44],"po":[45,54,55],"por":[45,54,55],"port":[45,54,55],"porte":[45,54,55],"porter":[45,54,55],"pate":[46],"patem":[46],"patemk":[46],"ma":[47],"mar":[47],"mark":[47],"marke":[47],"markem":[47],"fom":[48,49,50],"fomt":[48,49,50],"le":[51,52],"let":[51],"lete":[51],"leter":[51],"lem":[52],"leme":[52],"tr":[53],"tro":[53],"trop":[53],"fe":[56],"fet":[56],"ek":[57],"ekt":[57],"fol":[58]},{"o":[0,1,2,3,4,5],"of":[0,1,2,3,4,5],"t":[7,8,9,10,11,19,26,27,36,37,38,39,40,41],"te":[7,19,36,37,38,39,40,41],"tef":[7,19],"tefa":[7,19],"tefao":[7,19],"tefaol":[7,19],"tefaolt":[7,19],"ta":[8,9,10,11],"tat":[8,9,10,11],"tata":[8,9,10,11],"ter":[12,13],"tere":[12,13],"terek":[12,13],"terekt":[12,13],"terekte":[12,13],"terekteo":[12,13],"terekteom":[12,13],"terekteoms":[12,13],"s":[16,17,32,33,48,51,53],"se":[16,17,48],"sea":[16,17],"sear":[16,17],"seark":[16,17],"f":[20,21,28,29,30,31,55],"fe":[20,21,28,29,30,31,49,55],"fet":[20,21,55],"fets":[20,21],"l":[22,23],"la":[22,23],"lap":[22,23],"lape":[22,23],"lapel":[22,23],"lapels":[22,23],"k":[24,25,34,35,43,44,45,58],"ko":[24,25,34,35,43,44,45,58],"kol":[24,25,34,35,43,44,45],"kolo":[24,25,34,35,43,44,45],"kolom":[24,25,34,35],"koloms":[24,25],"to":[26,27],"fel":[28,29,30,31],"felt":[28,29,30,31],"felts":[28,29,30,31],"so":[32,33],"sor":[32,33],"sort":[32,33],"tem":[36,37,38,39],"teme":[36,37,38,39],"tes":[40,41],"test":[40,41],"kolor":[43,44,45],"ses":[48],"sese":[48],"fek":[49],"fekt":[49],"fa":[50],"fam":[50],"fame":[50],"famel":[50],"famele":[50],"sp":[51],"spa":[51],"spak":[51],"spake":[51],"spakem":[51],"spakemk":[51],"e":[52],"ek":[52],"ekt":[52],"sa":[53],"sat":[53],"sato":[53],"satof":[53],"r":[54],"ra":[54],"rat":[54],"rate":[54],"rateo":[54],"rateos":[54],"kom":[58],"komf":[58],"komfe":[58],"komfek":[58]},{"op":[0,1],"opk":[0,1],"opke":[0,1],"opkek":[0,1],"opkekt":[0,1],"opkekts":[0,1],"p":[2,3],"pr":[2,3],"pre":[2,3],"prem":[2,3],"preme":[2,3],"premet":[2,3],"premete":[2,3],"premetef":[2,3],"premetefe":[2,3],"premetefes":[2,3],"m":[4,5],"me":[4,5],"mes":[4,5],"mese":[4,5],"meset":[4,5],"te":[9,11,21,23,25,26,27,29,31,35],"tef":[9,11,21,23,25,29,31,33,35,37,39,41],"tefa":[9,11,21,23,25,29,31,33,35,37,39,41],"tefao":[9,11,21,23,25,29,31,33,35,37,39,41],"tefaol":[9,11,21,23,25,29,31,33,35,37,39,41],"tefaolt":[9,11,21,23,25,29,31,33,35,37,39,41],"e":[16,17],"ek":[16,17],"ekl":[16,17],"ekle":[16,17],"eklek":[16,17],"eklekt":[16,17],"t":[21,23,25,29,31,35]},{"t":[1,3],"te":[1,3],"tef":[1,3,17],"tefa":[1,3,17],"tefao":[1,3,17],"tefaol":[1,3,17],"tefaolt":[1,3,17],"op":[4,5],"opk":[4,5],"opke":[4,5],"opkek":[4,5],"opkekt":[4,5],"opkekts":[4,5],"se":[26,27],"set":[26,27],"sete":[26,27]},{"t":[5],"te":[5],"tef":[5,27],"tefa":[5,27],"tefao":[5,27],"tefaol":[5,27],"tefaolt":[5,27]},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue", "kind": "story" }, "1": { "id": "src-stories-1-basic-usage-1-array-of-objects-story-vue:_default", "kind": "variant" }, "2": { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue", "kind": "story" }, "3": { "id": "src-stories-1-basic-usage-2-array-of-primitives-story-vue:_default", "kind": "variant" }, "4": { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue", "kind": "story" }, "5": { "id": "src-stories-1-basic-usage-3-array-of-mixed-objects-story-vue:_default", "kind": "variant" }, "6": { "id": "src-stories-1-basic-usage-4-loading-story-vue", "kind": "story" }, "7": { "id": "src-stories-1-basic-usage-4-loading-story-vue:_default", "kind": "variant" }, "8": { "id": "src-stories-1-basic-usage-5-no-data-story-vue", "kind": "story" }, "9": { "id": "src-stories-1-basic-usage-5-no-data-story-vue:_default", "kind": "variant" }, "10": { "id": "src-stories-1-basic-usage-6-bad-data-story-vue", "kind": "story" }, "11": { "id": "src-stories-1-basic-usage-6-bad-data-story-vue:_default", "kind": "variant" }, "12": { "id": "src-stories-1-basic-usage-7-sort-default-sort-directions-story-vue", "kind": "story" }, "13": { "id": "src-stories-1-basic-usage-7-sort-default-sort-directions-story-vue:_default", "kind": "variant" }, "14": { "id": "src-stories-1-basic-usage-7-sort-default-sort-story-vue", "kind": "story" }, "15": { "id": "src-stories-1-basic-usage-7-sort-default-sort-story-vue:_default", "kind": "variant" }, "16": { "id": "src-stories-1-basic-usage-8-disable-search-highlight-story-vue", "kind": "story" }, "17": { "id": "src-stories-1-basic-usage-8-disable-search-highlight-story-vue:_default", "kind": "variant" }, "18": { "id": "src-stories-1-basic-usage-9-editable-story-vue", "kind": "story" }, "19": { "id": "src-stories-1-basic-usage-9-editable-story-vue:_default", "kind": "variant" }, "20": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue", "kind": "story" }, "21": { "id": "src-stories-2-configure-columns-1-control-widths-story-vue:_default", "kind": "variant" }, "22": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue", "kind": "story" }, "23": { "id": "src-stories-2-configure-columns-2-control-labels-story-vue:_default", "kind": "variant" }, "24": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue", "kind": "story" }, "25": { "id": "src-stories-2-configure-columns-3-extra-columns-story-vue:_default", "kind": "variant" }, "26": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue", "kind": "story" }, "27": { "id": "src-stories-2-configure-columns-4-pin-to-side-story-vue:_default", "kind": "variant" }, "28": { "id": "src-stories-2-configure-columns-5-only-fields-story-vue", "kind": "story" }, "29": { "id": "src-stories-2-configure-columns-5-only-fields-story-vue:_default", "kind": "variant" }, "30": { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue", "kind": "story" }, "31": { "id": "src-stories-2-configure-columns-6-hide-fields-story-vue:_default", "kind": "variant" }, "32": { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue", "kind": "story" }, "33": { "id": "src-stories-2-configure-columns-7-disable-sort-story-vue:_default", "kind": "variant" }, "34": { "id": "src-stories-2-configure-columns-8-format-column-story-vue", "kind": "story" }, "35": { "id": "src-stories-2-configure-columns-8-format-column-story-vue:_default", "kind": "variant" }, "36": { "id": "src-stories-3-theming-1-space-story-vue", "kind": "story" }, "37": { "id": "src-stories-3-theming-1-space-story-vue:_default", "kind": "variant" }, "38": { "id": "src-stories-3-theming-2-cavern-story-vue", "kind": "story" }, "39": { "id": "src-stories-3-theming-2-cavern-story-vue:_default", "kind": "variant" }, "40": { "id": "src-stories-4-other-1-stress-test-story-vue", "kind": "story" }, "41": { "id": "src-stories-4-other-1-stress-test-story-vue:_default", "kind": "variant" }, "42": { "id": "tailwind", "kind": "story" }, "43": { "id": "tailwind:background-color", "kind": "variant" }, "44": { "id": "tailwind:text-color", "kind": "variant" }, "45": { "id": "tailwind:border-color", "kind": "variant" }, "46": { "id": "tailwind:padding", "kind": "variant" }, "47": { "id": "tailwind:margin", "kind": "variant" }, "48": { "id": "tailwind:font-size", "kind": "variant" }, "49": { "id": "tailwind:font-weight", "kind": "variant" }, "50": { "id": "tailwind:font-family", "kind": "variant" }, "51": { "id": "tailwind:letter-spacing", "kind": "variant" }, "52": { "id": "tailwind:line-height", "kind": "variant" }, "53": { "id": "tailwind:drop-shadow", "kind": "variant" }, "54": { "id": "tailwind:border-radius", "kind": "variant" }, "55": { "id": "tailwind:border-width", "kind": "variant" }, "56": { "id": "tailwind:width", "kind": "variant" }, "57": { "id": "tailwind:height", "kind": "variant" }, "58": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-BJJTfTK4.js"), true ? __vite__mapDeps([0,1]) : void 0);
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
