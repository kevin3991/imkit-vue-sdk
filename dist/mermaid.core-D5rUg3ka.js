var Zm = Object.defineProperty;
var Km = (e, t, r) => t in e ? Zm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ht = (e, t, r) => Km(e, typeof t != "symbol" ? t + "" : t, r);
import { d as Qm } from "./lib-D0JJqd6q.js";
var Hl = {
  name: "mermaid",
  version: "11.12.0",
  description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
  type: "module",
  module: "./dist/mermaid.core.mjs",
  types: "./dist/mermaid.d.ts",
  exports: {
    ".": {
      types: "./dist/mermaid.d.ts",
      import: "./dist/mermaid.core.mjs",
      default: "./dist/mermaid.core.mjs"
    },
    "./*": "./*"
  },
  keywords: [
    "diagram",
    "markdown",
    "flowchart",
    "sequence diagram",
    "gantt",
    "class diagram",
    "git graph",
    "mindmap",
    "packet diagram",
    "c4 diagram",
    "er diagram",
    "pie chart",
    "pie diagram",
    "quadrant chart",
    "requirement diagram",
    "graph"
  ],
  scripts: {
    clean: "rimraf dist",
    dev: "pnpm -w dev",
    "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
    "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
    "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
    "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
    "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
    "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
    "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
    "docs:spellcheck": 'cspell "src/docs/**/*.md"',
    "docs:release-version": "tsx scripts/update-release-version.mts",
    "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
    "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
    "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
    checkCircle: "npx madge --circular ./src",
    prepublishOnly: "pnpm docs:verify-version"
  },
  repository: {
    type: "git",
    url: "https://github.com/mermaid-js/mermaid"
  },
  author: "Knut Sveidqvist",
  license: "MIT",
  standard: {
    ignore: [
      "**/parser/*.js",
      "dist/**/*.js",
      "cypress/**/*.js"
    ],
    globals: [
      "page"
    ]
  },
  dependencies: {
    "@braintree/sanitize-url": "^7.1.1",
    "@iconify/utils": "^3.0.1",
    "@mermaid-js/parser": "workspace:^",
    "@types/d3": "^7.4.3",
    cytoscape: "^3.29.3",
    "cytoscape-cose-bilkent": "^4.1.0",
    "cytoscape-fcose": "^2.2.0",
    d3: "^7.9.0",
    "d3-sankey": "^0.12.3",
    "dagre-d3-es": "7.0.11",
    dayjs: "^1.11.18",
    dompurify: "^3.2.5",
    katex: "^0.16.22",
    khroma: "^2.1.0",
    "lodash-es": "^4.17.21",
    marked: "^16.2.1",
    roughjs: "^4.6.6",
    stylis: "^4.3.6",
    "ts-dedent": "^2.2.0",
    uuid: "^11.1.0"
  },
  devDependencies: {
    "@adobe/jsonschema2md": "^8.0.5",
    "@iconify/types": "^2.0.0",
    "@types/cytoscape": "^3.21.9",
    "@types/cytoscape-fcose": "^2.2.4",
    "@types/d3-sankey": "^0.12.4",
    "@types/d3-scale": "^4.0.9",
    "@types/d3-scale-chromatic": "^3.1.0",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-shape": "^3.1.7",
    "@types/jsdom": "^21.1.7",
    "@types/katex": "^0.16.7",
    "@types/lodash-es": "^4.17.12",
    "@types/micromatch": "^4.0.9",
    "@types/stylis": "^4.2.7",
    "@types/uuid": "^10.0.0",
    ajv: "^8.17.1",
    canvas: "^3.1.2",
    chokidar: "3.6.0",
    concurrently: "^9.1.2",
    "csstree-validator": "^4.0.1",
    globby: "^14.1.0",
    jison: "^0.4.18",
    "js-base64": "^3.7.8",
    jsdom: "^26.1.0",
    "json-schema-to-typescript": "^15.0.4",
    micromatch: "^4.0.8",
    "path-browserify": "^1.0.1",
    prettier: "^3.5.3",
    remark: "^15.0.1",
    "remark-frontmatter": "^5.0.0",
    "remark-gfm": "^4.0.1",
    rimraf: "^6.0.1",
    "start-server-and-test": "^2.0.13",
    "type-fest": "^4.35.0",
    typedoc: "^0.28.12",
    "typedoc-plugin-markdown": "^4.8.1",
    typescript: "~5.7.3",
    "unist-util-flatmap": "^1.0.0",
    "unist-util-visit": "^5.0.0",
    vitepress: "^1.6.4",
    "vitepress-plugin-search": "1.0.4-alpha.22"
  },
  files: [
    "dist/",
    "README.md"
  ],
  publishConfig: {
    access: "public"
  }
}, kh = Object.defineProperty, d = (e, t) => kh(e, "name", { value: t, configurable: !0 }), Jm = (e, t) => {
  for (var r in t)
    kh(e, r, { get: t[r], enumerable: !0 });
}, Be = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, B = {
  trace: /* @__PURE__ */ d((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ d((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ d((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ d((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ d((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ d((...e) => {
  }, "fatal")
}, ko = /* @__PURE__ */ d(function(e = "fatal") {
  let t = Be.fatal;
  typeof e == "string" ? e.toLowerCase() in Be && (t = Be[e]) : typeof e == "number" && (t = e), B.trace = () => {
  }, B.debug = () => {
  }, B.info = () => {
  }, B.warn = () => {
  }, B.error = () => {
  }, B.fatal = () => {
  }, t <= Be.fatal && (B.fatal = console.error ? console.error.bind(console, Qt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", Qt("FATAL"))), t <= Be.error && (B.error = console.error ? console.error.bind(console, Qt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", Qt("ERROR"))), t <= Be.warn && (B.warn = console.warn ? console.warn.bind(console, Qt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", Qt("WARN"))), t <= Be.info && (B.info = console.info ? console.info.bind(console, Qt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", Qt("INFO"))), t <= Be.debug && (B.debug = console.debug ? console.debug.bind(console, Qt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Qt("DEBUG"))), t <= Be.trace && (B.trace = console.debug ? console.debug.bind(console, Qt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Qt("TRACE")));
}, "setLogLevel"), Qt = /* @__PURE__ */ d((e) => `%c${Qm().format("ss.SSS")} : ${e} : `, "format");
const vn = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n;
    switch (i) {
      case "r":
        return vn.hue2rgb(a, n, e + 1 / 3) * 255;
      case "g":
        return vn.hue2rgb(a, n, e) * 255;
      case "b":
        return vn.hue2rgb(a, n, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const n = Math.max(e, t, r), a = Math.min(e, t, r), o = (n + a) / 2;
    if (i === "l")
      return o * 100;
    if (n === a)
      return 0;
    const s = n - a, l = o > 0.5 ? s / (2 - n - a) : s / (n + a);
    if (i === "s")
      return l * 100;
    switch (n) {
      case e:
        return ((t - r) / s + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / s + 2) * 60;
      case r:
        return ((e - t) / s + 4) * 60;
      default:
        return -1;
    }
  }
}, t0 = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, e0 = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, tt = {
  channel: vn,
  lang: t0,
  unit: e0
}, Pe = {};
for (let e = 0; e <= 255; e++)
  Pe[e] = tt.unit.dec2hex(e);
const $t = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class r0 {
  constructor() {
    this.type = $t.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = $t.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class i0 {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new r0();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = $t.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: n } = t;
    r === void 0 && (t.h = tt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = tt.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = tt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: n } = t;
    r === void 0 && (t.r = tt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = tt.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = tt.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), tt.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), tt.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is($t.HSL) && r !== void 0 ? r : (this._ensureHSL(), tt.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), tt.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), tt.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is($t.RGB) && r !== void 0 ? r : (this._ensureRGB(), tt.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set($t.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set($t.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const Ca = new i0({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Fr = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(Fr.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), n = r.length, a = n % 4 === 0, o = n > 4, s = o ? 1 : 17, l = o ? 8 : 4, c = a ? 0 : -1, h = o ? 255 : 15;
    return Ca.set({
      r: (i >> l * (c + 3) & h) * s,
      g: (i >> l * (c + 2) & h) * s,
      b: (i >> l * (c + 1) & h) * s,
      a: a ? (i & h) * s / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `#${Pe[Math.round(t)]}${Pe[Math.round(r)]}${Pe[Math.round(i)]}${Pe[Math.round(n * 255)]}` : `#${Pe[Math.round(t)]}${Pe[Math.round(r)]}${Pe[Math.round(i)]}`;
  }
}, ir = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(ir.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return tt.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return tt.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return tt.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return tt.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(ir.re);
    if (!r)
      return;
    const [, i, n, a, o, s] = r;
    return Ca.set({
      h: ir._hue2deg(i),
      s: tt.channel.clamp.s(parseFloat(n)),
      l: tt.channel.clamp.l(parseFloat(a)),
      a: o ? tt.channel.clamp.a(s ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: n } = e;
    return n < 1 ? `hsla(${tt.lang.round(t)}, ${tt.lang.round(r)}%, ${tt.lang.round(i)}%, ${n})` : `hsl(${tt.lang.round(t)}, ${tt.lang.round(r)}%, ${tt.lang.round(i)}%)`;
  }
}, Li = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = Li.colors[e];
    if (t)
      return Fr.parse(t);
  },
  stringify: (e) => {
    const t = Fr.stringify(e);
    for (const r in Li.colors)
      if (Li.colors[r] === t)
        return r;
  }
}, Ci = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(Ci.re);
    if (!r)
      return;
    const [, i, n, a, o, s, l, c, h] = r;
    return Ca.set({
      r: tt.channel.clamp.r(n ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: tt.channel.clamp.g(o ? parseFloat(a) * 2.55 : parseFloat(a)),
      b: tt.channel.clamp.b(l ? parseFloat(s) * 2.55 : parseFloat(s)),
      a: c ? tt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: n } = e;
    return n < 1 ? `rgba(${tt.lang.round(t)}, ${tt.lang.round(r)}, ${tt.lang.round(i)}, ${tt.lang.round(n)})` : `rgb(${tt.lang.round(t)}, ${tt.lang.round(r)}, ${tt.lang.round(i)})`;
  }
}, Ce = {
  /* VARIABLES */
  format: {
    keyword: Li,
    hex: Fr,
    rgb: Ci,
    rgba: Ci,
    hsl: ir,
    hsla: ir
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = Fr.parse(e) || Ci.parse(e) || ir.parse(e) || Li.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is($t.HSL) || e.data.r === void 0 ? ir.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? Ci.stringify(e) : Fr.stringify(e)
}, vh = (e, t) => {
  const r = Ce.parse(e);
  for (const i in t)
    r[i] = tt.channel.clamp[i](t[i]);
  return Ce.stringify(r);
}, Mi = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return vh(e, { a: t });
  const n = Ca.set({
    r: tt.channel.clamp.r(e),
    g: tt.channel.clamp.g(t),
    b: tt.channel.clamp.b(r),
    a: tt.channel.clamp.a(i)
  });
  return Ce.stringify(n);
}, n0 = (e) => {
  const { r: t, g: r, b: i } = Ce.parse(e), n = 0.2126 * tt.channel.toLinear(t) + 0.7152 * tt.channel.toLinear(r) + 0.0722 * tt.channel.toLinear(i);
  return tt.lang.round(n);
}, a0 = (e) => n0(e) >= 0.5, Xi = (e) => !a0(e), Sh = (e, t, r) => {
  const i = Ce.parse(e), n = i[t], a = tt.channel.clamp[t](n + r);
  return n !== a && (i[t] = a), Ce.stringify(i);
}, W = (e, t) => Sh(e, "l", t), Z = (e, t) => Sh(e, "l", -t), T = (e, t) => {
  const r = Ce.parse(e), i = {};
  for (const n in t)
    t[n] && (i[n] = r[n] + t[n]);
  return vh(e, i);
}, s0 = (e, t, r = 50) => {
  const { r: i, g: n, b: a, a: o } = Ce.parse(e), { r: s, g: l, b: c, a: h } = Ce.parse(t), u = r / 100, f = u * 2 - 1, p = o - h, m = ((f * p === -1 ? f : (f + p) / (1 + f * p)) + 1) / 2, y = 1 - m, x = i * m + s * y, b = n * m + l * y, _ = a * m + c * y, v = o * u + h * (1 - u);
  return Mi(x, b, _, v);
}, I = (e, t = 100) => {
  const r = Ce.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, s0(r, e, t);
};
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */
const {
  entries: Th,
  setPrototypeOf: jl,
  isFrozen: o0,
  getPrototypeOf: l0,
  getOwnPropertyDescriptor: c0
} = Object;
let {
  freeze: Wt,
  seal: Jt,
  create: ks
} = Object, {
  apply: vs,
  construct: Ss
} = typeof Reflect < "u" && Reflect;
Wt || (Wt = function(t) {
  return t;
});
Jt || (Jt = function(t) {
  return t;
});
vs || (vs = function(t, r) {
  for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++)
    n[a - 2] = arguments[a];
  return t.apply(r, n);
});
Ss || (Ss = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    i[n - 1] = arguments[n];
  return new t(...i);
});
const un = Ht(Array.prototype.forEach), h0 = Ht(Array.prototype.lastIndexOf), Yl = Ht(Array.prototype.pop), li = Ht(Array.prototype.push), u0 = Ht(Array.prototype.splice), Sn = Ht(String.prototype.toLowerCase), rs = Ht(String.prototype.toString), is = Ht(String.prototype.match), ci = Ht(String.prototype.replace), f0 = Ht(String.prototype.indexOf), p0 = Ht(String.prototype.trim), se = Ht(Object.prototype.hasOwnProperty), Pt = Ht(RegExp.prototype.test), hi = d0(TypeError);
function Ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
      i[n - 1] = arguments[n];
    return vs(e, t, i);
  };
}
function d0(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Ss(e, r);
  };
}
function rt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sn;
  jl && jl(e, null);
  let i = t.length;
  for (; i--; ) {
    let n = t[i];
    if (typeof n == "string") {
      const a = r(n);
      a !== n && (o0(t) || (t[i] = a), n = a);
    }
    e[n] = !0;
  }
  return e;
}
function g0(e) {
  for (let t = 0; t < e.length; t++)
    se(e, t) || (e[t] = null);
  return e;
}
function Le(e) {
  const t = ks(null);
  for (const [r, i] of Th(e))
    se(e, r) && (Array.isArray(i) ? t[r] = g0(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = Le(i) : t[r] = i);
  return t;
}
function ui(e, t) {
  for (; e !== null; ) {
    const i = c0(e, t);
    if (i) {
      if (i.get)
        return Ht(i.get);
      if (typeof i.value == "function")
        return Ht(i.value);
    }
    e = l0(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ul = Wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ns = Wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), as = Wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), m0 = Wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ss = Wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), y0 = Wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gl = Wt(["#text"]), Xl = Wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), os = Wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vl = Wt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fn = Wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), x0 = Jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), b0 = Jt(/<%[\w\W]*|[\w\W]*%>/gm), C0 = Jt(/\$\{[\w\W]*/gm), _0 = Jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), w0 = Jt(/^aria-[\-\w]+$/), Bh = Jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), k0 = Jt(/^(?:\w+script|data):/i), v0 = Jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ah = Jt(/^html$/i), S0 = Jt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: w0,
  ATTR_WHITESPACE: v0,
  CUSTOM_ELEMENT: S0,
  DATA_ATTR: _0,
  DOCTYPE_NAME: Ah,
  ERB_EXPR: b0,
  IS_ALLOWED_URI: Bh,
  IS_SCRIPT_OR_DATA: k0,
  MUSTACHE_EXPR: x0,
  TMPLIT_EXPR: C0
});
const fi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, T0 = function() {
  return typeof window > "u" ? null : window;
}, B0 = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const n = "data-tt-policy-suffix";
  r && r.hasAttribute(n) && (i = r.getAttribute(n));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Kl = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Lh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T0();
  const t = (V) => Lh(V);
  if (t.version = "3.3.0", t.removed = [], !e || !e.document || e.document.nodeType !== fi.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, n = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: o,
    Node: s,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: p
  } = e, g = l.prototype, m = ui(g, "cloneNode"), y = ui(g, "remove"), x = ui(g, "nextSibling"), b = ui(g, "childNodes"), _ = ui(g, "parentNode");
  if (typeof o == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let v, w = "";
  const {
    implementation: C,
    createNodeIterator: S,
    createDocumentFragment: A,
    getElementsByTagName: O
  } = r, {
    importNode: D
  } = i;
  let L = Kl();
  t.isSupported = typeof Th == "function" && typeof _ == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: q,
    ERB_EXPR: M,
    TMPLIT_EXPR: E,
    DATA_ATTR: F,
    ARIA_ATTR: R,
    IS_SCRIPT_OR_DATA: z,
    ATTR_WHITESPACE: P,
    CUSTOM_ELEMENT: ot
  } = Zl;
  let {
    IS_ALLOWED_URI: bt
  } = Zl, et = null;
  const re = rt({}, [...Ul, ...ns, ...as, ...ss, ...Gl]);
  let ft = null;
  const ie = rt({}, [...Xl, ...os, ...Vl, ...fn]);
  let dt = Object.seal(ks(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), nt = null, ut = null;
  const yt = Object.seal(ks(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Mt = !0, ne = !0, ae = !1, ai = !0, Ze = !1, Ie = !0, Ke = !1, Ga = !1, Xa = !1, wr = !1, an = !1, sn = !1, Sl = !0, Tl = !1;
  const Wm = "user-content-";
  let Va = !0, si = !1, kr = {}, vr = null;
  const Bl = rt({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Al = null;
  const Ll = rt({}, ["audio", "video", "img", "source", "image", "track"]);
  let Za = null;
  const Ml = rt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), on = "http://www.w3.org/1998/Math/MathML", ln = "http://www.w3.org/2000/svg", ve = "http://www.w3.org/1999/xhtml";
  let Sr = ve, Ka = !1, Qa = null;
  const Hm = rt({}, [on, ln, ve], rs);
  let cn = rt({}, ["mi", "mo", "mn", "ms", "mtext"]), hn = rt({}, ["annotation-xml"]);
  const jm = rt({}, ["title", "style", "font", "a", "script"]);
  let oi = null;
  const Ym = ["application/xhtml+xml", "text/html"], Um = "text/html";
  let Tt = null, Tr = null;
  const Gm = r.createElement("form"), El = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, Ja = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Tr && Tr === k)) {
      if ((!k || typeof k != "object") && (k = {}), k = Le(k), oi = // eslint-disable-next-line unicorn/prefer-includes
      Ym.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? Um : k.PARSER_MEDIA_TYPE, Tt = oi === "application/xhtml+xml" ? rs : Sn, et = se(k, "ALLOWED_TAGS") ? rt({}, k.ALLOWED_TAGS, Tt) : re, ft = se(k, "ALLOWED_ATTR") ? rt({}, k.ALLOWED_ATTR, Tt) : ie, Qa = se(k, "ALLOWED_NAMESPACES") ? rt({}, k.ALLOWED_NAMESPACES, rs) : Hm, Za = se(k, "ADD_URI_SAFE_ATTR") ? rt(Le(Ml), k.ADD_URI_SAFE_ATTR, Tt) : Ml, Al = se(k, "ADD_DATA_URI_TAGS") ? rt(Le(Ll), k.ADD_DATA_URI_TAGS, Tt) : Ll, vr = se(k, "FORBID_CONTENTS") ? rt({}, k.FORBID_CONTENTS, Tt) : Bl, nt = se(k, "FORBID_TAGS") ? rt({}, k.FORBID_TAGS, Tt) : Le({}), ut = se(k, "FORBID_ATTR") ? rt({}, k.FORBID_ATTR, Tt) : Le({}), kr = se(k, "USE_PROFILES") ? k.USE_PROFILES : !1, Mt = k.ALLOW_ARIA_ATTR !== !1, ne = k.ALLOW_DATA_ATTR !== !1, ae = k.ALLOW_UNKNOWN_PROTOCOLS || !1, ai = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ze = k.SAFE_FOR_TEMPLATES || !1, Ie = k.SAFE_FOR_XML !== !1, Ke = k.WHOLE_DOCUMENT || !1, wr = k.RETURN_DOM || !1, an = k.RETURN_DOM_FRAGMENT || !1, sn = k.RETURN_TRUSTED_TYPE || !1, Xa = k.FORCE_BODY || !1, Sl = k.SANITIZE_DOM !== !1, Tl = k.SANITIZE_NAMED_PROPS || !1, Va = k.KEEP_CONTENT !== !1, si = k.IN_PLACE || !1, bt = k.ALLOWED_URI_REGEXP || Bh, Sr = k.NAMESPACE || ve, cn = k.MATHML_TEXT_INTEGRATION_POINTS || cn, hn = k.HTML_INTEGRATION_POINTS || hn, dt = k.CUSTOM_ELEMENT_HANDLING || {}, k.CUSTOM_ELEMENT_HANDLING && El(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (dt.tagNameCheck = k.CUSTOM_ELEMENT_HANDLING.tagNameCheck), k.CUSTOM_ELEMENT_HANDLING && El(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (dt.attributeNameCheck = k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (dt.allowCustomizedBuiltInElements = k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ze && (ne = !1), an && (wr = !0), kr && (et = rt({}, Gl), ft = [], kr.html === !0 && (rt(et, Ul), rt(ft, Xl)), kr.svg === !0 && (rt(et, ns), rt(ft, os), rt(ft, fn)), kr.svgFilters === !0 && (rt(et, as), rt(ft, os), rt(ft, fn)), kr.mathMl === !0 && (rt(et, ss), rt(ft, Vl), rt(ft, fn))), k.ADD_TAGS && (typeof k.ADD_TAGS == "function" ? yt.tagCheck = k.ADD_TAGS : (et === re && (et = Le(et)), rt(et, k.ADD_TAGS, Tt))), k.ADD_ATTR && (typeof k.ADD_ATTR == "function" ? yt.attributeCheck = k.ADD_ATTR : (ft === ie && (ft = Le(ft)), rt(ft, k.ADD_ATTR, Tt))), k.ADD_URI_SAFE_ATTR && rt(Za, k.ADD_URI_SAFE_ATTR, Tt), k.FORBID_CONTENTS && (vr === Bl && (vr = Le(vr)), rt(vr, k.FORBID_CONTENTS, Tt)), Va && (et["#text"] = !0), Ke && rt(et, ["html", "head", "body"]), et.table && (rt(et, ["tbody"]), delete nt.tbody), k.TRUSTED_TYPES_POLICY) {
        if (typeof k.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw hi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof k.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw hi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = k.TRUSTED_TYPES_POLICY, w = v.createHTML("");
      } else
        v === void 0 && (v = B0(p, n)), v !== null && typeof w == "string" && (w = v.createHTML(""));
      Wt && Wt(k), Tr = k;
    }
  }, $l = rt({}, [...ns, ...as, ...m0]), Fl = rt({}, [...ss, ...y0]), Xm = function(k) {
    let $ = _(k);
    (!$ || !$.tagName) && ($ = {
      namespaceURI: Sr,
      tagName: "template"
    });
    const G = Sn(k.tagName), gt = Sn($.tagName);
    return Qa[k.namespaceURI] ? k.namespaceURI === ln ? $.namespaceURI === ve ? G === "svg" : $.namespaceURI === on ? G === "svg" && (gt === "annotation-xml" || cn[gt]) : !!$l[G] : k.namespaceURI === on ? $.namespaceURI === ve ? G === "math" : $.namespaceURI === ln ? G === "math" && hn[gt] : !!Fl[G] : k.namespaceURI === ve ? $.namespaceURI === ln && !hn[gt] || $.namespaceURI === on && !cn[gt] ? !1 : !Fl[G] && (jm[G] || !$l[G]) : !!(oi === "application/xhtml+xml" && Qa[k.namespaceURI]) : !1;
  }, de = function(k) {
    li(t.removed, {
      element: k
    });
    try {
      _(k).removeChild(k);
    } catch {
      y(k);
    }
  }, Qe = function(k, $) {
    try {
      li(t.removed, {
        attribute: $.getAttributeNode(k),
        from: $
      });
    } catch {
      li(t.removed, {
        attribute: null,
        from: $
      });
    }
    if ($.removeAttribute(k), k === "is")
      if (wr || an)
        try {
          de($);
        } catch {
        }
      else
        try {
          $.setAttribute(k, "");
        } catch {
        }
  }, Ol = function(k) {
    let $ = null, G = null;
    if (Xa)
      k = "<remove></remove>" + k;
    else {
      const Ct = is(k, /^[\r\n\t ]+/);
      G = Ct && Ct[0];
    }
    oi === "application/xhtml+xml" && Sr === ve && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    const gt = v ? v.createHTML(k) : k;
    if (Sr === ve)
      try {
        $ = new f().parseFromString(gt, oi);
      } catch {
      }
    if (!$ || !$.documentElement) {
      $ = C.createDocument(Sr, "template", null);
      try {
        $.documentElement.innerHTML = Ka ? w : gt;
      } catch {
      }
    }
    const Et = $.body || $.documentElement;
    return k && G && Et.insertBefore(r.createTextNode(G), Et.childNodes[0] || null), Sr === ve ? O.call($, Ke ? "html" : "body")[0] : Ke ? $.documentElement : Et;
  }, Rl = function(k) {
    return S.call(
      k.ownerDocument || k,
      k,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ts = function(k) {
    return k instanceof u && (typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || !(k.attributes instanceof h) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function");
  }, Dl = function(k) {
    return typeof s == "function" && k instanceof s;
  };
  function Se(V, k, $) {
    un(V, (G) => {
      G.call(t, k, $, Tr);
    });
  }
  const Il = function(k) {
    let $ = null;
    if (Se(L.beforeSanitizeElements, k, null), ts(k))
      return de(k), !0;
    const G = Tt(k.nodeName);
    if (Se(L.uponSanitizeElement, k, {
      tagName: G,
      allowedTags: et
    }), Ie && k.hasChildNodes() && !Dl(k.firstElementChild) && Pt(/<[/\w!]/g, k.innerHTML) && Pt(/<[/\w!]/g, k.textContent) || k.nodeType === fi.progressingInstruction || Ie && k.nodeType === fi.comment && Pt(/<[/\w]/g, k.data))
      return de(k), !0;
    if (!(yt.tagCheck instanceof Function && yt.tagCheck(G)) && (!et[G] || nt[G])) {
      if (!nt[G] && Nl(G) && (dt.tagNameCheck instanceof RegExp && Pt(dt.tagNameCheck, G) || dt.tagNameCheck instanceof Function && dt.tagNameCheck(G)))
        return !1;
      if (Va && !vr[G]) {
        const gt = _(k) || k.parentNode, Et = b(k) || k.childNodes;
        if (Et && gt) {
          const Ct = Et.length;
          for (let jt = Ct - 1; jt >= 0; --jt) {
            const Te = m(Et[jt], !0);
            Te.__removalCount = (k.__removalCount || 0) + 1, gt.insertBefore(Te, x(k));
          }
        }
      }
      return de(k), !0;
    }
    return k instanceof l && !Xm(k) || (G === "noscript" || G === "noembed" || G === "noframes") && Pt(/<\/no(script|embed|frames)/i, k.innerHTML) ? (de(k), !0) : (Ze && k.nodeType === fi.text && ($ = k.textContent, un([q, M, E], (gt) => {
      $ = ci($, gt, " ");
    }), k.textContent !== $ && (li(t.removed, {
      element: k.cloneNode()
    }), k.textContent = $)), Se(L.afterSanitizeElements, k, null), !1);
  }, Pl = function(k, $, G) {
    if (Sl && ($ === "id" || $ === "name") && (G in r || G in Gm))
      return !1;
    if (!(ne && !ut[$] && Pt(F, $))) {
      if (!(Mt && Pt(R, $))) {
        if (!(yt.attributeCheck instanceof Function && yt.attributeCheck($, k))) {
          if (!ft[$] || ut[$]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Nl(k) && (dt.tagNameCheck instanceof RegExp && Pt(dt.tagNameCheck, k) || dt.tagNameCheck instanceof Function && dt.tagNameCheck(k)) && (dt.attributeNameCheck instanceof RegExp && Pt(dt.attributeNameCheck, $) || dt.attributeNameCheck instanceof Function && dt.attributeNameCheck($, k)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              $ === "is" && dt.allowCustomizedBuiltInElements && (dt.tagNameCheck instanceof RegExp && Pt(dt.tagNameCheck, G) || dt.tagNameCheck instanceof Function && dt.tagNameCheck(G)))
            ) return !1;
          } else if (!Za[$]) {
            if (!Pt(bt, ci(G, P, ""))) {
              if (!(($ === "src" || $ === "xlink:href" || $ === "href") && k !== "script" && f0(G, "data:") === 0 && Al[k])) {
                if (!(ae && !Pt(z, ci(G, P, "")))) {
                  if (G)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Nl = function(k) {
    return k !== "annotation-xml" && is(k, ot);
  }, zl = function(k) {
    Se(L.beforeSanitizeAttributes, k, null);
    const {
      attributes: $
    } = k;
    if (!$ || ts(k))
      return;
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ft,
      forceKeepAttr: void 0
    };
    let gt = $.length;
    for (; gt--; ) {
      const Et = $[gt], {
        name: Ct,
        namespaceURI: jt,
        value: Te
      } = Et, Br = Tt(Ct), es = Te;
      let Bt = Ct === "value" ? es : p0(es);
      if (G.attrName = Br, G.attrValue = Bt, G.keepAttr = !0, G.forceKeepAttr = void 0, Se(L.uponSanitizeAttribute, k, G), Bt = G.attrValue, Tl && (Br === "id" || Br === "name") && (Qe(Ct, k), Bt = Wm + Bt), Ie && Pt(/((--!?|])>)|<\/(style|title|textarea)/i, Bt)) {
        Qe(Ct, k);
        continue;
      }
      if (Br === "attributename" && is(Bt, "href")) {
        Qe(Ct, k);
        continue;
      }
      if (G.forceKeepAttr)
        continue;
      if (!G.keepAttr) {
        Qe(Ct, k);
        continue;
      }
      if (!ai && Pt(/\/>/i, Bt)) {
        Qe(Ct, k);
        continue;
      }
      Ze && un([q, M, E], (Wl) => {
        Bt = ci(Bt, Wl, " ");
      });
      const ql = Tt(k.nodeName);
      if (!Pl(ql, Br, Bt)) {
        Qe(Ct, k);
        continue;
      }
      if (v && typeof p == "object" && typeof p.getAttributeType == "function" && !jt)
        switch (p.getAttributeType(ql, Br)) {
          case "TrustedHTML": {
            Bt = v.createHTML(Bt);
            break;
          }
          case "TrustedScriptURL": {
            Bt = v.createScriptURL(Bt);
            break;
          }
        }
      if (Bt !== es)
        try {
          jt ? k.setAttributeNS(jt, Ct, Bt) : k.setAttribute(Ct, Bt), ts(k) ? de(k) : Yl(t.removed);
        } catch {
          Qe(Ct, k);
        }
    }
    Se(L.afterSanitizeAttributes, k, null);
  }, Vm = function V(k) {
    let $ = null;
    const G = Rl(k);
    for (Se(L.beforeSanitizeShadowDOM, k, null); $ = G.nextNode(); )
      Se(L.uponSanitizeShadowNode, $, null), Il($), zl($), $.content instanceof a && V($.content);
    Se(L.afterSanitizeShadowDOM, k, null);
  };
  return t.sanitize = function(V) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = null, G = null, gt = null, Et = null;
    if (Ka = !V, Ka && (V = "<!-->"), typeof V != "string" && !Dl(V))
      if (typeof V.toString == "function") {
        if (V = V.toString(), typeof V != "string")
          throw hi("dirty is not a string, aborting");
      } else
        throw hi("toString is not a function");
    if (!t.isSupported)
      return V;
    if (Ga || Ja(k), t.removed = [], typeof V == "string" && (si = !1), si) {
      if (V.nodeName) {
        const Te = Tt(V.nodeName);
        if (!et[Te] || nt[Te])
          throw hi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (V instanceof s)
      $ = Ol("<!---->"), G = $.ownerDocument.importNode(V, !0), G.nodeType === fi.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? $ = G : $.appendChild(G);
    else {
      if (!wr && !Ze && !Ke && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return v && sn ? v.createHTML(V) : V;
      if ($ = Ol(V), !$)
        return wr ? null : sn ? w : "";
    }
    $ && Xa && de($.firstChild);
    const Ct = Rl(si ? V : $);
    for (; gt = Ct.nextNode(); )
      Il(gt), zl(gt), gt.content instanceof a && Vm(gt.content);
    if (si)
      return V;
    if (wr) {
      if (an)
        for (Et = A.call($.ownerDocument); $.firstChild; )
          Et.appendChild($.firstChild);
      else
        Et = $;
      return (ft.shadowroot || ft.shadowrootmode) && (Et = D.call(i, Et, !0)), Et;
    }
    let jt = Ke ? $.outerHTML : $.innerHTML;
    return Ke && et["!doctype"] && $.ownerDocument && $.ownerDocument.doctype && $.ownerDocument.doctype.name && Pt(Ah, $.ownerDocument.doctype.name) && (jt = "<!DOCTYPE " + $.ownerDocument.doctype.name + `>
` + jt), Ze && un([q, M, E], (Te) => {
      jt = ci(jt, Te, " ");
    }), v && sn ? v.createHTML(jt) : jt;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ja(V), Ga = !0;
  }, t.clearConfig = function() {
    Tr = null, Ga = !1;
  }, t.isValidAttribute = function(V, k, $) {
    Tr || Ja({});
    const G = Tt(V), gt = Tt(k);
    return Pl(G, gt, $);
  }, t.addHook = function(V, k) {
    typeof k == "function" && li(L[V], k);
  }, t.removeHook = function(V, k) {
    if (k !== void 0) {
      const $ = h0(L[V], k);
      return $ === -1 ? void 0 : u0(L[V], $, 1)[0];
    }
    return Yl(L[V]);
  }, t.removeHooks = function(V) {
    L[V] = [];
  }, t.removeAllHooks = function() {
    L = Kl();
  }, t;
}
var jr = Lh(), Mh = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, Ei = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, A0 = /\s*%%.*\n/gm, Dr, Eh = (Dr = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, d(Dr, "UnknownDiagramError"), Dr), hr = {}, vo = /* @__PURE__ */ d(function(e, t) {
  e = e.replace(Mh, "").replace(Ei, "").replace(A0, `
`);
  for (const [r, { detector: i }] of Object.entries(hr))
    if (i(e, t))
      return r;
  throw new Eh(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), Ts = /* @__PURE__ */ d((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    $h(t, r, i);
}, "registerLazyLoadedDiagrams"), $h = /* @__PURE__ */ d((e, t, r) => {
  hr[e] && B.warn(`Detector with key ${e} already exists. Overwriting.`), hr[e] = { detector: t, loader: r }, B.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), L0 = /* @__PURE__ */ d((e) => hr[e].loader, "getDiagramLoader"), Bs = /* @__PURE__ */ d((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const n = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((a) => Bs(e, a, n)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((a) => {
    e.includes(a) || e.push(a);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((a) => {
    typeof t[a] == "object" && (e[a] === void 0 || typeof e[a] == "object") ? (e[a] === void 0 && (e[a] = Array.isArray(t[a]) ? [] : {}), e[a] = Bs(e[a], t[a], { depth: r - 1, clobber: i })) : (i || typeof e[a] != "object" && typeof t[a] != "object") && (e[a] = t[a]);
  }), e);
}, "assignWithDepth"), kt = Bs, _a = "#ffffff", wa = "#f2f2f2", Nt = /* @__PURE__ */ d((e, t) => t ? T(e, { s: -40, l: 10 }) : T(e, { s: -40, l: -10 }), "mkBorder"), Ir, M0 = (Ir = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, _, v, w, C;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || T(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || T(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Nt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Nt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Nt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Nt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || I(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || I(this.tertiaryColor), this.lineColor = this.lineColor || I(this.background), this.arrowheadColor = this.arrowheadColor || I(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? Z(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || Z(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || I(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || W(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || Z(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || Z(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.darkMode)
      for (let S = 0; S < this.THEME_COLOR_LIMIT; S++)
        this["cScale" + S] = Z(this["cScale" + S], 75);
    else
      for (let S = 0; S < this.THEME_COLOR_LIMIT; S++)
        this["cScale" + S] = Z(this["cScale" + S], 25);
    for (let S = 0; S < this.THEME_COLOR_LIMIT; S++)
      this["cScaleInv" + S] = this["cScaleInv" + S] || I(this["cScale" + S]);
    for (let S = 0; S < this.THEME_COLOR_LIMIT; S++)
      this.darkMode ? this["cScalePeer" + S] = this["cScalePeer" + S] || W(this["cScale" + S], 10) : this["cScalePeer" + S] = this["cScalePeer" + S] || Z(this["cScale" + S], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let S = 0; S < this.THEME_COLOR_LIMIT; S++)
      this["cScaleLabel" + S] = this["cScaleLabel" + S] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let S = 0; S < 5; S++)
      this["surface" + S] = this["surface" + S] || T(this.mainBkg, { h: 180, s: -15, l: t * (5 + S * 3) }), this["surfacePeer" + S] = this["surfacePeer" + S] || T(this.mainBkg, { h: 180, s: -15, l: t * (8 + S * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || T(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || T(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || T(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || T(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || T(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || T(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: ((r = this.radar) == null ? void 0 : r.axisColor) || this.lineColor,
      axisStrokeWidth: ((i = this.radar) == null ? void 0 : i.axisStrokeWidth) || 2,
      axisLabelFontSize: ((n = this.radar) == null ? void 0 : n.axisLabelFontSize) || 12,
      curveOpacity: ((a = this.radar) == null ? void 0 : a.curveOpacity) || 0.5,
      curveStrokeWidth: ((o = this.radar) == null ? void 0 : o.curveStrokeWidth) || 2,
      graticuleColor: ((s = this.radar) == null ? void 0 : s.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((l = this.radar) == null ? void 0 : l.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((c = this.radar) == null ? void 0 : c.graticuleOpacity) || 0.3,
      legendBoxSize: ((h = this.radar) == null ? void 0 : h.legendBoxSize) || 12,
      legendFontSize: ((u = this.radar) == null ? void 0 : u.legendFontSize) || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Xi(this.quadrant1Fill) ? W(this.quadrant1Fill) : Z(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((f = this.xyChart) == null ? void 0 : f.backgroundColor) || this.background,
      titleColor: ((p = this.xyChart) == null ? void 0 : p.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((g = this.xyChart) == null ? void 0 : g.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((y = this.xyChart) == null ? void 0 : y.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((x = this.xyChart) == null ? void 0 : x.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((_ = this.xyChart) == null ? void 0 : _.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((v = this.xyChart) == null ? void 0 : v.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((w = this.xyChart) == null ? void 0 : w.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((C = this.xyChart) == null ? void 0 : C.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? Z(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = Z(this.git0, 25), this.git1 = Z(this.git1, 25), this.git2 = Z(this.git2, 25), this.git3 = Z(this.git3, 25), this.git4 = Z(this.git4, 25), this.git5 = Z(this.git5, 25), this.git6 = Z(this.git6, 25), this.git7 = Z(this.git7, 25)), this.gitInv0 = this.gitInv0 || I(this.git0), this.gitInv1 = this.gitInv1 || I(this.git1), this.gitInv2 = this.gitInv2 || I(this.git2), this.gitInv3 = this.gitInv3 || I(this.git3), this.gitInv4 = this.gitInv4 || I(this.git4), this.gitInv5 = this.gitInv5 || I(this.git5), this.gitInv6 = this.gitInv6 || I(this.git6), this.gitInv7 = this.gitInv7 || I(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _a, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || wa;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(Ir, "Theme"), Ir), E0 = /* @__PURE__ */ d((e) => {
  const t = new M0();
  return t.calculate(e), t;
}, "getThemeVariables"), Pr, $0 = (Pr = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = W(this.primaryColor, 16), this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = I(this.background), this.secondaryBorderColor = Nt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Nt(this.tertiaryColor, this.darkMode), this.primaryTextColor = I(this.primaryColor), this.secondaryTextColor = I(this.secondaryColor), this.tertiaryTextColor = I(this.tertiaryColor), this.lineColor = I(this.background), this.textColor = I(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = W(I("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = Mi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = Z("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = Z(this.sectionBkgColor, 10), this.taskBorderColor = Mi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Mi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || W(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || Z(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, _, v, w;
    this.secondBkg = W(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = W(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = W(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || I(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScalePeer" + C] = this["cScalePeer" + C] || W(this["cScale" + C], 10);
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(-10 + C * 4) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(-7 + C * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Xi(this.quadrant1Fill) ? W(this.quadrant1Fill) : Z(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: ((f = this.radar) == null ? void 0 : f.axisColor) || this.lineColor,
      axisStrokeWidth: ((p = this.radar) == null ? void 0 : p.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_ = this.radar) == null ? void 0 : _.graticuleOpacity) || 0.3,
      legendBoxSize: ((v = this.radar) == null ? void 0 : v.legendBoxSize) || 12,
      legendFontSize: ((w = this.radar) == null ? void 0 : w.legendFontSize) || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? Z(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = W(this.secondaryColor, 20), this.git1 = W(this.pie2 || this.secondaryColor, 20), this.git2 = W(this.pie3 || this.tertiaryColor, 20), this.git3 = W(this.pie4 || T(this.primaryColor, { h: -30 }), 20), this.git4 = W(this.pie5 || T(this.primaryColor, { h: -60 }), 20), this.git5 = W(this.pie6 || T(this.primaryColor, { h: -90 }), 10), this.git6 = W(this.pie7 || T(this.primaryColor, { h: 60 }), 10), this.git7 = W(this.pie8 || T(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || I(this.git0), this.gitInv1 = this.gitInv1 || I(this.git1), this.gitInv2 = this.gitInv2 || I(this.git2), this.gitInv3 = this.gitInv3 || I(this.git3), this.gitInv4 = this.gitInv4 || I(this.git4), this.gitInv5 = this.gitInv5 || I(this.git5), this.gitInv6 = this.gitInv6 || I(this.git6), this.gitInv7 = this.gitInv7 || I(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || I(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || I(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || W(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(Pr, "Theme"), Pr), F0 = /* @__PURE__ */ d((e) => {
  const t = new $0();
  return t.calculate(e), t;
}, "getThemeVariables"), Nr, O0 = (Nr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = T(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = Nt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Nt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Nt(this.tertiaryColor, this.darkMode), this.primaryTextColor = I(this.primaryColor), this.secondaryTextColor = I(this.secondaryColor), this.tertiaryTextColor = I(this.tertiaryColor), this.lineColor = I(this.background), this.textColor = I(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = Mi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, _, v, w;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || Z(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || Z(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = Z(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || Z(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || T(this["cScale" + C], { h: 180 });
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, l: -(7 + C * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || I(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || I(this.labelTextColor);
      for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
        this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = W(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || W(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || T(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || T(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Xi(this.quadrant1Fill) ? W(this.quadrant1Fill) : Z(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r = this.radar) == null ? void 0 : r.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((n = this.radar) == null ? void 0 : n.curveOpacity) || 0.5,
      curveStrokeWidth: ((a = this.radar) == null ? void 0 : a.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((f = this.xyChart) == null ? void 0 : f.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((p = this.xyChart) == null ? void 0 : p.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_ = this.xyChart) == null ? void 0 : _.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((v = this.xyChart) == null ? void 0 : v.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((w = this.xyChart) == null ? void 0 : w.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = Z(this.git0, 25), this.git1 = Z(this.git1, 25), this.git2 = Z(this.git2, 25), this.git3 = Z(this.git3, 25), this.git4 = Z(this.git4, 25), this.git5 = Z(this.git5, 25), this.git6 = Z(this.git6, 25), this.git7 = Z(this.git7, 25)), this.gitInv0 = this.gitInv0 || Z(I(this.git0), 25), this.gitInv1 = this.gitInv1 || I(this.git1), this.gitInv2 = this.gitInv2 || I(this.git2), this.gitInv3 = this.gitInv3 || I(this.git3), this.gitInv4 = this.gitInv4 || I(this.git4), this.gitInv5 = this.gitInv5 || I(this.git5), this.gitInv6 = this.gitInv6 || I(this.git6), this.gitInv7 = this.gitInv7 || I(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || I(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || I(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _a, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || wa;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(Nr, "Theme"), Nr), R0 = /* @__PURE__ */ d((e) => {
  const t = new O0();
  return t.calculate(e), t;
}, "getThemeVariables"), zr, D0 = (zr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = W("#cde498", 10), this.primaryBorderColor = Nt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Nt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Nt(this.tertiaryColor, this.darkMode), this.primaryTextColor = I(this.primaryColor), this.secondaryTextColor = I(this.secondaryColor), this.tertiaryTextColor = I(this.primaryColor), this.lineColor = I(this.background), this.textColor = I(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, _, v, w;
    this.actorBorder = Z(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || Z(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || Z(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = Z(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || Z(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || T(this["cScale" + C], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || T(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Xi(this.quadrant1Fill) ? W(this.quadrant1Fill) : Z(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r = this.radar) == null ? void 0 : r.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((n = this.radar) == null ? void 0 : n.curveOpacity) || 0.5,
      curveStrokeWidth: ((a = this.radar) == null ? void 0 : a.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((f = this.xyChart) == null ? void 0 : f.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((p = this.xyChart) == null ? void 0 : p.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((_ = this.xyChart) == null ? void 0 : _.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((v = this.xyChart) == null ? void 0 : v.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((w = this.xyChart) == null ? void 0 : w.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = Z(this.git0, 25), this.git1 = Z(this.git1, 25), this.git2 = Z(this.git2, 25), this.git3 = Z(this.git3, 25), this.git4 = Z(this.git4, 25), this.git5 = Z(this.git5, 25), this.git6 = Z(this.git6, 25), this.git7 = Z(this.git7, 25)), this.gitInv0 = this.gitInv0 || I(this.git0), this.gitInv1 = this.gitInv1 || I(this.git1), this.gitInv2 = this.gitInv2 || I(this.git2), this.gitInv3 = this.gitInv3 || I(this.git3), this.gitInv4 = this.gitInv4 || I(this.git4), this.gitInv5 = this.gitInv5 || I(this.git5), this.gitInv6 = this.gitInv6 || I(this.git6), this.gitInv7 = this.gitInv7 || I(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || I(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || I(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _a, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || wa;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(zr, "Theme"), zr), I0 = /* @__PURE__ */ d((e) => {
  const t = new D0();
  return t.calculate(e), t;
}, "getThemeVariables"), qr, P0 = (qr = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = W(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = Nt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Nt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Nt(this.tertiaryColor, this.darkMode), this.primaryTextColor = I(this.primaryColor), this.secondaryTextColor = I(this.secondaryColor), this.tertiaryTextColor = I(this.tertiaryColor), this.lineColor = I(this.background), this.textColor = I(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r, i, n, a, o, s, l, c, h, u, f, p, g, m, y, x, b, _, v, w;
    this.secondBkg = W(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = W(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || I(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this.darkMode ? this["cScalePeer" + C] = this["cScalePeer" + C] || W(this["cScale" + C], 10) : this["cScalePeer" + C] = this["cScalePeer" + C] || Z(this["cScale" + C], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = W(this.contrast, 30), this.sectionBkgColor2 = W(this.contrast, 30), this.taskBorderColor = Z(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = W(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = Z(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Xi(this.quadrant1Fill) ? W(this.quadrant1Fill) : Z(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r = this.xyChart) == null ? void 0 : r.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((a = this.xyChart) == null ? void 0 : a.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: ((f = this.radar) == null ? void 0 : f.axisColor) || this.lineColor,
      axisStrokeWidth: ((p = this.radar) == null ? void 0 : p.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((_ = this.radar) == null ? void 0 : _.graticuleOpacity) || 0.3,
      legendBoxSize: ((v = this.radar) == null ? void 0 : v.legendBoxSize) || 12,
      legendFontSize: ((w = this.radar) == null ? void 0 : w.legendFontSize) || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = Z(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || T(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || T(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || T(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || T(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || T(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || I(this.git0), this.gitInv1 = this.gitInv1 || I(this.git1), this.gitInv2 = this.gitInv2 || I(this.git2), this.gitInv3 = this.gitInv3 || I(this.git3), this.gitInv4 = this.gitInv4 || I(this.git4), this.gitInv5 = this.gitInv5 || I(this.git5), this.gitInv6 = this.gitInv6 || I(this.git6), this.gitInv7 = this.gitInv7 || I(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || _a, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || wa;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, d(qr, "Theme"), qr), N0 = /* @__PURE__ */ d((e) => {
  const t = new P0();
  return t.calculate(e), t;
}, "getThemeVariables"), $e = {
  base: {
    getThemeVariables: E0
  },
  dark: {
    getThemeVariables: F0
  },
  default: {
    getThemeVariables: R0
  },
  forest: {
    getThemeVariables: I0
  },
  neutral: {
    getThemeVariables: N0
  }
}, ge = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: !0,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: ""
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, Fh = {
  ...ge,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: $e.default.getThemeVariables(),
  sequence: {
    ...ge.sequence,
    messageFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1
  },
  gantt: {
    ...ge.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...ge.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...ge.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ d(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...ge.pie,
    useWidth: 984
  },
  xyChart: {
    ...ge.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...ge.requirement,
    useWidth: void 0
  },
  packet: {
    ...ge.packet
  },
  radar: {
    ...ge.radar
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  }
}, Oh = /* @__PURE__ */ d((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...Oh(e[i], "")] : [...r, t + i], []), "keyify"), z0 = new Set(Oh(Fh, "")), Rh = Fh, Pn = /* @__PURE__ */ d((e) => {
  if (B.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => Pn(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (B.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !z0.has(t) || e[t] == null) {
        B.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        B.debug("sanitizing object", t), Pn(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (B.debug("sanitizing css option", t), e[t] = q0(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r != null && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    B.debug("After sanitization", e);
  }
}, "sanitizeDirective"), q0 = /* @__PURE__ */ d((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Yr = Object.freeze(Rh), Ut = kt({}, Yr), Nn, ur = [], $i = kt({}, Yr), ka = /* @__PURE__ */ d((e, t) => {
  let r = kt({}, e), i = {};
  for (const n of t)
    Ph(n), i = kt(i, n);
  if (r = kt(r, i), i.theme && i.theme in $e) {
    const n = kt({}, Nn), a = kt(
      n.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in $e && (r.themeVariables = $e[r.theme].getThemeVariables(a));
  }
  return $i = r, Nh($i), $i;
}, "updateCurrentConfig"), W0 = /* @__PURE__ */ d((e) => (Ut = kt({}, Yr), Ut = kt(Ut, e), e.theme && $e[e.theme] && (Ut.themeVariables = $e[e.theme].getThemeVariables(e.themeVariables)), ka(Ut, ur), Ut), "setSiteConfig"), H0 = /* @__PURE__ */ d((e) => {
  Nn = kt({}, e);
}, "saveConfigFromInitialize"), j0 = /* @__PURE__ */ d((e) => (Ut = kt(Ut, e), ka(Ut, ur), Ut), "updateSiteConfig"), Dh = /* @__PURE__ */ d(() => kt({}, Ut), "getSiteConfig"), Ih = /* @__PURE__ */ d((e) => (Nh(e), kt($i, e), Ot()), "setConfig"), Ot = /* @__PURE__ */ d(() => kt({}, $i), "getConfig"), Ph = /* @__PURE__ */ d((e) => {
  e && (["secure", ...Ut.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (B.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Ph(e[t]);
  }));
}, "sanitize"), Y0 = /* @__PURE__ */ d((e) => {
  var t;
  Pn(e), e.fontFamily && !((t = e.themeVariables) != null && t.fontFamily) && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), ur.push(e), ka(Ut, ur);
}, "addDirective"), zn = /* @__PURE__ */ d((e = Ut) => {
  ur = [], ka(e, ur);
}, "reset"), U0 = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, Ql = {}, G0 = /* @__PURE__ */ d((e) => {
  Ql[e] || (B.warn(U0[e]), Ql[e] = !0);
}, "issueWarning"), Nh = /* @__PURE__ */ d((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && G0("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), jA = /* @__PURE__ */ d(() => {
  let e = {};
  Nn && (e = kt(e, Nn));
  for (const t of ur)
    e = kt(e, t);
  return e;
}, "getUserDefinedConfig"), Vi = /<br\s*\/?>/gi, X0 = /* @__PURE__ */ d((e) => e ? Wh(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), V0 = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (zh(), e = !0);
  };
})();
function zh() {
  const e = "data-temp-href-target";
  jr.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), jr.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
d(zh, "setupDompurifyHooks");
var qh = /* @__PURE__ */ d((e) => (V0(), jr.sanitize(e)), "removeScript"), Jl = /* @__PURE__ */ d((e, t) => {
  var r;
  if (((r = t.flowchart) == null ? void 0 : r.htmlLabels) !== !1) {
    const i = t.securityLevel;
    i === "antiscript" || i === "strict" ? e = qh(e) : i !== "loose" && (e = Wh(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = J0(e));
  }
  return e;
}, "sanitizeMore"), te = /* @__PURE__ */ d((e, t) => e && (t.dompurifyConfig ? e = jr.sanitize(Jl(e, t), t.dompurifyConfig).toString() : e = jr.sanitize(Jl(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), Z0 = /* @__PURE__ */ d((e, t) => typeof e == "string" ? te(e, t) : e.flat().map((r) => te(r, t)), "sanitizeTextOrArray"), K0 = /* @__PURE__ */ d((e) => Vi.test(e), "hasBreaks"), Q0 = /* @__PURE__ */ d((e) => e.split(Vi), "splitBreaks"), J0 = /* @__PURE__ */ d((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Wh = /* @__PURE__ */ d((e) => e.replace(Vi, "#br#"), "breakToPlaceholder"), ty = /* @__PURE__ */ d((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), St = /* @__PURE__ */ d((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), ey = /* @__PURE__ */ d(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), ry = /* @__PURE__ */ d(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), tc = /* @__PURE__ */ d(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    if (n === "," && i > 0 && i + 1 < t.length) {
      const a = t[i - 1], o = t[i + 1];
      iy(a, o) && (n = a + "," + o, i++, r.pop());
    }
    r.push(ny(n));
  }
  return r.join("");
}, "parseGenericTypes"), As = /* @__PURE__ */ d((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), iy = /* @__PURE__ */ d((e, t) => {
  const r = As(e, "~"), i = As(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), ny = /* @__PURE__ */ d((e) => {
  const t = As(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let n = i.indexOf("~"), a = i.lastIndexOf("~");
  for (; n !== -1 && a !== -1 && n !== a; )
    i[n] = "<", i[a] = ">", n = i.indexOf("~"), a = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), ec = /* @__PURE__ */ d(() => window.MathMLElement !== void 0, "isMathMLSupported"), Ls = /\$\$(.*)\$\$/g, Ur = /* @__PURE__ */ d((e) => {
  var t;
  return (((t = e.match(Ls)) == null ? void 0 : t.length) ?? 0) > 0;
}, "hasKatex"), YA = /* @__PURE__ */ d(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await So(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0";
  const i = document.querySelector("body");
  i == null || i.insertAdjacentElement("beforeend", r);
  const n = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), n;
}, "calculateMathMLDimensions"), ay = /* @__PURE__ */ d(async (e, t) => {
  if (!Ur(e))
    return e;
  if (!(ec() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(Ls, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-C0Lgw_Sx.js"), i = t.forceLegacyMathML || !ec() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(Vi).map(
      (n) => Ur(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`
    ).join("").replace(
      Ls,
      (n, a) => r.renderToString(a, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), So = /* @__PURE__ */ d(async (e, t) => te(await ay(e, t), t), "renderKatexSanitized"), Jr = {
  getRows: X0,
  sanitizeText: te,
  sanitizeTextOrArray: Z0,
  hasBreaks: K0,
  splitBreaks: Q0,
  lineBreakRegex: Vi,
  removeScript: qh,
  getUrl: ty,
  evaluate: St,
  getMax: ey,
  getMin: ry
}, sy = /* @__PURE__ */ d(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), oy = /* @__PURE__ */ d(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Hh = /* @__PURE__ */ d(function(e, t, r, i) {
  const n = oy(t, r, i);
  sy(e, n);
}, "configureSvgSize"), ly = /* @__PURE__ */ d(function(e, t, r, i) {
  const n = t.node().getBBox(), a = n.width, o = n.height;
  B.info(`SVG bounds: ${a}x${o}`, n);
  let s = 0, l = 0;
  B.info(`Graph bounds: ${s}x${l}`, e), s = a + r * 2, l = o + r * 2, B.info(`Calculated bounds: ${s}x${l}`), Hh(t, l, s, i);
  const c = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), Tn = {}, cy = /* @__PURE__ */ d((e, t, r) => {
  let i = "";
  return e in Tn && Tn[e] ? i = Tn[e](r) : B.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles"), hy = /* @__PURE__ */ d((e, t) => {
  t !== void 0 && (Tn[e] = t);
}, "addStylesForDiagram"), uy = cy, jh = {};
Jm(jh, {
  clear: () => fy,
  getAccDescription: () => my,
  getAccTitle: () => dy,
  getDiagramTitle: () => xy,
  setAccDescription: () => gy,
  setAccTitle: () => py,
  setDiagramTitle: () => yy
});
var To = "", Bo = "", Ao = "", Lo = /* @__PURE__ */ d((e) => te(e, Ot()), "sanitizeText"), fy = /* @__PURE__ */ d(() => {
  To = "", Ao = "", Bo = "";
}, "clear"), py = /* @__PURE__ */ d((e) => {
  To = Lo(e).replace(/^\s+/g, "");
}, "setAccTitle"), dy = /* @__PURE__ */ d(() => To, "getAccTitle"), gy = /* @__PURE__ */ d((e) => {
  Ao = Lo(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), my = /* @__PURE__ */ d(() => Ao, "getAccDescription"), yy = /* @__PURE__ */ d((e) => {
  Bo = Lo(e);
}, "setDiagramTitle"), xy = /* @__PURE__ */ d(() => Bo, "getDiagramTitle"), rc = B, by = ko, lt = Ot, UA = Ih, GA = Yr, Mo = /* @__PURE__ */ d((e) => te(e, lt()), "sanitizeText"), Cy = ly, _y = /* @__PURE__ */ d(() => jh, "getCommonDb"), qn = {}, Wn = /* @__PURE__ */ d((e, t, r) => {
  var i;
  qn[e] && rc.warn(`Diagram with id ${e} already registered. Overwriting.`), qn[e] = t, r && $h(e, r), hy(e, t.styles), (i = t.injectUtils) == null || i.call(
    t,
    rc,
    by,
    lt,
    Mo,
    Cy,
    _y(),
    () => {
    }
  );
}, "registerDiagram"), Ms = /* @__PURE__ */ d((e) => {
  if (e in qn)
    return qn[e];
  throw new wy(e);
}, "getDiagram"), Wr, wy = (Wr = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, d(Wr, "DiagramNotFoundError"), Wr), ky = { value: () => {
} };
function Yh() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new Bn(r);
}
function Bn(e) {
  this._ = e;
}
function vy(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", n = r.indexOf(".");
    if (n >= 0 && (i = r.slice(n + 1), r = r.slice(0, n)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
Bn.prototype = Yh.prototype = {
  constructor: Bn,
  on: function(e, t) {
    var r = this._, i = vy(e + "", r), n, a = -1, o = i.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((n = (e = i[a]).type) && (n = Sy(r[n], e.name))) return n;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < o; )
      if (n = (e = i[a]).type) r[n] = ic(r[n], e.name, t);
      else if (t == null) for (n in r) r[n] = ic(r[n], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Bn(e);
  },
  call: function(e, t) {
    if ((n = arguments.length - 2) > 0) for (var r = new Array(n), i = 0, n, a; i < n; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], i = 0, n = a.length; i < n; ++i) a[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], n = 0, a = i.length; n < a; ++n) i[n].value.apply(t, r);
  }
};
function Sy(e, t) {
  for (var r = 0, i = e.length, n; r < i; ++r)
    if ((n = e[r]).name === t)
      return n.value;
}
function ic(e, t, r) {
  for (var i = 0, n = e.length; i < n; ++i)
    if (e[i].name === t) {
      e[i] = ky, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var Es = "http://www.w3.org/1999/xhtml";
const nc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function va(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), nc.hasOwnProperty(t) ? { space: nc[t], local: e } : e;
}
function Ty(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === Es && t.documentElement.namespaceURI === Es ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function By(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Uh(e) {
  var t = va(e);
  return (t.local ? By : Ty)(t);
}
function Ay() {
}
function Eo(e) {
  return e == null ? Ay : function() {
    return this.querySelector(e);
  };
}
function Ly(e) {
  typeof e != "function" && (e = Eo(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = new Array(o), l, c, h = 0; h < o; ++h)
      (l = a[h]) && (c = e.call(l, l.__data__, h, a)) && ("__data__" in l && (c.__data__ = l.__data__), s[h] = c);
  return new Kt(i, this._parents);
}
function My(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ey() {
  return [];
}
function Gh(e) {
  return e == null ? Ey : function() {
    return this.querySelectorAll(e);
  };
}
function $y(e) {
  return function() {
    return My(e.apply(this, arguments));
  };
}
function Fy(e) {
  typeof e == "function" ? e = $y(e) : e = Gh(e);
  for (var t = this._groups, r = t.length, i = [], n = [], a = 0; a < r; ++a)
    for (var o = t[a], s = o.length, l, c = 0; c < s; ++c)
      (l = o[c]) && (i.push(e.call(l, l.__data__, c, o)), n.push(l));
  return new Kt(i, n);
}
function Xh(e) {
  return function() {
    return this.matches(e);
  };
}
function Vh(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Oy = Array.prototype.find;
function Ry(e) {
  return function() {
    return Oy.call(this.children, e);
  };
}
function Dy() {
  return this.firstElementChild;
}
function Iy(e) {
  return this.select(e == null ? Dy : Ry(typeof e == "function" ? e : Vh(e)));
}
var Py = Array.prototype.filter;
function Ny() {
  return Array.from(this.children);
}
function zy(e) {
  return function() {
    return Py.call(this.children, e);
  };
}
function qy(e) {
  return this.selectAll(e == null ? Ny : zy(typeof e == "function" ? e : Vh(e)));
}
function Wy(e) {
  typeof e != "function" && (e = Xh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = [], l, c = 0; c < o; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && s.push(l);
  return new Kt(i, this._parents);
}
function Zh(e) {
  return new Array(e.length);
}
function Hy() {
  return new Kt(this._enter || this._groups.map(Zh), this._parents);
}
function Hn(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Hn.prototype = {
  constructor: Hn,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function jy(e) {
  return function() {
    return e;
  };
}
function Yy(e, t, r, i, n, a) {
  for (var o = 0, s, l = t.length, c = a.length; o < c; ++o)
    (s = t[o]) ? (s.__data__ = a[o], i[o] = s) : r[o] = new Hn(e, a[o]);
  for (; o < l; ++o)
    (s = t[o]) && (n[o] = s);
}
function Uy(e, t, r, i, n, a, o) {
  var s, l, c = /* @__PURE__ */ new Map(), h = t.length, u = a.length, f = new Array(h), p;
  for (s = 0; s < h; ++s)
    (l = t[s]) && (f[s] = p = o.call(l, l.__data__, s, t) + "", c.has(p) ? n[s] = l : c.set(p, l));
  for (s = 0; s < u; ++s)
    p = o.call(e, a[s], s, a) + "", (l = c.get(p)) ? (i[s] = l, l.__data__ = a[s], c.delete(p)) : r[s] = new Hn(e, a[s]);
  for (s = 0; s < h; ++s)
    (l = t[s]) && c.get(f[s]) === l && (n[s] = l);
}
function Gy(e) {
  return e.__data__;
}
function Xy(e, t) {
  if (!arguments.length) return Array.from(this, Gy);
  var r = t ? Uy : Yy, i = this._parents, n = this._groups;
  typeof e != "function" && (e = jy(e));
  for (var a = n.length, o = new Array(a), s = new Array(a), l = new Array(a), c = 0; c < a; ++c) {
    var h = i[c], u = n[c], f = u.length, p = Vy(e.call(h, h && h.__data__, c, i)), g = p.length, m = s[c] = new Array(g), y = o[c] = new Array(g), x = l[c] = new Array(f);
    r(h, u, m, y, x, p, t);
    for (var b = 0, _ = 0, v, w; b < g; ++b)
      if (v = m[b]) {
        for (b >= _ && (_ = b + 1); !(w = y[_]) && ++_ < g; ) ;
        v._next = w || null;
      }
  }
  return o = new Kt(o, i), o._enter = s, o._exit = l, o;
}
function Vy(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Zy() {
  return new Kt(this._exit || this._groups.map(Zh), this._parents);
}
function Ky(e, t, r) {
  var i = this.enter(), n = this, a = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (n = t(n), n && (n = n.selection())), r == null ? a.remove() : r(a), i && n ? i.merge(n).order() : n;
}
function Qy(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, n = r.length, a = i.length, o = Math.min(n, a), s = new Array(n), l = 0; l < o; ++l)
    for (var c = r[l], h = i[l], u = c.length, f = s[l] = new Array(u), p, g = 0; g < u; ++g)
      (p = c[g] || h[g]) && (f[g] = p);
  for (; l < n; ++l)
    s[l] = r[l];
  return new Kt(s, this._parents);
}
function Jy() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], n = i.length - 1, a = i[n], o; --n >= 0; )
      (o = i[n]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function tx(e) {
  e || (e = ex);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, n = new Array(i), a = 0; a < i; ++a) {
    for (var o = r[a], s = o.length, l = n[a] = new Array(s), c, h = 0; h < s; ++h)
      (c = o[h]) && (l[h] = c);
    l.sort(t);
  }
  return new Kt(n, this._parents).order();
}
function ex(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function rx() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ix() {
  return Array.from(this);
}
function nx() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length; n < a; ++n) {
      var o = i[n];
      if (o) return o;
    }
  return null;
}
function ax() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function sx() {
  return !this.node();
}
function ox(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var n = t[r], a = 0, o = n.length, s; a < o; ++a)
      (s = n[a]) && e.call(s, s.__data__, a, n);
  return this;
}
function lx(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function cx(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function hx(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ux(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function fx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function px(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function dx(e, t) {
  var r = va(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? cx : lx : typeof t == "function" ? r.local ? px : fx : r.local ? ux : hx)(r, t));
}
function Kh(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function gx(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function mx(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function yx(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function xx(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? gx : typeof t == "function" ? yx : mx)(e, t, r ?? "")) : Gr(this.node(), e);
}
function Gr(e, t) {
  return e.style.getPropertyValue(t) || Kh(e).getComputedStyle(e, null).getPropertyValue(t);
}
function bx(e) {
  return function() {
    delete this[e];
  };
}
function Cx(e, t) {
  return function() {
    this[e] = t;
  };
}
function _x(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function wx(e, t) {
  return arguments.length > 1 ? this.each((t == null ? bx : typeof t == "function" ? _x : Cx)(e, t)) : this.node()[e];
}
function Qh(e) {
  return e.trim().split(/^|\s+/);
}
function $o(e) {
  return e.classList || new Jh(e);
}
function Jh(e) {
  this._node = e, this._names = Qh(e.getAttribute("class") || "");
}
Jh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function tu(e, t) {
  for (var r = $o(e), i = -1, n = t.length; ++i < n; ) r.add(t[i]);
}
function eu(e, t) {
  for (var r = $o(e), i = -1, n = t.length; ++i < n; ) r.remove(t[i]);
}
function kx(e) {
  return function() {
    tu(this, e);
  };
}
function vx(e) {
  return function() {
    eu(this, e);
  };
}
function Sx(e, t) {
  return function() {
    (t.apply(this, arguments) ? tu : eu)(this, e);
  };
}
function Tx(e, t) {
  var r = Qh(e + "");
  if (arguments.length < 2) {
    for (var i = $o(this.node()), n = -1, a = r.length; ++n < a; ) if (!i.contains(r[n])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Sx : t ? kx : vx)(r, t));
}
function Bx() {
  this.textContent = "";
}
function Ax(e) {
  return function() {
    this.textContent = e;
  };
}
function Lx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Mx(e) {
  return arguments.length ? this.each(e == null ? Bx : (typeof e == "function" ? Lx : Ax)(e)) : this.node().textContent;
}
function Ex() {
  this.innerHTML = "";
}
function $x(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Fx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ox(e) {
  return arguments.length ? this.each(e == null ? Ex : (typeof e == "function" ? Fx : $x)(e)) : this.node().innerHTML;
}
function Rx() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Dx() {
  return this.each(Rx);
}
function Ix() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Px() {
  return this.each(Ix);
}
function Nx(e) {
  var t = typeof e == "function" ? e : Uh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function zx() {
  return null;
}
function qx(e, t) {
  var r = typeof e == "function" ? e : Uh(e), i = t == null ? zx : typeof t == "function" ? t : Eo(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Wx() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Hx() {
  return this.each(Wx);
}
function jx() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yx() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ux(e) {
  return this.select(e ? Yx : jx);
}
function Gx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Xx(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Vx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Zx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, n = t.length, a; r < n; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++i] = a;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function Kx(e, t, r) {
  return function() {
    var i = this.__on, n, a = Xx(t);
    if (i) {
      for (var o = 0, s = i.length; o < s; ++o)
        if ((n = i[o]).type === e.type && n.name === e.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = a, n.options = r), n.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, r), n = { type: e.type, name: e.name, value: t, listener: a, options: r }, i ? i.push(n) : this.__on = [n];
  };
}
function Qx(e, t, r) {
  var i = Vx(e + ""), n, a = i.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, c = s.length, h; l < c; ++l)
        for (n = 0, h = s[l]; n < a; ++n)
          if ((o = i[n]).type === h.type && o.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = t ? Kx : Zx, n = 0; n < a; ++n) this.each(s(i[n], t, r));
  return this;
}
function ru(e, t, r) {
  var i = Kh(e), n = i.CustomEvent;
  typeof n == "function" ? n = new n(t, r) : (n = i.document.createEvent("Event"), r ? (n.initEvent(t, r.bubbles, r.cancelable), n.detail = r.detail) : n.initEvent(t, !1, !1)), e.dispatchEvent(n);
}
function Jx(e, t) {
  return function() {
    return ru(this, e, t);
  };
}
function tb(e, t) {
  return function() {
    return ru(this, e, t.apply(this, arguments));
  };
}
function eb(e, t) {
  return this.each((typeof t == "function" ? tb : Jx)(e, t));
}
function* rb() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], n = 0, a = i.length, o; n < a; ++n)
      (o = i[n]) && (yield o);
}
var iu = [null];
function Kt(e, t) {
  this._groups = e, this._parents = t;
}
function Zi() {
  return new Kt([[document.documentElement]], iu);
}
function ib() {
  return this;
}
Kt.prototype = Zi.prototype = {
  constructor: Kt,
  select: Ly,
  selectAll: Fy,
  selectChild: Iy,
  selectChildren: qy,
  filter: Wy,
  data: Xy,
  enter: Hy,
  exit: Zy,
  join: Ky,
  merge: Qy,
  selection: ib,
  order: Jy,
  sort: tx,
  call: rx,
  nodes: ix,
  node: nx,
  size: ax,
  empty: sx,
  each: ox,
  attr: dx,
  style: xx,
  property: wx,
  classed: Tx,
  text: Mx,
  html: Ox,
  raise: Dx,
  lower: Px,
  append: Nx,
  insert: qx,
  remove: Hx,
  clone: Ux,
  datum: Gx,
  on: Qx,
  dispatch: eb,
  [Symbol.iterator]: rb
};
function at(e) {
  return typeof e == "string" ? new Kt([[document.querySelector(e)]], [document.documentElement]) : new Kt([[e]], iu);
}
function Fo(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function nu(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function Ki() {
}
var Ri = 0.7, jn = 1 / Ri, Or = "\\s*([+-]?\\d+)\\s*", Di = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nb = /^#([0-9a-f]{3,8})$/, ab = new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`), sb = new RegExp(`^rgb\\(${be},${be},${be}\\)$`), ob = new RegExp(`^rgba\\(${Or},${Or},${Or},${Di}\\)$`), lb = new RegExp(`^rgba\\(${be},${be},${be},${Di}\\)$`), cb = new RegExp(`^hsl\\(${Di},${be},${be}\\)$`), hb = new RegExp(`^hsla\\(${Di},${be},${be},${Di}\\)$`), ac = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Fo(Ki, Ii, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sc,
  // Deprecated! Use color.formatHex.
  formatHex: sc,
  formatHex8: ub,
  formatHsl: fb,
  formatRgb: oc,
  toString: oc
});
function sc() {
  return this.rgb().formatHex();
}
function ub() {
  return this.rgb().formatHex8();
}
function fb() {
  return au(this).formatHsl();
}
function oc() {
  return this.rgb().formatRgb();
}
function Ii(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = nb.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lc(t) : r === 3 ? new Xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? pn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? pn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ab.exec(e)) ? new Xt(t[1], t[2], t[3], 1) : (t = sb.exec(e)) ? new Xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ob.exec(e)) ? pn(t[1], t[2], t[3], t[4]) : (t = lb.exec(e)) ? pn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cb.exec(e)) ? uc(t[1], t[2] / 100, t[3] / 100, 1) : (t = hb.exec(e)) ? uc(t[1], t[2] / 100, t[3] / 100, t[4]) : ac.hasOwnProperty(e) ? lc(ac[e]) : e === "transparent" ? new Xt(NaN, NaN, NaN, 0) : null;
}
function lc(e) {
  return new Xt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pn(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new Xt(e, t, r, i);
}
function pb(e) {
  return e instanceof Ki || (e = Ii(e)), e ? (e = e.rgb(), new Xt(e.r, e.g, e.b, e.opacity)) : new Xt();
}
function $s(e, t, r, i) {
  return arguments.length === 1 ? pb(e) : new Xt(e, t, r, i ?? 1);
}
function Xt(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
Fo(Xt, $s, nu(Ki, {
  brighter(e) {
    return e = e == null ? jn : Math.pow(jn, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ri : Math.pow(Ri, e), new Xt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Xt(lr(this.r), lr(this.g), lr(this.b), Yn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cc,
  // Deprecated! Use color.formatHex.
  formatHex: cc,
  formatHex8: db,
  formatRgb: hc,
  toString: hc
}));
function cc() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function db() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function hc() {
  const e = Yn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function uc(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ce(e, t, r, i);
}
function au(e) {
  if (e instanceof ce) return new ce(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ki || (e = Ii(e)), !e) return new ce();
  if (e instanceof ce) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, n = Math.min(t, r, i), a = Math.max(t, r, i), o = NaN, s = a - n, l = (a + n) / 2;
  return s ? (t === a ? o = (r - i) / s + (r < i) * 6 : r === a ? o = (i - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + n : 2 - a - n, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new ce(o, s, l, e.opacity);
}
function gb(e, t, r, i) {
  return arguments.length === 1 ? au(e) : new ce(e, t, r, i ?? 1);
}
function ce(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
Fo(ce, gb, nu(Ki, {
  brighter(e) {
    return e = e == null ? jn : Math.pow(jn, e), new ce(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ri : Math.pow(Ri, e), new ce(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, n = 2 * r - i;
    return new Xt(
      ls(e >= 240 ? e - 240 : e + 120, n, i),
      ls(e, n, i),
      ls(e < 120 ? e + 240 : e - 120, n, i),
      this.opacity
    );
  },
  clamp() {
    return new ce(fc(this.h), dn(this.s), dn(this.l), Yn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${fc(this.h)}, ${dn(this.s) * 100}%, ${dn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function fc(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function dn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ls(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Oo = (e) => () => e;
function su(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function mb(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function XA(e, t) {
  var r = t - e;
  return r ? su(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Oo(isNaN(e) ? t : e);
}
function yb(e) {
  return (e = +e) == 1 ? ou : function(t, r) {
    return r - t ? mb(t, r, e) : Oo(isNaN(t) ? r : t);
  };
}
function ou(e, t) {
  var r = t - e;
  return r ? su(e, r) : Oo(isNaN(e) ? t : e);
}
const pc = (function e(t) {
  var r = yb(t);
  function i(n, a) {
    var o = r((n = $s(n)).r, (a = $s(a)).r), s = r(n.g, a.g), l = r(n.b, a.b), c = ou(n.opacity, a.opacity);
    return function(h) {
      return n.r = o(h), n.g = s(h), n.b = l(h), n.opacity = c(h), n + "";
    };
  }
  return i.gamma = e, i;
})(1);
function Ne(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Fs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cs = new RegExp(Fs.source, "g");
function xb(e) {
  return function() {
    return e;
  };
}
function bb(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Cb(e, t) {
  var r = Fs.lastIndex = cs.lastIndex = 0, i, n, a, o = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (i = Fs.exec(e)) && (n = cs.exec(t)); )
    (a = n.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (i = i[0]) === (n = n[0]) ? s[o] ? s[o] += n : s[++o] = n : (s[++o] = null, l.push({ i: o, x: Ne(i, n) })), r = cs.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? bb(l[0].x) : xb(t) : (t = l.length, function(c) {
    for (var h = 0, u; h < t; ++h) s[(u = l[h]).i] = u.x(c);
    return s.join("");
  });
}
var dc = 180 / Math.PI, Os = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function lu(e, t, r, i, n, a) {
  var o, s, l;
  return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (l = e * r + t * i) && (r -= e * l, i -= t * l), (s = Math.sqrt(r * r + i * i)) && (r /= s, i /= s, l /= s), e * i < t * r && (e = -e, t = -t, l = -l, o = -o), {
    translateX: n,
    translateY: a,
    rotate: Math.atan2(t, e) * dc,
    skewX: Math.atan(l) * dc,
    scaleX: o,
    scaleY: s
  };
}
var gn;
function _b(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Os : lu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function wb(e) {
  return e == null || (gn || (gn = document.createElementNS("http://www.w3.org/2000/svg", "g")), gn.setAttribute("transform", e), !(e = gn.transform.baseVal.consolidate())) ? Os : (e = e.matrix, lu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cu(e, t, r, i) {
  function n(c) {
    return c.length ? c.pop() + " " : "";
  }
  function a(c, h, u, f, p, g) {
    if (c !== u || h !== f) {
      var m = p.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: Ne(c, u) }, { i: m - 2, x: Ne(h, f) });
    } else (u || f) && p.push("translate(" + u + t + f + r);
  }
  function o(c, h, u, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: u.push(n(u) + "rotate(", null, i) - 2, x: Ne(c, h) })) : h && u.push(n(u) + "rotate(" + h + i);
  }
  function s(c, h, u, f) {
    c !== h ? f.push({ i: u.push(n(u) + "skewX(", null, i) - 2, x: Ne(c, h) }) : h && u.push(n(u) + "skewX(" + h + i);
  }
  function l(c, h, u, f, p, g) {
    if (c !== u || h !== f) {
      var m = p.push(n(p) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ne(c, u) }, { i: m - 2, x: Ne(h, f) });
    } else (u !== 1 || f !== 1) && p.push(n(p) + "scale(" + u + "," + f + ")");
  }
  return function(c, h) {
    var u = [], f = [];
    return c = e(c), h = e(h), a(c.translateX, c.translateY, h.translateX, h.translateY, u, f), o(c.rotate, h.rotate, u, f), s(c.skewX, h.skewX, u, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, f), c = h = null, function(p) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(p);
      return u.join("");
    };
  };
}
var kb = cu(_b, "px, ", "px)", "deg)"), vb = cu(wb, ", ", ")", ")"), Xr = 0, _i = 0, pi = 0, hu = 1e3, Un, wi, Gn = 0, fr = 0, Sa = 0, Pi = typeof performance == "object" && performance.now ? performance : Date, uu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ro() {
  return fr || (uu(Sb), fr = Pi.now() + Sa);
}
function Sb() {
  fr = 0;
}
function Xn() {
  this._call = this._time = this._next = null;
}
Xn.prototype = fu.prototype = {
  constructor: Xn,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? Ro() : +r) + (t == null ? 0 : +t), !this._next && wi !== this && (wi ? wi._next = this : Un = this, wi = this), this._call = e, this._time = r, Rs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Rs());
  }
};
function fu(e, t, r) {
  var i = new Xn();
  return i.restart(e, t, r), i;
}
function Tb() {
  Ro(), ++Xr;
  for (var e = Un, t; e; )
    (t = fr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Xr;
}
function gc() {
  fr = (Gn = Pi.now()) + Sa, Xr = _i = 0;
  try {
    Tb();
  } finally {
    Xr = 0, Ab(), fr = 0;
  }
}
function Bb() {
  var e = Pi.now(), t = e - Gn;
  t > hu && (Sa -= t, Gn = e);
}
function Ab() {
  for (var e, t = Un, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Un = r);
  wi = e, Rs(i);
}
function Rs(e) {
  if (!Xr) {
    _i && (_i = clearTimeout(_i));
    var t = e - fr;
    t > 24 ? (e < 1 / 0 && (_i = setTimeout(gc, e - Pi.now() - Sa)), pi && (pi = clearInterval(pi))) : (pi || (Gn = Pi.now(), pi = setInterval(Bb, hu)), Xr = 1, uu(gc));
  }
}
function mc(e, t, r) {
  var i = new Xn();
  return t = t == null ? 0 : +t, i.restart((n) => {
    i.stop(), e(n + t);
  }, t, r), i;
}
var Lb = Yh("start", "end", "cancel", "interrupt"), Mb = [], pu = 0, yc = 1, Ds = 2, An = 3, xc = 4, Is = 5, Ln = 6;
function Ta(e, t, r, i, n, a) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (r in o) return;
  Eb(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: n,
    // For context during callback.
    on: Lb,
    tween: Mb,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: pu
  });
}
function Do(e, t) {
  var r = pe(e, t);
  if (r.state > pu) throw new Error("too late; already scheduled");
  return r;
}
function we(e, t) {
  var r = pe(e, t);
  if (r.state > An) throw new Error("too late; already running");
  return r;
}
function pe(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function Eb(e, t, r) {
  var i = e.__transition, n;
  i[t] = r, r.timer = fu(a, 0, r.time);
  function a(c) {
    r.state = yc, r.timer.restart(o, r.delay, r.time), r.delay <= c && o(c - r.delay);
  }
  function o(c) {
    var h, u, f, p;
    if (r.state !== yc) return l();
    for (h in i)
      if (p = i[h], p.name === r.name) {
        if (p.state === An) return mc(o);
        p.state === xc ? (p.state = Ln, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete i[h]) : +h < t && (p.state = Ln, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete i[h]);
      }
    if (mc(function() {
      r.state === An && (r.state = xc, r.timer.restart(s, r.delay, r.time), s(c));
    }), r.state = Ds, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Ds) {
      for (r.state = An, n = new Array(f = r.tween.length), h = 0, u = -1; h < f; ++h)
        (p = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (n[++u] = p);
      n.length = u + 1;
    }
  }
  function s(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = Is, 1), u = -1, f = n.length; ++u < f; )
      n[u].call(e, h);
    r.state === Is && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = Ln, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function $b(e, t) {
  var r = e.__transition, i, n, a = !0, o;
  if (r) {
    t = t == null ? null : t + "";
    for (o in r) {
      if ((i = r[o]).name !== t) {
        a = !1;
        continue;
      }
      n = i.state > Ds && i.state < Is, i.state = Ln, i.timer.stop(), i.on.call(n ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[o];
    }
    a && delete e.__transition;
  }
}
function Fb(e) {
  return this.each(function() {
    $b(this, e);
  });
}
function Ob(e, t) {
  var r, i;
  return function() {
    var n = we(this, e), a = n.tween;
    if (a !== r) {
      i = r = a;
      for (var o = 0, s = i.length; o < s; ++o)
        if (i[o].name === t) {
          i = i.slice(), i.splice(o, 1);
          break;
        }
    }
    n.tween = i;
  };
}
function Rb(e, t, r) {
  var i, n;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = we(this, e), o = a.tween;
    if (o !== i) {
      n = (i = o).slice();
      for (var s = { name: t, value: r }, l = 0, c = n.length; l < c; ++l)
        if (n[l].name === t) {
          n[l] = s;
          break;
        }
      l === c && n.push(s);
    }
    a.tween = n;
  };
}
function Db(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = pe(this.node(), r).tween, n = 0, a = i.length, o; n < a; ++n)
      if ((o = i[n]).name === e)
        return o.value;
    return null;
  }
  return this.each((t == null ? Ob : Rb)(r, e, t));
}
function Io(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var n = we(this, i);
    (n.value || (n.value = {}))[t] = r.apply(this, arguments);
  }), function(n) {
    return pe(n, i).value[t];
  };
}
function du(e, t) {
  var r;
  return (typeof t == "number" ? Ne : t instanceof Ii ? pc : (r = Ii(t)) ? (t = r, pc) : Cb)(e, t);
}
function Ib(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Pb(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Nb(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = this.getAttribute(e);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function zb(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function qb(e, t, r) {
  var i, n, a;
  return function() {
    var o, s = r(this), l;
    return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), l = s + "", o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s)));
  };
}
function Wb(e, t, r) {
  var i, n, a;
  return function() {
    var o, s = r(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), l = s + "", o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s)));
  };
}
function Hb(e, t) {
  var r = va(e), i = r === "transform" ? vb : du;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Wb : qb)(r, i, Io(this, "attr." + e, t)) : t == null ? (r.local ? Pb : Ib)(r) : (r.local ? zb : Nb)(r, i, t));
}
function jb(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Yb(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Ub(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Yb(e, a)), r;
  }
  return n._value = t, n;
}
function Gb(e, t) {
  var r, i;
  function n() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && jb(e, a)), r;
  }
  return n._value = t, n;
}
function Xb(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = va(e);
  return this.tween(r, (i.local ? Ub : Gb)(i, t));
}
function Vb(e, t) {
  return function() {
    Do(this, e).delay = +t.apply(this, arguments);
  };
}
function Zb(e, t) {
  return t = +t, function() {
    Do(this, e).delay = t;
  };
}
function Kb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Vb : Zb)(t, e)) : pe(this.node(), t).delay;
}
function Qb(e, t) {
  return function() {
    we(this, e).duration = +t.apply(this, arguments);
  };
}
function Jb(e, t) {
  return t = +t, function() {
    we(this, e).duration = t;
  };
}
function t1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Qb : Jb)(t, e)) : pe(this.node(), t).duration;
}
function e1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    we(this, e).ease = t;
  };
}
function r1(e) {
  var t = this._id;
  return arguments.length ? this.each(e1(t, e)) : pe(this.node(), t).ease;
}
function i1(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    we(this, e).ease = r;
  };
}
function n1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(i1(this._id, e));
}
function a1(e) {
  typeof e != "function" && (e = Xh(e));
  for (var t = this._groups, r = t.length, i = new Array(r), n = 0; n < r; ++n)
    for (var a = t[n], o = a.length, s = i[n] = [], l, c = 0; c < o; ++c)
      (l = a[c]) && e.call(l, l.__data__, c, a) && s.push(l);
  return new Oe(i, this._parents, this._name, this._id);
}
function s1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, n = r.length, a = Math.min(i, n), o = new Array(i), s = 0; s < a; ++s)
    for (var l = t[s], c = r[s], h = l.length, u = o[s] = new Array(h), f, p = 0; p < h; ++p)
      (f = l[p] || c[p]) && (u[p] = f);
  for (; s < i; ++s)
    o[s] = t[s];
  return new Oe(o, this._parents, this._name, this._id);
}
function o1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function l1(e, t, r) {
  var i, n, a = o1(t) ? Do : we;
  return function() {
    var o = a(this, e), s = o.on;
    s !== i && (n = (i = s).copy()).on(t, r), o.on = n;
  };
}
function c1(e, t) {
  var r = this._id;
  return arguments.length < 2 ? pe(this.node(), r).on.on(e) : this.each(l1(r, e, t));
}
function h1(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function u1() {
  return this.on("end.remove", h1(this._id));
}
function f1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Eo(e));
  for (var i = this._groups, n = i.length, a = new Array(n), o = 0; o < n; ++o)
    for (var s = i[o], l = s.length, c = a[o] = new Array(l), h, u, f = 0; f < l; ++f)
      (h = s[f]) && (u = e.call(h, h.__data__, f, s)) && ("__data__" in h && (u.__data__ = h.__data__), c[f] = u, Ta(c[f], t, r, f, c, pe(h, r)));
  return new Oe(a, this._parents, t, r);
}
function p1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Gh(e));
  for (var i = this._groups, n = i.length, a = [], o = [], s = 0; s < n; ++s)
    for (var l = i[s], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var f = e.call(h, h.__data__, u, l), p, g = pe(h, r), m = 0, y = f.length; m < y; ++m)
          (p = f[m]) && Ta(p, t, r, m, f, g);
        a.push(f), o.push(h);
      }
  return new Oe(a, o, t, r);
}
var d1 = Zi.prototype.constructor;
function g1() {
  return new d1(this._groups, this._parents);
}
function m1(e, t) {
  var r, i, n;
  return function() {
    var a = Gr(this, e), o = (this.style.removeProperty(e), Gr(this, e));
    return a === o ? null : a === r && o === i ? n : n = t(r = a, i = o);
  };
}
function gu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function y1(e, t, r) {
  var i, n = r + "", a;
  return function() {
    var o = Gr(this, e);
    return o === n ? null : o === i ? a : a = t(i = o, r);
  };
}
function x1(e, t, r) {
  var i, n, a;
  return function() {
    var o = Gr(this, e), s = r(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Gr(this, e))), o === l ? null : o === i && l === n ? a : (n = l, a = t(i = o, s));
  };
}
function b1(e, t) {
  var r, i, n, a = "style." + t, o = "end." + a, s;
  return function() {
    var l = we(this, e), c = l.on, h = l.value[a] == null ? s || (s = gu(t)) : void 0;
    (c !== r || n !== h) && (i = (r = c).copy()).on(o, n = h), l.on = i;
  };
}
function C1(e, t, r) {
  var i = (e += "") == "transform" ? kb : du;
  return t == null ? this.styleTween(e, m1(e, i)).on("end.style." + e, gu(e)) : typeof t == "function" ? this.styleTween(e, x1(e, i, Io(this, "style." + e, t))).each(b1(this._id, e)) : this.styleTween(e, y1(e, i, t), r).on("end.style." + e, null);
}
function _1(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function w1(e, t, r) {
  var i, n;
  function a() {
    var o = t.apply(this, arguments);
    return o !== n && (i = (n = o) && _1(e, o, r)), i;
  }
  return a._value = t, a;
}
function k1(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, w1(e, t, r ?? ""));
}
function v1(e) {
  return function() {
    this.textContent = e;
  };
}
function S1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function T1(e) {
  return this.tween("text", typeof e == "function" ? S1(Io(this, "text", e)) : v1(e == null ? "" : e + ""));
}
function B1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function A1(e) {
  var t, r;
  function i() {
    var n = e.apply(this, arguments);
    return n !== r && (t = (r = n) && B1(n)), t;
  }
  return i._value = e, i;
}
function L1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, A1(e));
}
function M1() {
  for (var e = this._name, t = this._id, r = mu(), i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var o = i[a], s = o.length, l, c = 0; c < s; ++c)
      if (l = o[c]) {
        var h = pe(l, t);
        Ta(l, e, r, c, o, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Oe(i, this._parents, e, r);
}
function E1() {
  var e, t, r = this, i = r._id, n = r.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --n === 0 && a();
    } };
    r.each(function() {
      var c = we(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), c.on = t;
    }), n === 0 && a();
  });
}
var $1 = 0;
function Oe(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function mu() {
  return ++$1;
}
var Ae = Zi.prototype;
Oe.prototype = {
  constructor: Oe,
  select: f1,
  selectAll: p1,
  selectChild: Ae.selectChild,
  selectChildren: Ae.selectChildren,
  filter: a1,
  merge: s1,
  selection: g1,
  transition: M1,
  call: Ae.call,
  nodes: Ae.nodes,
  node: Ae.node,
  size: Ae.size,
  empty: Ae.empty,
  each: Ae.each,
  on: c1,
  attr: Hb,
  attrTween: Xb,
  style: C1,
  styleTween: k1,
  text: T1,
  textTween: L1,
  remove: u1,
  tween: Db,
  delay: Kb,
  duration: t1,
  ease: r1,
  easeVarying: n1,
  end: E1,
  [Symbol.iterator]: Ae[Symbol.iterator]
};
function F1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var O1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: F1
};
function R1(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function D1(e) {
  var t, r;
  e instanceof Oe ? (t = e._id, e = e._name) : (t = mu(), (r = O1).time = Ro(), e = e == null ? null : e + "");
  for (var i = this._groups, n = i.length, a = 0; a < n; ++a)
    for (var o = i[a], s = o.length, l, c = 0; c < s; ++c)
      (l = o[c]) && Ta(l, e, t, c, o, r || R1(l, t));
  return new Oe(i, this._parents, e, t);
}
Zi.prototype.interrupt = Fb;
Zi.prototype.transition = D1;
const Ps = Math.PI, Ns = 2 * Ps, tr = 1e-6, I1 = Ns - tr;
function yu(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function P1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return yu;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let n = 1, a = i.length; n < a; ++n)
      this._ += Math.round(arguments[n] * r) / r + i[n];
  };
}
class N1 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? yu : P1(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, n) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +n}`;
  }
  bezierCurveTo(t, r, i, n, a, o) {
    this._append`C${+t},${+r},${+i},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, i, n, a) {
    if (t = +t, r = +r, i = +i, n = +n, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = i - t, c = n - r, h = o - t, u = s - r, f = h * h + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > tr) if (!(Math.abs(u * l - c * h) > tr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = i - o, g = n - s, m = l * l + c * c, y = p * p + g * g, x = Math.sqrt(m), b = Math.sqrt(f), _ = a * Math.tan((Ps - Math.acos((m + f - y) / (2 * x * b))) / 2), v = _ / b, w = _ / x;
      Math.abs(v - 1) > tr && this._append`L${t + v * h},${r + v * u}`, this._append`A${a},${a},0,0,${+(u * p > h * g)},${this._x1 = t + w * l},${this._y1 = r + w * c}`;
    }
  }
  arc(t, r, i, n, a, o) {
    if (t = +t, r = +r, i = +i, o = !!o, i < 0) throw new Error(`negative radius: ${i}`);
    let s = i * Math.cos(n), l = i * Math.sin(n), c = t + s, h = r + l, u = 1 ^ o, f = o ? n - a : a - n;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > tr || Math.abs(this._y1 - h) > tr) && this._append`L${c},${h}`, i && (f < 0 && (f = f % Ns + Ns), f > I1 ? this._append`A${i},${i},0,1,${u},${t - s},${r - l}A${i},${i},0,1,${u},${this._x1 = c},${this._y1 = h}` : f > tr && this._append`A${i},${i},0,${+(f >= Ps)},${u},${this._x1 = t + i * Math.cos(a)},${this._y1 = r + i * Math.sin(a)}`);
  }
  rect(t, r, i, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+n}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Ar(e) {
  return function() {
    return e;
  };
}
const VA = Math.abs, ZA = Math.atan2, KA = Math.cos, QA = Math.max, JA = Math.min, tL = Math.sin, eL = Math.sqrt, bc = 1e-12, Po = Math.PI, Cc = Po / 2, rL = 2 * Po;
function iL(e) {
  return e > 1 ? 0 : e < -1 ? Po : Math.acos(e);
}
function nL(e) {
  return e >= 1 ? Cc : e <= -1 ? -Cc : Math.asin(e);
}
function z1(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new N1(t);
}
function q1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function xu(e) {
  this._context = e;
}
xu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Vn(e) {
  return new xu(e);
}
function W1(e) {
  return e[0];
}
function H1(e) {
  return e[1];
}
function j1(e, t) {
  var r = Ar(!0), i = null, n = Vn, a = null, o = z1(s);
  e = typeof e == "function" ? e : e === void 0 ? W1 : Ar(e), t = typeof t == "function" ? t : t === void 0 ? H1 : Ar(t);
  function s(l) {
    var c, h = (l = q1(l)).length, u, f = !1, p;
    for (i == null && (a = n(p = o())), c = 0; c <= h; ++c)
      !(c < h && r(u = l[c], c, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+e(u, c, l), +t(u, c, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ar(+l), s) : e;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Ar(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Ar(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (n = l, i != null && (a = n(i)), s) : n;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? i = a = null : a = n(i = l), s) : i;
  }, s;
}
class bu {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Cu(e) {
  return new bu(e, !0);
}
function _u(e) {
  return new bu(e, !1);
}
function We() {
}
function Zn(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Ba(e) {
  this._context = e;
}
Ba.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Zn(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Zn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Mn(e) {
  return new Ba(e);
}
function wu(e) {
  this._context = e;
}
wu.prototype = {
  areaStart: We,
  areaEnd: We,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Zn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Y1(e) {
  return new wu(e);
}
function ku(e) {
  this._context = e;
}
ku.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Zn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function U1(e) {
  return new ku(e);
}
function vu(e, t) {
  this._basis = new Ba(e), this._beta = t;
}
vu.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], n = t[0], a = e[r] - i, o = t[r] - n, s = -1, l; ++s <= r; )
        l = s / r, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (i + l * a),
          this._beta * t[s] + (1 - this._beta) * (n + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const G1 = (function e(t) {
  function r(i) {
    return t === 1 ? new Ba(i) : new vu(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function Kn(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function No(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
No.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Kn(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Su = (function e(t) {
  function r(i) {
    return new No(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function zo(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
zo.prototype = {
  areaStart: We,
  areaEnd: We,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const X1 = (function e(t) {
  function r(i) {
    return new zo(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function qo(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
qo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Kn(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const V1 = (function e(t) {
  function r(i) {
    return new qo(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Wo(e, t, r) {
  var i = e._x1, n = e._y1, a = e._x2, o = e._y2;
  if (e._l01_a > bc) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, n = (n * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > bc) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    a = (a * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, o = (o * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, n, a, o, e._x2, e._y2);
}
function Tu(e, t) {
  this._context = e, this._alpha = t;
}
Tu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Wo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Bu = (function e(t) {
  function r(i) {
    return t ? new Tu(i, t) : new No(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Au(e, t) {
  this._context = e, this._alpha = t;
}
Au.prototype = {
  areaStart: We,
  areaEnd: We,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Wo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Z1 = (function e(t) {
  function r(i) {
    return t ? new Au(i, t) : new zo(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Lu(e, t) {
  this._context = e, this._alpha = t;
}
Lu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Wo(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const K1 = (function e(t) {
  function r(i) {
    return t ? new Lu(i, t) : new qo(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Mu(e) {
  this._context = e;
}
Mu.prototype = {
  areaStart: We,
  areaEnd: We,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Q1(e) {
  return new Mu(e);
}
function _c(e) {
  return e < 0 ? -1 : 1;
}
function wc(e, t, r) {
  var i = e._x1 - e._x0, n = t - e._x1, a = (e._y1 - e._y0) / (i || n < 0 && -0), o = (r - e._y1) / (n || i < 0 && -0), s = (a * n + o * i) / (i + n);
  return (_c(a) + _c(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function kc(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function hs(e, t, r) {
  var i = e._x0, n = e._y0, a = e._x1, o = e._y1, s = (a - i) / 3;
  e._context.bezierCurveTo(i + s, n + s * t, a - s, o - s * r, a, o);
}
function Qn(e) {
  this._context = e;
}
Qn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        hs(this, this._t0, kc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, hs(this, kc(this, r = wc(this, e, t)), r);
          break;
        default:
          hs(this, this._t0, r = wc(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Eu(e) {
  this._context = new $u(e);
}
(Eu.prototype = Object.create(Qn.prototype)).point = function(e, t) {
  Qn.prototype.point.call(this, t, e);
};
function $u(e) {
  this._context = e;
}
$u.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, n, a) {
    this._context.bezierCurveTo(t, e, i, r, a, n);
  }
};
function Fu(e) {
  return new Qn(e);
}
function Ou(e) {
  return new Eu(e);
}
function Ru(e) {
  this._context = e;
}
Ru.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = vc(e), n = vc(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(i[0][a], n[0][a], i[1][a], n[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function vc(e) {
  var t, r = e.length - 1, i, n = new Array(r), a = new Array(r), o = new Array(r);
  for (n[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) n[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (n[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = n[t] / a[t - 1], a[t] -= i, o[t] -= i * o[t - 1];
  for (n[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) n[t] = (o[t] - n[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + n[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - n[t + 1];
  return [n, a];
}
function Du(e) {
  return new Ru(e);
}
function Aa(e, t) {
  this._context = e, this._t = t;
}
Aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Iu(e) {
  return new Aa(e, 0.5);
}
function Pu(e) {
  return new Aa(e, 0);
}
function Nu(e) {
  return new Aa(e, 1);
}
function ki(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
ki.prototype = {
  constructor: ki,
  scale: function(e) {
    return e === 1 ? this : new ki(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ki(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ki.prototype;
var J1 = /* @__PURE__ */ d((e) => {
  var n;
  const { securityLevel: t } = lt();
  let r = at("body");
  if (t === "sandbox") {
    const o = ((n = at(`#i${e}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    r = at(o.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function Ho(e) {
  return typeof e > "u" || e === null;
}
d(Ho, "isNothing");
function zu(e) {
  return typeof e == "object" && e !== null;
}
d(zu, "isObject");
function qu(e) {
  return Array.isArray(e) ? e : Ho(e) ? [] : [e];
}
d(qu, "toArray");
function Wu(e, t) {
  var r, i, n, a;
  if (t)
    for (a = Object.keys(t), r = 0, i = a.length; r < i; r += 1)
      n = a[r], e[n] = t[n];
  return e;
}
d(Wu, "extend");
function Hu(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
d(Hu, "repeat");
function ju(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
d(ju, "isNegativeZero");
var t2 = Ho, e2 = zu, r2 = qu, i2 = Hu, n2 = ju, a2 = Wu, vt = {
  isNothing: t2,
  isObject: e2,
  toArray: r2,
  repeat: i2,
  isNegativeZero: n2,
  extend: a2
};
function jo(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
d(jo, "formatError");
function Vr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = jo(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
d(Vr, "YAMLException$1");
Vr.prototype = Object.create(Error.prototype);
Vr.prototype.constructor = Vr;
Vr.prototype.toString = /* @__PURE__ */ d(function(t) {
  return this.name + ": " + jo(this, t);
}, "toString");
var Gt = Vr;
function En(e, t, r, i, n) {
  var a = "", o = "", s = Math.floor(n / 2) - 1;
  return i - t > s && (a = " ... ", t = i - s + a.length), r - i > s && (o = " ...", r = i + s - o.length), {
    str: a + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: i - t + a.length
    // relative position
  };
}
d(En, "getLine");
function $n(e, t) {
  return vt.repeat(" ", t - e.length) + e;
}
d($n, "padStart");
function Yu(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], n = [], a, o = -1; a = r.exec(e.buffer); )
    n.push(a.index), i.push(a.index + a[0].length), e.position <= a.index && o < 0 && (o = i.length - 2);
  o < 0 && (o = i.length - 1);
  var s = "", l, c, h = Math.min(e.line + t.linesAfter, n.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(o - l < 0); l++)
    c = En(
      e.buffer,
      i[o - l],
      n[o - l],
      e.position - (i[o] - i[o - l]),
      u
    ), s = vt.repeat(" ", t.indent) + $n((e.line - l + 1).toString(), h) + " | " + c.str + `
` + s;
  for (c = En(e.buffer, i[o], n[o], e.position, u), s += vt.repeat(" ", t.indent) + $n((e.line + 1).toString(), h) + " | " + c.str + `
`, s += vt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(o + l >= n.length); l++)
    c = En(
      e.buffer,
      i[o + l],
      n[o + l],
      e.position - (i[o] - i[o + l]),
      u
    ), s += vt.repeat(" ", t.indent) + $n((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return s.replace(/\n$/, "");
}
d(Yu, "makeSnippet");
var s2 = Yu, o2 = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], l2 = [
  "scalar",
  "sequence",
  "mapping"
];
function Uu(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
d(Uu, "compileStyleAliases");
function Gu(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (o2.indexOf(r) === -1)
      throw new Gt('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Uu(t.styleAliases || null), l2.indexOf(this.kind) === -1)
    throw new Gt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
d(Gu, "Type$1");
var Rt = Gu;
function zs(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var n = r.length;
    r.forEach(function(a, o) {
      a.tag === i.tag && a.kind === i.kind && a.multi === i.multi && (n = o);
    }), r[n] = i;
  }), r;
}
d(zs, "compileList");
function Xu() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(n) {
    n.multi ? (e.multi[n.kind].push(n), e.multi.fallback.push(n)) : e[n.kind][n.tag] = e.fallback[n.tag] = n;
  }
  for (d(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
d(Xu, "compileMap");
function Jn(e) {
  return this.extend(e);
}
d(Jn, "Schema$1");
Jn.prototype.extend = /* @__PURE__ */ d(function(t) {
  var r = [], i = [];
  if (t instanceof Rt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new Gt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(a) {
    if (!(a instanceof Rt))
      throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (a.loadKind && a.loadKind !== "scalar")
      throw new Gt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (a.multi)
      throw new Gt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(a) {
    if (!(a instanceof Rt))
      throw new Gt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Jn.prototype);
  return n.implicit = (this.implicit || []).concat(r), n.explicit = (this.explicit || []).concat(i), n.compiledImplicit = zs(n, "implicit"), n.compiledExplicit = zs(n, "explicit"), n.compiledTypeMap = Xu(n.compiledImplicit, n.compiledExplicit), n;
}, "extend");
var c2 = Jn, h2 = new Rt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), u2 = new Rt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), f2 = new Rt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ d(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), p2 = new c2({
  explicit: [
    h2,
    u2,
    f2
  ]
});
function Vu(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
d(Vu, "resolveYamlNull");
function Zu() {
  return null;
}
d(Zu, "constructYamlNull");
function Ku(e) {
  return e === null;
}
d(Ku, "isNull");
var d2 = new Rt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Vu,
  construct: Zu,
  predicate: Ku,
  represent: {
    canonical: /* @__PURE__ */ d(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ d(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ d(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ d(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ d(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function Qu(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
d(Qu, "resolveYamlBoolean");
function Ju(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
d(Ju, "constructYamlBoolean");
function tf(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
d(tf, "isBoolean");
var g2 = new Rt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Qu,
  construct: Ju,
  predicate: tf,
  represent: {
    lowercase: /* @__PURE__ */ d(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ d(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ d(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function ef(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
d(ef, "isHexCode");
function rf(e) {
  return 48 <= e && e <= 55;
}
d(rf, "isOctCode");
function nf(e) {
  return 48 <= e && e <= 57;
}
d(nf, "isDecCode");
function af(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, n;
  if (!t) return !1;
  if (n = e[r], (n === "-" || n === "+") && (n = e[++r]), n === "0") {
    if (r + 1 === t) return !0;
    if (n = e[++r], n === "b") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (n !== "0" && n !== "1") return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "x") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!ef(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
    if (n === "o") {
      for (r++; r < t; r++)
        if (n = e[r], n !== "_") {
          if (!rf(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; r < t; r++)
    if (n = e[r], n !== "_") {
      if (!nf(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || n === "_");
}
d(af, "resolveYamlInteger");
function sf(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
d(sf, "constructYamlInteger");
function of(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !vt.isNegativeZero(e);
}
d(of, "isInteger");
var m2 = new Rt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: af,
  construct: sf,
  predicate: of,
  represent: {
    binary: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ d(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ d(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), y2 = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function lf(e) {
  return !(e === null || !y2.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
d(lf, "resolveYamlFloat");
function cf(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
d(cf, "constructYamlFloat");
var x2 = /^[-+]?[0-9]+e/;
function hf(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (vt.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), x2.test(r) ? r.replace("e", ".e") : r;
}
d(hf, "representYamlFloat");
function uf(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || vt.isNegativeZero(e));
}
d(uf, "isFloat");
var b2 = new Rt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: lf,
  construct: cf,
  predicate: uf,
  represent: hf,
  defaultStyle: "lowercase"
}), ff = p2.extend({
  implicit: [
    d2,
    g2,
    m2,
    b2
  ]
}), C2 = ff, pf = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), df = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function gf(e) {
  return e === null ? !1 : pf.exec(e) !== null || df.exec(e) !== null;
}
d(gf, "resolveYamlTimestamp");
function mf(e) {
  var t, r, i, n, a, o, s, l = 0, c = null, h, u, f;
  if (t = pf.exec(e), t === null && (t = df.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4])
    return new Date(Date.UTC(r, i, n));
  if (a = +t[4], o = +t[5], s = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, n, a, o, s, l)), c && f.setTime(f.getTime() - c), f;
}
d(mf, "constructYamlTimestamp");
function yf(e) {
  return e.toISOString();
}
d(yf, "representYamlTimestamp");
var _2 = new Rt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: gf,
  construct: mf,
  instanceOf: Date,
  represent: yf
});
function xf(e) {
  return e === "<<" || e === null;
}
d(xf, "resolveYamlMerge");
var w2 = new Rt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: xf
}), Yo = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function bf(e) {
  if (e === null) return !1;
  var t, r, i = 0, n = e.length, a = Yo;
  for (r = 0; r < n; r++)
    if (t = a.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
d(bf, "resolveYamlBinary");
function Cf(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), n = i.length, a = Yo, o = 0, s = [];
  for (t = 0; t < n; t++)
    t % 4 === 0 && t && (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)), o = o << 6 | a.indexOf(i.charAt(t));
  return r = n % 4 * 6, r === 0 ? (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)) : r === 18 ? (s.push(o >> 10 & 255), s.push(o >> 2 & 255)) : r === 12 && s.push(o >> 4 & 255), new Uint8Array(s);
}
d(Cf, "constructYamlBinary");
function _f(e) {
  var t = "", r = 0, i, n, a = e.length, o = Yo;
  for (i = 0; i < a; i++)
    i % 3 === 0 && i && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[i];
  return n = a % 3, n === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : n === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : n === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
d(_f, "representYamlBinary");
function wf(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
d(wf, "isBinary");
var k2 = new Rt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: bf,
  construct: Cf,
  predicate: wf,
  represent: _f
}), v2 = Object.prototype.hasOwnProperty, S2 = Object.prototype.toString;
function kf(e) {
  if (e === null) return !0;
  var t = [], r, i, n, a, o, s = e;
  for (r = 0, i = s.length; r < i; r += 1) {
    if (n = s[r], o = !1, S2.call(n) !== "[object Object]") return !1;
    for (a in n)
      if (v2.call(n, a))
        if (!o) o = !0;
        else return !1;
    if (!o) return !1;
    if (t.indexOf(a) === -1) t.push(a);
    else return !1;
  }
  return !0;
}
d(kf, "resolveYamlOmap");
function vf(e) {
  return e !== null ? e : [];
}
d(vf, "constructYamlOmap");
var T2 = new Rt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: kf,
  construct: vf
}), B2 = Object.prototype.toString;
function Sf(e) {
  if (e === null) return !0;
  var t, r, i, n, a, o = e;
  for (a = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (i = o[t], B2.call(i) !== "[object Object]" || (n = Object.keys(i), n.length !== 1)) return !1;
    a[t] = [n[0], i[n[0]]];
  }
  return !0;
}
d(Sf, "resolveYamlPairs");
function Tf(e) {
  if (e === null) return [];
  var t, r, i, n, a, o = e;
  for (a = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    i = o[t], n = Object.keys(i), a[t] = [n[0], i[n[0]]];
  return a;
}
d(Tf, "constructYamlPairs");
var A2 = new Rt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Sf,
  construct: Tf
}), L2 = Object.prototype.hasOwnProperty;
function Bf(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (L2.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
d(Bf, "resolveYamlSet");
function Af(e) {
  return e !== null ? e : {};
}
d(Af, "constructYamlSet");
var M2 = new Rt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Bf,
  construct: Af
}), Lf = C2.extend({
  implicit: [
    _2,
    w2
  ],
  explicit: [
    k2,
    T2,
    A2,
    M2
  ]
}), He = Object.prototype.hasOwnProperty, ta = 1, Mf = 2, Ef = 3, ea = 4, us = 1, E2 = 2, Sc = 3, $2 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, F2 = /[\x85\u2028\u2029]/, O2 = /[,\[\]\{\}]/, $f = /^(?:!|!!|![a-z\-]+!)$/i, Ff = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function qs(e) {
  return Object.prototype.toString.call(e);
}
d(qs, "_class");
function ue(e) {
  return e === 10 || e === 13;
}
d(ue, "is_EOL");
function qe(e) {
  return e === 9 || e === 32;
}
d(qe, "is_WHITE_SPACE");
function zt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
d(zt, "is_WS_OR_EOL");
function ar(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
d(ar, "is_FLOW_INDICATOR");
function Of(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
d(Of, "fromHexCode");
function Rf(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
d(Rf, "escapedHexLen");
function Df(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
d(Df, "fromDecimalCode");
function Ws(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
d(Ws, "simpleEscapeSequence");
function If(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
d(If, "charFromCodepoint");
var Pf = new Array(256), Nf = new Array(256);
for (Je = 0; Je < 256; Je++)
  Pf[Je] = Ws(Je) ? 1 : 0, Nf[Je] = Ws(Je);
var Je;
function zf(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Lf, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
d(zf, "State$1");
function Uo(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = s2(r), new Gt(t, r);
}
d(Uo, "generateError");
function X(e, t) {
  throw Uo(e, t);
}
d(X, "throwError");
function Ni(e, t) {
  e.onWarning && e.onWarning.call(null, Uo(e, t));
}
d(Ni, "throwWarning");
var Tc = {
  YAML: /* @__PURE__ */ d(function(t, r, i) {
    var n, a, o;
    t.version !== null && X(t, "duplication of %YAML directive"), i.length !== 1 && X(t, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), n === null && X(t, "ill-formed argument of the YAML directive"), a = parseInt(n[1], 10), o = parseInt(n[2], 10), a !== 1 && X(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ni(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ d(function(t, r, i) {
    var n, a;
    i.length !== 2 && X(t, "TAG directive accepts exactly two arguments"), n = i[0], a = i[1], $f.test(n) || X(t, "ill-formed tag handle (first argument) of the TAG directive"), He.call(t.tagMap, n) && X(t, 'there is a previously declared suffix for "' + n + '" tag handle'), Ff.test(a) || X(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      a = decodeURIComponent(a);
    } catch {
      X(t, "tag prefix is malformed: " + a);
    }
    t.tagMap[n] = a;
  }, "handleTagDirective")
};
function Fe(e, t, r, i) {
  var n, a, o, s;
  if (t < r) {
    if (s = e.input.slice(t, r), i)
      for (n = 0, a = s.length; n < a; n += 1)
        o = s.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || X(e, "expected valid JSON character");
    else $2.test(s) && X(e, "the stream contains non-printable characters");
    e.result += s;
  }
}
d(Fe, "captureSegment");
function Hs(e, t, r, i) {
  var n, a, o, s;
  for (vt.isObject(r) || X(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), o = 0, s = n.length; o < s; o += 1)
    a = n[o], He.call(t, a) || (t[a] = r[a], i[a] = !0);
}
d(Hs, "mergeMappings");
function sr(e, t, r, i, n, a, o, s, l) {
  var c, h;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
      Array.isArray(n[c]) && X(e, "nested arrays are not supported inside keys"), typeof n == "object" && qs(n[c]) === "[object Object]" && (n[c] = "[object Object]");
  if (typeof n == "object" && qs(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(a))
      for (c = 0, h = a.length; c < h; c += 1)
        Hs(e, t, a[c], r);
    else
      Hs(e, t, a, r);
  else
    !e.json && !He.call(r, n) && He.call(t, n) && (e.line = o || e.line, e.lineStart = s || e.lineStart, e.position = l || e.position, X(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: a
    }) : t[n] = a, delete r[n];
  return t;
}
d(sr, "storeMappingPair");
function La(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : X(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
d(La, "readLineBreak");
function xt(e, t, r) {
  for (var i = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
    for (; qe(n); )
      n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
    if (t && n === 35)
      do
        n = e.input.charCodeAt(++e.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (ue(n))
      for (La(e), n = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; n === 32; )
        e.lineIndent++, n = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && Ni(e, "deficient indentation"), i;
}
d(xt, "skipSeparationSpace");
function Qi(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || zt(r)));
}
d(Qi, "testDocumentSeparator");
function Ma(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += vt.repeat(`
`, t - 1));
}
d(Ma, "writeFoldedLines");
function qf(e, t, r) {
  var i, n, a, o, s, l, c, h, u = e.kind, f = e.result, p;
  if (p = e.input.charCodeAt(e.position), zt(p) || ar(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = e.input.charCodeAt(e.position + 1), zt(n) || r && ar(n)))
    return !1;
  for (e.kind = "scalar", e.result = "", a = o = e.position, s = !1; p !== 0; ) {
    if (p === 58) {
      if (n = e.input.charCodeAt(e.position + 1), zt(n) || r && ar(n))
        break;
    } else if (p === 35) {
      if (i = e.input.charCodeAt(e.position - 1), zt(i))
        break;
    } else {
      if (e.position === e.lineStart && Qi(e) || r && ar(p))
        break;
      if (ue(p))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, xt(e, !1, -1), e.lineIndent >= t) {
          s = !0, p = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    s && (Fe(e, a, o, !1), Ma(e, e.line - l), a = o = e.position, s = !1), qe(p) || (o = e.position + 1), p = e.input.charCodeAt(++e.position);
  }
  return Fe(e, a, o, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
d(qf, "readPlainScalar");
function Wf(e, t) {
  var r, i, n;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = n = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Fe(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, n = e.position;
      else
        return !0;
    else ue(r) ? (Fe(e, i, n, !0), Ma(e, xt(e, !1, t)), i = n = e.position) : e.position === e.lineStart && Qi(e) ? X(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
  X(e, "unexpected end of the stream within a single quoted scalar");
}
d(Wf, "readSingleQuotedScalar");
function Hf(e, t) {
  var r, i, n, a, o, s;
  if (s = e.input.charCodeAt(e.position), s !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (s = e.input.charCodeAt(e.position)) !== 0; ) {
    if (s === 34)
      return Fe(e, r, e.position, !0), e.position++, !0;
    if (s === 92) {
      if (Fe(e, r, e.position, !0), s = e.input.charCodeAt(++e.position), ue(s))
        xt(e, !1, t);
      else if (s < 256 && Pf[s])
        e.result += Nf[s], e.position++;
      else if ((o = Rf(s)) > 0) {
        for (n = o, a = 0; n > 0; n--)
          s = e.input.charCodeAt(++e.position), (o = Of(s)) >= 0 ? a = (a << 4) + o : X(e, "expected hexadecimal character");
        e.result += If(a), e.position++;
      } else
        X(e, "unknown escape sequence");
      r = i = e.position;
    } else ue(s) ? (Fe(e, r, i, !0), Ma(e, xt(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Qi(e) ? X(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  X(e, "unexpected end of the stream within a double quoted scalar");
}
d(Hf, "readDoubleQuotedScalar");
function jf(e, t) {
  var r = !0, i, n, a, o = e.tag, s, l = e.anchor, c, h, u, f, p, g = /* @__PURE__ */ Object.create(null), m, y, x, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, p = !1, s = [];
  else if (b === 123)
    h = 125, p = !0, s = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (xt(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = o, e.anchor = l, e.kind = p ? "mapping" : "sequence", e.result = s, !0;
    r ? b === 44 && X(e, "expected the node content, but found ','") : X(e, "missed comma between flow collection entries"), y = m = x = null, u = f = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), zt(c) && (u = f = !0, e.position++, xt(e, !0, t))), i = e.line, n = e.lineStart, a = e.position, pr(e, t, ta, !1, !0), y = e.tag, m = e.result, xt(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), xt(e, !0, t), pr(e, t, ta, !1, !0), x = e.result), p ? sr(e, s, g, y, m, x, i, n, a) : u ? s.push(sr(e, null, g, y, m, x, i, n, a)) : s.push(m), xt(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  X(e, "unexpected end of the stream within a flow collection");
}
d(jf, "readFlowCollection");
function Yf(e, t) {
  var r, i, n = us, a = !1, o = !1, s = t, l = 0, c = !1, h, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      us === n ? n = u === 43 ? Sc : E2 : X(e, "repeat of a chomping mode identifier");
    else if ((h = Df(u)) >= 0)
      h === 0 ? X(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? X(e, "repeat of an indentation width identifier") : (s = t + h - 1, o = !0);
    else
      break;
  if (qe(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (qe(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!ue(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (La(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!o || e.lineIndent < s) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > s && (s = e.lineIndent), ue(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < s) {
      n === Sc ? e.result += vt.repeat(`
`, a ? 1 + l : l) : n === us && a && (e.result += `
`);
      break;
    }
    for (i ? qe(u) ? (c = !0, e.result += vt.repeat(`
`, a ? 1 + l : l)) : c ? (c = !1, e.result += vt.repeat(`
`, l + 1)) : l === 0 ? a && (e.result += " ") : e.result += vt.repeat(`
`, l) : e.result += vt.repeat(`
`, a ? 1 + l : l), a = !0, o = !0, l = 0, r = e.position; !ue(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    Fe(e, r, e.position, !1);
  }
  return !0;
}
d(Yf, "readBlockScalar");
function js(e, t) {
  var r, i = e.tag, n = e.anchor, a = [], o, s = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, X(e, "tab characters must not be used in indentation")), !(l !== 45 || (o = e.input.charCodeAt(e.position + 1), !zt(o)))); ) {
    if (s = !0, e.position++, xt(e, !0, -1) && e.lineIndent <= t) {
      a.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, pr(e, t, Ef, !1, !0), a.push(e.result), xt(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      X(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return s ? (e.tag = i, e.anchor = n, e.kind = "sequence", e.result = a, !0) : !1;
}
d(js, "readBlockSequence");
function Uf(e, t, r) {
  var i, n, a, o, s, l, c = e.tag, h = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), p = null, g = null, m = null, y = !1, x = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, X(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), a = e.line, (b === 63 || b === 58) && zt(i))
      b === 63 ? (y && (sr(e, u, f, p, g, null, o, s, l), p = g = m = null), x = !0, y = !0, n = !0) : y ? (y = !1, n = !0) : X(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (o = e.line, s = e.lineStart, l = e.position, !pr(e, r, Mf, !1, !0))
        break;
      if (e.line === a) {
        for (b = e.input.charCodeAt(e.position); qe(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), zt(b) || X(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (sr(e, u, f, p, g, null, o, s, l), p = g = m = null), x = !0, y = !1, n = !1, p = e.tag, g = e.result;
        else if (x)
          X(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (x)
        X(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === a || e.lineIndent > t) && (y && (o = e.line, s = e.lineStart, l = e.position), pr(e, t, ea, !0, n) && (y ? g = e.result : m = e.result), y || (sr(e, u, f, p, g, m, o, s, l), p = g = m = null), xt(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === a || e.lineIndent > t) && b !== 0)
      X(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && sr(e, u, f, p, g, null, o, s, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = u), x;
}
d(Uf, "readBlockMapping");
function Gf(e) {
  var t, r = !1, i = !1, n, a, o;
  if (o = e.input.charCodeAt(e.position), o !== 33) return !1;
  if (e.tag !== null && X(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (i = !0, n = "!!", o = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (a = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : X(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !zt(o); )
      o === 33 && (i ? X(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), $f.test(n) || X(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    a = e.input.slice(t, e.position), O2.test(a) && X(e, "tag suffix cannot contain flow indicator characters");
  }
  a && !Ff.test(a) && X(e, "tag name cannot contain such characters: " + a);
  try {
    a = decodeURIComponent(a);
  } catch {
    X(e, "tag name is malformed: " + a);
  }
  return r ? e.tag = a : He.call(e.tagMap, n) ? e.tag = e.tagMap[n] + a : n === "!" ? e.tag = "!" + a : n === "!!" ? e.tag = "tag:yaml.org,2002:" + a : X(e, 'undeclared tag handle "' + n + '"'), !0;
}
d(Gf, "readTagProperty");
function Xf(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && X(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !zt(r) && !ar(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && X(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
d(Xf, "readAnchorProperty");
function Vf(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !zt(i) && !ar(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && X(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), He.call(e.anchorMap, r) || X(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], xt(e, !0, -1), !0;
}
d(Vf, "readAlias");
function pr(e, t, r, i, n) {
  var a, o, s, l = 1, c = !1, h = !1, u, f, p, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = o = s = ea === r || Ef === r, i && xt(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; Gf(e) || Xf(e); )
      xt(e, !0, -1) ? (c = !0, s = a, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : s = !1;
  if (s && (s = c || n), (l === 1 || ea === r) && (ta === r || Mf === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? s && (js(e, y) || Uf(e, y, m)) || jf(e, m) ? h = !0 : (o && Yf(e, m) || Wf(e, m) || Hf(e, m) ? h = !0 : Vf(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && X(e, "alias node should not have any properties")) : qf(e, m, ta === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = s && js(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && X(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (He.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, p = e.typeMap.multi[e.kind || "fallback"], u = 0, f = p.length; u < f; u += 1)
        if (e.tag.slice(0, p[u].tag.length) === p[u].tag) {
          g = p[u];
          break;
        }
    g || X(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && X(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : X(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
d(pr, "composeNode");
function Zf(e) {
  var t = e.position, r, i, n, a = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (xt(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (a = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !zt(o); )
      o = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), n = [], i.length < 1 && X(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; qe(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !ue(o));
        break;
      }
      if (ue(o)) break;
      for (r = e.position; o !== 0 && !zt(o); )
        o = e.input.charCodeAt(++e.position);
      n.push(e.input.slice(r, e.position));
    }
    o !== 0 && La(e), He.call(Tc, i) ? Tc[i](e, i, n) : Ni(e, 'unknown document directive "' + i + '"');
  }
  if (xt(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, xt(e, !0, -1)) : a && X(e, "directives end mark is expected"), pr(e, e.lineIndent - 1, ea, !1, !0), xt(e, !0, -1), e.checkLineBreaks && F2.test(e.input.slice(t, e.position)) && Ni(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Qi(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, xt(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    X(e, "end of the stream or a document separator is expected");
  else
    return;
}
d(Zf, "readDocument");
function Go(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new zf(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, X(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Zf(r);
  return r.documents;
}
d(Go, "loadDocuments");
function R2(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = Go(e, r);
  if (typeof t != "function")
    return i;
  for (var n = 0, a = i.length; n < a; n += 1)
    t(i[n]);
}
d(R2, "loadAll$1");
function Kf(e, t) {
  var r = Go(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Gt("expected a single document in the stream, but found more");
  }
}
d(Kf, "load$1");
var D2 = Kf, I2 = {
  load: D2
}, Qf = Object.prototype.toString, Jf = Object.prototype.hasOwnProperty, Xo = 65279, P2 = 9, zi = 10, N2 = 13, z2 = 32, q2 = 33, W2 = 34, Ys = 35, H2 = 37, j2 = 38, Y2 = 39, U2 = 42, tp = 44, G2 = 45, ra = 58, X2 = 61, V2 = 62, Z2 = 63, K2 = 64, ep = 91, rp = 93, Q2 = 96, ip = 123, J2 = 124, np = 125, It = {};
It[0] = "\\0";
It[7] = "\\a";
It[8] = "\\b";
It[9] = "\\t";
It[10] = "\\n";
It[11] = "\\v";
It[12] = "\\f";
It[13] = "\\r";
It[27] = "\\e";
It[34] = '\\"';
It[92] = "\\\\";
It[133] = "\\N";
It[160] = "\\_";
It[8232] = "\\L";
It[8233] = "\\P";
var tC = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], eC = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function ap(e, t) {
  var r, i, n, a, o, s, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), n = 0, a = i.length; n < a; n += 1)
    o = i[n], s = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), l = e.compiledTypeMap.fallback[o], l && Jf.call(l.styleAliases, s) && (s = l.styleAliases[s]), r[o] = s;
  return r;
}
d(ap, "compileStyleMap");
function sp(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new Gt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + vt.repeat("0", i - t.length) + t;
}
d(sp, "encodeHex");
var rC = 1, qi = 2;
function op(e) {
  this.schema = e.schema || Lf, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = vt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = ap(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? qi : rC, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
d(op, "State");
function Us(e, t) {
  for (var r = vt.repeat(" ", t), i = 0, n = -1, a = "", o, s = e.length; i < s; )
    n = e.indexOf(`
`, i), n === -1 ? (o = e.slice(i), i = s) : (o = e.slice(i, n + 1), i = n + 1), o.length && o !== `
` && (a += r), a += o;
  return a;
}
d(Us, "indentString");
function ia(e, t) {
  return `
` + vt.repeat(" ", e.indent * t);
}
d(ia, "generateNextLine");
function lp(e, t) {
  var r, i, n;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (n = e.implicitTypes[r], n.resolve(t))
      return !0;
  return !1;
}
d(lp, "testImplicitResolving");
function Wi(e) {
  return e === z2 || e === P2;
}
d(Wi, "isWhitespace");
function Zr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Xo || 65536 <= e && e <= 1114111;
}
d(Zr, "isPrintable");
function Gs(e) {
  return Zr(e) && e !== Xo && e !== N2 && e !== zi;
}
d(Gs, "isNsCharOrWhitespace");
function Xs(e, t, r) {
  var i = Gs(e), n = i && !Wi(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== tp && e !== ep && e !== rp && e !== ip && e !== np) && e !== Ys && !(t === ra && !n) || Gs(t) && !Wi(t) && e === Ys || t === ra && n
  );
}
d(Xs, "isPlainSafe");
function cp(e) {
  return Zr(e) && e !== Xo && !Wi(e) && e !== G2 && e !== Z2 && e !== ra && e !== tp && e !== ep && e !== rp && e !== ip && e !== np && e !== Ys && e !== j2 && e !== U2 && e !== q2 && e !== J2 && e !== X2 && e !== V2 && e !== Y2 && e !== W2 && e !== H2 && e !== K2 && e !== Q2;
}
d(cp, "isPlainSafeFirst");
function hp(e) {
  return !Wi(e) && e !== ra;
}
d(hp, "isPlainSafeLast");
function $r(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
d($r, "codePointAt");
function Vo(e) {
  var t = /^\n* /;
  return t.test(e);
}
d(Vo, "needIndentIndicator");
var up = 1, Vs = 2, fp = 3, pp = 4, Mr = 5;
function dp(e, t, r, i, n, a, o, s) {
  var l, c = 0, h = null, u = !1, f = !1, p = i !== -1, g = -1, m = cp($r(e, 0)) && hp($r(e, e.length - 1));
  if (t || o)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = $r(e, l), !Zr(c))
        return Mr;
      m = m && Xs(c, h, s), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = $r(e, l), c === zi)
        u = !0, p && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!Zr(c))
        return Mr;
      m = m && Xs(c, h, s), h = c;
    }
    f = f || p && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !o && !n(e) ? up : a === qi ? Mr : Vs : r > 9 && Vo(e) ? Mr : o ? a === qi ? Mr : Vs : f ? pp : fp;
}
d(dp, "chooseScalarStyle");
function gp(e, t, r, i, n) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === qi ? '""' : "''";
    if (!e.noCompatMode && (tC.indexOf(t) !== -1 || eC.test(t)))
      return e.quotingType === qi ? '"' + t + '"' : "'" + t + "'";
    var a = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a), s = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return lp(e, c);
    }
    switch (d(l, "testAmbiguity"), dp(
      t,
      s,
      e.indent,
      o,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      n
    )) {
      case up:
        return t;
      case Vs:
        return "'" + t.replace(/'/g, "''") + "'";
      case fp:
        return "|" + Zs(t, e.indent) + Ks(Us(t, a));
      case pp:
        return ">" + Zs(t, e.indent) + Ks(Us(mp(t, o), a));
      case Mr:
        return '"' + yp(t) + '"';
      default:
        throw new Gt("impossible error: invalid scalar style");
    }
  })();
}
d(gp, "writeScalar");
function Zs(e, t) {
  var r = Vo(e) ? String(t) : "", i = e[e.length - 1] === `
`, n = i && (e[e.length - 2] === `
` || e === `
`), a = n ? "+" : i ? "" : "-";
  return r + a + `
`;
}
d(Zs, "blockHeader");
function Ks(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
d(Ks, "dropEndingNewline");
function mp(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Qs(e.slice(0, c), t);
  })(), n = e[0] === `
` || e[0] === " ", a, o; o = r.exec(e); ) {
    var s = o[1], l = o[2];
    a = l[0] === " ", i += s + (!n && !a && l !== "" ? `
` : "") + Qs(l, t), n = a;
  }
  return i;
}
d(mp, "foldString");
function Qs(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, n = 0, a, o = 0, s = 0, l = ""; i = r.exec(e); )
    s = i.index, s - n > t && (a = o > n ? o : s, l += `
` + e.slice(n, a), n = a + 1), o = s;
  return l += `
`, e.length - n > t && o > n ? l += e.slice(n, o) + `
` + e.slice(o + 1) : l += e.slice(n), l.slice(1);
}
d(Qs, "foldLine");
function yp(e) {
  for (var t = "", r = 0, i, n = 0; n < e.length; r >= 65536 ? n += 2 : n++)
    r = $r(e, n), i = It[r], !i && Zr(r) ? (t += e[n], r >= 65536 && (t += e[n + 1])) : t += i || sp(r);
  return t;
}
d(yp, "escapeString");
function xp(e, t, r) {
  var i = "", n = e.tag, a, o, s;
  for (a = 0, o = r.length; a < o; a += 1)
    s = r[a], e.replacer && (s = e.replacer.call(r, String(a), s)), (_e(e, t, s, !1, !1) || typeof s > "u" && _e(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = n, e.dump = "[" + i + "]";
}
d(xp, "writeFlowSequence");
function Js(e, t, r, i) {
  var n = "", a = e.tag, o, s, l;
  for (o = 0, s = r.length; o < s; o += 1)
    l = r[o], e.replacer && (l = e.replacer.call(r, String(o), l)), (_e(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && _e(e, t + 1, null, !0, !0, !1, !0)) && ((!i || n !== "") && (n += ia(e, t)), e.dump && zi === e.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e.dump);
  e.tag = a, e.dump = n || "[]";
}
d(Js, "writeBlockSequence");
function bp(e, t, r) {
  var i = "", n = e.tag, a = Object.keys(r), o, s, l, c, h;
  for (o = 0, s = a.length; o < s; o += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = a[o], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), _e(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), _e(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = n, e.dump = "{" + i + "}";
}
d(bp, "writeFlowMapping");
function Cp(e, t, r, i) {
  var n = "", a = e.tag, o = Object.keys(r), s, l, c, h, u, f;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Gt("sortKeys must be a boolean or a function");
  for (s = 0, l = o.length; s < l; s += 1)
    f = "", (!i || n !== "") && (f += ia(e, t)), c = o[s], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), _e(e, t + 1, c, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && zi === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += ia(e, t)), _e(e, t + 1, h, !0, u) && (e.dump && zi === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, n += f));
  e.tag = a, e.dump = n || "{}";
}
d(Cp, "writeBlockMapping");
function to(e, t, r) {
  var i, n, a, o, s, l;
  for (n = r ? e.explicitTypes : e.implicitTypes, a = 0, o = n.length; a < o; a += 1)
    if (s = n[a], (s.instanceOf || s.predicate) && (!s.instanceOf || typeof t == "object" && t instanceof s.instanceOf) && (!s.predicate || s.predicate(t))) {
      if (r ? s.multi && s.representName ? e.tag = s.representName(t) : e.tag = s.tag : e.tag = "?", s.represent) {
        if (l = e.styleMap[s.tag] || s.defaultStyle, Qf.call(s.represent) === "[object Function]")
          i = s.represent(t, l);
        else if (Jf.call(s.represent, l))
          i = s.represent[l](t, l);
        else
          throw new Gt("!<" + s.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
d(to, "detectType");
function _e(e, t, r, i, n, a, o) {
  e.tag = null, e.dump = r, to(e, r, !1) || to(e, r, !0);
  var s = Qf.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = s === "[object Object]" || s === "[object Array]", u, f;
  if (h && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (n = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (h && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), s === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (Cp(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : (bp(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (s === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? Js(e, t - 1, e.dump, n) : Js(e, t, e.dump, n), f && (e.dump = "&ref_" + u + e.dump)) : (xp(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (s === "[object String]")
      e.tag !== "?" && gp(e, e.dump, t, a, l);
    else {
      if (s === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new Gt("unacceptable kind of an object to dump " + s);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
d(_e, "writeNode");
function _p(e, t) {
  var r = [], i = [], n, a;
  for (na(e, r, i), n = 0, a = i.length; n < a; n += 1)
    t.duplicates.push(r[i[n]]);
  t.usedDuplicates = new Array(a);
}
d(_p, "getDuplicateReferences");
function na(e, t, r) {
  var i, n, a;
  if (e !== null && typeof e == "object")
    if (n = t.indexOf(e), n !== -1)
      r.indexOf(n) === -1 && r.push(n);
    else if (t.push(e), Array.isArray(e))
      for (n = 0, a = e.length; n < a; n += 1)
        na(e[n], t, r);
    else
      for (i = Object.keys(e), n = 0, a = i.length; n < a; n += 1)
        na(e[i[n]], t, r);
}
d(na, "inspectNode");
function iC(e, t) {
  t = t || {};
  var r = new op(t);
  r.noRefs || _p(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), _e(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
d(iC, "dump$1");
function nC(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
d(nC, "renamed");
var aC = ff, sC = I2.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
var Ft = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
  //arrow_cross: 24,
}, Bc = {
  arrow_point: 9,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function vi(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = mt(e), t = mt(t);
  const [r, i] = [e.x, e.y], [n, a] = [t.x, t.y], o = n - r, s = a - i;
  return { angle: Math.atan(s / o), deltaX: o, deltaY: s };
}
d(vi, "calculateDeltaAndAngle");
var mt = /* @__PURE__ */ d((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), oC = /* @__PURE__ */ d((e) => ({
  x: /* @__PURE__ */ d(function(t, r, i) {
    let n = 0;
    const a = mt(i[0]).x < mt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: p, deltaX: g } = vi(i[0], i[1]);
      n = Ft[e.arrowTypeStart] * Math.cos(p) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: p, deltaX: g } = vi(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = Ft[e.arrowTypeEnd] * Math.cos(p) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), s = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), l = Math.abs(mt(t).x - mt(i[0]).x), c = Math.abs(mt(t).y - mt(i[0]).y), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && s < u) {
      let p = u + f - o;
      p *= a === "right" ? -1 : 1, n -= p;
    }
    if (l < h && l > 0 && c < h) {
      let p = h + f - l;
      p *= a === "right" ? -1 : 1, n += p;
    }
    return mt(t).x + n;
  }, "x"),
  y: /* @__PURE__ */ d(function(t, r, i) {
    let n = 0;
    const a = mt(i[0]).y < mt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Ft, e.arrowTypeStart)) {
      const { angle: p, deltaY: g } = vi(i[0], i[1]);
      n = Ft[e.arrowTypeStart] * Math.abs(Math.sin(p)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Ft, e.arrowTypeEnd)) {
      const { angle: p, deltaY: g } = vi(
        i[i.length - 1],
        i[i.length - 2]
      );
      n = Ft[e.arrowTypeEnd] * Math.abs(Math.sin(p)) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      mt(t).y - mt(i[i.length - 1]).y
    ), s = Math.abs(
      mt(t).x - mt(i[i.length - 1]).x
    ), l = Math.abs(mt(t).y - mt(i[0]).y), c = Math.abs(mt(t).x - mt(i[0]).x), h = Ft[e.arrowTypeStart], u = Ft[e.arrowTypeEnd], f = 1;
    if (o < u && o > 0 && s < u) {
      let p = u + f - o;
      p *= a === "up" ? -1 : 1, n -= p;
    }
    if (l < h && l > 0 && c < h) {
      let p = h + f - l;
      p *= a === "up" ? -1 : 1, n += p;
    }
    return mt(t).y + n;
  }, "y")
}), "getLineFunctionsWithOffset"), Zo = /* @__PURE__ */ d(({
  flowchart: e
}) => {
  var n, a;
  const t = ((n = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : n.top) ?? 0, r = ((a = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : a.bottom) ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins"), lC = /* @__PURE__ */ d((e) => {
  const { handDrawnSeed: t } = lt();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), ti = /* @__PURE__ */ d((e) => {
  const t = cC([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), cC = /* @__PURE__ */ d((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.set(i.trim(), n == null ? void 0 : n.trim());
  }), t;
}, "styles2Map"), wp = /* @__PURE__ */ d((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), Y = /* @__PURE__ */ d((e) => {
  const { stylesArray: t } = ti(e), r = [], i = [], n = [], a = [];
  return t.forEach((o) => {
    const s = o[0];
    wp(s) ? r.push(o.join(":") + " !important") : (i.push(o.join(":") + " !important"), s.includes("stroke") && n.push(o.join(":") + " !important"), s === "fill" && a.push(o.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: n,
    backgroundStyles: a
  };
}, "styles2String"), j = /* @__PURE__ */ d((e, t) => {
  var l;
  const { themeVariables: r, handDrawnSeed: i } = lt(), { nodeBorder: n, mainBkg: a } = r, { stylesMap: o } = ti(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: o.get("fill") || a,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: o.get("stroke") || n,
      seed: i,
      strokeWidth: ((l = o.get("stroke-width")) == null ? void 0 : l.replace("px", "")) || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: hC(o.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), hC = /* @__PURE__ */ d((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const n = isNaN(t[0]) ? 0 : t[0];
    return [n, n];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray"), di = {}, wt = {}, Ac;
function uC() {
  return Ac || (Ac = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.BLANK_URL = wt.relativeFirstCharacters = wt.whitespaceEscapeCharsRegex = wt.urlSchemeRegex = wt.ctrlCharactersRegex = wt.htmlCtrlEntityRegex = wt.htmlEntitiesRegex = wt.invalidProtocolRegex = void 0, wt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, wt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, wt.htmlCtrlEntityRegex = /&(newline|tab);/gi, wt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, wt.urlSchemeRegex = /^.+(:|&colon;)/gim, wt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, wt.relativeFirstCharacters = [".", "/"], wt.BLANK_URL = "about:blank"), wt;
}
var Lc;
function fC() {
  if (Lc) return di;
  Lc = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.sanitizeUrl = void 0;
  var e = uC();
  function t(o) {
    return e.relativeFirstCharacters.indexOf(o[0]) > -1;
  }
  function r(o) {
    var s = o.replace(e.ctrlCharactersRegex, "");
    return s.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(o) {
    return URL.canParse(o);
  }
  function n(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }
  function a(o) {
    if (!o)
      return e.BLANK_URL;
    var s, l = n(o.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = n(l), s = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (s && s.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e.urlSchemeRegex);
    if (!u)
      return c;
    var f = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var p = h.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return p;
    if (f === "http:" || f === "https:") {
      if (!i(p))
        return e.BLANK_URL;
      var g = new URL(p);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return p;
  }
  return di.sanitizeUrl = a, di;
}
var pC = fC(), kp = typeof global == "object" && global && global.Object === Object && global, dC = typeof self == "object" && self && self.Object === Object && self, ke = kp || dC || Function("return this")(), aa = ke.Symbol, vp = Object.prototype, gC = vp.hasOwnProperty, mC = vp.toString, gi = aa ? aa.toStringTag : void 0;
function yC(e) {
  var t = gC.call(e, gi), r = e[gi];
  try {
    e[gi] = void 0;
    var i = !0;
  } catch {
  }
  var n = mC.call(e);
  return i && (t ? e[gi] = r : delete e[gi]), n;
}
var xC = Object.prototype, bC = xC.toString;
function CC(e) {
  return bC.call(e);
}
var _C = "[object Null]", wC = "[object Undefined]", Mc = aa ? aa.toStringTag : void 0;
function ei(e) {
  return e == null ? e === void 0 ? wC : _C : Mc && Mc in Object(e) ? yC(e) : CC(e);
}
function yr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var kC = "[object AsyncFunction]", vC = "[object Function]", SC = "[object GeneratorFunction]", TC = "[object Proxy]";
function Ko(e) {
  if (!yr(e))
    return !1;
  var t = ei(e);
  return t == vC || t == SC || t == kC || t == TC;
}
var fs = ke["__core-js_shared__"], Ec = (function() {
  var e = /[^.]+$/.exec(fs && fs.keys && fs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function BC(e) {
  return !!Ec && Ec in e;
}
var AC = Function.prototype, LC = AC.toString;
function xr(e) {
  if (e != null) {
    try {
      return LC.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var MC = /[\\^$.*+?()[\]{}|]/g, EC = /^\[object .+?Constructor\]$/, $C = Function.prototype, FC = Object.prototype, OC = $C.toString, RC = FC.hasOwnProperty, DC = RegExp(
  "^" + OC.call(RC).replace(MC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function IC(e) {
  if (!yr(e) || BC(e))
    return !1;
  var t = Ko(e) ? DC : EC;
  return t.test(xr(e));
}
function PC(e, t) {
  return e == null ? void 0 : e[t];
}
function br(e, t) {
  var r = PC(e, t);
  return IC(r) ? r : void 0;
}
var Hi = br(Object, "create");
function NC() {
  this.__data__ = Hi ? Hi(null) : {}, this.size = 0;
}
function zC(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qC = "__lodash_hash_undefined__", WC = Object.prototype, HC = WC.hasOwnProperty;
function jC(e) {
  var t = this.__data__;
  if (Hi) {
    var r = t[e];
    return r === qC ? void 0 : r;
  }
  return HC.call(t, e) ? t[e] : void 0;
}
var YC = Object.prototype, UC = YC.hasOwnProperty;
function GC(e) {
  var t = this.__data__;
  return Hi ? t[e] !== void 0 : UC.call(t, e);
}
var XC = "__lodash_hash_undefined__";
function VC(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Hi && t === void 0 ? XC : t, this;
}
function dr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
dr.prototype.clear = NC;
dr.prototype.delete = zC;
dr.prototype.get = jC;
dr.prototype.has = GC;
dr.prototype.set = VC;
function ZC() {
  this.__data__ = [], this.size = 0;
}
function Ea(e, t) {
  return e === t || e !== e && t !== t;
}
function $a(e, t) {
  for (var r = e.length; r--; )
    if (Ea(e[r][0], t))
      return r;
  return -1;
}
var KC = Array.prototype, QC = KC.splice;
function JC(e) {
  var t = this.__data__, r = $a(t, e);
  if (r < 0)
    return !1;
  var i = t.length - 1;
  return r == i ? t.pop() : QC.call(t, r, 1), --this.size, !0;
}
function t_(e) {
  var t = this.__data__, r = $a(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function e_(e) {
  return $a(this.__data__, e) > -1;
}
function r_(e, t) {
  var r = this.__data__, i = $a(r, e);
  return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
}
function De(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = ZC;
De.prototype.delete = JC;
De.prototype.get = t_;
De.prototype.has = e_;
De.prototype.set = r_;
var ji = br(ke, "Map");
function i_() {
  this.size = 0, this.__data__ = {
    hash: new dr(),
    map: new (ji || De)(),
    string: new dr()
  };
}
function n_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Fa(e, t) {
  var r = e.__data__;
  return n_(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function a_(e) {
  var t = Fa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function s_(e) {
  return Fa(this, e).get(e);
}
function o_(e) {
  return Fa(this, e).has(e);
}
function l_(e, t) {
  var r = Fa(this, e), i = r.size;
  return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
}
function Ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ue.prototype.clear = i_;
Ue.prototype.delete = a_;
Ue.prototype.get = s_;
Ue.prototype.has = o_;
Ue.prototype.set = l_;
var c_ = "Expected a function";
function Ji(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(c_);
  var r = function() {
    var i = arguments, n = t ? t.apply(this, i) : i[0], a = r.cache;
    if (a.has(n))
      return a.get(n);
    var o = e.apply(this, i);
    return r.cache = a.set(n, o) || a, o;
  };
  return r.cache = new (Ji.Cache || Ue)(), r;
}
Ji.Cache = Ue;
function h_() {
  this.__data__ = new De(), this.size = 0;
}
function u_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function f_(e) {
  return this.__data__.get(e);
}
function p_(e) {
  return this.__data__.has(e);
}
var d_ = 200;
function g_(e, t) {
  var r = this.__data__;
  if (r instanceof De) {
    var i = r.__data__;
    if (!ji || i.length < d_ - 1)
      return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ue(i);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ri(e) {
  var t = this.__data__ = new De(e);
  this.size = t.size;
}
ri.prototype.clear = h_;
ri.prototype.delete = u_;
ri.prototype.get = f_;
ri.prototype.has = p_;
ri.prototype.set = g_;
var sa = (function() {
  try {
    var e = br(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function Qo(e, t, r) {
  t == "__proto__" && sa ? sa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function eo(e, t, r) {
  (r !== void 0 && !Ea(e[t], r) || r === void 0 && !(t in e)) && Qo(e, t, r);
}
function m_(e) {
  return function(t, r, i) {
    for (var n = -1, a = Object(t), o = i(t), s = o.length; s--; ) {
      var l = o[++n];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var y_ = m_(), Sp = typeof exports == "object" && exports && !exports.nodeType && exports, $c = Sp && typeof module == "object" && module && !module.nodeType && module, x_ = $c && $c.exports === Sp, Fc = x_ ? ke.Buffer : void 0, Oc = Fc ? Fc.allocUnsafe : void 0;
function b_(e, t) {
  if (t)
    return e.slice();
  var r = e.length, i = Oc ? Oc(r) : new e.constructor(r);
  return e.copy(i), i;
}
var Rc = ke.Uint8Array;
function C_(e) {
  var t = new e.constructor(e.byteLength);
  return new Rc(t).set(new Rc(e)), t;
}
function __(e, t) {
  var r = t ? C_(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
function w_(e, t) {
  var r = -1, i = e.length;
  for (t || (t = Array(i)); ++r < i; )
    t[r] = e[r];
  return t;
}
var Dc = Object.create, k_ = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!yr(t))
      return {};
    if (Dc)
      return Dc(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function Tp(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Bp = Tp(Object.getPrototypeOf, Object), v_ = Object.prototype;
function Oa(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || v_;
  return e === r;
}
function S_(e) {
  return typeof e.constructor == "function" && !Oa(e) ? k_(Bp(e)) : {};
}
function tn(e) {
  return e != null && typeof e == "object";
}
var T_ = "[object Arguments]";
function Ic(e) {
  return tn(e) && ei(e) == T_;
}
var Ap = Object.prototype, B_ = Ap.hasOwnProperty, A_ = Ap.propertyIsEnumerable, oa = Ic(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ic : function(e) {
  return tn(e) && B_.call(e, "callee") && !A_.call(e, "callee");
}, la = Array.isArray, L_ = 9007199254740991;
function Lp(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= L_;
}
function Ra(e) {
  return e != null && Lp(e.length) && !Ko(e);
}
function M_(e) {
  return tn(e) && Ra(e);
}
function E_() {
  return !1;
}
var Mp = typeof exports == "object" && exports && !exports.nodeType && exports, Pc = Mp && typeof module == "object" && module && !module.nodeType && module, $_ = Pc && Pc.exports === Mp, Nc = $_ ? ke.Buffer : void 0, F_ = Nc ? Nc.isBuffer : void 0, Jo = F_ || E_, O_ = "[object Object]", R_ = Function.prototype, D_ = Object.prototype, Ep = R_.toString, I_ = D_.hasOwnProperty, P_ = Ep.call(Object);
function N_(e) {
  if (!tn(e) || ei(e) != O_)
    return !1;
  var t = Bp(e);
  if (t === null)
    return !0;
  var r = I_.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ep.call(r) == P_;
}
var z_ = "[object Arguments]", q_ = "[object Array]", W_ = "[object Boolean]", H_ = "[object Date]", j_ = "[object Error]", Y_ = "[object Function]", U_ = "[object Map]", G_ = "[object Number]", X_ = "[object Object]", V_ = "[object RegExp]", Z_ = "[object Set]", K_ = "[object String]", Q_ = "[object WeakMap]", J_ = "[object ArrayBuffer]", tw = "[object DataView]", ew = "[object Float32Array]", rw = "[object Float64Array]", iw = "[object Int8Array]", nw = "[object Int16Array]", aw = "[object Int32Array]", sw = "[object Uint8Array]", ow = "[object Uint8ClampedArray]", lw = "[object Uint16Array]", cw = "[object Uint32Array]", pt = {};
pt[ew] = pt[rw] = pt[iw] = pt[nw] = pt[aw] = pt[sw] = pt[ow] = pt[lw] = pt[cw] = !0;
pt[z_] = pt[q_] = pt[J_] = pt[W_] = pt[tw] = pt[H_] = pt[j_] = pt[Y_] = pt[U_] = pt[G_] = pt[X_] = pt[V_] = pt[Z_] = pt[K_] = pt[Q_] = !1;
function hw(e) {
  return tn(e) && Lp(e.length) && !!pt[ei(e)];
}
function uw(e) {
  return function(t) {
    return e(t);
  };
}
var $p = typeof exports == "object" && exports && !exports.nodeType && exports, Fi = $p && typeof module == "object" && module && !module.nodeType && module, fw = Fi && Fi.exports === $p, ps = fw && kp.process, zc = (function() {
  try {
    var e = Fi && Fi.require && Fi.require("util").types;
    return e || ps && ps.binding && ps.binding("util");
  } catch {
  }
})(), qc = zc && zc.isTypedArray, tl = qc ? uw(qc) : hw;
function ro(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var pw = Object.prototype, dw = pw.hasOwnProperty;
function gw(e, t, r) {
  var i = e[t];
  (!(dw.call(e, t) && Ea(i, r)) || r === void 0 && !(t in e)) && Qo(e, t, r);
}
function mw(e, t, r, i) {
  var n = !r;
  r || (r = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var s = t[a], l = void 0;
    l === void 0 && (l = e[s]), n ? Qo(r, s, l) : gw(r, s, l);
  }
  return r;
}
function yw(e, t) {
  for (var r = -1, i = Array(e); ++r < e; )
    i[r] = t(r);
  return i;
}
var xw = 9007199254740991, bw = /^(?:0|[1-9]\d*)$/;
function Fp(e, t) {
  var r = typeof e;
  return t = t ?? xw, !!t && (r == "number" || r != "symbol" && bw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Cw = Object.prototype, _w = Cw.hasOwnProperty;
function ww(e, t) {
  var r = la(e), i = !r && oa(e), n = !r && !i && Jo(e), a = !r && !i && !n && tl(e), o = r || i || n || a, s = o ? yw(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || _w.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Fp(c, l))) && s.push(c);
  return s;
}
function kw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var vw = Object.prototype, Sw = vw.hasOwnProperty;
function Tw(e) {
  if (!yr(e))
    return kw(e);
  var t = Oa(e), r = [];
  for (var i in e)
    i == "constructor" && (t || !Sw.call(e, i)) || r.push(i);
  return r;
}
function Op(e) {
  return Ra(e) ? ww(e, !0) : Tw(e);
}
function Bw(e) {
  return mw(e, Op(e));
}
function Aw(e, t, r, i, n, a, o) {
  var s = ro(e, r), l = ro(t, r), c = o.get(l);
  if (c) {
    eo(e, r, c);
    return;
  }
  var h = a ? a(s, l, r + "", e, t, o) : void 0, u = h === void 0;
  if (u) {
    var f = la(l), p = !f && Jo(l), g = !f && !p && tl(l);
    h = l, f || p || g ? la(s) ? h = s : M_(s) ? h = w_(s) : p ? (u = !1, h = b_(l, !0)) : g ? (u = !1, h = __(l, !0)) : h = [] : N_(l) || oa(l) ? (h = s, oa(s) ? h = Bw(s) : (!yr(s) || Ko(s)) && (h = S_(l))) : u = !1;
  }
  u && (o.set(l, h), n(h, l, i, a, o), o.delete(l)), eo(e, r, h);
}
function Rp(e, t, r, i, n) {
  e !== t && y_(t, function(a, o) {
    if (n || (n = new ri()), yr(a))
      Aw(e, t, o, r, Rp, i, n);
    else {
      var s = i ? i(ro(e, o), a, o + "", e, t, n) : void 0;
      s === void 0 && (s = a), eo(e, o, s);
    }
  }, Op);
}
function Dp(e) {
  return e;
}
function Lw(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Wc = Math.max;
function Mw(e, t, r) {
  return t = Wc(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var i = arguments, n = -1, a = Wc(i.length - t, 0), o = Array(a); ++n < a; )
      o[n] = i[t + n];
    n = -1;
    for (var s = Array(t + 1); ++n < t; )
      s[n] = i[n];
    return s[t] = r(o), Lw(e, this, s);
  };
}
function Ew(e) {
  return function() {
    return e;
  };
}
var $w = sa ? function(e, t) {
  return sa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ew(t),
    writable: !0
  });
} : Dp, Fw = 800, Ow = 16, Rw = Date.now;
function Dw(e) {
  var t = 0, r = 0;
  return function() {
    var i = Rw(), n = Ow - (i - r);
    if (r = i, n > 0) {
      if (++t >= Fw)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Iw = Dw($w);
function Pw(e, t) {
  return Iw(Mw(e, t, Dp), e + "");
}
function Nw(e, t, r) {
  if (!yr(r))
    return !1;
  var i = typeof t;
  return (i == "number" ? Ra(r) && Fp(t, r.length) : i == "string" && t in r) ? Ea(r[t], e) : !1;
}
function zw(e) {
  return Pw(function(t, r) {
    var i = -1, n = r.length, a = n > 1 ? r[n - 1] : void 0, o = n > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (n--, a) : void 0, o && Nw(r[0], r[1], o) && (a = n < 3 ? void 0 : a, n = 1), t = Object(t); ++i < n; ) {
      var s = r[i];
      s && e(t, s, i, a);
    }
    return t;
  });
}
var qw = zw(function(e, t, r) {
  Rp(e, t, r);
}), Ww = "​", Hw = {
  curveBasis: Mn,
  curveBasisClosed: Y1,
  curveBasisOpen: U1,
  curveBumpX: Cu,
  curveBumpY: _u,
  curveBundle: G1,
  curveCardinalClosed: X1,
  curveCardinalOpen: V1,
  curveCardinal: Su,
  curveCatmullRomClosed: Z1,
  curveCatmullRomOpen: K1,
  curveCatmullRom: Bu,
  curveLinear: Vn,
  curveLinearClosed: Q1,
  curveMonotoneX: Fu,
  curveMonotoneY: Ou,
  curveNatural: Du,
  curveStep: Iu,
  curveStepAfter: Nu,
  curveStepBefore: Pu
}, jw = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Yw = /* @__PURE__ */ d(function(e, t) {
  const r = Ip(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const o = r.map((s) => s.args);
    Pn(o), i = kt(i, [...o]);
  } else
    i = r.args;
  if (!i)
    return;
  let n = vo(e, t);
  const a = "config";
  return i[a] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), i[n] = i[a], delete i[a]), i;
}, "detectInit"), Ip = /* @__PURE__ */ d(function(e, t = null) {
  var r, i;
  try {
    const n = new RegExp(
      `[%]{2}(?![{]${jw.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(n, "").replace(/'/gm, '"'), B.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let a;
    const o = [];
    for (; (a = Ei.exec(e)) !== null; )
      if (a.index === Ei.lastIndex && Ei.lastIndex++, a && !t || t && ((r = a[1]) != null && r.match(t)) || t && ((i = a[2]) != null && i.match(t))) {
        const s = a[1] ? a[1] : a[2], l = a[3] ? a[3].trim() : a[4] ? JSON.parse(a[4].trim()) : null;
        o.push({ type: s, args: l });
      }
    return o.length === 0 ? { type: e, args: null } : o.length === 1 ? o[0] : o;
  } catch (n) {
    return B.error(
      `ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), Uw = /* @__PURE__ */ d(function(e) {
  return e.replace(Ei, "");
}, "removeDirectives"), Gw = /* @__PURE__ */ d(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function el(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return Hw[r] ?? t;
}
d(el, "interpolateToCurve");
function Pp(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? pC.sanitizeUrl(r) : r;
}
d(Pp, "formatUrl");
var Xw = /* @__PURE__ */ d((e, ...t) => {
  const r = e.split("."), i = r.length - 1, n = r[i];
  let a = window;
  for (let o = 0; o < i; o++)
    if (a = a[r[o]], !a) {
      B.error(`Function name: ${e} not found in window`);
      return;
    }
  a[n](...t);
}, "runFunc");
function rl(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
d(rl, "distance");
function Np(e) {
  let t, r = 0;
  e.forEach((n) => {
    r += rl(n, t), t = n;
  });
  const i = r / 2;
  return il(e, i);
}
d(Np, "traverseEdge");
function zp(e) {
  return e.length === 1 ? e[0] : Np(e);
}
d(zp, "calcLabelPosition");
var Hc = /* @__PURE__ */ d((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), il = /* @__PURE__ */ d((e, t) => {
  let r, i = t;
  for (const n of e) {
    if (r) {
      const a = rl(n, r);
      if (a === 0)
        return r;
      if (a < i)
        i -= a;
      else {
        const o = i / a;
        if (o <= 0)
          return r;
        if (o >= 1)
          return { x: n.x, y: n.y };
        if (o > 0 && o < 1)
          return {
            x: Hc((1 - o) * r.x + o * n.x, 5),
            y: Hc((1 - o) * r.y + o * n.y, 5)
          };
      }
    }
    r = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), Vw = /* @__PURE__ */ d((e, t, r) => {
  B.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const n = il(t, 25), a = e ? 10 : 5, o = Math.atan2(t[0].y - n.y, t[0].x - n.x), s = { x: 0, y: 0 };
  return s.x = Math.sin(o) * a + (t[0].x + n.x) / 2, s.y = -Math.cos(o) * a + (t[0].y + n.y) / 2, s;
}, "calcCardinalityPosition");
function qp(e, t, r) {
  const i = structuredClone(r);
  B.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const n = 25 + e, a = il(i, n), o = 10 + e * 0.5, s = Math.atan2(i[0].y - a.y, i[0].x - a.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(s + Math.PI) * o + (i[0].x + a.x) / 2, l.y = -Math.cos(s + Math.PI) * o + (i[0].y + a.y) / 2) : t === "end_right" ? (l.x = Math.sin(s - Math.PI) * o + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(s - Math.PI) * o + (i[0].y + a.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(s) * o + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(s) * o + (i[0].y + a.y) / 2 - 5) : (l.x = Math.sin(s) * o + (i[0].x + a.x) / 2, l.y = -Math.cos(s) * o + (i[0].y + a.y) / 2), l;
}
d(qp, "calcTerminalLabelPosition");
function Wp(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
d(Wp, "getStylesFromArray");
var jc = 0, Zw = /* @__PURE__ */ d(() => (jc++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + jc), "generateId");
function Hp(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let n = 0; n < e; n++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
d(Hp, "makeRandomHex");
var Kw = /* @__PURE__ */ d((e) => Hp(e.length), "random"), Qw = /* @__PURE__ */ d(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), Jw = /* @__PURE__ */ d(function(e, t) {
  const r = t.text.replace(Jr.lineBreakRegex, " "), [, i] = Da(t.fontSize), n = e.append("text");
  n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", i), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
  const a = n.append("tspan");
  return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(r), n;
}, "drawSimpleText"), tk = Ji(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Jr.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), n = [];
    let a = "";
    return i.forEach((o, s) => {
      const l = Re(`${o} `, r), c = Re(a, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: p } = ek(o, t, "-", r);
        n.push(a, ...f), a = p;
      } else c + l >= t ? (n.push(a), a = o) : a = [a, o].filter(Boolean).join(" ");
      s + 1 === i.length && n.push(a);
    }), n.filter((o) => o !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), ek = Ji(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const n = [...e], a = [];
    let o = "";
    return n.forEach((s, l) => {
      const c = `${o}${s}`;
      if (Re(c, i) >= t) {
        const u = l + 1, f = n.length === u, p = `${c}${r}`;
        a.push(f ? c : p), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: a, remainingWord: o };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function jp(e, t) {
  return nl(e, t).height;
}
d(jp, "calculateTextHeight");
function Re(e, t) {
  return nl(e, t).width;
}
d(Re, "calculateTextWidth");
var nl = Ji(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, a] = Da(r), o = ["sans-serif", i], s = e.split(Jr.lineBreakRegex), l = [], c = at("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of o) {
      let p = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of s) {
        const y = Qw();
        y.text = m || Ww;
        const x = Jw(h, y).style("font-size", a).style("font-weight", n).style("font-family", f), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), p = Math.round(b.height), g.height += p, g.lineHeight = Math.round(Math.max(g.lineHeight, p));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), Hr, rk = (Hr = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, d(Hr, "InitIDGenerator"), Hr), mn, ik = /* @__PURE__ */ d(function(e) {
  return mn = mn || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), mn.innerHTML = e, unescape(mn.textContent);
}, "entityDecode");
function al(e) {
  return "str" in e;
}
d(al, "isDetailedError");
var nk = /* @__PURE__ */ d((e, t, r, i) => {
  var a;
  if (!i)
    return;
  const n = (a = e.node()) == null ? void 0 : a.getBBox();
  n && e.append("text").text(i).attr("text-anchor", "middle").attr("x", n.x + n.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), Da = /* @__PURE__ */ d((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function sl(e, t) {
  return qw({}, e, t);
}
d(sl, "cleanAndMerge");
var he = {
  assignWithDepth: kt,
  wrapLabel: tk,
  calculateTextHeight: jp,
  calculateTextWidth: Re,
  calculateTextDimensions: nl,
  cleanAndMerge: sl,
  detectInit: Yw,
  detectDirective: Ip,
  isSubstringInArray: Gw,
  interpolateToCurve: el,
  calcLabelPosition: zp,
  calcCardinalityPosition: Vw,
  calcTerminalLabelPosition: qp,
  formatUrl: Pp,
  getStylesFromArray: Wp,
  generateId: Zw,
  random: Kw,
  runFunc: Xw,
  entityDecode: ik,
  insertTitle: nk,
  isLabelCoordinateInPath: Yp,
  parseFontSize: Da,
  InitIDGenerator: rk
}, ak = /* @__PURE__ */ d(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), Cr = /* @__PURE__ */ d(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), aL = /* @__PURE__ */ d((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: n
}, a) => a || `${i ? `${i}_` : ""}${e}_${t}_${r}${n ? `_${n}` : ""}`, "getEdgeId");
function Dt(e) {
  return e ?? null;
}
d(Dt, "handleUndefinedAttr");
function Yp(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), n = t.replace(
    /(\d+\.\d+)/g,
    (a) => Math.round(parseFloat(a)).toString()
  );
  return n.includes(r.toString()) || n.includes(i.toString());
}
d(Yp, "isLabelCoordinateInPath");
const sk = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), ca = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Up = Object.freeze({
  ...sk,
  ...ca
}), ok = Object.freeze({
  ...Up,
  body: "",
  hidden: !1
}), lk = Object.freeze({
  width: null,
  height: null
}), ck = Object.freeze({
  ...lk,
  ...ca
}), hk = (e, t, r, i = "") => {
  const n = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3) return null;
    i = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length) return null;
  if (n.length > 1) {
    const s = n.pop(), l = n.pop(), c = {
      provider: n.length > 0 ? n[0] : i,
      prefix: l,
      name: s
    };
    return ds(c) ? c : null;
  }
  const a = n[0], o = a.split("-");
  if (o.length > 1) {
    const s = {
      provider: i,
      prefix: o.shift(),
      name: o.join("-")
    };
    return ds(s) ? s : null;
  }
  if (r && i === "") {
    const s = {
      provider: i,
      prefix: "",
      name: a
    };
    return ds(s, r) ? s : null;
  }
  return null;
}, ds = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function uk(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Yc(e, t) {
  const r = uk(e, t);
  for (const i in ok) i in ca ? i in e && !(i in r) && (r[i] = ca[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function fk(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function a(o) {
    if (r[o]) return n[o] = [];
    if (!(o in n)) {
      n[o] = null;
      const s = i[o] && i[o].parent, l = s && a(s);
      l && (n[o] = [s].concat(l));
    }
    return n[o];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(a), n;
}
function Uc(e, t, r) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
  let a = {};
  function o(s) {
    a = Yc(i[s] || n[s], a);
  }
  return o(t), r.forEach(o), Yc(e, a);
}
function pk(e, t) {
  if (e.icons[t]) return Uc(e, t, []);
  const r = fk(e, [t])[t];
  return r ? Uc(e, t, r) : null;
}
const dk = /(-?[0-9.]*[0-9]+[0-9.]*)/g, gk = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Gc(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(dk);
  if (i === null || !i.length) return e;
  const n = [];
  let a = i.shift(), o = gk.test(a);
  for (; ; ) {
    if (o) {
      const s = parseFloat(a);
      isNaN(s) ? n.push(a) : n.push(Math.ceil(s * t * r) / r);
    } else n.push(a);
    if (a = i.shift(), a === void 0) return n.join("");
    o = !o;
  }
}
function mk(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const n = e.indexOf(">", i), a = e.indexOf("</" + t);
    if (n === -1 || a === -1) break;
    const o = e.indexOf(">", a);
    if (o === -1) break;
    r += e.slice(n + 1, a).trim(), e = e.slice(0, i).trim() + e.slice(o + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function yk(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function xk(e, t, r) {
  const i = mk(e);
  return yk(i.defs, t + i.content + r);
}
const bk = (e) => e === "unset" || e === "undefined" || e === "none";
function Ck(e, t) {
  const r = {
    ...Up,
    ...e
  }, i = {
    ...ck,
    ...t
  }, n = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let a = r.body;
  [r, i].forEach((m) => {
    const y = [], x = m.hFlip, b = m.vFlip;
    let _ = m.rotate;
    x ? b ? _ += 2 : (y.push("translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"), y.push("scale(-1 1)"), n.top = n.left = 0) : b && (y.push("translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"), y.push("scale(1 -1)"), n.top = n.left = 0);
    let v;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
      case 1:
        v = n.height / 2 + n.top, y.unshift("rotate(90 " + v.toString() + " " + v.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")");
        break;
      case 3:
        v = n.width / 2 + n.left, y.unshift("rotate(-90 " + v.toString() + " " + v.toString() + ")");
        break;
    }
    _ % 2 === 1 && (n.left !== n.top && (v = n.left, n.left = n.top, n.top = v), n.width !== n.height && (v = n.width, n.width = n.height, n.height = v)), y.length && (a = xk(a, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const o = i.width, s = i.height, l = n.width, c = n.height;
  let h, u;
  o === null ? (u = s === null ? "1em" : s === "auto" ? c : s, h = Gc(u, l / c)) : (h = o === "auto" ? l : o, u = s === null ? Gc(h, c / l) : s === "auto" ? c : s);
  const f = {}, p = (m, y) => {
    bk(y) || (f[m] = y.toString());
  };
  p("width", h), p("height", u);
  const g = [
    n.left,
    n.top,
    l,
    c
  ];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: a
  };
}
const _k = /\sid="(\S+)"/g, wk = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let kk = 0;
function vk(e, t = wk) {
  const r = [];
  let i;
  for (; i = _k.exec(e); ) r.push(i[1]);
  if (!r.length) return e;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r.forEach((a) => {
    const o = typeof t == "function" ? t(a) : t + (kk++).toString(), s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"), "$1" + o + n + "$3");
  }), e = e.replace(new RegExp(n, "g"), ""), e;
}
function Sk(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function ol() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var _r = ol();
function Gp(e) {
  _r = e;
}
var Oi = { exec: () => null };
function st(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (n, a) => {
    let o = typeof a == "string" ? a : a.source;
    return o = o.replace(qt.caret, "$1"), r = r.replace(n, o), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var qt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, Tk = /^(?:[ \t]*(?:\n|$))+/, Bk = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ak = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, en = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Lk = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ll = /(?:[*+-]|\d{1,9}[.)])/, Xp = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Vp = st(Xp).replace(/bull/g, ll).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Mk = st(Xp).replace(/bull/g, ll).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), cl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ek = /^[^\n]+/, hl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, $k = st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", hl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Fk = st(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ll).getRegex(), Ia = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ul = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Ok = st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ul).replace("tag", Ia).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Zp = st(cl).replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ia).getRegex(), Rk = st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Zp).getRegex(), fl = { blockquote: Rk, code: Bk, def: $k, fences: Ak, heading: Lk, hr: en, html: Ok, lheading: Vp, list: Fk, newline: Tk, paragraph: Zp, table: Oi, text: Ek }, Xc = st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ia).getRegex(), Dk = { ...fl, lheading: Mk, table: Xc, paragraph: st(cl).replace("hr", en).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Xc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ia).getRegex() }, Ik = { ...fl, html: st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ul).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Oi, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: st(cl).replace("hr", en).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Vp).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Pk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Nk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Kp = /^( {2,}|\\)\n(?!\s*$)/, zk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Pa = /[\p{P}\p{S}]/u, pl = /[\s\p{P}\p{S}]/u, Qp = /[^\s\p{P}\p{S}]/u, qk = st(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, pl).getRegex(), Jp = /(?!~)[\p{P}\p{S}]/u, Wk = /(?!~)[\s\p{P}\p{S}]/u, Hk = /(?:[^\s\p{P}\p{S}]|~)/u, jk = st(/link|code|html/, "g").replace("link", new RegExp("\\[(?:[^\\[\\]`]|(?<!`)(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)")).replace("code", new RegExp("(?<!`)(?<b>`+)[^`]+\\k<b>(?!`)")).replace("html", /<(?! )[^<>]*?>/).getRegex(), td = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Yk = st(td, "u").replace(/punct/g, Pa).getRegex(), Uk = st(td, "u").replace(/punct/g, Jp).getRegex(), ed = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Gk = st(ed, "gu").replace(/notPunctSpace/g, Qp).replace(/punctSpace/g, pl).replace(/punct/g, Pa).getRegex(), Xk = st(ed, "gu").replace(/notPunctSpace/g, Hk).replace(/punctSpace/g, Wk).replace(/punct/g, Jp).getRegex(), Vk = st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Qp).replace(/punctSpace/g, pl).replace(/punct/g, Pa).getRegex(), Zk = st(/\\(punct)/, "gu").replace(/punct/g, Pa).getRegex(), Kk = st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Qk = st(ul).replace("(?:-->|$)", "-->").getRegex(), Jk = st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ha = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, tv = st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ha).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), rd = st(/^!?\[(label)\]\[(ref)\]/).replace("label", ha).replace("ref", hl).getRegex(), id = st(/^!?\[(ref)\](?:\[\])?/).replace("ref", hl).getRegex(), ev = st("reflink|nolink(?!\\()", "g").replace("reflink", rd).replace("nolink", id).getRegex(), Vc = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, dl = { _backpedal: Oi, anyPunctuation: Zk, autolink: Kk, blockSkip: jk, br: Kp, code: Nk, del: Oi, emStrongLDelim: Yk, emStrongRDelimAst: Gk, emStrongRDelimUnd: Vk, escape: Pk, link: tv, nolink: id, punctuation: qk, reflink: rd, reflinkSearch: ev, tag: Jk, text: zk, url: Oi }, rv = { ...dl, link: st(/^!?\[(label)\]\((.*?)\)/).replace("label", ha).getRegex(), reflink: st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ha).getRegex() }, io = { ...dl, emStrongRDelimAst: Xk, emStrongLDelim: Uk, url: st(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Vc).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: st(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Vc).getRegex() }, iv = { ...io, br: st(Kp).replace("{2,}", "*").getRegex(), text: st(io.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, yn = { normal: fl, gfm: Dk, pedantic: Ik }, mi = { normal: dl, gfm: io, breaks: iv, pedantic: rv }, nv = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Zc = (e) => nv[e];
function me(e, t) {
  if (t) {
    if (qt.escapeTest.test(e)) return e.replace(qt.escapeReplace, Zc);
  } else if (qt.escapeTestNoEncode.test(e)) return e.replace(qt.escapeReplaceNoEncode, Zc);
  return e;
}
function Kc(e) {
  try {
    e = encodeURI(e).replace(qt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Qc(e, t) {
  var a;
  let r = e.replace(qt.findPipe, (o, s, l) => {
    let c = !1, h = s;
    for (; --h >= 0 && l[h] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), i = r.split(qt.splitPipe), n = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((a = i.at(-1)) != null && a.trim()) && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; n < i.length; n++) i[n] = i[n].trim().replace(qt.slashPipe, "|");
  return i;
}
function yi(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let n = 0;
  for (; n < i && e.charAt(i - n - 1) === t; )
    n++;
  return e.slice(0, i - n);
}
function av(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function Jc(e, t, r, i, n) {
  let a = t.href, o = t.title || null, s = e[1].replace(n.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: a, title: o, text: s, tokens: i.inlineTokens(s) };
  return i.state.inLink = !1, l;
}
function sv(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let n = i[1];
  return t.split(`
`).map((a) => {
    let o = a.match(r.other.beginningSpace);
    if (o === null) return a;
    let [s] = o;
    return s.length >= n.length ? a.slice(n.length) : a;
  }).join(`
`);
}
var ua = class {
  constructor(t) {
    ht(this, "options");
    ht(this, "rules");
    ht(this, "lexer");
    this.options = t || _r;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : yi(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], n = sv(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: n };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let n = yi(i, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (i = n.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: yi(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = yi(r[0], `
`).split(`
`), n = "", a = "", o = [];
      for (; i.length > 0; ) {
        let s = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), s = !0;
        else if (!s) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${h}` : h, a = a ? `${a}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, o, !0), this.lexer.state.top = f, i.length === 0) break;
        let p = o.at(-1);
        if ((p == null ? void 0 : p.type) === "code") break;
        if ((p == null ? void 0 : p.type) === "blockquote") {
          let g = p, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - g.raw.length) + y.raw, a = a.substring(0, a.length - g.text.length) + y.text;
          break;
        } else if ((p == null ? void 0 : p.type) === "list") {
          let g = p, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          o[o.length - 1] = y, n = n.substring(0, n.length - p.raw.length) + y.raw, a = a.substring(0, a.length - g.raw.length) + y.raw, i = m.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: o, text: a };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), n = i.length > 1, a = { type: "list", raw: "", ordered: n, start: n ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = n ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = n ? i : "[*+-]");
      let o = this.rules.other.listItemRegex(i), s = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = o.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), p = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(p) && (h += p + `
`, t = t.substring(p.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), _ = this.rules.other.hrRegex(m), v = this.rules.other.fencesBeginRegex(m), w = this.rules.other.headingBeginRegex(m), C = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let S = t.split(`
`, 1)[0], A;
            if (p = S, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), A = p) : A = p.replace(this.rules.other.tabCharGlobal, "    "), v.test(p) || w.test(p) || C.test(p) || b.test(p) || _.test(p)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= m || !p.trim()) u += `
` + A.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || w.test(f) || _.test(f)) break;
              u += `
` + p;
            }
            !g && !p.trim() && (g = !0), h += S + `
`, t = t.substring(S.length + 1), f = A.slice(m);
          }
        }
        a.loose || (s ? a.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (s = !0));
        let y = null, x;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (x = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), a.items.push({ type: "list_item", raw: h, task: !!y, checked: x, loose: !1, text: u, tokens: [] }), a.raw += h;
      }
      let l = a.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++) if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
        let h = a.items[c].tokens.filter((f) => f.type === "space"), u = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
        a.loose = u;
      }
      if (a.loose) for (let c = 0; c < a.items.length; c++) a.items[c].loose = !0;
      return a;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: n, title: a };
    }
  }
  table(t) {
    var s;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = Qc(r[1]), n = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (s = r[3]) != null && s.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === n.length) {
      for (let l of n) this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < i.length; l++) o.header.push({ text: i[l], tokens: this.lexer.inline(i[l]), header: !0, align: o.align[l] });
      for (let l of a) o.rows.push(Qc(l, o.header.length).map((c, h) => ({ text: c, tokens: this.lexer.inline(c), header: !1, align: o.align[h] })));
      return o;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let o = yi(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 === 0) return;
      } else {
        let o = av(r[2], "()");
        if (o === -2) return;
        if (o > -1) {
          let s = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + o;
          r[2] = r[2].substring(0, o), r[0] = r[0].substring(0, s).trim(), r[3] = "";
        }
      }
      let n = r[2], a = "";
      if (this.options.pedantic) {
        let o = this.rules.other.pedanticHrefTitle.exec(n);
        o && (n = o[1], a = o[3]);
      } else a = r[3] ? r[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? n = n.slice(1) : n = n.slice(1, -1)), Jc(r, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let n = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = r[n.toLowerCase()];
      if (!a) {
        let o = i[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return Jc(i, a, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!n || n[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let a = [...n[0]].length - 1, o, s, l = a, c = 0, h = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + a); (n = h.exec(r)) != null; ) {
        if (o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !o) continue;
        if (s = [...o].length, n[3] || n[4]) {
          l += s;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + s) % 3)) {
          c += s;
          continue;
        }
        if (l -= s, l > 0) continue;
        s = Math.min(s, s + l + c);
        let u = [...n[0]][0].length, f = t.slice(0, a + n.index + u + s);
        if (Math.min(a, s) % 2) {
          let g = f.slice(1, -1);
          return { type: "em", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let p = f.slice(2, -2);
        return { type: "strong", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(i), a = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return n && a && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, n;
      return r[2] === "@" ? (i = r[1], n = "mailto:" + i) : (i = r[1], n = i), { type: "link", raw: r[0], text: i, href: n, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    var i;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let n, a;
      if (r[2] === "@") n = r[0], a = "mailto:" + n;
      else {
        let o;
        do
          o = r[0], r[0] = ((i = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : i[0]) ?? "";
        while (o !== r[0]);
        n = r[0], r[1] === "www." ? a = "http://" + r[0] : a = r[0];
      }
      return { type: "link", raw: r[0], text: n, href: a, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, oe = class no {
  constructor(t) {
    ht(this, "tokens");
    ht(this, "options");
    ht(this, "state");
    ht(this, "tokenizer");
    ht(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || _r, this.options.tokenizer = this.options.tokenizer || new ua(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: qt, block: yn.normal, inline: mi.normal };
    this.options.pedantic ? (r.block = yn.pedantic, r.inline = mi.pedantic) : this.options.gfm && (r.block = yn.gfm, this.options.breaks ? r.inline = mi.breaks : r.inline = mi.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: yn, inline: mi };
  }
  static lex(t, r) {
    return new no(r).lex(t);
  }
  static lexInline(t, r) {
    return new no(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(qt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    var n, a, o;
    for (this.options.pedantic && (t = t.replace(qt.tabCharGlobal, "    ").replace(qt.spaceLine, "")); t; ) {
      let s;
      if ((a = (n = this.options.extensions) == null ? void 0 : n.block) != null && a.some((c) => (s = c.call({ lexer: this }, t, r)) ? (t = t.substring(s.raw.length), r.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let c = r.at(-1);
        s.raw.length === 1 && c !== void 0 ? c.raw += `
` : r.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let c = r.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += (c.raw.endsWith(`
`) ? "" : `
`) + s.raw, c.text += `
` + s.text, this.inlineQueue.at(-1).src = c.text) : r.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        let c = r.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += (c.raw.endsWith(`
`) ? "" : `
`) + s.raw, c.text += `
` + s.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, r.push(s));
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      let l = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let c = 1 / 0, h = t.slice(1), u;
        this.options.extensions.startBlock.forEach((f) => {
          u = f.call({ lexer: this }, h), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(l))) {
        let c = r.at(-1);
        i && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += (c.raw.endsWith(`
`) ? "" : `
`) + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r.push(s), i = l.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let c = r.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += (c.raw.endsWith(`
`) ? "" : `
`) + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r.push(s);
        continue;
      }
      if (t) {
        let c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var s, l, c, h, u;
    let i = t, n = null;
    if (this.tokens.links) {
      let f = Object.keys(this.tokens.links);
      if (f.length > 0) for (; (n = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) f.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (n = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, n.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (n = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, n.index) + "[" + "a".repeat(n[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = ((l = (s = this.options.hooks) == null ? void 0 : s.emStrongMask) == null ? void 0 : l.call({ lexer: this }, i)) ?? i;
    let a = !1, o = "";
    for (; t; ) {
      a || (o = ""), a = !1;
      let f;
      if ((h = (c = this.options.extensions) == null ? void 0 : c.inline) != null && h.some((g) => (f = g.call({ lexer: this }, t, r)) ? (t = t.substring(f.raw.length), r.push(f), !0) : !1)) continue;
      if (f = this.tokenizer.escape(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.tag(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.link(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(f.raw.length);
        let g = r.at(-1);
        f.type === "text" && (g == null ? void 0 : g.type) === "text" ? (g.raw += f.raw, g.text += f.text) : r.push(f);
        continue;
      }
      if (f = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.codespan(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.br(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.del(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (f = this.tokenizer.autolink(t)) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      if (!this.state.inLink && (f = this.tokenizer.url(t))) {
        t = t.substring(f.raw.length), r.push(f);
        continue;
      }
      let p = t;
      if ((u = this.options.extensions) != null && u.startInline) {
        let g = 1 / 0, m = t.slice(1), y;
        this.options.extensions.startInline.forEach((x) => {
          y = x.call({ lexer: this }, m), typeof y == "number" && y >= 0 && (g = Math.min(g, y));
        }), g < 1 / 0 && g >= 0 && (p = t.substring(0, g + 1));
      }
      if (f = this.tokenizer.inlineText(p)) {
        t = t.substring(f.raw.length), f.raw.slice(-1) !== "_" && (o = f.raw.slice(-1)), a = !0;
        let g = r.at(-1);
        (g == null ? void 0 : g.type) === "text" ? (g.raw += f.raw, g.text += f.text) : r.push(f);
        continue;
      }
      if (t) {
        let g = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(g);
          break;
        } else throw new Error(g);
      }
    }
    return r;
  }
}, fa = class {
  constructor(t) {
    ht(this, "options");
    ht(this, "parser");
    this.options = t || _r;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    var o;
    let n = (o = (r || "").match(qt.notSpaceStart)) == null ? void 0 : o[0], a = t.replace(qt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + me(n) + '">' + (i ? a : me(a, !0)) + `</code></pre>
` : "<pre><code>" + (i ? a : me(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, n = "";
    for (let s = 0; s < t.items.length; s++) {
      let l = t.items[s];
      n += this.listitem(l);
    }
    let a = r ? "ol" : "ul", o = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + a + o + `>
` + n + "</" + a + `>
`;
  }
  listitem(t) {
    var i;
    let r = "";
    if (t.task) {
      let n = this.checkbox({ checked: !!t.checked });
      t.loose ? ((i = t.tokens[0]) == null ? void 0 : i.type) === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + me(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: n + " ", text: n + " ", escaped: !0 }) : r += n + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let a = 0; a < t.header.length; a++) i += this.tablecell(t.header[a]);
    r += this.tablerow({ text: i });
    let n = "";
    for (let a = 0; a < t.rows.length; a++) {
      let o = t.rows[a];
      i = "";
      for (let s = 0; s < o.length; s++) i += this.tablecell(o[s]);
      n += this.tablerow({ text: i });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${me(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let n = this.parser.parseInline(i), a = Kc(t);
    if (a === null) return n;
    t = a;
    let o = '<a href="' + t + '"';
    return r && (o += ' title="' + me(r) + '"'), o += ">" + n + "</a>", o;
  }
  image({ href: t, title: r, text: i, tokens: n }) {
    n && (i = this.parser.parseInline(n, this.parser.textRenderer));
    let a = Kc(t);
    if (a === null) return me(i);
    t = a;
    let o = `<img src="${t}" alt="${i}"`;
    return r && (o += ` title="${me(r)}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : me(t.text);
  }
}, gl = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, le = class ao {
  constructor(t) {
    ht(this, "options");
    ht(this, "renderer");
    ht(this, "textRenderer");
    this.options = t || _r, this.options.renderer = this.options.renderer || new fa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gl();
  }
  static parse(t, r) {
    return new ao(r).parse(t);
  }
  static parseInline(t, r) {
    return new ao(r).parseInline(t);
  }
  parse(t, r = !0) {
    var n, a;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
        let c = s, h = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (h !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(c.type)) {
          i += h || "";
          continue;
        }
      }
      let l = s;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "def": {
          i += this.renderer.def(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let c = l, h = this.renderer.text(c);
          for (; o + 1 < t.length && t[o + 1].type === "text"; ) c = t[++o], h += `
` + this.renderer.text(c);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: h, text: h, tokens: [{ type: "text", raw: h, text: h, escaped: !0 }] }) : i += h;
          continue;
        }
        default: {
          let c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    var n, a;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
        let c = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (c !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += c || "";
          continue;
        }
      }
      let l = s;
      switch (l.type) {
        case "escape": {
          i += r.text(l);
          break;
        }
        case "html": {
          i += r.html(l);
          break;
        }
        case "link": {
          i += r.link(l);
          break;
        }
        case "image": {
          i += r.image(l);
          break;
        }
        case "strong": {
          i += r.strong(l);
          break;
        }
        case "em": {
          i += r.em(l);
          break;
        }
        case "codespan": {
          i += r.codespan(l);
          break;
        }
        case "br": {
          i += r.br(l);
          break;
        }
        case "del": {
          i += r.del(l);
          break;
        }
        case "text": {
          i += r.text(l);
          break;
        }
        default: {
          let c = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return i;
  }
}, kn, Si = (kn = class {
  constructor(t) {
    ht(this, "options");
    ht(this, "block");
    this.options = t || _r;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? oe.lex : oe.lexInline;
  }
  provideParser() {
    return this.block ? le.parse : le.parseInline;
  }
}, ht(kn, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), ht(kn, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), kn), ov = class {
  constructor(...t) {
    ht(this, "defaults", ol());
    ht(this, "options", this.setOptions);
    ht(this, "parse", this.parseMarkdown(!0));
    ht(this, "parseInline", this.parseMarkdown(!1));
    ht(this, "Parser", le);
    ht(this, "Renderer", fa);
    ht(this, "TextRenderer", gl);
    ht(this, "Lexer", oe);
    ht(this, "Tokenizer", ua);
    ht(this, "Hooks", Si);
    this.use(...t);
  }
  walkTokens(t, r) {
    var n, a;
    let i = [];
    for (let o of t) switch (i = i.concat(r.call(this, o)), o.type) {
      case "table": {
        let s = o;
        for (let l of s.header) i = i.concat(this.walkTokens(l.tokens, r));
        for (let l of s.rows) for (let c of l) i = i.concat(this.walkTokens(c.tokens, r));
        break;
      }
      case "list": {
        let s = o;
        i = i.concat(this.walkTokens(s.items, r));
        break;
      }
      default: {
        let s = o;
        (a = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && a[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((l) => {
          let c = s[l].flat(1 / 0);
          i = i.concat(this.walkTokens(c, r));
        }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let n = { ...i };
      if (n.async = this.defaults.async || n.async || !1, i.extensions && (i.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let o = r.renderers[a.name];
          o ? r.renderers[a.name] = function(...s) {
            let l = a.renderer.apply(this, s);
            return l === !1 && (l = o.apply(this, s)), l;
          } : r.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let o = r[a.level];
          o ? o.unshift(a.tokenizer) : r[a.level] = [a.tokenizer], a.start && (a.level === "block" ? r.startBlock ? r.startBlock.push(a.start) : r.startBlock = [a.start] : a.level === "inline" && (r.startInline ? r.startInline.push(a.start) : r.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (r.childTokens[a.name] = a.childTokens);
      }), n.extensions = r), i.renderer) {
        let a = this.defaults.renderer || new fa(this.defaults);
        for (let o in i.renderer) {
          if (!(o in a)) throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o)) continue;
          let s = o, l = i.renderer[s], c = a[s];
          a[s] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u || "";
          };
        }
        n.renderer = a;
      }
      if (i.tokenizer) {
        let a = this.defaults.tokenizer || new ua(this.defaults);
        for (let o in i.tokenizer) {
          if (!(o in a)) throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o)) continue;
          let s = o, l = i.tokenizer[s], c = a[s];
          a[s] = (...h) => {
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.tokenizer = a;
      }
      if (i.hooks) {
        let a = this.defaults.hooks || new Si();
        for (let o in i.hooks) {
          if (!(o in a)) throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o)) continue;
          let s = o, l = i.hooks[s], c = a[s];
          Si.passThroughHooks.has(o) ? a[s] = (h) => {
            if (this.defaults.async && Si.passThroughHooksRespectAsync.has(o)) return (async () => {
              let f = await l.call(a, h);
              return c.call(a, f);
            })();
            let u = l.call(a, h);
            return c.call(a, u);
          } : a[s] = (...h) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(a, h);
              return f === !1 && (f = await c.apply(a, h)), f;
            })();
            let u = l.apply(a, h);
            return u === !1 && (u = c.apply(a, h)), u;
          };
        }
        n.hooks = a;
      }
      if (i.walkTokens) {
        let a = this.defaults.walkTokens, o = i.walkTokens;
        n.walkTokens = function(s) {
          let l = [];
          return l.push(o.call(this, s)), a && (l = l.concat(a.call(this, s))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return oe.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return le.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let n = { ...i }, a = { ...this.defaults, ...n }, o = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let s = a.hooks ? await a.hooks.preprocess(r) : r, l = await (a.hooks ? await a.hooks.provideLexer() : t ? oe.lex : oe.lexInline)(s, a), c = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(c, a.walkTokens));
        let h = await (a.hooks ? await a.hooks.provideParser() : t ? le.parse : le.parseInline)(c, a);
        return a.hooks ? await a.hooks.postprocess(h) : h;
      })().catch(o);
      try {
        a.hooks && (r = a.hooks.preprocess(r));
        let s = (a.hooks ? a.hooks.provideLexer() : t ? oe.lex : oe.lexInline)(r, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? le.parse : le.parseInline)(s, a);
        return a.hooks && (l = a.hooks.postprocess(l)), l;
      } catch (s) {
        return o(s);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let n = "<p>An error occurred:</p><pre>" + me(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(n) : n;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, gr = new ov();
function ct(e, t) {
  return gr.parse(e, t);
}
ct.options = ct.setOptions = function(e) {
  return gr.setOptions(e), ct.defaults = gr.defaults, Gp(ct.defaults), ct;
};
ct.getDefaults = ol;
ct.defaults = _r;
ct.use = function(...e) {
  return gr.use(...e), ct.defaults = gr.defaults, Gp(ct.defaults), ct;
};
ct.walkTokens = function(e, t) {
  return gr.walkTokens(e, t);
};
ct.parseInline = gr.parseInline;
ct.Parser = le;
ct.parser = le.parse;
ct.Renderer = fa;
ct.TextRenderer = gl;
ct.Lexer = oe;
ct.lexer = oe.lex;
ct.Tokenizer = ua;
ct.Hooks = Si;
ct.parse = ct;
ct.options;
ct.setOptions;
ct.use;
ct.walkTokens;
ct.parseInline;
le.parse;
oe.lex;
function nd(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = i.reduce(function(s, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? s.concat(c.map(function(h) {
      var u, f;
      return (f = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : s;
  }, []);
  if (n.length) {
    var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    i = i.map(function(s) {
      return s.replace(a, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var o = i[0];
  return t.forEach(function(s, l) {
    var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = s;
    typeof s == "string" && s.includes(`
`) && (u = String(s).split(`
`).map(function(f, p) {
      return p === 0 ? f : "" + h + f;
    }).join(`
`)), o += u + i[l + 1];
  }), o;
}
var lv = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, so = /* @__PURE__ */ new Map(), ad = /* @__PURE__ */ new Map(), cv = /* @__PURE__ */ d((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (B.debug("Registering icon pack:", t.name), "loader" in t)
      ad.set(t.name, t.loader);
    else if ("icons" in t)
      so.set(t.name, t.icons);
    else
      throw B.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), sd = /* @__PURE__ */ d(async (e, t) => {
  const r = hk(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let n = so.get(i);
  if (!n) {
    const o = ad.get(i);
    if (!o)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      n = { ...await o(), prefix: i }, so.set(i, n);
    } catch (s) {
      throw B.error(s), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const a = pk(n, r.name);
  if (!a)
    throw new Error(`Icon not found: ${e}`);
  return a;
}, "getRegisteredIconData"), hv = /* @__PURE__ */ d(async (e) => {
  try {
    return await sd(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), rn = /* @__PURE__ */ d(async (e, t, r) => {
  let i;
  try {
    i = await sd(e, t == null ? void 0 : t.fallbackPrefix);
  } catch (o) {
    B.error(o), i = lv;
  }
  const n = Ck(i, t), a = Sk(vk(n.body), {
    ...n.attributes,
    ...r
  });
  return te(a, Ot());
}, "getIconSVG");
function od(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), n = nd(i);
  return t === !1 ? n.replace(/ /g, "&nbsp;") : n;
}
d(od, "preprocessMarkdown");
function ld(e, t = {}) {
  const r = od(e, t), i = ct.lexer(r), n = [[]];
  let a = 0;
  function o(s, l = "normal") {
    s.type === "text" ? s.text.split(`
`).forEach((h, u) => {
      u !== 0 && (a++, n.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && n[a].push({ content: f, type: l });
      });
    }) : s.type === "strong" || s.type === "em" ? s.tokens.forEach((c) => {
      o(c, s.type);
    }) : s.type === "html" && n[a].push({ content: s.text, type: "normal" });
  }
  return d(o, "processNode"), i.forEach((s) => {
    var l;
    s.type === "paragraph" ? (l = s.tokens) == null || l.forEach((c) => {
      o(c);
    }) : s.type === "html" ? n[a].push({ content: s.text, type: "normal" }) : n[a].push({ content: s.raw, type: "normal" });
  }), n;
}
d(ld, "markdownToLines");
function cd(e, { markdownAutoWrap: t } = {}) {
  const r = ct.lexer(e);
  function i(n) {
    var a, o, s;
    return n.type === "text" ? t === !1 ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(a = n.tokens) == null ? void 0 : a.map(i).join("")}</strong>` : n.type === "em" ? `<em>${(o = n.tokens) == null ? void 0 : o.map(i).join("")}</em>` : n.type === "paragraph" ? `<p>${(s = n.tokens) == null ? void 0 : s.map(i).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : (B.warn(`Unsupported markdown: ${n.type}`), n.raw);
  }
  return d(i, "output"), r.map(i).join("");
}
d(cd, "markdownToHTML");
function hd(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
d(hd, "splitTextToChars");
function ud(e, t) {
  const r = hd(t.content);
  return ml(e, [], r, t.type);
}
d(ud, "splitWordToFitWidth");
function ml(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [n, ...a] = r, o = [...t, n];
  return e([{ content: o.join(""), type: i }]) ? ml(e, o, a, i) : (t.length === 0 && n && (t.push(n), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
d(ml, "splitWordToFitWidthRecursion");
function fd(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return pa(e, t);
}
d(fd, "splitLineToFitWidth");
function pa(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let n = "";
  e[0].content === " " && (n = " ", e.shift());
  const a = e.shift() ?? { content: " ", type: "normal" }, o = [...i];
  if (n !== "" && o.push({ content: n, type: "normal" }), o.push(a), t(o))
    return pa(e, t, r, o);
  if (i.length > 0)
    r.push(i), e.unshift(a);
  else if (a.content) {
    const [s, l] = ud(t, a);
    r.push([s]), l.content && e.unshift(l);
  }
  return pa(e, t, r);
}
d(pa, "splitLineToFitWidthRecursion");
function oo(e, t) {
  t && e.attr("style", t);
}
d(oo, "applyStyle");
async function pd(e, t, r, i, n = !1, a = Ot()) {
  const o = e.append("foreignObject");
  o.attr("width", `${10 * r}px`), o.attr("height", `${10 * r}px`);
  const s = o.append("xhtml:div"), l = Ur(t.label) ? await So(t.label.replace(Jr.lineBreakRegex, `
`), a) : te(t.label, a), c = t.isNode ? "nodeLabel" : "edgeLabel", h = s.append("span");
  h.html(l), oo(h, t.labelStyle), h.attr("class", `${c} ${i}`), oo(s, t.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", r + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && s.attr("class", "labelBkg");
  let u = s.node().getBoundingClientRect();
  return u.width === r && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", r + "px"), u = s.node().getBoundingClientRect()), o.node();
}
d(pd, "addHtmlSpan");
function Na(e, t, r) {
  return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
}
d(Na, "createTspan");
function dd(e, t, r) {
  const i = e.append("text"), n = Na(i, 1, t);
  za(n, r);
  const a = n.node().getComputedTextLength();
  return i.remove(), a;
}
d(dd, "computeWidthOfText");
function uv(e, t, r) {
  var o;
  const i = e.append("text"), n = Na(i, 1, t);
  za(n, [{ content: r, type: "normal" }]);
  const a = (o = n.node()) == null ? void 0 : o.getBoundingClientRect();
  return a && i.remove(), a;
}
d(uv, "computeDimensionOfText");
function gd(e, t, r, i = !1) {
  const a = t.append("g"), o = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), s = a.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r) {
    const h = /* @__PURE__ */ d((f) => dd(a, 1.1, f) <= e, "checkWidth"), u = h(c) ? [c] : fd(c, h);
    for (const f of u) {
      const p = Na(s, l, 1.1);
      za(p, f), l++;
    }
  }
  if (i) {
    const c = s.node().getBBox(), h = 2;
    return o.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), a.node();
  } else
    return s.node();
}
d(gd, "createFormattedText");
function za(e, t) {
  e.text(""), t.forEach((r, i) => {
    const n = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? n.text(r.content) : n.text(" " + r.content);
  });
}
d(za, "updateTextContentAndStyles");
async function md(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (n, a, o) => (r.push(
    (async () => {
      const s = `${a}:${o}`;
      return await hv(s) ? await rn(s, void 0, { class: "label-icon" }) : `<i class='${te(n, t).replace(":", " ")}'></i>`;
    })()
  ), n));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
d(md, "replaceIconSubstring");
var Ge = /* @__PURE__ */ d(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: n = "",
  useHtmlLabels: a = !0,
  isNode: o = !0,
  width: s = 200,
  addSvgBackground: l = !1
} = {}, c) => {
  if (B.debug(
    "XYZ createText",
    t,
    r,
    i,
    n,
    a,
    o,
    "addSvgBackground: ",
    l
  ), a) {
    const h = cd(t, c), u = await md(Cr(h), c), f = t.replace(/\\\\/g, "\\"), p = {
      isNode: o,
      label: Ur(t) ? f : u,
      labelStyle: r.replace("fill:", "color:")
    };
    return await pd(e, p, s, n, l, c);
  } else {
    const h = t.replace(/<br\s*\/?>/g, "<br/>"), u = ld(h.replace("<br>", "<br/>"), c), f = gd(
      s,
      e,
      u,
      t ? l : !1
    );
    if (o) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      at(f).attr("style", p);
    } else {
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      at(f).select("rect").attr("style", p.replace(/background:/g, "fill:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      at(f).select("text").attr("style", g);
    }
    return f;
  }
}, "createText");
function gs(e, t, r) {
  if (e && e.length) {
    const [i, n] = t, a = Math.PI / 180 * r, o = Math.cos(a), s = Math.sin(a);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * o - (h - n) * s + i, l[1] = (c - i) * s + (h - n) * o + n;
    }
  }
}
function fv(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function pv(e, t, r, i = 1) {
  const n = r, a = Math.max(t, 0.1), o = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, s = [0, 0];
  if (n) for (const c of o) gs(c, s, n);
  const l = (function(c, h, u) {
    const f = [];
    for (const b of c) {
      const _ = [...b];
      fv(_[0], _[_.length - 1]) || _.push([_[0][0], _[0][1]]), _.length > 2 && f.push(_);
    }
    const p = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of f) for (let _ = 0; _ < b.length - 1; _++) {
      const v = b[_], w = b[_ + 1];
      if (v[1] !== w[1]) {
        const C = Math.min(v[1], w[1]);
        g.push({ ymin: C, ymax: Math.max(v[1], w[1]), x: C === v[1] ? v[0] : w[0], islope: (w[0] - v[0]) / (w[1] - v[1]) });
      }
    }
    if (g.sort(((b, _) => b.ymin < _.ymin ? -1 : b.ymin > _.ymin ? 1 : b.x < _.x ? -1 : b.x > _.x ? 1 : b.ymax === _.ymax ? 0 : (b.ymax - _.ymax) / Math.abs(b.ymax - _.ymax))), !g.length) return p;
    let m = [], y = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let _ = 0; _ < g.length && !(g[_].ymin > y); _++) b = _;
        g.splice(0, b + 1).forEach(((_) => {
          m.push({ s: y, edge: _ });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, _) => b.edge.x === _.edge.x ? 0 : (b.edge.x - _.edge.x) / Math.abs(b.edge.x - _.edge.x))), (u !== 1 || x % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const _ = b + 1;
        if (_ >= m.length) break;
        const v = m[b].edge, w = m[_].edge;
        p.push([[Math.round(v.x), y], [Math.round(w.x), y]]);
      }
      y += u, m.forEach(((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      })), x++;
    }
    return p;
  })(o, a, i);
  if (n) {
    for (const c of o) gs(c, s, -n);
    (function(c, h, u) {
      const f = [];
      c.forEach(((p) => f.push(...p))), gs(f, h, u);
    })(l, s, -n);
  }
  return l;
}
function nn(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let n = t.hachureGap;
  n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
  let a = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (a = n), pv(e, n, i, a || 1);
}
class yl {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = nn(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const n of t) i.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], r));
    return i;
  }
}
function qa(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class dv extends yl {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const n = nn(t, Object.assign({}, r, { hachureGap: i })), a = Math.PI / 180 * r.hachureAngle, o = [], s = 0.5 * i * Math.cos(a), l = 0.5 * i * Math.sin(a);
    for (const [c, h] of n) qa([c, h]) && o.push([[c[0] - s, c[1] + l], [...h]], [[c[0] + s, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(o, r) };
  }
}
class gv extends yl {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), n = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), a = this._fillPolygons(t, n);
    return i.ops = i.ops.concat(a.ops), i;
  }
}
class mv {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = nn(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let n = r.hachureGap;
    n < 0 && (n = 4 * r.strokeWidth), n = Math.max(n, 0.1);
    let a = r.fillWeight;
    a < 0 && (a = r.strokeWidth / 2);
    const o = n / 4;
    for (const s of t) {
      const l = qa(s), c = l / n, h = Math.ceil(c) - 1, u = l - h * n, f = (s[0][0] + s[1][0]) / 2 - n / 4, p = Math.min(s[0][1], s[1][1]);
      for (let g = 0; g < h; g++) {
        const m = p + u + g * n, y = f - o + 2 * Math.random() * o, x = m - o + 2 * Math.random() * o, b = this.helper.ellipse(y, x, a, a, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class yv {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = nn(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, n = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, a = [];
    return t.forEach(((o) => {
      const s = qa(o), l = Math.floor(s / (i + n)), c = (s + n - l * (i + n)) / 2;
      let h = o[0], u = o[1];
      h[0] > u[0] && (h = o[1], u = o[0]);
      const f = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let p = 0; p < l; p++) {
        const g = p * (i + n), m = g + i, y = [h[0] + g * Math.cos(f) + c * Math.cos(f), h[1] + g * Math.sin(f) + c * Math.sin(f)], x = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        a.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    })), a;
  }
}
class xv {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, n = r.zigzagOffset < 0 ? i : r.zigzagOffset, a = nn(t, r = Object.assign({}, r, { hachureGap: i + n }));
    return { type: "fillSketch", ops: this.zigzagLines(a, n, r) };
  }
  zigzagLines(t, r, i) {
    const n = [];
    return t.forEach(((a) => {
      const o = qa(a), s = Math.round(o / (2 * r));
      let l = a[0], c = a[1];
      l[0] > c[0] && (l = a[1], c = a[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < s; u++) {
        const f = 2 * u * r, p = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + p * Math.cos(h), l[1] + p * Math.sin(h)], x = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        n.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    })), n;
  }
}
const Yt = {};
class bv {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const Cv = 0, ms = 1, th = 2, xn = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function ys(e, t) {
  return e.type === t;
}
function xl(e) {
  const t = [], r = (function(o) {
    const s = new Array();
    for (; o !== ""; ) if (o.match(/^([ \t\r\n,]+)/)) o = o.substr(RegExp.$1.length);
    else if (o.match(/^([aAcChHlLmMqQsStTvVzZ])/)) s[s.length] = { type: Cv, text: RegExp.$1 }, o = o.substr(RegExp.$1.length);
    else {
      if (!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      s[s.length] = { type: ms, text: `${parseFloat(RegExp.$1)}` }, o = o.substr(RegExp.$1.length);
    }
    return s[s.length] = { type: th, text: "" }, s;
  })(e);
  let i = "BOD", n = 0, a = r[n];
  for (; !ys(a, th); ) {
    let o = 0;
    const s = [];
    if (i === "BOD") {
      if (a.text !== "M" && a.text !== "m") return xl("M0,0" + e);
      n++, o = xn[a.text], i = a.text;
    } else ys(a, ms) ? o = xn[i] : (n++, o = xn[a.text], i = a.text);
    if (!(n + o < r.length)) throw new Error("Path data ended short");
    for (let l = n; l < n + o; l++) {
      const c = r[l];
      if (!ys(c, ms)) throw new Error("Param not a number: " + i + "," + c.text);
      s[s.length] = +c.text;
    }
    if (typeof xn[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: s };
      t.push(l), n += o, a = r[n], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function yd(e) {
  let t = 0, r = 0, i = 0, n = 0;
  const a = [];
  for (const { key: o, data: s } of e) switch (o) {
    case "M":
      a.push({ key: "M", data: [...s] }), [t, r] = s, [i, n] = s;
      break;
    case "m":
      t += s[0], r += s[1], a.push({ key: "M", data: [t, r] }), i = t, n = r;
      break;
    case "L":
      a.push({ key: "L", data: [...s] }), [t, r] = s;
      break;
    case "l":
      t += s[0], r += s[1], a.push({ key: "L", data: [t, r] });
      break;
    case "C":
      a.push({ key: "C", data: [...s] }), t = s[4], r = s[5];
      break;
    case "c": {
      const l = s.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      a.push({ key: "Q", data: [...s] }), t = s[2], r = s[3];
      break;
    case "q": {
      const l = s.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      a.push({ key: "A", data: [...s] }), t = s[5], r = s[6];
      break;
    case "a":
      t += s[5], r += s[6], a.push({ key: "A", data: [s[0], s[1], s[2], s[3], s[4], t, r] });
      break;
    case "H":
      a.push({ key: "H", data: [...s] }), t = s[0];
      break;
    case "h":
      t += s[0], a.push({ key: "H", data: [t] });
      break;
    case "V":
      a.push({ key: "V", data: [...s] }), r = s[0];
      break;
    case "v":
      r += s[0], a.push({ key: "V", data: [r] });
      break;
    case "S":
      a.push({ key: "S", data: [...s] }), t = s[2], r = s[3];
      break;
    case "s": {
      const l = s.map(((c, h) => h % 2 ? c + r : c + t));
      a.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      a.push({ key: "T", data: [...s] }), t = s[0], r = s[1];
      break;
    case "t":
      t += s[0], r += s[1], a.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      a.push({ key: "Z", data: [] }), t = i, r = n;
  }
  return a;
}
function xd(e) {
  const t = [];
  let r = "", i = 0, n = 0, a = 0, o = 0, s = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, n] = h, [a, o] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], n = h[5], s = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, n] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "V":
        n = h[0], t.push({ key: "L", data: [i, n] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - s), f = n + (n - l)) : (u = i, f = n), t.push({ key: "C", data: [u, f, ...h] }), s = h[0], l = h[1], i = h[2], n = h[3];
        break;
      }
      case "T": {
        const [u, f] = h;
        let p = 0, g = 0;
        r === "Q" || r === "T" ? (p = i + (i - s), g = n + (n - l)) : (p = i, g = n);
        const m = i + 2 * (p - i) / 3, y = n + 2 * (g - n) / 3, x = u + 2 * (p - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, x, b, u, f] }), s = p, l = g, i = u, n = f;
        break;
      }
      case "Q": {
        const [u, f, p, g] = h, m = i + 2 * (u - i) / 3, y = n + 2 * (f - n) / 3, x = p + 2 * (u - p) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, x, b, p, g] }), s = u, l = f, i = p, n = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), f = Math.abs(h[1]), p = h[2], g = h[3], m = h[4], y = h[5], x = h[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, n, y, x, y, x] }), i = y, n = x) : (i !== y || n !== x) && (bd(i, n, y, x, u, f, p, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, n = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = a, n = o;
    }
    r = c;
  }
  return t;
}
function xi(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function bd(e, t, r, i, n, a, o, s, l, c) {
  const h = (u = o, Math.PI * u / 180);
  var u;
  let f = [], p = 0, g = 0, m = 0, y = 0;
  if (c) [p, g, m, y] = c;
  else {
    [e, t] = xi(e, t, -h), [r, i] = xi(r, i, -h);
    const M = (e - r) / 2, E = (t - i) / 2;
    let F = M * M / (n * n) + E * E / (a * a);
    F > 1 && (F = Math.sqrt(F), n *= F, a *= F);
    const R = n * n, z = a * a, P = R * z - R * E * E - z * M * M, ot = R * E * E + z * M * M, bt = (s === l ? -1 : 1) * Math.sqrt(Math.abs(P / ot));
    m = bt * n * E / a + (e + r) / 2, y = bt * -a * M / n + (t + i) / 2, p = Math.asin(parseFloat(((t - y) / a).toFixed(9))), g = Math.asin(parseFloat(((i - y) / a).toFixed(9))), e < m && (p = Math.PI - p), r < m && (g = Math.PI - g), p < 0 && (p = 2 * Math.PI + p), g < 0 && (g = 2 * Math.PI + g), l && p > g && (p -= 2 * Math.PI), !l && g > p && (g -= 2 * Math.PI);
  }
  let x = g - p;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const M = g, E = r, F = i;
    g = l && g > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, f = bd(r = m + n * Math.cos(g), i = y + a * Math.sin(g), E, F, n, a, o, 0, l, [g, M, m, y]);
  }
  x = g - p;
  const b = Math.cos(p), _ = Math.sin(p), v = Math.cos(g), w = Math.sin(g), C = Math.tan(x / 4), S = 4 / 3 * n * C, A = 4 / 3 * a * C, O = [e, t], D = [e + S * _, t - A * b], L = [r + S * w, i - A * v], q = [r, i];
  if (D[0] = 2 * O[0] - D[0], D[1] = 2 * O[1] - D[1], c) return [D, L, q].concat(f);
  {
    f = [D, L, q].concat(f);
    const M = [];
    for (let E = 0; E < f.length; E += 3) {
      const F = xi(f[E][0], f[E][1], h), R = xi(f[E + 1][0], f[E + 1][1], h), z = xi(f[E + 2][0], f[E + 2][1], h);
      M.push([F[0], F[1], R[0], R[1], z[0], z[1]]);
    }
    return M;
  }
}
const _v = { randOffset: function(e, t) {
  return J(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return da(e, t, r);
}, ellipse: function(e, t, r, i, n) {
  const a = _d(r, i, n);
  return lo(e, t, n, a).opset;
}, doubleLineOps: function(e, t, r, i, n) {
  return je(e, t, r, i, n, !0);
} };
function Cd(e, t, r, i, n) {
  return { type: "path", ops: je(e, t, r, i, n) };
}
function Fn(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const n = [];
    for (let a = 0; a < i - 1; a++) n.push(...je(e[a][0], e[a][1], e[a + 1][0], e[a + 1][1], r));
    return t && n.push(...je(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: n };
  }
  return i === 2 ? Cd(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function wv(e, t, r, i, n) {
  return (function(a, o) {
    return Fn(a, !0, o);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], n);
}
function eh(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = bn(r[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : bn(r[0], 1.5 * (1 + 0.22 * t.roughness), nh(t));
    for (let a = 1; a < r.length; a++) {
      const o = r[a];
      if (o.length) {
        const s = bn(o, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : bn(o, 1.5 * (1 + 0.22 * t.roughness), nh(t));
        for (const c of s) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && n.push(c);
      }
    }
    return { type: "path", ops: i.concat(n) };
  }
  return { type: "path", ops: [] };
}
function _d(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), a = 2 * Math.PI / n;
  let o = Math.abs(e / 2), s = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return o += J(o * l, r), s += J(s * l, r), { increment: a, rx: o, ry: s };
}
function lo(e, t, r, i) {
  const [n, a] = ah(i.increment, e, t, i.rx, i.ry, 1, i.increment * da(0.1, da(0.4, 1, r), r), r);
  let o = ga(n, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [s] = ah(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = ga(s, null, r);
    o = o.concat(l);
  }
  return { estimatedPoints: a, opset: { type: "path", ops: o } };
}
function rh(e, t, r, i, n, a, o, s, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += J(0.01 * u, l), f += J(0.01 * f, l);
  let p = n, g = a;
  for (; p < 0; ) p += 2 * Math.PI, g += 2 * Math.PI;
  g - p > 2 * Math.PI && (p = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - p) / 2), x = sh(y, c, h, u, f, p, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = sh(y, c, h, u, f, p, g, 1.5, l);
    x.push(...b);
  }
  return o && (s ? x.push(...je(c, h, c + u * Math.cos(p), h + f * Math.sin(p), l), ...je(c, h, c + u * Math.cos(g), h + f * Math.sin(g), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(p), h + f * Math.sin(p)] })), { type: "path", ops: x };
}
function ih(e, t) {
  const r = xd(yd(xl(e))), i = [];
  let n = [0, 0], a = [0, 0];
  for (const { key: o, data: s } of r) switch (o) {
    case "M":
      a = [s[0], s[1]], n = [s[0], s[1]];
      break;
    case "L":
      i.push(...je(a[0], a[1], s[0], s[1], t)), a = [s[0], s[1]];
      break;
    case "C": {
      const [l, c, h, u, f, p] = s;
      i.push(...kv(l, c, h, u, f, p, a, t)), a = [f, p];
      break;
    }
    case "Z":
      i.push(...je(a[0], a[1], n[0], n[1], t)), a = [n[0], n[1]];
  }
  return { type: "path", ops: i };
}
function xs(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const n = t.maxRandomnessOffset || 0, a = i.length;
    if (a > 2) {
      r.push({ op: "move", data: [i[0][0] + J(n, t), i[0][1] + J(n, t)] });
      for (let o = 1; o < a; o++) r.push({ op: "lineTo", data: [i[o][0] + J(n, t), i[o][1] + J(n, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Lr(e, t) {
  return (function(r, i) {
    let n = r.fillStyle || "hachure";
    if (!Yt[n]) switch (n) {
      case "zigzag":
        Yt[n] || (Yt[n] = new dv(i));
        break;
      case "cross-hatch":
        Yt[n] || (Yt[n] = new gv(i));
        break;
      case "dots":
        Yt[n] || (Yt[n] = new mv(i));
        break;
      case "dashed":
        Yt[n] || (Yt[n] = new yv(i));
        break;
      case "zigzag-line":
        Yt[n] || (Yt[n] = new xv(i));
        break;
      default:
        n = "hachure", Yt[n] || (Yt[n] = new yl(i));
    }
    return Yt[n];
  })(t, _v).fillPolygons(e, t);
}
function nh(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function wd(e) {
  return e.randomizer || (e.randomizer = new bv(e.seed || 0)), e.randomizer.next();
}
function da(e, t, r, i = 1) {
  return r.roughness * i * (wd(r) * (t - e) + e);
}
function J(e, t, r = 1) {
  return da(-e, e, t, r);
}
function je(e, t, r, i, n, a = !1) {
  const o = a ? n.disableMultiStrokeFill : n.disableMultiStroke, s = co(e, t, r, i, n, !0, !1);
  if (o) return s;
  const l = co(e, t, r, i, n, !0, !0);
  return s.concat(l);
}
function co(e, t, r, i, n, a, o) {
  const s = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(s);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = n.maxRandomnessOffset || 0;
  h * h * 100 > s && (h = l / 10);
  const u = h / 2, f = 0.2 + 0.2 * wd(n);
  let p = n.bowing * n.maxRandomnessOffset * (i - t) / 200, g = n.bowing * n.maxRandomnessOffset * (e - r) / 200;
  p = J(p, n, c), g = J(g, n, c);
  const m = [], y = () => J(u, n, c), x = () => J(h, n, c), b = n.preserveVertices;
  return o ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : J(h, n, c)), t + (b ? 0 : J(h, n, c))] }), o ? m.push({ op: "bcurveTo", data: [p + e + (r - e) * f + y(), g + t + (i - t) * f + y(), p + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [p + e + (r - e) * f + x(), g + t + (i - t) * f + x(), p + e + 2 * (r - e) * f + x(), g + t + 2 * (i - t) * f + x(), r + (b ? 0 : x()), i + (b ? 0 : x())] }), m;
}
function bn(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + J(t, r), e[0][1] + J(t, r)]), i.push([e[0][0] + J(t, r), e[0][1] + J(t, r)]);
  for (let n = 1; n < e.length; n++) i.push([e[n][0] + J(t, r), e[n][1] + J(t, r)]), n === e.length - 1 && i.push([e[n][0] + J(t, r), e[n][1] + J(t, r)]);
  return ga(i, null, r);
}
function ga(e, t, r) {
  const i = e.length, n = [];
  if (i > 3) {
    const a = [], o = 1 - r.curveTightness;
    n.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let s = 1; s + 2 < i; s++) {
      const l = e[s];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (o * e[s + 1][0] - o * e[s - 1][0]) / 6, l[1] + (o * e[s + 1][1] - o * e[s - 1][1]) / 6], a[2] = [e[s + 1][0] + (o * e[s][0] - o * e[s + 2][0]) / 6, e[s + 1][1] + (o * e[s][1] - o * e[s + 2][1]) / 6], a[3] = [e[s + 1][0], e[s + 1][1]], n.push({ op: "bcurveTo", data: [a[1][0], a[1][1], a[2][0], a[2][1], a[3][0], a[3][1]] });
    }
  } else i === 3 ? (n.push({ op: "move", data: [e[1][0], e[1][1]] }), n.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && n.push(...co(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return n;
}
function ah(e, t, r, i, n, a, o, s) {
  const l = [], c = [];
  if (s.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + n * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + n * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + n * Math.sin(0)]), c.push([t + i * Math.cos(e), r + n * Math.sin(e)]);
  } else {
    const h = J(0.5, s) - Math.PI / 2;
    c.push([J(a, s) + t + 0.9 * i * Math.cos(h - e), J(a, s) + r + 0.9 * n * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let f = h; f < u; f += e) {
      const p = [J(a, s) + t + i * Math.cos(f), J(a, s) + r + n * Math.sin(f)];
      l.push(p), c.push(p);
    }
    c.push([J(a, s) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * o), J(a, s) + r + n * Math.sin(h + 2 * Math.PI + 0.5 * o)]), c.push([J(a, s) + t + 0.98 * i * Math.cos(h + o), J(a, s) + r + 0.98 * n * Math.sin(h + o)]), c.push([J(a, s) + t + 0.9 * i * Math.cos(h + 0.5 * o), J(a, s) + r + 0.9 * n * Math.sin(h + 0.5 * o)]);
  }
  return [c, l];
}
function sh(e, t, r, i, n, a, o, s, l) {
  const c = a + J(0.1, l), h = [];
  h.push([J(s, l) + t + 0.9 * i * Math.cos(c - e), J(s, l) + r + 0.9 * n * Math.sin(c - e)]);
  for (let u = c; u <= o; u += e) h.push([J(s, l) + t + i * Math.cos(u), J(s, l) + r + n * Math.sin(u)]);
  return h.push([t + i * Math.cos(o), r + n * Math.sin(o)]), h.push([t + i * Math.cos(o), r + n * Math.sin(o)]), ga(h, null, l);
}
function kv(e, t, r, i, n, a, o, s) {
  const l = [], c = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
  for (let p = 0; p < u; p++) p === 0 ? l.push({ op: "move", data: [o[0], o[1]] }) : l.push({ op: "move", data: [o[0] + (f ? 0 : J(c[0], s)), o[1] + (f ? 0 : J(c[0], s))] }), h = f ? [n, a] : [n + J(c[p], s), a + J(c[p], s)], l.push({ op: "bcurveTo", data: [e + J(c[p], s), t + J(c[p], s), r + J(c[p], s), i + J(c[p], s), h[0], h[1]] });
  return l;
}
function bi(e) {
  return [...e];
}
function oh(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(bi(e[0]), bi(e[1]), bi(e[2]), bi(e[2]));
  else {
    const n = [];
    n.push(e[0], e[0]);
    for (let s = 1; s < e.length; s++) n.push(e[s]), s === e.length - 1 && n.push(e[s]);
    const a = [], o = 1 - t;
    i.push(bi(n[0]));
    for (let s = 1; s + 2 < n.length; s++) {
      const l = n[s];
      a[0] = [l[0], l[1]], a[1] = [l[0] + (o * n[s + 1][0] - o * n[s - 1][0]) / 6, l[1] + (o * n[s + 1][1] - o * n[s - 1][1]) / 6], a[2] = [n[s + 1][0] + (o * n[s][0] - o * n[s + 2][0]) / 6, n[s + 1][1] + (o * n[s][1] - o * n[s + 2][1]) / 6], a[3] = [n[s + 1][0], n[s + 1][1]], i.push(a[1], a[2], a[3]);
    }
  }
  return i;
}
function On(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function vv(e, t, r) {
  const i = On(t, r);
  if (i === 0) return On(e, t);
  let n = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return n = Math.max(0, Math.min(1, n)), On(e, er(t, r, n));
}
function er(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function ho(e, t, r, i) {
  const n = i || [];
  if ((function(s, l) {
    const c = s[l + 0], h = s[l + 1], u = s[l + 2], f = s[l + 3];
    let p = 3 * h[0] - 2 * c[0] - f[0];
    p *= p;
    let g = 3 * h[1] - 2 * c[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, p < m && (p = m), g < y && (g = y), p + g;
  })(e, t) < r) {
    const s = e[t + 0];
    n.length ? (a = n[n.length - 1], o = s, Math.sqrt(On(a, o)) > 1 && n.push(s)) : n.push(s), n.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], f = er(l, c, 0.5), p = er(c, h, 0.5), g = er(h, u, 0.5), m = er(f, p, 0.5), y = er(p, g, 0.5), x = er(m, y, 0.5);
    ho([l, f, m, x], 0, r, n), ho([x, y, g, u], 0, r, n);
  }
  var a, o;
  return n;
}
function Sv(e, t) {
  return ma(e, 0, e.length, t);
}
function ma(e, t, r, i, n) {
  const a = n || [], o = e[t], s = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = vv(e[h], o, s);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (ma(e, t, c + 1, i, a), ma(e, c, r, i, a)) : (a.length || a.push(o), a.push(s)), a;
}
function bs(e, t = 0.15, r) {
  const i = [], n = (e.length - 1) / 3;
  for (let a = 0; a < n; a++)
    ho(e, 3 * a, t, i);
  return r && r > 0 ? ma(i, 0, i.length, r) : i;
}
const Vt = "none";
class ya {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, n, a) {
    const o = this._o(a);
    return this._d("line", [Cd(t, r, i, n, o)], o);
  }
  rectangle(t, r, i, n, a) {
    const o = this._o(a), s = [], l = wv(t, r, i, n, o);
    if (o.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + n], [t, r + n]];
      o.fillStyle === "solid" ? s.push(xs([c], o)) : s.push(Lr([c], o));
    }
    return o.stroke !== Vt && s.push(l), this._d("rectangle", s, o);
  }
  ellipse(t, r, i, n, a) {
    const o = this._o(a), s = [], l = _d(i, n, o), c = lo(t, r, o, l);
    if (o.fill) if (o.fillStyle === "solid") {
      const h = lo(t, r, o, l).opset;
      h.type = "fillPath", s.push(h);
    } else s.push(Lr([c.estimatedPoints], o));
    return o.stroke !== Vt && s.push(c.opset), this._d("ellipse", s, o);
  }
  circle(t, r, i, n) {
    const a = this.ellipse(t, r, i, i, n);
    return a.shape = "circle", a;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [Fn(t, !1, i)], i);
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this._o(l), h = [], u = rh(t, r, i, n, a, o, s, !0, c);
    if (s && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const p = rh(t, r, i, n, a, o, !0, !1, f);
      p.type = "fillPath", h.push(p);
    } else h.push((function(f, p, g, m, y, x, b) {
      const _ = f, v = p;
      let w = Math.abs(g / 2), C = Math.abs(m / 2);
      w += J(0.01 * w, b), C += J(0.01 * C, b);
      let S = y, A = x;
      for (; S < 0; ) S += 2 * Math.PI, A += 2 * Math.PI;
      A - S > 2 * Math.PI && (S = 0, A = 2 * Math.PI);
      const O = (A - S) / b.curveStepCount, D = [];
      for (let L = S; L <= A; L += O) D.push([_ + w * Math.cos(L), v + C * Math.sin(L)]);
      return D.push([_ + w * Math.cos(A), v + C * Math.sin(A)]), D.push([_, v]), Lr([D], b);
    })(t, r, i, n, a, o, c));
    return c.stroke !== Vt && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), n = [], a = eh(t, i);
    if (i.fill && i.fill !== Vt) if (i.fillStyle === "solid") {
      const o = eh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(o.ops) });
    } else {
      const o = [], s = t;
      if (s.length) {
        const l = typeof s[0][0] == "number" ? [s] : s;
        for (const c of l) c.length < 3 ? o.push(...c) : c.length === 3 ? o.push(...bs(oh([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : o.push(...bs(oh(c), 10, (1 + i.roughness) / 2));
      }
      o.length && n.push(Lr([o], i));
    }
    return i.stroke !== Vt && n.push(a), this._d("curve", n, i);
  }
  polygon(t, r) {
    const i = this._o(r), n = [], a = Fn(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? n.push(xs([t], i)) : n.push(Lr([t], i))), i.stroke !== Vt && n.push(a), this._d("polygon", n, i);
  }
  path(t, r) {
    const i = this._o(r), n = [];
    if (!t) return this._d("path", n, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const a = i.fill && i.fill !== "transparent" && i.fill !== Vt, o = i.stroke !== Vt, s = !!(i.simplification && i.simplification < 1), l = (function(h, u, f) {
      const p = xd(yd(xl(h))), g = [];
      let m = [], y = [0, 0], x = [];
      const b = () => {
        x.length >= 4 && m.push(...bs(x, u)), x = [];
      }, _ = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: w, data: C } of p) switch (w) {
        case "M":
          _(), y = [C[0], C[1]], m.push(y);
          break;
        case "L":
          b(), m.push([C[0], C[1]]);
          break;
        case "C":
          if (!x.length) {
            const S = m.length ? m[m.length - 1] : y;
            x.push([S[0], S[1]]);
          }
          x.push([C[0], C[1]]), x.push([C[2], C[3]]), x.push([C[4], C[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (_(), !f) return g;
      const v = [];
      for (const w of g) {
        const C = Sv(w, f);
        C.length && v.push(C);
      }
      return v;
    })(t, 1, s ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = ih(t, i);
    if (a) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = ih(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      n.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else n.push(xs(l, i));
    else n.push(Lr(l, i));
    return o && (s ? l.forEach(((h) => {
      n.push(Fn(h, !1, i));
    })) : n.push(c)), this._d("path", n, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const n of t.ops) {
      const a = typeof r == "number" && r >= 0 ? n.data.map(((o) => +o.toFixed(r))) : n.data;
      switch (n.op) {
        case "move":
          i += `M${a[0]} ${a[1]} `;
          break;
        case "bcurveTo":
          i += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
          break;
        case "lineTo":
          i += `L${a[0]} ${a[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, n = [];
    for (const a of r) {
      let o = null;
      switch (a.type) {
        case "path":
          o = { d: this.opsToPath(a), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: Vt };
          break;
        case "fillPath":
          o = { d: this.opsToPath(a), stroke: Vt, strokeWidth: 0, fill: i.fill || Vt };
          break;
        case "fillSketch":
          o = this.fillSketch(a, i);
      }
      o && n.push(o);
    }
    return n;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || Vt, strokeWidth: i, fill: Vt };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class Tv {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new ya(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.ctx, a = t.options.fixedDecimalPlaceDigits;
    for (const o of r) switch (o.type) {
      case "path":
        n.save(), n.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, n.lineWidth = i.strokeWidth, i.strokeLineDash && n.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (n.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(n, o, a), n.restore();
        break;
      case "fillPath": {
        n.save(), n.fillStyle = i.fill || "";
        const s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(n, o, a, s), n.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(n, o, i);
    }
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = n, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, n = "nonzero") {
    t.beginPath();
    for (const a of r.ops) {
      const o = typeof i == "number" && i >= 0 ? a.data.map(((s) => +s.toFixed(i))) : a.data;
      switch (a.op) {
        case "move":
          t.moveTo(o[0], o[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "lineTo":
          t.lineTo(o[0], o[1]);
      }
    }
    r.type === "fillPath" ? t.fill(n) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, n, a) {
    const o = this.gen.line(t, r, i, n, a);
    return this.draw(o), o;
  }
  rectangle(t, r, i, n, a) {
    const o = this.gen.rectangle(t, r, i, n, a);
    return this.draw(o), o;
  }
  ellipse(t, r, i, n, a) {
    const o = this.gen.ellipse(t, r, i, n, a);
    return this.draw(o), o;
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a), a;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, o, s, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const Cn = "http://www.w3.org/2000/svg";
class Bv {
  constructor(t, r) {
    this.svg = t, this.gen = new ya(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, a = n.createElementNS(Cn, "g"), o = t.options.fixedDecimalPlaceDigits;
    for (const s of r) {
      let l = null;
      switch (s.type) {
        case "path":
          l = n.createElementNS(Cn, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = n.createElementNS(Cn, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(n, s, i);
      }
      l && a.appendChild(l);
    }
    return a;
  }
  fillSketch(t, r, i) {
    let n = i.fillWeight;
    n < 0 && (n = i.strokeWidth / 2);
    const a = t.createElementNS(Cn, "path");
    return a.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), a.setAttribute("stroke", i.fill || ""), a.setAttribute("stroke-width", n + ""), a.setAttribute("fill", "none"), i.fillLineDash && a.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), a;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, n, a) {
    const o = this.gen.line(t, r, i, n, a);
    return this.draw(o);
  }
  rectangle(t, r, i, n, a) {
    const o = this.gen.rectangle(t, r, i, n, a);
    return this.draw(o);
  }
  ellipse(t, r, i, n, a) {
    const o = this.gen.ellipse(t, r, i, n, a);
    return this.draw(o);
  }
  circle(t, r, i, n) {
    const a = this.gen.circle(t, r, i, n);
    return this.draw(a);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, n, a, o, s = !1, l) {
    const c = this.gen.arc(t, r, i, n, a, o, s, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var H = { canvas: (e, t) => new Tv(e, t), svg: (e, t) => new Bv(e, t), generator: (e) => new ya(e), newSeed: () => ya.newSeed() }, Q = /* @__PURE__ */ d(async (e, t, r) => {
  var u, f;
  let i;
  const n = t.useHtmlLabels || St((u = lt()) == null ? void 0 : u.htmlLabels);
  r ? i = r : i = "node default";
  const a = e.insert("g").attr("class", i).attr("id", t.domId || t.id), o = a.insert("g").attr("class", "label").attr("style", Dt(t.labelStyle));
  let s;
  t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
  const l = await Ge(o, te(Cr(s), lt()), {
    useHtmlLabels: n,
    width: t.width || ((f = lt().flowchart) == null ? void 0 : f.wrappingWidth),
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (n) {
    const p = l.children[0], g = at(l), m = p.getElementsByTagName("img");
    if (m) {
      const y = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...m].map(
          (x) => new Promise((b) => {
            function _() {
              if (x.style.display = "flex", x.style.flexDirection = "column", y) {
                const v = lt().fontSize ? lt().fontSize : window.getComputedStyle(document.body).fontSize, w = 5, [C = Rh.fontSize] = Da(v), S = C * w + "px";
                x.style.minWidth = S, x.style.maxWidth = S;
              } else
                x.style.width = "100%";
              b(x);
            }
            d(_, "setupImage"), setTimeout(() => {
              x.complete && _();
            }), x.addEventListener("error", _), x.addEventListener("load", _);
          })
        )
      );
    }
    c = p.getBoundingClientRect(), g.attr("width", c.width), g.attr("height", c.height);
  }
  return n ? o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : o.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: a, bbox: c, halfPadding: h, label: o };
}, "labelHelper"), Cs = /* @__PURE__ */ d(async (e, t, r) => {
  var l, c, h, u, f, p;
  const i = r.useHtmlLabels || St((c = (l = lt()) == null ? void 0 : l.flowchart) == null ? void 0 : c.htmlLabels), n = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), a = await Ge(n, te(Cr(t), lt()), {
    useHtmlLabels: i,
    width: r.width || ((u = (h = lt()) == null ? void 0 : h.flowchart) == null ? void 0 : u.wrappingWidth),
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let o = a.getBBox();
  const s = r.padding / 2;
  if (St((p = (f = lt()) == null ? void 0 : f.flowchart) == null ? void 0 : p.htmlLabels)) {
    const g = a.children[0], m = at(a);
    o = g.getBoundingClientRect(), m.attr("width", o.width), m.attr("height", o.height);
  }
  return i ? n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : n.attr("transform", "translate(0, " + -o.height / 2 + ")"), r.centerLabel && n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), n.insert("rect", ":first-child"), { shapeSvg: e, bbox: o, halfPadding: s, label: n };
}, "insertLabel"), U = /* @__PURE__ */ d((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), K = /* @__PURE__ */ d((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function it(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
d(it, "createPathFromPoints");
function Ye(e, t, r, i, n, a) {
  const o = [], l = r - e, c = i - t, h = l / a, u = 2 * Math.PI / h, f = t + c / 2;
  for (let p = 0; p <= 50; p++) {
    const g = p / 50, m = e + g * l, y = f + n * Math.sin(u * (m - e));
    o.push({ x: m, y });
  }
  return o;
}
d(Ye, "generateFullSineWavePoints");
function Yi(e, t, r, i, n, a) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(Yi, "generateCirclePoints");
var Av = /* @__PURE__ */ d((e, t) => {
  var r = e.x, i = e.y, n = t.x - r, a = t.y - i, o = e.width / 2, s = e.height / 2, l, c;
  return Math.abs(a) * o > Math.abs(n) * s ? (a < 0 && (s = -s), l = a === 0 ? 0 : s * n / a, c = s) : (n < 0 && (o = -o), l = o, c = n === 0 ? 0 : o * a / n), { x: r + l, y: i + c };
}, "intersectRect"), ii = Av;
function kd(e, t) {
  t && e.attr("style", t);
}
d(kd, "applyStyle");
async function vd(e) {
  const t = at(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div"), i = lt();
  let n = e.label;
  e.label && Ur(e.label) && (n = await So(e.label.replace(Jr.lineBreakRegex, `
`), i));
  const o = '<span class="' + (e.isNode ? "nodeLabel" : "edgeLabel") + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
  ">" + n + "</span>";
  return r.html(te(o, i)), kd(r, e.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
d(vd, "addHtmlLabel");
var Lv = /* @__PURE__ */ d(async (e, t, r, i) => {
  let n = e || "";
  if (typeof n == "object" && (n = n[0]), St(lt().flowchart.htmlLabels)) {
    n = n.replace(/\\n|\n/g, "<br />"), B.info("vertexText" + n);
    const a = {
      isNode: i,
      label: Cr(n).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await vd(a);
  } else {
    const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a.setAttribute("style", t.replace("color:", "fill:"));
    let o = [];
    typeof n == "string" ? o = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? o = n : o = [];
    for (const s of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = s.trim(), a.appendChild(l);
    }
    return a;
  }
}, "createLabel"), or = Lv, Xe = /* @__PURE__ */ d((e, t, r, i, n) => [
  "M",
  e + n,
  t,
  // Move to the first point
  "H",
  e + r - n,
  // Draw horizontal line to the beginning of the right corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r,
  t + n,
  // Draw arc to the right top corner
  "V",
  t + i - n,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + r - n,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + n,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e,
  t + i - n,
  // Draw arc to the left bottom corner
  "V",
  t + n,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  n,
  n,
  0,
  0,
  1,
  e + n,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), Sd = /* @__PURE__ */ d(async (e, t) => {
  B.info("Creating subgraph rect for ", t.id, t);
  const r = lt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = Y(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = St(r.flowchart.htmlLabels), p = u.insert("g").attr("class", "cluster-label "), g = await Ge(p, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0
  });
  let m = g.getBBox();
  if (St(r.flowchart.htmlLabels)) {
    const S = g.children[0], A = at(g);
    m = S.getBoundingClientRect(), A.attr("width", m.width), A.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, _ = t.y - x / 2;
  B.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = H.svg(u), A = j(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: o,
      fillWeight: 3,
      seed: n
    }), O = S.path(Xe(b, _, y, x, 0), A);
    v = u.insert(() => (B.debug("Rough node insert CXC", O), O), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", _).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: w } = Zo(r);
  if (p.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + w})`
  ), s) {
    const S = p.select("span");
    S && S.attr("style", s);
  }
  const C = v.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return ii(t, S);
  }, { cluster: u, labelBBox: m };
}, "rect"), Mv = /* @__PURE__ */ d((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), n = 0 * t.padding, a = n / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
  const o = i.node().getBBox();
  return t.width = o.width, t.height = o.height, t.intersect = function(s) {
    return ii(t, s);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), Ev = /* @__PURE__ */ d(async (e, t) => {
  const r = lt(), { themeVariables: i, handDrawnSeed: n } = r, { altBackground: a, compositeBackground: o, compositeTitleBackground: s, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const p = u.node().appendChild(await or(t.label, t.labelStyle, void 0, !0));
  let g = p.getBBox();
  if (St(r.flowchart.htmlLabels)) {
    const O = p.children[0], D = at(p);
    g = O.getBoundingClientRect(), D.attr("width", g.width), D.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, _ = t.height + m - g.height - 6, v = t.x - x / 2, w = t.y - b / 2;
  t.width = x;
  const C = t.y - t.height / 2 - y + g.height + 2;
  let S;
  if (t.look === "handDrawn") {
    const O = t.cssClasses.includes("statediagram-cluster-alt"), D = H.svg(c), L = t.rx || t.ry ? D.path(Xe(v, w, x, b, 10), {
      roughness: 0.7,
      fill: s,
      fillStyle: "solid",
      stroke: l,
      seed: n
    }) : D.rectangle(v, w, x, b, { seed: n });
    S = c.insert(() => L, ":first-child");
    const q = D.rectangle(v, C, x, _, {
      fill: O ? a : o,
      fillStyle: O ? "hachure" : "solid",
      stroke: l,
      seed: n
    });
    S = c.insert(() => L, ":first-child"), f = c.insert(() => q);
  } else
    S = h.insert("rect", ":first-child"), S.attr("class", "outer").attr("x", v).attr("y", w).attr("width", x).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", v).attr("y", C).attr("width", x).attr("height", _);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${w + 1 - (St(r.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const A = S.node().getBBox();
  return t.height = A.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(O) {
    return ii(t, O);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), $v = /* @__PURE__ */ d(async (e, t) => {
  B.info("Creating subgraph rect for ", t.id, t);
  const r = lt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = Y(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), f = St(r.flowchart.htmlLabels), p = u.insert("g").attr("class", "cluster-label "), g = await Ge(p, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (St(r.flowchart.htmlLabels)) {
    const S = g.children[0], A = at(g);
    m = S.getBoundingClientRect(), A.attr("width", m.width), A.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, _ = t.y - x / 2;
  B.trace("Data ", t, JSON.stringify(t));
  let v;
  if (t.look === "handDrawn") {
    const S = H.svg(u), A = j(t, {
      roughness: 0.7,
      fill: a,
      // fill: 'red',
      stroke: o,
      fillWeight: 4,
      seed: n
    }), O = S.path(Xe(b, _, y, x, t.rx), A);
    v = u.insert(() => (B.debug("Rough node insert CXC", O), O), ":first-child"), v.select("path:nth-child(2)").attr("style", c.join(";")), v.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    v = u.insert("rect", ":first-child"), v.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", _).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: w } = Zo(r);
  if (p.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + w})`
  ), s) {
    const S = p.select("span");
    S && S.attr("style", s);
  }
  const C = v.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(S) {
    return ii(t, S);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), Fv = /* @__PURE__ */ d((e, t) => {
  const r = lt(), { themeVariables: i, handDrawnSeed: n } = r, { nodeBorder: a } = i, o = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = o.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let p;
  if (t.look === "handDrawn") {
    const y = H.svg(o).rectangle(u, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: a,
      seed: n
    });
    p = o.insert(() => y, ":first-child");
  } else
    p = s.insert("rect", ":first-child"), p.attr("class", "divider").attr("x", u).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  const g = p.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return ii(t, m);
  }, { cluster: o, labelBBox: {} };
}, "divider"), Ov = Sd, Rv = {
  rect: Sd,
  squareRect: Ov,
  roundedWithTitle: Ev,
  noteGroup: Mv,
  divider: Fv,
  kanbanSection: $v
}, Td = /* @__PURE__ */ new Map(), Dv = /* @__PURE__ */ d(async (e, t) => {
  const r = t.shape || "rect", i = await Rv[r](e, t);
  return Td.set(t.id, i), i;
}, "insertCluster"), uL = /* @__PURE__ */ d(() => {
  Td = /* @__PURE__ */ new Map();
}, "clear");
function Bd(e, t) {
  return e.intersect(t);
}
d(Bd, "intersectNode");
var Iv = Bd;
function Ad(e, t, r, i) {
  var n = e.x, a = e.y, o = n - i.x, s = a - i.y, l = Math.sqrt(t * t * s * s + r * r * o * o), c = Math.abs(t * r * o / l);
  i.x < n && (c = -c);
  var h = Math.abs(t * r * s / l);
  return i.y < a && (h = -h), { x: n + c, y: a + h };
}
d(Ad, "intersectEllipse");
var Ld = Ad;
function Md(e, t, r) {
  return Ld(e, t, t, r);
}
d(Md, "intersectCircle");
var Pv = Md;
function Ed(e, t, r, i) {
  {
    const n = t.y - e.y, a = e.x - t.x, o = t.x * e.y - e.x * t.y, s = n * r.x + a * r.y + o, l = n * i.x + a * i.y + o, c = 1e-6;
    if (s !== 0 && l !== 0 && uo(s, l))
      return;
    const h = i.y - r.y, u = r.x - i.x, f = i.x * r.y - r.x * i.y, p = h * e.x + u * e.y + f, g = h * t.x + u * t.y + f;
    if (Math.abs(p) < c && Math.abs(g) < c && uo(p, g))
      return;
    const m = n * u - h * a;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let x = a * f - u * o;
    const b = x < 0 ? (x - y) / m : (x + y) / m;
    x = h * o - n * f;
    const _ = x < 0 ? (x - y) / m : (x + y) / m;
    return { x: b, y: _ };
  }
}
d(Ed, "intersectLine");
function uo(e, t) {
  return e * t > 0;
}
d(uo, "sameSign");
var Nv = Ed;
function $d(e, t, r) {
  let i = e.x, n = e.y, a = [], o = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    o = Math.min(o, h.x), s = Math.min(s, h.y);
  }) : (o = Math.min(o, t.x), s = Math.min(s, t.y));
  let l = i - e.width / 2 - o, c = n - e.height / 2 - s;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], f = t[h < t.length - 1 ? h + 1 : 0], p = Nv(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    p && a.push(p);
  }
  return a.length ? (a.length > 1 && a.sort(function(h, u) {
    let f = h.x - r.x, p = h.y - r.y, g = Math.sqrt(f * f + p * p), m = u.x - r.x, y = u.y - r.y, x = Math.sqrt(m * m + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), a[0]) : e;
}
d($d, "intersectPolygon");
var zv = $d, N = {
  node: Iv,
  circle: Pv,
  ellipse: Ld,
  polygon: zv,
  rect: ii
};
function Fd(e, t) {
  const { labelStyles: r } = Y(t);
  t.labelStyle = r;
  const i = K(t);
  let n = i;
  i || (n = "anchor");
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), o = 1, { cssStyles: s } = t, l = H.svg(a), c = j(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, o * 2, c), u = a.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Dt(s)), U(t, u), t.intersect = function(f) {
    return B.info("Circle intersect", t, o, f), N.circle(t, o, f);
  }, a;
}
d(Fd, "anchor");
function fo(e, t, r, i, n, a, o) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, p = u / n, g = f / a, m = Math.sqrt(p ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * a * Math.sin(h) * (o ? -1 : 1), b = c - y * n * Math.cos(h) * (o ? -1 : 1), _ = Math.atan2((t - b) / a, (e - x) / n);
  let w = Math.atan2((i - b) / a, (r - x) / n) - _;
  o && w < 0 && (w += 2 * Math.PI), !o && w > 0 && (w -= 2 * Math.PI);
  const C = [];
  for (let S = 0; S < 20; S++) {
    const A = S / 19, O = _ + A * w, D = x + n * Math.cos(O), L = b + a * Math.sin(O);
    C.push({ x: D, y: L });
  }
  return C;
}
d(fo, "generateArcPoints");
async function Od(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.width + t.padding + 20, s = a.height + t.padding, l = s / 2, c = l / (2.5 + s / 50), { cssStyles: h } = t, u = [
    { x: o / 2, y: -s / 2 },
    { x: -o / 2, y: -s / 2 },
    ...fo(-o / 2, -s / 2, -o / 2, s / 2, c, l, !1),
    { x: o / 2, y: s / 2 },
    ...fo(o / 2, s / 2, o / 2, -s / 2, c, l, !0)
  ], f = H.svg(n), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = it(u), m = f.path(g, p), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), U(t, y), t.intersect = function(x) {
    return N.polygon(t, u, x);
  }, n;
}
d(Od, "bowTieRect");
function Ve(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
d(Ve, "insertPolygonShape");
async function Rd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.height + t.padding, s = 12, l = a.width + t.padding + s, c = 0, h = l, u = -o, f = 0, p = [
    { x: c + s, y: u },
    { x: h, y: u },
    { x: h, y: f },
    { x: c, y: f },
    { x: c, y: u + s },
    { x: c + s, y: u }
  ];
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = H.svg(n), x = j(t, {}), b = it(p), _ = y.path(b, x);
    g = n.insert(() => _, ":first-child").attr("transform", `translate(${-l / 2}, ${o / 2})`), m && g.attr("style", m);
  } else
    g = Ve(n, l, o, p);
  return i && g.attr("style", i), U(t, g), t.intersect = function(y) {
    return N.polygon(t, p, y);
  }, n;
}
d(Rd, "card");
function Dd(e, t) {
  const { nodeStyles: r } = Y(t);
  t.label = "";
  const i = e.insert("g").attr("class", K(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, a = Math.max(28, t.width ?? 0), o = [
    { x: 0, y: a / 2 },
    { x: a / 2, y: 0 },
    { x: 0, y: -a / 2 },
    { x: -a / 2, y: 0 }
  ], s = H.svg(i), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = it(o), h = s.path(c, l), u = i.insert(() => h, ":first-child");
  return n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return N.polygon(t, o, f);
  }, i;
}
d(Dd, "choice");
async function bl(e, t, r) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i;
  const { shapeSvg: a, bbox: o, halfPadding: s } = await Q(e, t, K(t)), l = (r == null ? void 0 : r.padding) ?? s, c = o.width / 2 + l;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const f = H.svg(a), p = j(t, {}), g = f.circle(0, 0, c * 2, p);
    h = a.insert(() => g, ":first-child"), h.attr("class", "basic label-container").attr("style", Dt(u));
  } else
    h = a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", n).attr("r", c).attr("cx", 0).attr("cy", 0);
  return U(t, h), t.calcIntersect = function(f, p) {
    const g = f.width / 2;
    return N.circle(f, g, p);
  }, t.intersect = function(f) {
    return B.info("Circle intersect", t, c, f), N.circle(t, c, f);
  }, a;
}
d(bl, "circle");
function Id(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, n = { x: i / 2 * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: -(i / 2) * r }, s = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${n.x},${n.y} L ${o.x},${o.y}`;
}
d(Id, "createLine");
function Pd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r, t.label = "";
  const n = e.insert("g").attr("class", K(t)).attr("id", t.domId ?? t.id), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: o } = t, s = H.svg(n), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = s.circle(0, 0, a * 2, l), h = Id(a), u = s.path(h, l), f = n.insert(() => c, ":first-child");
  return f.insert(() => u), o && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), U(t, f), t.intersect = function(p) {
    return B.info("crossedCircle intersect", t, { radius: a, point: p }), N.circle(t, a, p);
  }, n;
}
d(Pd, "crossedCircle");
function Me(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(Me, "generateCirclePoints");
async function Nd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Me(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...Me(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Me(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...Me(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...Me(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...Me(s / 2 + s * 0.1, -c, c, 20, -180, -270),
    ...Me(s / 2 + s * 0.1, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...Me(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2, y: l / 2 + c }
  ], p = H.svg(n), g = j(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = it(u).replace("Z", ""), x = p.path(y, g), b = it(f), _ = p.path(b, { ...g }), v = n.insert("g", ":first-child");
  return v.insert(() => _, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + c - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, v), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, n;
}
d(Nd, "curlyBraceLeft");
function Ee(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: p, y: g });
  }
  return o;
}
d(Ee, "generateCirclePoints");
async function zd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Ee(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...Ee(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ee(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...Ee(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    { x: -s / 2, y: -l / 2 - c },
    { x: s / 2, y: -l / 2 - c },
    ...Ee(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...Ee(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ee(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...Ee(s / 2, l / 2, c, 20, 0, 90),
    { x: s / 2, y: l / 2 + c },
    { x: -s / 2, y: l / 2 + c }
  ], p = H.svg(n), g = j(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = it(u).replace("Z", ""), x = p.path(y, g), b = it(f), _ = p.path(b, { ...g }), v = n.insert("g", ":first-child");
  return v.insert(() => _, ":first-child").attr("stroke-opacity", 0), v.insert(() => x, ":first-child"), v.attr("class", "text"), h && t.look !== "handDrawn" && v.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, v), t.intersect = function(w) {
    return N.polygon(t, f, w);
  }, n;
}
d(zd, "curlyBraceRight");
function At(e, t, r, i = 100, n = 0, a = 180) {
  const o = [], s = n * Math.PI / 180, h = (a * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = s + u * h, p = e + r * Math.cos(f), g = t + r * Math.sin(f);
    o.push({ x: -p, y: -g });
  }
  return o;
}
d(At, "generateCirclePoints");
async function qd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...At(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...At(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...At(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...At(s / 2, l / 2, c, 20, 0, 90)
  ], f = [
    ...At(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...At(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...At(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...At(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], p = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...At(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...At(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...At(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...At(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2 - c - c / 2, y: l / 2 + c },
    ...At(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...At(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...At(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...At(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], g = H.svg(n), m = j(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = it(u).replace("Z", ""), b = g.path(x, m), v = it(f).replace("Z", ""), w = g.path(v, m), C = it(p), S = g.path(C, { ...m }), A = n.insert("g", ":first-child");
  return A.insert(() => S, ":first-child").attr("stroke-opacity", 0), A.insert(() => b, ":first-child"), A.insert(() => w, ":first-child"), A.attr("class", "text"), h && t.look !== "handDrawn" && A.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && A.selectAll("path").attr("style", i), A.attr("transform", `translate(${c - c / 4}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, A), t.intersect = function(O) {
    return N.polygon(t, p, O);
  }, n;
}
d(qd, "curlyBraces");
async function Wd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = 80, s = 20, l = Math.max(o, (a.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, f = H.svg(n), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = l, m = c, y = g - h, x = m / 4, b = [
    { x: y, y: 0 },
    { x, y: 0 },
    { x: 0, y: m / 2 },
    { x, y: m },
    { x: y, y: m },
    ...Yi(-y, -m / 2, h, 50, 270, 90)
  ], _ = it(b), v = f.path(_, p), w = n.insert(() => v, ":first-child");
  return w.attr("class", "basic label-container"), u && t.look !== "handDrawn" && w.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && w.selectChildren("path").attr("style", i), w.attr("transform", `translate(${-l / 2}, ${-c / 2})`), U(t, w), t.intersect = function(C) {
    return N.polygon(t, b, C);
  }, n;
}
d(Wd, "curvedTrapezoid");
var qv = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), Wv = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), Hv = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function Hd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + t.padding, t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(a.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const p = H.svg(n), g = Wv(0, 0, s, h, l, c), m = Hv(0, c, s, h, l, c), y = p.path(g, j(t, {})), x = p.path(m, j(t, { fill: "none" }));
    u = n.insert(() => x, ":first-child"), u = n.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), f && u.attr("style", f);
  } else {
    const p = qv(0, 0, s, h, l, c);
    u = n.insert("path", ":first-child").attr("d", p).attr("class", "basic label-container").attr("style", Dt(f)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), U(t, u), o.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(p) {
    const g = N.rect(t, p), m = g.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, p.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, n;
}
d(Hd, "cylinder");
async function jd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = a.width + t.padding, l = a.height + t.padding, c = l * 0.2, h = -s / 2, u = -l / 2 - c / 2, { cssStyles: f } = t, p = H.svg(n), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u + c },
    { x: -h, y: u + c },
    { x: -h, y: -u },
    { x: h, y: -u },
    { x: h, y: u },
    { x: -h, y: u },
    { x: -h, y: u + c }
  ], y = p.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${h + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, x), t.intersect = function(b) {
    return N.rect(t, b);
  }, n;
}
d(jd, "dividedRectangle");
async function Yd(e, t) {
  var f, p;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o } = await Q(e, t, K(t)), l = a.width / 2 + o + 5, c = a.width / 2 + o;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = H.svg(n), m = j(t, { roughness: 0.2, strokeWidth: 2.5 }), y = j(t, { roughness: 0.2, strokeWidth: 1.5 }), x = g.circle(0, 0, l * 2, m), b = g.circle(0, 0, c * 2, y);
    h = n.insert("g", ":first-child"), h.attr("class", Dt(t.cssClasses)).attr("style", Dt(u)), (f = h.node()) == null || f.appendChild(x), (p = h.node()) == null || p.appendChild(b);
  } else {
    h = n.insert("g", ":first-child");
    const g = h.insert("circle", ":first-child"), m = h.insert("circle");
    h.attr("class", "basic label-container").attr("style", i), g.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return U(t, h), t.intersect = function(g) {
    return B.info("DoubleCircle intersect", t, l, g), N.circle(t, l, g);
  }, n;
}
d(Yd, "doublecircle");
function Ud(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.label = "", t.labelStyle = i;
  const a = e.insert("g").attr("class", K(t)).attr("id", t.domId ?? t.id), o = 7, { cssStyles: s } = t, l = H.svg(a), { nodeBorder: c } = r, h = j(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, o * 2, h), f = a.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), s && s.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), n && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), U(t, f), t.intersect = function(p) {
    return B.info("filledCircle intersect", t, { radius: o, point: p }), N.circle(t, o, p);
  }, a;
}
d(Ud, "filledCircle");
async function Gd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = a.width + (t.padding ?? 0), l = s + a.height, c = s + a.height, h = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, f = H.svg(n), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = it(h), m = f.path(g, p), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = s, t.height = l, U(t, y), o.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`
  ), t.intersect = function(x) {
    return B.info("Triangle intersect", t, h, x), N.polygon(t, h, x);
  }, n;
}
d(Gd, "flippedTriangle");
function Xd(e, t, { dir: r, config: { state: i, themeVariables: n } }) {
  const { nodeStyles: a } = Y(t);
  t.label = "";
  const o = e.insert("g").attr("class", K(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t;
  let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), c = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  r === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), c = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, f = H.svg(o), p = j(t, {
    stroke: n.lineColor,
    fill: n.lineColor
  });
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = f.rectangle(h, u, l, c, p), m = o.insert(() => g, ":first-child");
  s && t.look !== "handDrawn" && m.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), U(t, m);
  const y = (i == null ? void 0 : i.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return N.rect(t, x);
  }, o;
}
d(Xd, "forkJoin");
async function Vd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const n = 80, a = 50, { shapeSvg: o, bbox: s } = await Q(e, t, K(t)), l = Math.max(n, s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, f = H.svg(o), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h, y: -c / 2 },
    ...Yi(-l / 2 + h, 0, h, 50, 90, 270),
    { x: l / 2 - h, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = it(g), y = f.path(m, p), x = o.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), U(t, x), t.intersect = function(b) {
    return B.info("Pill intersect", t, { radius: h, point: b }), N.polygon(t, g, b);
  }, o;
}
d(Vd, "halfRoundedRectangle");
async function Zd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.height + (t.padding ?? 0), s = a.width + (t.padding ?? 0) * 2.5, { cssStyles: l } = t, c = H.svg(n), h = j(t, {});
  t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
  let u = s / 2;
  const f = u / 6;
  u = u + f;
  const p = o / 2, g = p / 2, m = u - g, y = [
    { x: -m, y: -p },
    { x: 0, y: -p },
    { x: m, y: -p },
    { x: u, y: 0 },
    { x: m, y: p },
    { x: 0, y: p },
    { x: -m, y: p },
    { x: -u, y: 0 }
  ], x = it(y), b = c.path(x, h), _ = n.insert(() => b, ":first-child");
  return _.attr("class", "basic label-container"), l && t.look !== "handDrawn" && _.selectChildren("path").attr("style", l), i && t.look !== "handDrawn" && _.selectChildren("path").attr("style", i), t.width = s, t.height = o, U(t, _), t.intersect = function(v) {
    return N.polygon(t, y, v);
  }, n;
}
d(Zd, "hexagon");
async function Kd(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: n } = await Q(e, t, K(t)), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), o = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: s } = t, l = H.svg(n), c = j(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: a, y: 0 },
    { x: 0, y: o },
    { x: a, y: o }
  ], u = it(h), f = l.path(u, c), p = n.insert(() => f, ":first-child");
  return p.attr("class", "basic label-container"), s && t.look !== "handDrawn" && p.selectChildren("path").attr("style", s), i && t.look !== "handDrawn" && p.selectChildren("path").attr("style", i), p.attr("transform", `translate(${-a / 2}, ${-o / 2})`), U(t, p), t.intersect = function(g) {
    return B.info("Pill intersect", t, { points: h }), N.polygon(t, h, g);
  }, n;
}
d(Kd, "hourglass");
async function Qd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await Q(e, t, "icon-shape default"), f = t.pos === "t", p = s, g = s, { nodeBorder: m } = r, { stylesMap: y } = ti(t), x = -g / 2, b = -p / 2, _ = t.label ? 8 : 0, v = H.svg(c), w = j(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const C = v.rectangle(x, b, g, p, w), S = Math.max(g, h.width), A = p + h.height + _, O = v.rectangle(-S / 2, -A / 2, S, A, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), D = c.insert(() => C, ":first-child"), L = c.insert(() => O);
  if (t.icon) {
    const q = c.append("g");
    q.html(
      `<g>${await rn(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const M = q.node().getBBox(), E = M.width, F = M.height, R = M.x, z = M.y;
    q.attr(
      "transform",
      `translate(${-E / 2 - R},${f ? h.height / 2 + _ / 2 - F / 2 - z : -h.height / 2 - _ / 2 - F / 2 - z})`
    ), q.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -A / 2 : A / 2 - h.height})`
  ), D.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + _ / 2 : -h.height / 2 - _ / 2})`
  ), U(t, L), t.intersect = function(q) {
    if (B.info("iconSquare intersect", t, q), !t.label)
      return N.rect(t, q);
    const M = t.x ?? 0, E = t.y ?? 0, F = t.height ?? 0;
    let R = [];
    return f ? R = [
      { x: M - h.width / 2, y: E - F / 2 },
      { x: M + h.width / 2, y: E - F / 2 },
      { x: M + h.width / 2, y: E - F / 2 + h.height + _ },
      { x: M + g / 2, y: E - F / 2 + h.height + _ },
      { x: M + g / 2, y: E + F / 2 },
      { x: M - g / 2, y: E + F / 2 },
      { x: M - g / 2, y: E - F / 2 + h.height + _ },
      { x: M - h.width / 2, y: E - F / 2 + h.height + _ }
    ] : R = [
      { x: M - g / 2, y: E - F / 2 },
      { x: M + g / 2, y: E - F / 2 },
      { x: M + g / 2, y: E - F / 2 + p },
      { x: M + h.width / 2, y: E - F / 2 + p },
      { x: M + h.width / 2 / 2, y: E + F / 2 },
      { x: M - h.width / 2, y: E + F / 2 },
      { x: M - h.width / 2, y: E - F / 2 + p },
      { x: M - g / 2, y: E - F / 2 + p }
    ], N.polygon(t, R, q);
  }, c;
}
d(Qd, "icon");
async function Jd(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await Q(e, t, "icon-shape default"), f = 20, p = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = ti(t), b = H.svg(c), _ = j(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const v = x.get("fill");
  _.stroke = v ?? y;
  const w = c.append("g");
  t.icon && w.html(
    `<g>${await rn(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`
  );
  const C = w.node().getBBox(), S = C.width, A = C.height, O = C.x, D = C.y, L = Math.max(S, A) * Math.SQRT2 + f * 2, q = b.circle(0, 0, L, _), M = Math.max(L, h.width), E = L + h.height + p, F = b.rectangle(-M / 2, -E / 2, M, E, {
    ..._,
    fill: "transparent",
    stroke: "none"
  }), R = c.insert(() => q, ":first-child"), z = c.insert(() => F);
  return w.attr(
    "transform",
    `translate(${-S / 2 - O},${g ? h.height / 2 + p / 2 - A / 2 - D : -h.height / 2 - p / 2 - A / 2 - D})`
  ), w.attr("style", `color: ${x.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -E / 2 : E / 2 - h.height})`
  ), R.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + p / 2 : -h.height / 2 - p / 2})`
  ), U(t, z), t.intersect = function(P) {
    return B.info("iconSquare intersect", t, P), N.rect(t, P);
  }, c;
}
d(Jd, "iconCircle");
async function tg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await Q(
    e,
    t,
    "icon-shape default"
  ), p = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = ti(t), _ = -m / 2, v = -g / 2, w = t.label ? 8 : 0, C = H.svg(c), S = j(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const A = b.get("fill");
  S.stroke = A ?? x;
  const O = C.path(Xe(_, v, m, g, 5), S), D = Math.max(m, h.width), L = g + h.height + w, q = C.rectangle(-D / 2, -L / 2, D, L, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), M = c.insert(() => O, ":first-child").attr("class", "icon-shape2"), E = c.insert(() => q);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await rn(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const R = F.node().getBBox(), z = R.width, P = R.height, ot = R.x, bt = R.y;
    F.attr(
      "transform",
      `translate(${-z / 2 - ot},${p ? h.height / 2 + w / 2 - P / 2 - bt : -h.height / 2 - w / 2 - P / 2 - bt})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -L / 2 : L / 2 - h.height})`
  ), M.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + w / 2 : -h.height / 2 - w / 2})`
  ), U(t, E), t.intersect = function(F) {
    if (B.info("iconSquare intersect", t, F), !t.label)
      return N.rect(t, F);
    const R = t.x ?? 0, z = t.y ?? 0, P = t.height ?? 0;
    let ot = [];
    return p ? ot = [
      { x: R - h.width / 2, y: z - P / 2 },
      { x: R + h.width / 2, y: z - P / 2 },
      { x: R + h.width / 2, y: z - P / 2 + h.height + w },
      { x: R + m / 2, y: z - P / 2 + h.height + w },
      { x: R + m / 2, y: z + P / 2 },
      { x: R - m / 2, y: z + P / 2 },
      { x: R - m / 2, y: z - P / 2 + h.height + w },
      { x: R - h.width / 2, y: z - P / 2 + h.height + w }
    ] : ot = [
      { x: R - m / 2, y: z - P / 2 },
      { x: R + m / 2, y: z - P / 2 },
      { x: R + m / 2, y: z - P / 2 + g },
      { x: R + h.width / 2, y: z - P / 2 + g },
      { x: R + h.width / 2 / 2, y: z + P / 2 },
      { x: R - h.width / 2, y: z + P / 2 },
      { x: R - h.width / 2, y: z - P / 2 + g },
      { x: R - m / 2, y: z - P / 2 + g }
    ], N.polygon(t, ot, F);
  }, c;
}
d(tg, "iconRounded");
async function eg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: n } = Y(t);
  t.labelStyle = n;
  const a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await Q(
    e,
    t,
    "icon-shape default"
  ), p = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = ti(t), _ = -m / 2, v = -g / 2, w = t.label ? 8 : 0, C = H.svg(c), S = j(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const A = b.get("fill");
  S.stroke = A ?? x;
  const O = C.path(Xe(_, v, m, g, 0.1), S), D = Math.max(m, h.width), L = g + h.height + w, q = C.rectangle(-D / 2, -L / 2, D, L, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), M = c.insert(() => O, ":first-child"), E = c.insert(() => q);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await rn(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const R = F.node().getBBox(), z = R.width, P = R.height, ot = R.x, bt = R.y;
    F.attr(
      "transform",
      `translate(${-z / 2 - ot},${p ? h.height / 2 + w / 2 - P / 2 - bt : -h.height / 2 - w / 2 - P / 2 - bt})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -L / 2 : L / 2 - h.height})`
  ), M.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + w / 2 : -h.height / 2 - w / 2})`
  ), U(t, E), t.intersect = function(F) {
    if (B.info("iconSquare intersect", t, F), !t.label)
      return N.rect(t, F);
    const R = t.x ?? 0, z = t.y ?? 0, P = t.height ?? 0;
    let ot = [];
    return p ? ot = [
      { x: R - h.width / 2, y: z - P / 2 },
      { x: R + h.width / 2, y: z - P / 2 },
      { x: R + h.width / 2, y: z - P / 2 + h.height + w },
      { x: R + m / 2, y: z - P / 2 + h.height + w },
      { x: R + m / 2, y: z + P / 2 },
      { x: R - m / 2, y: z + P / 2 },
      { x: R - m / 2, y: z - P / 2 + h.height + w },
      { x: R - h.width / 2, y: z - P / 2 + h.height + w }
    ] : ot = [
      { x: R - m / 2, y: z - P / 2 },
      { x: R + m / 2, y: z - P / 2 },
      { x: R + m / 2, y: z - P / 2 + g },
      { x: R + h.width / 2, y: z - P / 2 + g },
      { x: R + h.width / 2 / 2, y: z + P / 2 },
      { x: R - h.width / 2, y: z + P / 2 },
      { x: R - h.width / 2, y: z - P / 2 + g },
      { x: R - m / 2, y: z - P / 2 + g }
    ], N.polygon(t, ot, F);
  }, c;
}
d(eg, "iconSquare");
async function rg(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
  const n = Number(i.naturalWidth.toString().replace("px", "")), a = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = n / a;
  const { labelStyles: o } = Y(t);
  t.labelStyle = o;
  const s = r == null ? void 0 : r.wrappingWidth;
  t.defaultWidth = r == null ? void 0 : r.wrappingWidth;
  const l = Math.max(
    t.label ? s ?? 0 : 0,
    (t == null ? void 0 : t.assetWidth) ?? n
  ), c = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? a;
  t.width = Math.max(c, s ?? 0);
  const { shapeSvg: u, bbox: f, label: p } = await Q(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = H.svg(u), _ = j(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const v = b.rectangle(m, y, c, h, _), w = Math.max(c, f.width), C = h + f.height + x, S = b.rectangle(-w / 2, -C / 2, w, C, {
    ..._,
    fill: "none",
    stroke: "none"
  }), A = u.insert(() => v, ":first-child"), O = u.insert(() => S);
  if (t.img) {
    const D = u.append("image");
    D.attr("href", t.img), D.attr("width", c), D.attr("height", h), D.attr("preserveAspectRatio", "none"), D.attr(
      "transform",
      `translate(${-c / 2},${g ? C / 2 - h : -C / 2})`
    );
  }
  return p.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -h / 2 - f.height / 2 - x / 2 : h / 2 - f.height / 2 + x / 2})`
  ), A.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`
  ), U(t, O), t.intersect = function(D) {
    if (B.info("iconSquare intersect", t, D), !t.label)
      return N.rect(t, D);
    const L = t.x ?? 0, q = t.y ?? 0, M = t.height ?? 0;
    let E = [];
    return g ? E = [
      { x: L - f.width / 2, y: q - M / 2 },
      { x: L + f.width / 2, y: q - M / 2 },
      { x: L + f.width / 2, y: q - M / 2 + f.height + x },
      { x: L + c / 2, y: q - M / 2 + f.height + x },
      { x: L + c / 2, y: q + M / 2 },
      { x: L - c / 2, y: q + M / 2 },
      { x: L - c / 2, y: q - M / 2 + f.height + x },
      { x: L - f.width / 2, y: q - M / 2 + f.height + x }
    ] : E = [
      { x: L - c / 2, y: q - M / 2 },
      { x: L + c / 2, y: q - M / 2 },
      { x: L + c / 2, y: q - M / 2 + h },
      { x: L + f.width / 2, y: q - M / 2 + h },
      { x: L + f.width / 2 / 2, y: q + M / 2 },
      { x: L - f.width / 2, y: q + M / 2 },
      { x: L - f.width / 2, y: q - M / 2 + h },
      { x: L - c / 2, y: q - M / 2 + h }
    ], N.polygon(t, E, D);
  }, u;
}
d(rg, "imageSquare");
async function ig(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: -3 * s / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = H.svg(n), f = j(t, {}), p = it(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = Ve(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, U(t, c), t.intersect = function(u) {
    return N.polygon(t, l, u);
  }, n;
}
d(ig, "inv_trapezoid");
async function Wa(e, t, r) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i;
  const { shapeSvg: a, bbox: o } = await Q(e, t, K(t)), s = Math.max(o.width + r.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(o.height + r.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), c = -s / 2, h = -l / 2;
  let u, { rx: f, ry: p } = t;
  const { cssStyles: g } = t;
  if (r != null && r.rx && r.ry && (f = r.rx, p = r.ry), t.look === "handDrawn") {
    const m = H.svg(a), y = j(t, {}), x = f || p ? m.path(Xe(c, h, s, l, f || 0), y) : m.rectangle(c, h, s, l, y);
    u = a.insert(() => x, ":first-child"), u.attr("class", "basic label-container").attr("style", Dt(g));
  } else
    u = a.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", n).attr("rx", Dt(f)).attr("ry", Dt(p)).attr("x", c).attr("y", h).attr("width", s).attr("height", l);
  return U(t, u), t.calcIntersect = function(m, y) {
    return N.rect(m, y);
  }, t.intersect = function(m) {
    return N.rect(t, m);
  }, a;
}
d(Wa, "drawRect");
async function ng(e, t) {
  const { shapeSvg: r, bbox: i, label: n } = await Q(e, t, "label"), a = r.insert("rect", ":first-child");
  return a.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), n.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), U(t, a), t.intersect = function(l) {
    return N.rect(t, l);
  }, r;
}
d(ng, "labelRect");
async function ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: -(3 * s) / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = H.svg(n), f = j(t, {}), p = it(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = Ve(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, U(t, c), t.intersect = function(u) {
    return N.polygon(t, l, u);
  }, n;
}
d(ag, "lean_left");
async function sg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: -3 * s / 6, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = H.svg(n), f = j(t, {}), p = it(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = Ve(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, U(t, c), t.intersect = function(u) {
    return N.polygon(t, l, u);
  }, n;
}
d(sg, "lean_right");
function og(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.label = "", t.labelStyle = r;
  const n = e.insert("g").attr("class", K(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, o = Math.max(35, (t == null ? void 0 : t.width) ?? 0), s = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, c = [
    { x: o, y: 0 },
    { x: 0, y: s + l / 2 },
    { x: o - 2 * l, y: s + l / 2 },
    { x: 0, y: 2 * s },
    { x: o, y: s - l / 2 },
    { x: 2 * l, y: s - l / 2 }
  ], h = H.svg(n), u = j(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = it(c), p = h.path(f, u), g = n.insert(() => p, ":first-child");
  return a && t.look !== "handDrawn" && g.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${o / 2},${-s})`), U(t, g), t.intersect = function(m) {
    return B.info("lightningBolt intersect", t, m), N.polygon(t, c, m);
  }, n;
}
d(og, "lightningBolt");
var jv = /* @__PURE__ */ d((e, t, r, i, n, a, o) => [
  `M${e},${t + a}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + o}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), Yv = /* @__PURE__ */ d((e, t, r, i, n, a, o) => [
  `M${e},${t + a}`,
  `M${e + r},${t + a}`,
  `a${n},${a} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${n},${a} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + a + o}`,
  `a${n},${a} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), Uv = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e - r / 2},${-i / 2}`, `a${n},${a} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD");
async function lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(a.height + c + (t.padding ?? 0), t.height ?? 0), u = h * 0.1;
  let f;
  const { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    const g = H.svg(n), m = Yv(0, 0, s, h, l, c, u), y = Uv(0, c, s, h, l, c), x = j(t, {}), b = g.path(m, x), _ = g.path(y, x);
    n.insert(() => _, ":first-child").attr("class", "line"), f = n.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), p && f.attr("style", p);
  } else {
    const g = jv(0, 0, s, h, l, c, u);
    f = n.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Dt(p)).attr("style", i);
  }
  return f.attr("label-offset-y", c), f.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), U(t, f), o.attr(
    "transform",
    `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), t.intersect = function(g) {
    const m = N.rect(t, g), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let x = c * c * (1 - y * y / (l * l));
      x > 0 && (x = Math.sqrt(x)), x = c - x, g.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
    }
    return m;
  }, n;
}
d(lg, "linedCylinder");
async function cg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, { cssStyles: u } = t, f = H.svg(n), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: h / 2 },
    ...Ye(
      -s / 2 - s / 2 * 0.1,
      h / 2,
      s / 2 + s / 2 * 0.1,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2, y: -h / 2 },
    { x: -s / 2, y: h / 2 * 1.1 },
    { x: -s / 2, y: -h / 2 }
  ], m = f.polygon(
    g.map((x) => [x.x, x.y]),
    p
  ), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, y), t.intersect = function(x) {
    return N.polygon(t, g, x);
  }, n;
}
d(cg, "linedWaveEdgedRect");
async function hg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: f } = t, p = H.svg(n), g = j(t, {}), m = [
    { x: h - c, y: u + c },
    { x: h - c, y: u + l + c },
    { x: h + s - c, y: u + l + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u + l - c },
    { x: h + s + c, y: u + l - c },
    { x: h + s + c, y: u - c },
    { x: h + c, y: u - c },
    { x: h + c, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = [
    { x: h, y: u + c },
    { x: h + s - c, y: u + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u },
    { x: h, y: u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = it(m), b = p.path(x, g), _ = it(y), v = p.path(_, { ...g, fill: "none" }), w = n.insert(() => v, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(a.width / 2) - c - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c - (a.y - (a.top ?? 0))})`
  ), U(t, w), t.intersect = function(C) {
    return N.polygon(t, m, C);
  }, n;
}
d(hg, "multiRect");
async function ug(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, u = -s / 2, f = -h / 2, p = 5, { cssStyles: g } = t, m = Ye(
    u - p,
    f + h + p,
    u + s - p,
    f + h + p,
    c,
    0.8
  ), y = m == null ? void 0 : m[m.length - 1], x = [
    { x: u - p, y: f + p },
    { x: u - p, y: f + h + p },
    ...m,
    { x: u + s - p, y: y.y - p },
    { x: u + s, y: y.y - p },
    { x: u + s, y: y.y - 2 * p },
    { x: u + s + p, y: y.y - 2 * p },
    { x: u + s + p, y: f - p },
    { x: u + p, y: f - p },
    { x: u + p, y: f },
    { x: u, y: f },
    { x: u, y: f + p }
  ], b = [
    { x: u, y: f + p },
    { x: u + s - p, y: f + p },
    { x: u + s - p, y: y.y - p },
    { x: u + s, y: y.y - p },
    { x: u + s, y: f },
    { x: u, y: f }
  ], _ = H.svg(n), v = j(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const w = it(x), C = _.path(w, v), S = it(b), A = _.path(S, v), O = n.insert(() => C, ":first-child");
  return O.insert(() => A), O.attr("class", "basic label-container"), g && t.look !== "handDrawn" && O.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + p - c / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, O), t.intersect = function(D) {
    return N.polygon(t, x, D);
  }, n;
}
d(ug, "multiWaveEdgedRectangle");
async function fg(e, t, { config: { themeVariables: r } }) {
  var b;
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i, t.useHtmlLabels || ((b = Ot().flowchart) == null ? void 0 : b.htmlLabels) !== !1 || (t.centerLabel = !0);
  const { shapeSvg: o, bbox: s, label: l } = await Q(e, t, K(t)), c = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), u = -c / 2, f = -h / 2, { cssStyles: p } = t, g = H.svg(o), m = j(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(u, f, c, h, m), x = o.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), p && t.look !== "handDrawn" && x.selectAll("path").attr("style", p), n && t.look !== "handDrawn" && x.selectAll("path").attr("style", n), l.attr(
    "transform",
    `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`
  ), U(t, x), t.intersect = function(_) {
    return N.rect(t, _);
  }, o;
}
d(fg, "note");
var Gv = /* @__PURE__ */ d((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function pg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.width + t.padding, s = a.height + t.padding, l = o + s, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const p = H.svg(n), g = j(t, {}), m = Gv(0, 0, l), y = p.path(m, g);
    u = n.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), f && u.attr("style", f);
  } else
    u = Ve(n, l, l, h), u.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && u.attr("style", i), U(t, u), t.calcIntersect = function(p, g) {
    const m = p.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], x = N.polygon(p, y, g);
    return { x: x.x - 0.5, y: x.y - 0.5 };
  }, t.intersect = function(p) {
    return this.calcIntersect(t, p);
  }, n;
}
d(pg, "question");
async function dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, u = h / 2, f = [
    { x: c + u, y: h },
    { x: c, y: 0 },
    { x: c + u, y: -h },
    { x: -c, y: -h },
    { x: -c, y: h }
  ], { cssStyles: p } = t, g = H.svg(n), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = it(f), x = g.path(y, m), b = n.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), p && t.look !== "handDrawn" && b.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-u / 2},0)`), o.attr(
    "transform",
    `translate(${-u / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), U(t, b), t.intersect = function(_) {
    return N.polygon(t, f, _);
  }, n;
}
d(dg, "rect_left_inv_arrow");
async function gg(e, t) {
  var A, O;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  let n;
  t.cssClasses ? n = "node " + t.cssClasses : n = "node default";
  const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), o = a.insert("g"), s = a.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = s.node().appendChild(await or(c, t.labelStyle, !0, !0));
  let u = { width: 0, height: 0 };
  if (St((O = (A = lt()) == null ? void 0 : A.flowchart) == null ? void 0 : O.htmlLabels)) {
    const D = h.children[0], L = at(h);
    u = D.getBoundingClientRect(), L.attr("width", u.width), L.attr("height", u.height);
  }
  B.info("Text 2", l);
  const f = l || [], p = h.getBBox(), g = s.node().appendChild(
    await or(
      f.join ? f.join("<br/>") : f,
      t.labelStyle,
      !0,
      !0
    )
  ), m = g.children[0], y = at(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const x = (t.padding || 0) / 2;
  at(g).attr(
    "transform",
    "translate( " + (u.width > p.width ? 0 : (p.width - u.width) / 2) + ", " + (p.height + x + 5) + ")"
  ), at(h).attr(
    "transform",
    "translate( " + (u.width < p.width ? 0 : -(p.width - u.width) / 2) + ", 0)"
  ), u = s.node().getBBox(), s.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - x + 3) + ")"
  );
  const b = u.width + (t.padding || 0), _ = u.height + (t.padding || 0), v = -u.width / 2 - x, w = -u.height / 2 - x;
  let C, S;
  if (t.look === "handDrawn") {
    const D = H.svg(a), L = j(t, {}), q = D.path(
      Xe(v, w, b, _, t.rx || 0),
      L
    ), M = D.line(
      -u.width / 2 - x,
      -u.height / 2 - x + p.height + x,
      u.width / 2 + x,
      -u.height / 2 - x + p.height + x,
      L
    );
    S = a.insert(() => (B.debug("Rough node insert CXC", q), M), ":first-child"), C = a.insert(() => (B.debug("Rough node insert CXC", q), q), ":first-child");
  } else
    C = o.insert("rect", ":first-child"), S = o.insert("line"), C.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - x).attr("y", -u.height / 2 - x).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), S.attr("class", "divider").attr("x1", -u.width / 2 - x).attr("x2", u.width / 2 + x).attr("y1", -u.height / 2 - x + p.height + x).attr("y2", -u.height / 2 - x + p.height + x);
  return U(t, C), t.intersect = function(D) {
    return N.rect(t, D);
  }, a;
}
d(gg, "rectWithTitle");
function Ti(e, t, r, i, n, a, o) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, p = u / n, g = f / a, m = Math.sqrt(p ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * a * Math.sin(h) * (o ? -1 : 1), b = c - y * n * Math.cos(h) * (o ? -1 : 1), _ = Math.atan2((t - b) / a, (e - x) / n);
  let w = Math.atan2((i - b) / a, (r - x) / n) - _;
  o && w < 0 && (w += 2 * Math.PI), !o && w > 0 && (w -= 2 * Math.PI);
  const C = [];
  for (let S = 0; S < 20; S++) {
    const A = S / 19, O = _ + A * w, D = x + n * Math.cos(O), L = b + a * Math.sin(O);
    C.push({ x: D, y: L });
  }
  return C;
}
d(Ti, "generateArcPoints");
async function mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = (t == null ? void 0 : t.padding) ?? 0, s = (t == null ? void 0 : t.padding) ?? 0, l = (t != null && t.width ? t == null ? void 0 : t.width : a.width) + o * 2, c = (t != null && t.height ? t == null ? void 0 : t.height : a.height) + s * 2, h = t.radius || 5, u = t.taper || 5, { cssStyles: f } = t, p = H.svg(n), g = j(t, {});
  t.stroke && (g.stroke = t.stroke), t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    // Top edge (left to right)
    { x: -l / 2 + u, y: -c / 2 },
    // Top-left corner start (1)
    { x: l / 2 - u, y: -c / 2 },
    // Top-right corner start (2)
    ...Ti(l / 2 - u, -c / 2, l / 2, -c / 2 + u, h, h, !0),
    // Top-left arc (2 to 3)
    // Right edge (top to bottom)
    { x: l / 2, y: -c / 2 + u },
    // Top-right taper point (3)
    { x: l / 2, y: c / 2 - u },
    // Bottom-right taper point (4)
    ...Ti(l / 2, c / 2 - u, l / 2 - u, c / 2, h, h, !0),
    // Top-left arc (4 to 5)
    // Bottom edge (right to left)
    { x: l / 2 - u, y: c / 2 },
    // Bottom-right corner start (5)
    { x: -l / 2 + u, y: c / 2 },
    // Bottom-left corner start (6)
    ...Ti(-l / 2 + u, c / 2, -l / 2, c / 2 - u, h, h, !0),
    // Top-left arc (4 to 5)
    // Left edge (bottom to top)
    { x: -l / 2, y: c / 2 - u },
    // Bottom-left taper point (7)
    { x: -l / 2, y: -c / 2 + u },
    // Top-left taper point (8)
    ...Ti(-l / 2, -c / 2 + u, -l / 2 + u, -c / 2, h, h, !0)
    // Top-left arc (4 to 5)
  ], y = it(m), x = p.path(y, g), b = n.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), U(t, b), t.intersect = function(_) {
    return N.polygon(t, m, _);
  }, n;
}
d(mg, "roundedRect");
async function yg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -a.width / 2 - s, u = -a.height / 2 - s, { cssStyles: f } = t, p = H.svg(n), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u },
    { x: h + l + 8, y: u },
    { x: h + l + 8, y: u + c },
    { x: h - 8, y: u + c },
    { x: h - 8, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = p.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Dt(f)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), U(t, x), t.intersect = function(b) {
    return N.rect(t, b);
  }, n;
}
d(yg, "shadedProcess");
async function xg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, { cssStyles: u } = t, f = H.svg(n), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const g = [
    { x: c, y: h },
    { x: c, y: h + l },
    { x: c + s, y: h + l },
    { x: c + s, y: h - l / 2 }
  ], m = it(g), y = f.path(m, p), x = n.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`
  ), U(t, x), t.intersect = function(b) {
    return N.polygon(t, g, b);
  }, n;
}
d(xg, "slopedRect");
async function bg(e, t) {
  const r = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return Wa(e, t, r);
}
d(bg, "squareRect");
async function Cg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.height + t.padding, s = a.width + o / 4 + t.padding, l = o / 2, { cssStyles: c } = t, h = H.svg(n), u = j(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = [
    { x: -s / 2 + l, y: -o / 2 },
    { x: s / 2 - l, y: -o / 2 },
    ...Yi(-s / 2 + l, 0, l, 50, 90, 270),
    { x: s / 2 - l, y: o / 2 },
    ...Yi(s / 2 - l, 0, l, 50, 270, 450)
  ], p = it(f), g = h.path(p, u), m = n.insert(() => g, ":first-child");
  return m.attr("class", "basic label-container outer-path"), c && t.look !== "handDrawn" && m.selectChildren("path").attr("style", c), i && t.look !== "handDrawn" && m.selectChildren("path").attr("style", i), U(t, m), t.intersect = function(y) {
    return N.polygon(t, f, y);
  }, n;
}
d(Cg, "stadium");
async function _g(e, t) {
  return Wa(e, t, {
    rx: 5,
    ry: 5
  });
}
d(_g, "state");
function wg(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i;
  const { cssStyles: a } = t, { lineColor: o, stateBorder: s, nodeBorder: l } = r, c = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = H.svg(c), u = j(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = h.circle(0, 0, 14, {
    ...u,
    stroke: o,
    strokeWidth: 2
  }), p = s ?? l, g = h.circle(0, 0, 5, {
    ...u,
    fill: p,
    stroke: p,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => f, ":first-child");
  return m.insert(() => g), a && m.selectAll("path").attr("style", a), n && m.selectAll("path").attr("style", n), U(t, m), t.intersect = function(y) {
    return N.circle(t, 7, y);
  }, c;
}
d(wg, "stateEnd");
function kg(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i } = r, n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const s = H.svg(n).circle(0, 0, 14, lC(i));
    a = n.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    a = n.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return U(t, a), t.intersect = function(o) {
    return N.circle(t, 7, o);
  }, n;
}
d(kg, "stateStart");
async function vg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = ((t == null ? void 0 : t.padding) || 0) / 2, s = a.width + t.padding, l = a.height + t.padding, c = -a.width / 2 - o, h = -a.height / 2 - o, u = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: s + 8, y: 0 },
    { x: s + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const f = H.svg(n), p = j(t, {}), g = f.rectangle(c - 8, h, s + 16, l, p), m = f.line(c, h, c, h + l, p), y = f.line(c + s, h, c + s, h + l, p);
    n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
    const x = n.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Dt(b)), U(t, x);
  } else {
    const f = Ve(n, s, l, u);
    i && f.attr("style", i), U(t, f);
  }
  return t.intersect = function(f) {
    return N.polygon(t, u, f);
  }, n;
}
d(vg, "subroutine");
async function Sg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -o / 2, c = -s / 2, h = 0.2 * s, u = 0.2 * s, { cssStyles: f } = t, p = H.svg(n), g = j(t, {}), m = [
    { x: l - h / 2, y: c },
    { x: l + o + h / 2, y: c },
    { x: l + o + h / 2, y: c + s },
    { x: l - h / 2, y: c + s }
  ], y = [
    { x: l + o - h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s - u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = it(m), b = p.path(x, g), _ = it(y), v = p.path(_, { ...g, fillStyle: "solid" }), w = n.insert(() => v, ":first-child");
  return w.insert(() => b, ":first-child"), w.attr("class", "basic label-container"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), U(t, w), t.intersect = function(C) {
    return N.polygon(t, m, C);
  }, n;
}
d(Sg, "taggedRect");
async function Tg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = 0.2 * s, u = 0.2 * l, f = l + c, { cssStyles: p } = t, g = H.svg(n), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -s / 2 - s / 2 * 0.1, y: f / 2 },
    ...Ye(
      -s / 2 - s / 2 * 0.1,
      f / 2,
      s / 2 + s / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -f / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -f / 2 }
  ], x = -s / 2 + s / 2 * 0.1, b = -f / 2 - u * 0.4, _ = [
    { x: x + s - h, y: (b + l) * 1.4 },
    { x: x + s, y: b + l - u },
    { x: x + s, y: (b + l) * 0.9 },
    ...Ye(
      x + s,
      (b + l) * 1.3,
      x + s - h,
      (b + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], v = it(y), w = g.path(v, m), C = it(_), S = g.path(C, {
    ...m,
    fillStyle: "solid"
  }), A = n.insert(() => S, ":first-child");
  return A.insert(() => w, ":first-child"), A.attr("class", "basic label-container"), p && t.look !== "handDrawn" && A.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && A.selectAll("path").attr("style", i), A.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, A), t.intersect = function(O) {
    return N.polygon(t, y, O);
  }, n;
}
d(Tg, "taggedWaveEdgedRectangle");
async function Bg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = Math.max(a.width + t.padding, (t == null ? void 0 : t.width) || 0), s = Math.max(a.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -o / 2, c = -s / 2, h = n.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", o).attr("height", s), U(t, h), t.intersect = function(u) {
    return N.rect(t, u);
  }, n;
}
d(Bg, "text");
var Xv = /* @__PURE__ */ d((e, t, r, i, n, a) => `M${e},${t}
    a${n},${a} 0,0,1 0,${-i}
    l${r},0
    a${n},${a} 0,0,1 0,${i}
    M${r},${-i}
    a${n},${a} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), Vv = /* @__PURE__ */ d((e, t, r, i, n, a) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${n},${a} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${n},${a} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), Zv = /* @__PURE__ */ d((e, t, r, i, n, a) => [`M${e + r / 2},${-i / 2}`, `a${n},${a} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function Ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o, halfPadding: s } = await Q(
    e,
    t,
    K(t)
  ), l = t.look === "neo" ? s * 2 : s, c = a.height + l, h = c / 2, u = h / (2.5 + c / 50), f = a.width + u + l, { cssStyles: p } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = H.svg(n), y = Vv(0, 0, f, c, u, h), x = Zv(0, 0, f, c, u, h), b = m.path(y, j(t, {})), _ = m.path(x, j(t, { fill: "none" }));
    g = n.insert(() => _, ":first-child"), g = n.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), p && g.attr("style", p);
  } else {
    const m = Xv(0, 0, f, c, u, h);
    g = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Dt(p)).attr("style", i), g.attr("class", "basic label-container"), p && g.selectAll("path").attr("style", p), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${c / 2} )`), o.attr(
    "transform",
    `translate(${-(a.width / 2) - u - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`
  ), U(t, g), t.intersect = function(m) {
    const y = N.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - x * x / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, n;
}
d(Ag, "tiltedCylinder");
async function Lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = a.width + t.padding, s = a.height + t.padding, l = [
    { x: -3 * s / 6, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = H.svg(n), f = j(t, {}), p = it(l), g = u.path(p, f);
    c = n.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = Ve(n, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, U(t, c), t.intersect = function(u) {
    return N.polygon(t, l, u);
  }, n;
}
d(Lg, "trapezoid");
async function Mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = 60, s = 20, l = Math.max(o, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: h } = t, u = H.svg(n), f = j(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const p = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], g = it(p), m = u.path(g, f), y = n.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), U(t, y), t.intersect = function(x) {
    return N.polygon(t, p, x);
  }, n;
}
d(Mg, "trapezoidalPentagon");
async function Eg(e, t) {
  var b;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = St((b = lt().flowchart) == null ? void 0 : b.htmlLabels), l = a.width + (t.padding ?? 0), c = l + a.height, h = l + a.height, u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h / 2, y: -c }
  ], { cssStyles: f } = t, p = H.svg(n), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = it(u), y = p.path(m, g), x = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return f && t.look !== "handDrawn" && x.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), t.width = l, t.height = c, U(t, x), o.attr(
    "transform",
    `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${c / 2 - (a.height + (t.padding ?? 0) / (s ? 2 : 1) - (a.y - (a.top ?? 0)))})`
  ), t.intersect = function(_) {
    return B.info("Triangle intersect", t, u, _), N.polygon(t, u, _);
  }, n;
}
d(Eg, "triangle");
async function $g(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 8, h = l + c, { cssStyles: u } = t, p = 70 - s, g = p > 0 ? p / 2 : 0, m = H.svg(n), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -s / 2 - g, y: h / 2 },
    ...Ye(
      -s / 2 - g,
      h / 2,
      s / 2 + g,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + g, y: -h / 2 },
    { x: -s / 2 - g, y: -h / 2 }
  ], b = it(x), _ = m.path(b, y), v = n.insert(() => _, ":first-child");
  return v.attr("class", "basic label-container"), u && t.look !== "handDrawn" && v.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (a.y - (a.top ?? 0))})`
  ), U(t, v), t.intersect = function(w) {
    return N.polygon(t, x, w);
  }, n;
}
d($g, "waveEdgedRectangle");
async function Fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a } = await Q(e, t, K(t)), o = 100, s = 50, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / c;
  let u = l, f = c;
  u > f * h ? f = u / h : u = f * h, u = Math.max(u, o), f = Math.max(f, s);
  const p = Math.min(f * 0.2, f / 4), g = f + p * 2, { cssStyles: m } = t, y = H.svg(n), x = j(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const b = [
    { x: -u / 2, y: g / 2 },
    ...Ye(-u / 2, g / 2, u / 2, g / 2, p, 1),
    { x: u / 2, y: -g / 2 },
    ...Ye(u / 2, -g / 2, -u / 2, -g / 2, p, -1)
  ], _ = it(b), v = y.path(_, x), w = n.insert(() => v, ":first-child");
  return w.attr("class", "basic label-container"), m && t.look !== "handDrawn" && w.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), U(t, w), t.intersect = function(C) {
    return N.polygon(t, b, C);
  }, n;
}
d(Fg, "waveRectangle");
async function Og(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, label: o } = await Q(e, t, K(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: f } = t, p = H.svg(n), g = j(t, {}), m = [
    { x: h - c, y: u - c },
    { x: h - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u - c }
  ], y = `M${h - c},${u - c} L${h + s},${u - c} L${h + s},${u + l} L${h - c},${u + l} L${h - c},${u - c}
                M${h - c},${u} L${h + s},${u}
                M${h},${u - c} L${h},${u + l}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = p.path(y, g), b = n.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(a.width / 2) + c / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + c / 2 - (a.y - (a.top ?? 0))})`
  ), U(t, b), t.intersect = function(_) {
    return N.polygon(t, m, _);
  }, n;
}
d(Og, "windowPane");
async function Cl(e, t) {
  var re, ft, ie, dt;
  const r = t;
  if (r.alias && (t.label = r.alias), t.look === "handDrawn") {
    const { themeVariables: nt } = Ot(), { background: ut } = nt, yt = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${ut}`]
    };
    await Cl(e, yt);
  }
  const i = Ot();
  t.useHtmlLabels = i.htmlLabels;
  let n = ((re = i.er) == null ? void 0 : re.diagramPadding) ?? 10, a = ((ft = i.er) == null ? void 0 : ft.entityPadding) ?? 6;
  const { cssStyles: o } = t, { labelStyles: s, nodeStyles: l } = Y(t);
  if (r.attributes.length === 0 && t.label) {
    const nt = {
      rx: 0,
      ry: 0,
      labelPaddingX: n,
      labelPaddingY: n * 1.5
    };
    Re(t.label, i) + nt.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const ut = await Wa(e, t, nt);
    if (!St(i.htmlLabels)) {
      const yt = ut.select("text"), Mt = (ie = yt.node()) == null ? void 0 : ie.getBBox();
      yt.attr("transform", `translate(${-Mt.width / 2}, 0)`);
    }
    return ut;
  }
  i.htmlLabels || (n *= 1.25, a *= 1.25);
  let c = K(t);
  c || (c = "node default");
  const h = e.insert("g").attr("class", c).attr("id", t.domId || t.id), u = await Er(h, t.label ?? "", i, 0, 0, ["name"], s);
  u.height += a;
  let f = 0;
  const p = [], g = [];
  let m = 0, y = 0, x = 0, b = 0, _ = !0, v = !0;
  for (const nt of r.attributes) {
    const ut = await Er(
      h,
      nt.type,
      i,
      0,
      f,
      ["attribute-type"],
      s
    );
    m = Math.max(m, ut.width + n);
    const yt = await Er(
      h,
      nt.name,
      i,
      0,
      f,
      ["attribute-name"],
      s
    );
    y = Math.max(y, yt.width + n);
    const Mt = await Er(
      h,
      nt.keys.join(),
      i,
      0,
      f,
      ["attribute-keys"],
      s
    );
    x = Math.max(x, Mt.width + n);
    const ne = await Er(
      h,
      nt.comment,
      i,
      0,
      f,
      ["attribute-comment"],
      s
    );
    b = Math.max(b, ne.width + n);
    const ae = Math.max(ut.height, yt.height, Mt.height, ne.height) + a;
    g.push({ yOffset: f, rowHeight: ae }), f += ae;
  }
  let w = 4;
  x <= n && (_ = !1, x = 0, w--), b <= n && (v = !1, b = 0, w--);
  const C = h.node().getBBox();
  if (u.width + n * 2 - (m + y + x + b) > 0) {
    const nt = u.width + n * 2 - (m + y + x + b);
    m += nt / w, y += nt / w, x > 0 && (x += nt / w), b > 0 && (b += nt / w);
  }
  const S = m + y + x + b, A = H.svg(h), O = j(t, {});
  t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
  let D = 0;
  g.length > 0 && (D = g.reduce((nt, ut) => nt + ((ut == null ? void 0 : ut.rowHeight) ?? 0), 0));
  const L = Math.max(C.width + n * 2, (t == null ? void 0 : t.width) || 0, S), q = Math.max((D ?? 0) + u.height, (t == null ? void 0 : t.height) || 0), M = -L / 2, E = -q / 2;
  h.selectAll("g:not(:first-child)").each((nt, ut, yt) => {
    const Mt = at(yt[ut]), ne = Mt.attr("transform");
    let ae = 0, ai = 0;
    if (ne) {
      const Ie = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(ne);
      Ie && (ae = parseFloat(Ie[1]), ai = parseFloat(Ie[2]), Mt.attr("class").includes("attribute-name") ? ae += m : Mt.attr("class").includes("attribute-keys") ? ae += m + y : Mt.attr("class").includes("attribute-comment") && (ae += m + y + x));
    }
    Mt.attr(
      "transform",
      `translate(${M + n / 2 + ae}, ${ai + E + u.height + a / 2})`
    );
  }), h.select(".name").attr("transform", "translate(" + -u.width / 2 + ", " + (E + a / 2) + ")");
  const F = A.rectangle(M, E, L, q, O), R = h.insert(() => F, ":first-child").attr("style", o.join("")), { themeVariables: z } = Ot(), { rowEven: P, rowOdd: ot, nodeBorder: bt } = z;
  p.push(0);
  for (const [nt, ut] of g.entries()) {
    const Mt = (nt + 1) % 2 === 0 && ut.yOffset !== 0, ne = A.rectangle(M, u.height + E + (ut == null ? void 0 : ut.yOffset), L, ut == null ? void 0 : ut.rowHeight, {
      ...O,
      fill: Mt ? P : ot,
      stroke: bt
    });
    h.insert(() => ne, "g.label").attr("style", o.join("")).attr("class", `row-rect-${Mt ? "even" : "odd"}`);
  }
  let et = A.line(M, u.height + E, L + M, u.height + E, O);
  h.insert(() => et).attr("class", "divider"), et = A.line(m + M, u.height + E, m + M, q + E, O), h.insert(() => et).attr("class", "divider"), _ && (et = A.line(
    m + y + M,
    u.height + E,
    m + y + M,
    q + E,
    O
  ), h.insert(() => et).attr("class", "divider")), v && (et = A.line(
    m + y + x + M,
    u.height + E,
    m + y + x + M,
    q + E,
    O
  ), h.insert(() => et).attr("class", "divider"));
  for (const nt of p)
    et = A.line(
      M,
      u.height + E + nt,
      L + M,
      u.height + E + nt,
      O
    ), h.insert(() => et).attr("class", "divider");
  if (U(t, R), l && t.look !== "handDrawn") {
    const nt = l.split(";"), ut = (dt = nt == null ? void 0 : nt.filter((yt) => yt.includes("stroke"))) == null ? void 0 : dt.map((yt) => `${yt}`).join("; ");
    h.selectAll("path").attr("style", ut ?? ""), h.selectAll(".row-rect-even path").attr("style", l);
  }
  return t.intersect = function(nt) {
    return N.rect(t, nt);
  }, h;
}
d(Cl, "erBox");
async function Er(e, t, r, i = 0, n = 0, a = [], o = "") {
  const s = e.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${i}, ${n})`).attr("style", o);
  t !== tc(t) && (t = tc(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = s.node().appendChild(
    await Ge(
      s,
      t,
      {
        width: Re(t, r) + 100,
        style: o,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (St(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = at(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
d(Er, "addText");
async function Rg(e, t, r, i, n = r.class.padding ?? 12) {
  const a = i ? 0 : 3, o = e.insert("g").attr("class", K(t)).attr("id", t.domId || t.id);
  let s = null, l = null, c = null, h = null, u = 0, f = 0, p = 0;
  if (s = o.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await Bi(s, { text: `«${b}»` }, 0), u = s.node().getBBox().height;
  }
  l = o.insert("g").attr("class", "label-group text"), await Bi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, c = o.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const _ = await Bi(c, b, m, [b.parseClassifier()]);
    m += _ + a;
  }
  p = c.node().getBBox().height, p <= 0 && (p = n / 2), h = o.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const _ = await Bi(h, b, y, [b.parseClassifier()]);
    y += _ + a;
  }
  let x = o.node().getBBox();
  if (s !== null) {
    const b = s.node().getBBox();
    s.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), x = o.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + n * 2})`
  ), x = o.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + (p ? p + n * 4 : n * 2)})`
  ), x = o.node().getBBox(), { shapeSvg: o, bbox: x };
}
d(Rg, "textHelper");
async function Bi(e, t, r, i = []) {
  const n = e.insert("g").attr("class", "label").attr("style", i.join("; ")), a = Ot();
  let o = "useHtmlLabels" in t ? t.useHtmlLabels : St(a.htmlLabels) ?? !0, s = "";
  "text" in t ? s = t.text : s = t.label, !o && s.startsWith("\\") && (s = s.substring(1)), Ur(s) && (o = !0);
  const l = await Ge(
    n,
    Mo(Cr(s)),
    {
      width: Re(s, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o
    },
    a
  );
  let c, h = 1;
  if (o) {
    const u = l.children[0], f = at(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const p = u.getElementsByTagName("img");
    if (p) {
      const g = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...p].map(
          (m) => new Promise((y) => {
            function x() {
              var b;
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const _ = ((b = a.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, w = parseInt(_, 10) * 5 + "px";
                m.style.minWidth = w, m.style.maxWidth = w;
              } else
                m.style.width = "100%";
              y(m);
            }
            d(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && at(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return n.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
d(Bi, "addText");
async function Dg(e, t) {
  var O, D;
  const r = lt(), i = r.class.padding ?? 12, n = i, a = t.useHtmlLabels ?? St(r.htmlLabels) ?? !0, o = t;
  o.annotations = o.annotations ?? [], o.members = o.members ?? [], o.methods = o.methods ?? [];
  const { shapeSvg: s, bbox: l } = await Rg(e, t, r, a, n), { labelStyles: c, nodeStyles: h } = Y(t);
  t.labelStyle = c, t.cssStyles = o.styles || "";
  const u = ((O = o.styles) == null ? void 0 : O.join(";")) || h || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const f = o.members.length === 0 && o.methods.length === 0 && !((D = r.class) != null && D.hideEmptyMembersBox), p = H.svg(s), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  o.members.length === 0 && o.methods.length === 0 ? y += n : o.members.length > 0 && o.methods.length === 0 && (y += n * 2);
  const x = -m / 2, b = -y / 2, _ = p.rectangle(
    x - i,
    b - i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (f ? i * 2 : o.members.length === 0 && o.methods.length === 0 ? -i : 0),
    g
  ), v = s.insert(() => _, ":first-child");
  v.attr("class", "basic label-container");
  const w = v.node().getBBox();
  s.selectAll(".text").each((L, q, M) => {
    var ot;
    const E = at(M[q]), F = E.attr("transform");
    let R = 0;
    if (F) {
      const et = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(F);
      et && (R = parseFloat(et[2]));
    }
    let z = R + b + i - (f ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0);
    a || (z -= 4);
    let P = x;
    (E.attr("class").includes("label-group") || E.attr("class").includes("annotation-group")) && (P = -((ot = E.node()) == null ? void 0 : ot.getBBox().width) / 2 || 0, s.selectAll("text").each(function(bt, et, re) {
      window.getComputedStyle(re[et]).textAnchor === "middle" && (P = 0);
    })), E.attr("transform", `translate(${P}, ${z})`);
  });
  const C = s.select(".annotation-group").node().getBBox().height - (f ? i / 2 : 0) || 0, S = s.select(".label-group").node().getBBox().height - (f ? i / 2 : 0) || 0, A = s.select(".members-group").node().getBBox().height - (f ? i / 2 : 0) || 0;
  if (o.members.length > 0 || o.methods.length > 0 || f) {
    const L = p.line(
      w.x,
      C + S + b + i,
      w.x + w.width,
      C + S + b + i,
      g
    );
    s.insert(() => L).attr("class", "divider").attr("style", u);
  }
  if (f || o.members.length > 0 || o.methods.length > 0) {
    const L = p.line(
      w.x,
      C + S + A + b + n * 2 + i,
      w.x + w.width,
      C + S + A + b + i + n * 2,
      g
    );
    s.insert(() => L).attr("class", "divider").attr("style", u);
  }
  if (o.look !== "handDrawn" && s.selectAll("path").attr("style", u), v.select(":nth-child(2)").attr("style", u), s.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", u), !a) {
    const L = RegExp(/color\s*:\s*([^;]*)/), q = L.exec(u);
    if (q) {
      const M = q[0].replace("color", "fill");
      s.selectAll("tspan").attr("style", M);
    } else if (c) {
      const M = L.exec(c);
      if (M) {
        const E = M[0].replace("color", "fill");
        s.selectAll("tspan").attr("style", E);
      }
    }
  }
  return U(t, v), t.intersect = function(L) {
    return N.rect(t, L);
  }, s;
}
d(Dg, "classBox");
async function Ig(e, t) {
  var C, S;
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const n = t, a = t, o = 20, s = 20, l = "verifyMethod" in t, c = K(t), h = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await ye(
    h,
    `&lt;&lt;${n.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await ye(h, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let f = u;
  const p = await ye(
    h,
    n.name,
    f,
    t.labelStyle + "; font-weight: bold;"
  );
  if (f += p + s, l) {
    const A = await ye(
      h,
      `${n.requirementId ? `ID: ${n.requirementId}` : ""}`,
      f,
      t.labelStyle
    );
    f += A;
    const O = await ye(
      h,
      `${n.text ? `Text: ${n.text}` : ""}`,
      f,
      t.labelStyle
    );
    f += O;
    const D = await ye(
      h,
      `${n.risk ? `Risk: ${n.risk}` : ""}`,
      f,
      t.labelStyle
    );
    f += D, await ye(
      h,
      `${n.verifyMethod ? `Verification: ${n.verifyMethod}` : ""}`,
      f,
      t.labelStyle
    );
  } else {
    const A = await ye(
      h,
      `${a.type ? `Type: ${a.type}` : ""}`,
      f,
      t.labelStyle
    );
    f += A, await ye(
      h,
      `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`,
      f,
      t.labelStyle
    );
  }
  const g = (((C = h.node()) == null ? void 0 : C.getBBox().width) ?? 200) + o, m = (((S = h.node()) == null ? void 0 : S.getBBox().height) ?? 200) + o, y = -g / 2, x = -m / 2, b = H.svg(h), _ = j(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const v = b.rectangle(y, x, g, m, _), w = h.insert(() => v, ":first-child");
  if (w.attr("class", "basic label-container").attr("style", i), h.selectAll(".label").each((A, O, D) => {
    const L = at(D[O]), q = L.attr("transform");
    let M = 0, E = 0;
    if (q) {
      const P = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(q);
      P && (M = parseFloat(P[1]), E = parseFloat(P[2]));
    }
    const F = E - m / 2;
    let R = y + o / 2;
    (O === 0 || O === 1) && (R = M), L.attr("transform", `translate(${R}, ${F + o})`);
  }), f > u + p + s) {
    const A = b.line(
      y,
      x + u + p + s,
      y + g,
      x + u + p + s,
      _
    );
    h.insert(() => A).attr("style", i);
  }
  return U(t, w), t.intersect = function(A) {
    return N.rect(t, A);
  }, h;
}
d(Ig, "requirementBox");
async function ye(e, t, r, i = "") {
  if (t === "")
    return 0;
  const n = e.insert("g").attr("class", "label").attr("style", i), a = lt(), o = a.htmlLabels ?? !0, s = await Ge(
    n,
    Mo(Cr(t)),
    {
      width: Re(t, a) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o,
      style: i
    },
    a
  );
  let l;
  if (o) {
    const c = s.children[0], h = at(s);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = s.children[0];
    for (const h of c.children)
      h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h.setAttribute("style", i);
    l = s.getBBox(), l.height += 6;
  }
  return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
d(ye, "addText");
var Kv = /* @__PURE__ */ d((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Pg(e, t, { config: r }) {
  var q, M;
  const { labelStyles: i, nodeStyles: n } = Y(t);
  t.labelStyle = i || "";
  const a = 10, o = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: s,
    bbox: l,
    label: c
  } = await Q(e, t, K(t)), h = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && ((q = r == null ? void 0 : r.kanban) != null && q.ticketBaseUrl) && (u = (M = r == null ? void 0 : r.kanban) == null ? void 0 : M.ticketBaseUrl.replace("#TICKET#", t.ticket), f = s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const p = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await Cs(
    f,
    "ticket" in t && t.ticket || "",
    p
  ) : { label: g, bbox: m } = await Cs(
    s,
    "ticket" in t && t.ticket || "",
    p
  );
  const { label: y, bbox: x } = await Cs(
    s,
    "assigned" in t && t.assigned || "",
    p
  );
  t.width = o;
  const b = 10, _ = (t == null ? void 0 : t.width) || 0, v = Math.max(m.height, x.height) / 2, w = Math.max(l.height + b * 2, (t == null ? void 0 : t.height) || 0) + v, C = -_ / 2, S = -w / 2;
  c.attr(
    "transform",
    "translate(" + (h - _ / 2) + ", " + (-v - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - _ / 2) + ", " + (-v + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + _ / 2 - x.width - 2 * a) + ", " + (-v + l.height / 2) + ")"
  );
  let A;
  const { rx: O, ry: D } = t, { cssStyles: L } = t;
  if (t.look === "handDrawn") {
    const E = H.svg(s), F = j(t, {}), R = O || D ? E.path(Xe(C, S, _, w, O || 0), F) : E.rectangle(C, S, _, w, F);
    A = s.insert(() => R, ":first-child"), A.attr("class", "basic label-container").attr("style", L || null);
  } else {
    A = s.insert("rect", ":first-child"), A.attr("class", "basic label-container __APA__").attr("style", n).attr("rx", O ?? 5).attr("ry", D ?? 5).attr("x", C).attr("y", S).attr("width", _).attr("height", w);
    const E = "priority" in t && t.priority;
    if (E) {
      const F = s.append("line"), R = C + 2, z = S + Math.floor((O ?? 0) / 2), P = S + w - Math.floor((O ?? 0) / 2);
      F.attr("x1", R).attr("y1", z).attr("x2", R).attr("y2", P).attr("stroke-width", "4").attr("stroke", Kv(E));
    }
  }
  return U(t, A), t.height = w, t.intersect = function(E) {
    return N.rect(t, E);
  }, s;
}
d(Pg, "kanbanItem");
async function Ng(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o, label: s } = await Q(
    e,
    t,
    K(t)
  ), l = a.width + 10 * o, c = a.height + 8 * o, h = 0.15 * l, { cssStyles: u } = t, f = a.width + 20, p = a.height + 20, g = Math.max(l, f), m = Math.max(c, p);
  s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
  let y;
  const x = `M0 0 
    a${h},${h} 1 0,0 ${g * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${g * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * g * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * g * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * g * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${g * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const b = H.svg(n), _ = j(t, {}), v = b.path(x, _);
    y = n.insert(() => v, ":first-child"), y.attr("class", "basic label-container").attr("style", Dt(u));
  } else
    y = n.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", x);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), U(t, y), t.calcIntersect = function(b, _) {
    return N.rect(b, _);
  }, t.intersect = function(b) {
    return B.info("Bang intersect", t, b), N.rect(t, b);
  }, n;
}
d(Ng, "bang");
async function zg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o, label: s } = await Q(
    e,
    t,
    K(t)
  ), l = a.width + 2 * o, c = a.height + 2 * o, h = 0.15 * l, u = 0.25 * l, f = 0.35 * l, p = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${p},${p} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${u},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${p},${p} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const x = H.svg(n), b = j(t, {}), _ = x.path(y, b);
    m = n.insert(() => _, ":first-child"), m.attr("class", "basic label-container").attr("style", Dt(g));
  } else
    m = n.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), U(t, m), t.calcIntersect = function(x, b) {
    return N.rect(x, b);
  }, t.intersect = function(x) {
    return B.info("Cloud intersect", t, x), N.rect(t, x);
  }, n;
}
d(zg, "cloud");
async function qg(e, t) {
  const { labelStyles: r, nodeStyles: i } = Y(t);
  t.labelStyle = r;
  const { shapeSvg: n, bbox: a, halfPadding: o, label: s } = await Q(
    e,
    t,
    K(t)
  ), l = a.width + 8 * o, c = a.height + 2 * o, h = 5, u = `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} -${h},${h}
    h${-l + 2 * h}
    q-${h},0 -${h},-${h}
    Z
  `, f = n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return n.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), n.append(() => s.node()), U(t, f), t.calcIntersect = function(p, g) {
    return N.rect(p, g);
  }, t.intersect = function(p) {
    return N.rect(t, p);
  }, n;
}
d(qg, "defaultMindmapNode");
async function Wg(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return bl(e, t, r);
}
d(Wg, "mindmapCircle");
var Qv = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: bg
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: mg
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: Cg
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: vg
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Hd
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: bl
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: Ng
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: zg
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: pg
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Zd
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: sg
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: ag
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Lg
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: ig
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Yd
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Bg
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Rd
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: yg
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: kg
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: wg
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Xd
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Kd
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Nd
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: zd
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: qd
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: og
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: $g
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Vd
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Ag
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: lg
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Wd
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: jd
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Eg
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Og
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Ud
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Mg
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Gd
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: xg
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: ug
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: hg
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Od
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Pd
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: Tg
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Sg
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Fg
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: dg
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: cg
  }
], Jv = /* @__PURE__ */ d(() => {
  const t = [
    ...Object.entries({
      // States
      state: _g,
      choice: Dd,
      note: fg,
      // Rectangles
      rectWithTitle: gg,
      labelRect: ng,
      // Icons
      iconSquare: eg,
      iconCircle: Jd,
      icon: Qd,
      iconRounded: tg,
      imageSquare: rg,
      anchor: Fd,
      // Kanban diagram
      kanbanItem: Pg,
      //Mindmap diagram
      mindmapCircle: Wg,
      defaultMindmapNode: qg,
      // class diagram
      classBox: Dg,
      // er diagram
      erBox: Cl,
      // Requirement diagram
      requirementBox: Ig
    }),
    ...Qv.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((n) => [n, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Hg = Jv();
function tS(e) {
  return e in Hg;
}
d(tS, "isValidShape");
var Ha = /* @__PURE__ */ new Map();
async function jg(e, t, r) {
  let i, n;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const a = t.shape ? Hg[t.shape] : void 0;
  if (!a)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let o;
    r.config.securityLevel === "sandbox" ? o = "_top" : t.linkTarget && (o = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", o ?? null), n = await a(i, t, r);
  } else
    n = await a(e, t, r), i = n;
  return t.tooltip && n.attr("title", t.tooltip), Ha.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
d(jg, "insertNode");
var fL = /* @__PURE__ */ d((e, t) => {
  Ha.set(t.id, e);
}, "setNodeElem"), pL = /* @__PURE__ */ d(() => {
  Ha.clear();
}, "clear"), dL = /* @__PURE__ */ d((e) => {
  const t = Ha.get(e.id);
  B.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), eS = /* @__PURE__ */ d((e, t, r, i, n, a) => {
  t.arrowTypeStart && lh(e, "start", t.arrowTypeStart, r, i, n, a), t.arrowTypeEnd && lh(e, "end", t.arrowTypeEnd, r, i, n, a);
}, "addEdgeMarkers"), rS = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, lh = /* @__PURE__ */ d((e, t, r, i, n, a, o) => {
  var u;
  const s = rS[r];
  if (!s) {
    B.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l = s.type, h = `${n}_${a}-${l}${t === "start" ? "Start" : "End"}`;
  if (o && o.trim() !== "") {
    const f = o.replace(/[^\dA-Za-z]/g, "_"), p = `${h}_${f}`;
    if (!document.getElementById(p)) {
      const g = document.getElementById(h);
      if (g) {
        const m = g.cloneNode(!0);
        m.id = p, m.querySelectorAll("path, circle, line").forEach((x) => {
          x.setAttribute("stroke", o), s.fill && x.setAttribute("fill", o);
        }), (u = g.parentNode) == null || u.appendChild(m);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${p})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${h})`);
}, "addEdgeMarker"), xa = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), gL = /* @__PURE__ */ d(() => {
  xa.clear(), Lt.clear();
}, "clear"), _n = /* @__PURE__ */ d((e) => e ? e.reduce((r, i) => r + ";" + i, "") : "", "getLabelStyles"), iS = /* @__PURE__ */ d(async (e, t) => {
  let r = St(lt().flowchart.htmlLabels);
  const { labelStyles: i } = Y(t);
  t.labelStyle = i;
  const n = await Ge(e, t.label, {
    style: t.labelStyle,
    useHtmlLabels: r,
    addSvgBackground: !0,
    isNode: !1
  });
  B.info("abc82", t, t.labelType);
  const a = e.insert("g").attr("class", "edgeLabel"), o = a.insert("g").attr("class", "label").attr("data-id", t.id);
  o.node().appendChild(n);
  let s = n.getBBox();
  if (r) {
    const c = n.children[0], h = at(n);
    s = c.getBoundingClientRect(), h.attr("width", s.width), h.attr("height", s.height);
  }
  o.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), xa.set(t.id, a), t.width = s.width, t.height = s.height;
  let l;
  if (t.startLabelLeft) {
    const c = await or(
      t.startLabelLeft,
      _n(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Lt.get(t.id) || Lt.set(t.id, {}), Lt.get(t.id).startLeft = h, Ai(l, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const c = await or(
      t.startLabelRight,
      _n(t.labelStyle)
    ), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = h.node().appendChild(c), u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), Lt.get(t.id) || Lt.set(t.id, {}), Lt.get(t.id).startRight = h, Ai(l, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const c = await or(t.endLabelLeft, _n(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Lt.get(t.id) || Lt.set(t.id, {}), Lt.get(t.id).endLeft = h, Ai(l, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const c = await or(t.endLabelRight, _n(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), u = h.insert("g").attr("class", "inner");
    l = u.node().appendChild(c);
    const f = c.getBBox();
    u.attr("transform", "translate(" + -f.width / 2 + ", " + -f.height / 2 + ")"), h.node().appendChild(c), Lt.get(t.id) || Lt.set(t.id, {}), Lt.get(t.id).endRight = h, Ai(l, t.endLabelRight);
  }
  return n;
}, "insertEdgeLabel");
function Ai(e, t) {
  lt().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
d(Ai, "setTerminalWidth");
var nS = /* @__PURE__ */ d((e, t) => {
  B.debug("Moving label abc88 ", e.id, e.label, xa.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = lt(), { subGraphTitleTotalMargin: n } = Zo(i);
  if (e.label) {
    const a = xa.get(e.id);
    let o = e.x, s = e.y;
    if (r) {
      const l = he.calcLabelPosition(r);
      B.debug(
        "Moving label " + e.label + " from (",
        o,
        ",",
        s,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (o = l.x, s = l.y);
    }
    a.attr("transform", `translate(${o}, ${s + n / 2})`);
  }
  if (e.startLabelLeft) {
    const a = Lt.get(e.id).startLeft;
    let o = e.x, s = e.y;
    if (r) {
      const l = he.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.startLabelRight) {
    const a = Lt.get(e.id).startRight;
    let o = e.x, s = e.y;
    if (r) {
      const l = he.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.endLabelLeft) {
    const a = Lt.get(e.id).endLeft;
    let o = e.x, s = e.y;
    if (r) {
      const l = he.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
  if (e.endLabelRight) {
    const a = Lt.get(e.id).endRight;
    let o = e.x, s = e.y;
    if (r) {
      const l = he.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      o = l.x, s = l.y;
    }
    a.attr("transform", `translate(${o}, ${s})`);
  }
}, "positionEdgeLabel"), aS = /* @__PURE__ */ d((e, t) => {
  const r = e.x, i = e.y, n = Math.abs(t.x - r), a = Math.abs(t.y - i), o = e.width / 2, s = e.height / 2;
  return n >= o || a >= s;
}, "outsideNode"), sS = /* @__PURE__ */ d((e, t, r) => {
  B.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, n = e.y, a = Math.abs(i - r.x), o = e.width / 2;
  let s = r.x < t.x ? o - a : o + a;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(n - t.y) * o > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - n : n - l - t.y;
    s = h * u / c;
    const f = {
      x: r.x < t.x ? r.x + s : r.x - h + s,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return s === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), B.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${s}`, f), f;
  } else {
    r.x < t.x ? s = t.x - o - i : s = i - o - t.x;
    let u = c * s / h, f = r.x < t.x ? r.x + h - s : r.x - h + s, p = r.y < t.y ? r.y + u : r.y - u;
    return B.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${s}`, { _x: f, _y: p }), s === 0 && (f = t.x, p = t.y), h === 0 && (f = t.x), c === 0 && (p = t.y), { x: f, y: p };
  }
}, "intersection"), ch = /* @__PURE__ */ d((e, t) => {
  B.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], n = !1;
  return e.forEach((a) => {
    if (B.info("abc88 checking point", a, t), !aS(t, a) && !n) {
      const o = sS(t, i, a);
      B.debug("abc88 inside", a, i, o), B.debug("abc88 intersection", o, t);
      let s = !1;
      r.forEach((l) => {
        s = s || l.x === o.x && l.y === o.y;
      }), r.some((l) => l.x === o.x && l.y === o.y) ? B.warn("abc88 no intersect", o, r) : r.push(o), n = !0;
    } else
      B.warn("abc88 outside", a, i), i = a, n || r.push(a);
  }), B.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Yg(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const n = e[i - 1], a = e[i], o = e[i + 1];
    (n.x === a.x && a.y === o.y && Math.abs(a.x - o.x) > 5 && Math.abs(a.y - n.y) > 5 || n.y === a.y && a.x === o.x && Math.abs(a.x - n.x) > 5 && Math.abs(a.y - o.y) > 5) && (t.push(a), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
d(Yg, "extractCornerPoints");
var hh = /* @__PURE__ */ d(function(e, t, r) {
  const i = t.x - e.x, n = t.y - e.y, a = Math.sqrt(i * i + n * n), o = r / a;
  return { x: t.x - o * i, y: t.y - o * n };
}, "findAdjacentPoint"), oS = /* @__PURE__ */ d(function(e) {
  const { cornerPointPositions: t } = Yg(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const n = e[i - 1], a = e[i + 1], o = e[i], s = hh(n, o, 5), l = hh(a, o, 5), c = l.x - s.x, h = l.y - s.y;
      r.push(s);
      const u = Math.sqrt(2) * 2;
      let f = { x: o.x, y: o.y };
      if (Math.abs(a.x - n.x) > 10 && Math.abs(a.y - n.y) >= 10) {
        B.debug(
          "Corner point fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
        const p = 5;
        o.x === s.x ? f = {
          x: c < 0 ? s.x - p + u : s.x + p - u,
          y: h < 0 ? s.y - u : s.y + u
        } : f = {
          x: c < 0 ? s.x - u : s.x + u,
          y: h < 0 ? s.y - p + u : s.y + p - u
        };
      } else
        B.debug(
          "Corner point skipping fixing",
          Math.abs(a.x - n.x),
          Math.abs(a.y - n.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), lS = /* @__PURE__ */ d((e, t, r) => {
  const i = e - t - r, n = 2, a = 2, o = n + a, s = Math.floor(i / o), l = Array(s).fill(`${n} ${a}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), cS = /* @__PURE__ */ d(function(e, t, r, i, n, a, o, s = !1) {
  var E;
  const { handDrawnSeed: l } = lt();
  let c = t.points, h = !1;
  const u = n;
  var f = a;
  const p = [];
  for (const F in t.cssCompiledStyles)
    wp(F) || p.push(t.cssCompiledStyles[F]);
  B.debug("UIO intersect check", t.points, f.x, u.x), f.intersect && u.intersect && !s && (c = c.slice(1, t.points.length - 1), c.unshift(u.intersect(c[0])), B.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    f,
    f.intersect(c[c.length - 1])
  ), c.push(f.intersect(c[c.length - 1])));
  const g = btoa(JSON.stringify(c));
  t.toCluster && (B.info("to cluster abc88", r.get(t.toCluster)), c = ch(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (B.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = ch(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((F) => !Number.isNaN(F.y));
  m = oS(m);
  let y = Mn;
  switch (y = Vn, t.curve) {
    case "linear":
      y = Vn;
      break;
    case "basis":
      y = Mn;
      break;
    case "cardinal":
      y = Su;
      break;
    case "bumpX":
      y = Cu;
      break;
    case "bumpY":
      y = _u;
      break;
    case "catmullRom":
      y = Bu;
      break;
    case "monotoneX":
      y = Fu;
      break;
    case "monotoneY":
      y = Ou;
      break;
    case "natural":
      y = Du;
      break;
    case "step":
      y = Iu;
      break;
    case "stepAfter":
      y = Nu;
      break;
    case "stepBefore":
      y = Pu;
      break;
    default:
      y = Mn;
  }
  const { x, y: b } = oC(t), _ = j1().x(x).y(b).curve(y);
  let v;
  switch (t.thickness) {
    case "normal":
      v = "edge-thickness-normal";
      break;
    case "thick":
      v = "edge-thickness-thick";
      break;
    case "invisible":
      v = "edge-thickness-invisible";
      break;
    default:
      v = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      v += " edge-pattern-solid";
      break;
    case "dotted":
      v += " edge-pattern-dotted";
      break;
    case "dashed":
      v += " edge-pattern-dashed";
      break;
    default:
      v += " edge-pattern-solid";
  }
  let w, C = t.curve === "rounded" ? Ug(Gg(m, t), 5) : _(m);
  const S = Array.isArray(t.style) ? t.style : [t.style];
  let A = S.find((F) => F == null ? void 0 : F.startsWith("stroke:")), O = !1;
  if (t.look === "handDrawn") {
    const F = H.svg(e);
    Object.assign([], m);
    const R = F.path(C, {
      roughness: 0.3,
      seed: l
    });
    v += " transition", w = at(R).select("path").attr("id", t.id).attr("class", " " + v + (t.classes ? " " + t.classes : "")).attr("style", S ? S.reduce((P, ot) => P + ";" + ot, "") : "");
    let z = w.attr("d");
    w.attr("d", z), e.node().appendChild(w.node());
  } else {
    const F = p.join(";"), R = S ? S.reduce((ft, ie) => ft + ie + ";", "") : "";
    let z = "";
    t.animate && (z = " edge-animation-fast"), t.animation && (z = " edge-animation-" + t.animation);
    const P = (F ? F + ";" + R + ";" : R) + ";" + (S ? S.reduce((ft, ie) => ft + ";" + ie, "") : "");
    w = e.append("path").attr("d", C).attr("id", t.id).attr(
      "class",
      " " + v + (t.classes ? " " + t.classes : "") + (z ?? "")
    ).attr("style", P), A = (E = P.match(/stroke:([^;]+)/)) == null ? void 0 : E[1], O = t.animate === !0 || !!t.animation || F.includes("animation");
    const ot = w.node(), bt = typeof ot.getTotalLength == "function" ? ot.getTotalLength() : 0, et = Bc[t.arrowTypeStart] || 0, re = Bc[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !O) {
      const ie = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? lS(bt, et, re) : `0 ${et} ${bt - et - re} ${re}`}; stroke-dashoffset: 0;`;
      w.attr("style", ie + w.attr("style"));
    }
  }
  w.attr("data-edge", !0), w.attr("data-et", "edge"), w.attr("data-id", t.id), w.attr("data-points", g), t.showPoints && m.forEach((F) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", F.x).attr("cy", F.y);
  });
  let D = "";
  (lt().flowchart.arrowMarkerAbsolute || lt().state.arrowMarkerAbsolute) && (D = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, D = D.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), B.info("arrowTypeStart", t.arrowTypeStart), B.info("arrowTypeEnd", t.arrowTypeEnd), eS(w, t, D, o, i, A);
  const L = Math.floor(c.length / 2), q = c[L];
  he.isLabelCoordinateInPath(q, w.attr("d")) || (h = !0);
  let M = {};
  return h && (M.updatedPath = c), M.originalPath = t.points, M;
}, "insertEdge");
function Ug(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, n = 1e-5;
  for (let a = 0; a < i; a++) {
    const o = e[a], s = e[a - 1], l = e[a + 1];
    if (a === 0)
      r += `M${o.x},${o.y}`;
    else if (a === i - 1)
      r += `L${o.x},${o.y}`;
    else {
      const c = o.x - s.x, h = o.y - s.y, u = l.x - o.x, f = l.y - o.y, p = Math.hypot(c, h), g = Math.hypot(u, f);
      if (p < n || g < n) {
        r += `L${o.x},${o.y}`;
        continue;
      }
      const m = c / p, y = h / p, x = u / g, b = f / g, _ = m * x + y * b, v = Math.max(-1, Math.min(1, _)), w = Math.acos(v);
      if (w < n || Math.abs(Math.PI - w) < n) {
        r += `L${o.x},${o.y}`;
        continue;
      }
      const C = Math.min(t / Math.sin(w / 2), p / 2, g / 2), S = o.x - m * C, A = o.y - y * C, O = o.x + x * C, D = o.y + b * C;
      r += `L${S},${A}`, r += `Q${o.x},${o.y} ${O},${D}`;
    }
  }
  return r;
}
d(Ug, "generateRoundedPath");
function po(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
d(po, "calculateDeltaAndAngle");
function Gg(e, t) {
  const r = e.map((n) => ({ ...n }));
  if (e.length >= 2 && Ft[t.arrowTypeStart]) {
    const n = Ft[t.arrowTypeStart], a = e[0], o = e[1], { angle: s } = po(a, o), l = n * Math.cos(s), c = n * Math.sin(s);
    r[0].x = a.x + l, r[0].y = a.y + c;
  }
  const i = e.length;
  if (i >= 2 && Ft[t.arrowTypeEnd]) {
    const n = Ft[t.arrowTypeEnd], a = e[i - 1], o = e[i - 2], { angle: s } = po(o, a), l = n * Math.cos(s), c = n * Math.sin(s);
    r[i - 1].x = a.x - l, r[i - 1].y = a.y - c;
  }
  return r;
}
d(Gg, "applyMarkerOffsetsToPoints");
var hS = /* @__PURE__ */ d((e, t, r, i) => {
  t.forEach((n) => {
    TS[n](e, r, i);
  });
}, "insertMarkers"), uS = /* @__PURE__ */ d((e, t, r) => {
  B.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), fS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), pS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), dS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), gS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), mS = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), yS = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), xS = /* @__PURE__ */ d((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), bS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), CS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), _S = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), wS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), kS = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), vS = /* @__PURE__ */ d((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), SS = /* @__PURE__ */ d((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), TS = {
  extension: uS,
  composition: fS,
  aggregation: pS,
  dependency: dS,
  lollipop: gS,
  point: mS,
  circle: yS,
  cross: xS,
  barb: bS,
  only_one: CS,
  zero_or_one: _S,
  one_or_more: wS,
  zero_or_more: kS,
  requirement_arrow: vS,
  requirement_contains: SS
}, BS = hS, AS = {
  common: Jr,
  getConfig: Ot,
  insertCluster: Dv,
  insertEdge: cS,
  insertEdgeLabel: iS,
  insertMarkers: BS,
  insertNode: jg,
  interpolateToCurve: el,
  labelHelper: Q,
  log: B,
  positionEdgeLabel: nS
}, Ui = {}, Xg = /* @__PURE__ */ d((e) => {
  for (const t of e)
    Ui[t.name] = t;
}, "registerLayoutLoaders"), LS = /* @__PURE__ */ d(() => {
  Xg([
    {
      name: "dagre",
      loader: /* @__PURE__ */ d(async () => await import("./dagre-6UL2VRFP-_VdUAU1r.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ d(async () => await import("./cose-bilkent-S5V4N54A-CR8g-Ajg.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
LS();
var mL = /* @__PURE__ */ d(async (e, t) => {
  if (!(e.layoutAlgorithm in Ui))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  const r = Ui[e.layoutAlgorithm];
  return (await r.loader()).render(e, t, AS, {
    algorithm: r.algorithm
  });
}, "render"), yL = /* @__PURE__ */ d((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in Ui)
    return e;
  if (t in Ui)
    return B.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), Vg = "comm", Zg = "rule", Kg = "decl", MS = "@import", ES = "@namespace", $S = "@keyframes", FS = "@layer", Qg = Math.abs, _l = String.fromCharCode;
function Jg(e) {
  return e.trim();
}
function Rn(e, t, r) {
  return e.replace(t, r);
}
function OS(e, t, r) {
  return e.indexOf(t, r);
}
function Rr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kr(e, t, r) {
  return e.slice(t, r);
}
function xe(e) {
  return e.length;
}
function RS(e) {
  return e.length;
}
function wn(e, t) {
  return t.push(e), e;
}
var ja = 1, Qr = 1, tm = 0, ee = 0, _t = 0, ni = "";
function wl(e, t, r, i, n, a, o, s) {
  return { value: e, root: t, parent: r, type: i, props: n, children: a, line: ja, column: Qr, length: o, return: "", siblings: s };
}
function DS() {
  return _t;
}
function IS() {
  return _t = ee > 0 ? Rr(ni, --ee) : 0, Qr--, _t === 10 && (Qr = 1, ja--), _t;
}
function fe() {
  return _t = ee < tm ? Rr(ni, ee++) : 0, Qr++, _t === 10 && (Qr = 1, ja++), _t;
}
function ze() {
  return Rr(ni, ee);
}
function Dn() {
  return ee;
}
function Ya(e, t) {
  return Kr(ni, e, t);
}
function Gi(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function PS(e) {
  return ja = Qr = 1, tm = xe(ni = e), ee = 0, [];
}
function NS(e) {
  return ni = "", e;
}
function _s(e) {
  return Jg(Ya(ee - 1, go(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zS(e) {
  for (; (_t = ze()) && _t < 33; )
    fe();
  return Gi(e) > 2 || Gi(_t) > 3 ? "" : " ";
}
function qS(e, t) {
  for (; --t && fe() && !(_t < 48 || _t > 102 || _t > 57 && _t < 65 || _t > 70 && _t < 97); )
    ;
  return Ya(e, Dn() + (t < 6 && ze() == 32 && fe() == 32));
}
function go(e) {
  for (; fe(); )
    switch (_t) {
      // ] ) " '
      case e:
        return ee;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && go(_t);
        break;
      // (
      case 40:
        e === 41 && go(e);
        break;
      // \
      case 92:
        fe();
        break;
    }
  return ee;
}
function WS(e, t) {
  for (; fe() && e + _t !== 57; )
    if (e + _t === 84 && ze() === 47)
      break;
  return "/*" + Ya(t, ee - 1) + "*" + _l(e === 47 ? e : fe());
}
function HS(e) {
  for (; !Gi(ze()); )
    fe();
  return Ya(e, ee);
}
function jS(e) {
  return NS(In("", null, null, null, [""], e = PS(e), 0, [0], e));
}
function In(e, t, r, i, n, a, o, s, l) {
  for (var c = 0, h = 0, u = o, f = 0, p = 0, g = 0, m = 1, y = 1, x = 1, b = 0, _ = "", v = n, w = a, C = i, S = _; y; )
    switch (g = b, b = fe()) {
      // (
      case 40:
        if (g != 108 && Rr(S, u - 1) == 58) {
          OS(S += Rn(_s(b), "&", "&\f"), "&\f", Qg(c ? s[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += _s(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += zS(g);
        break;
      // \
      case 92:
        S += qS(Dn() - 1, 7);
        continue;
      // /
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            wn(YS(WS(fe(), Dn()), t, r, l), l), (Gi(g || 1) == 5 || Gi(ze() || 1) == 5) && xe(S) && Kr(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * m:
        s[c++] = xe(S) * x;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            x == -1 && (S = Rn(S, /\f/g, "")), p > 0 && (xe(S) - u || m === 0 && g === 47) && wn(p > 32 ? fh(S + ";", i, r, u - 1, l) : fh(Rn(S, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (wn(C = uh(S, t, r, c, h, n, s, _, v = [], w = [], u, a), a), b === 123)
              if (h === 0)
                In(S, t, C, C, v, a, u, s, w);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Rr(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Rr(S, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? In(e, C, C, i && wn(uh(e, C, C, 0, 0, n, s, _, n, v = [], u, w), w), n, w, u, s, i ? v : w) : In(S, C, C, C, [""], w, 0, s, w);
              }
        }
        c = h = p = 0, m = x = 1, _ = S = "", u = o;
        break;
      // :
      case 58:
        u = 1 + xe(S), p = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && IS() == 125)
            continue;
        }
        switch (S += _l(b), b * m) {
          // &
          case 38:
            x = h > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (xe(S) - 1) * x, x = 1;
            break;
          // @
          case 64:
            ze() === 45 && (S += _s(fe())), f = ze(), h = u = xe(_ = S += HS(Dn())), b++;
            break;
          // -
          case 45:
            g === 45 && xe(S) == 2 && (m = 0);
        }
    }
  return a;
}
function uh(e, t, r, i, n, a, o, s, l, c, h, u) {
  for (var f = n - 1, p = n === 0 ? a : [""], g = RS(p), m = 0, y = 0, x = 0; m < i; ++m)
    for (var b = 0, _ = Kr(e, f + 1, f = Qg(y = o[m])), v = e; b < g; ++b)
      (v = Jg(y > 0 ? p[b] + " " + _ : Rn(_, /&\f/g, p[b]))) && (l[x++] = v);
  return wl(e, t, r, n === 0 ? Zg : s, l, c, h, u);
}
function YS(e, t, r, i) {
  return wl(e, t, r, Vg, _l(DS()), Kr(e, 2, -2), 0, i);
}
function fh(e, t, r, i, n) {
  return wl(e, t, r, Kg, Kr(e, 0, i), Kr(e, i + 1, -1), i, n);
}
function mo(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function US(e, t, r, i) {
  switch (e.type) {
    case FS:
      if (e.children.length) break;
    case MS:
    case ES:
    case Kg:
      return e.return = e.return || e.value;
    case Vg:
      return "";
    case $S:
      return e.return = e.value + "{" + mo(e.children, i) + "}";
    case Zg:
      if (!xe(e.value = e.props.join(","))) return "";
  }
  return xe(r = mo(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
var GS = Tp(Object.keys, Object), XS = Object.prototype, VS = XS.hasOwnProperty;
function ZS(e) {
  if (!Oa(e))
    return GS(e);
  var t = [];
  for (var r in Object(e))
    VS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var yo = br(ke, "DataView"), xo = br(ke, "Promise"), bo = br(ke, "Set"), Co = br(ke, "WeakMap"), ph = "[object Map]", KS = "[object Object]", dh = "[object Promise]", gh = "[object Set]", mh = "[object WeakMap]", yh = "[object DataView]", QS = xr(yo), JS = xr(ji), tT = xr(xo), eT = xr(bo), rT = xr(Co), rr = ei;
(yo && rr(new yo(new ArrayBuffer(1))) != yh || ji && rr(new ji()) != ph || xo && rr(xo.resolve()) != dh || bo && rr(new bo()) != gh || Co && rr(new Co()) != mh) && (rr = function(e) {
  var t = ei(e), r = t == KS ? e.constructor : void 0, i = r ? xr(r) : "";
  if (i)
    switch (i) {
      case QS:
        return yh;
      case JS:
        return ph;
      case tT:
        return dh;
      case eT:
        return gh;
      case rT:
        return mh;
    }
  return t;
});
var iT = "[object Map]", nT = "[object Set]", aT = Object.prototype, sT = aT.hasOwnProperty;
function xh(e) {
  if (e == null)
    return !0;
  if (Ra(e) && (la(e) || typeof e == "string" || typeof e.splice == "function" || Jo(e) || tl(e) || oa(e)))
    return !e.length;
  var t = rr(e);
  if (t == iT || t == nT)
    return !e.size;
  if (Oa(e))
    return !ZS(e).length;
  for (var r in e)
    if (sT.call(e, r))
      return !1;
  return !0;
}
var em = "c4", oT = /* @__PURE__ */ d((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), lT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./c4Diagram-YG6GDRKO-drzsGObw.js");
  return { id: em, diagram: e };
}, "loader"), cT = {
  id: em,
  detector: oT,
  loader: lT
}, hT = cT, rm = "flowchart", uT = /* @__PURE__ */ d((e, t) => {
  var r, i;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? !1 : /^\s*graph/.test(e);
}, "detector"), fT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BSc3Uw9F.js");
  return { id: rm, diagram: e };
}, "loader"), pT = {
  id: rm,
  detector: uT,
  loader: fT
}, dT = pT, im = "flowchart-v2", gT = /* @__PURE__ */ d((e, t) => {
  var r, i, n;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" ? !1 : (((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && ((n = t == null ? void 0 : t.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e));
}, "detector"), mT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BSc3Uw9F.js");
  return { id: im, diagram: e };
}, "loader"), yT = {
  id: im,
  detector: gT,
  loader: mT
}, xT = yT, nm = "er", bT = /* @__PURE__ */ d((e) => /^\s*erDiagram/.test(e), "detector"), CT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./erDiagram-Q2GNP2WA-DHevfOZs.js");
  return { id: nm, diagram: e };
}, "loader"), _T = {
  id: nm,
  detector: bT,
  loader: CT
}, wT = _T, am = "gitGraph", kT = /* @__PURE__ */ d((e) => /^\s*gitGraph/.test(e), "detector"), vT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-NY62KEGX-Bq7bqGSp.js");
  return { id: am, diagram: e };
}, "loader"), ST = {
  id: am,
  detector: kT,
  loader: vT
}, TT = ST, sm = "gantt", BT = /* @__PURE__ */ d((e) => /^\s*gantt/.test(e), "detector"), AT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./ganttDiagram-LVOFAZNH-2QFg5U66.js");
  return { id: sm, diagram: e };
}, "loader"), LT = {
  id: sm,
  detector: BT,
  loader: AT
}, MT = LT, om = "info", ET = /* @__PURE__ */ d((e) => /^\s*info/.test(e), "detector"), $T = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./infoDiagram-F6ZHWCRC-5-jnWCuV.js");
  return { id: om, diagram: e };
}, "loader"), FT = {
  id: om,
  detector: ET,
  loader: $T
}, lm = "pie", OT = /* @__PURE__ */ d((e) => /^\s*pie/.test(e), "detector"), RT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./pieDiagram-ADFJNKIX-Cn3rwLsF.js");
  return { id: lm, diagram: e };
}, "loader"), DT = {
  id: lm,
  detector: OT,
  loader: RT
}, cm = "quadrantChart", IT = /* @__PURE__ */ d((e) => /^\s*quadrantChart/.test(e), "detector"), PT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./quadrantDiagram-AYHSOK5B-_VCsNqJs.js");
  return { id: cm, diagram: e };
}, "loader"), NT = {
  id: cm,
  detector: IT,
  loader: PT
}, zT = NT, hm = "xychart", qT = /* @__PURE__ */ d((e) => /^\s*xychart(-beta)?/.test(e), "detector"), WT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./xychartDiagram-PRI3JC2R-B-neMN-6.js");
  return { id: hm, diagram: e };
}, "loader"), HT = {
  id: hm,
  detector: qT,
  loader: WT
}, jT = HT, um = "requirement", YT = /* @__PURE__ */ d((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), UT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./requirementDiagram-UZGBJVZJ-DbyW8ki6.js");
  return { id: um, diagram: e };
}, "loader"), GT = {
  id: um,
  detector: YT,
  loader: UT
}, XT = GT, fm = "sequence", VT = /* @__PURE__ */ d((e) => /^\s*sequenceDiagram/.test(e), "detector"), ZT = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./sequenceDiagram-WL72ISMW-CNtsZspM.js");
  return { id: fm, diagram: e };
}, "loader"), KT = {
  id: fm,
  detector: VT,
  loader: ZT
}, QT = KT, pm = "class", JT = /* @__PURE__ */ d((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e);
}, "detector"), tB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./classDiagram-2ON5EDUG-B96euMN1.js");
  return { id: pm, diagram: e };
}, "loader"), eB = {
  id: pm,
  detector: JT,
  loader: tB
}, rB = eB, dm = "classDiagram", iB = /* @__PURE__ */ d((e, t) => {
  var r;
  return /^\s*classDiagram/.test(e) && ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e);
}, "detector"), nB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./classDiagram-v2-WZHVMYZB-B96euMN1.js");
  return { id: dm, diagram: e };
}, "loader"), aB = {
  id: dm,
  detector: iB,
  loader: nB
}, sB = aB, gm = "state", oB = /* @__PURE__ */ d((e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e);
}, "detector"), lB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./stateDiagram-FKZM4ZOC-Dfnaz4LF.js");
  return { id: gm, diagram: e };
}, "loader"), cB = {
  id: gm,
  detector: oB,
  loader: lB
}, hB = cB, mm = "stateDiagram", uB = /* @__PURE__ */ d((e, t) => {
  var r;
  return !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
}, "detector"), fB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-4FDKWEC3-BnUuTs9t.js");
  return { id: mm, diagram: e };
}, "loader"), pB = {
  id: mm,
  detector: uB,
  loader: fB
}, dB = pB, ym = "journey", gB = /* @__PURE__ */ d((e) => /^\s*journey/.test(e), "detector"), mB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./journeyDiagram-XKPGCS4Q-BbFObixO.js");
  return { id: ym, diagram: e };
}, "loader"), yB = {
  id: ym,
  detector: gB,
  loader: mB
}, xB = yB, bB = /* @__PURE__ */ d((e, t, r) => {
  B.debug(`rendering svg for syntax error
`);
  const i = J1(t), n = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Hh(i, 100, 512, !0), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), xm = { draw: bB }, CB = xm, _B = {
  db: {},
  renderer: xm,
  parser: {
    parse: /* @__PURE__ */ d(() => {
    }, "parse")
  }
}, wB = _B, bm = "flowchart-elk", kB = /* @__PURE__ */ d((e, t = {}) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*(flowchart|graph)/.test(e) && ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? (t.layout = "elk", !0) : !1
  );
}, "detector"), vB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./flowDiagram-NV44I4VS-BSc3Uw9F.js");
  return { id: bm, diagram: e };
}, "loader"), SB = {
  id: bm,
  detector: kB,
  loader: vB
}, TB = SB, Cm = "timeline", BB = /* @__PURE__ */ d((e) => /^\s*timeline/.test(e), "detector"), AB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./timeline-definition-IT6M3QCI-85Hv6o77.js");
  return { id: Cm, diagram: e };
}, "loader"), LB = {
  id: Cm,
  detector: BB,
  loader: AB
}, MB = LB, _m = "mindmap", EB = /* @__PURE__ */ d((e) => /^\s*mindmap/.test(e), "detector"), $B = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./mindmap-definition-VGOIOE7T-FS8TZGBi.js");
  return { id: _m, diagram: e };
}, "loader"), FB = {
  id: _m,
  detector: EB,
  loader: $B
}, OB = FB, wm = "kanban", RB = /* @__PURE__ */ d((e) => /^\s*kanban/.test(e), "detector"), DB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./kanban-definition-3W4ZIXB7-C5PYXUcC.js");
  return { id: wm, diagram: e };
}, "loader"), IB = {
  id: wm,
  detector: RB,
  loader: DB
}, PB = IB, km = "sankey", NB = /* @__PURE__ */ d((e) => /^\s*sankey(-beta)?/.test(e), "detector"), zB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./sankeyDiagram-TZEHDZUN-zntOwcOo.js");
  return { id: km, diagram: e };
}, "loader"), qB = {
  id: km,
  detector: NB,
  loader: zB
}, WB = qB, vm = "packet", HB = /* @__PURE__ */ d((e) => /^\s*packet(-beta)?/.test(e), "detector"), jB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./diagram-S2PKOQOG-CXj7zBvc.js");
  return { id: vm, diagram: e };
}, "loader"), YB = {
  id: vm,
  detector: HB,
  loader: jB
}, Sm = "radar", UB = /* @__PURE__ */ d((e) => /^\s*radar-beta/.test(e), "detector"), GB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./diagram-QEK2KX5R-CwECdriZ.js");
  return { id: Sm, diagram: e };
}, "loader"), XB = {
  id: Sm,
  detector: UB,
  loader: GB
}, Tm = "block", VB = /* @__PURE__ */ d((e) => /^\s*block(-beta)?/.test(e), "detector"), ZB = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./blockDiagram-VD42YOAC-8MJ_sfaD.js");
  return { id: Tm, diagram: e };
}, "loader"), KB = {
  id: Tm,
  detector: VB,
  loader: ZB
}, QB = KB, Bm = "architecture", JB = /* @__PURE__ */ d((e) => /^\s*architecture/.test(e), "detector"), tA = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./architectureDiagram-VXUJARFQ-C6g1ZzUb.js");
  return { id: Bm, diagram: e };
}, "loader"), eA = {
  id: Bm,
  detector: JB,
  loader: tA
}, rA = eA, Am = "treemap", iA = /* @__PURE__ */ d((e) => /^\s*treemap/.test(e), "detector"), nA = /* @__PURE__ */ d(async () => {
  const { diagram: e } = await import("./diagram-PSM6KHXK-DiuzifUb.js");
  return { id: Am, diagram: e };
}, "loader"), aA = {
  id: Am,
  detector: iA,
  loader: nA
}, bh = !1, Ua = /* @__PURE__ */ d(() => {
  bh || (bh = !0, Wn("error", wB, (e) => e.toLowerCase().trim() === "error"), Wn(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ d(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ d(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ d(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ d(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), Ts(TB, OB, rA), Ts(
    hT,
    PB,
    sB,
    rB,
    wT,
    MT,
    FT,
    DT,
    XT,
    QT,
    xT,
    dT,
    MB,
    TT,
    dB,
    hB,
    xB,
    zT,
    WB,
    YB,
    jT,
    QB,
    XB,
    aA
  ));
}, "addDiagrams"), sA = /* @__PURE__ */ d(async () => {
  B.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(hr).map(async ([r, { detector: i, loader: n }]) => {
      if (n)
        try {
          Ms(r);
        } catch {
          try {
            const { diagram: a, id: o } = await n();
            Wn(o, a, i);
          } catch (a) {
            throw B.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete hr[r], a;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    B.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      B.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), oA = "graphics-document document";
function Lm(e, t) {
  e.attr("role", oA), t !== "" && e.attr("aria-roledescription", t);
}
d(Lm, "setA11yDiagramInfo");
function Mm(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const n = `chart-desc-${i}`;
      e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(r);
    }
    if (t) {
      const n = `chart-title-${i}`;
      e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
    }
  }
}
d(Mm, "addSVGa11yTitleDescription");
var cr, _o = (cr = class {
  constructor(t, r, i, n, a) {
    this.type = t, this.text = r, this.db = i, this.parser = n, this.renderer = a;
  }
  static async fromText(t, r = {}) {
    var c, h;
    const i = Ot(), n = vo(t, i);
    t = ak(t) + `
`;
    try {
      Ms(n);
    } catch {
      const u = L0(n);
      if (!u)
        throw new Eh(`Diagram ${n} not found.`);
      const { id: f, diagram: p } = await u();
      Wn(f, p);
    }
    const { db: a, parser: o, renderer: s, init: l } = Ms(n);
    return o.parser && (o.parser.yy = a), (c = a.clear) == null || c.call(a), l == null || l(i), r.title && ((h = a.setDiagramTitle) == null || h.call(a, r.title)), await o.parse(t), new cr(n, t, a, o, s);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, d(cr, "Diagram"), cr), Ch = [], lA = /* @__PURE__ */ d(() => {
  Ch.forEach((e) => {
    e();
  }), Ch = [];
}, "attachFunctions"), cA = /* @__PURE__ */ d((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Em(e) {
  const t = e.match(Mh);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = sC(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: aC
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
d(Em, "extractFrontMatter");
var hA = /* @__PURE__ */ d((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), uA = /* @__PURE__ */ d((e) => {
  const { text: t, metadata: r } = Em(e), { displayMode: i, title: n, config: a = {} } = r;
  return i && (a.gantt || (a.gantt = {}), a.gantt.displayMode = i), { title: n, config: a, text: t };
}, "processFrontmatter"), fA = /* @__PURE__ */ d((e) => {
  const t = he.detectInit(e) ?? {}, r = he.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : (r == null ? void 0 : r.type) === "wrap" && (t.wrap = !0), {
    text: Uw(e),
    directive: t
  };
}, "processDirectives");
function kl(e) {
  const t = hA(e), r = uA(t), i = fA(r.text), n = sl(r.config, i.directive);
  return e = cA(i.text), {
    code: e,
    title: r.title,
    config: n
  };
}
d(kl, "preprocessDiagram");
function $m(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
d($m, "toBase64");
var pA = 5e4, dA = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", gA = "sandbox", mA = "loose", yA = "http://www.w3.org/2000/svg", xA = "http://www.w3.org/1999/xlink", bA = "http://www.w3.org/1999/xhtml", CA = "100%", _A = "100%", wA = "border:0;margin:0;", kA = "margin:0", vA = "allow-top-navigation-by-user-activation allow-popups", SA = 'The "iframe" tag is not supported by your browser.', TA = ["foreignobject"], BA = ["dominant-baseline"];
function vl(e) {
  const t = kl(e);
  return zn(), Y0(t.config ?? {}), t;
}
d(vl, "processAndSetConfigs");
async function Fm(e, t) {
  Ua();
  try {
    const { code: r, config: i } = vl(e);
    return { diagramType: (await Rm(r)).type, config: i };
  } catch (r) {
    if (t != null && t.suppressErrors)
      return !1;
    throw r;
  }
}
d(Fm, "parse");
var _h = /* @__PURE__ */ d((e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles"), AA = /* @__PURE__ */ d((e, t = /* @__PURE__ */ new Map()) => {
  var i;
  let r = "";
  if (e.themeCSS !== void 0 && (r += `
${e.themeCSS}`), e.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
    const s = e.htmlLabels ?? ((i = e.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      xh(l.styles) || s.forEach((c) => {
        r += _h(l.id, c, l.styles);
      }), xh(l.textStyles) || (r += _h(
        l.id,
        "tspan",
        ((l == null ? void 0 : l.textStyles) || []).map((c) => c.replace("color", "fill"))
      ));
    });
  }
  return r;
}, "createCssStyles"), LA = /* @__PURE__ */ d((e, t, r, i) => {
  const n = AA(e, r), a = uy(t, n, e.themeVariables);
  return mo(jS(`${i}{${a}}`), US);
}, "createUserStyles"), MA = /* @__PURE__ */ d((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Cr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), EA = /* @__PURE__ */ d((e = "", t) => {
  var n, a;
  const r = (a = (n = t == null ? void 0 : t.viewBox) == null ? void 0 : n.baseVal) != null && a.height ? t.viewBox.baseVal.height + "px" : _A, i = $m(`<body style="${kA}">${e}</body>`);
  return `<iframe style="width:${CA};height:${r};${wA}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${vA}">
  ${SA}
</iframe>`;
}, "putIntoIFrame"), wh = /* @__PURE__ */ d((e, t, r, i, n) => {
  const a = e.append("div");
  a.attr("id", r), i && a.attr("style", i);
  const o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", yA);
  return n && o.attr("xmlns:xlink", n), o.append("g"), e;
}, "appendDivSvgG");
function wo(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
d(wo, "sandboxedIframe");
var $A = /* @__PURE__ */ d((e, t, r, i) => {
  var n, a, o;
  (n = e.getElementById(t)) == null || n.remove(), (a = e.getElementById(r)) == null || a.remove(), (o = e.getElementById(i)) == null || o.remove();
}, "removeExistingElements"), FA = /* @__PURE__ */ d(async function(e, t, r) {
  var q, M, E, F, R, z;
  Ua();
  const i = vl(t);
  t = i.code;
  const n = Ot();
  B.debug(n), t.length > ((n == null ? void 0 : n.maxTextSize) ?? pA) && (t = dA);
  const a = "#" + e, o = "i" + e, s = "#" + o, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ d(() => {
    const ot = at(f ? s : c).node();
    ot && "remove" in ot && ot.remove();
  }, "removeTempElements");
  let u = at("body");
  const f = n.securityLevel === gA, p = n.securityLevel === mA, g = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const P = wo(at(r), o);
      u = at(P.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = at(r);
    wh(u, e, l, `font-family: ${g}`, xA);
  } else {
    if ($A(document, e, l, o), f) {
      const P = wo(at("body"), o);
      u = at(P.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = at("body");
    wh(u, e, l);
  }
  let m, y;
  try {
    m = await _o.fromText(t, { title: i.title });
  } catch (P) {
    if (n.suppressErrorRendering)
      throw h(), P;
    m = await _o.fromText("error"), y = P;
  }
  const x = u.select(c).node(), b = m.type, _ = x.firstChild, v = _.firstChild, w = (M = (q = m.renderer).getClasses) == null ? void 0 : M.call(q, t, m), C = LA(n, b, w, a), S = document.createElement("style");
  S.innerHTML = C, _.insertBefore(S, v);
  try {
    await m.renderer.draw(t, e, Hl.version, m);
  } catch (P) {
    throw n.suppressErrorRendering ? h() : CB.draw(t, e, Hl.version), P;
  }
  const A = u.select(`${c} svg`), O = (F = (E = m.db).getAccTitle) == null ? void 0 : F.call(E), D = (z = (R = m.db).getAccDescription) == null ? void 0 : z.call(R);
  Dm(b, A, O, D), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", bA);
  let L = u.select(c).node().innerHTML;
  if (B.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), L = MA(L, f, St(n.arrowMarkerAbsolute)), f) {
    const P = u.select(c + " svg").node();
    L = EA(L, P);
  } else p || (L = jr.sanitize(L, {
    ADD_TAGS: TA,
    ADD_ATTR: BA,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (lA(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: L,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Om(e = {}) {
  var i;
  const t = kt({}, e);
  t != null && t.fontFamily && !((i = t.themeVariables) != null && i.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), H0(t), t != null && t.theme && t.theme in $e ? t.themeVariables = $e[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = $e.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? W0(t) : Dh();
  ko(r.logLevel), Ua();
}
d(Om, "initialize");
var Rm = /* @__PURE__ */ d((e, t = {}) => {
  const { code: r } = kl(e);
  return _o.fromText(r, t);
}, "getDiagramFromText");
function Dm(e, t, r, i) {
  Lm(t, e), Mm(t, r, i, t.attr("id"));
}
d(Dm, "addA11yInfo");
var mr = Object.freeze({
  render: FA,
  parse: Fm,
  getDiagramFromText: Rm,
  initialize: Om,
  getConfig: Ot,
  setConfig: Ih,
  getSiteConfig: Dh,
  updateSiteConfig: j0,
  reset: /* @__PURE__ */ d(() => {
    zn();
  }, "reset"),
  globalReset: /* @__PURE__ */ d(() => {
    zn(Yr);
  }, "globalReset"),
  defaultConfig: Yr
});
ko(Ot().logLevel);
zn(Ot());
var OA = /* @__PURE__ */ d((e, t, r) => {
  B.warn(e), al(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Im = /* @__PURE__ */ d(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await RA(e);
  } catch (t) {
    if (al(t) && B.error(t.str), Zt.parseError && Zt.parseError(t), !e.suppressErrors)
      throw B.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), RA = /* @__PURE__ */ d(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = mr.getConfig();
  B.debug(`${e ? "" : "No "}Callback function found`);
  let n;
  if (r)
    n = r;
  else if (t)
    n = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  B.debug(`Found ${n.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (B.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), mr.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const a = new he.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let o;
  const s = [];
  for (const l of Array.from(n)) {
    if (B.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${a.next()}`;
    o = l.innerHTML, o = nd(he.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = he.detectInit(o);
    h && B.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: f } = await qm(c, o, l);
      l.innerHTML = u, e && await e(c), f && f(l);
    } catch (u) {
      OA(u, s, Zt.parseError);
    }
  }
  if (s.length > 0)
    throw s[0];
}, "runThrowsErrors"), Pm = /* @__PURE__ */ d(function(e) {
  mr.initialize(e);
}, "initialize"), DA = /* @__PURE__ */ d(async function(e, t, r) {
  B.warn("mermaid.init is deprecated. Please use run instead."), e && Pm(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Im(i);
}, "init"), IA = /* @__PURE__ */ d(async (e, {
  lazyLoad: t = !0
} = {}) => {
  Ua(), Ts(...e), t === !1 && await sA();
}, "registerExternalDiagrams"), Nm = /* @__PURE__ */ d(function() {
  if (Zt.startOnLoad) {
    const { startOnLoad: e } = mr.getConfig();
    e && Zt.run().catch((t) => B.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Nm, !1);
var PA = /* @__PURE__ */ d(function(e) {
  Zt.parseError = e;
}, "setParseErrorHandler"), ba = [], ws = !1, zm = /* @__PURE__ */ d(async () => {
  if (!ws) {
    for (ws = !0; ba.length > 0; ) {
      const e = ba.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          B.error("Error executing queue", t);
        }
    }
    ws = !1;
  }
}, "executeQueue"), NA = /* @__PURE__ */ d(async (e, t) => new Promise((r, i) => {
  const n = /* @__PURE__ */ d(() => new Promise((a, o) => {
    mr.parse(e, t).then(
      (s) => {
        a(s), r(s);
      },
      (s) => {
        var l;
        B.error("Error parsing", s), (l = Zt.parseError) == null || l.call(Zt, s), o(s), i(s);
      }
    );
  }), "performCall");
  ba.push(n), zm().catch(i);
}), "parse"), qm = /* @__PURE__ */ d((e, t, r) => new Promise((i, n) => {
  const a = /* @__PURE__ */ d(() => new Promise((o, s) => {
    mr.render(e, t, r).then(
      (l) => {
        o(l), i(l);
      },
      (l) => {
        var c;
        B.error("Error parsing", l), (c = Zt.parseError) == null || c.call(Zt, l), s(l), n(l);
      }
    );
  }), "performCall");
  ba.push(a), zm().catch(n);
}), "render"), zA = /* @__PURE__ */ d(() => Object.keys(hr).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), Zt = {
  startOnLoad: !0,
  mermaidAPI: mr,
  parse: NA,
  render: qm,
  init: DA,
  run: Im,
  registerExternalDiagrams: IA,
  registerLayoutLoaders: Xg,
  initialize: Pm,
  parseError: void 0,
  contentLoaded: Nm,
  setParseErrorHandler: PA,
  detectType: vo,
  registerIconPacks: cv,
  getRegisteredDiagramsMetadata: zA
}, qA = Zt;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
const xL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qA
}, Symbol.toStringTag, { value: "Module" }));
export {
  jh as $,
  Mi as A,
  Jm as B,
  Cy as C,
  sl as D,
  Ot as E,
  Rh as F,
  Kw as G,
  J1 as H,
  Hl as I,
  aC as J,
  R0 as K,
  Ur as L,
  YA as M,
  Da as N,
  ty as O,
  So as P,
  tc as Q,
  j1 as R,
  Mn as S,
  Zw as T,
  Vi as U,
  ly as V,
  Xi as W,
  W as X,
  Z as Y,
  Ww as Z,
  d as _,
  dy as a,
  Xt as a$,
  z1 as a0,
  Po as a1,
  KA as a2,
  tL as a3,
  Ar as a4,
  Cc as a5,
  bc as a6,
  rL as a7,
  eL as a8,
  JA as a9,
  iS as aA,
  Pw as aB,
  M_ as aC,
  Ew as aD,
  Ko as aE,
  xh as aF,
  uv as aG,
  q1 as aH,
  rn as aI,
  cv as aJ,
  lv as aK,
  Oo as aL,
  Ne as aM,
  pc as aN,
  Cb as aO,
  Ii as aP,
  yr as aQ,
  Nw as aR,
  Op as aS,
  Ea as aT,
  Ra as aU,
  la as aV,
  Dp as aW,
  Fp as aX,
  gw as aY,
  Y as aZ,
  wp as a_,
  VA as aa,
  ZA as ab,
  nL as ac,
  QA as ad,
  iL as ae,
  jA as af,
  Dv as ag,
  jg as ah,
  dL as ai,
  oC as aj,
  St as ak,
  Ge as al,
  Zo as am,
  md as an,
  Cr as ao,
  Wp as ap,
  tt as aq,
  Ce as ar,
  BS as as,
  pL as at,
  gL as au,
  uL as av,
  U as aw,
  fL as ax,
  cS as ay,
  nS as az,
  py as b,
  pb as b0,
  Fo as b1,
  nu as b2,
  Ki as b3,
  ou as b4,
  XA as b5,
  Iw as b6,
  Mw as b7,
  y_ as b8,
  Qo as b9,
  Oa as bA,
  xL as bB,
  uw as ba,
  qw as bb,
  tn as bc,
  ei as bd,
  aa as be,
  ww as bf,
  ZS as bg,
  Ji as bh,
  oa as bi,
  mw as bj,
  Bp as bk,
  C_ as bl,
  __ as bm,
  rr as bn,
  zc as bo,
  w_ as bp,
  Jo as bq,
  b_ as br,
  S_ as bs,
  ri as bt,
  Ue as bu,
  Rc as bv,
  tl as bw,
  Lp as bx,
  bo as by,
  zw as bz,
  lt as c,
  at as d,
  Hh as e,
  kt as f,
  my as g,
  Re as h,
  te as i,
  pC as j,
  Jr as k,
  B as l,
  jp as m,
  UA as n,
  yL as o,
  yy as p,
  xy as q,
  mL as r,
  gy as s,
  sC as t,
  he as u,
  tS as v,
  tk as w,
  aL as x,
  fy as y,
  GA as z
};
