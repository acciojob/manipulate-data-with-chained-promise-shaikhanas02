//your JS code here. If required.
function manipulateData1(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((arr) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const filteredArr = arr.filter((num) => num % 2 !== 0);
          resolve(filteredArr);
        }, 1000);
      });
    })
    
    .then((arr) => {
      const outputElement = document.getElementById("output");
      outputElement.innerHTML = arr+" " ;
    });
}

function manipulateData2(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((arr) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const multipliedArr = arr.map((num) => num * 2);
          resolve(multipliedArr);
        }, 2000);
      });
    })
    
    .then((arr) => {
      const outputElement = document.getElementById("output");
      outputElement.innerHTML += arr.toString();
    });
}
manipulateData1([1, 2, 3, 4]);
manipulateData2([1, 2, 3, 4]);
