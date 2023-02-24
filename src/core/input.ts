import Language from "./language";
import {getTextareaPosition,createElement} from "../utils/index.ts";

type drawOptions={
  language:Language,
  inputEvent:InputEvent,
  isIME:boolean,
  imeEndEvent:CompositionEvent,
  textarea:HTMLTextAreaElement,
  topElement:HTMLDivElement
}
export default function draw(options:drawOptions){
  const {
    language,
    inputEvent,
    imeEndEvent,
    isIME,
    textarea,
    topElement
  } = options;
  if(isIME)return;
  //console.log(target.selectionStart,target.selectionEnd,target.selectionDirection);
  //console.log(getTextareaPosition(target))
  topElement.innerHTML="";
  for(const char of textarea.value){
    const elem=createElement("span",{
      textContent:char
    });
    topElement.append(char);   
  }
  language.highlight({
    setColor(start,end){
      
    }
  });
}