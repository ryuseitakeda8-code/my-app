var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/generate.js
async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const { words, partStyle, cefrLevel } = body;
    if (!words || words.length === 0) {
      return new Response(
        JSON.stringify({ error: "\u5358\u8A9E\u304C\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const part4Scenarios = [
      "news report",
      "airport announcement about a delay or gate change",
      "weather forecast",
      "radio commercial",
      "voicemail message",
      "train or bus service update",
      "store announcement",
      "tour guidance message",
      "museum or event information",
      "public safety notice",
      "podcast or radio program introduction",
      "technical support phone message"
    ];
    const randomPart4Scenario = part4Scenarios[Math.floor(Math.random() * part4Scenarios.length)];
    let prompt = "";
    if (partStyle === "Part4") {
      prompt = `
\u3042\u306A\u305F\u306FTOEIC Listening Part 4 \u554F\u984C\u4F5C\u6210\u8005\u3067\u3059\u3002
\u4EE5\u4E0B\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\u554F\u984C\u3092JSON\u5F62\u5F0F\u306E\u307F\u30671\u3064\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002

\u3010\u5BFE\u8C61\u5358\u8A9E\u3011
${words.join(", ")}

\u3010\u96E3\u6613\u5EA6\u3011
CEFR ${cefrLevel}

\u3010\u5F62\u5F0F\u3011
TOEIC Part 4\u98A8\u306E\u4E00\u65B9\u5411\u30CA\u30EC\u30FC\u30B7\u30E7\u30F3

\u3010\u4ECA\u56DE\u306E\u30B8\u30E3\u30F3\u30EB\u3011
${randomPart4Scenario}

\u3010\u5FC5\u9808\u6761\u4EF6\u3011
\u30FB\u30CB\u30E5\u30FC\u30B9\u3001\u7559\u5B88\u96FB\u3001\u30E9\u30B8\u30AA\u5E83\u544A\u3001\u5929\u6C17\u4E88\u5831\u3001\u98DB\u884C\u6A5F\u306E\u9045\u5EF6\u6848\u5185\u3001\u4EA4\u901A\u60C5\u5831\u3001\u5E97\u8217\u653E\u9001\u3001\u89B3\u5149\u6848\u5185\u306A\u3069\u3001TOEIC Part 4 \u3067\u81EA\u7136\u306A\u984C\u6750\u306B\u3059\u308B
\u30FB"Good morning, everyone" \u3067\u306F\u59CB\u3081\u306A\u3044
\u30FB\u6BCE\u56DE\u3067\u304D\u308B\u3060\u3051\u7570\u306A\u308B\u66F8\u304D\u51FA\u3057\u306B\u3059\u308B
\u30FB\u30CA\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u81EA\u7136\u306A\u82F1\u8A9E\u3067\u3001TOEIC\u3089\u3057\u3044\u5B9F\u52D9\u30FB\u6848\u5185\u30FB\u653E\u9001\u6587\u4F53\u306B\u3059\u308B
\u30FB80\u301C140\u8A9E\u7A0B\u5EA6
\u30FB\u65E5\u6642\u3001\u5834\u6240\u3001\u76EE\u7684\u3001\u4F9D\u983C\u4E8B\u9805\u306A\u3069\u306E\u8981\u7D20\u3092\u3067\u304D\u308B\u3060\u3051\u542B\u3081\u308B
\u30FB\u5BFE\u8C61\u5358\u8A9E\u3092\u5FC5\u305A\u672C\u6587\u306B\u542B\u3081\u308B
\u30FB\u4E0D\u81EA\u7136\u306B\u96E3\u3057\u3044\u8A9E\u306F\u907F\u3051\u308B
\u30FBfull_text \u306F\u5B8C\u5168\u6587
\u30FBquestions \u306F\u5BFE\u8C61\u5358\u8A9E\u3092\u4F7F\u3063\u305F\u7A74\u57CB\u3081\u554F\u984C
\u30FBenglish_options \u306F\u6B63\u89E31\u3064\uFF0B\u7D1B\u3089\u308F\u3057\u30443\u3064
\u30FBjapanese_options \u306F\u6B63\u89E3\u306E\u610F\u54731\u3064\uFF0B\u7D1B\u3089\u308F\u3057\u30443\u3064
\u30FB\u51FA\u529B\u306FJSON\u306E\u307F
\u30FB\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3001\u8AAC\u660E\u6587\u3001\u524D\u7F6E\u304D\u306F\u7981\u6B62

\u5FC5\u305A\u4EE5\u4E0B\u306EJSON\u69CB\u9020\u3060\u3051\u3092\u8FD4\u3059\u3053\u3068\u3002

{
  "full_text": "\u5B8C\u5168\u306A\u82F1\u6587",
  "questions": [
    {
      "target_word": "\u5358\u8A9E",
      "blanked_text": "\u30D6\u30E9\u30F3\u30AF(_____)\u3092\u542B\u3080\u6587",
      "english_options": ["\u6B63\u89E3", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"],
      "japanese_options": ["\u6B63\u89E3\u306E\u610F\u5473", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"]
    }
  ]
}
`;
    } else if (partStyle === "Part2") {
      prompt = `
\u3042\u306A\u305F\u306FTOEIC Listening Part 2 \u554F\u984C\u4F5C\u6210\u8005\u3067\u3059\u3002
\u4EE5\u4E0B\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\u554F\u984C\u3092JSON\u5F62\u5F0F\u306E\u307F\u30671\u3064\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002

\u3010\u5BFE\u8C61\u5358\u8A9E\u3011
${words.join(", ")}

\u3010\u96E3\u6613\u5EA6\u3011
CEFR ${cefrLevel}

\u3010\u5F62\u5F0F\u3011
TOEIC Part 2\u98A8\u306E\u77ED\u30442\u767A\u8A71\u4F1A\u8A71

\u3010\u5FC5\u9808\u6761\u4EF6\u3011
\u30FB2\u767A\u8A71\u7A0B\u5EA6\u306E\u81EA\u7136\u306A\u4F1A\u8A71\u306B\u3059\u308B
\u30FB\u6700\u521D\u306E\u767A\u8A71\u5074\u306B\u30D6\u30E9\u30F3\u30AF\u3092\u4F5C\u308B
\u30FBTOEIC\u3089\u3057\u3044\u8077\u5834\u30FB\u96FB\u8A71\u30FB\u4F9D\u983C\u30FB\u78BA\u8A8D\u30FB\u4E88\u5B9A\u8ABF\u6574\u306A\u3069\u306E\u6587\u8108\u306B\u3059\u308B
\u30FB\u5BFE\u8C61\u5358\u8A9E\u3092\u672C\u6587\u306B\u542B\u3081\u308B
\u30FB\u4E0D\u81EA\u7136\u306B\u96E3\u3057\u3044\u8A9E\u306F\u907F\u3051\u308B
\u30FB\u51FA\u529B\u306FJSON\u306E\u307F
\u30FB\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3001\u8AAC\u660E\u6587\u3001\u524D\u7F6E\u304D\u306F\u7981\u6B62

\u5FC5\u305A\u4EE5\u4E0B\u306EJSON\u69CB\u9020\u3060\u3051\u3092\u8FD4\u3059\u3053\u3068\u3002

{
  "full_text": "\u5B8C\u5168\u306A\u82F1\u6587",
  "questions": [
    {
      "target_word": "\u5358\u8A9E",
      "blanked_text": "\u30D6\u30E9\u30F3\u30AF(_____)\u3092\u542B\u3080\u6587",
      "english_options": ["\u6B63\u89E3", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"],
      "japanese_options": ["\u6B63\u89E3\u306E\u610F\u5473", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"]
    }
  ]
}
`;
    } else {
      prompt = `
\u3042\u306A\u305F\u306FTOEIC Part 5 \u98A8\u306E\u77ED\u6587\u7A74\u57CB\u3081\u554F\u984C\u4F5C\u6210\u8005\u3067\u3059\u3002
\u4EE5\u4E0B\u306E\u6761\u4EF6\u3092\u6E80\u305F\u3059\u554F\u984C\u3092JSON\u5F62\u5F0F\u306E\u307F\u3067\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002

\u3010\u5BFE\u8C61\u5358\u8A9E\u3011
${words.join(", ")}

\u3010\u96E3\u6613\u5EA6\u3011
CEFR ${cefrLevel}

\u3010\u5F62\u5F0F\u3011
TOEIC Part 5\u98A8

\u3010\u5FC5\u9808\u6761\u4EF6\u3011
\u30FB1\u6587\u306E\u7A74\u57CB\u3081\u554F\u984C\u306B\u3059\u308B
\u30FB\u81EA\u7136\u3067\u6587\u6CD5\u7684\u306B\u6B63\u78BA\u306A\u82F1\u6587\u306B\u3059\u308B
\u30FB\u30D3\u30B8\u30CD\u30B9\u3001\u30AA\u30D5\u30A3\u30B9\u3001\u4F1A\u8B70\u3001\u9023\u7D61\u3001\u6CE8\u6587\u3001\u6848\u5185\u306A\u3069TOEIC\u3089\u3057\u3044\u984C\u6750\u3092\u512A\u5148\u3059\u308B
\u30FB\u5404\u554F\u984C\u306B\u3064\u304D1\u30D6\u30E9\u30F3\u30AF
\u30FB\u5BFE\u8C61\u5358\u8A9E\u3092\u6B63\u7B54\u306B\u3059\u308B
\u30FBenglish_options \u306F\u6B63\u89E31\u3064\uFF0B\u7D1B\u3089\u308F\u3057\u30443\u3064
\u30FBjapanese_options \u306F\u6B63\u89E3\u306E\u610F\u54731\u3064\uFF0B\u7D1B\u3089\u308F\u3057\u30443\u3064
\u30FB\u51FA\u529B\u306FJSON\u306E\u307F
\u30FB\u30DE\u30FC\u30AF\u30C0\u30A6\u30F3\u3001\u8AAC\u660E\u6587\u3001\u524D\u7F6E\u304D\u306F\u7981\u6B62

\u5FC5\u305A\u4EE5\u4E0B\u306EJSON\u69CB\u9020\u3060\u3051\u3092\u8FD4\u3059\u3053\u3068\u3002

{
  "full_text": "\u5B8C\u5168\u306A\u82F1\u6587",
  "questions": [
    {
      "target_word": "\u5358\u8A9E",
      "blanked_text": "\u30D6\u30E9\u30F3\u30AF(_____)\u3092\u542B\u3080\u6587",
      "english_options": ["\u6B63\u89E3", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"],
      "japanese_options": ["\u6B63\u89E3\u306E\u610F\u5473", "\u30C0\u30DF\u30FC1", "\u30C0\u30DF\u30FC2", "\u30C0\u30DF\u30FC3"]
    }
  ]
}
`;
    }
    const models = [
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite"
    ];
    const sleep = /* @__PURE__ */ __name((ms) => new Promise((resolve) => setTimeout(resolve, ms)), "sleep");
    let lastError = null;
    for (const model of models) {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
      for (let attempt = 1; attempt <= 3; attempt++) {
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              response_mime_type: "application/json"
            }
          })
        });
        const raw = await geminiRes.text();
        console.log(`MODEL: ${model} / ATTEMPT: ${attempt} / STATUS: ${geminiRes.status}`);
        console.log(`RAW: ${raw}`);
        if (geminiRes.ok) {
          const data = JSON.parse(raw);
          const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!resultText) {
            return new Response(
              JSON.stringify({ error: "\u751F\u6210\u7D50\u679C\u304C\u7A7A\u3067\u3059" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }
          return new Response(resultText, {
            headers: { "Content-Type": "application/json" }
          });
        }
        lastError = raw;
        if (geminiRes.status === 503 && attempt < 3) {
          await sleep(3e3 * attempt);
          continue;
        }
        break;
      }
    }
    return new Response(
      JSON.stringify({
        error: "Gemini API error",
        detail: lastError || "\u3059\u3079\u3066\u306E\u5019\u88DC\u30E2\u30C7\u30EB\u3067\u5931\u6557\u3057\u307E\u3057\u305F"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC",
        detail: error.message
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
__name(onRequestPost, "onRequestPost");

// api/hello.js
async function onRequest() {
  return new Response(
    JSON.stringify({ message: "API works" }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-oLOfif/functionsRoutes-0.5213852930275374.mjs
var routes = [
  {
    routePath: "/api/generate",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/hello",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// ../node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-R2XQVU/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-R2XQVU/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.813601204853035.mjs.map
