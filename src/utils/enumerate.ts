export default (arr:Array<any>|string):Array<any>=>{
  const result=[];
  let index=0;
  for(const element of arr){
    result.push([index,element]);
    index++;
  }
  return result;
}