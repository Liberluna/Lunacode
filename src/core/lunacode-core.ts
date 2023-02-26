import { objectSafe } from "../utils/index.ts";
import createEditorElement from "./create-editor-element.ts";
import input from "./input.ts";
import Language from "./language.ts";
import TextLanguage from "../langs/text.ts";

export default class LunacodeCore{
  element:HTMLElement;
  textarea:HTMLElement;
  editorElement:HTMLElement;
  language:Language;
  isIME:boolean;
  canvas:HTMLElement;
  canvasAPI;
  constructor(options){
    options=objectSafe(options,{
      element:document.createElement("div"),
      language:new TextLanguage()
    });
    const {element,language} = options;

    this.element=element;
    this.language=language;
    this.isIME=false;
    // backup text
    const text=element.textContent;
    // child to
    const {editorElement,textarea,canvas}=createEditorElement();
    element.append(editorElement);
    
    textarea.addEventListener("input",(event)=>{
      this.#input({
        inputEvent:event,
        imeEndEvent:null
      });
    });
    textarea.addEventListener("compositionstart",(event)=>{
      this.isIME=true;
    });
    textarea.addEventListener("compositionend",(event)=>{
      this.isIME=false;
      this.#input({
        inputEvent:null,
        imeEndEvent:event
      });
    });
    this.editorElement=editorElement;
    this.textarea=textarea;
    this.canvas=canvas;
    this.canvasAPI=canvas.getContext('2d');
  }
  #input({inputEvent,imeEndEvent}){
    input.call(this,{
      inputEvent,
      imeEndEvent,
      language:this.language,
      isIME:this.isIME,
      textarea:this.textarea,
      canvas:this.canvas,
      canvasAPI:this.canvasAPI
    });
  }
  setLanguage(language:Language){
    this.language=language;
  }
}