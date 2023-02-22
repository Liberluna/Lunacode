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
  const topElem=createElement("div",{
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
      color:"transparent"
    }
  });
  parent.append(topElem);
  parent.append(textarea);
  return {
    editorElement:parent,
    textarea:textarea
  };
}