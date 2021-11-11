const isTrue=(array)=> {
    let count = 0
    for (let value of array) {
        if (value) {
            count ++
        }
    }
    return count
}

const arr = [true, false, false, true, false]
const arr1 = []
console.log(isTrue(arr))
console.log(isTrue(arr1))