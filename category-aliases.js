(() => {
  "use strict";

  // Различни изписвания на една и съща категория.
  const CATEGORY_ALIASES = {
    "банка": "Банки",
    "банки": "Банки",
    "банкова институция": "Банки",
    "банкови институции": "Банки",

    "болница": "Болници",
    "болници": "Болници",
    "дкц": "Болници",
    "медицински център": "Болници",

    "аптека": "Аптеки",
    "аптеки": "Аптеки",

    "община": "Общини",
    "общини": "Общини",
    "общинска администрация": "Общини",

    "магазин": "Магазини",
    "магазини": "Магазини"
  };

  function normalizeCategory(value) {
    const key = String(value || "")
      .trim()
      .toLocaleLowerCase("bg-BG")
      .replace(/\s+/g, " ");

    return CATEGORY_ALIASES[key] || String(value || "").trim();
  }

  function sameCategory(a, b) {
    return normalizeCategory(a).toLocaleLowerCase("bg-BG") ===
           normalizeCategory(b).toLocaleLowerCase("bg-BG");
  }

  // Функции за използване от основния сайт.
  window.RegistryCategories = {
    normalize: normalizeCategory,
    matches: sameCategory
  };
})();
