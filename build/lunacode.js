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

// src/core/input.ts
function draw(options) {
  const {
    language,
    inputEvent,
    imeEndEvent,
    isIME,
    target
  } = options;
  if (isIME)
    return;
  console.log(target.selectionStart, target.selectionEnd, target.selectionDirection);
  language.highlight({});
}

// src/core/language.ts
var Language = class {
  constructor() {
  }
  highlight(ctx) {
  }
};

// src/langs/text.ts
var TextLanguage = class extends Language {
  highlight() {
  }
};

// src/core/lunacode-core.ts
var LunacodeCore = class {
  element;
  textarea;
  editorElement;
  language;
  isIME;
  constructor(options) {
    options = object_safe_default(options, {
      element: document.createElement("div"),
      language: new TextLanguage()
    });
    const { element, language } = options;
    this.element = element;
    this.language = language;
    this.isIME = false;
    const text = element.textContent;
    const { editorElement, textarea } = create_editor_element_default();
    element.append(editorElement);
    textarea.addEventListener("input", (event) => {
      this.#input({
        inputEvent: event,
        imeEndEvent: null
      });
    });
    textarea.addEventListener("compositionstart", (event) => {
      this.isIME = true;
    });
    textarea.addEventListener("compositionend", (event) => {
      this.isIME = false;
      this.#input({
        inputEvent: null,
        imeEndEvent: event
      });
    });
    this.editorElement = editorElement;
    this.textarea = textarea;
  }
  #input({ inputEvent, imeEndEvent }) {
    draw.call(this, {
      inputEvent,
      imeEndEvent,
      language: this.language,
      isIME: this.isIME,
      target: this.textarea
    });
  }
  setLanguage(language) {
    this.language = language;
  }
};
export {
  LunacodeCore as Lunacode
};
//# sourceMappingURL=lunacode.js.map
