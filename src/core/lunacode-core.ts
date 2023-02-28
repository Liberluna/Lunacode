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
  #fontSize:number;
  #fontFamily:string;
  #lineHeight:number;
  constructor(options){
    options=objectSafe(options,{
      element:document.createElement("div"),
      language:new TextLanguage(),
      fontSize:23,
      fontFamily:"sans-serif",
      lineHeight:30
    });
    this.#fontSize=options.fontSize;
    this.#fontFamily=options.fontFamily;
    this.#lineHeight=options.lineHeight;
    const {element,language,fontFamily} = options;

    this.element=element;
    this.language=language;
    this.isIME=false;
    // backup text
    const text=element.textContent;
    // child to
    const {editorElement,textarea,canvas}=createEditorElement();
    element.append(editorElement);
    textarea.style.fontSize=options.fontSize+"px";
    textarea.style.fontFamily=options.fontFamily
    textarea.style.lineHeight=options.lineHeight+"px";
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
      canvasAPI:this.canvasAPI,
      fontSize:this.#fontSize,
      fontFamily:this.#fontFamily,
      lineHeight:this.#lineHeight,
    });
  }
  setLanguage(language:Language){
    this.language=language;
  }
}