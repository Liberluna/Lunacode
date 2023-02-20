import { objectSafe } from "../utils/index.ts";
import textarea from "./textarea.ts";

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
    element.append((()=>{
      const div=document.createElement("div");
      div.style.width="100%";
      div.style.height="100%";
      div.style.background="transparent";
      div.style.position="relative";

      div.append(textarea());
      div.append((()=>{
        const upelem=document.createElement("div");
        upelem.style.width="100%";
        upelem.style.height="100%";
        upelem.style.background="transparent";
        upelem.style.position="absolute";
        return upelem;
      })())

      return div;
    })())   
  }
}