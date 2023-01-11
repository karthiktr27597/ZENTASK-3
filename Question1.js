let myData = {
      "name": "Karthik T R",
      "email": "karthiktr27597@gmail.com",
      "phone": 8124199578,
      "degree": "Bsc(CS),MBA",
      "location": "Tamilnadu,Madurai"
      }

let a= Object.keys(myData);


// for loop

for(let i=0; i>=0; i++)
{
 if(a[i])
 {
    console.log(`${a[i]} : ${myData[a[i]]}`);
 }
 else
 {
    break;
 }
}

console.log('-----------------------------------------------------------------');

//for in

for (let i in myData) 
{
  console.log(i+" : "+myData[i]);
}

console.log('-----------------------------------------------------------------');

// for of

for (let i of a) {
console.log(i+" : "+myData[i]);
}

console.log('-----------------------------------------------------------------');

// forEach

a.forEach(b =>{console.log(`${b} : ${myData[b]}`)})

console.log('-----------------------------------------------------------------');
