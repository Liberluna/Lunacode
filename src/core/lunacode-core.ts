import { objectSafe } from "../utils/index.ts";
import createEditorElement from "./create-editor-element.ts";

export default class{
  element:HTMLElement;
  constructor(options){
    options=objectSafe(options,{
      element:document.createElement("div"),
    });
    const {element} = options;

    this.element=element;
    // backup text
    const text=element.textContent;
    // child to
    const {editorElement,textarea}=createEditorElement();
    element.append(editorElement);
    
  }
}