import * as esbuild from "https://deno.land/x/esbuild@v0.17.8/mod.js";

console.log(`ESBuild at ${esbuild.version}`);
const esm=await esbuild.context({
  entryPoints: JSON.parse(await Deno.readTextFile("entry.json")).entrypoints,
  outdir: './build',
  format:"esm",
  bundle:true,
  sourcemap:true,
});
const args=Deno.args;
if(args.includes("--watch")){
  await esm.watch()
}else{
  const rebuild=await esm.rebuild();
  Deno.exit()
}