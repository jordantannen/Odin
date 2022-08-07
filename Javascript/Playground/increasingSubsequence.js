


    let count = 0
    let x = 0
    let arr = [1, 2, 3]

    function recurse(x, arr, count){
        if (x === arr.length)
            return
        else if(arr[x] < arr[x + 1]){
            count++
            x++
            recurse(x, arr, count)
        }
        console.log(count)
    }
    

recurse(x, arr, count)