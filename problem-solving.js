//5
const array1=[];
 const base=2;
 for(let i=1;i<=5;i++){
     let num=prompt("Please enter the number");
     array1.push(base**num);
 }
 console.log(array1)

const array2=[];
array.forEach(element => {
    array2.push(element);
});
console.log(array2)


const array3=[];
array.map(element => {
    array3.push(element);
});
console.log(array3)



//6
const array4=[];
for(let i=0;i<=5;i++){
    let element=prompt("Enter the element:")
    array4.push(element)
}

function print(array4){
    array4.map(element=>{
        if(isNaN(element)){
            console.log("N/A");
        }
        else if(element%2!=0){
            console.log("odd");
        }
        else if(element%2==0){
            console.log("even");
        }
    })
}
print(array4)
//7
function fizzbuzz(numbers) {
	const output = [];
  
	numbers.forEach((number) => {
	  if (number % 3 === 0 && number % 5 === 0) {
		output.push("Fizz Buzz");
	  } else if (number % 3 === 0) {
		output.push("Fizz");
	  } else if (number % 5 === 0) {
		output.push("Buzz");
	  } else {
		output.push(number);
	  }
	});
  
	return output;
  }
  const ar= [1, 2, 3, 4, 5, 15];
  const x = fizzbuzz(ar);
  console.log(x);
  
