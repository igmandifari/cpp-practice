function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Tukar posisi elemen jika elemen sebelumnya lebih besar
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  function findMissingInteger(a, b) {
    const combinedArray = [...new Set([...a, ...b])];
  
    bubbleSort(combinedArray);
  
    let missingInteger = 1;
  
    for (let i = 0; i < combinedArray.length; i++) {
      if (combinedArray[i] === missingInteger) {
        missingInteger++;
      } else if (combinedArray[i] > missingInteger) {
        break;
      }
    }
  
    return missingInteger;
  }
  
  const a = [1, 3, 6, 2, 4, 1];
  const b = [1, 2, 3];
  
  const result = findMissingInteger(a, b);
  console.log(result);
  