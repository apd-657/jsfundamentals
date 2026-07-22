let a="111";
let rev=a.split("").reverse().join("");
console.log(rev);
console.log(a==rev);
nums=[1,2,3,4,5]
let d=Math.max(...nums);
console.log(d);
function seclarge(arr){
    let unique=[...new Set(arr)];
    unique.sort((a,b)=>b-a);
    return unique[1];
}

console.log(seclarge(nums));

let num=[1,3,2,4,1,3];
let uniqes=[... new Set(num)];
console.log(uniqes);


let val="aakash";
const vowels="aeiouAEIOU";
let count=0;
for(let ch of val){
    if(vowels.includes(ch)){
        count+=1;
    }
}
    console.log(count);
    
    
let fact =1;
for(let i=1;i<=5;i++){
    fact*=i;
}
console.log(fact);


let r=0;
let l=1;
let n=7
for(i=0;i<=n;i++){
    let temp=r+l;
    console.log(r);
    r=l;
    l=temp;
}


let value=6;
let f=0;
if(value<2) console.log("Not Prime");
 for(let i=2;i<=Math.sqrt(value);i++){
     if(value%i===0){
         console.log("Not Prime");
         f=1;
         break;
     }
    if(f===0) console.log("Prime");
     
 }
 
 
function missingNumber(arr,n){

    let expected=(n*(n+1))/2;

    let actual=arr.reduce((sum,num)=>sum+num,0);

    return expected-actual;
}

console.log(missingNumber([1,2,3,5],5));

let arr=[4,5,3,1,4,2,3,6];
let freq={};
for(let num of arr){
    freq[num]=(freq[num]||0)+1;
}
console.log(freq);
