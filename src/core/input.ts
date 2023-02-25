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
  
  //console.log(target.selectionStart,target.selectionEnd,target.selectionDirection);
  //console.log(getTextareaPosition(target))
  const valueLength=textarea.value.length;
  for(let i=0;i!==valueLength;i++){
    const textareaChar=textarea.value[i];
    const topElementChar=topElement
    console.log(textareaChar)
  }
  if(isIME)return;
  language.highlight({
    setColor(start,end){
      
    }
  });
}