// 8kyu - Sum of Positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// solution 1
function positiveSum(arr){
    let sum = 0;
    for(const number in arr){
      if(arr[number] > 0){
        sum += arr[number];
      }
    }
    return sum;
  }

// solution 2
function positiveSum(arr){
    for(var i=0, count=0; i<=arr.length; i++){
      if(arr[i] >= 0){
        count += arr[i]
      }
    }
    return count;
  }

// solution 3
function positiveSum(arr) {
    let sum = 0;
    for(const number of arr){
    console.log(number)
      if(number > 0){
        sum += number;
      }
    }
    return sum;
  }
  
// solution 4
function positiveSum(arr) {
    let sum = 0;
    for(const number in arr){
      if(arr[number] > 0){
        sum += arr[number];
      }
    }
    return sum;
  }