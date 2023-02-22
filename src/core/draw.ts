import Language from "./language.ts";

type drawOptions={
  language:Language,
  event:InputEvent
}
export default function draw(options:drawOptions){
  const {language,event} = options;
  language._req({
    text:event.target
  })
}