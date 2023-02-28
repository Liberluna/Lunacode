import Language from "./language";
import {getTextareaPosition,createElement,enumerate} from "../utils/index.ts";

type drawOptions={
  language:Language,
  inputEvent:InputEvent,
  isIME:boolean,
  imeEndEvent:CompositionEvent,
  textarea:HTMLTextAreaElement,
  canvas:HTMLCanvasElement,
  canvasAPI:CanvasRenderingContext2D,
  fontSize:number,
  fontFamily:string,
  lineHeight:number,
}
export default function draw(options:drawOptions){
  const {
    language,
    inputEvent,
    imeEndEvent,
    isIME,
    textarea,
    canvas,
    canvasAPI,
    fontSize,
    fontFamily,
    lineHeight,
  } = options;

  canvas.width = canvas.getBoundingClientRect().width;
  canvas.height = canvas.getBoundingClientRect().height;
  canvasAPI.font = `${fontSize}px ${fontFamily}`;
  canvasAPI.clearRect(0, 0, canvas.width, canvas.height);
  const rows=[];
  for(const [index,char] of enumerate(textarea.value)){
    rows.push({
      color:"#000",
      char
    });
  }

  let line=0;
  let row=0;
  for(const [index,charData] of enumerate(rows)){
    if(charData.char==="\n"){
      line++;
      row=0;
    }else{
      canvasAPI.fillText(charData.char, row*10, (lineHeight*(line+1))-(lineHeight-fontSize));
      row++;
    }
  }

  if(isIME)return;
  language.highlight({
    setColor(start,end){
      
    }
  });
}