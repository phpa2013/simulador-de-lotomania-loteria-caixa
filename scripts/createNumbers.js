export function createNumbers(){
    const arr = [];
    while( arr.length < 100){
        arr.push(
            {
                id: arr.length,
                num: arr.length,
                status: false
            }
        )
    }

    return arr
}