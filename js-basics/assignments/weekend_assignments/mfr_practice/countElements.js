const tempsList = [23,22,30,26,27,25]

const method1 = temps => 
  temps
    .filter(x => x > 25)
    .length


const method2 = temps => 
  temps.reduce(
    (count, temp) => temp > 25 ? count +1 : count 
  , 0)

console.log("temps above 25")
console.log(method1(tempsList))
console.log(method2(tempsList))