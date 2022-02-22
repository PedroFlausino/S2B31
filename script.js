function mult(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr[i] = []
        for(let c = 1; c <= 10; c++){
            arr[i].push(i*c)
        }
    }
    return arr
}
console.table(mult(15))