import Language from "./language";

type drawOptions={
  language:Language,
  inputEvent:InputEvent,
  isIME:boolean,
  imeEndEvent:CompositionEvent,
  target:HTMLTextAreaElement,
}
export default function draw(options:drawOptions){
  const {
    language,
    inputEvent,
    imeEndEvent,
    isIME,
    target
  } = options;
  if(isIME)return;
  console.log(target.selectionStart,target.selectionEnd,target.selectionDirection);
  language.highlight({
    
  });
}