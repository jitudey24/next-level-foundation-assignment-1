function describeValue (value){
    const type = typeof value;
   let valueType;
   if(value){
     valueType = "truthy"
   } else{
    valueType = "falsy"
   }
   return `${type} | ${valueType}`
}
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue("0"));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue(NaN));
