// src/utils/object-safe.ts
function object_safe_default(input, sample) {
  for (const key of Object.keys(input)) {
    sample[key] = input[key];
  }
  return sample;
}

// src/utils/create-element.ts
var create_element_default = (tagName, options) => {
  const tag = document.createElement(tagName);
  if (options.style) {
    Object.keys(options.style).forEach((style) => {
      tag.style[style] = options.style[style];
    });
    delete options.style;
  }
  Object.keys(options).forEach((attr) => {
    tag[attr] = options[attr];
  });
  return tag;
};

// src/core/create-editor-element.ts
var create_editor_element_default = () => {
  const parent = create_element_default("div", {
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      position: "relative"
    }
  });
  const topElem = create_element_default("div", {
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      position: "absolute"
    }
  });
  const textarea = create_element_default("textarea", {
    style: {
      border: "none",
      borderRadius: "0px",
      outline: "none",
      resize: "none",
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      position: "absolute",
      color: "transparent"
    }
  });
  parent.append(topElem);
  parent.append(textarea);
  return {
    editorElement: parent,
    textarea
  };
};

// src/core/lunacode-core.ts
var lunacode_core_default = class {
  constructor(options) {
    options = object_safe_default(options, {
      element: document.createElement("div")
    });
    const { element } = options;
    this.element = element;
    const text = element.textContent;
    const { editorElement, textarea } = create_editor_element_default();
    element.append(editorElement);
  }
};
export {
  lunacode_core_default as Lunacode
};
//# sourceMappingURL=lunacode.js.map
