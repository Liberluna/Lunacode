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

// src/utils/enumerate.ts
var enumerate_default = (arr) => {
  const result = [];
  let index = 0;
  for (const element of arr) {
    result.push([index, element]);
    index++;
  }
  return result;
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
  const canvas = create_element_default("canvas", {
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
      color: "transparent",
      padding: "0px",
      caretColor: "#000"
    }
  });
  parent.append(canvas);
  parent.append(textarea);
  return {
    editorElement: parent,
    textarea,
    canvas
  };
};

// src/core/input.ts
function draw(options) {
  const {
    language,
    inputEvent,
    imeEndEvent,
    isIME,
    textarea,
    canvas,
    canvasAPI,
    fontSize,
    fontFamily,
    lineHeight
  } = options;
  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  canvasAPI.font = `${fontSize}px ${fontFamily}`;
  canvasAPI.clearRect(0, 0, canvas.width, canvas.height);
  const rows = [];
  for (const [index, char] of enumerate_default(textarea.value)) {
    rows.push({
      color: "#000",
      char
    });
  }
  let line = 0;
  let row = 0;
  for (const [index, charData] of enumerate_default(rows)) {
    if (charData.char === "\n") {
      line++;
      row = 0;
    } else {
      canvasAPI.fillText(charData.char, row * 10, lineHeight * (line + 1) - (lineHeight - fontSize));
      row++;
    }
  }
  if (isIME)
    return;
  language.highlight({
    setColor(start, end) {
    }
  });
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
  canvas;
  canvasAPI;
  #fontSize;
  #fontFamily;
  #lineHeight;
  constructor(options) {
    options = object_safe_default(options, {
      element: document.createElement("div"),
      language: new TextLanguage(),
      fontSize: 23,
      fontFamily: "sans-serif",
      lineHeight: 30
    });
    this.#fontSize = options.fontSize;
    this.#fontFamily = options.fontFamily;
    this.#lineHeight = options.lineHeight;
    const { element, language, fontFamily } = options;
    this.element = element;
    this.language = language;
    this.isIME = false;
    const text = element.textContent;
    const { editorElement, textarea, canvas } = create_editor_element_default();
    element.append(editorElement);
    textarea.style.fontSize = options.fontSize + "px";
    textarea.style.fontFamily = options.fontFamily;
    textarea.style.lineHeight = options.lineHeight + "px";
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
    this.canvas = canvas;
    this.canvasAPI = canvas.getContext("2d");
  }
  #input({ inputEvent, imeEndEvent }) {
    draw.call(this, {
      inputEvent,
      imeEndEvent,
      language: this.language,
      isIME: this.isIME,
      textarea: this.textarea,
      canvas: this.canvas,
      canvasAPI: this.canvasAPI,
      fontSize: this.#fontSize,
      fontFamily: this.#fontFamily,
      lineHeight: this.#lineHeight
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
