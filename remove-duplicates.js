let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicate = function(nums){
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[i]!==nums[j]){
           i++
           nums[i]=nums[j]
        }
    } return i+1
}

console.log(removeDuplicate(nums))
