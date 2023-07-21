function bubbleSort(arr){
    const n = arr.length
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}

function findMissing(a,b){
    const combinedArr = [...new Set([...a,...b])]

    bubbleSort(combinedArr)

    let missingInt = 1;

    for(let i=0; i<combinedArr.length; i++){
        if(combinedArr[i]===missingInt){
            missingInt++
        } else if (combinedArr>missingInt){
            break   
        }
    }
    return missingInt;
}


const a = [1,3,6,2,4,1]
const b = [1,2,3]

const result = findMissing(a,b)
console.log(result)