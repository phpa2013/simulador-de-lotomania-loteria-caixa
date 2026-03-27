export function addNumberChosen(listChosen , num){
    
    
    const exist = listChosen.some( el => el.num === num);
    
    const index = listChosen.findIndex( el => Number(el.num) === Number(num))

    if(listChosen.length === 50){
        return listChosen
    }

    if(exist){
        listChosen.splice(index, 1)
        return listChosen
    }

    listChosen.push(
        {
            id: listChosen.length,
            num: num,
            status: false

        }
    )

    return listChosen

}