export default function(input:object,sample:object):object{
  for(const key of Object.keys(input)){
    sample[key]=input[key];
  }
  return sample;
}