import { createElement } from "../utils/index.ts";
export default ()=>{
  const parent=createElement("div",{
    style:{
      width:"100%",
      height:"100%",
      backgroundColor:"transparent",
      position:"relative"
    }
  })
  const canvas:HTMLCanvasElement=createElement("canvas",{
    style:{
      width:"100%",
      height:"100%",
      backgroundColor:"transparent",
      position:"absolute"
    }
  });

  const textarea=createElement("textarea",{
    style:{
      border:"none",
      borderRadius:"0px",
      outline:"none",
      resize:"none",
      width:"100%",
      height:"100%",
      backgroundColor:"transparent",
      position:"absolute",
      color:"transparent",
      padding:"0px",
      caretColor:"#000",
    }
  });
  parent.append(canvas);
  parent.append(textarea);
  return {
    editorElement:parent,
    textarea:textarea,
    canvas:canvas,
  };
}