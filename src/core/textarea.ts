export default function():HTMLTextAreaElement{
  const element:HTMLTextAreaElement=document.createElement("textarea");
  const style=element.style;
  style.border="none";
  style.borderRadius="0px";
  style.outline="none";
  style.resize="none";
  style.width="100%";
  style.height="100%";
  style.backgroundColor="transparent";
  return element;
}