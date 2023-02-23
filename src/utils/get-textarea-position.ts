type getTextAreaPositionReturns={
  line:number,
  row:number
}
export default function(textarea:HTMLTextAreaElement):getTextAreaPositionReturns{
  const value=textarea.value;
  const lines:Array<string>=value.split("\n");
  const position:number=textarea.selectionEnd;
  
  let line=0;
  let row=0;
  for(let i=0;i!==position;i++){
    if(value[i]==="\n"){
      line++;
      row=0;
    }
    row++;
  }
  return {
    row,
    line,
  }
}