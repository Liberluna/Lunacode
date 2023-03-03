import CharWidth from "../../src/utils/char-size.js";

const charWidth=new CharWidth();

for(let i=0;i!==10;i++){
    console.time(i);
    console.log(charWidth.get("永","13px sans-serif"));
    console.timeEnd(i);
}