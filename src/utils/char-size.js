export default class CharWidth{
  constructor(){
    this.canvas=document.createElement('canvas');
    this.canvasAPI=this.canvas.getContext('2d');
    this.caches={};
  }
  get(char,font){
    this.canvasAPI.font=font;
    if(!this.caches[font]){
      this.caches[font]={}
    }
    const cacheFont=this.caches[font];
    if(Object.keys(cacheFont).includes(char)){
      return cacheFont[char];
    }else{
      const data=this.canvasAPI.measureText(char);
      const result={
        width:data.width,
      };
      cacheFont[char]=result;
      return result;
    }

  }
}