export function sortNumber() {
    const arr = [];

    while( arr.length < 20){
        const num = Math.floor( Math.random() * 100);

        if(arr.includes(num)) continue

        arr.push(
            {
                id: arr.length,
                num,
                status: false,
            }
        )

    }
return arr
}