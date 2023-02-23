import Language from "./language";

type drawOptions={
  language:Language,
  inputEvent:InputEvent,
  isIME:boolean
}
export default function draw(options:drawOptions){
  const {language,inputEvent,isIME} = options;

  console.log(isIME)
  language.highlight({
    
  });
}