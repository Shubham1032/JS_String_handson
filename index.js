
var Count_Occ = (s) => 
{
  let arr2=[];
  let arr=[];
  for(let i=0;i<s.length;i++){
    arr.push(s[i])
  }
  arr.sort();
  //console.log(arr)
  let map=new Map();
  for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
      let value=map.get(arr[i]);
      map.set(arr[i],value+1)
    }
    else{
      map.set(arr[i],1)
    }
  }
  for(let [k,v] of map){
    if(v>1){
    arr2.push(k,v)
    }
  }
  var S=""
for(let i=0; i<arr2.length;i++){
  S=S+arr2[i];
}
  console.log(S)
};
 Count_Occ("prepbytes")