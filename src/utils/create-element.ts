export default (tagName:string,options)=>{
  const tag:HTMLDivElement|HTMLTextAreaElement|HTMLElement = document.createElement(tagName);
  if(options.style){
    Object.keys(options.style).forEach(style=>{
      tag.style[style]=options.style[style];
    });
    delete options.style;
  }
  Object.keys(options).forEach(attr=>{
    tag[attr]=options[attr];
  });
  return tag;
}