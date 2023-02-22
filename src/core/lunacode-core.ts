import { objectSafe } from "../utils/index.ts";
import createEditorElement from "./create-editor-element.ts";
import draw  from "./draw.ts";
import Language from "./language.ts";

export default class LunacodeCore{
  element:HTMLElement;
  textarea:HTMLElement;
  editorElement:HTMLElement;
  language:Language;
  constructor(options){
    options=objectSafe(options,{
      element:document.createElement("div"),
      language:
    });
    const {element} = options;

    this.element=element;
    // backup text
    const text=element.textContent;
    // child to
    const {editorElement,textarea}=createEditorElement();
    element.append(editorElement);
    
    textarea.addEventListener("input",(event)=>{
      this.#input(event);
    });
    this.editorElement=editorElement;
    this.textarea=textarea;
  }
  #input(event){
    draw({
      event:event,
      lang:this.language
    });
  }
  setLanguage(language:Language){
    this.language=language;
  }
}