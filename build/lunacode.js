// src/utils/object-safe.ts
function object_safe_default(input, sample) {
  for (const key of Object.keys(input)) {
    sample[key] = input[key];
  }
  return sample;
}

// src/core/textarea.ts
function textarea_default() {
  const element = document.createElement("textarea");
  const style = element.style;
  style.border = "none";
  style.borderRadius = "0px";
  style.outline = "none";
  style.resize = "none";
  style.width = "100%";
  style.height = "100%";
  style.backgroundColor = "transparent";
  return element;
}

// src/core/lunacode-core.ts
var lunacode_core_default = class {
  constructor(options) {
    options = object_safe_default(options, {
      element: document.createElement("div")
    });
    const { element } = options;
    this.element = element;
    const text = element.textContent;
    element.append(textarea_default());
    element.append((() => {
      const div = document.createElement("div");
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.background = "azure";
      div.style.position = "absolute";
      return div;
    })());
  }
};
export {
  lunacode_core_default as Lunacode
};
//# sourceMappingURL=lunacode.js.map
