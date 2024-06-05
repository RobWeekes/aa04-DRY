
// MAKE HELPER FUNC

// let biggerNum = function(num1, num2) {
// function biggerNum(num1, num2) {
const biggerNum = (n1, n2) => {
  let bigNum = n1 > n2 ? n1 : n2;   // ternary syntax: if/else statement on 1 line
  // let bigNum;                    // right side evalutes a boolean, if true? return n1. if false, n2
  // if (num1 > num2) {
  //   bigNum = num1;
  // } else {
  //   bigNum = num2;
  // }
  return bigNum;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return biggerNum(num1, num2) * 2;
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum * 2;
  // } else {
  //   bigNum = num2;
  //   return bigNum * 2;
  // }
}

function divideBiggerNumByThree(num1, num2) {
  return biggerNum(num1, num2) / 3;
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
}

function eatMostTacos(sum1, sum2) {
    const bigNum = biggerNum(sum1, sum2);
    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    const bigDog = biggerNum(weight1, weight2);
    const smallDog = biggerNum(weight1, weight2) === weight1 ? weight2 : weight1;
    // if(weight1 !== bigDog) {
    //     smallDog = weight1;
    // } else smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
